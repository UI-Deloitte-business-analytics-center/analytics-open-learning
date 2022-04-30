import { Col, Container, Row } from "react-bootstrap";
import styles from "./SiteFooter.module.scss";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function SiteFooter() {
  return (
    <section className={styles.footer}>
      <Container>
        <Row>
          <Col lg={4} md={12}>
            <Link href="/">
              <a>Logo</a>
            </Link>
          </Col>

          <Col lg={4} md={12}>
            <div className={styles.linksBox}>
              <h2>Links</h2>

              <ul>
                <li>
                  <Link href="/python-playground/untitled">
                    Python Playground (Experimental)
                  </Link>
                </li>
                <li>
                  <a href="https://cscircles.cemc.uwaterloo.ca/visualize">
                    Visualize Code Execution
                  </a>
                </li>
              </ul>
            </div>
          </Col>

          <Col lg={4} md={12}>
            <div className={styles.sponsorBox}>Sponsor Box</div>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className={styles.bottomBox}>
              <Row>
                <Col xs={10}>University of Illinois at Urbana-Champaign</Col>

                <Col xs={2}>
                  <div className={styles.iconLinks}>
                    <a href="https://github.com/UI-Deloitte-business-analytics-center/analytics-open-learning">
                      <FaGithub className={styles.reactIcon} />
                    </a>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
