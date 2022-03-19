import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import errorImg from "../../public/images/avatar-404.png";
import styles from "./404.module.scss";

const preventDrag = (e: any) => {
  e.preventDefault();
};

export default function Error404() {
  return (
    <>
      <Head>
        <title>Page Not Found | anime.news</title>
      </Head>

      <main className={styles.errorContainer}>
        <Image
          src={errorImg}
          alt="Akame ga Kill"
          width={370}
          height={370}
          quality={100}
          onDragStart={preventDrag}
        />
        <h1>Page Not Found</h1>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </main>
    </>
  );
}
