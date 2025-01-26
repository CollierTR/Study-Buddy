import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons"
import { faQuestion } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = ({appState}) => {
  return (
    <div className="w-full px-3 py-2 bg-slate-500 flex justify-between place-items-center">
      <p>Last Updated: {appState.lastUpdated}</p>
      <FontAwesomeIcon className="text-3xl" icon={faCircleQuestion}/>
    </div>
  )
}

export default Footer