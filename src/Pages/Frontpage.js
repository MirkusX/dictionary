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
            </div>
          </div>
        );
      })}
    </section>
  );
};
