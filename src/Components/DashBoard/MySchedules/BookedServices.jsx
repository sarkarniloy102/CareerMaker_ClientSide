import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

import BookedService from "./BookedService";


const BookedServices = () => {

    const user = useContext(AuthContext);
    const email = user?.email;
    const [bookservices, setbookservices] = useState([]);
    const url = `http://localhost:5000/mypurchase?email=${email}`;
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
        <div className="grid grid-cols-3 gap-5">
           <h2>hello{bookservices.length}</h2>
            {
                
                bookservices.map((bookservice, idx) => (
                    // Check the condition here and render the content accordingly
                    console.log(bookservice.formData.email),

                    <BookedService key={idx} bookservice={bookservice}></BookedService>

                ))
            }
        </div>
    );

};

export default BookedServices;