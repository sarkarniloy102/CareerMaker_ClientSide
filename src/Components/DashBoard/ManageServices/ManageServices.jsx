import axios from "axios";
import { useEffect, useState } from "react";
import ManageService from "./ManageService";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const ManageServices = () => {


    const { user } = useContext(AuthContext);



    const [manageservices, setmanageservices] = useState([]);
    const url = "http://localhost:5000/addservice";

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setmanageservices(res.data);
                console.log(res.data);
            });
    }, []);
    //let updateservice = {};


    // Update service
    const handleUpdate = (e, _id) => {
        const modal = document.getElementById(_id);
        function closeModal() {
            modal.close();
        }
        console.log(_id);
        e.preventDefault();
        const form = e.target;
        const service = form.service.value;
        const area = form.area.value;
        const price = form.price.value;
        const description = form.description.value;
        const image = form.image.value;
        const yourname = user?.displayName;
        const email = user?.email;
        // const yourname = form.yourname.value;
        // const email = form.email.value;
        const updateservice = { service, yourname, email, area, price, description, image };
        console.log(updateservice);

        fetch(`http://localhost:5000/addservice/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // if (data.modifiedCount > 0) {
                //     // update state
                //     const remaining = manageservices.filter(manageservice => manageservice._id !== _id);
                //     let updated = manageservices.find(manageservice => manageservice._id === _id);
                //     updated.status = 'confirm';
                //     updated = updateservice;
                //     const newBookings = [updated, ...remaining];
                //     setmanageservices(newBookings);
                // }
                if (data.matchedCount > 0) {
                    // Find the index of the service to be updated
                    // const indexToUpdate = manageservices.findIndex(manageservice => manageservice._id === _id);

                    // // Create a copy of the updated service
                    // const updatedService = { ...manageservices[indexToUpdate] };
                    // updatedService.service = service;
                    // updatedService.area = area;
                    // updatedService.price = price;
                    // updatedService.description = description;
                    // updatedService.image = image;
                    // updatedService.yourname = yourname;
                    // updatedService.email = email;
                    // updatedService.status = 'confirm';

                    // // Create a copy of the state array and update the specific service
                    // const updatedServices = [...manageservices];
                    // updatedServices[indexToUpdate] = updatedService;

                    // // Set the state with the updated services
                    // setmanageservices(updatedServices);
                    const remaining = manageservices.filter(booking => booking._id !== _id);
                    let updated = manageservices.find(booking => booking._id === _id);
                    updated.status = 'confirm';
                    updated= updateservice;
                    const newBookings = [updated, ...remaining];
                    setmanageservices(newBookings);
                    setTimeout(closeModal, 100);
                    let timerInterval;
                    Swal.fire({
                        title: "Updated Successfully",
                        html: "I will close in <b></b> milliseconds.",
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: () => {
                            Swal.showLoading();
                            const timer = Swal.getPopup().querySelector("b");
                            timerInterval = setInterval(() => {
                                timer.textContent = `${Swal.getTimerLeft()}`;
                            }, 100);
                        },
                        willClose: () => {
                            clearInterval(timerInterval);
                        }
                    }).then((result) => {
                        /* Read more about handling dismissals below */
                        if (result.dismiss === Swal.DismissReason.timer) {
                            console.log("Updated Successfully");
                        }
                    });
                }

            })

    }

    // delete service
    const handledelete = (id) => {
        console.log(id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/addservice/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = manageservices.filter(manageservic => manageservic._id !== id);
                            setmanageservices(remaining);
                        }
                    })

            }
        });
    }
    return (
        <div className="my-10">
            <h2 className="text-5xl font-bold text-center">Manage Services </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2  mx-auto ">
                {manageservices?.map((manageservice, idx) => (
                    <ManageService key={idx} manageservice={manageservice} handleUpdate={handleUpdate} handledelete={handledelete}></ManageService>
                    
                ))}
            </div>

        </div>
    );
};

export default ManageServices;
