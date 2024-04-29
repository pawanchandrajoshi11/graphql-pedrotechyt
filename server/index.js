const express = require("express");
const app = express();

const userData = require("./MOCK_DATA.json");
const graphql = require("graphql");
const { graphqlHTTP } = require("express-graphql");

// queries are get statements
// mutations are update, delete, create statements
const RootQuery = {};
const Mutation = {};


// making a schema
const schema = new graphql.GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});

// making of server
app.use("/graphql", graphqlHTTP({ schema, graphiqlc: true }));

// defining port
app.listen(6969, () => {
  console.log("Server Running on port: 6969");
});
