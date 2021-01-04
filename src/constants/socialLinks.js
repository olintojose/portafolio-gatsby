import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaGitSquare,
  FaInstagram

} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://www.facebook.com/olintojose/",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/olinto-mu%C3%B1oz-11aa1229/",
  },
  {
    id: 3,
    icon: <FaGitSquare className="social-icon"></FaGitSquare>,
    url: "https://github.com/olintojose",
  },
  {
    id: 4,
    icon: <FaInstagram className="social-icon"></FaInstagram>,
    url: "https://instagram.com/olintojose",
  }

]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} target="_blank" className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
