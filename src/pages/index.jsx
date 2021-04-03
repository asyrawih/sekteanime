import Layout from "../components/layout"
import Head from 'next/head'
import { Animes } from "../components/Animes"

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Sektenime</title>
      </Head>
      <Animes anime={"test"} />
    </Layout>
  )
}

export default Home