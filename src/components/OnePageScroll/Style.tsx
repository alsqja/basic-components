import styled, { keyframes } from "styled-components";
import "./fonts.css";

export const PageContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  :nth-child(1) {
    background-color: rgb(250, 250, 250);
  }
  :nth-child(2) {
    background-color: rgb(240, 240, 240);
  }
  :nth-child(3) {
    background-color: rgb(230, 230, 230);
  }
  :nth-child(4) {
    background-color: rgb(220, 220, 220);
  }
`;

const swing = keyframes`
  20% {
    transform: rotate(15deg);
  }
  40% {
    transform: rotate(-10deg);
  }
  60% {
    transform: rotate(5deg);
  }
  80% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }`;

export const TextDiv = styled.div`
  font-size: 5rem;
  font-family: "ParkYongJun";
  &.action {
    animation: ${swing} 1s linear;
  }
`;
