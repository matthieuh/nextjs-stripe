import { NextPage } from 'next'
import { useRouter } from 'next/router'

import Layout from '../components/Layout'
import PrintObject from '../components/PrintObject'

import { fetchGetJSON } from '../utils/api-helpers'
import useSWR from 'swr'

const ResultPage: NextPage = () => {
  const router = useRouter()

  // Fetch CheckoutSession from static page via
  // https://nextjs.org/docs/basic-features/data-fetching#static-generation
  const { data, error } = useSWR(
    router.query.session_id
      ? `/api/checkout_sessions/${router.query.session_id}`
      : null,
    fetchGetJSON
  )

  if (error) return <div>failed to load</div>

  return (
    <Layout title="Checkout Payment Result | Next.js + Stripe">
      <div className="page-container">
        <h1>Checkout Payment Result</h1>
        <h2>Status: {data?.portalSession?.payment_intent?.status ?? 'loading...'}</h2>
        <h3>CheckoutSession response:</h3>
        <PrintObject content={data?.portalSession ?? 'loading...'} />
        <a href={data?.portalSession?.url}>My subscription</a>
      </div>
    </Layout>
  )
}

export default ResultPage
