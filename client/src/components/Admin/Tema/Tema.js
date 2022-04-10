import FrameAdmin from "../FrameAdmin";
import { TemaList } from "../../";

export default function Tema({ themes, provider }) {
  return (
    <FrameAdmin title="Tema">
      <div className=" pt-4 pb-4">
        <TemaList themes={themes} provider={provider} />
      </div>
    </FrameAdmin>
  );
}
