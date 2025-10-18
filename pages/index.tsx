import Head from "next/head";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="This is the home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to the Home Page</h1>
        <p>This is the main content area.</p>
      </main>
    </>
  );
}

export default Home;