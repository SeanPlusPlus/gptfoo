import Header from '../components/Header'
import Alert from '../components/Alert'
import Input from '../components/Input'

const title = 'GPT Foo'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="text-center h-screen justify-between">
          <h1 className="text-3xl font-bold py-4">
            {title}
          </h1>
          <Alert />
          <Input />
        </div>
      </main>

    </>
  )
}
