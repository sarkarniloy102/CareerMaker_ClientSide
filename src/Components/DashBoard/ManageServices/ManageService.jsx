
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";


const ManageService = ({ manageservice, handledelete, handleUpdate, }) => {
    const { _id, service, area, yourname, email, image, price, description } = manageservice;


    const { user } = useContext(AuthContext);

    return (
        <div>
            <div className="flex flex-col max-w-lg p-6 space-y-6 mx-auto  my-10 overflow-hidden rounded-lg shadow-md bg-gray-900 text-gray-100">
                <div className="flex items-center space-x-4">
                    <img alt="" src={image} className="object-cover w-12 h-12 rounded-full shadow bg-gray-500" />
                    <div className="flex flex-col space-y-1">
                        <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{yourname}</a>
                        <h5 className="text-xs">{area}</h5>
                        <h5 className="text-xs">{email}</h5>
                    </div>
                </div>
                <div>
                    <img src={image} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-500" />
                    <h2 className="mb-1 text-xl font-semibold">{service}</h2>
                    <p className="text-sm text-gray-400">{description}</p>
                </div>
                <p>Price: {price}</p>

                <div className="flex justify-between gap-5">
                    <button onClick={() => document.getElementById(_id).showModal()} type="button" className=" md:w-1/2 px-8 py-3 font-semibold border rounded border-gray-100 text-gray-100 hover:bg-violet-400 " >Update</button>
                    < dialog id={_id} className="modal modal-bottom sm:modal-middle" >
                        <div className="modal-box space-y-4 text-left">
                            {/* ... (Service details) */}
                            <form onSubmit={(e) => handleUpdate(e, _id)} >
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
                                            <p name="email" className='w-full  border p-3 bg-slate-900'>{user?.email}</p>
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
                                <input type="submit" value="Update" className="btn btn-accent w-full" />

                            </form>
                            <div className="modal-action">
                                <form method="dialog">
                                    <button className="btn ">Close</button>
                                </form>
                                
                            </div>



                        </div>
                    </dialog >

                    <button type="button" onClick={() => handledelete(_id)} className="md:w-1/2 px-8 py-3 font-semibold border rounded border-gray-100 text-gray-100 hover:bg-red-600">Delete</button>
                </div>

            </div>
        </div>
    );
};

export default ManageService;