const { Socket } = require("dgram");

const http = require("http").createServer();

const io = require(''Socket.io")(hittp, {
    cors: {origin: "*"}
})

io.on("connection",) (socket) => {
    socket.on("gameDataFromHost", (data) => { }
   })
})

http.listen(8080, ( => console.log("server setup"))