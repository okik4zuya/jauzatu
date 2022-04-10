import { useDispatch, useSelector } from "react-redux";
import { TemaItem } from "../../../";
import { setShowTemaModal } from "../../../../actions/adminActions";
import { TemaModalAdmin } from "../../../";

export default function TemaList({ themes, provider }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex flex-wrap justify-center">
        <div className=" m-2 p-4 w-full sm:w-[175px] rounded-lg overflow-hidden bg-white shadow-lg">
          <div
            className="flex items-center justify-center h-full w-full border-4 border-dotted border-gray-300 rounded-md cursor-pointer"
            onClick={() => dispatch(setShowTemaModal(true))}
          >
            <div>
              <div className="font-bold text-gray-300 text-7xl text-center">
                +
              </div>
              <div className="text-center -mt-2 text-xs font-bold text-gray-300">
                Tambah Tema
              </div>
            </div>
          </div>
        </div>
        <TemaModalAdmin provider={provider} themes={themes} />
        {themes.map((item) => (
          <TemaItem
            key={item._id}
            id={item._id}
            title={item.title}
            description={item.description}
            image={item.image}
            tag={item.tag}
            demoLink={item.demoLink}
            provider={provider}
            themes={themes}
          />
        ))}
      </div>
    </>
  );
}
