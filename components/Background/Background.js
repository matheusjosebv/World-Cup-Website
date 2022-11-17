import classNames from "classnames";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import css from "./Background.module.scss";

const Background = ({ className }) => {
  const rootRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const page = document.querySelectorAll(`[id="page"]`);
    const root = rootRef.current;
    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: page,
          start: "top bottom",
          end: "bottom top",
          toggleActions: "restart none none reverse",
          scrub: 2,
        },
      })
      .to(root, { y: "-10%" });

    return () => {
      tl.kill();
    };
  }, []);

  return <div className={classNames(css.root, className)} ref={rootRef} />;
};

export default Background;
