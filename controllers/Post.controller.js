const model = require("../model");
const addPost = (req, res) => {
  model
    .addNewPost(req.body)

    .then(() => {
      res.redirect("back");
    });
};

const addLike = (req, res) => {
  model
    .createNewLike(req.body)
    .then(() => {
      res.send("succes");
    })
    .catch((error) => {
      console.log("error");
    });
};
const getLikes = (req, res) => {
  const userId = req.params.userId;
  model.getLikes(userId).then((postdata) => {
    res.render("like", {
      //user_name:
      likedposts: postdata,
    });
  });
};
module.exports = { addPost, addLike, getLikes };
