import { useContext, useEffect, useState } from "react";
import { DataContext, SearchContext } from "../Components/Context";
import { NavBar } from "../Components/NavBar";
import { Search } from "../Components/Search";
import {
  ContainerDiv,
  PlayIcon,
  Space,
  StyledButton,
  StyledColumnDiv,
  StyledH1,
  StyledH2,
  StyledLineDiv,
  StyledP,
  StyledRowDiv,
  StyledSection,
  StyledSpan,
  StyledUl,
} from "../Components/StyledComponents";

export const Frontpage = () => {
  const { data } = useContext(DataContext);
  const [audio, setAudio] = useState();
  useEffect(() => {
    data.map((item, index) => {
      item.phonetics.slice(1, 2).map((item, index) => {
        setAudio(new Audio(item.audio));
      });
    });
  }, [data]);
  const play = () => {
    audio.play();
  };

  return (
    <StyledSection>
      <NavBar />
      <Search />
      {data.map((item, index) => {
        return (
          <>
            <ContainerDiv key={index}>
              <StyledRowDiv>
                <div>
                  <StyledH1>{item.word}</StyledH1>
                  {item.phonetics.slice(1, 2).map((item, index) => {
                    return <StyledP>{item.text}</StyledP>;
                  })}
                </div>
                <div>
                  <StyledButton onClick={() => play()}>
                    <PlayIcon />
                  </StyledButton>
                </div>
              </StyledRowDiv>
              {item.meanings.map((item, index) => {
                return (
                  <StyledColumnDiv key={index}>
                    <StyledRowDiv>
                      <StyledH2>{item.partOfSpeech}</StyledH2>
                      <StyledLineDiv />
                    </StyledRowDiv>
                    <StyledP gray>meaning</StyledP>
                    {item.definitions.map((item, index) => {
                      return (
                        <ul key={index}>
                          <li>{item.definition}</li>
                          {item.example && (
                            <StyledP grayCursive>"{item.example}"</StyledP>
                          )}
                        </ul>
                      );
                    })}
                    {item.synonyms.length > 0 && (
                      <StyledRowDiv syno>
                        <StyledP noMargin>Synonyms</StyledP>
                        {item.synonyms.map((item, index) => {
                          return <StyledP key={index}>{item}</StyledP>;
                        })}
                      </StyledRowDiv>
                    )}
                  </StyledColumnDiv>
                );
              })}
              <Space />
            </ContainerDiv>
            {item.sourceUrls.map((item, index) => {
              return (
                <StyledColumnDiv source>
                  <StyledP gray>
                    Source:
                    <a href={item} rel="norefferer">
                      {item}
                    </a>
                  </StyledP>
                </StyledColumnDiv>
              );
            })}
          </>
        );
      })}
    </StyledSection>
  );
};
