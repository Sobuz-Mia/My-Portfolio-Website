import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-10 bg-[#021732] p-5 text-white rounded-md">
      <a href="https://github.com/Sobuz-Mia" className="flex justify-center gap-3 text-xl items-center p-2 header-font mb-3">Check my work <span className="text-2xl"><FaGithub/></span> </a>
      <p className="text-xs">&copy; 2023 Sobuz. All rights reserved.</p>
    </div>
  );
};

export default Footer;
