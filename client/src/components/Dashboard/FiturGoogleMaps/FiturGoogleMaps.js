import FrameDashboard from "../FrameDashboard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateInvitationAction } from "../../../actions/invitationActions";
import AlertSuccess from "../../AlertSuccess";
import Spinner from "../../Spinner";

export default function FiturGoogleMaps({ data }) {
  const dispatch = useDispatch();
  const [updated, setUpdated] = useState({
    linkGoogleMaps: data?.dataFitur.linkGoogleMaps,
    iFrameGoogleMaps: data?.dataFitur.iFrameGoogleMaps,
  });
  const [isChecked, setIsChecked] = useState(data?.fitur.googleMaps);

  const invitationUpdate = useSelector((state) => state.invitationUpdate);
  const { loading: loadingUpdate, success: successUpdate } = invitationUpdate;
  const updateHandler = (e) => {
    e.preventDefault();
    setIsChecked(!isChecked);
    dispatch(
      updateInvitationAction({
        ...data,
        id: data?._id,

        fitur: {
          ...data.fitur,
          googleMaps: !isChecked,
        },
        dataFitur: {
          ...data.dataFitur,
          linkGoogleMaps: updated.linkGoogleMaps,
          iFrameGoogleMaps: updated.iFrameGoogleMaps,
        },
      })
    );
  };

  return (
    <FrameDashboard title="Google Maps">
      <div>
        <div className="px-6 flex mt-4 mb-4 items-center justify-center">
          <div className="mr-2 flex-1">Fitur Google Maps</div>
          {loadingUpdate && <Spinner />}
          <div className="mr-2">
            {data.fitur.googleMaps ? "Aktif" : "Tidak Aktif"}
          </div>
          <label
            for="toggle-example"
            className="flex relative items-center cursor-pointer"
          >
            <input
              type="checkbox"
              id="toggle-example"
              className="sr-only"
              checked={isChecked}
              onChange={updateHandler}
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600"></div>
          </label>
        </div>
        <form onSubmit={updateHandler}>
          {isChecked && (
            <div className="px-6 mt-6">
              <div className="mb-4 w-full">
                <label for="name" className="form__label">
                  Link Google Maps
                </label>
                <input
                  type="text"
                  name="name"
                  className="form__input"
                  placeholder=""
                  value={updated.linkGoogleMaps}
                  onChange={(e) =>
                    setUpdated({ ...updated, linkGoogleMaps: e.target.value })
                  }
                />
              </div>
              <div className="mb-4 w-full">
                <label for="name" className="form__label">
                  iFrame Google Maps
                </label>
                <textarea
                  type="textarea"
                  wrap="hard"
                  name="name"
                  className="form__input h-48 text-left"
                  placeholder=""
                  value={updated.iFrameGoogleMaps}
                  onChange={(e) =>
                    setUpdated({ ...updated, iFrameGoogleMaps: e.target.value })
                  }
                />
              </div>
              {successUpdate && <AlertSuccess>Update berhasil!</AlertSuccess>}
              <div className="grid place-items-center">
                <button type="submit" className="primary__button">
                  {loadingUpdate ? <Spinner /> : "Update"}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </FrameDashboard>
  );
}
