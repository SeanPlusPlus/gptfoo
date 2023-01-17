import Header from '../components/Header'
import Input from '../components/Input'

const title = 'gptfoo'

export default function Home() {
  return (
    <>
      <Header />
      <main className="text-center">
        <h1 className="text-3xl font-bold py-4">
          {title}
        </h1>
        <Input />
      </main>
    </>
  )
}
