import fronEnd from "../assets/frontend.jpg";
import backEnd from "../assets/backend.jpg";
import other from "../assets/other.jpg";
const Skills = () => {
  return (
    <div className="">
      <h1 className="text-4xl italic font-bold header-font">Skills </h1>
      <p className="text-lg italic py-2">
        Below is a quick overview of my main technical skill sets and tools I
        use.
      </p>
      <div className="grid md:grid-cols-3 mt-20 gap-5">
        <div className="card bg-[#F3F3F4] shadow-xl relative">
          <div className=" border-[#FBA037] border-2 rounded-full absolute -top-14 right-32">
            <img src={fronEnd} className="rounded-full h-28 w-28" alt="" />
          </div>
          <div className="card-body items-center text-center">
            <h2 className=" text-4xl my-3 italic font-bold header-font ">
              Frontend
            </h2>
            <ul className="list-disc">
              <li className="text-lg w-fit text-left">React</li>
              <li className="text-lg w-fit text-left">Javascript</li>
              <li className="text-lg w-fit text-left">Next.js</li>
              <li className="text-lg w-fit text-left">Tailwind Css</li>
              <li className="text-lg w-fit text-left">Material Ui</li>
              <li className="text-lg w-fit text-left">Daisy Ui</li>
              <li className="text-lg w-fit text-left">HTML/CSS</li>
            </ul>
          </div>
        </div>
        <div className="card bg-[#F3F3F4] shadow-xl relative">
          <div className=" border-[#FBA037] border-2 rounded-full absolute -top-14 right-32">
            <img src={backEnd} className="rounded-full h-28 w-28" alt="" />
          </div>
          <div className="card-body items-center text-center">
            <h2 className=" text-4xl my-3 italic font-bold header-font ">
              Backend
            </h2>
            <ul className="list-disc">
              <li className="text-lg w-fit text-left">Node js</li>
              <li className="text-lg w-fit text-left">Express js</li>
              <li className="text-lg w-fit text-left">MongoDB</li>
              <li className="text-lg w-fit text-left">Mongoose</li>
              <li className="text-lg w-fit text-left">Firebase</li>
            </ul>
          </div>
        </div>
        <div className="card bg-[#F3F3F4] shadow-xl relative">
          <div className=" border-[#FBA037] border-2 rounded-full absolute -top-14 right-32">
            <img src={other} className="rounded-full h-28 w-28" alt="" />
          </div>
          <div className="card-body items-center text-center">
            <h2 className=" text-4xl my-3 italic font-bold header-font ">
              Others
            </h2>
            <ul className="list-disc">
              <li className="text-lg w-fit text-left">UX</li>
              <li className="text-lg w-fit text-left">Figma</li>
              <li className="text-lg w-fit text-left">Stripe for Payment Gateway</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
