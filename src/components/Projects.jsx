import DataToCare from '../assets/DATATOCARE.png';
import WalyTracking from '../assets/waly-home.png';
import GridItem from './GridItem';

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full py-20 sm:h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-blue-600">
            Projects
          </p>
          <p className="py-6">
            Check out some of my projects and company project that I am involved
            in. You can find more on my{' '}
            <a
              className="border-b-2 font-bold"
              href="https://github.com/abdoulayebinta"
            >
              Github
            </a>
            .
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <GridItem
            title="Track Job Application"
            image={WalyTracking}
            demo="https://waly-tracking-prod.herokuapp.com"
            code="https://github.com/abdoulayebinta/waly-tracking"
          />
          <GridItem
            title="DataToCare"
            image={DataToCare}
            demo="https://www.youtube.com/watch?v=GJZrWa7uPMA&ab_channel=Savics"
            code="https://savics.org/datatocare/"
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
