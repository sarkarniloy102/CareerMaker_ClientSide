

const AboutUs = () => {
    return (
        <div className="space-y-12 dark:bg-gray-800 dark:text-gray-100">
            
            <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
                <div className="container grid justify-center grid-cols-2 mx-auto text-center lg:grid-cols-3">
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leadi lg:text-6xl">50+</p>
                        <p className="text-sm sm:text-base">Clients</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leadi lg:text-6xl">89K</p>
                        <p className="text-sm sm:text-base">Followers on social media</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leadi lg:text-6xl">3</p>
                        <p className="text-sm sm:text-base">Published books</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leadi lg:text-6xl">8</p>
                        <p className="text-sm sm:text-base">TED talks</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leadi lg:text-6xl">22</p>
                        <p className="text-sm sm:text-base">Years of experience</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leadi lg:text-6xl">10+</p>
                        <p className="text-sm sm:text-base">Workshops</p>
                    </div>
                </div>
            </section>
            <section className="py-8">
                <div className="container mx-auto">
                    <div className="p-4 mx-auto text-center md:px-10 lg:px-32 xl:max-w-3xl">
                        <h2 className="text-2xl font-bold leadi sm:text-4xl">What can I offer to you?</h2>
                        <p className="px-8 my-4">Graeco causae vim cu, alii option ancillae sea ut. Ad mea alii pertinax, ei sed falli ponderum adipisci. Vis iisque scripta cu. Sea ex mollis consulatu dissentiet, dicta viris volutpat mea an, et nec discere epicuri</p>
                    </div>
                    <div className="grid grid-cols-5 p-4 md:p-8">
                        <div className="flex justify-center px-4 col-span-full md:col-span-1 md:flex-col md:justify-start md:items-start">
                            <button className="p-2 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-300 dark:text-gray-400">Mucius</button>
                            <button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-violet-400 dark:text-gray-50">Fabellas</button>
                            <button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-300 dark:text-gray-400">Aperiam</button>
                            <button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-300 dark:text-gray-400">Nonumy</button>
                            <button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-300 dark:text-gray-400">Propriae</button>
                        </div>
                        <div className="grid gap-12 py-4 text-center sm:grid-cols-2 col-span-full md:col-span-4 md:text-left">
                            <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 dark:text-violet-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                                </svg>
                                <h5 className="text-xl font-semibold">Est facilisis necessitatibus ea</h5>
                                <p>Ex audiam inermis elaboraret eam, oratio petentium ne cum, mundi interesset sit no.</p>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 dark:text-violet-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
                                </svg>
                                <h5 className="text-xl font-semibold">Vim iudico iisque te</h5>
                                <p>At cibo possim impetus pro, ius id mutat commodo offendit. Cum inani pertinax definitiones ad.</p>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 dark:text-violet-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
                                </svg>
                                <h5 className="text-xl font-semibold">Sea inani viris at</h5>
                                <p>Et eos atomorum urbanitas accommodare, in suscipit petentium vis. Pro ea nibh praesent postulant.</p>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 dark:text-violet-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                                <h5 className="text-xl font-semibold">Error nihil primis sit ut</h5>
                                <p>Eu vis urbanitas scripserit, civibus scripserit pro id. Omnes congue contentiones te eos.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
           

        </div>
    );
};

export default AboutUs;