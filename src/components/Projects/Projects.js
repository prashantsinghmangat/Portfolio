import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import kmhmsimg from "../../Assets/Projects/kmhmsimg.png";
import defencelogo from "../../Assets/Projects/defencelogo.png";
import cdss from "../../Assets/Projects/cdss.jpg";
import edfiniximg from "../../Assets/Projects/edfiniximg.png";
import teelogo from "../../Assets/Projects/teelogo.png";
// import algo from "../../Assets/Projects/algo.png";
// import plant from "../../Assets/Projects/plant.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kmhmsimg}
              // isBlog={false}
              title="e-Manas Karnataka Mental Health Management System"
              description="Designing a Mental Healthcare System for Hospitals that replaces
              traditional Pen and Paper Patient Records Management. "
              // link="https://gggggggggggggggggggg"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cdss}
              isBlog={false}
              title="Clinical decision support solution (CDSS) - Cordova App"
              description="Coronavirus disease 2019 (COVID-19) has caused severe disruptions across the world. EHRC develops a clinical decision support system for the Physicians in order to help with COVID-19 on EHR.Network"
              // link="https://gggggggggggggggggggg"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={teelogo}
              isBlog={false}
              title="Teetank.in - Web App"
              description="Teetank is an emerging brand of tees. Teetank offer fashion, design, and services that enable people to be inspired and to express their own personal style making it easier to live in a more circular way."
              // link="https://gggggggggggggggggggg"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={defencelogo}
              isBlog={false}
              title="Defence Exam - Android App"
              description="Defence Exam App is a platform where one can prepare himself/herself for various Defence Exam. It provides you
              detailed information about Indian Armed Forces."
              // link="https://gggggggggggggggggggg"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={edfiniximg}
              isBlog={false}
              title="EDFINIX (School ERP ) - Android App"
              description="It is an online platform i.e. School Management System which assists in
              maintaining the school work more efficiently. It enables schools to work
              on a cloud-based ERP and helps to reduce their paperwork."
              // link="https://gggggggggggggggggggg"
            />
          </Col>
        </Row>
        {/* <h1 className="project-heading">
          My Recent <strong className="purple">Blog </strong> Posts
        </h1>
        <p style={{ color: "white" }}>Do give a read to some of my blogs</p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={algo}
              link=""
              title="Cracking Interview"
              site="gitbook.com"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={plant}
              link="https://medium.com/jovianml/plant-ai-c8fc95ed90e6"
              title="Plant AI"
              site="medium.com"
            />
          </Col>
        </Row> */}
      </Container>
    </Container>
  );
}

export default Projects;
