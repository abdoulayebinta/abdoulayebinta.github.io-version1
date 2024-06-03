//import { HiArrowNarrowRight } from 'react-icons/hi';
//import { Link } from 'react-scroll';
// import Bah from '../assets/bah.png';
import Bah from '../assets/Abdoulaye_Bah.png';

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container*/}
      <div className="max-w-[1000px] mx-auto px-2 sm:px-8 flex flex-col grid-cols-2 justify-center h-full  3xl:bg-white">
        {/* Profile pic */}
        <div className="flex flex-wrap justify-center">
          <div className="w-1/4 md:w-1/4 bg-gray-300 rounded-full">
            <img
              src={Bah}
              alt="Abdoulaye Binta Bahhhhh"
              className="rounded-full max-w-full h-auto align-middle border-none"
            />
          </div>
        </div>
        <div className="mx-6">
          <p className="text-xl pt-1 sm:text-2xl text-[#5C80FE]">
            Greetings! My name is Abdoulaye Binta Bah
          </p>

          <h2 className="text-sm py-1 md:text-xl sm:text-2xl font-bold text-[#E2B694]">
            I am a Technical Product Manager, Product Owner.
          </h2>
          <p className="text-white  py-1 sm:py-4  sm:text-lg max-w-[850px]">
            I am a passionate and enthusiastic Technical Product Manager with a
            strong background in Software Development and Business Analysis. I
            am seeking Product Management or Product Ownership roles in the GTA
            or remote opportunities across Canada. With over six years of
            product development experience, I excel at connecting technical
            teams with business stakeholders to deliver innovative, high-quality
            products that meet strategic objectives.
          </p>

          <p className="text-white  py-1 sm:py-4  sm:text-lg max-w-[850px]">
            Certified in SAFe POPM, CSPO, PSPO, and PSM, I have a proven track
            record of leading successful initiatives, including the Ukraine
            Virtual Space healthcare dashboard and enhancing the COVID-19
            response in over 20 nations, significantly boosting customer
            engagement.
          </p>
          <p className="text-white  py-1 sm:py-4  sm:text-lg max-w-[850px]">
            Proficient in Product Planning, Roadmaps, and Go-to-market
            strategies, I integrate AI and Data Analytics to enhance user
            experiences and drive business growth.
          </p>
          <p className="text-white  py-1 sm:py-4  sm:text-lg max-w-[850px]">
            Bilingual in English and French, I translate complex technical
            concepts to drive successful projects. Let's connect to explore how
            my expertise can propel your organization's growth.
          </p>

          {/* <div>
          <Link
            className="cursor-pointer"
            to="projects"
            smooth={true}
            duration={500}
          >
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-500 hover:border-blue-[#5C80FE]">
              View Projects
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 hover:" />
              </span>
            </button>
          </Link>
        </div> */}
        </div>
      </div>
    </div>
  );
};
export default Home;
