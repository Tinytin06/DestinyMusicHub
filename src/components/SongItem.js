import './styles/SongItem.css';
import { useState } from "react";
import { Playlist } from './Playlist';


function SongItem({ data, onClick = undefined, expanded = false,playNewSong,queueNewSong,soundtrackSongOptions }) {
	const [isExpanded, setIsExpanded] = useState(expanded ? "shown" : "hidden");
	function expand() {
		if (isExpanded === "shown") {
			setIsExpanded("hidden");
			console.log(data.title + isExpanded);
		} else {
			setIsExpanded("shown");
			console.log(data.title + isExpanded);
		}
	}
	data.SongSources.sort((a, b) => a.track - b.track);
	return (
		<div className='song-item-container' >
			<div className='track' >{data.all_track}</div>
			<div className='title' onClick={expand}>{data.title}</div>
			<div id="dropdown" className={isExpanded}>
				{/*console.log(data.SongSources)*/}
				{/* <p>{data}</p> */}
				
				<Playlist 	playlistData={data.SongSources} 
							hasPlayButtons = {true}
							hasOptionsButtons = {true}
							options={soundtrackSongOptions}
							playNewSong={playNewSong}
							queueNewSong={queueNewSong}/>

			</div>

			 
		</div>
	);
}

export { SongItem };