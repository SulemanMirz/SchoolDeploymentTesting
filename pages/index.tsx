import Head from "next/head";
import Link from "next/link";
import { InferGetStaticPropsType, GetStaticProps } from "next";
import styles from "styles/Partner.module.scss";
import { getSchoolSlugs } from "services/SchoolService";

export const getStaticProps: GetStaticProps<{ slugs: string[] }> = async () => {
  const schoolSlugs = await getSchoolSlugs();

  return {
    props: {
      slugs: schoolSlugs.map(({ slug }) => slug),
    },
    revalidate: 1800,
  };
};

export default function Home({
  slugs,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className={styles.container}>
      <Head>
        <title>DOJO+</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="text-5xl">DOJO+</h1>
        {slugs?.sort().map((partner, key) => (
          <Link href={`/${partner}`} key={key} passHref>
            <a className="m-5 block underline">{partner}</a>
          </Link>
        ))}
      </main>

      <footer className={styles.footer}>2021 Dojo+</footer>
    </div>
  );
}
