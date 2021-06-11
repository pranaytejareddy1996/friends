import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className="row" style={{content: "",
    display: "flex",}}>
      <div className="side" style={{width:"25%",float:"left",background:"black"}}>
        <h1 style={{color:'white'}}>
          GHS school friends batch 

        </h1>
      </div>
    
      
    <div className='cards' style={{width:"75%",float:"left"}}>
      <h1>Check Out for More Updates</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/P1040440.JPG'
              text='New Year Celebrations'
              label='Happy New Year 2011'
              path='/services'
            />
            <CardItem
              src='images/Friendship quote.jpg'
              text='Forget All the Things but dont forget your Friends & Families'
              label=''
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/celebrations.jpg'
              text='Friendship is a Ocean without any expectations'
              label='Friendship'
              path='/services'
            />
            <CardItem
              src='images/Events.jpg'
              text='Memories of Friends'
              label=''
              path='/products'
            />
            <CardItem
              src='images/friends and family.jpg'
              text='Families and Friends Celebrations'
              label=''
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    
    </div>
    </div>
   
  );
}

export default Cards;
