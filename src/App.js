import { useState, useEffect } from "react";
import axios from "axios";
import Meme from "./Meme";
import "./App.css";
import Csv from "./Csv";

const baseURL = "https://api.imgflip.com/get_memes";

function App() {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseURL}`)
      .then((response) => setMemes(response.data.data.memes));
  }, []);
  return (
    <>
      <Csv />
      {/* <Meme memes={memes} /> */}
    </>
  );
}

export default App;
