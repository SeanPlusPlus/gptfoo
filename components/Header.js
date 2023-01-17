import Head from 'next/head'

const title = "GPT Foo"
const description = "Test whether a block of text was written by an AI or a human"

export default function Header() {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}