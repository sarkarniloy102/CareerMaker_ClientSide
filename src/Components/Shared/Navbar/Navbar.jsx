import { Link, Navigate, useLocation } from "react-router-dom";
import { RiArrowDropDownLine } from 'react-icons/ri';
import { HiOutlineLogin } from 'react-icons/hi';
import { IoLogOut } from 'react-icons/io5'
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const location = useLocation();

    const handlelogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }
    const handledash = () => {
        return (
            <Navigate to={location.pathname} replace={true} state={location.pathname} />
        );
    }
    const navbar =
        <>
            <div className="lg:flex items-center gap-5">
                <li><Link to={"/"} className="hover:text-violet-400">Home</Link></li>
                <li><Link to={"/services"} className="hover:text-violet-400">Services</Link></li>

                <li onClick={handledash} className="dropdown dropdown-bottom hover:text-violet-400 cursor-pointers">
                    <label tabIndex={0} className="m-1">Dashboard  <RiArrowDropDownLine className="text-3xl"></RiArrowDropDownLine></label>

                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">

                        
                        <li ><Link to={"/addservice"} className="hover:text-violet-400">Add-services</Link></li>
                        <li ><Link to={"/manageservice"} className="hover:text-violet-400"> Manage-services </Link></li>
                        <li ><Link to={"/myschedules"} className="hover:text-violet-400">My-schedules</Link></li>

                    </ul>

                </li>
                <li><Link to={"/aboutus"} className="hover:text-violet-400">About Us</Link></li>
            </div>


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
            {
                user?.email ?
                    <>
                        
                        <Link onClick={handlelogout} to={"/login"} className="navbar-end flex items-center gap-x-2 sm:ml-auto ">
                        <p>{user.email}</p>
                         <input className="btn text-gray-500 hover:text-violet-400   cursor-pointer"
                                type="submit" value="Logout" />
                            <IoLogOut></IoLogOut>
                        </Link>

                    </> :
                    <Link to={"/login"} className="navbar-end flex items-center gap-x-2 sm:ml-auto ">
                        <input className="btn text-gray-500 hover:text-violet-400  cursor-pointer"
                            type="submit" value="Login" />
                        < HiOutlineLogin></HiOutlineLogin>
                    </Link>
            }

        </div >
    );
};

export default Navbar;