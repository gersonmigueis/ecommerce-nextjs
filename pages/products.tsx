import Head from "next/head";
import { NextPage } from "next";

const Products: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nossos Produtos</title>
        <meta name="description" content="Esta é a página de produtos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
        <h1>Bem-vindo à página de produtos</h1>
    
    </>
  );
}

export default Products;