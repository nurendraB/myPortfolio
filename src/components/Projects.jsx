import React from "react";
import { motion } from "framer-motion";
import image1 from "../assets/Snort.jpg";
import image2 from "../assets/download.jpg";
import image3 from "../assets/ns.png";
import image4 from "../assets/Malware_Analysis.jpg";
import image5 from "../assets/Android.png";
import image6 from "../assets/Vigenere_Java.jpg";

const projects = [
  {
    id: 1,
    title: "Intrusion Detection System Implemented with Snort",
    description:
      "Configured Snort as an Intrusion Detection System (IDS) to monitor and analyze network traffic. Developed custom Snort rules to enhance detection accuracy, validated Snort for real-time threat identification, and simulated various attacks for testing. Analyzed alerts to identify and mitigate malicious activity.",
    image: image1, // image
  },
  {
    id: 2,
    title: "Quiz Web Application Development",
    description:
      "Built a responsive React-based quiz application with real-time score tracking, focusing on seamless user experience, cross-browser compatibility, and mobile responsiveness. Deployed on GitHub, showcasing collaborative development and version control best practices.",
    image: image2,
  },
  {
    id: 3,
    title: "Network Sniffer",
    description:
      "Developed a Python-based network sniffer using Scapy to capture and analyze HTTP/HTTPS traffic in real-time. The tool extracts HTTP request data, detects sensitive information, and captures SNI from TLS handshakes for HTTPS traffic. Automated the setup with dependency management to enhance deployment and usability for network security analysis.",
    image: image3,
  },
  {
    id: 4,
    title: "Memory Forensics and Malware Analysis",
    description:
      "Conducted in-depth malware and memory forensics using tools like Volatility3, MS Sysinternals, and IDA Pro. Investigated malicious artifacts such as the Zeus Banking Trojan, de-obfuscated malware samples, and generated forensic reports on persistence mechanisms and injection techniques. Dynamic analysis performed using REMnux and Cuckoo Sandbox.",
    image: image4,
  },
  {
    id: 5,
    title: "Hack an Android Device by Creating Binary Payloads",
    description:
      "Developed and tested binary payloads to exploit vulnerabilities in Android applications, enhancing skills in exploit development and binary manipulation. Employed Metasploit for payload generation and execution in controlled testing environments. Analyzed the effectiveness of payloads and identified potential security risks in Android devices.",
    image: image5,
  },
  {
    id: 6,
    title: "Vigenère Cipher Implementation",
    description:
      "Developed a Java-based encryption and decryption application using the Vigenère Cipher algorithm to enable secure text transmission. Implemented efficient functions for both encryption and decryption processes based on user-provided keys, ensuring accuracy. Designed an intuitive interface that displays both encrypted and decrypted text, enhancing user experience and demonstrating proficiency in programming and cryptography concepts.",
    image: image6,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="container my-5">
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}>
        My Projects
      </motion.h2>
      <div className="row">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="col-md-4 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: project.id * 0.2 }}>
            <div className="card shadow">
              <img
                src={project.image}
                className="card-img-top"
                alt={`${project.title} image`}
              />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
