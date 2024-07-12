import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 font-semibold">
              <Link href="/">TechBlogs</Link>
            </div>

            {/* Navigation Links */}
            <nav className="flex-grow text-center">
              <div className="hidden md:flex space-x-4 justify-center">
                <Link href="/blog">Blog</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </nav>

            {/* Login and Signup Links */}
            <nav className="flex items-center space-x-4">
              <Link href="/login">
                <span className="text-gray-600 hover:text-[#DC143C] font-semibold">
                  Login
                </span>
              </Link>
              <Link href="/signup">
                <span className="bg-purple-700 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-800 hover:text-white">
                  Signup
                </span>
              </Link>
            </nav>

            {/* Mobile Menu Button (hidden by default) */}
            <div className="-mr-2 flex md:hidden">
              {/* Mobile menu button */}
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* Icon when menu is closed. */}
                {/* Icon when menu is open. */}
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
                {/* End open menu button. */}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-800">
            Hello, This is Tech-Blogs
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Your ultimate source for tech news and insights.
          </p>
        </div>
      </main>

      {/* Footer (optional) */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            &copy; 2024 TechBlogs. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
