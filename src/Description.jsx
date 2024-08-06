function Description(props) {
  return (
    <div className="flex justify-center font-mono">
      <div className="flex max-h-24 w-96 overflow-hidden rounded-xl border border-black">
        <div className="flex w-2/5 flex-col items-center">
          <div>
            <img className="h-16 w-16" src={props.projectLogo}></img>
          </div>
          <div className="h-6 w-32 overflow-hidden overflow-ellipsis text-center font-bold">
            {props.projectTitle}
          </div>
        </div>
        <div className="w-3/5 overflow-hidden overflow-y-scroll p-1 text-xs">
          {props.projectDescription}
        </div>
      </div>
    </div>
  );
}
export default Description;
