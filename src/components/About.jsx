import { AboutStyled } from "./styled/AboutStyle";
import { useInView } from "react-intersection-observer";

function About() {
  const { ref: aboutRef, inView: aboutVisible } = useInView({ threshold: 0.1 });

  aboutVisible && document?.querySelector("#about")?.classList?.add("inView");

  return (
    <AboutStyled id="about" ref={aboutRef}>
      <div className="outline">
        <div className="vert">About Me</div>
      </div>
      <article>
        <h2>
          Developer, Problem Solver, Human and{" "}
          <span>Real (most importantly)</span>
        </h2>
        <p>
          I'm a Front-end developer & Software engineer who enjoys bringing web
          designs to life in accessible and responsive ways. I also possess a
          degree in computer science.
        </p>
        <p>
          I love innovation and I always challenge myself to learn and grow.
        </p>
        <p>
          I also enjoy watching football (man city fan), NBA (dallas mavericks),
          playing video games, taking long walks and listening to music in my
          spare time.
        </p>
      </article>
    </AboutStyled>
  );
}

export default About;
