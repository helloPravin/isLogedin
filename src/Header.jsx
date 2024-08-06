function Header(props) {
  return (
    <div className="flex items-center justify-center font-mono text-3xl font-bold text-red-700 sm:text-7xl">
      <img className="h-24 w-24" src={props.projectLogo} />
      {props.projectTitle}
    </div>
  );
}
export default Header;
