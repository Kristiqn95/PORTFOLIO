import { Sidebar } from "../sidebar/Sidebar"
import "./navbar.scss"
import {motion} from "framer-motion"

export const Navbar = () => {
  return (
    <div className="navbar">
        {/* Sidebar */}
        <Sidebar/>
        <div className="wrapper">
            <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}}>Kris Dev</motion.span>
            <div className="social">
                <a href="https://www.facebook.com/profile.php?id=100000444157737"><img src="./facebook.png" alt="" /></a>
                <a href="https://github.com/Kristiqn95"><img src="./github.png" alt="" /></a>
                <a href="https://www.linkedin.com/in/kristian-estatiev-a91a6b218/"><img src="./linkedin.png" alt="" /></a>
                <a href="https://twitter.com/KEstatiev"><img src="./twitter-x-logo.png" alt="" /></a>
            </div>
        </div>
        </div>
  )
}
