const About = () => {
  return (
    <div
      name="about"
      className="w-full py-20 sm:h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full sm:h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-blue-600">
              About Me
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div>
            <p className="sm:text-left text-3xl font-bold">
              Hi. I'm Abdoulaye, nice to meet you. Please take a look around.
            </p>
            <p className="py-2">
              I am a Technical Product Manager with over 6 years of experience.
              After completing my bachelor's degree in computer science in
              France, I worked with several amazing companies and multicultural,
              distributed teams worldwide, building health systems with
              data-driven solutions.
            </p>
            <p className="pb-2">
              I am passionate about delivering great products that improve
              people's lives. It is immensely satisfying to see my work making a
              positive impact on users.
            </p>
            <p className="pb-2">
              Besides product management, I enjoy coaching and mentoring junior
              professionals, sharing knowledge with the IT community, and
              providing training. I am constantly learning and evolving.
            </p>
          </div>
          <div>
            <p className="pb-2">
              One of my strengths is the ability to see the bigger picture when
              building great products by combining my technical expertise,
              business analysis skills, and product management acumen. I don't
              view software as mere code but as a means to deliver business
              value to customers and companies.
            </p>
            <p className="py-2">
              Bilingual in French and English, I can understand customers'
              problem statements and pain points, and help businesses solve them
              effectively. My goal in the long term is to become a world-class
              Product Director or Head of Product, building amazing products in
              a great company within the next decade.
            </p>
            <p className="py-2 font-bold text-xl italic text-blue-600">
              Thank you.
            </p>

            {/* I am passioate about building excellent software that improves the
            lives of those around me. I specialize in creating software for
            clients ranging from individuals and small-businesses all the way to
            large enterprise corporatioins. What would you do if you had a
            software expert available at your fingertips? */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
