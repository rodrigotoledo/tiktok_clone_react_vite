import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-black via-fuchsia-700 to-red-600">
      <div className="flex items-center space-x-2">
        <span className="text-2xl font-bold text-white">TikTokClone</span>
      </div>
      <nav className="flex items-center space-x-4">
        <Link to="/" className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700">Posts</Link>
        <Link to="/sign-out" className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700">Sign Out</Link>
      </nav>
    </header>
  );
};

export default Header;