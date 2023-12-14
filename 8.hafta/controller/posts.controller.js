const elasticClient = require("../services/elastic-client");

exports.savePost = async (req, res) => {
  try {
    const result = await elasticClient.index({
      index: "posts",
      document: {
        title: req.body.title,
        author: req.body.author,
        content: req.body.content,
      },
    });

    res.status(201).send(result);
  } catch (error) {
    res.send(error.message);
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const result = await elasticClient.search({
      index: "posts",
      query: { match_all: {} },
    });

    res.status(200).send(result.hits.hits);
  } catch (error) {
    res.send(error.message);
  }
};

exports.updatePost = async (req, res) => {
  try {
    const result = await elasticClient.update({
      index: "posts",
      id: req.query.id,
      doc: {
        title: req.body.title,
        author: req.body.author,
        content: req.body.content,
      },
    });
    res.status(204).send(result.result);
  } catch (error) {
    res.send(error.message);
  }
};

exports.deletePost = async (req, res) => {
  try {
    const result = await elasticClient.delete({
      index: "posts",
      id: req.query.id,
    });
    res.status(204).send(result);
  } catch (error) {
    res.send(error.message);
  }
};

exports.searchPostByAuthor = async (req, res) => {
  try {
    const result = await elasticClient.search({
      index: "posts",
      query: { match_phrase: { author: req.query.author } },
    });

    res.status(200).send(result.hits.hits);
  } catch (error) {
    res.send(error.message);
  }
};
