import React from 'react';

export class TrackList extends React.Component {
    render() {
        return (
            <div className='TrackList'>
                {/* add a map method that renders a set of track components */}
                <h3>Track 1</h3>
                <h3>Track 2</h3>
                <h3>Track 3</h3>
            </div>
        );
    }
}