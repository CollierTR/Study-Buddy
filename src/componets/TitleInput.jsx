import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";

const TitleInput = ({ appState, dispatch }) => {

  const [editMode, toggleEditMode] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
  // Focus the input element when the component mounts
  if (inputRef.current) {
    inputRef.current.focus();
  }
  }, [editMode]);


  return (
    <div className="text-center">
      {!editMode && (
        <div onClick={() => toggleEditMode(!editMode)}>
          <h1 className="font-bold py-2 text-3xl relative">{appState.mainTitle}<FontAwesomeIcon className="px-1 text-sm absolute top-3"  icon={faPenToSquare} /></h1>
        </div>
      )}

      {editMode && (
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (e.target.title.value) {
              dispatch({
                type: "updateTitle",
                payload: { title: e.target.title.value },
              });
              }
              toggleEditMode(!editMode)
            }}
          >
            <input
            ref={inputRef}
            placeholder="Rename Title..."
              type="text"
              name="title"
              className="font-bold text-3xl text-center w-11/12 shadow-lg rounded-lg py-2 border border-black"
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default TitleInput;
