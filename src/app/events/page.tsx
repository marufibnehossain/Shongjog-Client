import EventCard from '@/components/EventCard';
import { IEvent } from '@/types/event.type';
import React from 'react';

const AllEventsPage = async () => {
    const res = await fetch("http://localhost:5000/events");
    const data = await res.json();
    console.log(data);

    return (
        <div className="min-h-screen w-full px-[5vw]">
            <div className='max-w-7xl mx-auto w-full py-8'>
                {data.length > 0 ? (
                <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {data.map((event: IEvent) => (
                        <li key={event.id}>
                            <EventCard {...event} />
                        </li>
                    ))}
                </ul>
                ) : (
                    <p>No events found.</p>
                )}
            </div>
        </div>
    );
};

export default AllEventsPage;