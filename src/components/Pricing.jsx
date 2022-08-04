import React from 'react';
import Cards from './Cards';
import First from '../assets/first.png';
import Second from '../assets/second.png';
import Third from '../assets/third.png';


const Pricing = () => {
    return (
        <>
            <div className="w-full py-[10rem] px-4 bg-white text-black">
                <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                    <Cards icon={First}
                        priceTitle="Single User"
                        price="$149"
                        storage="500 GB Storage"
                        userCount="1 Granted User"
                        limits="Send up to 2 GB"
                    />
                    <Cards icon={Second}
                        priceTitle="Single User"
                        price="$149"
                        storage="500 GB Storage"
                        userCount="1 Granted User"
                        limits="Send up to 2 GB"
                    />
                    <Cards icon={Third}
                        priceTitle="Single User"
                        price="$149"
                        storage="500 GB Storage"
                        userCount="1 Granted User"
                        limits="Send up to 2 GB"
                    />
                </div>
            </div>
        </>
    );
};

export default Pricing;