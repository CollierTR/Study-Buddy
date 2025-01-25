import Header from "./componets/Header"
import Footer from "./componets/Footer"
import { useEffect, useReducer } from "react"
import NotePanel from "./componets/NotePanel"
import { Route, Routes } from "react-router"
import File from "./componets/File"

const today = new Date()
const date = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`
console.log(date)

const initialAppState = {
    mainTitle: date.toString(),
    bulletLists: [
      {
        title: "Main Points",
        points: []
      },
      {
        title: "Sub Points",
        points: []
      },
      {
        title: "Questions",
        points: []
      },
      {
        title: "Objections",
        points: []
      },
      {
        title: "Conversation Points",
        points: []
      },
    ],
    appColorTheme: 'original',
  }


function App() {


function reducer(state, action) {
  switch (action.type) {

    case 'addPoint':
      console.log('action recieved...')
      return {
        ...state,
        bulletLists:state.bulletLists.map((list) => {
          return list.title === action.payload.title
            ? {...list, points: [...list.points, action.payload.newPoint]}
            : list
        })
      };

    case 'addCategory':
      return {
        ...state,
        bulletLists: [...state.bulletLists, {title: action.payload.newCategory, points: []}]
      };

    case 'newFile':
      return initialAppState

    case 'updateTitle':
      return {
        ...state,
        mainTitle: action.payload.title
      }

    default:
      return state

  }

}

// const [appState, dispatch] = useReducer(reducer, initialAppState)
const [appState, dispatch] = useReducer(reducer, initialAppState, () => {
  const existingState = localStorage.getItem('appState');
  return existingState ? JSON.parse(existingState) : initialAppState;
});

// set local storage upon change in application state
useEffect(() => {
  localStorage.setItem('appState', JSON.stringify(appState))
}, [appState])

  return (
    <main id="main" className="relative min-h-screen flex flex-col justify-between bg-slate-300 place-items-center">
      <div className="w-full flex flex-col justify-start place-items-center">
        <Header appState={appState} dispatch={dispatch}></Header>
        <div className="w-11/12">
          <Routes>
            <Route path="/" element={<NotePanel appState={appState} dispatch={dispatch}/>}/>
            <Route path="/seeNotes" element={<File appState={appState} />}/>
          </Routes>
        </div>
      </div>
      <Footer></Footer>
    </main>
  )
}

export default App
