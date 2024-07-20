import React, { useState } from "react";
import DropdownMenu from "./Dropdown";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center border-b-2 bg-white px-10 py-2">
      <img src="logo_svg.svg" alt="logo" />
      <div>
        <nav>
          <ul className="flex">
            <li className="mx-2 ">Home</li>
            <li className="mx-2">Puja</li>
            <li className="mx-2">Panchang</li>
            <li className="mx-2">Temples</li>
            <li className="mx-2">Library</li>
          </ul>
        </nav>
      </div>
      <div className="flex ">
        <select className="bg-transparent">
          <option>English</option>
          <option>Hindi</option>
        </select>
        <button onClick={() => setIsOpen(!isOpen)} className="dropdown-button">
          <div role="button" onClick={() => setIsOpen(!isOpen)}>
            <img src="Default_Profile.svg" alt="profile" />
          </div>
        </button>
        <DropdownMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
};

export default Header;
