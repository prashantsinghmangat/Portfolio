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
import eyecare from "../../Assets/Projects/eyecare.png";
import ltl from "../../Assets/Projects/ltl.png";
import telemanas from "../../Assets/Projects/telemanas.png";
import paperless from "../../Assets/Projects/paperless.png";

import nexGenStocksImg from "../../Assets/Projects/NexGenStocks.png";
import nexgentoolsImg from "../../Assets/Projects/nexgentools.png";
import myedusyncImg from "../../Assets/Projects/myedusync.png";
import tendersharkImg from "../../Assets/Projects/tendershark.png";
import nexgentalkImg from "../../Assets/Projects/nexgentalk.png";

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
              imgPath={nexGenStocksImg}
              githubLink="https://github.com/prashantsinghmangat/NexGenStocks"
              demoLink="https://nexgenstocks.netlify.app/"
              // isBlog={false}
              title="NexGenStocks | React App"
              description="Your trusted companion for tracking Indian stock market investments and making informed decisions. "
            // link="https://gggggggggggggggggggg"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nexgentoolsImg}
              githubLink="https://github.com/prashantsinghmangat/Nexgentools"
              demoLink="https://nexgentools.netlify.app/"
              // isBlog={false}
              title="NexgenTools | React App"
              description="Discover our collection of powerful tools designed to make your life easier. From development utilities to everyday tools, we've got you covered."
            // link="https://gggggggggggggggggggg"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myedusyncImg}
              githubLink="https://github.com/prashantsinghmangat/myedu-final"
              demoLink="https://myedu-demo.netlify.app/"
              // isBlog={false}
              title="MyEduSync | Angular App"
              description="At MyEduSync, our aim is to empower students by offering personalized tutoring that builds confidence and fosters academic excellence."
            // link="https://gggggggggggggggggggg"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nexgentalkImg}
              githubLink="https://github.com/prashantsinghmangat/NexGenStocks"
              demoLink="https://nexgenstocks.netlify.app/"
              // isBlog={false}
              title="NexGenTalk | Wordpress"
              description="Your trusted companion for tracking Indian stock market investments and making informed decisions. "
            // link="https://gggggggggggggggggggg"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tendersharkImg}
              // githubLink="https://github.com/example/project"
              demoLink="https://www.tendershark.com/"
              // isBlog={false}
              title="TenderShark | Angular App"
              description="At TenderShark, a division of Mogli Finance Limited, we picture a future in which newly established companies have access to the knowledge and resources they need to prosper through strategic participation in tenders"
            // link="https://gggggggggggggggggggg"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ltl}
              githubLink="https://github.com/example/project"
              demoLink="https://example.com/project"
              // isBlog={false}
              title="Let's Talk Life Gov | Angular App"
              description="Feel free to post your questions here, and our team of trained volunteers will be happy to provide answers. Typically takes 48 hours for a response. "
            // link="https://gggggggggggggggggggg"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={telemanas}
              // isBlog={false}
              demoLink="https://telemanas.mohfw.gov.in/home"
              title="Tele-Manas Gov  | Angular App"
              description="Tele MANAS is a comprehensive mental health care service. You can dial the Toll free numbers above to get in touch with our Counsellor."
            // link="https://gggggggggggggggggggg"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={paperless}
              // isBlog={false}
              demoLink="https://the-paperless.netlify.app/"
              title="Paper Less Invoice Management System  | Angular App"
              description="Invoice upload Management System"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eyecare}
              // isBlog={false}
              demoLink="https://www.yathartheyecare.com/"
              title="Yatharth Eye Care Website / Patient Management System  | PHP"
              description="Patient management in Hospital : https://yathartheyecare.com/"
              link="https://yathartheyecare.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kmhmsimg}
              // isBlog={false}
              demoLink="https://e-manas.karnataka.gov.in/"
              title="e-Manas Karnataka Gov. Mental Health Management System  | Angular App"
              description="Designing a Mental Healthcare System for Hospitals that replaces
              traditional Pen and Paper Patient Records Management. "
            // link="https://gggggggggggggggggggg"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cdss}
              isBlog={false}
              title="Clinical decision support solution (CDSS) - Cordova App  | Angular App"
              description="Coronavirus disease 2019 (COVID-19) has caused severe disruptions across the world. EHRC develops a clinical decision support system for the Physicians in order to help with COVID-19 on EHR.Network"
            // link="https://gggggggggggggggggggg"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={teelogo}
              isBlog={false}
              title="Teetank.in - Wordpress Ecommerce App | Wordpress"
              description="Teetank is an emerging brand of tees. Teetank offer fashion, design, and services that enable people to be inspired and to express their own personal style making it easier to live in a more circular way."
            // link="https://gggggggggggggggggggg"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={defencelogo}
              isBlog={false}
              title="Defence Exam | Android App"
              description="Defence Exam App is a platform where one can prepare himself/herself for various Defence Exam. It provides you
              detailed information about Indian Armed Forces."
            // link="https://gggggggggggggggggggg"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={edfiniximg}
              isBlog={false}
              title="EDFINIX (School ERP ) | Android App"
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
