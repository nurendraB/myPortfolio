import React from "react";
import { motion } from "framer-motion";

// Sample data for testing
const services = [
  {
    title: "Penetration Testing",
    description:
      "Simulating cyber-attacks to identify vulnerabilities in systems, networks, and applications to ensure robust security.",
    icon: "🕵️‍♂️",
  },
  {
    title: "Network Security",
    description:
      "Securing network infrastructures by configuring firewalls, VPNs, and other security measures to prevent unauthorized access.",
    icon: "🌐",
  },
  {
    title: "Threat Intelligence",
    description:
      "Gathering, analyzing, and acting on information about potential and active threats to enhance proactive defense strategies.",
    icon: "🔍",
  },
  {
    title: "Web Development ",
    description:
      "Building responsive and modern websites using ReactJS, with a focus on performance, user experience, and security.",
    icon: "💻",
  },
  {
    title: "Malware Analysis & Forensics",
    description:
      "Analyzing and investigating malware to understand its behavior and mitigate future attacks, along with conducting digital forensics.",
    icon: "🦠",
  },
];

const CybersecurityServices = () => {
  return (
    <section id="services" className="container my-5">
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}>
        Services
      </motion.h2>
      <div className="services-container">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            whileHover={{ scale: 1.1, rotateY: 10 }}
            whileTap={{ scale: 0.95 }}>
            <div className="service-icon">
              <span>{service.icon}</span>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CybersecurityServices;
