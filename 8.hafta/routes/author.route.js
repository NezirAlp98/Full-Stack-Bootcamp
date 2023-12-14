const express=require('express');

const controller=require("../controller");

const router=express.Router({mergeParams:true});

router.route("/author").post(controller.authorController.saveAuthor)
router.route("/author").get(controller.authorController.getAllAuthors)
router.route("/author").put(controller.authorController.updateAuthor)
router.route("/author").delete(controller.authorController.deleteAuthor)
router.route("/search-author").get(controller.authorController.searchAuthorByName)

module.exports=router;