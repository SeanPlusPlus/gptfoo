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
    <textarea className="textarea textarea-bordered w-96" onChange={(e) => handleChange(e)}></textarea>
  )
}