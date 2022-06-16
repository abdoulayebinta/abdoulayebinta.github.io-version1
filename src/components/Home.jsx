import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import Bah from '../assets/bah.png';

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container*/}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col grid-cols-2 justify-center h-full">
        {/* Profile pic */}
        <div className="flex flex-wrap justify-center">
          <div className="w-6/12 sm:w-4/12 px-4">
            <img
              src={Bah}
              alt="Abdoulaye Binta Bah"
              className="shadow-lg rounded-full max-w-full h-auto align-middle border-none"
            />
          </div>
        </div>

        {/* ---------------- */}
        <p className="sm:text-4xl text-[#5C80FE]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#596A79] py-1">
          Abdoulaye Binta Bah
        </h1>
        <h2 className="py-1 text-4xl  font-bold text-[#E2B694]">
          I'm a Full-stack JavaScript Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a full-stack developer specializing in building responsive
          full-stack web applications. I am also passionate about data analytics
          (and occasionally teaching others programming concepts). I am also a
          life long learner and I am currently learning Blockchain technology
          and Web 3.0.
        </p>
        <div>
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
        </div>
      </div>
    </div>
  );
};
export default Home;
