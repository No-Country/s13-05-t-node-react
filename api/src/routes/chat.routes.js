const { Router } = require("express");
const {
  accessChat,
  fetchChats,
  createGroupChat,
  removeFromGroup,
  addToGroup,
  renameGroup,
} = require("../controller/chat.controller.js");

const messageRoutes = Router();

messageRoutes.route("/").post(accessChat);
messageRoutes.route("/").get(fetchChats);
messageRoutes.route("/group").post(createGroupChat);
messageRoutes.route("/rename").put(renameGroup);
messageRoutes.route("/groupremove").put(removeFromGroup);
messageRoutes.route("/groupadd").put(addToGroup);

module.exports = messageRoutes;
