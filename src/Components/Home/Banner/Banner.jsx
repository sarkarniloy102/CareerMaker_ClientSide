import bnr from '../../../assets/banner.svg'
const Banner = () => {
    return (
        <div>
            {/* <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={bnr} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leadi sm:text-6xl">The 
                            <span className="text-violet-400"> Career</span> <br />Maker
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Welcome to Career Maker, your trusted resource for shaping and advancing your professional journey. At Career Maker, we are dedicated to guiding individuals towards their dream careers and helping them achieve their full potential. Our platform offers a wealth of information, resources,
                            <br className="hidden md:inline lg:hidden" /> and expert guidance to empower you in making informed career choices, acquiring the necessary skills, and excelling in your chosen field.
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-black">Suspendisse</a>
                            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Malesuada</a>
                        </div>
                    </div>
                </div>
            </section> */}
            <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
                <div className="container grid gap-10 items-center mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
                    <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 lg:col-span-3 dark:bg-gray-900">
                        {/* <span className="block mb-2 dark:text-violet-400">Mamba design system</span> */}
                        <h1 className="text-5xl font-extrabold dark:text-gray-50">Build career with <br /> <span className='text-violet-400'>Career Maker </span></h1>
                        <p className="my-8">
                            <span className="font-medium dark:text-gray-50">Welcome to <span className='font-bold text-violet-400'>Career Maker</span> , your trusted resource for shaping and advancing your professional journey. At Career Maker, we are dedicated to guiding individuals towards their dream careers and helping them achieve their full potential. Our platform offers a wealth of information, resources, and expert guidance to empower you in making informed career choices, acquiring the necessary skills, and excelling in your chosen field. </span>
                        </p>
                        <form action="" className="self-stretch space-y-3">
                            <div>
                                <label className="text-sm sr-only">Your name</label>
                                <input id="name" type="text" placeholder="Your name" className="w-full rounded-md focus:ring focus:ri dark:border-gray-700" />
                            </div>
                            <div>
                                <label className="text-sm sr-only">Email address</label>
                                <input id="lastname" type="text" placeholder="Email address" className="w-full rounded-md focus:ring focus:ri dark:border-gray-700" />
                            </div>
                            <button type="button" className="w-full py-2 font-semibold rounded bg-violet-400 text-gray-900">Join the waitlist</button>
                        </form>
                    </div>
                    <img src={bnr} alt="" className="object-cover w-full rounded-md xl:col-span-2 dark:bg-gray-500" />
                </div>
            </section>
        </div>
    );
};

export default Banner;