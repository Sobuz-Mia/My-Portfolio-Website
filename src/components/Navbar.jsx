import logo from "../assets/logo.jpeg";

const Navbar = () => {
  const navLinks = (
    <>
      <li className="text-lg">
        <a href="">Home</a>
      </li>
      <li className="text-lg">
        <a href="">About</a>
      </li>
      <li className="text-lg">
        <a href="">Skills</a>
      </li>
      <li className="text-lg">
        <a href="">Contact</a>
      </li>
    </>
  );
//   fixed mx-auto right-0 top-0
  return (
    <div className="navbar bg-[#F3F3F4] rounded-lg flex justify-around">
      <div className="navbar-start flex justify-between md:justify-normal ">
        <div className="dropdown flex">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box justify-end "
          >
            {navLinks}
          </ul>
        </div>
        <div tabIndex={0} className=" avatar dropdown-left w-20 h-20">
          <div className="w-20 rounded-full">
            <img alt="Tailwind CSS Navbar component" src={logo} />
          </div>
        </div>
        <p className="ml-3 text-lg hidden md:block">MERN Stack Developer</p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
    </div>
  );
};

export default Navbar;
