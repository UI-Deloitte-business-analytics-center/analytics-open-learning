import Layout from "components/Layout";
import { Container, Row, Col } from "react-bootstrap";
import styles from "styles/pages/notes/NotesPage.module.scss";
import Image from "next/image";
import NoteItem from "components/pages/notes/NoteItem";

export default function NotesPage() {
  return (
    <Layout>
      <main className={styles.page}>
        <Container fluid>
          <Row>
            <Col>
              <h1 className="pageTitle">Learning Resources</h1>
            </Col>
          </Row>

          <Row>
            <Col>
              <h2 className="sectionTitle">
                Python Foundation <span className="accent orange" />
              </h2>
            </Col>
          </Row>

          <Row>
            <NoteItem
              href="/lecture-notes/intro-to-analytics"
              thumbnail={
                <Image
                  src="/images/notes/abstract-001.png"
                  width={900}
                  height={450}
                  alt=""
                />
              }
              title="Introduction to Analytics"
            />

            <NoteItem
              href="/lecture-notes/intro-to-python"
              thumbnail={
                <Image
                  src="/images/notes/abstract-001.png"
                  width={900}
                  height={450}
                  alt=""
                />
              }
              title="Introduction to Python"
            />

            <NoteItem
              href="/lecture-notes/data-types-and-variables"
              thumbnail={
                <Image
                  src="/images/notes/abstract-001.png"
                  width={900}
                  height={450}
                  alt=""
                />
              }
              title="Data Types and Variables"
            />

            <NoteItem
              href="/notes/booleans-and-conditionals"
              thumbnail={
                <Image
                  src="/images/notes/abstract-002.png"
                  width={900}
                  height={450}
                  alt=""
                />
              }
              title="Operators, Booleans, and Conditionals"
            />

            <NoteItem
              href="/lecture-notes/lists-and-loops"
              thumbnail={
                <Image
                  src="/images/notes/abstract-003.png"
                  width={900}
                  height={450}
                  alt=""
                />
              }
              title="Lists and Loops"
            />

            <NoteItem
              href="/lecture-notes/collections-and-strings"
              thumbnail={
                <Image
                  src="/images/notes/abstract-004.png"
                  width={900}
                  height={450}
                  alt=""
                />
              }
              title="Loops, Collections, Quiz Prep"
            />

            <NoteItem
              href="/lecture-notes/strings-and-string-methods"
              thumbnail={
                <Image
                  src="/images/notes/abstract-005.png"
                  width={900}
                  height={450}
                  alt=""
                />
              }
              title="Strings and String Methods"
            />

            <NoteItem
              href="/lecture-notes/functions"
              thumbnail={
                <Image
                  src="/images/notes/abstract-006.png"
                  width={900}
                  height={450}
                  alt=""
                />
              }
              title="Functions Part 1"
            />
          </Row>

          <Row>
            <Col>
              <h2
                className="sectionTitle"
                style={{
                  marginTop: "4rem",
                }}
              >
                Pandas <span className="orange accent" />
              </h2>
            </Col>
          </Row>

          <Row>
            <NoteItem
              href="https://nbviewer.org/github/bdi475/notebooks/blob/4c66be3bb966b9a58564f58b6cabbf7d6c9a82e8/L08-introduction-to-jupyter-and-pandas-SOLUTION.ipynb"
              thumbnail={
                <Image
                  src="/images/notes/pandas-gray-bg.png"
                  width={900}
                  height={450}
                  alt=""
                />
              }
              title="Introduction to Jupyter and Pandas"
            />

            <NoteItem
              href="https://nbviewer.org/github/bdi475/notebooks/blob/4c66be3bb966b9a58564f58b6cabbf7d6c9a82e8/L09-pandas-series-dataframe-csv-filtering-SOLUTION.ipynb"
              thumbnail={
                <Image
                  src="/images/notes/pandas-gray-bg.png"
                  width={900}
                  height={450}
                  alt=""
                />
              }
              title="Series, DataFrame, CSV"
            />

            <NoteItem
              href="https://nbviewer.org/github/bdi475/notebooks/blob/4c66be3bb966b9a58564f58b6cabbf7d6c9a82e8/L10-pandas-filtering-sorting-SOLUTION.ipynb"
              thumbnail={
                <Image
                  src="/images/notes/pandas-gray-bg.png"
                  width={900}
                  height={450}
                  alt=""
                />
              }
              title="Pandas Filtering and Sorting"
            />

            <NoteItem
              href="https://nbviewer.org/github/bdi475/notebooks/blob/2f71cdaf7cdaab48817b44dc8ed1e6e47fd326cc/L11-pandas-columns-missing-values-vocareum-SOLUTION.ipynb"
              thumbnail={
                <Image
                  src="/images/notes/pandas-gray-bg.png"
                  width={900}
                  height={450}
                  alt=""
                />
              }
              title="Pandas Column Operations and Missing Values"
            />

            <NoteItem
              href="https://nbviewer.org/github/bdi475/notebooks/blob/2f71cdaf7cdaab48817b44dc8ed1e6e47fd326cc/L12-missing-values-datetime-aggregation-joins-vocareum-SOLUTION.ipynb"
              thumbnail={
                <Image
                  src="/images/notes/pandas-gray-bg.png"
                  width={900}
                  height={450}
                  alt=""
                />
              }
              title="Missing Values, Datetime, Aggregation, and Merging"
            />

            <NoteItem
              href="https://nbviewer.org/github/bdi475/notebooks/blob/3c6b43e4566a94e85b6b9e5d6097a33a848b8fd8/L13-aggregations-and-intro-to-merges-vocareum-SOLUTION.ipynb"
              thumbnail={
                <Image
                  src="/images/notes/pandas-gray-bg.png"
                  width={900}
                  height={450}
                  alt=""
                />
              }
              title="More Aggregations, Intro to Merges"
            />

            <NoteItem
              href="https://nbviewer.org/github/bdi475/notebooks/blob/3c6b43e4566a94e85b6b9e5d6097a33a848b8fd8/L14-more-pandas-vocareum-SOLUTION.ipynb"
              thumbnail={
                <Image
                  src="/images/notes/pandas-gray-bg.png"
                  width={900}
                  height={450}
                  alt=""
                />
              }
              title="Cell Operations, Advanced Exercises"
            />
          </Row>

          <Row>
            <Col>
              <h2
                className="sectionTitle"
                style={{
                  marginTop: "4rem",
                }}
              >
                SQL <span className="green accent" />
              </h2>
            </Col>
          </Row>

          <Row>
            <NoteItem
              href="https://nbviewer.org/github/bdi475/notebooks/blob/ce3b24aca031d595cb8c58ede3d43c973ad1f354/L17-intro-to-SQL-SOLUTION.ipynb"
              thumbnail={
                <Image
                  src="/images/notes/sql-gray-bg.png"
                  width={900}
                  height={450}
                  alt=""
                />
              }
              title="Introduction to SQL"
            />

            <NoteItem
              href="https://nbviewer.org/github/bdi475/notebooks/blob/ce3b24aca031d595cb8c58ede3d43c973ad1f354/L18-SQL-queries-aggregations-SOLUTION.ipynb"
              thumbnail={
                <Image
                  src="/images/notes/sql-gray-bg.png"
                  width={900}
                  height={450}
                  alt=""
                />
              }
              title="More SQL Queries and Aggregations"
            />
          </Row>

          <Row>
            <Col>
              <h2
                className="sectionTitle"
                style={{
                  marginTop: "4rem",
                }}
              >
                Data Visualization <span className="blue accent" />
              </h2>
            </Col>
          </Row>

          <Row>
            <NoteItem
              href="https://nbviewer.org/github/bdi475/notebooks/blob/5a7526421f6725df6b66ab7f128a9f836d4c7c65/L20-intro-to-visualizations-vocareum-SOLUTION.ipynb"
              thumbnail={
                <Image
                  src="/images/notes/dataviz.png"
                  width={900}
                  height={450}
                  alt=""
                />
              }
              title="Introduction to DataViz"
            />

            <NoteItem
              href="https://nbviewer.org/github/bdi475/notebooks/blob/5a7526421f6725df6b66ab7f128a9f836d4c7c65/L21-line-bar-scatter-plots-vocareum-SOLUTION.ipynb"
              thumbnail={
                <Image
                  src="/images/notes/dataviz.png"
                  width={900}
                  height={450}
                  alt=""
                />
              }
              title="Line, Scatter, and Bar Plots"
            />

            <NoteItem
              href="https://nbviewer.org/github/bdi475/notebooks/blob/68028638d96a81dc201e0b758c8700b021f2740e/L22-advanced-visualizations-vocareum-SOLUTION.ipynb"
              thumbnail={
                <Image
                  src="/images/notes/dataviz.png"
                  width={900}
                  height={450}
                  alt=""
                />
              }
              title="Advanced Visualizations"
            />
          </Row>
        </Container>
      </main>
    </Layout>
  );
}
