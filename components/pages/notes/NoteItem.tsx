import Link from "next/link";
import { Col } from "react-bootstrap";
import styles from "./NoteItem.module.scss";
import { ColorTheme } from "types/color-theme";
import clsx from "clsx";

interface NoteItemProps {
  href: string;
  thumbnail?: React.ReactNode;
  title: string;
  colorTheme?: ColorTheme;
}

export default function NoteItem({
  href,
  thumbnail,
  title,
  colorTheme = ColorTheme.Green,
}: NoteItemProps) {
  return (
    <Col lg={4} md={6}>
      <Link href={href}>
        <a className={styles.noteItem}>
          {thumbnail}

          <h3>{title}</h3>

          <div className={styles.dateWrapper}>
            <div className={styles.date}>Date</div>
          </div>
        </a>
      </Link>
    </Col>
  );
}
