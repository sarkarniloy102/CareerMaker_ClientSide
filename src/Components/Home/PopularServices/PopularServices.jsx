import axios from "axios";
import { useEffect, useState } from "react";

import PopularService from "./PopularService";

const PopularServices = () => {
    const [popularservices, setpopularservices] = useState([]);
    const url = "http://localhost:5000/popularservices";

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setpopularservices(res.data);
                console.log(res.data);
            });
    }, []);

    return (
        <div className="my-10">
            <h2 className="text-5xl font-bold text-center">Popular Services</h2>
        
            <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto ">
                {popularservices?.map(popularservice => (
                    <PopularService key={popularservice._id} popularservice={popularservice} />
                ))}
            </div>
            <button type="button" className="px-8 py-3 font-semibold border rounded border-gray-100 text-gray-100 hover:bg-violet-400 w-full">Show All</button>
        </div>
    );
};

export default PopularServices;
