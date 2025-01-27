
const Footer = ({appState}) => {
  return (
    <div className="w-full px-3 py-2 bg-slate-500 flex justify-between place-items-center">
      <p>Last Updated: {appState.lastUpdated}</p>
    </div>
  )
}

export default Footer