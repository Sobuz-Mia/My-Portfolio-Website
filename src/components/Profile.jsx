import Lottie from "lottie-react";
import animation from '../assets/Animation - 1702228727586.json'
import { FaGithub } from "react-icons/fa";
const Profile = () => {
    return (
        <div className="flex items-center gap-5">
            <div className="">
                <Lottie className="h-screen w-full" animationData={animation} loop={true}></Lottie>
            </div>

            <div className="w-2/3">
                <h1 className="profile-desc font-bold italic">I am Junior MERN Stack Developer <br /> & <br /> Student of Computer Science</h1>
                <p>Hello! I am <span className="text-lg font-bold">Sobuz Mia</span>, a passionate MERN stack developer with a love for crafting clean and efficient code. With a 6 Month journey in the world of web development, I specialize in React,MongoDB,Express js, Node js.Want to know how I may help your project? Check out my projects from my GitHub Profile <button className=""><a href="" className="flex font-bold text-black text-lg items-center gap-1"><FaGithub className="text-xl"/>Github</a></button></p>
            </div>
                       
        </div>
    );
};

export default Profile;