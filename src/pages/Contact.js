import React, {useState} from "react";
import Axios from "axios";
import "../styles/Contact.css";
import Image from '../assets/tournament.png';
import Data from "../data/users.json";
import dbData from "../data/db.json";

function Contact() {
    const [user, setUser] = useState({
        username:"",
        email: "",
        age: "",
        gender: "",
        password: ""
    })
    const [isSubmitted, setIsSubmitted] = useState(false);
    const handle = (event) =>{
        setUser({...user, [event.target.name]: event.target.value})
    }
    function handleSubmit(event){
        event.preventDefault();
        if (
            user.username.trim() === "" ||
            user.email.trim() === "" ||
            user.age.trim() === "" ||
            user.gender.trim() === "" ||
            user.password.trim() === ""
          ) {
            alert("Please fill in all fields");
            return;
        }

        const matchedUser = Data.users.find((userData) => {
            const { username, email, age, gender, password } = userData.user;
            console.log(username, user.username);
            console.log(email, user.email);
            console.log(age, user.age);
            console.log(gender, user.gender);
            console.log(password, user.password);
            return (
              user.username === username &&
              user.email === email &&
              user.age.toString() === age &&
              user.gender === gender &&
              user.password === password
            );
          });

          const matchedUserDb = dbData.users.find((userData) => {
            const { username, email, age, gender, password } = userData.user;
            console.log(username, user.username);
            console.log(email, user.email);
            console.log(age, user.age);
            console.log(gender, user.gender);
            console.log(password, user.password);
            return (
              user.username === username &&
              user.email === email &&
              user.age.toString() === age &&
              user.gender === gender &&
              user.password === password
            );
          });
        console.log(matchedUser, matchedUserDb)
        if (matchedUser) {
            if (!matchedUserDb){
                setIsSubmitted(true);
            } else {
                alert("You already have sent your appointment!");
                return
            }
        } else {
            alert("Could not find a user!");
            return
        }
        
        Axios.post("http://localhost:3000/users", {user})
        .then(resp => {
            console.log(resp)
            console.log(isSubmitted)
        })
        .catch(err => console.log(err))
    }
    return (
    <div className="contact">
      <div
        className="leftSide" style={{backgroundImage: `url(${Image})`}}></div>
      <div className="rightSide">
        <h1> Contact Us</h1>
        <h2> To get a chance to be in our tournament, fill the form according to your personel game account info</h2>
        {!isSubmitted ? (
            <form id="contact-form" onSubmit={handleSubmit}>
            <input onChange={handle} name="username" id="username" placeholder="username" type="text"></input>
            <input onChange={handle} name ="email" id="email" placeholder="email" type="email"></input>
            <input onChange={handle} name="age" id="age" placeholder="age" type="number" min={18} max={60}></input>
            <select onChange={handle} name="gender" id="gender" placeholder="gender">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <input onChange={handle} name="password" id="password" placeholder="password" minLength={6}></input>
            <button>Submit</button>
        </form>
        ) : (
            <p className="success">
                Your request has been received. Thank you! You will be added to the tournament once approved.
            </p>
        )
        }
       
      </div>
    </div>
  );
}

export default Contact;