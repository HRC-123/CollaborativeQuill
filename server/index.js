import { Server } from 'socket.io';

import Connection from './database/db.js';

import { getDocument,updateDocument } from './controller/document-controller.js';


import dotenv from "dotenv";

dotenv.config();

Connection();

const io = new Server(process.env.port || 9000, {
  cors: {
        origin: process.env.CLIENT,
    // origin: "http://localhost:3000",
    methods: ["GET", "POST","PUT"],
  },
});

io.on('connection', socket => {

  socket.on('get-document', async ({ documentId, name }) => {

    // console.log("Index.js", documentId, name);

    const document = await getDocument({ "id": documentId, "name": name });

    socket.join(documentId);
    socket.emit('load-document', { "document": document.data, "Name": document.name });

    socket.on("send-changes", ({name,delta}) => {
          socket.broadcast.to(documentId).emit("receive-changes", { "Name":name,"delta": delta });

          console.log("connected", name,delta);
        });

    socket.on('save-document', async ({ name, data }) => {
            await updateDocument(documentId,name, data);
        })
    })

    

    
})