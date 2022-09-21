import styled from "styled-components";

export const AboutStyled = styled.section`
  max-width: 80%;
  margin: 2rem auto;
  padding: 2rem 0;
  text-align: center;
  border: 1px solid black;
  position: relative;
  color: var(--dark);
  transition: color 350ms, border 350ms, opacity 500ms, transform 500ms;
  opacity: 0;
  transform: translateY(100%);

  article {
    width: 90%;
    margin-inline: auto;
  }

  span {
    color: var(--my-blue);
  }

  .outline {
    position: absolute;
    border: 1px solid black;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 350ms;
  }

  .vert {
    position: absolute;
    left: 0;
    top: -25px;
    font-family: "HandleeRegular";
  }

  .vert::after {
    content: "";
    height: 0.25px;
    width: 50px;
    background-color: black;
    position: absolute;
    top: 50%;
    margin-left: 0.25rem;
    transition: all 350ms;
  }

  @media screen and (min-width: 641px) {
    .vert {
      writing-mode: vertical-rl;
      margin: 0.5rem 0;
      position: absolute;
      font-family: "HandleeRegular";
      left: 0;
      top: unset;
    }
    .vert::after {
      content: "";
      height: 50px;
      width: 1px;
      background-color: black;
      position: absolute;
      left: 50%;
      margin-top: 0.25rem;
      top: unset;
      margin-left: unset;
    }
  }

  &.dark {
    color: whitesmoke;
    border: 1px solid whitesmoke;

    .outline {
      border: 1px solid whitesmoke;
    }

    .vert::after {
      background-color: whitesmoke;
    }
  }

  &.inView {
    opacity: 1;
    transform: translateY(0);

    .outline {
      top: -5%;
      left: -4%;
    }
    &:hover .outline {
      /* top: 0;
    left: 0; */
      inset: 0;
    }
  }
`;
