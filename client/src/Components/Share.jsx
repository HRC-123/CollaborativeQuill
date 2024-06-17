const Share = (props) => {

    const Done = () => {
         props.setVisibility(!props.visibility);
        props.setBg(!props.bg);
        // window.location.reload();
    }

    const Copy = () => {
        navigator.clipboard.writeText(window.location.href);
    }

  return (
    <div
      className={`border border-black p-6 h-[260px] w-[600px]  flex flex-col gap-10  rounded-lg bg-gray-100 ${
        props.visibility ? "block" : "none"
      }`}
    >
      <div className="font-medium flex gap-2 text-md justify-center">
        Share <p className="font-bolder">"{props.name}"</p>
      </div>
      <input
        type="url"
        value={window.location.href}
        className="border border-black w-full p-2.5 rounded-md text-black text-center"
      readOnly/>

      <div className="flex justify-around">
        <button
          className="border border-blue-900 text-blue-600 p-2 w-24 h-12 rounded-lg bg-white hover:bg-blue-600 hover:text-white"
          onClick={() => {
            Copy();
          }}
        >
          Copy
        </button>

        <button
          className="border border-blue-900 text-white p-2 w-24 h-12 rounded-lg bg-blue-600 hover:bg-blue-900 "
          onClick={() => {
            Done();
          }}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default Share;
