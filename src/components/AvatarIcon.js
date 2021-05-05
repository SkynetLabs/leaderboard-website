import { UserCircleIcon } from "@heroicons/react/solid";

const AvatarIcon = ({ avatar }) => {
  return (
    <>
      {/* {avatar && (
        <div className="flex justify-center mt-4">
          <img className="shadow sm:w-16 sm:h-16 w-16 h-16 rounded-full" src={avatar} alt="Avatar" />
        </div>
      )} */}
      {avatar && <img className="shadow sm:w-16 sm:h-16 w-16 h-16 rounded-full" src={avatar} alt="Avatar" />}
      {!avatar && <UserCircleIcon className="w-16 h-16 text-gray-200" />}
    </>
  );
};

export default AvatarIcon;
