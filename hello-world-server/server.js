const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const port = process.env.PORT || 8000;
const app = express();

//register middleware
app.use(bodyParser.json(), cors());
app.listen(port, () => console.log(`server is up and running at ${port}`));

// Adding Type Definitions
const typeDefinition = `
   type Query  {
      greeting: String
   }`;

// Adding resolver
const resolverObject = {
  Query: {
    greeting: () => 'Hello GraphQL  From TutorialsPoint !!'
  }
};

// bind the schema and resolver
const { makeExecutableSchema } = require('graphql-tools');
const schema = makeExecutableSchema({ typeDefs: typeDefinition, resolvers: resolverObject });


// Define Routes to Fetch Data from ReactJS/GraphiQL Application
const { graphiqlExpress, graphqlExpress } = require('apollo-server-express');
app.use('/graphql', graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));