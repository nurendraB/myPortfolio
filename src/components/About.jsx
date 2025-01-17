import React from "react";
import { motion } from "framer-motion";
import Img from "../assets/file.jpg";

const About = () => {
  return (
    <section id="about" className="container my-5 text-center">
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}>
        About Me
      </motion.h2>
      <motion.img
        src={Img} // nurendra profileImage
        alt="Profile"
        className="img-fluid rounded-circle my-4 profile-photo"
        style={{ width: "150px", height: "150px" }}
        initial={{ scale: 1, rotateY: 0 }}
        whileHover={{ scale: 1.1, rotateY: 10, y: -5 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
      />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}>
        As a passionate cybersecurity professional with a B. Tech in Computer
        Science and Engineering and a minor in Cybersecurity, I specialize in
        ethical hacking, web pentesting, malware analysis, and digital
        forensics. My goal is to build secure, resilient systems and protect
        organizations from cyber threats. Certified as a Network Security
        Practitioner, SOC Analyst, AppSec Practitioner, and Jr. Penetration
        Tester, I bring a solid understanding of network defense, application
        security, and vulnerability management. I’ve worked on various projects
        such as intrusion detection using Snort, malware analysis, and
        vulnerability scanners, helping me develop practical, hands-on
        experience in threat detection and mitigation. I’m constantly expanding
        my knowledge in emerging technologies and security strategies to stay
        ahead in the field. I am eager to collaborate with teams that value
        innovation, security, and ethical responsibility.
      </motion.p>
    </section>
  );
};

export default About;
