import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Todo List"
              description="A sophisticated to-do list application was crafted, employing a microservices architecture with containerized services managed by Kubernetes, ensuring high availability and scalability. The backend, powered by Node.js and Express, interfaced with a distributed MongoDB cluster for data persistence, while the frontend featured a sleek, reactive UI built with Vue.js, enriched with real-time updates using WebSocket. Advanced features included AI-based task prioritization and natural language processing for task input, all secured with OAuth 2.0 for robust user authentication and authorization. This high-tech stack transformed the simple concept of task management into a cutting-edge productivity tool."
              // ghLink=""
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="SCADA system"
              description="A SCADA system for a power plant was architected with Java on the backend, effectively integrating multiple control systems to monitor and manage plant operations. This backend was responsible for aggregating data streams, automating control processes, and facilitating predictive maintenance. The system also served as the central hub for operational insights, enabling comprehensive monitoring and control over the plant's various subsystems, thereby optimizing performance and reliability."
              // ghLink=""
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Inventory Management System"
              description="An inventory management system for a power plant was developed with a secure Java backend utilizing Spring Security for OAuth authentication and authorization. The React-powered frontend provided an intuitive interface for real-time tracking of spare parts and featured automated reordering based on predefined thresholds. Integration with a payment gateway enabled direct purchasing within the system, streamlining the procurement process. This comprehensive system ensured operational efficiency and minimized downtime by maintaining optimal inventory levels through intelligent automation."
              // ghLink=""
              // demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Library Management System"
              description="A library management system architected with Java handles backend logic, utilizing frameworks like Spring for robust API development and Hibernate for ORM, interfacing with a relational database such as MySQL for cataloging and user account management. The frontend, built with JavaScript, HTML, and CSS, provides a user-friendly interface for patrons to search, reserve, and manage books, while AJAX calls to Java servlets ensure a smooth and responsive user experience. This system streamlines the overall process of library operations, from inventory management to the user borrowing lifecycle."
              // ghLink=""
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Alumni Management Portal"
              description="The alumni management portal integrates Java's Spring Boot with Spring MVC for backend operations, with ReactJS energizing the frontend, ensuring a seamless, full-stack user experience. For persistent data storage and efficient retrieval, it employs relational databases like PostgreSQL or MySQL for structured data and alumni records, alongside NoSQL options like MongoDB for flexible data handling, such as event logs or unstructured alumni interactions."
              // ghLink=""
              // demoLink="" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Shopping Cart Project"
              description="A Node.js and Express backend powers the shopping cart project, providing RESTful API endpoints for cart operations like addition, deletion, and updating of items. The frontend, crafted with HTML, CSS, and vanilla JavaScript, offers a responsive and interactive user interface, allowing seamless user experiences across various devices. Persistent storage is managed with a database like MongoDB, ensuring data integrity and state management across sessions."
              // ghLink=""
              // demoLink=""      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
