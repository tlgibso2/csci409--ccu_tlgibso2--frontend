'use client';

import { useParams } from 'next/navigation';

export default function Page() {
    const params = useParams();
    const routeId = params.route_id;

    return <h1>Viewing Route ID: {routeId}</h1>;
}
