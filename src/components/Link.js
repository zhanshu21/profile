import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Link = ({ link, icon,  title}) => {
  return (
    <a
      href={link}
      target="_blank"
      className="contact-details"
      rel="noreferrer"
    >
      <FontAwesomeIcon icon={icon} /> {title}
    </a>
  );
};
