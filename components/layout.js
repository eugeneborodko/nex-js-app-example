import Head from 'next/head'

const Layout = ({ children, title = 'Next-js-app' }) => {
  return (
    <>
      <Head>
        <title>{title} | Next-js-app</title>
      </Head>
      <main className="main">
        {children}
      </main>
    </>
  )
}

export default Layout