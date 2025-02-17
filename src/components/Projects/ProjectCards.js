import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {/* <Button variant="primary" href={props.link} target="_blank">
          <i className="cil-external-link">&nbsp;</i>
          {props.isBlog ? "View Blog" : "View Project"}
        </Button> */}
      </Card.Body>

      <div className="button-container">
        {props.githubLink && (
          <Button
            variant="primary"
            href={props.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="m-1"
          >
            GitHub
          </Button>
        )}
        {props.demoLink && (
          <Button
            variant="success"
            href={props.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="m-1"
          >
            Web Demo
          </Button>
        )}
      </div>

    </Card>
  );
}
export default ProjectCards;
