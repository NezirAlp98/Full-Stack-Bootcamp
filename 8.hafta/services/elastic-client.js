const { Client } = require("@elastic/elasticsearch");
const dotenv=require('dotenv');

dotenv.config();
const elasticClient = new Client({
  node: process.env.ELASTICSEARCH_NODE, // Elasticsearch endpoint
  auth: {
    username: process.env.ELASTICSEARCH_USER,
    password: process.env.ELASTICSEARCH_PASSWORD,
  },
});

module.exports=elasticClient;
