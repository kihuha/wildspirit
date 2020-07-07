import path from "path"
import fs from "fs"
import { ApolloServer, AuthenticationError, ApolloError } from "apollo-server"
import typeDefs from "./schema.graphql"

import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const port = process.env.PORT || 4000

const data = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../db.json"), "utf-8")
)

const resolvers = {
  Query: {
    allUsers: (_: any, args: any) => {
      if (process.env.SECRET_KEY) {
        try {
          jwt.verify(args.token, process.env.SECRET_KEY)
          return data.users
        } catch (e) {
          return new ApolloError(e)
        }
      }

      return new ApolloError("Secret key is missing from environment")
    },
    allBookings: (_: any, args: any) => {
      if (process.env.SECRET_KEY) {
        try {
          jwt.verify(args.token, process.env.SECRET_KEY)
          return data.bookings
        } catch (e) {
          return new ApolloError(e)
        }
      }

      return new ApolloError("Secret key is missing from environment")
    },

    allDestinations: (_: any, args: any) => {
      if (process.env.SECRET_KEY) {
        try {
          jwt.verify(args.token, process.env.SECRET_KEY)
          return data.destinations
        } catch (e) {
          return new ApolloError(e)
        }
      }

      return new ApolloError("Secret key is missing from environment")
    },
  },
  Mutation: {
    createUser: async (_: any, args: any) => {
      const userExists =
        data.users.filter(
          (user: any) => user.email === args.email || user.phone === args.phone
        ).length === 1
      if (!userExists) {
        const hashedPassword = await bcrypt.hash(args.password, 8)
        const newUser = Object.assign(args, {
          password: hashedPassword,
        })

        const newData = Object.assign(data, { users: [...data.users, newUser] })

        fs.writeFileSync(
          path.resolve(__dirname, "../db.json"),
          JSON.stringify(newData)
        )

        return newUser
      }

      return new ApolloError("User already exists")
    },
    login: (_: any, args: any) => {
      const dbUser = data.users.filter((user: any) => user.email === args.email)
      if (dbUser[0]) {
        if (process.env.SECRET_KEY) {
          const token = jwt.sign(dbUser[0], process.env.SECRET_KEY)
          return {
            user: dbUser,
            token: token,
          }
        }
        return new ApolloError("Secret key is missing from environment")
      }

      return new AuthenticationError("Invalid login credentials")
    },

    createBooking: (_: any, args: any) => {
      if (process.env.SECRET_KEY) {
        try {
          jwt.verify(args.token, process.env.SECRET_KEY)
          const user = data.users.filter(
            (user: any) => user.email === args.email
          )

          const newBooking = {
            user,
            fromDate: args.fromDate,
            toDate: args.toDate,
            people: [...args.people],
          }

          const newData = Object.assign(data, {
            bookings: [...data.bookings, newBooking],
          })

          fs.writeFileSync(
            path.resolve(__dirname, "../db.json"),
            JSON.stringify(newData)
          )

          return newBooking
        } catch (e) {
          return new ApolloError(e)
        }
      }

      return new ApolloError("Secret key is missing from environment")
    },
  },
}

const server = new ApolloServer({ typeDefs, resolvers })

server
  .listen(port)
  .then(({ url }: any) => `🚀 Server is running on port ${port}`)
