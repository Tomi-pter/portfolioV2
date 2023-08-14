import styled from 'styled-components';

export const WorkStyled = styled.section`
  margin: auto;
  max-width: 90%;
  overflow: hidden;

  .me {
    font-family: 'HandleeRegular';
    margin: auto;
    display: flex;
    flex-direction: column;
    min-height: 90vh;
    justify-content: center;

    .icon {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 1px solid var(--my-blue);
      display: flex;
      margin: 2rem 0;
      animation: bounce 2s infinite ease-in-out;
      position: relative;
      top: 0;
      left: 0;
      /* overflow: hidden; */
      transform: translateY(100%);
      opacity: 0;
      transition: background-color 350ms ease-in, transform 500ms 1.5s,
        opacity 500ms 1.5s, position 500ms, top 500ms, left 500ms;

      /* &:after {
        content: "";
        width: 600%;
        height: 600%;
        border: 1px solid var(--my-blue);
        border-radius: 50%;
        position: absolute; */
      /* top: -250%;
        left: -250%; */
      /* inset: -250%;
        transition: all 350ms;
      } */

      /* .slide {
        width: 135%;
        height: 135%;
        inset: -135%;
        border-radius: 50%;
        background-color: var(--my-blue);
        transition: all 350ms ease-Out;
        position: absolute;
      } */

      svg {
        width: 20px;
        height: 20px;
        z-index: 1;
        color: var(--my-blue);
        fill: var(--my-blue);
        /* fill: black; */
        margin: auto;
        transition: all 350ms;
      }
    }
    .icon:first-of-type {
      align-self: flex-end;
    }
    .icon:hover {
      border-color: transparent;
      background-color: var(--my-blue);

      /* &:after {
        scale: 0.1;
        transform: scale(0.1);
      } */

      /* .slide {
        inset: 0;
        transform: translateX(-25%) translateY(-10%);
      } */

      svg {
        color: white;
        fill: white;
      }
    }

    p {
      text-transform: uppercase;
      font-weight: 800;
      font-size: 1rem;
      padding: 0.5rem;
      width: max-content;
      margin: 0.25rem 0;
      color: var(--dark);
      opacity: 0;
      transform: translateY(100%);
      transition: color 350ms, opacity 500ms, transform 500ms;
      font-family: 'FredokaOneRegular', cursive;
      font-size: clamp(20px, 6vw, 40px);
      overflow-wrap: break-word;
    }
    p:first-of-type {
      color: var(--my-blue);
    }
    p:nth-of-type(2) {
      /* transition-delay: 500ms; */
      transition: color 350ms, opacity 500ms 500ms, transform 500ms 500ms;
    }
    p:last-of-type {
      /* transition-delay: 1s; */
      transition: color 350ms, opacity 500ms 1s, transform 500ms 1s;
    }
  }

  .me.inView {
    p {
      /* animation: typing 3.5s steps(65, end), blink-caret 0.5s step-end 1s; */
      border-right: none;
      overflow: hidden;
      white-space: nowrap;
      opacity: 1;
      transform: translateY(0);
      /* text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5); */
    }

    .icon {
      transform: translateY(0);
      opacity: 1;

      &.side {
        position: fixed;
        top: 50vh;
      }
      &.side:first-of-type {
        left: 1.5vw;
      }
      &.side:last-of-type {
        left: 91.5vw;
      }
    }

    /* The typing effect */
    @keyframes typing {
      from {
        width: 0;
        /* opacity: 0; */
      }
      to {
        width: 100%;
        /* opacity: 1; */
      }
      1% {
      }
    }

    /* The typewriter cursor effect */
    @keyframes blink-caret {
      from,
      to {
        border-color: transparent;
      }
      50% {
        border-color: var(--dark);
      }
    }
  }

  p {
    text-align: center;
  }

  .works {
    width: 100%;
    position: relative;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .vert {
    position: absolute;
    left: 0;
    top: -5px;
    margin-left: 5%;
    font-family: 'HandleeRegular';
  }

  .vert::after {
    content: '';
    height: 0.25px;
    width: 50px;
    background-color: black;
    position: absolute;
    top: 50%;
    margin-left: 0.25rem;
  }

  .specific {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    width: 90%;
    margin: 0 auto;
    height: 470px;
    opacity: 0;
    transform: translateY(20px);
    transition: all 500ms;

    .name {
      display: flex;
      background-color: black;
      color: var(--light);
      transition: background-color 350ms;

      div {
        margin: auto 1rem;
      }
      p {
        text-align: left;
        font-family: 'PoiretOneRegular';
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        color: var(--light);
      }
      .links {
        display: flex;
        gap: 0.5rem;
        margin-bottom: 1rem;
      }
      svg {
        width: 20px;
        height: 20px;
        color: var(--light);

        &:hover {
          color: var(--my-blue);
        }
      }
    }
    .img {
      height: auto;
      overflow: hidden;

      img {
        width: 81vw;
        height: auto;
        object-fit: cover;
      }
    }

    .work0 {
      height: 30vh;
      background-color: #f2f3de;
      display: grid;
      place-items: center;
      img {
        margin: auto;
      }
    }
  }
  .specific.inView {
    opacity: 1;
    transform: translateY(0);
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    padding: 0;
    flex-wrap: wrap;

    li {
      margin: 0.25rem;
      padding: 0.125rem 0.25rem;
      font-size: 0.7rem;
      border: 1px solid var(--light);
      color: var(--light);
    }
  }

  .works aside {
    width: 100%;
    display: flex;
    flex-direction: column;
    opacity: 0;
    transform: translateY(100%);
    transition: all 500ms;

    a {
      margin: auto;
    }

    svg {
      width: clamp(30px, 30vw, 200px);
      height: clamp(30px, 20vh, 200px);
      color: var(--dark);
    }
    svg,
    p {
      transition: all 350ms;
    }

    &.inView {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(15px);
    }
    100% {
      transform: translateY(0);
    }
  }

  @media screen and (min-width: 641px) {
    .me {
      .icon {
        width: 50px;
        height: 50px;

        svg {
          width: 30px;
          height: 30px;
        }
      }
      p {
        /* font-size: 2rem; */
        margin: 0.5rem 0;
      }
      p:first-of-type {
        text-align: left;
        align-self: flex-start;
        color: var(--my-blue);
      }
      p:nth-of-type(2) {
        /* background-color: var(--my-blue); */
        /* color: var(--light); */
        text-align: center;
        align-self: center;
      }
      p:last-of-type {
        text-align: right;
        align-self: flex-end;
      }
    }

    .vert {
      writing-mode: vertical-rl;
      margin: 0.5rem 0;
      position: absolute;
      font-family: 'HandleeRegular';
      top: unset;
    }
    .vert::after {
      content: '';
      height: 50px;
      width: 1px;
      background-color: black;
      position: absolute;
      left: 50%;
      margin-top: 0.25rem;
      top: unset;
      margin-left: unset;
    }

    .specific {
      flex-direction: row;
      height: 350px;

      .img {
        height: inherit;
        /* width: 65%; */

        img {
          height: inherit;
          width: auto;
          object-fit: contain;
        }
      }
      .work0 {
        background-color: #f2f3de;
        width: 45.5%;
        max-width: 477.27px;
        display: grid;
        place-items: center;
        img {
          width: 300px;
          margin: auto;
        }
      }

      .name {
        width: 50%;
      }
    }
  }

  @media screen and (min-width: 1000px) {
    .specific {
      .name {
        width: 35%;
      }
    }
  }

  @media screen and (min-width: 1210px) {
    .vert {
      left: 10%;
    }
    .specific {
      .img {
      }
      .name {
        width: 30%;
      }
    }
  }

  &.dark {
    .me {
      /* p:nth-of-type(2) {
        color: var(--dark);
        background-color: var(--light);
      } */
      p:first-of-type {
        color: var(--my-blue);
      }
      p {
        color: var(--light);
      }

      .icon {
        border: 1px solid var(--light);

        svg {
          fill: var(--light);
        }
        .slide {
          background-color: var(--light);
        }

        svg {
          color: var(--light);
        }

        &:hover {
          background-color: var(--light);

          svg {
            color: var(--my-blue);
            fill: var(--my-blue);
          }
        }
      }
    }

    .vert {
      color: var(--light);

      &::after {
        background-color: var(--light);
      }
    }

    .specific {
      .name {
        border: 0.25px solid var(--light);
        background-color: transparent;
      }
    }

    /* ul {
      li {
        border: 1px solid var(--dark);
        color: var(--dark);
      }
    } */
    .works aside {
      svg,
      p {
        color: var(--light);
      }
    }
  }

  /* .bg {
    position: absolute;

    svg {
      max-width: 200px;
      max-height: 200px;
    }
  } */
`;
