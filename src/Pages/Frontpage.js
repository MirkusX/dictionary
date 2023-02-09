import { useContext, useEffect, useState } from "react";
import { DataContext } from "../Components/Context";

export const Frontpage = () => {
  const { data, setData } = useContext(DataContext);
  const [audio, setAudio] = useState();
  useEffect(() => {
    data.map((item, index) => {
      item.phonetics.slice(1, 2).map((item, index) => {
        setAudio(new Audio(item.audio));
        console.log(audio);
      });
    });
  }, []);
  const play = () => {
    audio.play();
  };

  return (
    <section>
      <div>
        <h1>Frontpage</h1>
      </div>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <div>
              <h1>{item.word}</h1>
              {item.phonetics.slice(1, 2).map((item, index) => {
                return <p>{item.text}</p>;
              })}
            </div>
            <div>
              <button onClick={() => play()}>play</button>
            </div>
            {item.meanings.map((item, index) => {
              return (
                <div key={index}>
                  <h2>{item.partOfSpeech}</h2>
                  {item.definitions.map((item, index) => {
                    console.log(item.synonyms);
                    if (item.synonyms.length === 0) {
                      item.synonyms = "none";
                    }
                    return (
                      <div key={index}>
                        <p>{item.definition}</p>
                        <p>Synomyms {item.synonyms}</p>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        );
      })}
    </section>
  );
};
