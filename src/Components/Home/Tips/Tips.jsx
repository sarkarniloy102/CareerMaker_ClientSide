

const Tips = () => {
    return (
        <div>
             <section className="py-6 bg-gray-800 my-5 text-gray-50">
                <div className="container flex flex-col justify-center p-4 mx-auto space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
                    <div className="flex flex-col space-y-4 text-center lg:text-left">
                        <h1 className="text-5xl font-bold leadi">Get free weekly tips</h1>
                        <p className="text-lg">Subscribe to my weekly newsletter to find out about the latest and greatest news about just about everything!</p>
                    </div>
                    <div className="flex flex-row items-center self-center justify-center flex-shrink-0 shadow-md lg:justify-end">
                        <div className="flex flex-row">
                            <input type="text" placeholder="example@email.com" className="w-3/5 p-3 rounded-l-lg sm:w-2/3" />
                            <button type="button" className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-violet-400 text-gray-900">Subscribe</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Tips;