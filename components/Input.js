import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export default function Input() {
  const {
    inputText,
    setInputText,
    isSubmitting,
    setIsSubmitting,
  } = useContext(GlobalContext)

  const handleChange = (e) => {
    setInputText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    console.log(inputText)
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea className="textarea textarea-bordered w-80 md:w-[32rem]" placeholder="Enter text here" onChange={(e) => handleChange(e)}></textarea>
      <div>
        {isSubmitting ? (
          <div className="lds-facebook"><div></div><div></div><div></div></div>
        ) : (
          <button className="btn btn-accent mt-4">Submit</button>
        )}
      </div>
    </form>
  )
}