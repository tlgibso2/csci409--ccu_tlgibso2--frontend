import Link from 'next/link';

export default function About() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div>
                <h1 className="text-2xl font-bold mb-4">This is About Us Page</h1>
                <Link className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600" href="/">Home Page</Link>
            </div>
        </div>
    );
}
