import { useState } from "react";
import Slider from "./Slider";
import MenuItem from "./MenuItem";
import { BsPhone, BsTablet, BsLaptop, BsDisplay } from "react-icons/bs";
import { MdStorage } from "react-icons/md";
import { MenuDetail } from "./types";
import { HeroMenu } from "./data";

function Hero() {
  const [activeMenu, setActiveMenu] = useState<MenuDetail[] | null>(null);

  function toggleActiveMenu(menu: MenuDetail[]) {
    if (activeMenu === menu) setActiveMenu(null);
    else setActiveMenu(menu);
  }

  return (
    <section
      className="flex gap-4 pt-4"
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="flex basis-1/5 flex-col justify-center gap-8 bg-white py-8">
        <MenuItem
          onClick={() => toggleActiveMenu(HeroMenu.MobilePhones)}
          icon={<BsPhone />}
        >
          Mobile Phones
        </MenuItem>
        <MenuItem
          onClick={() => toggleActiveMenu(HeroMenu.Tablets)}
          icon={<BsTablet />}
        >
          Tablets
        </MenuItem>
        <MenuItem
          onClick={() => toggleActiveMenu(HeroMenu.Laptops)}
          icon={<BsLaptop />}
        >
          Laptops
        </MenuItem>
        <MenuItem
          onClick={() => toggleActiveMenu(HeroMenu.Monitors)}
          icon={<BsDisplay />}
        >
          Monitors
        </MenuItem>
        <MenuItem
          onClick={() => toggleActiveMenu(HeroMenu.Storage)}
          icon={<MdStorage />}
        >
          Storage
        </MenuItem>
      </div>
      <Slider activeMenu={activeMenu} />
    </section>
  );
}

export default Hero;
