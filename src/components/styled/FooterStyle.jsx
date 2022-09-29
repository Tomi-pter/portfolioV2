import styled from "styled-components";

export const Socials = styled.footer`
  padding: 2rem 0;
  max-width: 90%;
  margin: 0 auto;

  .icons {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 0 1rem;

    a {
      opacity: 0;
      transform: translateX(-100%);
      transition: all 500ms;
    }
  }
  &.inView {
    .icons {
      a {
        opacity: 1;
        transform: translateX(0);
      }
      a:nth-of-type(2) {
        transition-delay: 150ms;
      }
      a:nth-of-type(3) {
        transition-delay: 300ms;
      }
      a:nth-of-type(4) {
        transition-delay: 450ms;
      }
      a:nth-of-type(5) {
        transition-delay: 600ms;
      }
      a:nth-of-type(6) {
        transition-delay: 750ms;
      }
    }
    p {
      opacity: 1;
      transform: translateY(0);
    }
  }

  p {
    font-size: 0.8em;
    text-align: center;
    opacity: 0;
    transform: translateY(100%);
    transition: all 500ms;
  }
  svg {
    width: 1.5rem;
    color: var(--my-blue);
    transition: all 150ms;
  }
  svg:hover,
  svg:focus {
    color: var(--hover-blue);
    transform: scale(1.2);
  }

  &.dark {
    color: var(--light);
  }
`;
