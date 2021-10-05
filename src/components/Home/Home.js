import React, { useEffect, useState } from 'react';
import './Home.css'
import bannerImage from '..//../images/banner.png'
import coaches from '..//../images/coaches.jpg'
import Featured from '../Featured/Featured';

const Home = () => {
    // Setting Services for featured Programmes
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
            {/* Banner Section */}
            <div className="banner bg-gradient-to-r from-green-100 via-green-100 to-green-400 grid grid-cols-1 sm:grid-cols-2 w-11/12 mx-auto mb-10 rounded-2xl">
                <div className="banner-text p-3 text--800 flex justify-center items-center">
                    <div>
                        <h2 className="text-5xl font-bold pb-2">WE DEVELOP TOGETHER</h2>
                        <p>Expert coaching from highly qualified ex professional players, a fully equipped academy facility in the heart of Cardiff. We offer the very best opportunities to play football and get noticed in the Wales.  Do you have what it takes?  Get started today!</p>
                    </div>
                </div>
                <div className="banner-image w-full">
                    <img src={bannerImage} className="rounded-full py-3 px-6" alt="" />
                </div>
            </div>

            {/*Featured Programmes  */}
            <div className="featured w-11/12 mx-auto bg-green-100 rounded-2xl mb-10 ">
                <h3 className="text-2xl font-bold"><u>Featured Programmes</u></h3>

                <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4 gap-4 ">
                    {
                        services.slice(0, 4).map(service => <Featured key={service.key} service={service}></Featured>)
                    }
                </div>
            </div>

            {/* Coaches */}
            <div className="coaches bg-gradient-to-r from-green-400 via-green-100 to-green-100 grid grid-cols-1 sm:grid-cols-2 w-11/12 mx-auto mb-10 rounded-2xl">
                <div className="coaches-image w-full">
                    <img src={coaches} className="rounded-full py-3 px-6" alt="" />
                </div>
                <div className="coaches-text p-3 text--800 flex justify-center items-center">
                    <div>
                        <h2 className="text-5xl font-bold pb-2">Meet Our Trainers</h2>
                        <p><b>David Smith, Jamie Spires, and Dominics Ostler!!!</b> We think the names of our Head Coaches are enough to introduce them</p>
                    </div>
                </div>
            </div>

            <br></br>
        </div>

    );
};

export default Home;