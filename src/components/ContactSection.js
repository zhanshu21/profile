import {  faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "./Link";

export const ContactSection = () => {
  const Links = [
    {
      link: "https://github.com/zhanshu21/Responsive-Web-Design",
      icon: faGithub,
      title: "Github",
    },
    {
      link: "https://www.linkedin.com/in/shu-zhan-6734a229a/",
      icon: faLinkedin,
      title: "LinkedIn",
    },
    {
      link: "mailto:zhanshu21@gmail.com",
      icon: faEnvelope,
      title: "Send a mail",
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <h1 className="contact-title">Let's work together...</h1>
      <p className="contact-subtitle">How do you take your coffee?</p>
      <div className="contact-grid">
        {Links.map((link, index) => (
          <Link key={index} {...link} />
        ))}
      </div>
    </section>
  );
};
