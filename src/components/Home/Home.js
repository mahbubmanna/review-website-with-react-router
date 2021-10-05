import React, { useEffect, useState } from 'react';
import './Home.css'
import bannerImage from '..//../images/banner.png'
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
            <div className="banner bg-gradient-to-r from-green-400 via-green-100 to-green-100 grid grid-cols-1 sm:grid-cols-2 w-11/12 mx-auto mb-10 rounded-2xl">
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
            <div className="featured w-11/12 mx-auto bg-green-100 rounded-2xl ">
                <h3 className="text-2xl font-bold"><u>Featured Programmes</u></h3>

                <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4 gap-4 ">
                    {
                        services.slice(0, 4).map(service => <Featured key={service.key} service={service}></Featured>)
                    }
                </div>

            </div>
            <br></br>

            {/* <div class="relative h-64 m-8 overflow-hidden rounded-lg bg-indigo-500">
                <div class="absolute z-30 flex w-full h-full">
                    <div class="relative z-30 w-5/6 px-6 py-8 text-white font-bold md:py-10 md:w-1/2">
                        <h2 class="text-5xl">WE DEVELOP TOGETHER</h2>
                        <p>Expert coaching from highly qualified ex professional players, a fully equipped academy facility in the heart of Cardiff. We offer the very best opportunities to play football and get noticed in the Wales.  Do you have what it takes?  Get started today!</p>
                    </div>
                    <div class="absolute top-0 right-0 flex w-full h-full">
                        <div class="w-1/3 h-full bg-transparent"></div>

                    </div>
                </div>
                <div class="absolute top-0 right-0 block min-w-full h-full">
                    <img
                        alt="Snowy mountain lake"
                        class="object-cover min-w-full h-full"
                        src="https://images.unsplash.com/photo-1600077063877-22118d6290eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                    />
                </div>
            </div> */}
        </div>

    );
};

export default Home;