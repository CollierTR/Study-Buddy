import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faClose,
	faPenToSquare,
	faTrash,
} from "@fortawesome/free-solid-svg-icons";

const BulletList = ({ bulletList, dispatch }) => {
	const [popup, setPopup] = useState(false);
	const [renamePopup, setRenamePopup] = useState(false);

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
									e.preventDefault();
									if (e.target.newPoint.value) {
										dispatch({
											type: "addPoint",
											payload: {
												title: bulletList.title,
												newPoint:
													e.target.newPoint.value,
											},
										});
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

								<FontAwesomeIcon
									icon={faTrash}
									onClick={() => {
										dispatch({type: "deleteCategory", payload: {bulletList: bulletList}});
                    setPopup(!popup)
									}}
								/>

								<FontAwesomeIcon icon={faPenToSquare} onClick={() => [setPopup(!popup), setRenamePopup(!renamePopup)]}/>
							</div>
						</div>
					</div>,
					document.getElementById("main")
				)}

			{renamePopup &&
				createPortal(
					<div className="absolute w-full h-screen bg-[rgba(0,0,0,0.5)] grid place-content-center text-2xl">
						<div
							onClick={(e) => e.stopPropagation()}
							className="bg-white p-8 flex flex-col justify-center gap-4 rounded-2xl border-2 border-black"
						>
							<div className="flex justify-between place-items-center text-3xl ">
								<p>Rename Category</p>
								<FontAwesomeIcon
									onClick={() => setRenamePopup(!renamePopup)}
									icon={faClose}
									className="text-red-600"
								/>
							</div>
							<form
								onSubmit={(e) => {
									e.preventDefault();
									if (e.target.rename.value) {
										dispatch({
											type: "renameCategory",
											payload: {
                        oldTitle: bulletList.title,
												newTitle: e.target.rename.value
											},
										});
									}
									setRenamePopup(!renamePopup)
								}}
							>
								<input
									ref={inputRef}
									name="rename"
									type="text"
									placeholder={`Add Point`}
									className="p-3 border-2 border-black rounded-xl"
								/>
							</form>
							<div className="flex gap-6">

							</div>
						</div>
					</div>,
					document.getElementById("main")
				)}

		</div>
	);
};

export default BulletList;
