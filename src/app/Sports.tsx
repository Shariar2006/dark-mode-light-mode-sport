import Image from 'next/image';

const Sports = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 mt-5">
        <div className="p-3 h-[552px] w-[258.88px] shadow-xl">
          <Image src='https://i.ibb.co/59D3vxZ/277307281-10158751675643224-148609460173032344-n-1.png' alt="image" width={246.88} height={100}></Image>
          <h1 className="mt-3 font-medium">Sacramento River Cats</h1>
          <div className="bg-gray-100 py-3 mt-3">
            <div className="flex justify-around items-center text-xs text-gray-400">
              <h3>total events</h3>
              <h3>sport</h3>
            </div>
            <div className="flex justify-around items-center text-base font-semibold">
              <h2>48 Events</h2>
              <h2>Baseball</h2>
            </div>
          </div>
        </div>
        <div className="p-3 h-[552px] w-[258.88px] shadow-xl">
          <Image src='https://i.ibb.co/KyX3PXC/370265821-812394460893172-8391088016650457893-n-1.png' alt="image" width={246.88} height={100}></Image>
          <h1 className="mt-3 font-medium">Las Vegas Aviators</h1>
          <div className="bg-gray-100 py-3 mt-3">
            <div className="flex justify-around items-center text-xs text-gray-400">
              <h3>total events</h3>
              <h3>sport</h3>
            </div>
            <div className="flex justify-around items-center text-base font-semibold">
              <h2>28 Events</h2>
              <h2>Baseball</h2>
            </div>
          </div>
        </div>
        <div className="p-3 h-[552px] w-[258.88px] shadow-xl">
          <Image src='https://i.ibb.co/RCrtD2Z/395319316-1098948761258832-1320994362450036961-n-1.png' alt="image" width={246.88} height={100}></Image>
          <h1 className="mt-3 font-medium">New Jersey Devils</h1>
          <div className="bg-gray-100 py-3 mt-3">
            <div className="flex justify-around items-center text-xs text-gray-400">
              <h3>total events</h3>
              <h3>sport</h3>
            </div>
            <div className="flex justify-around items-center text-base font-semibold">
              <h2>15 Events</h2>
              <h2>ice hockey</h2>
            </div>
          </div>
        </div>
        <div className="p-3 h-[552px] w-[258.88px] shadow-xl">
          <Image src='https://i.ibb.co/KyX3PXC/370265821-812394460893172-8391088016650457893-n-1.png' alt="image" width={246.88} height={100}></Image>
          <h1 className="mt-3 font-medium">Las Vegas Aviator</h1>
          <div className="bg-gray-100 py-3 mt-3">
            <div className="flex justify-around items-center text-xs text-gray-400">
              <h3>total events</h3>
              <h3>sport</h3>
            </div>
            <div className="flex justify-around items-center text-base font-semibold">
              <h2>48 Events</h2>
              <h2>Baseball</h2>
            </div>
          </div>
        </div>
        <div className="p-3 h-[552px] w-[258.88px] shadow-xl">
          <Image src='https://i.ibb.co/Rc9j3h9/unnamed-1-1.png' alt="image" width={246.88} height={100}></Image>
          <h1 className="mt-3 text-xl font-bold">Advertisement title</h1>
          <div className="text-sm text-gray-500 mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
      </div>
        </div>
    );
};

export default Sports;