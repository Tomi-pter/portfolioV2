import styled from "styled-components";

export const ContactStyled = styled.section`
  max-width: 90%;
  margin: 3rem auto;
  padding: 2rem 0 2rem;
  opacity: 0;
  transform: translateY(100%);
  transition: color 350ms, opacity 500ms, transform 500ms;

  h3,
  p {
    text-align: center;
  }

  h3 span {
    color: var(--my-blue);
  }

  h3:hover .wave {
    animation: shake 2.5s infinite;
    transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
    display: inline-block;
  }

  form {
    display: flex;
    flex-direction: column;
    position: relative;

    * {
      margin: 0.5rem auto;
    }

    input,
    textarea {
      padding: 0.5rem;
      border: 0.5px solid black;
      width: 90%;
      font-family: "ComboRegular";
      transition: all 350ms;
      background-color: var(--light);
    }

    button {
      width: 50%;
      margin: 0.5rem auto;
      padding: 0.5rem 0.25rem;
      background-color: black;
      border: 1px solid black;
      position: relative;
      overflow: hidden;
      transition: all 350ms;

      span {
        color: var(--light);
        position: relative;
      }

      .slide {
        width: 100%;
        height: 130%;
        left: -200px;
        background-color: var(--light);
        position: absolute;
        transition: all 0.35s ease-Out;
        bottom: -15px;
        margin: 0.5rem 0;
      }
    }

    button:hover {
      span {
        color: black;
      }

      .slide {
        left: 0;
      }
    }
  }

  .error {
    color: red;
    font-size: 0.75rem;
  }

  .vert {
    display: none;
  }

  @media screen and (min-width: 641px) {
    p {
      max-width: 40ch;
      margin: 0.5rem auto;
    }

    form {
      .vert {
        writing-mode: vertical-rl;
        margin: 0.5rem 0;
        position: absolute;
        font-family: "HandleeRegular";
        left: 20%;
        display: block;
      }
      .vert::after {
        content: "";
        height: 50px;
        width: 1px;
        background-color: black;
        position: absolute;
        left: 50%;
        margin-top: 0.25rem;
      }
      input,
      textarea {
        width: 50%;
      }
      button {
        width: clamp(80px, 30%, 200px);
      }
    }
  }

  @keyframes shake {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(14deg);
    } /* The following five values can be played with to make the waving more or less extreme */
    20% {
      transform: rotate(-8deg);
    }
    30% {
      transform: rotate(14deg);
    }
    40% {
      transform: rotate(-4deg);
    }
    50% {
      transform: rotate(10deg);
    }
    60% {
      transform: rotate(0deg);
    } /* Reset for the last half to pause */
    100% {
      transform: rotate(0deg);
    }
  }

  &.dark {
    color: var(--light);

    form {
      input,
      textarea {
        color: var(--light);
        background-color: var(--dark);
        border: 0.5px solid var(--light);
      }
      input::placeholder,
      textarea::placeholder {
        color: rgba(245, 245, 245, 0.6);
      }
      .vert::after {
        background-color: var(--light);
      }

      button {
        background-color: var(--light);
        border: 1px solid var(--light);

        span {
          color: var(--dark);
        }
        .slide {
          background-color: var(--dark);
        }

        &:hover {
          span {
            color: var(--light);
          }
        }
      }
    }
  }

  &.inView {
    opacity: 1;
    transform: translateY(0);
  }
`;
