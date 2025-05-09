import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Card = () => {
  const user = useSelector((state) => state.user);
  const [users, setUsers] = useState([]);
  const [showAll, setShowAll] = useState(false);  

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = user.token;
        const res = await axios.get('https://tech-bin.devloperhemant.com/api/admin/users', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log("Fetched users data:", res.data);
        setUsers(res.data.data || []); 
      } catch (error) {
        console.error('Error fetching users:', error);
        setUsers([]);
      }
    };

    fetchUsers();
  }, [user.token]);

  const displayedUsers = showAll ? users : users.slice(0, 4); 

  return (
    <div className="p-4 w-full max-w-md mx-auto">
      <div className="w-72 rounded-2xl ml-5 bg-white shadow-md">
        <div className="bg-amber-500 w-72 h-14 p-3 rounded-t-2xl text-white">
          <p className="text-base font-semibold">All Users</p>
          <p className="text-sm">(All new users)</p>
        </div>

        {displayedUsers.map((ele, index) => (
          <div key={index} className="flex gap-4 pt-4 px-4 items-center">
            <img
              className="h-12 w-12 object-cover rounded-full"
              src={ele.avatar || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
              alt="User"
            />
            <div>
              <p className="text-[#2F3038]">{ele.name}</p>
              <p className="text-sm text-[#7D7D7D] break-all">{ele.email}</p>
            </div>
          </div>
        ))}

        <div className="flex justify-center items-center text-sm text-blue-600 p-4">
          <button 
            className="hover:underline"
            onClick={() => setShowAll((prevState) => !prevState)}
          >
            {showAll ? "View Less" : "View All"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

