import { Squash as Hamburger } from "hamburger-react";
import { useRef, useState } from "react";
// import { useState } from "react";
import { useClickAway } from "react-use";

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => setOpen(false));

  return (
    <div>
      <header className="flex justify-between px-6 py-2 items-center align-middle bg-white shadow-md">
        <a href="https://www.koinx.com/">
          <h1 className="text-xl font-bold text-[#0052FE]">
            Koin
            <span className="text-[#FE7801]">X</span>™
          </h1>
        </a>
        <div ref={ref} className="md:hidden ">
          <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
          {isOpen && (
            <div
              className="fixed left-0 shadow-4xl right-0 
              top-[3.5rem] p-5 pt-0 bg-blue-200 border-b border-b-white/20 rounded-b-2xl"
            >
              <ul className=" flex flex-col gap-2 justify-evenly mt-4">
                <li className="w-full p-[0.08rem] rounded-xl border-white border-2 px-2 mt-2">
                  <a className="text-sm font-medium" href="#">
                    Crypto Taxes
                  </a>
                </li>
                <li className="w-full p-[0.08rem] rounded-xl border-white border-2 px-2 mt-2">
                  <a className="text-sm font-medium" href="#">
                    Free Tools
                  </a>
                </li>
                <li className="w-full p-[0.08rem] rounded-xl border-white border-2 px-2 mt-2">
                  <a className="text-sm font-medium" href="#">
                    Resource Center
                  </a>
                </li>
                <li className="w-full p-[0.08rem] rounded-xl  mt-2">
                  <a
                    className="  hover:bg-blue-500  bg-blue-700 p-2 rounded-xl  text-white"
                    role="button"
                    href="https://app.koinx.com/get-started"
                  >
                    Get Started
                  </a>
                </li>

                {/* <a className="text-sm font-medium" href="#">
                  Free Tools
                </a>
                <a className="text-sm font-medium" href="#">
                  Resource Center
                </a>
                <a
                  className=" btn btn-primary hover:bg-blue-500 py-1"
                  role="button"
                  href="https://app.koinx.com/get-started"
                >
                  Get Started
                </a> */}
              </ul>
            </div>
          )}
        </div>
        <div className="md:flex md:items-center md:space-x-4 md:gap-4  hidden ">
          <a className="text-sm font-medium" href="#">
            Crypto Taxes
          </a>
          <a className="text-sm font-medium" href="#">
            Free Tools
          </a>
          <a className="text-sm font-medium" href="#">
            Resource Center
          </a>
          <a
            className=" btn btn-primary hover:bg-blue-500 py-1"
            role="button"
            href="https://app.koinx.com/get-started"
          >
            Get Started
          </a>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
