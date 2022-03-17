import Head from "next/head";
import Image from "next/image";
import { SubscribeButton } from "../components/SubscribeButton";
import avatarImg from "../../public/images/avatar.png";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | anime.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.avatar}>
          <span>❤️ Hey, welcome</span>
          <h1>
            News about the <span>Anime</span> world.
          </h1>
          <p>
            Get access to all the publications <br />
            <span>for $4.99 month</span>
          </p>
          <SubscribeButton />
        </section>
        <Image src={avatarImg} alt="Akame ga kill" quality={100} />
      </main>
    </>
  );
}
