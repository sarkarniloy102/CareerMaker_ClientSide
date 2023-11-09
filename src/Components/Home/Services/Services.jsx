import axios from "axios";
import { useEffect, useState } from "react";
import PopularService from "../PopularServices/PopularService";



const Services = () => {

    const [popularservices, setpopularservices] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredServices, setFilteredServices] = useState([]);
    const url = "http://localhost:5000/allservices";

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setpopularservices(res.data);
                setFilteredServices(res.data);
                console.log(res.data);
            });
    }, []);
    // Handle search button click
    const handleSearch = () => {
        // Filter services based on the search query
        const filtered = popularservices.filter(service => {
            return service.serviceName.toLowerCase().includes(searchQuery.toLowerCase());
        });
        setFilteredServices(filtered);
    };

    return (
        <div>
            <div className="my-10">
                <h2 className="text-5xl font-bold pl-5  lg:pl-10 w-full lg:w-1/3 lg:mx-auto mb-4">All Services</h2>
                <div className="flex w-full lg:w-1/3 pl-5  mx-auto">
                    <input type="search"
                        name="Search"
                        placeholder="Search..."
                        className="w-32 py-2 pl-5 lg:pl-10 text-sm rounded-md sm:w-auto focus:outline-none bg-gray-800 text-gray-100 focus:bg-gray-900"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)} />
                    <button type="button"
                    onClick={handleSearch}
                     className="px-8 py-1 ml-3 font-semibold border rounded border-gray-100 text-gray-100 hover:bg-violet-400">Search</button>
                </div>


                <div className="grid grid-cols-1 lg:grid-cols-3   gap-5 ">
                    {filteredServices?.map(popularservice => (

                        <PopularService key={popularservice._id} popularservice={popularservice} />
                    ))}
                </div>
                
            </div>
        </div>
    );
};

export default Services;