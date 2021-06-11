import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' >
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
            <h3 className="div-style text-white" style={{position:"absolute",bottom:0,color:"black",padding:"10px",textAlign: "justify"}}>
            
            {props.label}
            
            </h3>
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text' style={{textAlign:'center'}}>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
