'use client'
import Image from "next/image";

const CollectionSpotlight = () => {
    return (
        <div>
            <h1 className="text-5xl text-center font-bold mt-20">Collection Spotlight</h1>
            <p className="text-center mt-5">Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable <br /> experience. Grab yours today!</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 max-w-[900px] mx-auto">
                <div className="p-3 h-[571px] w-[258.88px] shadow-2xl dark:shadow-xl dark:bg-[#2b2b2b]">
                    <Image src='https://i.ibb.co/f27Cn4B/Ticket-Mockup-3-1.png' alt="image" width={246.88} height={100}></Image>
                    <div className="border-dashed border mb-3 w-[190px] mx-auto">
                    </div>
                    <div className="relative">
                        <div className="dividerCircle darkDividerCircle absolute w-3 h-6 bg-gray-200 rounded-r-full -mt-6 -left-3"></div>
                        <div className="dividerCircle darkDividerCircle absolute w-3 h-6 bg-gray-200 rounded-l-full -mt-6 -right-3"></div>
                    </div>
                    <div className="text-center">
                        <h1 className="text-lg font-bold">Las Vegas Aviators</h1>
                        <h1 className="text-sm mt-3">Oct 15 | Sun | 4:30 PM</h1>
                        <p className="text-sm text-gray-500 dark:text-gray-300 my-3">Las Vegas Ballpark, Las Vegas, Nevada</p>
                        <button className="text-white bg-black dark:bg-[#191919] py-1 text-sm px-10">Take Flight Collection</button>

                    </div>
                </div>
                <div className="p-3 h-[571px] w-[258.88px] shadow-2xl dark:shadow-xl dark:bg-[#2b2b2b]">
                    <Image src='https://i.ibb.co/6wm4L5Y/unnamed-1.png' alt="image" width={246.88} height={100}></Image>
                    <div className="border-dashed border mb-3 w-[190px] mx-auto">
                    </div>
                    <div className="relative">
                        <div className="dividerCircle darkDividerCircle absolute w-3 h-6 bg-gray-200 rounded-r-full -mt-6 -left-3"></div>
                        <div className="dividerCircle darkDividerCircle absolute w-3 h-6 bg-gray-200 rounded-l-full -mt-6 -right-3"></div>
                    </div>
                    <div className="text-center">
                        <h1 className="text-lg font-bold">Sacramento River Cats</h1>
                        <h1 className="text-sm mt-3">Oct 15 | Sun | 4:30 PM</h1>
                        <p className="text-sm text-gray-500 dark:text-gray-300 my-3">Sutter Health Park, Sacramento, California</p>
                        <button className="text-white bg-black dark:bg-[#191919] py-1 text-sm px-10">Orange Collection</button>

                    </div>
                </div>
                <div className="p-3 h-[571px] w-[258.88px] shadow-2xl dark:shadow-xl dark:bg-[#2b2b2b]">
                    <Image src='https://i.ibb.co/f27Cn4B/Ticket-Mockup-3-1.png' alt="image" width={246.88} height={100}></Image>
                    <div className="border-dashed border mb-3 w-[190px] mx-auto">
                    </div>
                    <div className="relative">
                        <div className="dividerCircle darkDividerCircle absolute w-3 h-6 bg-gray-200 rounded-r-full -mt-6 -left-3"></div>
                        <div className="dividerCircle darkDividerCircle absolute w-3 h-6 bg-gray-200 rounded-l-full -mt-6 -right-3"></div>
                    </div>
                    <div className="text-center">
                        <h1 className="text-lg font-bold">Las Vegas Aviators</h1>
                        <h1 className="text-sm mt-3">Oct 15 | Sun | 4:30 PM</h1>
                        <p className="text-sm text-gray-500 dark:text-gray-300 my-3">Las Vegas Ballpark, Las Vegas, Nevada</p>
                        <button className="text-white bg-black dark:bg-[#191919] py-1 text-sm px-10">Take Flight Collection</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollectionSpotlight;

//**  https://i.ibb.co/6wm4L5Y/unnamed-1.png https://i.ibb.co/f27Cn4B/Ticket-Mockup-3-1.png   **//