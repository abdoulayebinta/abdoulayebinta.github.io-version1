const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-blue-600">
              About Me
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Abdoulaye, nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p>
              I am a Full-stack JavaScript Developer with over 5 years of
              experience. After my bachelor’s degree in computer science in
              France, I worked with several amazing companies and multi-cultural
              and distributed teams around the world building health systems
              with data-driven solutions using technologies like JavaScript,
              Node.js, React.js, Redux, MongoDB, etc.
            </p>
            <p className="py-2">
              I am passionate about building great software that improves the
              lives of those around me. It is very satisfying for me, to see
              that my work is making an impact on people’s lives.
            </p>
            <p className="py-2">
              Besides, I also like to coach and mentor junior software
              developers to thrive in their professional careers, share
              knowledge with the IT community and give training. I am constantly
              learning and evolving.
            </p>
            <p className="py-2">
              Also, I believe that I have strong soft skills that made my past
              projects successful. One of my strengths is that I can see the
              bigger picture when building great products by combining my
              software engineering skills, business analysis skills, and product
              management skills. I do not see software just as code sitting in a
              silo but as something that brings business value to both customers
              and companies.
            </p>
            <p className="py-2">
              I speak both French and English and I can understand customers’
              problem statements and pain points that businesses want to solve
              and help them solve the problem, and that’s what I am looking for
              as a goal. I see myself 10 years from now as a world-class CTO
              building amazing products in a great company.
            </p>
            <p className="py-2">Thank you.</p>

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
