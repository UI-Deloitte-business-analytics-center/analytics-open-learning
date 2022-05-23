import Layout from "components/Layout";
import { Container, Row, Col } from "react-bootstrap";
import styles from "styles/pages/notes/common.module.scss";

export default function AboutPage() {
  return (
    <Layout>
      <main className={styles.page}>
        <Container fluid>
          <Row>
            <Col>
              <h1 className="pageTitle">About</h1>
            </Col>
          </Row>

          <Row>
            <Col>
              <p>Analytics Open Learning provides a </p>
            </Col>
          </Row>
        </Container>
      </main>
    </Layout>
  );
}
