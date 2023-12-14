const express = require("express");

const { checkSchema } = require("express-validator");

const controller = require("../controller");

const router = express.Router({ mergeParams: true });

const postSchema = require("../validation/postSchema");

router.route("/posts").post(controller.postController.savePost)
// router.post(
//   "/posts",
//   checkSchema({
//     title: { notEmpty: true },
//     author: {
//       isLength: {
//         options: { min: 5 },
//       },
//     },
//     content: { notEmpty: true },
//   }),
//   controller.postController.savePost
// );
router.route("/posts").get(controller.postController.getAllPosts);
router.route("/posts").put(controller.postController.updatePost);
router.route("/posts").delete(controller.postController.deletePost);
router.route("/search-posts").get(controller.postController.searchPostByAuthor);

module.exports = router;
