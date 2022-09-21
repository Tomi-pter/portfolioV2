import { useEffect } from "react";
import useStickyState from "./useStickyState";
import styled from "styled-components";
import { DarkMode } from "@styled-icons/material-rounded/DarkMode";
import { LightMode } from "@styled-icons/material-rounded/LightMode";

const ThemeStyle = styled.aside`
  position: fixed;
  top: 80vh;
  left: 1vw;
  z-index: 3;
  opacity: 0;
  transform: translateX(-100%);
  transition: all 500ms;

  &.inView {
    opacity: 1;
    transform: translateX(0);
  }

  button {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: whitesmoke;
    border: 1px solid var(--dark);
  }

  svg {
    color: var(--dark);
    fill: var(--dark);
    width: 85%;
    height: 85%;
  }

  @media screen and (min-width: 641px) {
    button {
      width: 50px;
      height: 50px;
    }
  }

  &.dark {
    button {
      background-color: var(--dark);
      border: 1px solid whitesmoke;
    }
    svg {
      color: whitesmoke;
      fill: whitesmoke;
    }
  }
`;

function Theme() {
  const [dark, setDark] = useStickyState(false, "theme");

  useEffect(() => {
    dark && document.querySelector(".cont").classList?.add("dark");
    dark && document.querySelector(".head").classList?.add("dark");
    dark && document.querySelector("#work").classList?.add("dark");
    dark && document.querySelector(".darkToggle").classList?.add("dark");
    dark && document.querySelector(".skills").classList?.add("dark");
    dark && document.querySelector("#about").classList?.add("dark");
    dark && document.querySelector("#contact").classList?.add("dark");
    dark && document.querySelector(".foot").classList?.add("dark");
  }, [dark]);

  useEffect(() => {
    setTimeout(() => {
      document?.querySelector(".darkToggle")?.classList?.add("inView");
    }, 500);
  }, []);

  const handleModeToggle = () => {
    setDark(!dark);

    document?.querySelector(".cont")?.classList?.toggle("dark");
    document?.querySelector(".head")?.classList?.toggle("dark");
    document?.querySelector("#work")?.classList?.toggle("dark");
    document?.querySelector(".darkToggle")?.classList?.toggle("dark");
    document?.querySelector(".skills")?.classList?.toggle("dark");
    document?.querySelector("#about")?.classList?.toggle("dark");
    document?.querySelector("#contact")?.classList?.toggle("dark");
    document?.querySelector(".foot")?.classList?.toggle("dark");
  };

  return (
    <ThemeStyle className="darkToggle">
      <button className="btnImg" onClick={handleModeToggle}>
        {dark ? <LightMode /> : <DarkMode />}
      </button>
    </ThemeStyle>
  );
}

export default Theme;
