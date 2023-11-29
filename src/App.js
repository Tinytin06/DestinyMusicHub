import React, { createElement } from 'react';
import {useState} from 'react';
//import {ScaleText} from 'react-scale-text';
import './MusicPlayer.js';
import seasonOfPlunder from "./season_of_plunder.jpg";
import lightfall from './lightfall.jpg';
import { YTPlayer } from './MusicPlayer.js';
//hi does this work
const seasonOfPlunderText = 'Season of plunder was released in 2022. The composers for the soundtrack were: Michael Salvatori, Skye Lewin, Josh Wosser, and Michael Sechrist.';
const lightfallText = 'Lightfall was released in 2022. The composers for the soundtrack were: Michael Salvatori, Sky Lewin, Josh Mosser, Michael Sechrist, Rotem Moav, and Peter Schlosser';

function App() {
  return (
    <div classname="App">
    <header className="App-header">
      <Navbar />
      <h1> Destiny Music Hub</h1>
    </header>
    <body>       
      <h2> Featured Tracks</h2> 
      <YTPlayer />
      <Slideshow images ={[seasonOfPlunder, lightfall]} texts = {[seasonOfPlunderText, lightfallText]} fontsizes = {['24pt', '22pt']}/>
      
      <Slideshow images ={[seasonOfPlunder, lightfall]} texts = {[seasonOfPlunderText, lightfallText]} fontsizes = {['24pt', '22pt']}/>
      
      <div class = 'footer'>
        <p>Created by Gabriel Bryan 2023</p>
      </div>
    </body>
    </div>
  );
}

function Navbar(){
  
  let [solid, setSolid] = useState(false);
  const onScroll = (pixels) => {
    return () => {
      if(!solid && window.scrollY >= pixels){
        setSolid(true);
      } else if (solid && window.scrollY < pixels){
        setSolid(false);
      }
    }
  }
  window.addEventListener('scroll', onScroll(252));
  return (
    <ul className = {solid ? 'solid' : 'transp'}>
      <li><a href="home">Destiny Music List</a></li>
      <li><a href="contact.asp">Officially Released</a></li>
      <li><a href="about.asp">Complete Music Archive</a></li>
      <li><a href="default.asp">Home</a></li>
    </ul>
  );
}

function Slideshow(props){
  //const [text, setText] = useState('');
  const [element, setElement] = useState(0);

  const changeElement = (prev = false) =>{
    let newE = prev ? element - 1 : element + 1;
    if (newE < 0) {
      newE = props.images.length - 1;
    } else if (newE >= props.images.length){
      newE = 0;
    }
    console.log(newE);
    setElement(newE);
  }

  const images = [];
  const dots = [];

  for(let i = 0; i < props.images.length; i++){
    images.push(React.createElement(CarouselElement, {url: props.images[i]}));
    dots.push(React.createElement('span', {class: 'dot', onClick: () => setElement(i)}));
  }

  let jsxImgs = React.createElement(
    'div',
    {className: 'slideshow-img', style: {marginRight: '5%'}},
    images[element]
  );

  //setText('Does any aaaa aaaaaaaaaaaaaaaaaa  a aa  a a a a a a a a a a a a a a a a a aa  a a a a a a  a  aa  hjahj hj hjhj hj hj hjhj j hj  hj   kj ljlkjlkjlkj  jlklkj lkj lkj lkj lkjlkj lkj lkj lkjlkj lkj lkj lkjjlklj lkj lkj lkjlkj lkj  lkjlkjlkj lkj lkj lkj lkjlkjlkj lkj  lkj lkj lklkj lkj lkj lkj lkj lkj lkj of this bs even work?');
  return (
    <div class = 'slideshow-container' style = {{display: 'flex'}}>
      <div className = 'slideshow-imgs' style = {{margin: '5%'}}>
        {jsxImgs}
        <a class="prev" onClick={() => changeElement(true)}>&#10094;</a>
        <a class="next" onClick={changeElement}>&#10095;</a>
        <div style={{textAlign:'center', margin: '10px'}}>
          {dots}
        </div>
      </div>
      <p style = {{margin: 'auto 2%', fontSize: props.fontsizes[element]}}>{props.texts[element]}</p>
    </div>);
}

function CarouselElement(props){
  return (<div>
    <img src = {props.url}></img>
  </div>);
}

export default App;
