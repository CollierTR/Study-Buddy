import BulletList from "./BulletList"
import TitleInput from "./TitleInput";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";


const NotePanel = ({ appState, dispatch }) => {


  const [popup, setPopup] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
  // Focus the input element when the component mounts
  if (inputRef.current) {
    inputRef.current.focus();
  }
  }, [popup]);



  return (
    <div className="text-lg flex flex-col justify-center place-items-center gap-8 p-6">
        <TitleInput appState={appState} dispatch={dispatch} />
        {
            appState.bulletLists.map((bulletList) => (
                <BulletList key={bulletList.title} bulletList={bulletList} dispatch={dispatch} />
            ))
        }
        <button onClick={() => setPopup(!popup)} className="border-2 border-black  px-4 py-2 rounded-full font-bold text-xl">Add Category</button>


      {popup &&
        createPortal(
          <div onClick={(e) => setPopup(!popup)} className="absolute bg-[rgba(0,0,0,0.5)] w-full h-screen grid place-content-center text-2xl ">
              
            <div
              className="bg-white p-8 flex flex-col justify-center gap-4 rounded-2xl border-2 border-black"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between place-items-center text-2xl ">
                <p>Add a New Category</p>
                <FontAwesomeIcon
                  onClick={() => setPopup(!popup)}
                  icon={faClose}
                  className="text-red-600 text-3xl"
                />
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  if (e.target.newCat.value) {
                  dispatch({type: 'addCategory', payload: {newCategory: e.target.newCat.value}})
                  }
                  setPopup(!popup);
                }}
              >
                <input
                  ref={inputRef}
                  name="newCat"
                  type="text"
                  placeholder={`Add Point`}
                  className="p-3 border-2 border-black rounded-xl"
                />
              </form>
            </div>
          </div>,
          document.getElementById("main")
        )}



    </div>
  )
}

export default NotePanel