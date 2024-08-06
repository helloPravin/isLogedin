import Logo from "./assets/Cherry.svg";
import Header from "./Header.jsx";
import Description from "./Description.jsx";
import Project from "./microProject1.jsx";
import Code from "./Code.jsx";
import Footer from "./Footer.jsx";

let projectTitle = "only10Apples";
const projectDescription =
  "You can transfer apples from right to left basket & vice versa. But you have only 10 apples do do so.";
const projectCode = `import { useState } from "react";
import Cherry from "./assets/Cherry.svg";

function Apples() {
  let totalApples = 10;

  let [rightBasketCount, setRightBasketCount] = useState(totalApples);
  let sendRight = () => {
    if (rightBasketCount != 0) {
      setLeftBasketCount(++leftBasketCount);
      setRightBasketCount(totalApples - leftBasketCount);
    }
  };
  let [leftBasketCount, setLeftBasketCount] = useState(0);
  let sendLeft = () => {
    if (leftBasketCount != 0) {
      setRightBasketCount(++rightBasketCount);
      setLeftBasketCount(totalApples - rightBasketCount);
    }
  };
  return (
    <>
      <div className="m-auto flex flex-col items-center justify-center text-3xl font-bold text-white sm:flex-row sm:space-x-6">
        <div className="m-2 flex flex-col items-center text-center">
          <div className="h-12 w-12">
            <img src={Cherry} />
          </div>
          <div className="h-24 w-36 rounded-b-full border border-red-500 bg-red-700">
            {rightBasketCount}
          </div>
        </div>

        <button
          onClick={sendLeft}
          className="m-2 rotate-90 rounded-lg border border-gray-500 bg-gray-700 px-2 py-1 sm:rotate-0"
        >
          👈
        </button>
        <button
          onClick={sendRight}
          className="m-2 rotate-90 rounded-lg border border-gray-500 bg-gray-700 px-2 py-1 sm:rotate-0"
        >
          👉
        </button>

        <div className="m-2 flex flex-col items-center text-center">
          <div className="h-12 w-12">
            <img src={Cherry} />
          </div>
          <div className="h-24 w-36 rounded-b-full border border-red-500 bg-red-700">
            {leftBasketCount}
          </div>
        </div>
      </div>
    </>
  );
}
export default Apples;
`;
function App() {
  return (
    <>
      <Header projectLogo={Logo} projectTitle={projectTitle} />
      <Description
        projectTitle={projectTitle}
        projectLogo={Logo}
        projectDescription={projectDescription}
      />
      <div className="my-12">
        <Project />
      </div>
      <Code projectCode={projectCode} />
      <Footer />
    </>
  );
}

export default App;
