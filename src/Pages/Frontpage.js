import { useContext, useEffect, useState } from "react";
import { DataContext } from "../Components/Context";
import {
  ContainerDiv,
  StyledColumnDiv,
  StyledH1,
  StyledH2,
  StyledLineDiv,
  StyledP,
  StyledRowDiv,
  StyledSection,
  StyledSpan,
} from "../Components/StyledComponents";

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
    <StyledSection>
      <div>
        <h1>Frontpage</h1>
      </div>
      {data.map((item, index) => {
        return (
          <ContainerDiv key={index}>
            <StyledRowDiv>
              <div>
                <StyledH1>{item.word}</StyledH1>
                {item.phonetics.slice(1, 2).map((item, index) => {
                  return <StyledP>{item.text}</StyledP>;
                })}
              </div>
              <div>
                <button onClick={() => play()}>play</button>
              </div>
            </StyledRowDiv>
            {item.meanings.map((item, index) => {
              return (
                <StyledColumnDiv key={index}>
                  <StyledRowDiv>
                    <StyledH2>{item.partOfSpeech}</StyledH2>
                    <StyledLineDiv />
                  </StyledRowDiv>
                  <p>meaning</p>
                  {item.definitions.map((item, index) => {
                    return (
                      <ul key={index}>
                        <li>{item.definition}</li>
                        <p>{item.example}</p>
                      </ul>
                    );
                  })}
                  {item.synonyms.length > 0 && <p>Synonyms {item.synonyms}</p>}
                </StyledColumnDiv>
              );
            })}
          </ContainerDiv>
        );
      })}
    </StyledSection>
  );
};
