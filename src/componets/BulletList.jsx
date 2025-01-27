import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

const BulletList = ({ bulletList, dispatch }) => {


  const [popup, setPopup] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
  // Focus the input element when the component mounts
  if (inputRef.current) {
    inputRef.current.focus();
  }
  }, [popup]);

  return (
    <div
      onClick={() => setPopup(!popup)}
      className="w-full flex justify-between"
    >
      <p>{bulletList.title}</p>
      <p>{bulletList.points.length}</p>


      {popup &&
        createPortal(
          <div className="absolute w-full h-screen bg-[rgba(0,0,0,0.5)] grid place-content-center text-2xl">
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white p-8 flex flex-col justify-center gap-4 rounded-2xl border-2 border-black"
            >
              <div className="flex justify-between place-items-center text-3xl ">
                <p>{bulletList.title}:</p>
                <FontAwesomeIcon
                  onClick={() => setPopup(!popup)}
                  icon={faClose}
                  className="text-red-600"
                />
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  if (e.target.newPoint.value) {
                  dispatch({type: 'addPoint', payload: {title: bulletList.title, newPoint: e.target.newPoint.value}})
                  }
                  setPopup(!popup);
                }}
              >
                <input
                  ref={inputRef}
                  name="newPoint"
                  type="text"
                  placeholder={`Add Point`}
                  className="p-3 border-2 border-black rounded-xl"
                />
              </form>
              <div className="flex gap-6">
                <FontAwesomeIcon icon={faTrash}/>
                <FontAwesomeIcon icon={faPenToSquare}/>
              </div>
            </div>
          </div>,
          document.getElementById("main")
        )}



    </div>
  );
};

export default BulletList;
