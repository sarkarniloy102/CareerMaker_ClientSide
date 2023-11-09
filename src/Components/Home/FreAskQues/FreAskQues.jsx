

const FreAskQues = () => {
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <h2 className="mb-12 text-4xl font-bold leadi text-center sm:text-5xl">Frequently Asked Questions</h2>
                    <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline"> How can Career Maker help me in my career planning?</summary>
                            <div className="px-4 pb-4">
                                <p>Career Maker provides personalized career assessments, industry insights, and guidance to help you identify suitable career paths. It also offers services such as resume building, interview preparation, and access to job listings to support you throughout your career journey.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">Is Career Maker suitable for students and professionals alike?</summary>
                            <div className="px-4 pb-4">
                                <p>Yes, Career Maker is designed to cater to both students exploring educational and career options as well as professionals seeking career advancement or a change in direction. The platform adapts its services to meet the diverse needs of users at different stages of their careers.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">Is my personal information secure on Career Maker?</summary>
                            <div className="px-4 pb-4 space-y-2">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptates aspernatur dolores in consequatur doloremque inventore reprehenderit, consequuntur perspiciatis architecto.</p>
                                <p>Yes, Career Maker takes data security seriously. We implement robust measures to protect your personal information and ensure that your data is handled in accordance with privacy regulations. Review our privacy policy for more details on data protection.</p>
                            </div>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FreAskQues;