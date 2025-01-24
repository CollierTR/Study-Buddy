const File = ({ appState }) => {
  return (
    <div className="flex flex-col justify-center place-items-center p-6 gap-8 text-xl">
      <h1 className="text-3xl font-bold">{appState.mainTitle}</h1>

      {appState.bulletLists.map((list) => (
        <div key={list.title} className={`flex flex-col gap-2 place-items-center ${list.points[0] ? '' : 'hidden'}`}>

          <p className="font-semibold text-2xl">{list.title}:</p>

          <ul className="list-disc text-center list-inside px-2 flex flex-col gap-1">
            {list.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>

        </div>
      ))}

    </div>
  );
};

// TODO: look into the tailwind list-img class for checkbox

export default File;
