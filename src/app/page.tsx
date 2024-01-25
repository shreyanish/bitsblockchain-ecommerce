import Image from "next/image";
import styles from "./page.module.css";

import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className={styles.main}>

      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
