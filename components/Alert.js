import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export default function Alert() {
  const {
    alert
  } = useContext(GlobalContext)

  if (!alert) {
    return <></>
  }

  return (
    <div className="w-80 md:w-[32rem] m-auto pb-4">
      <div className={`alert alert-${alert.status} shadow-lg`}>
        <div>
          <span>
            {alert.text}
          </span>
        </div>
      </div>
    </div>
  )
}