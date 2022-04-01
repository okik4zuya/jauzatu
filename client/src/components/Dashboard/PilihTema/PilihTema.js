import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateInvitationAction } from "../../../actions/invitationActions";

import { FrameDashboard, TemaCard } from "../../";
import { dataTema } from "./dataTema";

export default function PilihTema({ data }) {
  return (
    <FrameDashboard title="Pilih Tema">
      <div className="grid place-items-center ">
        <div className="flex flex-wrap justify-center ">
          {dataTema.map((dataTema) => (
            <div className="mx-1 my-2">
              <TemaCard
                key={dataTema.id}
                data={data}
                id={dataTema.id}
                gambar={dataTema.gambar}
                tema={dataTema.tema}
                tag={dataTema.tag}
                description={dataTema.description}
                demoLink={dataTema.demoLink}
              />
            </div>
          ))}
        </div>
      </div>
    </FrameDashboard>
  );
}
