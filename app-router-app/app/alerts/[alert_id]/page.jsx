'use client';

import { useParams } from 'next/navigation';

export default function Page() {
    const params = useParams();
    const alertId = params.alert_id;

    return <h1>Viewing Alert ID: {alertId}</h1>;
}
