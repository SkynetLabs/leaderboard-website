import { UserCircleIcon, ArrowSmRightIcon, IdentificationIcon, MapIcon } from "@heroicons/react/outline";

const StepCard = ({ icon, title, description, active, completed, xPadding }) => {
  if (!active && !completed) {
    return (
      <div className="w-1/3 text-center">
        <div className="bg-gray-300 rounded-lg flex items-center justify-center border-gray-200">
          <div className="w-1/3 bg-transparent h-20 flex items-center justify-center icon-step font-thin">{icon}</div>
          <div className="w-2/3 bg-gray-200 h-24 flex flex-col items-center justify-center px-1 rounded-r-lg body-step">
            <h2 className="font-bold text-sm">{title}</h2>
            <p className="text-xs text-gray-600">{description}</p>
          </div>
        </div>
      </div>
    );
  }

  if (active) {
    return (
      <div className="w-1/3 text-center">
        <div className="bg-primary-light rounded-lg flex items-center justify-center border border-primary">
          <div className="w-1/3 bg-transparent lg:h-20 flex items-center justify-center icon-step font-thin">
            {icon}
          </div>
          <div className="w-2/3 bg-green-50 lg:h-24 lg:py-0 py-2 flex flex-col items-center justify-center px-1 rounded-r-lg body-step">
            <h2 className="font-bold text-sm">{title}</h2>
            <p className="text-xs text-gray-600">{description}</p>
          </div>
        </div>
      </div>
    );
  }

  if (completed) {
    return (
      <div className="w-1/3 text-center opacity-50">
        <div className="bg-primary-light rounded-lg flex items-center justify-center border-primary">
          <div className="w-1/3 bg-transparent lg:h-20 flex items-center justify-center icon-step font-thin">
            {icon}
          </div>
          <div className="w-2/3 bg-green-50 py-2 lg:py-0 lg:h-24 flex flex-col items-center justify-center px-1 rounded-r-lg body-step">
            <h2 className="font-bold text-sm">{title}</h2>
            <p className="text-xs text-gray-600">{description}</p>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

const ArrowDivider = ({ completed }) => {
  return (
    <div className={"flex-1 flex items-center justify-center opacity-" + (completed ? "50" : "100")}>
      <ArrowSmRightIcon className="w-8 h-8 mx-2" />
    </div>
  );
};

const ProgressSteps = ({ step, xPadding = 6 }) => {
  return (
    <div>
      <h1 className="mb-4 text-center font-semibold text-gray-700">STEPS</h1>
      <div className={"flex px-" + xPadding}>
        <StepCard
          title="Login with MySky"
          description="Create a new decentralized login for all of Skynet"
          icon={<UserCircleIcon className="w-8 h-8" />}
          active={step === 1}
          completed={step > 1}
        />
        <ArrowDivider completed={step > 1} />
        <StepCard
          title="Create a Profile"
          description="Add a username, avatar and contact info to receive prizes"
          icon={<IdentificationIcon className="w-8 h-8" />}
          active={step === 2}
          completed={step > 2}
        />
        <ArrowDivider completed={step > 2} />
        <StepCard
          title="Explore &amp; Create"
          description="Use apps to rank up on the leaderboard"
          icon={<MapIcon className="w-8 h-8" />}
          active={step === 3}
          completed={false}
        />
      </div>
    </div>
  );
};

export default ProgressSteps;
