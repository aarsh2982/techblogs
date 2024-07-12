import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      <h2 className="text-6xl font-bold text-red-600 mb-4">404</h2>
      <h3 className="text-2xl font-semibold mb-2">Page Not Found</h3>
      <p className="text-lg mb-8">
        Sorry, we couldn't find the page you're looking for.
      </p>
      <Link href="/">
        <span className="bg-blue-600 text-white px-4 py-2 rounded-md text-lg font-medium hover:bg-blue-700 transition duration-300">
          Return Home
        </span>
      </Link>
    </div>
  );
}
