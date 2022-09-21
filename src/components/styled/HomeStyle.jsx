import styled from "styled-components";

export const AppContainer = styled.div`
  filter: drop-shadow(0px 3px 7px rgba(0, 0, 0, 0.2));

  &.is-open mask {
    clip-path: inset(0 0);

    cursor: auto;
    overflow: auto;
    transition: 1.2s cubic-bezier(0.55, 0.02, 0.25, 1.02);

    .intro {
      opacity: 0;
      z-index: -1;
      transform: scale(0);
      visibility: hidden;
    }
  }
`;

export const BigMask = styled.mask`
  margin: auto;
  clip-path: inset(
    calc(45% - (var(--clipHeight) / 2)) calc(45% - (var(--clipWidth) / 2)) round
      15px
  );
  display: block;
  height: calc(var(--vh) * 100);
  cursor: pointer;
  overflow: hidden;

  .intro {
    position: absolute;
    z-index: 10;
    width: 100vw;
    height: 100vh;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: whitesmoke;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 1.2s cubic-bezier(0.55, 0.02, 0.25, 1.02);

    p {
      font-size: 0.8rem;
    }
  }
`;

export const Container = styled.div`
  background-color: whitesmoke;
  transition: all 350ms;

  &.dark {
    background-color: var(--dark);
  }
`;
export const HomeStyled = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;
