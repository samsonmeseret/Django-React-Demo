import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";

export default function Users() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios
            .get("http://127.0.0.1:8000/users")
            .then((response) => {
                setUsers(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                setIsLoading(false);
            });
    }, []);
    if (isLoading) {
        return <Loader />;
    }
    return (
        <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <Link to="/">
                <button className="bg-gray-500 hover:bg-gray-700 text-white font-semibold py-1 px-4 rounded">
                    Home
                </button>
            </Link>
            <h1 className="text-2xl py-3">Users List</h1>

            <ul role="list" className="divide-y divide-gray-100">
                {users?.map((person) => (
                    <li
                        key={person.email}
                        className="flex justify-between gap-x-6 py-5"
                    >
                        <div className="flex min-w-0 gap-x-4">
                            <img
                                alt=""
                                src={person?.imageUrl}
                                className="h-12 w-12 flex-none rounded-full bg-gray-50"
                            />
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-900">
                                    {person?.name}
                                </p>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                                    {person?.email}
                                </p>
                            </div>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                            <div className="mt-1 flex items-center gap-x-1.5">
                                <Link to={`/users/${person?.id}`}>
                                    <button className="text-xs leading-5 bg-gray-50 rounded py-1.5 px-2 hover:bg-gray-200 duration-150 text-gray-500">
                                        Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}
