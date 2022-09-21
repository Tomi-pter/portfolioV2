import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Skills from "./Skills";
import { Container, HomeStyled } from "./styled/HomeStyle";
import Theme from "./Theme";
import Work from "./Work";

function Home() {
  return (
    <Container className="cont">
      <HomeStyled>
        <Header />
        <Theme />
        <main>
          <Work />
          <Skills />
          <About />
          <Contact />
        </main>
        <Footer />
      </HomeStyled>
    </Container>
  );
}

export default Home;
