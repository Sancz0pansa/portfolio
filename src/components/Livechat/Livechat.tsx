// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { useEffect, useState } from "react";
import { addDoc, collection, DocumentData, getFirestore, onSnapshot } from "firebase/firestore";

import './sass/Livechat.scss';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCz3jZtVOwCxV4paGiH8TKWTGeGxQzlwpU",
  authDomain: "livechat-f0da7.firebaseapp.com",
  projectId: "livechat-f0da7",
  storageBucket: "livechat-f0da7.appspot.com",
  messagingSenderId: "292214458534",
  appId: "1:292214458534:web:7a87d246ad9f666256cc67",
  measurementId: "G-TZD8JR9B8C",
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

type Message = {
  text: string,
  timestamp: Date,
}

const LiveChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [liveVisible, setLiveVisible] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [showResponse, setShowResponse] = useState(false);

  const db = getFirestore(app);
  const chatCollection = collection(db, 'chat');

  // useEffect(() => {
  //   const unsubscribe = onSnapshot(chatCollection, (querySnapshot) => {
  //     const data = querySnapshot.docs.map((doc) => doc.data());
  //     setMessages(data);
  //   });

  //   return () => unsubscribe();
  // }, [chatCollection]);

  useEffect(() => {
    const timerBubble = setTimeout(() => {
      setShowBubble(true);
    }, 8000);

    const timerButton = setTimeout(() => {
      setHidden(false);
    }, 3000);

    return () => {
      clearTimeout(timerBubble)
      clearTimeout(timerButton)};
  }, []);

  const sendMessage = async () => {
            ani();
        anitwo();
        anithree();
    await addDoc(chatCollection, {
      email: newEmail,
      text: newMessage,
      timestamp: new Date(),
    });
    const messageObj = {
      text: newMessage,
      timestamp: new Date(),
    }
    setMessages([messageObj])
    const responseTimer = setTimeout(() => {
      setShowResponse(true);
    }, 1000)

    return () => {
      clearTimeout(responseTimer);
    }
  };

//   document.addEventListener("scroll", function () {
//     const livechatFloating = document.querySelector('.livechat__floating');
    
//     if (livechatFloating !== null) {
//         livechatFloating.classList.remove('hidden');
//     }
// });

function ani() {
  const plane = document.getElementById('plane')!;
  plane.className = 'animation';
}

function anitwo() {
  const bg = document.getElementById('bg')!;
  bg.className = 'animation2';
}

function anithree() {
  const bgc = document.getElementById('bgc')!;
  bgc.className = 'bg animation3';
}

function shaking() {
  const button = document.getElementById('plane')!;
    if (button) {
        // Add the shake animation class
        button.classList.add('animation-shake');

        // Remove the shake animation class after the animation duration
        setTimeout(() => {
            button.classList.remove('animation-shake');
        }, 500);
    }
}

  useEffect(() => {
    if (messages.length > 0) {

    }
  }, [messages])

  return (<>
  
  <div className={`livechat ${!liveVisible ? 'hidden' : ''}`}>
  <div className="close-button" onClick={() => setLiveVisible(false)}></div>
  <div className="livechat__header">
    <div className="livechat__header--photo"></div>
    <div className="livechat__header--text">
      <h3>Hubert Wiktor</h3>
      <p>Have a question ?</p>
    </div>
  </div>
  <div className="livechat__messages">
  <div className="livechat__messages--container-me">
  <svg  width={'12px'}
      height={'12px'} viewBox="0 0 24 24"><path d="M20.579 9.062a5.946 5.946 0 0 0-5.759-4.48H14v-.744A2.337 2.337 0 0 0 12 2a2.337 2.337 0 0 0-2 1.838v.744H8.871a5.946 5.946 0 0 0-5.759 4.48C1.761 9.157 1 10 1 11.646v5.206a2.527 2.527 0 0 0 2.294 2.6 2.549 2.549 0 0 0 .827-.147 5.934 5.934 0 0 0 4.75 2.378h5.949a5.933 5.933 0 0 0 4.75-2.378 2.549 2.549 0 0 0 .827.147 2.6 2.6 0 0 0 2.6-2.6v-5.206a2.6 2.6 0 0 0-2.418-2.584zM10.358 16.48a1.487 1.487 0 1 1-2.974 0v-1.487a1.487 1.487 0 1 1 2.974 0zm5.949 0a1.487 1.487 0 1 1-2.974 0v-1.487a1.487 1.487 0 1 1 2.974 0z" fill="#ffffff"></path></svg>
  <div className="livechat__messages--me">Hey there! 👋</div>
  </div>
    {messages.map((message) => (
      <div className="livechat__messages--user" key={message.text}>{message.text}
      </div>
      ))}
      {showResponse && <div className="livechat__messages--container-me">
  <svg  width={'12px'}
      height={'12px'} viewBox="0 0 24 24"><path d="M20.579 9.062a5.946 5.946 0 0 0-5.759-4.48H14v-.744A2.337 2.337 0 0 0 12 2a2.337 2.337 0 0 0-2 1.838v.744H8.871a5.946 5.946 0 0 0-5.759 4.48C1.761 9.157 1 10 1 11.646v5.206a2.527 2.527 0 0 0 2.294 2.6 2.549 2.549 0 0 0 .827-.147 5.934 5.934 0 0 0 4.75 2.378h5.949a5.933 5.933 0 0 0 4.75-2.378 2.549 2.549 0 0 0 .827.147 2.6 2.6 0 0 0 2.6-2.6v-5.206a2.6 2.6 0 0 0-2.418-2.584zM10.358 16.48a1.487 1.487 0 1 1-2.974 0v-1.487a1.487 1.487 0 1 1 2.974 0zm5.949 0a1.487 1.487 0 1 1-2.974 0v-1.487a1.487 1.487 0 1 1 2.974 0z" fill="#ffffff"></path></svg>
  <div className="livechat__messages--me">I will get back to you with an answer soon. 😁</div>
  </div>}
  </div>
  <div>
    <div className="livechat__container">
    <input
    disabled={showResponse}
      className="livechat__container--input"
      type="text"
      value={newEmail}
      placeholder="E-mail"
      onChange={(e) => setNewEmail(e.target.value)}
    />
    <textarea
    disabled={showResponse}
      className="livechat__container--textarea"
      value={newMessage}
      placeholder="Enter your message..."
      onChange={(e) => setNewMessage(e.target.value)}
    />
    <div className="background">
    <button  className="btn btn-inside btn-boarder"><img className="plane" onClick={() => {
        if (newEmail.length < 1 || newMessage.length < 1) {

          shaking();
        } else {
          sendMessage()
          setNewMessage('')
          setNewEmail('');
        }
        
      }} alt="img" src="https://i.cloudup.com/gBzAn-oW_S-2000x2000.png" width="32px" height="32px" id="plane"/></button>
			<div id="bgc" className="bg"><img   alt="img"  src="https://i.cloudup.com/2ZAX3hVsBE-3000x3000.png" id="bg" width="32px" height="32px" /></div>
			<div className="around around-boarder" onClick={() => {
        if (newEmail.length < 1 || newMessage.length < 1) {
          shaking();
        } else {
          sendMessage()
          setNewMessage('')
          setNewEmail('');
        }
        
      }}></div>
    </div>
    
    </div>
  </div> 
  
  
</div>  <div onClick={() => {setShowBubble(false)
  setLiveVisible(true)}} className={`livechat__floating ${hidden || liveVisible ? 'hidden' : ''}  ${showBubble ? 'show-bubble' : ''}`}><div><svg className="svgicon" viewBox="0 0 64 64" fill="currentColor" width="30" height="34"><path d="M63.113,18.51v-.16C60.323,7.05,44.582,3,31.972,3S3.582,7,.792,18.5a66.22,66.22,0,0,0,0,20.46c1.18,4.74,5.05,8.63,11.36,11.41l-4,5A3.47,3.47,0,0,0,10.882,61a3.39,3.39,0,0,0,1.44-.31L26.862,54c1.79.18,3.49.27,5.07.27,11.04.04,28.41-4.04,31.18-15.43a60.33,60.33,0,0,0,0-20.33Z"></path></svg></div> </div></>
    


  );
};

export default LiveChat;