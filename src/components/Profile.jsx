import Lottie from "lottie-react";
import animation from '../assets/Animation - 1702228727586.json'
const Profile = () => {
    return (
        <div className="flex items-center gap-5">
            <div className=" ">
                <Lottie className="h-screen" animationData={animation} loop={true}></Lottie>
            </div>

            <div>
                <h1>I am Junior MERN Stack Developer <br /> & <br /> Student of Computer Science</h1>
            </div>
                       
        </div>
    );
};

export default Profile;