import React from 'react';
import fields from '../../images/fields.png';
import gym from '../../images/gym.png';
import store from '../../images/store.png';


const Facilities = () => {
    return (
        <div>
            <h3 className="text-xl py-10">While our Strong Football Coaching Team will take care of Football learning and selection opportunities, some of our academy’s other facilities are listed below:</h3>
            {/* Facilities */}
            <div className="facility bg-gradient-to-r from-green-400 via-green-100 to-green-100 grid grid-cols-1 sm:grid-cols-2 w-11/12 mx-auto mb-10 rounded-2xl justify-between">
                <div className="fac-image w-full flex justify-center items-center">
                    <img src={fields} className="rounded-full py-3 px-6" alt="" />
                </div>

                <div className="fac-text p-3 text--800 flex justify-center items-center">
                    <div>
                        <h2 className="text-5xl font-bold pb-2 fac-title">Modern Fields</h2>
                        <p>Our acdemy has 2 new artificial grass top quality football fields. There are also many football 7 and indoor football courts. Players will find anything they need inside the main building where they have available locker rooms, bathroom, showers and the rest of facilities for all our players.</p>
                    </div>
                </div>
            </div>

            <div className="facility bg-gradient-to-r from-green-100 via-green-100 to-green-400 grid grid-cols-1 sm:grid-cols-2 w-11/12 mx-auto mb-10 rounded-2xl justify-between">

                <div className="fac-text p-3 text--800 flex justify-center items-center">
                    <div>
                        <h2 className="text-5xl font-bold pb-2 fac-title">Gym</h2>
                        <p>We have two Gyms. One is dedicated for professional players. This is one of the best places to work out in the city is this Gym. This fitness centre has almost every machine to work out you can imagine. Is the perfect place to develop our player’s strenght. Our other gym is dedicated for youths.</p>
                    </div>
                </div>
                <div className="fac-image w-full flex justify-center items-center">
                    <img src={gym} className="rounded-full py-3 px-6" alt="" />
                </div>
            </div>

            <div className="facility bg-gradient-to-r from-green-400 via-green-100 to-green-100 grid grid-cols-1 sm:grid-cols-2 w-11/12 mx-auto mb-10 rounded-2xl justify-between">
                <div className="fac-image w-full flex justify-center items-center">
                    <img src={store} className="rounded-full py-3 px-6" alt="" />
                </div>

                <div className="fac-text p-3 text--800 flex justify-center items-center">
                    <div>
                        <h2 className="text-5xl font-bold pb-2 fac-title">Football Store</h2>
                        <p>We have our very own Footbaal Store to provide our trainees best balls, kits, and training gears. This service is not only limited to our trainies and available for all.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Facilities;