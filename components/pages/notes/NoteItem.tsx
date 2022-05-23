import Link from "next/link";
import { Col } from "react-bootstrap";
import styles from "./NoteItem.module.scss";
import { ColorTheme } from "types/color-theme";

interface NoteItemProps {
  href: string;
  thumbnail?: React.ReactNode;
  title: string;
}

export default function NoteItem({ href, thumbnail, title }: NoteItemProps) {
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
