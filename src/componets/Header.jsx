import { faFile, faPenToSquare } from "@fortawesome/free-regular-svg-icons"
import { faBars, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, useLocation } from "react-router"

const Header = ({appState, dispatch}) => {

  const location = useLocation()

  return (
    <div className="w-full flex justify-between place-items-center py-2 px-3 text-2xl bg-gray-500">
        <div className="w-1/3 text-left">
          <FontAwesomeIcon icon={faTrash} onClick={() => dispatch({type: 'newFile'})} />
        </div>
        <p className="text-xl">Meta List</p>
        {
          location.pathname === '/' && <Link className="w-1/3 text-right" to={'/seenotes'}><FontAwesomeIcon icon={faFile} /></Link>
        }
        {
          location.pathname === '/seenotes' && <Link className="w-1/3 text-right" to={'/'}><FontAwesomeIcon icon={faPenToSquare} /></Link>
        }
    </div>
  )
}

export default Header