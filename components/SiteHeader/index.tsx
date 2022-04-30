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
        <Container>
          <Row className="align-items-center">
            <Col>
              <Link href="/">
                <a>
                  The University of Illinois-Deloitte Foundation Center for
                  Business Analytics
                </a>
              </Link>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  );
}
