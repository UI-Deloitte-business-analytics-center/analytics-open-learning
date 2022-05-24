import Layout from "components/Layout";
import { Container, Row, Col } from "react-bootstrap";
import styles from "styles/pages/about.module.scss";
import Image from "next/image";

export default function AboutPage() {
  return (
    <Layout>
      <main className={styles.page}>
        <Container fluid>
          <Row>
            <Col>
              <p>
                Analytics Open Learning is a free learning platform where anyone
                can learn Python, SQL, and other data analytics-related topics.
                All materials are offered for free to faculty, students, and
                anyone else who desires to improve their knowledge of data
                analytics thanks to an endowment from the{" "}
                <a href="https://www2.deloitte.com/us/en/pages/about-deloitte/topics/deloitte-foundation.html">
                  Deloitte Foundation
                </a>{" "}
                and its partners.
              </p>
            </Col>
          </Row>
        </Container>

        <div className={styles.pageImageWrapper}>
          <Image
            src="/images/analytics-open-learning-about-graphic.png"
            width={3000}
            height={552}
            alt=""
          />
        </div>

        <Container fluid>
          <Row>
            <Col>
              <p>
                If you're interested in other leading-edge business analytics
                curriculum, please check out the{" "}
                <a href="https://www.centerforanalytics.giesbusiness.illinois.edu/">
                  University of Illinois-Deloitte Foundation Center for Business
                  Analytics
                </a>
                .
              </p>

              <p>
                This website and content have been created by{" "}
                <a href="https://giesbusiness.illinois.edu/profile/ye-joo-park">
                  Ye Joo Park
                </a>
                .
              </p>
            </Col>
          </Row>
        </Container>
      </main>
    </Layout>
  );
}
