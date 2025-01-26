import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

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
          <div className="absolute w-full h-screen grid place-content-center text-2xl">
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white p-8 flex flex-col justify-center gap-4 rounded-2xl border-2 border-black"
            >
              <div className="flex justify-end place-items-center text-3xl text-red-600">
                <FontAwesomeIcon
                  onClick={() => setPopup(!popup)}
                  icon={faClose}
                />
              </div>
              <div className="flex justify-start place-items-center">
                <p>{bulletList.title}:</p>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  if (e.target.title.value) {
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
            </div>
          </div>,
          document.getElementById("main")
        )}



    </div>
  );
};

export default BulletList;
