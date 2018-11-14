## Overview

Trying out GraphQL to to learn about the code/protocol and features



## References

* List of [GraphQL bindings](https://graphql.org/code/)
* GraphQL [github](https://github.com/graphql/graphql-js/)


## Troubleshooting

### IntelliJ Upset

One issue I found is that the IntelliJ plugin seems to default to ECMAScript 5.1 and this needs changing
for some of the newer syntax under node.js versions.

Under the IntelliJ menus Settings -> Languages & Frameworks -> JavaScript change the "JavaScript Language Version" 
to ECMAScript 6.



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