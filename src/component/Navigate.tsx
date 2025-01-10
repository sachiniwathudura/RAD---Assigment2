import { Link } from "react-router";
import "../style/Navigation.css";
import { useEffect, useState } from "react";

export function Navigation() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    return (
        <>
            <header className="bg-purple-300 w-full">
                <nav className="px-4 py-2 text-xl shadow-lg flex justify-between items-center">
                    {/* Center Section */}
                    <ul className="flex text-black space-x-4">
                        <Link className="class-link" to='/'>Dashboard</Link>
                        <Link className="class-link" to='/add'>Add</Link>
                        <Link className="class-link" to='/delete'>Delete</Link>
                        <Link className="class-link" to='/update'>Update</Link>
                    </ul>
                    {/* Right Section */}
                    <div className="flex items-center space-x-4">

                        <button className="bg-purple-700 text-black-700 px-3 py-1 rounded-full hover:bg-purple-500">Sign In</button>
                    </div>
                </nav>
            </header>
        </>
    );
}
