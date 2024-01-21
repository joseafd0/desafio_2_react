import React from "react";
import {
  faFacebookF,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SocialButton.css";

const SocialButton = ({ logo }) => {
  let icon;
  switch (logo) {
    case "facebook":
      icon = <FontAwesomeIcon icon={faFacebookF} />;
      break;
    case "github":
      icon = <FontAwesomeIcon icon={faGithub} />;
      break;
    case "linkedin":
      icon = <FontAwesomeIcon icon={faLinkedinIn} />;
      break;
    default:
      icon = null;
  }

  return (
    <>
      <button className="social-button">{icon}</button>
    </>
  );
};

export default SocialButton;
