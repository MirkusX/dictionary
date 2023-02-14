import styled from "styled-components";
import { BsPlayCircle, BsSearch, BsMoon } from "react-icons/bs";
import { TextField } from "@mui/material";
import { BiBook } from "react-icons/bi";

export const MoonIcon = styled(BsMoon)``;

export const BookIcon = styled(BiBook)`
  width: 50px;
  height: 50px;
`;

export const SearchIcon = styled(BsSearch)``;

export const PlayIcon = styled(BsPlayCircle)`
  width: 70px;
  height: 70px;
  fill: purple;
`;

export const StyledButton = styled.button`
  background-color: inherit;
  border: none;
  cursor: pointer;
`;

export const StyledRowDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  text-align: left;
  ${(props) => {
    if (props.syno)
      return `
    align-items: center;
    justify-content: inherit;
    gap: 1em;
    flex-wrap: wrap;
    `;
  }}
  ${(props) => {
    if (props.navBar)
      return `
    justify-content: space-between;
    width: 50%;
    padding: 1.5em 0`;
  }}
`;

export const StyledColumnDiv = styled.div`
  text-align: left;
  width: 100%;
  ${(props) => {
    if (props.source)
      return `
    width: 50%;`;
  }}
`;

export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  border-bottom: 0.1em rgb(128, 128, 128, 0.7) solid;
  ${(props) => {
    if (props.upper)
      return `
    display: block;
    border: none;
    text-align: left;`;
  }}
`;

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const StyledH1 = styled.h1`
  font-size: 3rem;
  margin-bottom: 0;
`;

export const StyledP = styled.p`
  color: purple;
  margin: 0;
  ${(props) => {
    if (props.gray)
      return `
    color: gray;
    margin: 1;`;
  }}
  ${(props) => {
    if (props.grayCursive)
      return `
    color: gray;
    font-style: italic;
    margin: 1;`;
  }}
  ${(props) => {
    if (props.noMargin)
      return `
    color: inherit;
    margin: 0;`;
  }}
`;

export const StyledH2 = styled.h2`
  font-style: italic;
`;

export const StyledLineDiv = styled.div`
  background-color: gray;
  height: 0.1em;
  width: 100%;
  opacity: 0.3;
  margin-left: 1em;
`;

export const StyledSpan = styled.span`
  color: purple;
`;

export const StyledInput = styled(TextField)`
  width: 50%;
  border-radius: 5px;
  background-color: lightgray;
  border: none;
  padding: 0.5em;
  box-sizing: border-box;
  font-size: 1.3rem;
`;

export const StyledForm = styled.form`
  width: 100%;
`;

export const Space = styled.div`
  margin: 1em 0;
`;
