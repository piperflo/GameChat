import React, {useEffect, useState} from "react";
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import { auth } from './firebase';
import { useAuthContext } from './AuthContext'
import axios from 'axios';
import './chats.css';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


//Don't forget to move keys

const Home = () => {
    const meURL = 'https://api.chatengine.io/users/me';
    const [load, setLoad] = useState(true);
    const pastData = useHistory();
    const {user} = useAuthContext();
    var [username, setUsername] = useState({name: ""});;
    /*
    function display(){
        setUsername = document.getElementById("name").value; 
    }
*/
    const Logout = async () =>{
        await auth.signOut();
        pastData.push('/');
    }

    useEffect(() => {
        //If we don't have user we go to the original page (login page)
        if(!user) {
            pastData.push('/');
            return;
        }

        //Getting the project-id to set everything
        //found examples of this on on the firestore website
        axios.get(meURL, {
            headers: {
                "project-id": "a5e5430d-619e-44ba-bc2d-e6a67daa20bb", //
                "user-name": user.email,
                "user-secret": user.uid,
            }
        })
        .then(() => {
            setLoad(false);
        })
        .catch(() => {
            var info = new FormData(); 
            if(!user.email || !user.email|| !user.uid){
                console.log("Error getting info in catch");
                pastData.push('/');
            }
            else{
                info.append('email', user.email);
                info.append('username', user.email);
                info.append('secret', user.uid);
            }          
        })
    }, [user,username, pastData]);
  return (
    <div className="chats-page position: absolute">
        {/* Will be included in later versions
        <form>
            <div className="form-group">
                <label htmlFor="name" >Username </label>
                <input type="text" name="name" id="name"/>
            </div>
            <input type="submit" value="Submit" id="submit" onClick="display()"></input>
        </form>
        */}
      <div className="header">
        <div className="company-name">
            Piper Gaming.co
        </div>

        <div className="call-tab">

        </div>
        <div onClick={Logout} className="logout">
            Logout
        </div>

      </div>
        <ChatEngine 
            projectID="a5e5430d-619e-44ba-bc2d-e6a67daa20bb"//
            userName={user.email}
            userSecret={user.uid} 
            />
        <div className="References">
            <a href="https://firebase.google.com/products/firestore">Link to FireBase Website</a>
        </div>
    </div>
  )
}

export default Home;
