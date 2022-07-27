import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {
        origin: "*",
    }
});

// Handle socketio connections
io.on('connection', (socket) => {
    console.log('New client connected. Socket ID: ' + socket.id);

    socket.on("disconnect", reason => {
        console.log('Client disconnected. Socket ID: ' + socket.id);
    });

    socket.on("I", data => {
        socket.broadcast.emit("sI", data);
    });

    socket.on("II", data => {
        socket.broadcast.emit("sII", data);
    });

    socket.on("III", data => {
        socket.broadcast.emit("sIII", data);
    });

    socket.on("aVR", data => {
        socket.broadcast.emit("saVR", data);
    });

    socket.on("aVL", data => {
        socket.broadcast.emit("saVL", data);
    });

    socket.on("aVF", data => {
        socket.broadcast.emit("saVF", data);
    });

    socket.on("V1", data => {
        socket.broadcast.emit("sV1", data);
    });

    socket.on("V2", data => {
        socket.broadcast.emit("sV2", data);
    });

    socket.on("V3", data => {
        socket.broadcast.emit("sV3", data);
    });

    socket.on("V4", data => {
        socket.broadcast.emit("sV4", data);
    });

    socket.on("V5", data => {
        socket.broadcast.emit("sV5", data);
    });

    socket.on("V6", data => {
        socket.broadcast.emit("sV6", data);
    });

    socket.on("II Large", data => {
        socket.broadcast.emit("sIILarge", data);
    });

    socket.on("8171", data => {
        // console.log(data);
        socket.broadcast.emit("8171", data);
    });

    socket.on("8172", data => {
        // console.log(data);
        socket.broadcast.emit("8172", data);
    });

    socket.on("8173", data => {
        // console.log(data);
        socket.broadcast.emit("8173", data);
    });

    socket.on("8174", data => {
        // console.log(data);
        socket.broadcast.emit("8174", data);
    });

    socket.on("8175", data => {
        // console.log(data);
        socket.broadcast.emit("8175", data);
    });

    socket.on("8176", data => {
        // console.log(data);
        socket.broadcast.emit("8176", data);
    });

    socket.on("8177", data => {
        // console.log(data);
        socket.broadcast.emit("8177", data);
    });

    socket.on("8178", data => {
        // console.log(data);
        socket.broadcast.emit("8178", data);
    });

    socket.on('force_disconnect', function () {
        socket.disconnect();
    });
});

io.listen(9990);
console.log("Server listening...");