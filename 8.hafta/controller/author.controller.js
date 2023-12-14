const elasticClient = require("../services/elastic-client");

exports.saveAuthor = async (req, res) => {
    try {
        const result = await elasticClient.index({
          index: "search-author",
          document: {
            name: req.body.name,
            birthDay: req.body.birthDay,
          },
        });
    
        res.status(201).send(result);
      } catch (error) {
        res.send(error.message);
      }
}

exports.getAllAuthors = async (req, res) => {
    try {
        const result = await elasticClient.search({
          index: "search-author",
          query: { match_all: {} },
        });
    
        res.status(200).send(result.hits.hits);
      } catch (error) {
        res.send(error.message);
      }
}

exports.updateAuthor = async (req, res) => {
    try {
        const result = await elasticClient.update({
          index: "search-author",
          id: req.query.id,
          doc: {
            name: req.body.name,
            birthDay: req.body.birthDay,
          },
        });
        res.status(204).send(result.result);
      } catch (error) {
        res.send(error.message);
      }
}

exports.deleteAuthor = async (req, res) => {
    try {
        const result = await elasticClient.delete({
          index: "search-author",
          id: req.query.id,
        });
        res.status(204).send(result);
      } catch (error) {
        res.send(error.message);
      }
}

exports.searchAuthorByName = async (req, res) => {
    try {
        const result = await elasticClient.search({
          index: "search-author",
          query: { match_all: {_name:req.query.name} },
        });
    
        res.status(200).send(result.hits.hits);
      } catch (error) {
        res.send(error.message);
      }
}