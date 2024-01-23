import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Ivan Zimbe </span>
            from <span className="purple"> Milpitas, California.</span>
            <br />
            I am a motivated Software Engineer with over 6+ years of hands-on experience specializing in managing the development of scalable enterprise software applications within Agile/Scrum environments in IT. I am a dedicated problem-solving professional known for swiftly diagnosing and resolving complex technical issues to elevate code quality and enhance application performance. I am adept at collaborating with cross-functional teams to deliver innovative software products. I am seeking to leverage lean software development, leadership and technical acumen to drive impactful projects in a dynamic environment and organization.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Mountain climbing
            </li>
            <li className="about-activity">
              <ImPointRight /> Sky diving
            </li>
            <li className="about-activity">
              <ImPointRight /> Sports like swimming and football
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The man on top of the mountain didn't fall there!"{" "}
          </p>
          <footer className="blockquote-footer">Vince Lombardi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
