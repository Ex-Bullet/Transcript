// import logo from './logo.svg';
import "./App.css";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import Test from './testCompo';


function App() {
  const [words, setWords] = useState(false);
  const [wordsTimestamp, setWordsTimestamp] = useState(false);
  const source = Axios.CancelToken.source();

  useEffect(() => {
    getWordsSort();
    getWordTimestamp();
    return () => {
      source.cancel("cancel");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getWordsSort = async () => {
    await Axios({
      url: "http://localhost:8080/",
      responseType: "json",
      method: "get",
    }).then((response) => {
      setWords(response.data);
    });
  };

  const getWordTimestamp = async () => {
    await Axios({
      url: "http://localhost:8080/getWords",
      responseType: "json",
      method: "get",
    }).then((response) => {
      setWordsTimestamp(response.data);
    });
  };

  const display = () => {
    return words && wordsTimestamp;
  };

  console.log({ words });
  console.log(wordsTimestamp);
  return (
    <>
      {display() && (
        <div className="App">
          <header className="App-header">
            <div className="container mx-auto">
              <p>
                {words.length <= 0 ? (
                  <span class="mt-2 text-gray-500"> No data found ! </span>
                ) : (
                  words.map((line) => {
                    return line.Mot + " ";
                  })
                )}
              </p>
            </div>
            <div className="container mx-auto">
              <p>
             Noms: {display.wordsTimestamp}
              </p>
            </div>
            <Test />
          </header>
        </div>
      )}
    </>
  );
}

export default App;
