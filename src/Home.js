import React, { useState, useEffect } from 'react';
import Table from './Table';
import Filter from './Filters';
import Papa from 'papaparse';
import firebase from "firebase/app";
import "firebase/storage";

let firebaseConfig = {
  apiKey: "AIzaSyDktQr5xM6IrzGjW-YC70ivaojifJUeMJ8",
  authDomain: "diamondsemotions.firebaseapp.com",
  databaseURL: "https://diamondsemotions.firebaseio.com",
  projectId: "diamondsemotions",
  storageBucket: "diamondsemotions.appspot.com",
  messagingSenderId: "1025063349785",
  appId: "1:1025063349785:web:df8ea5816796fd1f704488",
  measurementId: "G-84MFBPZSWS"
};

let app = firebase.initializeApp(firebaseConfig);
let storage = app.storage().ref().child("data.csv");

function Home() {
  let [diamonds, setDiamonds] = useState([]);
  let [start, setStart] = useState(false);
  
  useEffect(() => {

    storage.getDownloadURL().then(url => {
      Papa.parse(url, {
        header: true,
        download: true,
        complete: function (results) {
          setDiamonds(results.data);
          setStart(true);
        }
      });
      
    });
  }, [])

  return (
    <div className="content">
      <h1 stlye="color:#0b5394">Cerca il tuo Diamante</h1>
      {start ?
        <Filter diamonds={diamonds} setDiamonds={setDiamonds} /> : <div></div>
      }
      <Table data={diamonds} />
    </div>
  )
}


export default Home;