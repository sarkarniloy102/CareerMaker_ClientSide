

const ManageService = ({ manageservice }) => {
    const { service, area, yourname, email, image, price, description } = manageservice;
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
            <button type="button" className=" md:w-1/2 px-8 py-3 font-semibold border rounded border-gray-100 text-gray-100 hover:bg-violet-400">Update</button>
            <button type="button" className="md:w-1/2 px-8 py-3 font-semibold border rounded border-gray-100 text-gray-100 hover:bg-red-600">Delete</button>
            </div>
                {/* <Link to={`/servicedetails/${_id}`}>  <button type="button" className="px-8 py-3 font-semibold border rounded border-gray-100 text-gray-100 hover:bg-violet-400">View Details</button> </Link> */}

            </div>
        </div>
    );
};

export default ManageService;