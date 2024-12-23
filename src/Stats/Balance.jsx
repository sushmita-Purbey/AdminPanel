import Title from "../ui/Title";
import { FiSend } from "react-icons/fi";
import BarChart from "./BarChart";

const Balance = ({ darkMode }) => {
  return (
    <div className="bg-white p-4 sm:p-5 md:p-6 rounded-2xl dark:bg-gray-600 dark:text-gray-300 flex-1">
      <div className="flex justify-between items-center">
        <Title className="text-lg sm:text-xl md:text-2xl">Balance</Title>
        <FiSend className="bg-gray-500 p-2 rounded-full text-gray-300 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />
      </div>
      <div>
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl">
          $600,000 <span className="font-medium text-lg sm:text-xl md:text-2xl">(USD)</span>
        </h1>
        <span className="text-sm sm:text-base md:text-lg">on July 2024</span>
      </div>
      <BarChart darkMode={darkMode} />
    </div>
  );
};

export default Balance;
