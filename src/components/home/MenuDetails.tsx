import { Transition } from "@headlessui/react";
import { MenuDetail } from "./types";

type Props = {
  data: MenuDetail[] | null;
};

function MenuDetails({ data }: Props) {
  return (
    <Transition
      show={!!data}
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      className="absolute inset-0 z-50 flex flex-col flex-wrap gap-8 bg-white p-6"
    >
      {data?.map((dataItem) => (
        <div>
          <div
            key={dataItem.title}
            className="mb-4 border-b border-dk-primary-250 pb-2 text-lg font-semibold uppercase"
          >
            {dataItem.title}
          </div>
          <ul className="flex flex-col gap-2 capitalize">
            {dataItem.items.map((item) => (
              <div key={item}>{item}</div>
            ))}
          </ul>
        </div>
      ))}
    </Transition>
  );
}

export default MenuDetails;
