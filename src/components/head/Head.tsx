import Head from 'next/head'

type HeadProps = {
  name: string
}

/**
 * Head
 * @constructor
 */
const AppHead = ({ name }: HeadProps) => {
  return (
    <Head>
      <title> {name} | Next Boilerplate </title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default AppHead
