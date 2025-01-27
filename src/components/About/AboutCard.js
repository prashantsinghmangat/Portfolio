import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello! I am <span className="purple">Prashant Singh</span>, a{" "}
            <span className="purple">Senior Software Developer</span> from{" "}
            <span className="purple">Meerut, Uttar Pradesh, India</span>. 
            <br />
            <br />
            Currently, I am working at <span className="purple">Moglix.com</span>, where I specialize in building innovative solutions and delivering high-quality software that drives impactful business results.
            <br />
            <br />
            Over the years, I have developed expertise in modern technologies and best practices, helping me craft scalable and efficient software applications. My journey is fueled by a passion for continuous learning and a dedication to staying at the cutting edge of the tech industry.
          </p>

          <h5 className="purple">Outside of Work:</h5>
          <p style={{ textAlign: "justify" }}>
            When I'm not coding, I enjoy engaging in activities that keep me energized and creative:
          </p>
          <ul>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Playing Cricket
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Traveling to explore new places
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Cycling and staying active
            </li>
          </ul>

          <h5 className="purple">Contact Me:</h5>
          <p style={{ textAlign: "justify" }}>
           Email: Prashantsinghmangat5@gmail.com <br></br>
           Phone: 8360334018
          </p>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Opportunities are like sunrises. If you wait too long, you will miss them."
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;