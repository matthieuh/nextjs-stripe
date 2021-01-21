import React, { ReactNode } from 'react'
import Head from 'next/head'
import Link from 'next/link'

type Props = {
  children: ReactNode
  title?: string
}

const Layout = ({
  children,
  title = 'Next.js + Stripe',
}: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Next.js + Stripe" />
      <meta
        name="twitter:description"
        content="Next.js + Stripe"
      />
    </Head>
    <div className="container">
      {children}
    </div>
  </>
)

export default Layout
