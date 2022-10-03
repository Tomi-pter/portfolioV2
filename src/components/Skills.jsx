import { useEffect } from "react";
import { SkillsStyled } from "./styled/SkillsStyle";
import { useInView } from "react-intersection-observer";

function Skills() {
  useEffect(() => {
    const skillsMarquee = document.querySelector(".all-tools");
    const marqueeDuration = skillsMarquee?.childElementCount * 3;
    const allTools = skillsMarquee?.childNodes;

    allTools?.forEach((tool) => {
      let clone = tool.cloneNode(true);
      skillsMarquee.appendChild(clone);
    });

    // skillsMarquee.style.animationName = 'marquee';
    skillsMarquee.style.animationDuration = `${marqueeDuration}s`;
  }, []);

  const { ref: toolsRef, inView: toolsVisible } = useInView({ threshold: 0.3 });

  toolsVisible && document?.querySelector(".skills")?.classList?.add("inView");

  return (
    <SkillsStyled className="skills" ref={toolsRef}>
      <div className="heading">
        <h2>Tools & Stack</h2>
      </div>

      <div className="tool-marquee">
        <div className="all-tools">
          <h3 className="tool">Reactjs</h3>
          <h3 className="tool">JavaScript(ES6+)</h3>
          <h3 className="tool">Nextjs</h3>
          <h3 className="tool">HTML/CSS</h3>
          <h3 className="tool">SCSS</h3>
          <h3 className="tool">TailwindCSS</h3>
          <h3 className="tool">Styled Components</h3>
          <h3 className="tool">Framer-motion</h3>
          <h3 className="tool">GSAP</h3>
          <h3 className="tool">Redux/Redux-Toolkit</h3>
          <h3 className="tool">GraphQL</h3>
        </div>
      </div>
    </SkillsStyled>
  );
}

export default Skills;
