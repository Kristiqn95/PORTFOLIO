import { useRef, useEffect, useState } from "react";
import "./services.scss"
import { motion, useInView } from 'framer-motion'

const variants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
function Services() {

  const ref = useRef();

  const isInView = useInView(ref, { margin: "-10px" })

  const [isAnimationEnabled, setIsAnimationEnabled] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < "738px") {
        setIsAnimationEnabled(false);
      } else {
        setIsAnimationEnabled(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div className="services" variants={variants} initial="initial" 
    ref={ref}
    animate={isInView && isAnimationEnabled ? "animate" : "initial"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For your</motion.b> Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsam odit sint odio qui! Officiis aliquam architecto quaerat unde culpa magni, esse eveniet obcaecati autem, recusandae iusto laborum a vero?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsam odit sint odio qui! Officiis aliquam architecto quaerat unde culpa magni, esse eveniet obcaecati autem, recusandae iusto laborum a vero?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsam odit sint odio qui! Officiis aliquam architecto quaerat unde culpa magni, esse eveniet obcaecati autem, recusandae iusto laborum a vero?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsam odit sint odio qui! Officiis aliquam architecto quaerat unde culpa magni, esse eveniet obcaecati autem, recusandae iusto laborum a vero?
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Services