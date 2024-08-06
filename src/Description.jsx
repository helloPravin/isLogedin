function Description(props) {
  return (
    <div className="flex flex-col items-center font-mono text-xs">
      <div className="flex max-h-24 w-96 overflow-hidden rounded-xl border border-black">
        <div className="flex w-2/5 flex-col items-center">
          <div>
            <img className="h-16 w-16" src={props.projectLogo}></img>
          </div>
          <div className="h-6 w-32 overflow-hidden overflow-ellipsis text-center font-bold">
            {props.projectTitle}
          </div>
        </div>
        <div className="w-3/5 overflow-hidden overflow-y-scroll p-1">
          {props.projectDescription}
        </div>
      </div>
      <div className="w-auto rounded-b-xl border-x border-b border-black p-1">
        <span className="font-extralight">Concept Used : </span>
        <span className="font-bold">useState</span>
      </div>
    </div>
  );
}
export default Description;
