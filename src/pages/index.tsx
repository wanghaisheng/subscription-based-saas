import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";

import { SubscribeButton } from "../components/SubscribeButton";
import { stripe } from "../services/stripe";

import avatarImg from "../../public/images/avatar.png";
import styles from "./home.module.scss";

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: HomeProps) {
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
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>
        <Image src={avatarImg}
         alt="Akame ga kill" 
         quality={100}
         priority={true}
        />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1Ke6jWDhJDsnmuxOSnZQtV00");

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
