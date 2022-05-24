import Layout from "components/Layout";
import { Container, Row, Col } from "react-bootstrap";
import styles from "styles/pages/notes/NotesPage.module.scss";
import Image from "next/image";
import NoteItem from "components/pages/notes/NoteItem";
import Link from "next/link";

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
              title="Collections and Strings"
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
              title="Functions"
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
              solutionHref="https://nbviewer.org/github/UI-Deloitte-business-analytics-center/notebooks/blob/main/analytics-open-learning/01-introduction-to-jupyter-and-pandas-SOLUTION.ipynb"
              href="https://colab.research.google.com/github/UI-Deloitte-business-analytics-center/notebooks/blob/main/analytics-open-learning/01-introduction-to-jupyter-and-pandas.ipynb"
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
              solutionHref="https://nbviewer.org/github/UI-Deloitte-business-analytics-center/notebooks/blob/main/analytics-open-learning/02-pandas-series-dataframe-csv-filtering-SOLUTION.ipynb"
              href="https://colab.research.google.com/github/UI-Deloitte-business-analytics-center/notebooks/blob/main/analytics-open-learning/02-pandas-series-dataframe-csv-filtering.ipynb"
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
              solutionHref="https://nbviewer.org/github/UI-Deloitte-business-analytics-center/notebooks/blob/main/analytics-open-learning/03-pandas-filtering-sorting-SOLUTION.ipynb"
              href="https://colab.research.google.com/github/UI-Deloitte-business-analytics-center/notebooks/blob/main/analytics-open-learning/03-pandas-filtering-sorting.ipynb"
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
              solutionHref="https://nbviewer.org/github/UI-Deloitte-business-analytics-center/notebooks/blob/main/analytics-open-learning/04-pandas-columns-missing-values-SOLUTION.ipynb"
              href="https://colab.research.google.com/github/UI-Deloitte-business-analytics-center/notebooks/blob/main/analytics-open-learning/04-pandas-columns-missing-values.ipynb"
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
              solutionHref="https://nbviewer.org/github/UI-Deloitte-business-analytics-center/notebooks/blob/main/analytics-open-learning/05-missing-values-datetime-SOLUTION.ipynb"
              href="https://colab.research.google.com/github/UI-Deloitte-business-analytics-center/notebooks/blob/main/analytics-open-learning/05-missing-values-datetime.ipynb"
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
              solutionHref="https://nbviewer.org/github/UI-Deloitte-business-analytics-center/notebooks/blob/main/analytics-open-learning/06-aggregations-and-intro-to-merges-SOLUTION.ipynb"
              href="https://colab.research.google.com/github/UI-Deloitte-business-analytics-center/notebooks/blob/main/analytics-open-learning/06-aggregations-and-intro-to-merges.ipynb"
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
              solutionHref="https://nbviewer.org/github/UI-Deloitte-business-analytics-center/notebooks/blob/main/analytics-open-learning/07-more-pandas-SOLUTION.ipynb"
              href="https://colab.research.google.com/github/UI-Deloitte-business-analytics-center/notebooks/blob/main/analytics-open-learning/07-more-pandas.ipynb"
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
              solutionHref="https://nbviewer.org/github/UI-Deloitte-business-analytics-center/notebooks/blob/main/analytics-open-learning/11-intro-to-SQL-SOLUTION.ipynb"
              href="https://colab.research.google.com/github/UI-Deloitte-business-analytics-center/notebooks/blob/main/analytics-open-learning/11-intro-to-SQL.ipynb"
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
              solutionHref="https://nbviewer.org/github/UI-Deloitte-business-analytics-center/notebooks/blob/main/analytics-open-learning/12-SQL-queries-aggregations-SOLUTION.ipynb"
              href="https://colab.research.google.com/github/UI-Deloitte-business-analytics-center/notebooks/blob/main/analytics-open-learning/12-SQL-queries-aggregations.ipynb"
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
              solutionHref="https://nbviewer.org/github/UI-Deloitte-business-analytics-center/notebooks/blob/main/analytics-open-learning/20-intro-to-visualizations-SOLUTION.ipynb"
              href="https://colab.research.google.com/github/UI-Deloitte-business-analytics-center/notebooks/blob/main/analytics-open-learning/20-intro-to-visualizations.ipynb"
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
              solutionHref="https://nbviewer.org/github/UI-Deloitte-business-analytics-center/notebooks/blob/main/analytics-open-learning/21-line-bar-scatter-plots-SOLUTION.ipynb"
              href="https://colab.research.google.com/github/UI-Deloitte-business-analytics-center/notebooks/blob/main/analytics-open-learning/21-line-bar-scatter-plots.ipynb"
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
              solutionHref="https://nbviewer.org/github/UI-Deloitte-business-analytics-center/notebooks/blob/main/analytics-open-learning/22-advanced-visualizations-SOLUTION.ipynb"
              href="https://colab.research.google.com/github/UI-Deloitte-business-analytics-center/notebooks/blob/main/analytics-open-learning/22-advanced-visualizations.ipynb"
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
