import Head from "next/head";
import Hero from "../components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>菩提もと田の</title>
      </Head>
      <Hero />
      <p>tano site</p>
    </>
  );
}
