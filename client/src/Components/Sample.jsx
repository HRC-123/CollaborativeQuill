import { useState, useEffect } from "react";

import Quill from "quill";
import "quill/dist/quill.snow.css";

import { io } from "socket.io-client";

import { useParams } from "react-router-dom";

const Sample = () => {
  const [socket, setSocket] = useState();
  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],
    ["link", "image", "video", "formula"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"], // remove formatting button
    ];
    
  useEffect(() => {
    const quillServer = new Quill("#container", {
      modules: {
        toolbar: toolbarOptions,
      },
      theme: "snow",
    });
  });

  useEffect(() => {
    // const socketServer = io("https://collaborativequillserver.onrender.com");
    const socketServer = io("http://localhost:9000");
    setSocket(socketServer);

    return () => {
      socketServer.disconnect();
    };
  }, []);

  return (
    <div>
      {" "}
      <div
        id="container"
        className={`w-2/3 !px-28 !py-24 bg-white shadow-xl !my-[20px] !mx-auto min-h-screen
          `}
      ></div>
    </div>
  );
};

export default Sample;
