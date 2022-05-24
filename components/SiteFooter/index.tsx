import { Col, Container, Row } from "react-bootstrap";
import styles from "./SiteFooter.module.scss";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function SiteFooter() {
  return (
    <section className={styles.footer}>
      <Container fluid>
        <Row>
          <Col>
            <div className={styles.bottomBox}>
              <Row>
                <Col xs={10}>
                  <Link href="https://www.centerforanalytics.giesbusiness.illinois.edu/">
                    The University of Illinois-Deloitte Foundation Center for
                    Business Analytics
                  </Link>
                </Col>

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
