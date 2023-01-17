import { useContext } from 'react'
import axios from 'axios'
import { GlobalContext } from '../context/GlobalState'

export default function Input() {
  const {
    inputText,
    setInputText,
    isSubmitting,
    setIsSubmitting,
    setAlert,
  } = useContext(GlobalContext)

  const handleChange = (e) => {
    setInputText(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!inputText) {
      return
    }

    setIsSubmitting(true)
 
    const r = await axios.post(
      '/api', { inputText }
    )
  
    setIsSubmitting(false)

    const { status, output: { text } } = r.data

    const a = {
      status,
      text,
    }

    setAlert(a)
  }

  return (
    <>
      <textarea className="textarea textarea-bordered w-80 md:w-[32rem]" placeholder="Enter text here" onChange={(e) => handleChange(e)}></textarea>
      <div>
        {isSubmitting === null && (
          <button className="btn btn-accent mt-4" onClick={handleSubmit}>Submit</button>
        )}
        {isSubmitting === true && (
          <div className="lds-facebook"><div></div><div></div><div></div></div>
        )}
      </div>
    </>
  )
}