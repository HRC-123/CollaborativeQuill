import {
  PropagateLoader,
  GridLoader,
  CircleLoader,
  BarLoader,
  BeatLoader,
  BounceLoader,
  ClimbingBoxLoader,
  ClipLoader,
  HashLoader,
  MoonLoader,
  PacmanLoader,
  PuffLoader,
  PulseLoader,
  RingLoader,
  RotateLoader,
  RiseLoader,
  ScaleLoader,
  SkewLoader,
  SquareLoader,
  SyncLoader,
  ClockLoader,
  DotLoader,
  FadeLoader,
} from "react-spinners";

const Loader = () => {
  const color = "#3f36d6";
  const loaderArray = [
    <BarLoader  color={color}/>,
    <BeatLoader color={color}/>,
    <BounceLoader color={color} />,
    <CircleLoader color={color} />,
    <ClipLoader color={color}/>,
    <ClockLoader color={color} />,
    <DotLoader color={color}/>,
    <FadeLoader color={color}/>,
    <GridLoader color={color}/>,
    <HashLoader color={color}/>,
    <PacmanLoader color={color}/>,
    <PropagateLoader color={color}/>,
    <PuffLoader color={color}/>,
    <PulseLoader color={color} />,
    <RingLoader color={color}/>,
    <RiseLoader color={color}/>,
    <RotateLoader color={color}/>,
    <ScaleLoader color={color} />,
    <SkewLoader color={color}/>,
    <SquareLoader color={color} />,
    <SyncLoader color={color}/>,
  ];

  const getRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

    let i = getRandomNumber(0, 20);
    
    console.log(i);

  return (
    <div className="flex flex-col justify-center items-center gap-4 border border-black p-6 h-[260px] w-[600px] rounded-lg bg-gray-100  text-blue-900">
      <div className="m-4">{loaderArray[i]}</div>
      <div className="font-mono font-medium">
        Please Wait 🙏 | Connecting to server 🙃
      </div>
      <div className="font-mono font-semibold ">
        Reload the page if disconnected for over 30 seconds 🚀
      </div>
      <div className="font-mono font-bold">Sorry for the inconvenience 😪</div>
    </div>
  );
};

export default Loader;
