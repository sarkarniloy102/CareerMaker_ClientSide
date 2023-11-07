import { useLoaderData } from "react-router-dom";
import { FaLocationDot } from 'react-icons/fa6';


const ServiceDetails = () => {
    const servicedetails = useLoaderData()
    const { serviceName, serviceImage, serviceDescription, serviceProvider, servicePrice } = servicedetails;
    const { name, image, serviceProviderLocation, shortDescription } = serviceProvider;

    return (
        <div className="flex flex-col lg:flex-row items-center gap-5">
            {/* providers profile */}
            <div className="max-w-xs p-6 rounded-md shadow-md bg-gray-900 text-gray-50">
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
                            <button type="button" className="px-8 py-3 font-semibold border rounded border-gray-100 hover:bg-violet-400 text-gray-100">Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;