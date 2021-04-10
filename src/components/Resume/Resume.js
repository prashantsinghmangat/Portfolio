// import React, { useState } from "react";
// import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import axios from "axios";
import pdf from "../../Assets/Prashant-Resume.pdf";

function Resume() {
  // const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  // const [spojRank, upadteSpojRank] = useState(0);
  // const [hackerrank, upadteHackerank] = useState(0);
  // const [sem, upadateSem] = useState(0);
  // const [cgpa, upadteCgpa] = useState(0);

  // useEffect(() => {
  //   axios
  //     .get(uri)
  //     .then((res) => {
  //       upadteSpojRank(res.data.message[0].spojRank);
  //       upadteHackerank(res.data.message[1].hackerrank);
  //       upadteCgpa(res.data.message[2].cgpa);
  //       upadateSem(res.data.message[3].sem);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="(Android , Full-stack
                developer) at EHRC IIIT Bangalore"
              date="October 2019 - Present"
              content={[
                "The E-Health Research Center (EHRC) @ IIIT-B is an interdisciplinary Research Center that spreads across all areas of research interests in the institute towards doing applied research in the use of Information & Communication Technologies (ICTs) to meet the healthcare needs of the under-served and marginal population groups in India and similar regions across the world"
              ]}
            />
            <Resumecontent
              title="Android Developer, Marketing, Team mangaement at Fizday.com"
              date="2020 - Present"
              content={[
                "Solely responsible for creating product, implementing, reviewing, managing, designing, server maintenance, bugs and customer support 1100+ registered & invited 500+ designers registrations in 4 days and Increased traffic by 500% in 7 days of launching and 5000+ monthly visitors (Launch Date - April 27th, 2020)"
              ]}
            />
            
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Member of UNYC (United Nation Youth Community)"
              content={[
                "Team manage and working as a Volenter",
              ]}
            />
            <Resumecontent
              title="FormDhako.com"
              content={[
                "Operated on developing the frontend end of the website using Bootstrap, Javascript and backend APIs using Node.js",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            {/* <Resumecontent
              title="IMSC MATHS AND COMPUTING [BIT Mesra, Ranchi] "
              date="2018 - Present"
              content={[`CGPA: ${cgpa} (Till ${sem}th Sem)`]}
            /> */}
            <Resumecontent
              title="B.Tech. (Computer Science and Engineering) [LPU, Punjab]"
              date="06/2016 - 06/2020"
              content={["CGPA: 7.53"]}
            />
            <Resumecontent
              title="12TH BOARD [CVPS, Meerut Cantt, UP]"
              date="05/2015 - 05/2016"
              content={["Precentage: 60%"]}
            />
            <Resumecontent
              title="10TH BOARD [Army Public School, Meerut Cantt, UP] "
              date="05/2013 - 02/2014"
              content={["CGPA: 7.0"]}
            />
            <h3 className="resume-title">CERTIFICATES</h3>
            <Resumecontent
              title=""
              content={[
                // `Current rank in Spoj ${spojRank}`,
                // `Current rank in HackerRank  ${hackerrank}`,
                "Digital Marketing from Internshala (06/2019 - 07/2019)",
                "TechDefence for Ethical Hacking (12/2017 - 12/2017)",
                "LUCIDEUS for Ethical Hacking (07/2017 - 08/2017)",
                "C from Udemy (06/2018 - 07/2018)",
                "C++, HTML, CSS from solo learn (06/2018 - 07/2018)"
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
