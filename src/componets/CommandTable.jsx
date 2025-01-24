import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons"

const CommandTable = ({ commands }) => {

  const [tableToggle, setTableToggle] = useState(true)

  return (
    <div className="w-10/12 mx-auto flex flex-col place-items-center gap-2 my-10">
        <div onClick={() => {setTableToggle(!tableToggle)}} className="flex justify-between place-items-center text-xl w-full px-2">
            <p>Commands:</p>
            {
                tableToggle ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />
            }
        </div>

        {
            tableToggle &&
            <table id="commandTable" cellPadding={'4px'}>
                <tbody>
                    <tr className="bg-slate-400">
                        <th>Shortcut</th>
                        <th>Command</th>
                    </tr>

                    {
                        commands.map((command) => (
                            <tr key={command.shortcut}>
                                <td>{command.shortcut}</td>
                                <td>{command.name}</td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        }
    </div>
  )
}

export default CommandTable