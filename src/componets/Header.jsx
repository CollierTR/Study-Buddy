import { faFile } from "@fortawesome/free-regular-svg-icons"
import { faBars, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, useLocation } from "react-router"

const Header = ({appState, dispatch}) => {

  const location = useLocation()

  return (
    <div className="w-full flex justify-between place-items-center py-2 px-3 text-2xl bg-gray-500">
        <FontAwesomeIcon icon={faTrash} onClick={() => dispatch({type: 'newFile'})} />
        <p className="text-xl">Meta List</p>
        {
          location.pathname === '/' && <Link to={'/seenotes'}><FontAwesomeIcon icon={faFile} /></Link>
        }
        {
          location.pathname === '/seenotes' && <Link to={'/'}><FontAwesomeIcon icon={faFile} /></Link>
        }
    </div>
  )
}

export default Header