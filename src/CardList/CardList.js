import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CardList.css';
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import CardComponent from '../Components/CardComponent';



const CardList = () => {

    const [celularesData, setCelularesData] = useState([]);

    useEffect(() => {
        const getCelulares = async () => {
          const q = query(collection(db, "celular"));
          const docs = [];
          const querySnapshot = await getDocs(q);
    
          querySnapshot.forEach((doc) => {
            // console.log('DATA:',doc.data(), 'ID:' ,doc.id);
            docs.push({ ...doc.data(), id: doc.id });
          });
          setCelularesData(docs);
        };
        getCelulares();
      }, []);
  return (
    <div>{celularesData.map((data) => {
        return <CardComponent celularesData={data} key={data.id} />;
      })}</div>
  )
}

export default CardList