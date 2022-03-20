import Prismic from "@prismicio/client";

export function getPrismicClient(req?: any) {
  const prismic = Prismic.client(
    process.env.PRISMIC_API_URL as string,
    {
      accessToken: process.env.PRISMIC_ACCESS_TOKEN as string,
      req,
    }
  )

  return prismic;
}