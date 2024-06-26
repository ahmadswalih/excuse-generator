import { useEffect, useState } from "react";
import "./App.css";
import NewCard from "./components/NewCard";
import excuses from "./data/excuse.json";

const App = () => {
  const [quote, setQuote] = useState({});
  const [animate, setAnimate] = useState(false);
  const [fade, setFade] = useState(false);

  const fetchDetails = () => {
    setAnimate(true);
    const randomIndex = Math.floor(Math.random() * excuses.excuses.length);
    const randomExcuse = excuses.excuses[randomIndex];
    setQuote(randomExcuse);
    setFade(true);
  };
  const onSubmit = () => {
    fetchDetails();
  };
  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <div className="App">
      <div className="flex flex-col mt-16 md:mt-60 items-center justify-center">
        <h1 className=" text-green text-center items-center justify-center text-3xl  md:text-5xl ">
          Excuse Generator
        </h1>
        <p className="text-white text-center mt-3  font-body ">
          Dedicated to the people who want excuses for anything{" "}
        </p>
      </div>
      <div className="new">
        <NewCard
          quote={quote}
          animate={animate}
          fade={fade}
          setAnimate={setAnimate}
          setFade={setFade}
          onSubmit={onSubmit}
        />
      </div>
      <footer className="absolute mb-10  bottom-0 w-full text-center text-green">
        <a className="" href="https://ahmadswalih.com" target="_blank">
          © ahmadswalih.com ➚
        </a>
      </footer>
    </div>
  );
};

export default App;
