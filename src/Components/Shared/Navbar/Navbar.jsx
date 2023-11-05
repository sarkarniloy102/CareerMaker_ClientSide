import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from 'react-icons/ri';
import { HiOutlineLogin } from 'react-icons/hi';

const Navbar = () => {
    const navbar =
        <>
            <ul className="lg:flex items-center gap-5">
                <li><Link to={"/"} className="hover:text-violet-400">Home</Link></li>
                <li><Link to={"/services"} className="hover:text-violet-400">Services</Link></li>
                <li className="dropdown dropdown-bottom"><Link className="hover:text-violet-400">
                    <label tabIndex={0} className="m-1">Dashboard  </label> <RiArrowDropDownLine className="text-3xl"></RiArrowDropDownLine>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li ><Link className="hover:text-violet-400"> My-services </Link></li>
                        <li ><Link className="hover:text-violet-400">Add-services</Link></li>
                        <li ><Link className="hover:text-violet-400">My-schedules</Link></li>
                    </ul>
                </Link></li>
            </ul>


        </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navbar}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl hover:text-violet-400">Career maker</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navbar}
                </ul>
            </div>

            <Link to={"/login"} className="navbar-end flex items-center gap-x-2 sm:ml-auto ">
                <input className="btn text-gray-500 hover:text-violet-400 dark:text-gray-400 dark:hover:text-violet-700 cursor-pointer"
                    type="submit" value="Login" />
                < HiOutlineLogin></HiOutlineLogin>
            </Link>
        </div >
    );
};

export default Navbar;