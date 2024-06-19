import React, { useContext } from "react";
import { Bio } from "../utils/constants";
import HeroImg from '../../img/image.jpeg';
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { headContainerAnimation } from "../utils/motion";
import './styles/global.css';
import { ThemeContext } from '../../App';

const Hero = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <>
      <div id="about" className="home-about">
        <div className="home-hero-container">
          <motion.div {...headContainerAnimation}>
            <div className="home-hero-inner-container">
              <div className="home-hero-left-container">
                <motion.div>
                  <div className="home-title">
                    Olá, eu sou<br /> {Bio.name}
                  </div>
                  <div className="home-text-loop">
                    Eu sou um
                    <div className="home-span">
                      <Typewriter
                        options={{
                          strings: Bio.roles,
                          autoStart: true,
                          loop: true,
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
                <div className="home-sub-title">{Bio.description}</div>
                <a href={Bio.resume} target="_blank" className="home-resume-button" rel="noreferrer">
                  Contato
                </a>
              </div>

              <div className="home-hero-right-container">
                <img src={HeroImg} alt="Daniel Beling" className="home-img" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
