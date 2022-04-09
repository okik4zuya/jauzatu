import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { UserItem } from "../../../";
import { setFilterUser, setSearchUser } from "../../../../actions/adminActions";

export default function UserList({ userData }) {
  const dispatch = useDispatch();
  const { searchUser, filterUser } = useSelector((state) => state.admin);
  return (
    <>
      <div className="flex mb-4">
        <select
          className="form__select shadow-lg mr-2"
          value={searchUser}
          onChange={(e) => dispatch(setFilterUser(e.target.value))}
        >
          <option value="">Semua</option>
          <option>Bronze</option>
          <option>Silver</option>
          <option>Gold</option>
        </select>
        <input
          className="form__input shadow-lg ml-2"
          placeholder="Cari..."
          onChange={(e) => dispatch(setSearchUser(e.target.value))}
        />
      </div>
      <div className="shadow-lg rounded-lg overflow-hidden ">
        <div className="bg-gray-200  flex text-sm text-gray-800 items-center px-4 py-4 font-bold">
          <div className="w-[80%] sm:w-[50%]">User</div>
          <div className="w-[30%] hidden sm:block ">Waktu Daftar</div>
          <div className="w-[20%] text-center">Aksi</div>
        </div>
        {userData
          .filter(
            (item) => item.accountType === filterUser || filterUser === ""
          )
          .filter((item) =>
            item.email.toLowerCase().includes(searchUser.toLowerCase())
          )
          .sort(function (a, b) {
            return new Date(b.createdAt) - new Date(a.createdAt);
          })
          .map((item, index) => (
            <UserItem
              key={item._id}
              id={item._id}
              userData={userData}
              email={item.email}
              createdAt={item.createdAt}
              accountType={item.accountType}
            />
          ))}

        <div className="bg-gray-200  flex text-sm text-gray-800 items-center px-4 py-4 font-bold">
          <div className="w-[80%] sm:w-[50%]">User</div>
          <div className="w-[30%] hidden sm:block">Waktu Daftar</div>
          <div className="w-[20%] text-center">Aksi</div>
        </div>
      </div>
    </>
  );
}
