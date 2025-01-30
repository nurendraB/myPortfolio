import React from "react";
import { motion } from "framer-motion";
import SOC from "../assets/Junior_Security_Analyst.png";
import CEHM from "../assets/CEHM.png";
import CNSP from "../assets/CNSP.png";
import CAP from "../assets/CAP.png";
import MERN from "../assets/Mern_Stack.jpg";

const certifications = [
  {
    title: "CEH v12 Master - EC-Council",
    date: "December 2024",
    description:
      "Certified Ethical Hacker certification demonstrating advanced penetration testing and vulnerability assessment skills.",
    image: CEHM,
    link: "https://aspen.eccouncil.org/VerifyBadge?type=certification&a=kINaSWkvawHmYvYcH1pPMvJy3hpwh7S/6VcdNFSGBiM=",
  },
  {
    title: "Certified Network Security Practitioner - The SecOps Group",
    date: "October 2024",
    description:
      "Comprehensive training in network security, focusing on intrusion detection, firewall configuration, and network defense.",
    image: CNSP,
    link: "https://candidate.speedexam.net/certificate.aspx?SSTATE=am4131EniU8ntjp4bO5mXUrR1lQdzkwPddIwZ2/SUpiw9FZ5MuvSk2e1asYYSlh1YwCngjEe3aMISjFlUVOgifDv8mdr9Ixv5feVEXeZQos=",
  },
  {
    title: "SOC Analyst - Cybrary",
    date: "October 2024",
    description:
      "Specialization in monitoring, analyzing, and responding to cybersecurity incidents in real time.",
    image: SOC,
    link: "https://app.cybrary.it/courses/api/certificate/CC-6b853189-b028-4513-96dd-0c6a393244a0/view",
  },
  {
    title: "Certified AppSec Practitioner - The SecOps Group",
    date: "October 2024",
    description:
      "Expertise in securing web applications, identifying OWASP vulnerabilities, and implementing secure coding practices.",
    image: CAP,
    link: "https://candidate.speedexam.net/certificate.aspx?SSTATE=am4131EniU8ntjp4bO5mXUamr//pZgXLw4H4wf717RJonRa+KK61/zWo2N9X9ooNDnIcBg4vcJCsVRnnTIpOvQBiFwmMBeoI0bVgP8FhUsQ=",
  },
  {
    title: "Full Stack Development (Advanced Frontend with React) - Upgrad",
    date: "July 2023",
    description:
      "Mastery in developing responsive and dynamic web applications, with a strong focus on frontend technologies like React and advanced JavaScript techniques.",
    image: MERN,
    link: "https://certificate.givemycertificate.com/c/3d47c072-c819-4926-bcd6-abefdf884edc",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="container my-5">
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-4">
        Certifications
      </motion.h2>
      <div className="row">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="col-md-6 mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.3)",
            }}>
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body text-center">
                <motion.img
                  src={cert.image}
                  alt={`${cert.title} badge`}
                  className="img-fluid mb-3 rounded-circle"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                  whileHover={{ rotate: 10 }}
                />
                <h5 className="card-title">{cert.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{cert.date}</h6>
                <p className="card-text">{cert.description}</p>
                <motion.a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  whileHover={{ scale: 1.1, backgroundColor: "#0056b3" }}>
                  View Badge/Certificate
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
