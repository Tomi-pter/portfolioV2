import { useEffect } from 'react';
import useStickyState from './useStickyState';
import styled from 'styled-components';
import { DarkMode } from '@styled-icons/material-rounded/DarkMode';
import { LightMode } from '@styled-icons/material-rounded/LightMode';

const ThemeStyle = styled.aside`
  position: fixed;
  top: 1.5rem;
  left: 65vw;
  z-index: 3;
  /* opacity: 0; */
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
    background-color: var(--light);
    border: 2px solid var(--dark);
  }

  svg {
    color: var(--dark);
    fill: var(--dark);
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 641px) {
    top: 80vh;
    left: 0.75vw;
    button {
      width: 50px;
      height: 50px;
    }
  }

  &.dark {
    button {
      background-color: var(--dark);
      border: 2px solid var(--light);
    }
    svg {
      color: var(--light);
      fill: var(--light);
    }
  }
`;

function Theme() {
  const [dark, setDark] = useStickyState(false, 'theme');

  useEffect(() => {
    dark && document.querySelector('.cont').classList?.add('dark');
    dark && document.querySelector('.head').classList?.add('dark');
    dark && document.querySelector('#work').classList?.add('dark');
    dark && document.querySelector('.darkToggle').classList?.add('dark');
    dark && document.querySelector('.skills').classList?.add('dark');
    dark && document.querySelector('#about').classList?.add('dark');
    dark && document.querySelector('#contact').classList?.add('dark');
    dark && document.querySelector('.foot').classList?.add('dark');
  }, [dark]);

  const handleModeToggle = () => {
    setDark(!dark);

    document?.querySelector('.cont')?.classList?.toggle('dark');
    document?.querySelector('.head')?.classList?.toggle('dark');
    document?.querySelector('#work')?.classList?.toggle('dark');
    document?.querySelector('.darkToggle')?.classList?.toggle('dark');
    document?.querySelector('.skills')?.classList?.toggle('dark');
    document?.querySelector('#about')?.classList?.toggle('dark');
    document?.querySelector('#contact')?.classList?.toggle('dark');
    document?.querySelector('.foot')?.classList?.toggle('dark');
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
