
import { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../../../Provider/AuthProvider';
const AddServices = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const handleproduct = e => {
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
        const newservice = { service, yourname, email, area, price, description, image };
        console.log(newservice);

        // send data to the server
        fetch('http://localhost:5000/addservice', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newservice)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Service Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (

        <div className="bg-[#F4F3F0] px-24 py-10">
            <h2 className="text-3xl font-extrabold text-center">Add Services</h2>
            <form onSubmit={handleproduct} >
                {/* Brand name and Product row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Service Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="service" placeholder="service Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <span className="label-text">Service Area</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="area" placeholder="service area" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* name & email */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <p name="yourname" className='w-full  border p-3 bg-slate-900'>{user?.displayName}</p>
                            {/* <input type="submit" name="type" placeholder="movie type" className="input input-bordered w-full" /> */}
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <label className="input-group">
                            <p name="email" className='w-full  border p-3 bg-slate-900'>helo{user?.email}</p>
                            {/* <input type="submit" name="type" placeholder="movie type" className="input input-bordered w-full" /> */}
                        </label>
                    </div>
                </div>


                {/* form Photo url row & price */}
                <div className=" md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <label className="input-group">
                            <input type="tssext" name="image" placeholder="image URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form description & rating row */}
                <div className=" mb-8">
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <label className="input-group">
                            <textarea
                                name="description"
                                placeholder="write short description"
                                className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 input input-bordered"



                            />

                        </label>
                    </div>

                </div>
                <input type="submit" value="Add Service" className="btn btn-block" />

            </form>
        </div>
    );
};

export default AddServices;
