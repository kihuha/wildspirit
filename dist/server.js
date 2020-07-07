// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"schema.graphql":[function(require,module,exports) {
module.exports = {
  "kind": "Document",
  "definitions": [{
    "kind": "ObjectTypeDefinition",
    "name": {
      "kind": "Name",
      "value": "User"
    },
    "interfaces": [],
    "directives": [],
    "fields": [{
      "kind": "FieldDefinition",
      "name": {
        "kind": "Name",
        "value": "name"
      },
      "arguments": [],
      "type": {
        "kind": "NamedType",
        "name": {
          "kind": "Name",
          "value": "String"
        }
      },
      "directives": []
    }, {
      "kind": "FieldDefinition",
      "name": {
        "kind": "Name",
        "value": "email"
      },
      "arguments": [],
      "type": {
        "kind": "NamedType",
        "name": {
          "kind": "Name",
          "value": "String"
        }
      },
      "directives": []
    }, {
      "kind": "FieldDefinition",
      "name": {
        "kind": "Name",
        "value": "phone"
      },
      "arguments": [],
      "type": {
        "kind": "NamedType",
        "name": {
          "kind": "Name",
          "value": "String"
        }
      },
      "directives": []
    }]
  }, {
    "kind": "ObjectTypeDefinition",
    "name": {
      "kind": "Name",
      "value": "AuthDetails"
    },
    "interfaces": [],
    "directives": [],
    "fields": [{
      "kind": "FieldDefinition",
      "name": {
        "kind": "Name",
        "value": "user"
      },
      "arguments": [],
      "type": {
        "kind": "NamedType",
        "name": {
          "kind": "Name",
          "value": "User"
        }
      },
      "directives": []
    }, {
      "kind": "FieldDefinition",
      "name": {
        "kind": "Name",
        "value": "token"
      },
      "arguments": [],
      "type": {
        "kind": "NamedType",
        "name": {
          "kind": "Name",
          "value": "String"
        }
      },
      "directives": []
    }]
  }, {
    "kind": "ObjectTypeDefinition",
    "name": {
      "kind": "Name",
      "value": "Person"
    },
    "interfaces": [],
    "directives": [],
    "fields": [{
      "kind": "FieldDefinition",
      "name": {
        "kind": "Name",
        "value": "name"
      },
      "arguments": [],
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "String"
          }
        }
      },
      "directives": []
    }, {
      "kind": "FieldDefinition",
      "name": {
        "kind": "Name",
        "value": "age"
      },
      "arguments": [],
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Int"
          }
        }
      },
      "directives": []
    }]
  }, {
    "kind": "InputObjectTypeDefinition",
    "name": {
      "kind": "Name",
      "value": "PersonInput"
    },
    "directives": [],
    "fields": [{
      "kind": "InputValueDefinition",
      "name": {
        "kind": "Name",
        "value": "name"
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "String"
          }
        }
      },
      "directives": []
    }, {
      "kind": "InputValueDefinition",
      "name": {
        "kind": "Name",
        "value": "age"
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Int"
          }
        }
      },
      "directives": []
    }]
  }, {
    "kind": "ObjectTypeDefinition",
    "name": {
      "kind": "Name",
      "value": "Booking"
    },
    "interfaces": [],
    "directives": [],
    "fields": [{
      "kind": "FieldDefinition",
      "name": {
        "kind": "Name",
        "value": "user"
      },
      "arguments": [],
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "User"
          }
        }
      },
      "directives": []
    }, {
      "kind": "FieldDefinition",
      "name": {
        "kind": "Name",
        "value": "fromDate"
      },
      "arguments": [],
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "String"
          }
        }
      },
      "directives": []
    }, {
      "kind": "FieldDefinition",
      "name": {
        "kind": "Name",
        "value": "toDate"
      },
      "arguments": [],
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "String"
          }
        }
      },
      "directives": []
    }, {
      "kind": "FieldDefinition",
      "name": {
        "kind": "Name",
        "value": "people"
      },
      "arguments": [],
      "type": {
        "kind": "ListType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Person"
          }
        }
      },
      "directives": []
    }]
  }, {
    "kind": "ObjectTypeDefinition",
    "name": {
      "kind": "Name",
      "value": "Destination"
    },
    "interfaces": [],
    "directives": [],
    "fields": [{
      "kind": "FieldDefinition",
      "name": {
        "kind": "Name",
        "value": "id"
      },
      "arguments": [],
      "type": {
        "kind": "NamedType",
        "name": {
          "kind": "Name",
          "value": "Int"
        }
      },
      "directives": []
    }, {
      "kind": "FieldDefinition",
      "name": {
        "kind": "Name",
        "value": "name"
      },
      "arguments": [],
      "type": {
        "kind": "NamedType",
        "name": {
          "kind": "Name",
          "value": "String"
        }
      },
      "directives": []
    }, {
      "kind": "FieldDefinition",
      "name": {
        "kind": "Name",
        "value": "location"
      },
      "arguments": [],
      "type": {
        "kind": "NamedType",
        "name": {
          "kind": "Name",
          "value": "String"
        }
      },
      "directives": []
    }, {
      "kind": "FieldDefinition",
      "name": {
        "kind": "Name",
        "value": "image"
      },
      "arguments": [],
      "type": {
        "kind": "NamedType",
        "name": {
          "kind": "Name",
          "value": "String"
        }
      },
      "directives": []
    }]
  }, {
    "kind": "ObjectTypeDefinition",
    "name": {
      "kind": "Name",
      "value": "Query"
    },
    "interfaces": [],
    "directives": [],
    "fields": [{
      "kind": "FieldDefinition",
      "name": {
        "kind": "Name",
        "value": "allUsers"
      },
      "arguments": [{
        "kind": "InputValueDefinition",
        "name": {
          "kind": "Name",
          "value": "token"
        },
        "type": {
          "kind": "NonNullType",
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          }
        },
        "directives": []
      }],
      "type": {
        "kind": "ListType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "User"
          }
        }
      },
      "directives": []
    }, {
      "kind": "FieldDefinition",
      "name": {
        "kind": "Name",
        "value": "allBookings"
      },
      "arguments": [{
        "kind": "InputValueDefinition",
        "name": {
          "kind": "Name",
          "value": "token"
        },
        "type": {
          "kind": "NonNullType",
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          }
        },
        "directives": []
      }],
      "type": {
        "kind": "ListType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Booking"
          }
        }
      },
      "directives": []
    }, {
      "kind": "FieldDefinition",
      "name": {
        "kind": "Name",
        "value": "allDestinations"
      },
      "arguments": [{
        "kind": "InputValueDefinition",
        "name": {
          "kind": "Name",
          "value": "token"
        },
        "type": {
          "kind": "NonNullType",
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          }
        },
        "directives": []
      }],
      "type": {
        "kind": "ListType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Destination"
          }
        }
      },
      "directives": []
    }]
  }, {
    "kind": "ObjectTypeDefinition",
    "name": {
      "kind": "Name",
      "value": "Mutation"
    },
    "interfaces": [],
    "directives": [],
    "fields": [{
      "kind": "FieldDefinition",
      "name": {
        "kind": "Name",
        "value": "createUser"
      },
      "arguments": [{
        "kind": "InputValueDefinition",
        "name": {
          "kind": "Name",
          "value": "name"
        },
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "String"
          }
        },
        "directives": []
      }, {
        "kind": "InputValueDefinition",
        "name": {
          "kind": "Name",
          "value": "email"
        },
        "type": {
          "kind": "NonNullType",
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          }
        },
        "directives": []
      }, {
        "kind": "InputValueDefinition",
        "name": {
          "kind": "Name",
          "value": "phone"
        },
        "type": {
          "kind": "NonNullType",
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          }
        },
        "directives": []
      }, {
        "kind": "InputValueDefinition",
        "name": {
          "kind": "Name",
          "value": "password"
        },
        "type": {
          "kind": "NonNullType",
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          }
        },
        "directives": []
      }, {
        "kind": "InputValueDefinition",
        "name": {
          "kind": "Name",
          "value": "token"
        },
        "type": {
          "kind": "NonNullType",
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          }
        },
        "directives": []
      }],
      "type": {
        "kind": "NamedType",
        "name": {
          "kind": "Name",
          "value": "User"
        }
      },
      "directives": []
    }, {
      "kind": "FieldDefinition",
      "name": {
        "kind": "Name",
        "value": "login"
      },
      "arguments": [{
        "kind": "InputValueDefinition",
        "name": {
          "kind": "Name",
          "value": "email"
        },
        "type": {
          "kind": "NonNullType",
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          }
        },
        "directives": []
      }, {
        "kind": "InputValueDefinition",
        "name": {
          "kind": "Name",
          "value": "password"
        },
        "type": {
          "kind": "NonNullType",
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          }
        },
        "directives": []
      }],
      "type": {
        "kind": "NamedType",
        "name": {
          "kind": "Name",
          "value": "AuthDetails"
        }
      },
      "directives": []
    }, {
      "kind": "FieldDefinition",
      "name": {
        "kind": "Name",
        "value": "createBooking"
      },
      "arguments": [{
        "kind": "InputValueDefinition",
        "name": {
          "kind": "Name",
          "value": "email"
        },
        "type": {
          "kind": "NonNullType",
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          }
        },
        "directives": []
      }, {
        "kind": "InputValueDefinition",
        "name": {
          "kind": "Name",
          "value": "fromDate"
        },
        "type": {
          "kind": "NonNullType",
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          }
        },
        "directives": []
      }, {
        "kind": "InputValueDefinition",
        "name": {
          "kind": "Name",
          "value": "toDate"
        },
        "type": {
          "kind": "NonNullType",
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          }
        },
        "directives": []
      }, {
        "kind": "InputValueDefinition",
        "name": {
          "kind": "Name",
          "value": "people"
        },
        "type": {
          "kind": "ListType",
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "PersonInput"
            }
          }
        },
        "directives": []
      }, {
        "kind": "InputValueDefinition",
        "name": {
          "kind": "Name",
          "value": "token"
        },
        "type": {
          "kind": "NonNullType",
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          }
        },
        "directives": []
      }],
      "type": {
        "kind": "NamedType",
        "name": {
          "kind": "Name",
          "value": "Booking"
        }
      },
      "directives": []
    }]
  }],
  "loc": {
    "start": 0,
    "end": 853
  }
};
},{}],"server.ts":[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const path_1 = __importDefault(require("path"));

const fs_1 = __importDefault(require("fs"));

const apollo_server_1 = require("apollo-server");

const schema_graphql_1 = __importDefault(require("./schema.graphql"));

const bcrypt_1 = __importDefault(require("bcrypt"));

const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));

const port = process.env.PORT || 4000;
const data = JSON.parse(fs_1.default.readFileSync(path_1.default.resolve(__dirname, "../db.json"), "utf-8"));
const resolvers = {
  Query: {
    allUsers: (_, args) => {
      if (process.env.SECRET_KEY) {
        try {
          jsonwebtoken_1.default.verify(args.token, process.env.SECRET_KEY);
          return data.users;
        } catch (e) {
          return new apollo_server_1.ApolloError(e);
        }
      }

      return new apollo_server_1.ApolloError("Secret key is missing from environment");
    },
    allBookings: (_, args) => {
      if (process.env.SECRET_KEY) {
        try {
          jsonwebtoken_1.default.verify(args.token, process.env.SECRET_KEY);
          return data.bookings;
        } catch (e) {
          return new apollo_server_1.ApolloError(e);
        }
      }

      return new apollo_server_1.ApolloError("Secret key is missing from environment");
    },
    allDestinations: (_, args) => {
      if (process.env.SECRET_KEY) {
        try {
          jsonwebtoken_1.default.verify(args.token, process.env.SECRET_KEY);
          return data.destinations;
        } catch (e) {
          return new apollo_server_1.ApolloError(e);
        }
      }

      return new apollo_server_1.ApolloError("Secret key is missing from environment");
    }
  },
  Mutation: {
    createUser: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
      const userExists = data.users.filter(user => user.email === args.email || user.phone === args.phone).length === 1;

      if (!userExists) {
        const hashedPassword = yield bcrypt_1.default.hash(args.password, 8);
        const newUser = Object.assign(args, {
          password: hashedPassword
        });
        const newData = Object.assign(data, {
          users: [...data.users, newUser]
        });
        fs_1.default.writeFileSync(path_1.default.resolve(__dirname, "../db.json"), JSON.stringify(newData));
        return newUser;
      }

      return new apollo_server_1.ApolloError("User already exists");
    }),
    login: (_, args) => {
      const dbUser = data.users.filter(user => user.email === args.email);

      if (dbUser[0]) {
        if (process.env.SECRET_KEY) {
          const token = jsonwebtoken_1.default.sign(dbUser[0], process.env.SECRET_KEY);
          return {
            user: dbUser,
            token: token
          };
        }

        return new apollo_server_1.ApolloError("Secret key is missing from environment");
      }

      return new apollo_server_1.AuthenticationError("Invalid login credentials");
    },
    createBooking: (_, args) => {
      if (process.env.SECRET_KEY) {
        try {
          jsonwebtoken_1.default.verify(args.token, process.env.SECRET_KEY);
          const user = data.users.filter(user => user.email === args.email);
          const newBooking = {
            user,
            fromDate: args.fromDate,
            toDate: args.toDate,
            people: [...args.people]
          };
          const newData = Object.assign(data, {
            bookings: [...data.bookings, newBooking]
          });
          fs_1.default.writeFileSync(path_1.default.resolve(__dirname, "../db.json"), JSON.stringify(newData));
          return newBooking;
        } catch (e) {
          return new apollo_server_1.ApolloError(e);
        }
      }

      return new apollo_server_1.ApolloError("Secret key is missing from environment");
    }
  }
};
const server = new apollo_server_1.ApolloServer({
  typeDefs: schema_graphql_1.default,
  resolvers
});
server.listen(port).then(({
  url
}) => `🚀 Server is running on port ${port}`);
},{"./schema.graphql":"schema.graphql"}]},{},["server.ts"], null)
//# sourceMappingURL=/server.js.map