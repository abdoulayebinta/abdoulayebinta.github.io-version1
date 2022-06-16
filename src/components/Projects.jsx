import Futurama from '../assets/futurama.jpg';
import WalyTracking from '../assets/waly-home.png';
import GridItem from './GridItem';

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-blue-600">
            Project
          </p>
          <p className="py-6">Check out some of my projects.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <GridItem
            title="Track Job Application"
            image={WalyTracking}
            demo="https://github.com/abdoulayebinta/waly-tracking"
            code="https://github.com/abdoulayebinta/waly-tracking"
          />
          <GridItem
            title="Search Futurama Quotes"
            image={Futurama}
            demo="https://github.com/abdoulayebinta/futurama-quotes"
            code="https://github.com/abdoulayebinta/futurama-quotes"
          />
          {/* <GridItem title="React JS Application" image={RealEstate} />
          <GridItem title="React JS Application" image={WorkImg} />
          <GridItem title="React JS Application" image={RealEstate} />
          <GridItem title="React JS Application" image={WorkImg} />
          <GridItem title="React JS Application" image={RealEstate} /> */}
        </div>
      </div>
    </div>
  );
};
export default Projects;
