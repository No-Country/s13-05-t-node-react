const { Router } = require("express");
const {
    allMessages,
    sendMessage,
} = require("../controllers/messageController.js");

const chatRoutes = Router();

chatRoutes.route("/:chatId").get(allMessages);
chatRoutes.route("/").post(sendMessage);

module.exports = chatRoutes;
