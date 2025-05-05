const Card = () => {
  return (
    <div className="p-4 w-86 ">
      <div className="w-full max-w-sm mx-auto rounded-2xl bg-white shadow-md">
        <div className="bg-amber-500 h-12 p-2 pl-3 rounded-t-2xl text-white">
          <p className="text-base font-semibold">All Users</p>
          <p className="text-sm">(All new users)</p>
        </div>

        <div className="flex gap-4 pt-4 pl-4 pr-4 items-center">
          <img
            className="h-12 w-12 object-cover"
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt=""
          />
          <div>
            <p className="font-bold">Vedant Tidke</p>
            <p className="text-sm break-all">vedant6447@gmail.com</p>
          </div>
        </div>

        <div className="flex gap-4 pt-4 pl-4 pr-4 items-center">
          <img
            className="h-12 w-12 object-cover"
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt=""
          />
          <div>
            <p className="font-bold">Vedant Tidke</p>
            <p className="text-sm break-all">vedant6447@gmail.com</p>
          </div>
        </div>

        <div className="flex gap-4 pt-4 pl-4 pr-4 items-center">
          <img
            className="h-12 w-12 object-cover"
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt=""
          />
          <div>
            <p className="font-bold">Vedant Tidke</p>
            <p className="text-sm break-all">vedant6447@gmail.com</p>
          </div>
        </div>

        <div className="flex gap-4 pt-4 pl-4 pr-4 items-center">
          <img
            className="h-12 w-12 object-cover"
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt=""
          />
          <div>
            <p className="font-bold">Vedant Tidke</p>
            <p className="text-sm break-all">vedant6447@gmail.com</p>
          </div>
        </div>

        <div className="flex justify-center items-center text-sm text-blue-600 p-2">
          <button>View All</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
