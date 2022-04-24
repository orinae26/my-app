// Our first component - function that has logic and markup (JSX)


import React, {useEffect, useState} from "react"
import "./style.css"

const App = () => {
  /*const contacts = [
    { name: "Jenny Han", email: "jenny.han@notreal.com", age: 25 },
    { name: "Jason Long", email: "jason.long@notreal.com", age: 45 },
    { name: "Peter Pan", email: "peter.pan@neverland.com", age: 100 },
    { name: "Luis Van Gaal", email: "vangaal@notreal.com", age: 70 },
  ]; */


  const [contacts, setContacts] = useState([])

  useEffect (() => {
    fetch("https://randomuser.me/api/?results=3")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setContacts(data.results);
      });

  }, []);

 
  
  return(
    <>
      {contacts.map(contact => (
        <ContactCard
          avatar={contact.picture.large}
          name={contact.name.first + " " + contact.name.last}
          email={contact.email}
          age={contact.dob.age}
        />
      ))}
       
    </>


  )  
}


/* 
      
      <ContactCard
      avatar = "https://via.placeholder.com/150"
      name = "Jenny Han"
      email = "jennyhan@notreal.com"
      age = {25}
      state = "California"
      />
      <ContactCard
      avatar="https://via.placeholder.com/150"
      name = "Ten Hag" 
      email ="tenhag@notreal.com"
      age = {50}
      state = "California"
      />
      <ContactCard 
      avatar="https://via.placeholder.com/150"
      name = "Luis Van Gaal"
      email = "luis@notreal.com"
      age = {70}
      state = " New York"
      />
    </>
    
  )

}*/
const ContactCard = props => {
  //{/* States and Hooks */}
  const [showAge, setShowAge] = useState(false);

  return (
    <div className="contact-card">
      <img src={props.avatar} alt="profile" />
      <div className="user-details">
        <p>Name: {props.name}</p>
        <p>Email: {props.email}</p>
        <p>Age: {props.Age}</p>
        <button onClick={() => setShowAge(!showAge)} >Toggle Age </button>
        {showAge && <p>{props.age}</p>}
      </div>


    </div>

  )

}


// States and Hooks


 





export default App;