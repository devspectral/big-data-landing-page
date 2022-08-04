import React from 'react';


const Cards = ({ icon, priceTitle, price, storage, userCount, limits }) => {
    return (
        <>
            <div className="w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:bg-gray-50 hover:scale-105 duration-200">
                <img className="w-20 mx-auto mt-[-3rem] bg-white"
                    src={icon}
                    alt="/"
                />
                <h2 className="text-2xl font-bold text-center py-8">{priceTitle}</h2>
                <p className="text-center text-4xl font-bold">{price}</p>
                <div className="text-center font-medium">
                    <p className="py-2 border-b mt-8 mx-8">{storage}</p>
                    <p className="py-2 border-b mx-8">{userCount}</p>
                    <p className="py-2 border-b mx-8">{limits}</p>
                </div>
                <button className="bg-[#212d57] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white">Start Trial</button>
            </div>

        </>
    );
};
export default Cards;