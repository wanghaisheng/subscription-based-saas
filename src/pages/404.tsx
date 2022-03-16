import Head from "next/head";
import Link from "next/link";
import styles from "./404.module.scss";

export default function Error404() {
  return (
    <>
      <Head>
        <title>Page Not Found | anime.news</title>
      </Head>

      <main className={styles.errorContainer}>
        <img src="/images/avatar-404.png" alt="Akame ga Kill" />
        <h1>Page Not Found</h1>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </main>
    </>
  );
}
