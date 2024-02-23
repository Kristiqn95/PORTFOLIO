import { useRef } from "react";
import "./portfolio.scss"
import {motion, useScroll, useSpring, useTransform} from "framer-motion"

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsam odit sint odio qui! Officiis aliquam architecto quaerat unde culpa magni, esse eveniet obcaecati autem, recusandae iusto laborum a vero?",
  },
  {
    id: 2,
    title: "Next.js Blog",
    img: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsam odit sint odio qui! Officiis aliquam architecto quaerat unde culpa magni, esse eveniet obcaecati autem, recusandae iusto laborum a vero?",
  },
  {
    id: 3,
    title: "Vanilla JS App",
    img: "https://images.pexels.com/photos/1739347/pexels-photo-1739347.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsam odit sint odio qui! Officiis aliquam architecto quaerat unde culpa magni, esse eveniet obcaecati autem, recusandae iusto laborum a vero?",
  },
  {
    id: 4,
    title: "Music App",
    img: "https://images.pexels.com/photos/20116359/pexels-photo-20116359/free-photo-of-a-black-and-white-photo-of-an-acoustic-guitar.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsam odit sint odio qui! Officiis aliquam architecto quaerat unde culpa magni, esse eveniet obcaecati autem, recusandae iusto laborum a vero?",
  },
];

const Single = ({item}) => {

  const ref=useRef()

  const {scrollYProgress} = useScroll({target:ref,
    // offset:["end end", "start start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [-400, 400]);
    return (
      <section>
        <div className="container">
          <div className="wrapper">
            <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
            </div>
            <motion.div className="textContainer" style={{ y }}>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <button>See Demo</button>
            </motion.div>
          </div>
        </div>
      </section>
    );
}

export const Portfolio = () => {
    
    const ref = useRef();

    const {scrollYProgress} = useScroll({target:ref, offset:["end end", "start start"]})

    const scaleX = useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
    });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
}
