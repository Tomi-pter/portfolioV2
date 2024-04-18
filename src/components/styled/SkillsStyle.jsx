import styled from "styled-components";

export const SkillsStyled = styled.section `
  font-family: "ComboRegular";
  padding: 5rem 0;

  .heading {
    opacity: 0;
    transform: translateY(100%);
    transition: all 500ms;
  }

  h2 {
    font-size: 30px;
    text-align: center;
    margin: 0.5rem 0;
    transition: all 350ms;
  }

  /* p {
    margin-top: 10px;
    letter-spacing: 1.2px;
    text-align: center;
    opacity: 0.4;
  } */

  .tool-marquee {
    margin-top: 20px;
    display: flex;
    overflow: hidden;
    width: 100%;
    opacity: 0;
    transform: translateY(100%);
    transition: all 500ms 500ms;

    .all-tools {
      display: flex;
      align-items: center;
      flex-shrink: 0;
      will-change: transform;
      animation-name: marquee;
      // animation-duration: 20s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      animation-play-state: running;
      &:hover {
        animation-play-state: paused;
      }

      @keyframes marquee {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }

      h3 {
        /* font-family: "PoiretOneRegular"; */
        font-size: 2rem;
        padding: 0 30px 0 46px;
        margin: 0.5rem 0;
        position: relative;
        color: var(--my-blue);

        &::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 0;
          height: 16px;
          width: 15px;
          border: 1px solid var(--dark);
          border-radius: 7px;
          transform: translateY(-50%);
          transition: all 350ms;
        }
      }
    }
  }

  &.dark {
    h2 {
      color: var(--light);
    }

    .tool-marquee {
      .all-tools {
        h3::before {
          border: 1px solid var(--light);
        }
      }
    }
  }

  &.inView {
    .heading,
    .tool-marquee {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media screen and (min-width: 641px) {
    h3 {
      font-size: 4rem;
    }
  }
`;