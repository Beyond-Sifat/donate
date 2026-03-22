// Navbar.jsx

import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-xl font-bold text-indigo-600">Donate</h1>

      {/* Links */}
      <div className="space-x-6">
        <Link to="/" className="hover:text-indigo-600">Home</Link>
        <Link to="/donate" className="hover:text-indigo-600">Donate</Link>
        <Link to="/about" className="hover:text-indigo-600">About</Link>
        <Link to="/login" className="bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;