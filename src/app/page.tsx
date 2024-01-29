import ItemMV from "@/components/itemmv";
import styles from "./page.module.css";
import Gallery from "@/components/gallery";

export default function Home() {
  return (
    <main className={styles.main}>
      <Gallery />
    </main>
  );
}
