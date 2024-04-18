import { WorkStyled } from "./styled/WorkStyle";
import kanban from "../assets/kanban/kanban.webp";
import pharma from "../assets/pharma/pharma_logo.svg";
import serviceUp from "../assets/serviceup/serviceup_logo.svg";
import orangeTheory from "../assets/orange/orange_logo.svg";
import homebroker from "../assets/homebroker/homebroker_logo.svg";
import affiliates from "../assets/homebroker/affliliates_logo.svg";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { Linkedin } from "@styled-icons/boxicons-logos/Linkedin";
import { OpenInNew } from "@styled-icons/material-rounded/OpenInNew";
import { useInView } from "react-intersection-observer";

function Work() {
  let interval;

  const originalName = "Aiyeniko Tomi Peter.";

  const randomInt = (max) => Math.floor(Math.random() * max);
  const randomFromArray = (array) => array[randomInt(array.length)];

  const scrambleText = (text) => {
    const chars = "*?><[]&@#)(.%$-_:/;?!".split("");
    return text
      .split("")
      .map((x) => (randomInt(3) > 1 ? randomFromArray(chars) : x))
      .join("");
  };

  const scramble = (e) => {
    let name = document.querySelector(`.${e.target.className}`);
    let nameClass = document.querySelector(`.${e.target.className}`).className;

    nameClass === "name" &&
      (interval = setInterval(
        () => (name.textContent = scrambleText(originalName)),
        125
      ));
  };

  const unscramble = (e) => {
    let name = document.querySelector(`.${e.target.className}`);
    // let nameClass = document.querySelector(`.${e.target.className}`).className;

    clearInterval(interval);
    name.textContent = originalName;
  };

  const works = [
    {
      name: "HomeBroker Trading Platform",
      desc: "Trade binary options at Home Broker. Trade the most popular assets with profitability of up to 90%. Practice with a demo account or switch to real account.",
      tools: [
        "Next.js",
        "MaterialUI",
        "TypeScript",
        "AmCharts",
        "React Query",
        "Zustand",
      ],
      img: homebroker,
      live: "https://www.homebroker.com/en",
    },
    {
      name: "HomeBroker Affiliates Platform",
      desc: "Earn up to 80% in commissions. Are you ready to tap into a world of earning potential? Join our Affiliate Program and transform your network into revenue!",
      tools: [
        "Next.js",
        "MaterialUI",
        "TypeScript",
        "AmCharts",
        "React Query",
        "Zustand",
      ],
      img: affiliates,
      live: "https://affiliates.homebroker.com/en",
    },
    {
      name: "ServiceUp",
      desc: "ServiceUp is the easiest way to get your car repaired. Sit back and relax while we pick up, repair, and drop your car back off to you.",
      tools: ["Webflow", "GSAP", "JavaScript", "Zapier", "Tally", "Lottie"],
      img: serviceUp,
      live: "https://www.serviceup.com/",
    },
    {
      name: "PremierPharma WebSite & WebApp",
      desc: "The pharmaceutical wholesaler you trust.",
      tools: [
        "Webflow",
        "React.js",
        "Redux",
        "SCSS",
        "Styled Components",
        "JQuery",
        "React Router",
        "GSAP",
      ],
      img: pharma,
      live: "https://www.premierpharma.com/",
    },
    {
      name: "OrangeTheory Fitness",
      desc: "Group Fitness Classes & Heart–Rate-Based Interval Training. Workout Classes Designed to Give a Full Body Workout in a Supportive Environment.",
      tools: ["Webflow", "JQuery", "Lottie", "JavaScript", "Tally"],
      img: orangeTheory,
      live: "https://www.orangetheory.com/en-us",
    },
    {
      name: "Kanban Task Management App",
      desc: "Create boards with specific tasks, sort into groups and break into subtasks, drag and drop tasks. The perfect productivity tool.",
      tools: [
        "TypeScript",
        "React.js",
        "Redux",
        "Styled Components",
        "React-beautiful-dnd",
      ],
      img: kanban,
      github: "https://github.com/Tomi-pter/kanban-ts.git",
      live: "https://tomi-task-manager.netlify.app/",
    },
  ];

  const { ref: meRef, inView: meVisible } = useInView({
    rootMargin: "0px 0px 20px 0px",
  });
  const { ref: work1Ref, inView: work1Visible } = useInView({ threshold: 0.5 });
  const { ref: work2Ref, inView: work2Visible } = useInView({ threshold: 0.3 });
  const { ref: work3Ref, inView: work3Visible } = useInView({ threshold: 0.3 });
  const { ref: work4Ref, inView: work4Visible } = useInView({ threshold: 0.3 });
  const { ref: work5Ref, inView: work5Visible } = useInView({ threshold: 0.3 });
  const { ref: work6Ref, inView: work6Visible } = useInView({ threshold: 0.3 });
  // const { ref: asideRef, inView: asideVisible } = useInView();
  // const { ref: icon1Ref, inView: icon1Visible } = useInView({
  //   // rootMargin: "-85px 0px 0px  0px",
  // });
  // const { ref: icon2Ref, inView: icon2Visible } = useInView({
  //   // rootMargin: " 0px 0px 85px 0px",
  // });

  meVisible &&
    document
      ?.querySelectorAll(".icon")
      .forEach((ico) => ico.classList?.remove("side"));
  !meVisible &&
    document
      ?.querySelectorAll(".icon")
      .forEach((ico) => ico.classList?.add("side"));

  work1Visible &&
    document
      ?.querySelector(".specific:first-of-type")
      ?.classList?.add("inView");
  work2Visible &&
    document
      ?.querySelector(".specific:nth-of-type(2)")
      ?.classList?.add("inView");
  work3Visible &&
    document
      ?.querySelector(".specific:nth-of-type(3)")
      ?.classList?.add("inView");
  work4Visible &&
    document
      ?.querySelector(".specific:nth-of-type(4)")
      ?.classList?.add("inView");
  work5Visible &&
    document
      ?.querySelector(".specific:nth-of-type(5)")
      ?.classList?.add("inView");
  work6Visible &&
    document?.querySelector(".specific:last-of-type")?.classList?.add("inView");
  // asideVisible &&
  //   document?.querySelector("#work aside")?.classList?.add("inView");

  // !icon1Visible &&
  //   document?.querySelector("#work .icon:first-of-type")?.classList?.add("out");
  // !icon2Visible &&
  //   document?.querySelector("#work .icon:last-of-type")?.classList?.add("out");

  // icon1Visible &&
  //   document
  //     ?.querySelector("#work .icon:first-of-type")
  //     ?.classList?.remove("out");
  // icon2Visible &&
  //   document
  //     ?.querySelector("#work .icon:last-of-type")
  //     ?.classList?.remove("out");
  // const allWorks = document?.querySelectorAll(".specific");
  // const allArr = Array.from(allWorks);
  // worksVisible && allWorks.forEach((all) => all.classList?.add("inView"));
  // !meVisible && document?.querySelector(".me")?.classList?.remove("inView");

  return (
    <WorkStyled id="work">
      <section className="me">
        <a href="https://github.com/Tomi-pter" className="icon">
          {" "}
          {/* <span className="slide"></span> */} <Github />
        </a>{" "}
        <p
          className="name"
          onMouseOver={(e) => scramble(e)}
          onMouseOut={(e) => unscramble(e)}
        >
          Aiyeniko Tomi Peter.{" "}
        </p>{" "}
        <p className="dev"> Frontend Developer </p>{" "}
        <p className="engr" ref={meRef}>
          Software Engineer <span className="rocket"> 🚀 </span>{" "}
        </p>{" "}
        <a href="https://www.linkedin.com/in/tomi-aiyeniko" className="icon">
          {" "}
          {/* <span className="slide"></span> */} <Linkedin />
        </a>{" "}
        {/* <div className="bg">
                      <Svg />
                      <Svg2 />
                    </div> */}{" "}
      </section>{" "}
      <section className="works">
        <p className="vert"> Featured </p>{" "}
        {works.map(({ name, desc, tools, img, github, live }, index) => (
          <div
            className="specific"
            key={name}
            ref={
              index === 0
                ? work1Ref
                : index === 1
                ? work2Ref
                : index === 2
                ? work3Ref
                : index === 3
                ? work4Ref
                : index === 4
                ? work5Ref
                : work6Ref
            }
          >
            <div className="name">
              <div>
                <h2> {name} </h2> <p> {desc} </p>{" "}
                <ul>
                  {" "}
                  {tools.map((tool) => (
                    <li key={tool}> {tool} </li>
                  ))}{" "}
                </ul>{" "}
                <section className="links">
                  {" "}
                  {github ? (
                    <>
                      <a href={github}>
                        <Github />
                      </a>{" "}
                      <a href={live}>
                        <OpenInNew />
                      </a>{" "}
                    </>
                  ) : (
                    <a href={live}>
                      <OpenInNew />
                    </a>
                  )}{" "}
                </section>{" "}
              </div>{" "}
            </div>{" "}
            <div className={`img work${index}`}>
              <img src={img} alt={name} />{" "}
            </div>{" "}
          </div>
        ))}{" "}
        {/* <aside ref={asideRef}>
          <a href="https://github.com/Tomi-pter">
            <Github />
          </a>{" "}
          <p> Check out my GitHub for more </p>{" "}
        </aside>{" "} */}
      </section>{" "}
    </WorkStyled>
  );
}

export default Work;
