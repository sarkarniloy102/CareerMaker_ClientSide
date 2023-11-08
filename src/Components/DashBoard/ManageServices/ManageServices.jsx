import axios from "axios";
import { useEffect, useState } from "react";
import ManageService from "./ManageService";


const ManageServices = () => {

    const [manageservices, setmanageservices] = useState([]);
    const url = "http://localhost:5000/addservice";

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setmanageservices(res.data);
                console.log(res.data);
            });
    }, []);
    return (
        <div className="my-10">
            <h2 className="text-5xl font-bold text-center">Manage Services {manageservices.length}</h2>
        
            <div className="grid grid-cols-1 lg:grid-cols-2  mx-auto ">
                {manageservices?.map((manageservice,idx) => (
                    <ManageService key={idx} manageservice={manageservice}></ManageService>
                   
                ))}
            </div>
           
        </div>
    );
};

export default ManageServices;