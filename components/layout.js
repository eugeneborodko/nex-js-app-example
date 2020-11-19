import Head from 'next/head'

import Header from './Header/Header'

const Layout = ({ children, title = 'Next-js-app' }) => {
  return (
    <>
      <Head>
        <title>{title} | Next-js-app</title>
      </Head>
      <Header />
      <main className="main">
        {children}
      </main>
    </>
  )
}

export default Layout