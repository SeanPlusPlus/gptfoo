import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export default function Input() {
  const {
    setInputText
  } = useContext(GlobalContext)

  const handleChange = (e) => {
    setInputText(e.target.value)
  }

  return (
    <textarea className="textarea textarea-bordered w-80 md:w-[32rem]" placeholder="Enter text here" onChange={(e) => handleChange(e)}></textarea>
  )
}