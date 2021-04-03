import Layout from "../components/layout"
import Head from 'next/head'
import { Animes } from "../components/Animes"

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Sektenime</title>
      </Head>
      <Animes anime={"Latest Update"} />
      <Animes anime={"Latest Donghua"} />
      <Animes anime={"Popular"} />
    </Layout>
  )
}

export default Home