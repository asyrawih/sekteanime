import Layout from "../components/layout"
import Head from 'next/head'
import Donghua from "../components/Donghua/Donghua"
import { Animes } from "../components/Animes"

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Sektenime</title>
      </Head>
      <Animes anime={"test"} />
      <Donghua />
    </Layout>
  )
}

export default Home