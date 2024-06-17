import { useState, useEffect } from "react";

import Quill from "quill";
import "quill/dist/quill.snow.css";

import { io } from "socket.io-client";

import { useParams } from "react-router-dom";

import Name from "./Name";
import Share from "./Share";
import Loader from "./Loader";

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

const Editor = () => {
  const [socket, setSocket] = useState();
  const [quill, setQuill] = useState();
  const { id } = useParams();
  const [name, setName] = useState("Untitled Document");
  const [visibility, setVisibility] = useState(false);
  const [bg, setBg] = useState(false);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const quillServer = new Quill("#container", {
      modules: {
        toolbar: toolbarOptions,
      },
      theme: "snow",
    });

    quillServer.disable();
    quillServer.setText("Loading the document........");

    setQuill(quillServer);
  }, []);

  useEffect(() => {
    const socketServer = io("https://collaborativequillserver.onrender.com");
    // const socketServer = io("http://localhost:9000");
    setSocket(socketServer);

    return () => {
      socketServer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket === null || quill === null) return;
    const handleChange = (delta, oldData, source) => {
      if (source !== "user") return;

      socket && socket.emit("send-changes", { name: name, delta: delta });
    };

    quill && quill.on("text-change", handleChange);

    return () => {
      quill && quill.off("text-change", handleChange);
    };
  }, [quill, socket]);

  useEffect(() => {
    if (socket === null || quill === null) return;
    const handleChange = (delta, name) => {
      setName(name);
      quill.updateContents(delta);
    };

    socket && socket.on("receive-changes", handleChange);

    return () => {
      socket && socket.off("receive-changes", handleChange);
    };
  }, [quill, socket]);

  useEffect(() => {
    if (quill === null || socket === null) return;

    socket &&
      socket.once("load-document", ({ document, Name }) => {
        console.log("........", document, Name);
        quill && quill.setContents(document);
        setName(Name);
        quill && quill.enable();
        quill.setSelection(0, 0);
      });

    console.log(id, name);

    socket && socket.emit("get-document", { documentId: id, name: name });
  }, [quill, socket, id]);

  useEffect(() => {
    if (socket === null || quill === null) return;

    const interval = setInterval(() => {
      socket &&
        socket.emit("save-document", { name: name, data: quill.getContents() });
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [socket, quill, name]);

  return (
    <div className={`w-full bg-gray-100 ${bg ? "blur-parent" : ""}`}>
      <Name
        name={name}
        setName={setName}
        visibility={visibility}
        setVisibility={setVisibility}
        bg={bg}
        setBg={setBg}
      />

      <div
        id="container"
        className={`w-2/3 !px-28 !py-24 bg-white shadow-xl !my-[20px] !mx-auto min-h-screen ${
          bg ? "blur-sm" : ""
        }`}
      ></div>

      {visibility && !load ? ( 
        <div className="fixed top-1/3 left-[20%] ml-20">
          <Share
            visibility={visibility}
            setVisibility={setVisibility}
            bg={bg}
            setBg={setBg}
            name={name}
          />
        </div>
      ) : (
        <div><Loader /></div> 
      )}
    </div>
  );

};

export default Editor;
