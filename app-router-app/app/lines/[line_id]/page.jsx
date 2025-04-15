'use client';

import { useParams } from 'next/navigation';

export default function Page() {
    const params = useParams();
    const lineId = params.line_id;

    return <h1>Viewing Line ID: {lineId}</h1>;
}
