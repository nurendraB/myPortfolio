import React from "react";
import { motion } from "framer-motion";

import jsLogo from "../assets/Snort.jpg";
import javaLogo from "../assets/Java.jpeg";
import reactLogo from "../assets/ReactJS.jpeg";
import metasploitLogo from "../assets/Metasploit.jpeg";
import blackarchLogo from "../assets/BlackArch.jpeg";
import burpLogo from "../assets/Burp.jpeg";
import nessusLogo from "../assets/Nessus.jpeg";
import niktoLogo from "../assets/nikto-logo.svg";
import johnLogo from "../assets/John.jpeg";
import ghidraLogo from "../assets/Ghidra.svg";
import wazuhLogo from "../assets/wazuh.png";
import zapLogo from "../assets/zap.jpeg";
import nmapLogo from "../assets/nmap.jpeg";
import clamLogo from "../assets/ClamAV.jpeg";
import sophosLogo from "../assets/sophos.jpeg";

const skills = [
  { name: "Java", logo: javaLogo },
  { name: "React", logo: reactLogo },
  { name: "Metasploit Framework", logo: metasploitLogo },
  { name: "Snort", logo: jsLogo },
  { name: "Blackarch Linux", logo: blackarchLogo },
  { name: "Burp Suite Linux", logo: burpLogo },
  { name: "Nessus", logo: nessusLogo },
  { name: "Nikto", logo: niktoLogo },
  { name: "John The Ripper", logo: johnLogo },
  { name: "Ghidra", logo: ghidraLogo },
  { name: "Wazuh SIEM", logo: wazuhLogo },
  { name: "Nmap", logo: nmapLogo },
  { name: "ClamAV", logo: clamLogo },
  { name: "Sophos Firewall", logo: sophosLogo },
  { name: "OWASP ZAP", logo: zapLogo },
];

const Skills = () => {
  return (
    <section id="skills" className="container my-5">
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.1 }}
        className="text-center">
        Skills
      </motion.h2>
      <div className="skills-container d-flex overflow-hidden position-relative">
        <motion.div
          className="skills-marquee d-flex"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 20, // Adjust speed
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            display: "flex",
            gap: "30px",
            minWidth: `${skills.length * 110}px`, // Dynamically set the width for all skills
          }}>
          {/* Repeat the skills array twice for seamless animation */}
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="skill-item text-center"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}>
              <img
                src={skill.logo}
                alt={skill.name}
                className="img-fluid rounded-circle"
                style={{ width: "80px", height: "80px" }}
              />
              <h5 className="mt-2">{skill.name}</h5>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default Skills;
