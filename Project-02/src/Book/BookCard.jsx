import './Book.css'
import { useState } from 'react';

const BookCard = ({id,title,author,price,stock,genre,isFavorite,onEventHandler, ...rest}) => {
  
  const [favorite, setFavorite] = useState(isFavorite);

  const starHandler = () => {
    setFavorite(!favorite);
  }

  return (
    <div className="person-card">
      <h3>{title}</h3>
      <p onClick={starHandler}>
        {favorite ? (
          
          <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="40px" fill="#FFFF55"><path d="M333.33-259 480-347l146.67 89-39-166.67 129-112-170-15L480-709l-66.67 156.33-170 15 129 112.34-39 166.33ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-353.33Z"/></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF"><path d="M333.33-259 480-347l146.67 89-39-166.67 129-112-170-15L480-709l-66.67 156.33-170 15 129 112.34-39 166.33ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-353.33Z"/></svg>
        )}
      </p>

      <p><strong>ID:</strong> {id}</p>
      <p><strong>Author:</strong> ${author}</p>
      <p><strong>Price:</strong> {price}</p>
      <p><strong>Stock:</strong> {stock ? "IN Stock" : "Out of Stock"}</p>
      <p><strong>Genre:</strong> {genre}</p>

      {stock ? (
        <button className="add-to-cart">Add to Cart</button> 
      ) : (
        <button className="add-to-wishlist">Add to Wishlist</button> 
      )}
      {/* <button className="add-to-cart" onClick={()=>onEventHandler(id)}>JO JO</button> */}
      <button className="add-to-cart" onClick={onEventHandler}>JO JO JO</button>
    </div>
  );
};

export default BookCard;
