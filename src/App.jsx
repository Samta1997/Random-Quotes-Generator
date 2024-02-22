
import { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

const quotes=["The greatest glory in living lies not in never falling, but in rising every time we fall.",
      "The way to get started is to quit talking and begin doing.",
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking.",
      "The future belongs to those who believe in the beauty of their dreams.",
      "You must be the change you wish to see in the world.",
      "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
      "The only thing necessary for the triumph of evil is for good men to do nothing.",
      "The only way to do great work is to love what you do.",

]
const authors=["Nelson Mandela","Walt Disney","Steve Jobs","Eleanor Roosevelt","Mahatma Gandhi","Mother Teresa","Edmund Burke","Steve Jobs"]
const colors=["#949398FF", "#F4DF4EFF","#FC766AFF","#5B84B1FF","#5F4B8BFF","#000000FF","#F4DF4EFF","#5B84B1FF"]

function App() {
  const randomInt= Math.floor(Math.random() * quotes.length);
  const [selected, setSelected]=useState(randomInt);
  useEffect(()=>{
    const color=colors[randomInt];
    document.documentElement.style.setProperty('--main-color',color)
  },[])

  const getRandomInt=()=>{
    const randomInt=Math.floor(Math.random() * quotes.length);
    setSelected(randomInt);
    const color=colors[randomInt];
    document.documentElement.style.setProperty('--main-color',color)
  }

  return (
    <>
    <style type="text/css">
    {`
      .container{
        background-color: var(--main-color);  
        transition: background-color 2s ease; 
        height:100vh;
        display:grid;
        place-items:center;
      }
      #quote-box{
        background-color:white;
        font-family:"Poppins";
        border-radius:5px;
        width:29rem;
      }
      #text{
        padding:40px 30px;
        font-size:25px;
        color:var(--main-color);
        transition: color 2s ease; 
      }
      #author{
        margin-top:-45px;
        margin-bottom:30px;
        padding-left:60%;
        color:var(--main-color);
        transition: color 2s ease;
      }
      #tweet-quote{
        font-size:40px;
        padding-left:20px;
        margin-top:-20px;
        float:left;
        transition: background-color 2s ease; 
      }
      #new-quote{
        float:right;
        margin-right:30px; 
        font-size:14px;
        color:white;
        background-color:var(--main-color);
        margin-top:-4px;
        transition: background-color 2s ease;
        border:none;
        border-radius:5px;
      }
      #react-icon1{
        font-size:34px;
        color:black;
      }
      #react-icon2{
        font-size:34px;
        color:red;
      }
      #footer{
        margin-top:100px;
        font-style:italic;
        font-size:12px;
        color:white;
        background-color:var(--main-color);
        padding-top:20px;
        transition: background-color 2s ease;
      }
      @media(max-width:667px){
        .social{
          margin-left:10px;
       }
       #quote-box{
        width:100%;
      }
      #text{
        font-size:16px;
      }
      #author{
        font-size:8px;
      }
      }
    `}
    </style>
   
    <div className="container" >
      <div id="quote-box" className="text-center">
        <div id="text" ><p>{quotes[selected]}</p></div>
        <div id="author"><p>~{authors[selected]}</p></div>
        <div className="social">
          <a id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank" ><FaSquareXTwitter id="react-icon1"/></a>
          <a id="tweet-quote" href="https://instagram.com/" target="_blank" ><FaSquareInstagram id="react-icon2"/></a>
          <Button id="new-quote" className="btn btn-info" onClick={getRandomInt}>New Quote</Button>
        </div>
        <div id="footer">By Dharmender</div>
      </div> 
      
    </div>  
    </>
  )
}

export default App
