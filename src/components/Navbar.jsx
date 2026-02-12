
import Button from "../utility/Button";
import { Link } from "react-router-dom";

/*

useref
useCallback
useMemo

*/

const Navbar = () => {

  return (
    <>
      <nav className="flex justify-between px-25 items-center py-4 bg-gray-900 text-white">
        <div className="">
         <h1 className="text-3xl font-bold">Logo</h1>
        </div>
        <ul className="flex gap-13">
          <li className="hover:text-red-500 cursor-pointer">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="hover:text-red-500 cursor-pointer">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="hover:text-red-500 cursor-pointer">
            <Link to={"/service"}>Service</Link>
          </li>
          <li className="hover:text-red-500 cursor-pointer">
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>

        <Button name={"signup"} />
      </nav>
    </>
  );
};

export default Navbar;
