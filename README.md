import Card from "./components/CardSlider/Cards.js";
import { useEffect, useState } from "react";
const App = ()=>{
const[index,setIndex] = useState([]);
// Fetch Api from some open source.
useEffect(()=>{
fetchData();
},[]);

const fetchData = async()=>{
const API_URL = await fetch("https://dummyjson.com/users");
const data = await API_URL.json();
const {users} = data;
setIndex(users);
}

if(index.length === 0){
return <h1>Loading.....</h1>
}

return(
<>

<div className="w-full h-full flex justify-center">
<Card resData = {index}/>
</div>
</>
)
}

# NETFLIX GPT

- Create React App
- Configured TailwindCSS

#Features

-Login/Sign Up

- Sign In/Signup Form
  after valid authenication redirected to browse page.
- Browse(after authenication)
  => Header
  => Main Movie
  -Trailer in Background
  -Title and Description
  =>Movie Suggestions

  - Movie list x n

  =>NETFLIX GPT
  -Search Bar
  -Movie Suggestions
