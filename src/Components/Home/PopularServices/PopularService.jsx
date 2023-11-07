import { Link } from "react-router-dom";

const PopularService = ({popularservice}) => {
    const {_id, serviceName, serviceImage, serviceDescription, serviceProvider, servicePrice } = popularservice;
    const {name,image}=serviceProvider;
    return (
        <div>
            <div className="flex flex-col max-w-lg p-6 space-y-6 mx-auto  my-10 overflow-hidden rounded-lg shadow-md bg-gray-900 text-gray-100">
            <div className="flex items-center space-x-4">
                    <img alt="" src={image} className="object-cover w-12 h-12 rounded-full shadow bg-gray-500" />
                    <div className="flex flex-col space-y-1">
                        <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{name}</a>
                        <h5 className="text-xs">Service Provider</h5>
                    </div>
                </div>
                <div>
                    <img src={serviceImage} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-500" />
                    <h2 className="mb-1 text-xl font-semibold">{serviceName}</h2>
                    <p className="text-sm text-gray-400">{serviceDescription}</p>
                </div>
                <p>Price: {servicePrice}</p>
                
               
              <Link to={`/servicedetails/${_id}`}>  <button type="button" className="px-8 py-3 font-semibold border rounded border-gray-100 text-gray-100 hover:bg-violet-400">View Details</button> </Link>
               
            </div>
        </div>
    );
};

export default PopularService;