import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateInvitationAction } from "../../../../../actions/invitationActions";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { LoveJourneyModal, LoveJourneyModalEdit } from "../../../../";
import {
  setIsLoveJourneyEdit,
  setLoveJourneyId,
  setShowLoveJourneyModal,
  setSingleLoveJourney,
} from "../../../../../actions/layoutActions";

export default function LoveJourneyItem({
  data,
  dataLoveJourney,
  id,
  title,
  text,
}) {
  const dispatch = useDispatch();
  const { singleLoveJourney } = useSelector((state) => state.dashboard);

  const deleteLoveJourney = (e) => {
    e.preventDefault();
    dispatch(
      updateInvitationAction({
        ...data,
        id: data?._id,
        loveJourney: dataLoveJourney.filter((item) => item._id != id),
      })
    );
  };

  const openEditModal = () => {
    dispatch(setIsLoveJourneyEdit(true));
    dispatch(
      setSingleLoveJourney({
        text: dataLoveJourney.filter((item) => item._id == id)[0].text,
        title: dataLoveJourney.filter((item) => item._id == id)[0].title,
      })
    );
    dispatch(setLoveJourneyId(id));
  };

  return (
    <div className=" shadow-lg rounded-lg overflow-hidden my-4">
      <div className="flex bg-gray-100 pt-2 pl-2 pb-2 pr-2">
        <div className="flex-1">{title}</div>
        <LoveJourneyModalEdit id={id} data={data} />
        <div
          className="px-2 text-gray-500 cursor-pointer"
          onClick={openEditModal}
        >
          <FaEdit />
        </div>
        <div
          className="px-2 text-gray-500 cursor-pointer"
          onClick={deleteLoveJourney}
        >
          <FaTrashAlt />
        </div>
      </div>
      <div className="bg-gray-50 pt-2 pl-4 pb-2 pr-4">{text}</div>
    </div>
  );
}
