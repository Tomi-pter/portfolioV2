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
    /* background: #005aa7;  */
    /* fallback for old browsers */
    /* background: -webkit-linear-gradient(
      to right,
      #fffde4,
      #005aa7
    );  */
    /* Chrome 10-25, Safari 5.1-6 */
    /* background: linear-gradient(
      to right,
      #fffde4,
      #005aa7
    ); */
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    background-color: var(--light);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 1.2s cubic-bezier(0.55, 0.02, 0.25, 1.02);

    /* @keyframes rainbow {
      0% {
        background-position: 0% 82%;
      }
      50% {
        background-position: 100% 19%;
      }
      100% {
        background-position: 0% 82%;
      }
    } */

    p {
      width: 20ch;
      font-size: clamp(0.9rem, 2vw, 35px);
      font-weight: 800;
      color: whitesmoke;
      background-color: #78f391;
      background-image: linear-gradient(45deg, #f36d93, #07566c);
      background-size: 100%;
      background-clip: text;
      -webkit-background-clip: text;
      -moz-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-text-fill-color: transparent;
    }
  }
`;

export const Container = styled.div`
  background-color: whitesmoke;
  background-color: var(--light);
  transition: all 350ms;

  &.dark {
    background-color: var(--dark);
  }
`;
export const HomeStyled = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;
