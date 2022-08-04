import React from 'react';
import Vector1 from '../assets/Vector1.jpg';


function Analytics() {
    return (
        <>
            <div className="w-full bg-white py-16 px-4">
                <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                    <img className="w-[400px] mx-auto my-4" src={Vector1} alt="/" />
                    <div className="flex flex-col justify-center">
                        <p className="text-[#1DAE80] font-bold">DATA ANALYTICS DASHBOARD</p>
                        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Manage Data Analaytics Centrally</h1>
                        <p className="">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quam sequi sunt sit magnam officiis mollitia cum. Vel minus id nihil, incidunt adipisci vero dolores nulla ut provident, vitae voluptas rerum excepturi quos modi expedita a eaque! Dignissimos, nostrum accusamus.
                        </p>
                        <button className="bg-[#212d57] text-[#1DAE80] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">Get Started</button>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Analytics;