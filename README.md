## Overview

Trying out GraphQL to to learn about the code/protocol and features

## Getting Started
 
The code as it stands is just a bunch of tests at the moment.  This setup various things and then 
attempt to make GraphQL calls.  Eventually this will be expanded to start a server and respond to calls.

### Install Packages

To get up and running execute the following command to install the dependencies for the code

```
npm install 
```


### Run Tests

The following command will execute the tests

``` 
npm test
```


## Troubleshooting

### IntelliJ Upset

One issue I found is that the IntelliJ plugin seems to default to ECMAScript 5.1 and this needs changing
for some of the newer syntax under node.js versions.

Under the IntelliJ menus Settings -> Languages & Frameworks -> JavaScript change the "JavaScript Language Version" 
to ECMAScript 6.



## Investigation

### Resolvers

I'm finding the GraphQL resolvers to be damn confusing.  It's a question of how to setup the resolvers object 
so that a resolver gets called at the appropriate points that I want to do something.

At the time of writing I have the following schema

```
type Status {
  howAmI: String
}

type Ping {
  timestamp: String
  message: String
  echoString: String
  status: Status
}

type Query {
  pingQuery(echoMe: String): Ping
  statusQuery: Status
}
```

the resolvers look like this

```
  pingQuery: {
    Ping: function(args) {
      log.debug('Resolver function for pingQuery called');
      log.debug('Arguments: "%o"', args);
      return {
        timestamp: "Test",
        message: "This is a dummy",
        echoString: args.echoMe
      }
    },

    status: function(args) {
      log.debug('Resolver function for status called');
      log.debug('Arguments: "%o"', args);
      return { howAmI: "Super duper" };
    }
  }
```

Running the following query

```
      { 
        pingQuery(echoMe: "potatoe") {
          timestamp
          message
          echoString
          status {
            howAmI
          }
        } 
      }
```



## References

* List of [GraphQL bindings](https://graphql.org/code/)
* GraphQL [github](https://github.com/graphql/graphql-js/)
* Debugging with Proxy() [post](https://stackoverflow.com/questions/20147081/javascript-catch-access-to-property-of-object)
* Facebook [documentation](https://facebook.github.io/graphql/draft/#sec-Language.Document)
* Schema from [graphql-js example](https://github.com/graphql/graphql-js/blob/master/src/__tests__/starWarsSchema.js)


## History

### Setup

This project has been setup from scratch using a dummy package.json

```
{
  "name": "graphql_example_javascript",
  "description": "Basic GraphQL server and client code",
  "version": "0.1.0",
  "private": true,
  "engines": {
    "node": "8.10.x"
  },
  "dependencies": {
  }
}
```

Running the following command adds a line for GraphQL.

```
npm install graphql --save
```

This adds this line to the dependencies file

```
    "graphql": "^14.0.2"
```

Similarly running the following command adds Mocha to the dev dependencies

```
npm install mocha --save-dev
```

Adding all new packages using the same `npm` command