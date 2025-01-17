import React from "react";
import { motion } from "framer-motion";
import badge1 from "../assets/CEHPN.png";
import badge2 from "../assets/CEHP.png";

const achievements = [
  {
    title: "EC-Council Global Challenge Participant Badge",
    date: "12/2024",
    description:
      "Successfully completed a rigorous web infrastructure security challenge, showcasing advanced proficiency in areas such as network scanning, PHP file upload vulnerabilities, remote code execution, and credential attacks.",
    badge: badge2,
    link: "https://aspen.eccouncil.org/CompetitionBadge/VerifyCBadge?type=competition&a=4YkDUBNRAkWIjjKuJx7bxw==",
  },
  {
    title: "EC-Council Global Challenge Participant Badge",
    date: "11/2024",
    description:
      "Demonstrated proficiency in investigating and mitigating critical vulnerabilities, including OWASP Top 10 Web Application threats, fortifying web infrastructure to protect sensitive data and ensure transaction security.",
    badge: badge1,
    link: "https://aspen.eccouncil.org/CompetitionBadge/VerifyCBadge?type=competition&a=2pysGy8QHcr0rieUUDIVZg==",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="container my-5">
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}>
        Achievements
      </motion.h2>
      <div className="row">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            className="col-md-6 mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}>
            <div className="card">
              <div className="card-body text-center">
                <img
                  src={achievement.badge} //badge image
                  alt={achievement.title}
                  className="img-fluid mb-3"
                  style={{ width: "300px" }} // Adjust size as needed
                />
                <h5 className="card-title">{achievement.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {achievement.date}
                </h6>
                <p className="card-text">{achievement.description}</p>
                <a
                  href={achievement.link}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer">
                  View
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
