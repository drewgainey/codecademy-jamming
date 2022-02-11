import React from "react";
import "./App.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchResults } from "../SearchResults/SearchResults";
import { Playlist } from "../Playlist/Playlist";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        { 
          name: "Revolution",
          artist: "The Beatles", 
          album: "The White Album",
          id: 2 
        },
        {
          name: "Feathered Indians",
          artist: "Tyler Childers",
          album: "Purgatory",
          id: 2
        }
      ],
      playlistName: 'butt stuff music',
      playlistTracks: [
        { 
          name: "Revolution",
          artist: "The Beatles", 
          album: "The White Album",
          id: 2 
        },
        {
          name: "Feathered Indians",
          artist: "Tyler Childers",
          album: "Purgatory",
          id: 2
        }
      ] 
    };
    this.addTrack = this.addTrack.bind(this);
  }
  //watxh the video. No idea if this is right
  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } else {
      this.state.playlistTracks.push(track);
    }
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
