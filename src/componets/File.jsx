import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function formatStateForCopy(state) {
  let result = `${state.mainTitle}\n\n`;

  state.bulletLists.forEach(list => {
    if (list.points && list.points.length > 0) {
      result += `${list.title}:\n`;
      result += `• ${list.points}\n` + "\n";
    } else {
      result += "\n";
    }
  });
  return result.trim();
}

const File = ({ appState }) => {

    const copyContent = formatStateForCopy(appState)

    console.log(copyContent)

const bulletListNotEmpty = appState.bulletLists.every(list => list.points.length === 0);

  return (
    <div className="flex flex-col justify-center place-items-center p-6 gap-8 text-xl relative">

        {
            bulletListNotEmpty     
            ? <p className="text-2xl text-center"><span className="font-semibold text-3xl">This file is empty.</span><br /><br /> Click on <FontAwesomeIcon icon={faPenToSquare}/> and add notes to get started.</p>
            : <h1 className="text-3xl py-2 font-bold">{appState.mainTitle}</h1>
        }

      {appState.bulletLists.map((list) => (
        <div
          key={list.title}
          className={`flex flex-col gap-2 place-items-center ${
            list.points[0] ? "" : "hidden"
          }`}
        >
          <p className="font-semibold text-2xl text-center text-pretty">{list.title}:</p>

          <ul className="list-disc text-center text-pretty list-inside px-2 flex flex-col gap-1">
            {list.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      ))}

        <FontAwesomeIcon icon={faCopy} className="absolute top-8  right-6 text-2xl" onClick={() => navigator.clipboard.writeText(copyContent)} />

    </div>
  );
};

// TODO: look into the tailwind list-img class for checkbox

export default File;
