import axios from "axios";
import { useEffect, useState } from "react";
import ManageService from "./ManageService";
import Swal from "sweetalert2";

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
            <h2 className="text-5xl font-bold text-center">Manage Services {manageservices.length}</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2  mx-auto ">
                {manageservices?.map((manageservice, idx) => (
                    <ManageService key={idx} manageservice={manageservice} handledelete={handledelete}></ManageService>

                ))}
            </div>

        </div>
    );
};

export default ManageServices;