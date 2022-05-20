import React, { useState, useEffect, forwardRef } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./SiteHeader.module.scss";
import useMediaQuery from "@mui/material/useMediaQuery";
import { desktop } from "constants/media-query-strings";

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScreenDesktop = useMediaQuery(desktop);

  useEffect(() => {
    if (isScreenDesktop && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isScreenDesktop]);

  return (
    <>
      {isMenuOpen && (
        <div
          className={styles.backdrop}
          onClick={(e) => {
            e.preventDefault();

            setIsMenuOpen(false);
          }}
        />
      )}

      <header className={styles.header}>
        <div className={styles.fixedBar}>
          <Container fluid>
            <Row>
              <Col>
                <div className={styles.barBody}>
                  <Row className="align-items-center">
                    <Col>
                      <Link href="/">
                        <a className={styles.siteTitle}>
                          Analytics Open Learning
                        </a>
                      </Link>
                    </Col>

                    <Col>
                      <div className="d-flex justify-content-end">
                        <ul className={styles.headerMenu}>
                          <li>
                            <Link href="/about">About</Link>
                          </li>
                          <li>
                            <Link href="/about">Extra Resources</Link>
                          </li>
                        </ul>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </header>
    </>
  );
}
