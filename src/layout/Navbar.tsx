import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useState, useContext } from "react";
import { Context } from '../context/Providers';

const Navbar = () => {
  const [collapse, setCollapse] = useState<boolean>(false);
  const { page, setPage }  = useContext(Context)

  return (
    <nav className="bg-gray-200 shadow shadow-gray-300 w-100 px-8 md:px-auto">
      <div className="h-16 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">

        <div className="text-indigo-500 md:order-1">

          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        </div>
        <div className="hidden md:block text-gray-500 order-3 w-full md:w-auto md:order-2">
          <ul className="flex font-semibold justify-between">
            <li className="md:px-4 md:py-2 text-indigo-500"><a href="#">Dashboard</a></li>
            <li className={`md:px-4 md:py-2 hover:text-indigo-400 ${page === "graph" ? 'text-indigo-400' : ''}`}><a href="#" onClick={() => setPage("graph")}>Graph</a></li>
            <li className={`md:px-4 md:py-2 hover:text-indigo-400 ${page === "prices" ? 'text-indigo-400' : ''}`}><a href="#" onClick={() => setPage("prices")}>Prices</a></li>
            <li className={`md:px-4 md:py-2 hover:text-indigo-400`}><a href="#" onClick={() => setPage("")}>About</a></li>
            <li className={`md:px-4 md:py-2 hover:text-indigo-400`}><a href="#" onClick={() => setPage("")}>Contact</a></li>
          </ul>
        </div>
        <div className="hidden md:flex md:gap-3 order-2 md:order-3">
          <ConnectButton />
        </div>

        <div className="md:hidden relative">
          <button className="navbar-burger flex items-center text-blue-600 p-3" onClick={() => setCollapse(item => !item)}>
            <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
          {
            collapse && (
              <div className="text-gray-500 order-3 absolute bg-gray-200 rounded-2xl top-[57px] right-[7px] w-[185px] z-50">
                <ul className="flex flex-col font-semibold justify-between" onClick={() => setCollapse(false)}>
                  <li className="px-4 py-2 text-indigo-500"><a href="#">Dashboard</a></li>
                  <li className={`md:px-4 md:py-2 hover:text-indigo-400 ${page === "graph" ? 'text-indigo-400' : ''}`}><a href="#" onClick={() => setPage("graph")}>Graph</a></li>
                  <li className={`md:px-4 md:py-2 hover:text-indigo-400 ${page === "prices" ? 'text-indigo-400' : ''}`}><a href="#" onClick={() => setPage("prices")}>Prices</a></li>
                  <li className={`md:px-4 md:py-2 hover:text-indigo-400`}><a href="#">About</a></li>
                  <li className={`md:px-4 md:py-2 hover:text-indigo-400`}><a href="#">Contact</a></li>
                  <li className="px-4 py-2 hover:text-indigo-400"><ConnectButton /></li>
                </ul>
              </div>
            )
          }
        </div>

      </div>
    </nav>
  )
}

export default Navbar