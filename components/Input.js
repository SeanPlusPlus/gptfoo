import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export default function Input() {
  const {
    inputText,
    setInputText,
  } = useContext(GlobalContext)

  const handleChange = (e) => {
    setInputText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputText)
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea className="textarea textarea-bordered w-80 md:w-[32rem] mb-4" placeholder="Enter text here" onChange={(e) => handleChange(e)}></textarea>
      <div>
        <button className="btn btn-accent">Submit</button>
      </div>
    </form>
  )
}