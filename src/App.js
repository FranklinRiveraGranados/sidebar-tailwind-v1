import "./App.css";
import { useState } from "react";
import { BsArrowLeftShort, BsChevronDown } from "react-icons/bs";
import { RiDashboardFill } from "react-icons/ri";
import icono from "./favicon.ico";
import {SiWindicss} from 'react-icons/si';
import {MdCo2} from 'react-icons/md';

function App() {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(0);

  const Menus = [
    { title: "Dashboard", spacing: true, icon: <RiDashboardFill/> },
    {
      title: "Calidad del aire Interiores",
      icon: <SiWindicss/>,
      spacing: true,
      submenu: true,
      submenuItems: [
        { title: "CTIC" },
        { title: "Comedor" },
      ],
    },
    {
      title: "Calidad del aire Exteriores",
      icon: <MdCo2/>,
      submenu: true,
      submenuItems: [
        { title: "CTIC" },
        { title: "Puerta 3" },
        { title: "Puerta 5"},
      ],
    },
    //{ title: "Profile", spacing: true },
    //{ title: "Setting" },
  ];

  return (
    <div className="flex">
      <div
        className={`bg-dark-purple h-screen p-5 pt-8 ${
          open ? "w-72" : "w-20"
        } duration-300  relative`}
      >
        <BsArrowLeftShort
          className={`bg-white text-dark-purple text-3xl 
          rounded-full absolute -right-3 top-9 border
          border-dark-purple cursor-pointer ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />

        <div className="inline-flex">
          <img
            src={icono}
            alt="icono"
            style={{ width: "40px" }}
            className={`bg-amber-300 p-1 rounded cursor-pointer block float-left mr-2 duration-700 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-2xl duration-300 ${
              !open && "scale-0"
            }`}
          >
            SmartCity
          </h1>
        </div>

        <ul className="pt-2">
          {Menus.map((menu, index) => {
            return (
              <>
                <li
                  key={index}
                  className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md 
                  ${menu.spacing ? "mt-9" : "mt-2"}`}
                >
                  <span className="text-2xl block float-left">
                    {menu.icon ? menu.icon : <RiDashboardFill />}
                  </span>
                  <span
                    className={`text-base font-medium flex-1 ${
                      !open && "hidden"
                    }`}
                    onClick={()=>setSubmenuOpen(index)}
                  >
                    {menu.title}
                  </span>
                  {menu.submenu && open && (
                    <BsChevronDown className={`${submenuOpen===index && "rotate-180"}`} onClick={()=>setSubmenuOpen(index)}/>
                  )}
                </li>
                {menu.submenu && submenuOpen===index && open && (
                  <ul>
                    {menu.submenuItems.map((submenuItem, index) => {
                      return <li key={index} className="text-gray-300 text-sm flex items-center gap-x-4
                      cursor-pointer p-2 px-5 hover:bg-light-white rounded-md">
                        {submenuItem.title}
                      </li>
                    })}
                  </ul>
                )}
              </>
            );
          })}
        </ul>
      </div>
      <div className="main">
        <h1 className="text-2xl font-semibol">Home Page</h1>
      </div>
    </div>
  );
}

export default App;
