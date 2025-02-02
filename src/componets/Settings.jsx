import { faClose, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";

const Settings = () => {

  const navigate = useNavigate();

	return (
		<div className="bg-gray-300 w-full h-screen absolute top-0 left-0 z-10">
			<div className="w-full flex flex-row-reverse justify-between place-items-center py-2 px-3 text-2xl bg-gray-500">
				<FontAwesomeIcon
					className="text-3xl"
					icon={faClose}
					onClick={() => navigate(-1)}
				/>
			</div>
			<div className="flex flex-col place-items-center justify-center mx-auto gap-6 my-6">
				<p className="text-3xl">SETTINGS</p>
				<p>Set Default Categories</p>
				<p>Change Theme</p>
			</div>
		</div>
	);
};

export default Settings;
