import Lottie from "lottie-react";
import animation from '../assets/Animation - 1702228727586.json'
import { FaGithub } from "react-icons/fa";
// absolute right-0 left-0
const Profile = () => {
    return (
        <div className="flex items-center gap-5 flex-col md:flex-row">
            <div className="">
                <Lottie className="h-screen w-full" animationData={animation} loop={true}></Lottie>
            </div>

            <div className="w-2/3">
                <h1 className=" header-font font-bold italic md:text-4xl text-lg">I am Junior MERN Stack Developer <br /> & <br /> Student of Computer Science</h1>
                <p className="p-3">Hello! I am <span className="text-lg font-bold">Sobuz Mia</span>, a passionate MERN stack developer with a love for crafting clean and efficient code. With a 6 Month journey in the world of web development, I specialize in React,MongoDB,Express js, Node js.Want to know how I may help your project? Check out my projects from my GitHub Profile <button className=""><a target="_blank"  rel="noopener noreferrer" href="https://github.com/Sobuz-Mia" className="flex font-bold text-black text-lg items-center gap-1"><FaGithub className="text-xl"/>Github</a></button></p>
            </div>
                       
        </div>
    );
};

export default Profile;