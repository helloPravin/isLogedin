import reactLogo from "./assets/react.svg";

function Footer() {
  return (
    <div className="mx-12 mt-12 flex items-center justify-center rounded-t-xl border-x border-t border-black p-1 font-mono text-xs">
      <img className="m-1 h-5 w-5" src={reactLogo} />
      This is not a cool project made by me. This is just for future reference
      for basics of React concepts💁
    </div>
  );
}
export default Footer;
