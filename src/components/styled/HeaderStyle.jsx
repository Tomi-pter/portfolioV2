import styled from 'styled-components';

export const HeaderStyled = styled.header`
  width: 100%;
  position: sticky;
  top: -1px;
  background-color: var(--light);
  background-color: var(--light);
  transition: all 350ms;
  z-index: 2;

  .header {
    max-width: 90%;
    margin: auto;
    padding: 1.5rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: transparent; */

    a {
      transform: translateY(-100%);
      opacity: 0;
      transition: opacity 500ms, transform 500ms;
    }
  }
  nav {
    opacity: 0;
    transition: opacity 500ms, background-color 350ms;
  }
  .header.inView {
    a {
      transform: translateY(0);
      opacity: 1;
    }
    nav {
      opacity: 1;
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

  @media screen and (max-width: 640px) {
    nav {
      background-color: var(--light);
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
      z-index: -1;

      ul {
        list-style: none;
        padding: 0;

        li {
          margin: 4rem 0;
          padding: 0;
        }
      }
      ul,
      li,
      a {
        z-index: -1;
        opacity: 0;
        display: none;
      }
    }
    nav.open {
      width: 100vw;
      z-index: 2;
      opacity: 1;

      ul,
      li,
      a {
        z-index: 2;
        opacity: 1;
        display: block;
      }
    }
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
      color: var(--light);
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
        width: auto;
        list-style: none;
        padding: 0;

        li {
          margin: 0 1rem;
          position: relative;
          width: auto;

          a {
            width: auto;
          }
        }
        li::after {
          background-color: var(--my-blue);
          bottom: -4px;
          content: '';
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
      transition: all 350ms;

      @media screen and (min-width: 641px) {
        background-color: transparent;
      }
    }
  }
`;
