import Head from 'next/head'

const title = "gptfoo"
const description = "GPT checker"

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