import { faFile, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import {
  faBars,
  faClose,
  faSliders,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, useLocation } from "react-router";

const Header = ({ appState, dispatch }) => {
  const location = useLocation();
  const [nav, toggleNav] = useState(false);

  return (
    <div className="w-full flex justify-between place-items-center py-2 px-3 text-2xl bg-gray-500">
      <div className="w-1/3 text-left flex justify-start place-items-center gap-5">
        <FontAwesomeIcon icon={faBars} />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => dispatch({ type: "newFile" })}
        />
      </div>
      <p className="text-xl">Meta List</p>
      <div className="w-1/3 text-right flex justify-end place-items-center gap-5">
        {location.pathname === "/" && (
          <Link className="w-1/3 text-right" to={"/seenotes"}>
            <FontAwesomeIcon icon={faFile} />
          </Link>
        )}
        {location.pathname === "/seenotes" && (
          <Link className="w-1/3 text-right" to={"/"}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </Link>
        )}
        <FontAwesomeIcon icon={faSliders} onClick={() => toggleNav(!nav)} />
      </div>

      {nav && (
        <div className="bg-gray-300 w-full h-screen absolute top-0 left-0 z-10">
          <div className="w-full flex flex-row-reverse justify-between place-items-center py-2 px-3 text-2xl bg-gray-500">
            <FontAwesomeIcon icon={faClose} onClick={() => toggleNav(!nav)} />
            <p>Settings</p>
          </div>
          <div className="flex flex-col place-items-center justify-center mx-auto gap-6 my-6">
            <p>Note Library</p>
            <p>Set Default Categories</p>
            <p>Change Theme</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
