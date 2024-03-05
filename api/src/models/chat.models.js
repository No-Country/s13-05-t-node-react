const { Schema, model, mongo, default: mongoose } = require("mongoose");

const chatModel = mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        chatId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        snooze: {
            type: Boolean,
            default: false,
        },
        pin: {
            type: Boolean,
            default: false,
        },
        name: String,
        username: String,
        image: String,
        lastmessage: String,
        time: String,
    },
    { timestamps: true }
);

const Chat = mongoose.model("Chat", chatModel);

module.exports = Chat;
