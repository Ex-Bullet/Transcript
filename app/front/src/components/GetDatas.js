import React, { useEffect, useState } from "react";
import Axios from "axios";
import Counter from "./Counter";

export default function GetDatas() {
  const [words, setWords] = useState(false);
  const [wordsTimestamp, setWordsTimestamp] = useState(false);
  const source = Axios.CancelToken.source();

  useEffect(() => {
    getWordsSort();
    getWordTimestamp();
    return () => {
      source.cancel("cancel");
    };
  }, []);

  const getWordsSort = async () => {
    await Axios({
      url: "http://localhost:8080/",
    }).then((response) => {
      setWords(response.data);
    });
  };

  const getWordTimestamp = async () => {
    await Axios({
      url: "http://localhost:8080/getWords",
    }).then((response) => {
      setWordsTimestamp(response.data);
    });
  };

  const display = () => {
    return words && wordsTimestamp;
  };

  return (
    <>
      {display() && (
        <div className="App">
          <Counter />
          <p>
            {wordsTimestamp.length <= 0 ? (
              <span class="mt-2 text-gray-500"> No data found ! </span>
            ) : (
              wordsTimestamp.map((line) => {
                return line + " ";
              })
            )}
          </p>
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
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Word</th>
                <th scope="col">Start</th>
                <th scope="col">Stop</th>
              </tr>
            </thead>
            <tbody>
              {words.map((line) => {
                return (
                  <tr>
                    <td>{line.Mot}</td>
                    <td>{line.start}</td>
                    <td>{line.end}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
