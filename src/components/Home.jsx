import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Skills from "./Skills";
import {
  AppContainer,
  BigMask,
  Container,
  HomeStyled,
} from "./styled/HomeStyle";
// import Theme from "./Theme";
import Work from "./Work";

function Home() {
  const openContainer = () => {
    document?.querySelector(".appCont")?.classList?.add("is-open");
    setTimeout(() => {
      document?.querySelector(".header")?.classList?.add("inView");
      document?.querySelector(".darkToggle")?.classList?.add("inView");
    }, 1200);
    setTimeout(() => {
      document?.querySelector(".me")?.classList?.add("inView");
    }, 1700);
  };

  /* Hack for Safari and viewport units */
  const calcViewportUnits = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };
  calcViewportUnits();
  window.addEventListener("resize", calcViewportUnits);

  return (
    <AppContainer className="appCont" onClick={openContainer}>
      <BigMask>
        <div className="intro">
          <p>Click me to see what lies behind ✨</p>
        </div>
        <Container className="cont">
          <HomeStyled>
            <Header />
            {/* <Theme /> */}
            <main>
              <Work />
              <Skills />
              <About />
              <Contact />
            </main>
            <Footer />
          </HomeStyled>
        </Container>
      </BigMask>
    </AppContainer>
  );
}

export default Home;
