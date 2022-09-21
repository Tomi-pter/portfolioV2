import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  position: sticky;
  top: -1px;
  background-color: whitesmoke;
  transition: all 350ms;
  z-index: 2;

  .header {
    max-width: 90%;
    margin: auto;
    padding: 1.5rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a,
    nav {
      transform: translateY(-100%);
      opacity: 0;
      transition: background-color 350ms, opacity 500ms, transform 500ms;
    }
    nav {
      transform: translateX(100px);
    }
  }
  .header.inView {
    a,
    nav {
      transform: translateY(0);
      opacity: 1;
    }

    @media screen and (max-width: 640px) {
      nav {
        transform: translateX(100px);
      }
      nav.open {
        transform: translateX(0);
      }
    }
  }

  a {
    text-decoration: none;
    color: var(--my-blue);
  }

  .themeNav {
    display: flex;
    align-items: center;
  }

  nav {
    background-color: whitesmoke;
    height: 100vh;
    width: 0;
    position: fixed;
    top: 0;
    right: 0;
    opacity: 0;
    transition: all 350ms;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    ul {
      list-style: none;
      padding: 0;

      li {
        margin: 4rem 0;
        padding: 0;
      }
    }
  }
  nav.open {
    width: 100vw;
    z-index: 2;
    opacity: 1;
  }
  li {
    padding-inline: 0.5rem;
  }
  .resume {
    border: 1px solid var(--my-blue);
    padding: 0.5rem;
    background-color: inherit;
    border-radius: 0.25rem;
    transition: all 350ms;

    &:hover {
      background-color: var(--my-blue);
      color: whitesmoke;
    }
  }
  .btnImg {
    appearance: none;
    background: transparent;
    margin: 0 0.25rem;
    border: none;

    svg {
      color: var(--my-blue);
      fill: var(--my-blue);
      width: 25px;
      height: 25px;
    }
  }
  .menu {
    z-index: 5;
  }

  @media screen and (min-width: 641px) {
    .logo {
      font-size: 1.2rem;
    }
    nav {
      display: flex;
      align-items: center;
      justify-content: unset;
      position: relative;
      height: auto;
      inset: unset;
      width: auto;
      font-size: 1.2rem;
      opacity: 1;

      ul {
        display: flex;
        margin: unset;
        align-items: center;

        li {
          margin: 0 1rem;
          position: relative;
        }
        li::after {
          background-color: var(--my-blue);
          bottom: -4px;
          content: "";
          height: 2px;
          left: 0px;
          position: absolute;
          transform: scaleX(0);
          transition: transform 0.3s ease 0s;
          width: 100%;
        }

        li:hover::after {
          transform: scaleX(1);
          transform-origin: center;
        }
        .resume::after {
          height: 0;
          width: 0;
        }
      }
    }
    .menu {
      display: none;
    }
  }

  &.dark {
    background-color: var(--dark);
    nav {
      background-color: var(--dark);
    }
  }
`;
