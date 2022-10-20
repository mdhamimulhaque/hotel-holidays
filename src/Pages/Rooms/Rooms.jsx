import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FeaturedRoom from '../../components/FeaturedRoom/FeaturedRoom';

const Rooms = () => {
    const data = useLoaderData();

    return (
        <section className='container mx-auto py-24'>
            <div className="featured_room flex justify-between gap-10">
                {
                    data.map(room => <FeaturedRoom key={room._id} room={room} />)
                }
            </div>
        </section>
    );
};

export default Rooms;