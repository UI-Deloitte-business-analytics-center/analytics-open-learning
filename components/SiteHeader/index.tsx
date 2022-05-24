import React, { useState, useEffect, forwardRef } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./SiteHeader.module.scss";
import useMediaQuery from "@mui/material/useMediaQuery";
import { desktop } from "constants/media-query-strings";
import { IoLogOutSharp } from "react-icons/io5";
import useSupabaseAuth from "hooks/useSupabaseAuth";
import { supabaseClient } from "lib/supabase/supabaseClient";
import { HiLogout } from "react-icons/hi";

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useSupabaseAuth();
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
                          <span className={styles.title}>
                            Analytics Open Learning
                          </span>
                        </a>
                      </Link>
                    </Col>

                    <Col>
                      <div className="d-flex justify-content-end">
                        <ul className={styles.headerMenu}>
                          <li>
                            <Link href="/">Learn</Link>
                          </li>
                          <li>
                            <Link href="/about">About</Link>
                          </li>
                          {user && (
                            <li>
                              <a
                                className={styles.signOutButton}
                                onClick={() => supabaseClient.auth.signOut()}
                              >
                                <HiLogout className={styles.reactIcon} />
                              </a>
                            </li>
                          )}
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
