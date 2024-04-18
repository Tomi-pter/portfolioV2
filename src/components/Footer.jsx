import { Github } from "@styled-icons/feather/Github";
import { StackOverflow } from "@styled-icons/boxicons-logos/StackOverflow";
import { Linkedin } from "@styled-icons/boxicons-logos/Linkedin";
import { Frontendmentor } from "@styled-icons/simple-icons/Frontendmentor";
import { Mailbox } from "@styled-icons/bootstrap/Mailbox";
import { Codesandbox } from "@styled-icons/feather/Codesandbox";
import { Socials } from "./styled/FooterStyle";
import { useInView } from "react-intersection-observer";

export default function Footer() {
  const { ref: footRef, inView: footVisible } = useInView({ threshold: 0.5 });

  footVisible && document?.querySelector(".foot")?.classList?.add("inView");

  return (
    <Socials className="foot" ref={footRef}>
      <div className="icons">
        <a href="https://github.com/Tomi-pter">
          <Github />
        </a>
        <a href="https://stackoverflow.com/users/16713196/tomi?tab=profile">
          <StackOverflow />
        </a>
        <a href="https://www.linkedin.com/in/tomi-aiyeniko/">
          <Linkedin />
        </a>
        <a href="https://www.frontendmentor.io/profile/Tomi-pter">
          <Frontendmentor />
        </a>
        <a href="mailto:tomiaiyeniko@gmail.com">
          <Mailbox />
        </a>
        <a href="https://codesandbox.io/u/Tomi-pter">
          <Codesandbox />
        </a>
      </div>
      <p>Designed and Built by Tomi Aiyeniko</p>
      <p>{"<TomiPter />"}</p>
    </Socials>
  );
}
