import { ReactNode } from "react";
import { FiChevronRight } from "react-icons/fi";

type Props = {
  children: ReactNode;
  icon: ReactNode;
  onClick: () => void;
};

function MenuItem({ children, icon, onClick }: Props) {
  return (
    <div
      className="flex cursor-pointer items-center gap-1 px-4 py-6 text-xl"
      onClick={onClick}
    >
      <div className="grid place-items-center text-dk-primary-500">{icon}</div>
      <span>{children}</span>
      <div className="ml-auto grid place-items-center">
        <FiChevronRight />
      </div>
    </div>
  );
}

export default MenuItem;
