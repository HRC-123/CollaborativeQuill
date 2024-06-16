import { Server } from 'socket.io';

import Connection from './database/db.js';

import { getDocument,updateDocument } from './controller/document-controller.js';


import dotenv from "dotenv";

dotenv.config();

Connection();

const io = new Server(process.env.PORT, {
  cors: {
        origin: process.env.CLIENT,
    // origin: "https://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on('connection', socket => {

    socket.on('get-document', async documentId => {

        const document = await getDocument(documentId);

        socket.join(documentId);
        socket.emit('load-document', document.data);

        socket.on("send-changes", (delta) => {
          socket.broadcast.to(documentId).emit("receive-changes", delta);

          console.log("connected", delta);
        });

        socket.on('save-document', async data => {
            await updateDocument(documentId, data);
        })
    })

    

    
})