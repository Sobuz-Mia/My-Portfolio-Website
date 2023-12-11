import { FaGithub, FaLocationArrow } from "react-icons/fa";
const Projects = () => {
  return (
    <div className="my-14">
      <h1 className="text-4xl italic font-bold header-font">Projects </h1>
      <p className="text-lg italic py-2">
        Below is a quick overview of my main Project there i used my Technical
        knowledge
      </p>
      <div className="grid md:grid-cols-3">
        <div className="card w-full bg-[#F3F3F4] shadow-xl">
          <figure>
            <img
              className="w-full"
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className=" text-center">
            <button className="text-center">
              <a
                href="https://matri-marry.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-lg header-font font-semibold hover:bg-white hover:rounded-lg p-2"
              >
                <FaLocationArrow className="text-xl" />
                Matrimony Website
              </a>
            </button>
            <button className="text-center ml-4">
              <a
                href="https://github.com/Sobuz-Mia/Matrimony-Client-Side"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 header-font font-semibold hover:bg-white hover:rounded-lg p-2"
              >
                <FaGithub className="text-xl" />
                Project Github Link
              </a>
            </button>
            <div className="flex flex-wrap gap-3 mt-5">
              <p className="bg-[#6C757D] rounded-md text-white p-3 w-fit">React</p>
              <p className="bg-[#6C757D] rounded-md text-white p-3 w-fit">Material Ui</p>
              <p className="bg-[#6C757D] rounded-md text-white p-3 w-fit">Node js</p>
              <p className="bg-[#6C757D] rounded-md text-white p-3 w-fit">Express js</p>
              <p className="bg-[#6C757D] rounded-md text-white p-3 w-fit">Firebase</p>
              <p className="bg-[#6C757D] rounded-md text-white p-3 w-fit">MongoDB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
