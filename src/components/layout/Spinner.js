import React from 'react';
import ripple from './ripple.gif';

export default function Spinner() {
    return (
        <div>
            <img
                src={ripple}
                alt="Loading..."
                style={{ width: '200px', margin: 'auto', display: 'block' }}
            />
        </div>
    )
}
