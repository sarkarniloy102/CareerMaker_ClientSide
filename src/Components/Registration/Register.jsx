import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div>
            <section className="p-6 dark:bg-gray-800 dark:text-gray-50">

                <form >
                    <div className="w-full max-w-md p-8 space-y-3 mx-auto rounded-xl bg-gray-900 text-gray-100">
                        <h1 className="text-2xl font-bold text-center">Register Here</h1>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Name</label>
                            <input id="" type="text" placeholder="name" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 dark:text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Email</label>
                            <input id="email" type="email" placeholder="Email" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Password</label>
                            <input id="" type="password" placeholder="password" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">PhotoURL</label>
                            <input id="" type="text" placeholder="https://" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                        </div>
                        <input className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900 cursor-pointer" type="submit" value="Sign Up" />
                        <p className="text-xs text-center sm:text-gray-400 ">Do not have an account?
                            <Link to={'/login'} rel="noopener noreferrer" href="#" className="underline ml-2 text-gray-100">Login</Link>
                        </p>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Register;