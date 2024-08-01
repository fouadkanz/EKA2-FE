import { StopCircle } from "lucide-react";

interface LoadingBarProps {
  isLaoding: boolean;
}
const LoadingBar: React.FC<LoadingBarProps> = ({ isLaoding }) => {
  return (
    <div className={`flex items-center border rounded-full shadow-sm`}>
      <div className="w-full pl-2 h-11">
        <div
          className={`${
            isLaoding ? "progress-bar" : "w-1/5"
          } transition-all duration-1000 ease-in-out h-full rounded-full flex justify-center items-center`}
        >
          Generating output...
        </div>
      </div>
      <button className="p-2 rounded-full">
        <span className="sr-only">Send</span>
        <div className="flex items-center justify-center w-10 h-10 bg-[#334155] rounded-full hover:bg-[#49586d]">
          <StopCircle className="w-6 h-6 text-white" />
        </div>
      </button>
    </div>
  );
};

export default LoadingBar;
