const { Schema, model, mongo, default: mongoose } = require("mongoose");

const messageSchema = mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        chatId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        senderId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        receiverId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        message: String,
        createdAt: { type: Date, default: Date.now },
    },
    { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;
