'use client';

import { useParams } from 'next/navigation';

export default function Page() {
    const params = useParams();
    const vehicleId = params.vehicle_id;

    return <h1>Viewing Vehicle ID: {vehicleId}</h1>;
}
