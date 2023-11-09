import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

import BookedService from "./BookedService";


const BookedServices = ({manageservice}) => {
    console.log(manageservice);

    const { user } = useContext(AuthContext);
    // const email = user?.email;
    const [bookservices, setbookservices] = useState([]);
    // console.log(email);
    console.log(user?.email)
    const url = `http://localhost:5000/mypurchase?email=${user?.email}`;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                setbookservices(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                // Handle the error, e.g., show an error message to the user
            }
        };
        fetchData();
    }, [url]);
    console.log(bookservices, user.email, user);
    //console.log( bookservices.formData.email)




    return (
        <div>
            <h2 className="text-4xl text-center font-bold">Purchase</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {
                    bookservices.map((bookservice, idx) => (
                        // Check the condition here and render the content accordingly
                        console.log(bookservice.formData.email),

                        <BookedService key={idx} bookservice={bookservice}></BookedService>

                    ))
                }
            </div>
            <div>
            <h2 className="text-4xl text-center font-bold">Pending Works</h2>
            </div>
        </div>

    );

};

export default BookedServices;