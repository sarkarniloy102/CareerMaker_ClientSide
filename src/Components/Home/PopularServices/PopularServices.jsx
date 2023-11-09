import axios from "axios";
import { useEffect, useState } from "react";

import PopularService from "./PopularService";
import { Link } from "react-router-dom";

const PopularServices = () => {
    const [popularservices, setpopularservices] = useState([]);
    const url = 'http://localhost:5000/popularservices';

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setpopularservices(res.data);
                console.log(res.data);
            })
            .catch(error => {
                console.error("An error occurred:", error);
            });
    }, []);


    return (
        <div className="my-10 bg-gray-800 py-5">
            <h2 className="text-5xl font-bold text-center">Popular Services</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2  mx-auto ">
                {popularservices?.map(popularservice => (
                    <PopularService key={popularservice._id} popularservice={popularservice} />
                ))}
            </div>
            <Link to={"/services"}> <button type="button" className="px-8 py-3 font-semibold border rounded border-gray-100 text-gray-100 hover:bg-violet-400 w-full">Show All</button> </Link>
        </div>
    );
};

export default PopularServices;
