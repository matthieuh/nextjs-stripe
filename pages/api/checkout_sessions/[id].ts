import { NextApiRequest, NextApiResponse } from 'next'

import Stripe from 'stripe'
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: '2020-03-02',
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id: string = req.query.id as string
  try {
    if (!id.startsWith('cs_')) {
      throw Error('Incorrect CheckoutSession ID.')
    }
    const checkoutSession: Stripe.Checkout.Session = await stripe.checkout.sessions.retrieve(
      id,
      { expand: ['payment_intent'] }
    )

    const portalSession = await stripe.billingPortal.sessions.create({
      customer: checkoutSession.customer as string,
      return_url: `https://nextjs-stripe-seven.vercel.app/`,
    });

    res.status(200).json({ checkoutSession, portalSession })
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}
