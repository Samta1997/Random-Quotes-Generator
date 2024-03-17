import { createGlobalStyle } from "styled-components";
export const GlobalStyles=createGlobalStyle`

body{
    margin:0;
    box-sizing:border-box;
}
#root{
    height:100vh;
    width:100vw;
    display:flex;
    align-items:center;
    justify-content:center;
    background-image:var(--gradient-color);
}
.container{
    background-color: rgb(255 255 255/30%);
    backdrop-filter:blur(10px);
    max-width:500px;
    border-radius:10px;
    padding:0px 20px;
}
#quote-box{
    margin:5px 10px;
    user-select:none;
}
#text{
    font-family:poppins;
    font-size:25px;
    white-space:no-wrap;
    color:black;
    transition:color 0.5s all;
    position:relative;
}
q{
    quotes:auto;
}
#author{
    text-align:right;
    font-size:16px;
}
#social-button{
    display:flex;
    align-items:center;
    font-size:40px;
    gap:10px;
    margin-bottom:15px;
}
button{
    height:32px;
    width:105px;
    font-size:15px;
    font-family:poppins;
    margin-top:-6.5px;
    margin-left:auto;
    border:none;
    border-radius:30px;
    &:active{
        background-color: rgb(255 255 255/10%);
        backdrop-filter:blur(10px);
    }
    cursor:pointer;
    color:black;
    padding:1px;
     background-color: rgb(255 255 255/50%);
    backdrop-filter:blur(10px);
    
}
#x{
    color:black;
}
#i{
    color:#FE0A69;
}
#footer{
    position:absolute;
    font-size:10px;
    margin-left:40%;
}
#copy{
    font-size:30px;
    margin-left:180px;
    cursor:pointer;
}
#copy #tooltip{
    font-size:11px;
    background-color:black;
    padding:3px;
    border-radius:3px;
    visibility:hidden;
    color:white;
}
#copy:hover #tooltip{
    visibility:visible;
}


@media screen and (max-width:767px){
    .container{
        width:370px; 
    }
    
    #copy{
        margin-top:-30px;
        margin-left:100px;
    }
    #copy:hover #tooltip{
        visibility:hidden;
        
    }
}
`