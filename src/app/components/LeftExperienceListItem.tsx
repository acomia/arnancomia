import { IExperience } from "@utils/constants";

interface IProps {
  data: IExperience;
}

export default function LeftExperienceListItem({ data }: IProps) {
  return (
    <div className="flex justify-between lg:h-48 h-64">
      {/* Left Container */}
      <div className="w-1/3">
        {/* Job Title */}
        <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
          {data.title}
        </div>
        {/* Job Description */}
        <div className="p-3 text-sm italic">{data.description}</div>
        {/* Job Date */}
        <div className="p-3 text-red-400 text-sm font-semibold">
          {data.employementDate}
        </div>
        {/* Job Company */}
        <div className="p-1 rounded bg-white text-sm w-fit">
          {data.companyName}
        </div>
      </div>
      {/* Center Container */}
      <div className="w-1/6 flex justify-center">
        {/* Line */}
        <div className="w-1 h-full bg-gray-600 rounded relative">
          {/* Circle */}
          <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
        </div>
      </div>
      {/* Right Container */}
      <div className="w-1/3"></div>
    </div>
  );
}
