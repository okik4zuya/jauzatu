import { useDispatch, useSelector } from "react-redux";
import { UndanganItem } from "../../../";
import {
  setFilterInvitation,
  setSearchInvitation,
} from "../../../../actions/adminActions";

export default function UndanganList({ invitationList, userData }) {
  const dispatch = useDispatch();
  const { searchInvitation, filterInvitation } = useSelector(
    (state) => state.admin
  );
  console.log(invitationList);
  return (
    <>
      <div className="flex mb-4">
        <select
          className="form__select shadow-lg mr-2"
          value={filterInvitation}
          onChange={(e) => dispatch(setFilterInvitation(e.target.value))}
        >
          <option value="">Semua</option>
          <option>Tema 01</option>
          <option>Tema 02</option>
          <option>Tema 03</option>
        </select>
        <input
          className="form__input shadow-lg ml-2"
          placeholder="Cari..."
          value={searchInvitation}
          onChange={(e) => dispatch(setSearchInvitation(e.target.value))}
        />
      </div>
      <div className=" ">
        {invitationList
          .filter(
            (item) => item.tema === filterInvitation || filterInvitation === ""
          )
          .filter((item) =>
            item.slug.toLowerCase().includes(searchInvitation.toLowerCase())
          )
          .sort(function (a, b) {
            return new Date(b.createdAt) - new Date(a.createdAt);
          })
          .map((item, index) => (
            <UndanganItem
              key={item._id}
              id={item._id}
              user={item.user}
              slug={item.slug}
              tema={item.tema}
              createdAt={item.createdAt}
              updatedAt={item.updatedAt}
              invitationList={invitationList}
              userData={userData}
            />
          ))}
      </div>
    </>
  );
}
