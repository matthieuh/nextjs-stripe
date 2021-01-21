import { NextPage } from 'next'
import Layout from '../components/Layout'

import CheckoutForm from '../components/CheckoutForm'

const DonatePage: NextPage = () => {
  return (
    <Layout title="Choose Plan | Neo">
      <div className="page-container">
        <h1>Choose Plan</h1>
        <CheckoutForm />
      </div>
    </Layout>
  )
}

export default DonatePage
