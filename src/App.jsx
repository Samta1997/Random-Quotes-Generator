import { useEffect, useRef, useState } from "react"
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaCopy } from "react-icons/fa";

const quotes=[
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      "The way to get started is to quit talking and begin doing.",
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking.",
      "The future belongs to those who believe in the beauty of their dreams.",
      "You must be the change you wish to see in the world.",
      "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
      "The only thing necessary for the triumph of evil is for good men to do nothing.",
      "The only way to do great work is to love what you do.",
]
const authors=[
      "Nelson Mandela","Walt Disney","Steve Jobs","Eleanor Roosevelt",
      "Mahatma Gandhi","Mother Teresa","Edmund Burke","Steve Jobs"
]


function App() {

  const [selected, setSelected]=useState('');
  const divRef=useRef(null)

  const genRandomNumber=()=>{
    const randomInt=Math.floor(Math.random() * quotes.length);
    return randomInt;
  }
  const getRandomColor=()=>{
    const hex='1234567489abcdef';
    let color='#'
    for(let i=0;i<6;i++){
      color+=hex[Math.floor(Math.random()*16)];
    }
    return color
  }
  useEffect(()=>{
    let color1=getRandomColor();
    let color2=getRandomColor();
    const gradient=`linear-gradient(45deg,${color1},${color2})`
    const randomInt=genRandomNumber();
    setSelected(randomInt)
    document.documentElement.style.setProperty('--gradient-color',gradient)
  },[])

  const handleClick=()=>{
    let color1=getRandomColor();
    let color2=getRandomColor();
    const gradient=`linear-gradient(45deg,${color1},${color2})`
    const randomInt=genRandomNumber();
    setSelected(randomInt);
    document.documentElement.style.setProperty('--gradient-color',gradient)
  }

  const copytext=()=>{
    const textToCopy = divRef.current.innerText;
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        alert('Quote copied to clipboard');
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  }

  return (
    <div className="container" >
      <div id="quote-box">
        <div id="text" ref={divRef} aria-readonly><p><q> <span id="tooltip"></span>{quotes[selected]} </q></p></div>
        <div id="author"><p>~{authors[selected]}</p></div>
        <div id="social-button">
          <a href="https://twitter.com/intent/tweet" target="_blank" ><FaSquareXTwitter id="x"/></a>
          <a href="https://instagram.com/" target="_blank" ><FaSquareInstagram id="i"/></a>
          <span id="copy" onClick={copytext} ><span id="tooltip">Copy</span><FaCopy /></span>
          <button onClick={handleClick}>New Quote</button>
        </div>
        <div id="footer">By Dharmender</div>
      </div> 
    </div>  
  )
}

export default App
