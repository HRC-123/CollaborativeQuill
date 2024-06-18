const Name = (props) => {
  const handleChange = (e) => {
    props.setName(e.target.value);

    console.log(e.target.value);
  };

  const share = () => {
    props.setVisibility(!props.visibility);
    props.setBg(!props.bg);
  };

  const Logo = () => {
    window.location.reload();
  }

  return (
    <div
      className={`flex sticky top-0 z-10 bg-gray-100 justify-between ${
        props.bg ? "blur-sm" : ""
      }`}
    >
      <div className="flex">
        <img
          src="../quilllogo.jpg"
          alt="Logo"
          className="h-auto w-16 cursor-pointer mix-blend-multiply p-2"
          onClick={() => {
            Logo();
          }}
        ></img>
        <input
          value={props.name}
          className="border border-black m-2 p-2 text-center "
          onChange={(e) => handleChange(e)}
        ></input>
      </div>

      <button
        className="border border-blue-900 m-2 p-1 w-28 h- auto rounded-lg mr-5 bg-blue-600 text-white hover:bg-blue-900"
        onClick={() => share()}
        disabled={props.load ? true : false}
      >
        Share
      </button>
    </div>
  );
};

export default Name;
