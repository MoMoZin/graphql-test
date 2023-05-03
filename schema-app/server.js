const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const port = process.env.PORT || 8000;
const app = express();

//register middleware
app.use(bodyParser.json(), cors());
app.listen(port, () => console.log(`server is up and running at ${port}`));

//get type defination and resolver function
const fs = require('fs');
const typeDefinition = fs.readFileSync('./schema.graphql', { encoding: 'utf-8' });
const resolverObject = require('./resolver');

// bind the schema and resolver
const { makeExecutableSchema } = require('graphql-tools');
const schema = makeExecutableSchema({ typeDefs: typeDefinition, resolvers: resolverObject });


// Define Routes to Fetch Data from ReactJS/GraphiQL Application
const { graphiqlExpress, graphqlExpress } = require('apollo-server-express');
app.use('/graphql', graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));