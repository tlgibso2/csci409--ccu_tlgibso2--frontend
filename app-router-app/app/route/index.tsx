// pages/route/index.tsx
import { useEffect, useState } from "react";
import Link from "next/link";

export default function RouteList() {
    const [routes, setRoutes] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/route", {
            headers: {
                Authorization: "Basic " + btoa("admin:secret"), // hardcoded creds
            },
        })
            .then((res) => res.json())
            .then(setRoutes)
            .catch(console.error);
    }, []);

    return (
        <div>
            <h1>Available Routes</h1>
            <ul>
                {routes.map((route) => (
                    <li key={route.id}>
                        <Link href={`/route/${route.id}`}>{route.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
