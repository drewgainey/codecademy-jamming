import React from 'react';
import './SearchBar.css';

export class SearchBar extends React.Component {
    render() {
        return (
            <div className='SeachBar'>
                <input placeholder='Enter A Son, Album, or Artist' />
                <button clasName ="SearchButton">SEARCH</button>
            </div>
        );
    }
}
