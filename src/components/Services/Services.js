import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    // Loading data to show services on the UI
    useEffect(() => {
        fetch('./services.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    //console.log(services);

    return (
        <div>
            <h3 className="text-2xl font-bold"><u>All Programmes</u></h3>

            {/* Showing cards containing services */}
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4 gap-4">
                {
                    services.map(service => <Service key={service.key} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;