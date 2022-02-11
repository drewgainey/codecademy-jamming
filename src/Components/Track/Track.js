import React from 'react';
import './Track.css';

export class Track extends React.Component {
    constructor(props) {
        super(props);
        this.isRemoval = false;
        this.renderAction = this.renderAction.bind(this);
    }
    renderAction() {
        if(this.isRemoval) {
            return <button>-</button>;
        } else {
            return <button>+</button>;
        }
    }
    render() {
        return (
            <div className='Track'>
                <div className='Track-information'>
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                {this.renderAction()}
            </div>
        );
    }
}