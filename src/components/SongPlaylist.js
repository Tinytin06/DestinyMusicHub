import React from 'react'
import "./styles/SongPlaylist.css"

import { SongItem } from "./SongItem"

export function SongPlaylist({ playlistData,playNewSong,queueNewSong,soundtrackSongOptions }) {

    function getSongList(playlistDataIn) {
                    
        return (<SongItem data={playlistDataIn} playNewSong={playNewSong} queueNewSong={queueNewSong} soundtrackSongOptions={soundtrackSongOptions}/>);
    }

    const songList = getSongList(playlistData)
    // console.log(playlistData)

    return (
        <div className="song-playlist-container">
            <div className="song-list">
                {songList}
            </div>
        </div>
    )
}