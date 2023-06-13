// server için gerekli olanları burada ayarlayın
const express = require("express");
const server = express();
server.use(express.json());
// posts router'ını buraya require edin ve bağlayın
// const postModel = require("./posts/posts-model");
const postsRouter = require("./posts/posts-router");

server.get("/", (req, res) => {
  res.send("blabla2");
});

server.use("/api/posts", postsRouter);

module.exports = server;
