import Head from "next/head";
import styles from "../styles/Home.module.css";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Configure,
  Pagination,
} from "react-instantsearch-dom";
import Hit from "components/Hit/Hit";
import Cart from "components/cart/Cart";
const searchClient = algoliasearch(
  "latency",
  "6be0576ff61c053d5f9a3225e2a90f76"
);

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Test Full Stack</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Cart />
        <div className="ais-InstantSearch">
          <InstantSearch indexName="bestbuy" searchClient={searchClient}>
            <Configure hitsPerPage={20} />
            <SearchBox />
            <Hits hitComponent={Hit} />
            <Pagination />
          </InstantSearch>
        </div>
        <a href="/cart">Go to cart</a>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
