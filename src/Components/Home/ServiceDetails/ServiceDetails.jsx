import { useLoaderData } from "react-router-dom";
import { FaLocationDot } from 'react-icons/fa6';
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";



const ServiceDetails = () => {
    // const { user } = useContext(AuthContext);
    const { user } = useContext(AuthContext);

    const servicedetails = useLoaderData()
    const { _id, serviceName, serviceImage, serviceDescription, serviceProvider, servicePrice } = servicedetails;
    const { name, image, serviceProviderLocation, shortDescription } = serviceProvider;
    console.log(user?.email);
    // State to store form input values
    const [formData, setFormData] = useState({
        date: "",
        instruct: "",
    });


    const userpurchase = { ...servicedetails };
    userpurchase["email"]=user?.email;
    // Handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        const { date, instruct, email } = formData;
        console.log(instruct, date, email)
    };
    // handle modal for purchase
    const handlemodal = (e) => {
        e.preventDefault();
        // const form = e.target.value;
        // console.log(form);

        console.log(servicedetails);
        console.log("adding");
        // send data to the server
        delete userpurchase._id;
        const purchasedata = { ...userpurchase, formData };
        console.log(purchasedata);


        fetch('http://localhost:5000/mypurchase', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchasedata)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your purches Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className="flex flex-col lg:flex-row items-center gap-5 my-10 p-6 rounded-md shadow-md bg-gray-800">
            {/* providers profile */}
            <div className="max-w-xs p-6  rounded-md shadow-md bg-gray-900 text-gray-50">
                <h2 className="text-xl font-semibold tracki text-left mb-4">Providers Profile</h2>
                <img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />
                <div className="mt-6 mb-2 flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-semibold tracki text-violet-400">{name}</h2>
                        <span className="block text-xs  tracki  ">Service Provider</span>
                    </div>
                    <div>
                        <FaLocationDot></FaLocationDot>
                        <span className="block text-xs  tracki  ">{serviceProviderLocation}</span>
                    </div>


                </div>
                <p className="dark:text-gray-100">{shortDescription}</p>
            </div>
            {/* service information */}
            <div className="rounded-md shadow-md bg-gray-900 text-gray-100">
                <h2 className="text-2xl font-semibold tracki text-center mt-4">Service Information</h2>
                <hr className="h-px mt-4 border-0 bg-gray-700" />
                <div className="container flex flex-col justify-center  p-6 mx-auto  lg:flex-row-reverse lg:justify-between">
                    <div className="flex items-center justify-center p-6   h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={serviceImage} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leadi sm:text-6xl">{serviceName}
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">{serviceDescription}
                        </p>
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-semibold tracki text-violet-400">Price: {servicePrice}</h2>
                            <button type="button" className="px-8 py-3 font-semibold border rounded border-gray-100 hover:bg-violet-400 text-gray-100" onClick={() => document.getElementById(_id).showModal()}>Book Now</button>
                            {/* modal */}
                            {/* <button className="btn mt-4" >Details</button> */}
                            <dialog id={_id} className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box space-y-4 text-left">
                                    <img src={serviceImage} alt="" />
                                    <h5>Category: <span className="px-8 py-1 bg-green-400 font-semibold border rounded border-gray-100">{serviceName}</span></h5>
                                    <h5> Provider mail:  <span className="px-8 py-1 bg-green-400 font-semibold border rounded border-gray-100">provider@gmail.com</span></h5>
                                    <h5> User mail:  <span className="px-8 py-1 bg-green-400 font-semibold border rounded border-gray-100">{user?.email}</span></h5>

                                    <p>Price: <span className="px-8 py-1 bg-green-400 font-semibold border rounded border-gray-100">{servicePrice}</span></p>
                                    {/* ... (Service details) */}
                                    <form onSubmit={handlemodal} className="text-left  space-y-4">
                                        {/* ... (Service details) */}
                                        <label className="pr-2">Date:</label>
                                        <input className="bg-green-400"
                                            type="date"
                                            id="start"
                                            name="date"
                                            // value={date}
                                            min="2022-01-01"
                                            max="2025-12-31"
                                            onChange={handleInputChange}
                                        /> <br />
                                        {/* ... (Other form elements) */}

                                        <textarea
                                            name="instruct"
                                            id="instruct"
                                            placeholder="If you want to tell anything ,write here"
                                            className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900 bg-green-400"
                                            // value={instruct}
                                            onChange={handleInputChange}
                                        />

                                        <input className="btn btn-accent w-full" type="submit" value="Purchase" />
                                    </form>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            <button className="btn ">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
