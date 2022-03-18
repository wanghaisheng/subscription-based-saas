import { useSession, signIn } from "next-auth/react";
import { api } from "../../services/api";
import { getStripeJs } from "../../services/stripe-js";
import toast from "react-hot-toast";
import styles from "./style.module.scss";

interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const { data: session } = useSession();

  async function handleSubscribe() {
    if (!session) {
      signIn("github");
      return;
    }

    try {
      const response = await api.post("/checkoutSubscribe");

      const { sessionId } = response.data;

      toast.success("Redirecionando para checkout!");

      const stripe = await getStripeJs();

      await stripe.redirectToCheckout({ sessionId });
    } catch (err) {
      toast.error("Ocorreu um erro.");
    }
  }

  return (
    <button
      type="button"
      className={styles.subscribeBtn}
      onClick={handleSubscribe}
    >
      Subscribe now
    </button>
  );
}
