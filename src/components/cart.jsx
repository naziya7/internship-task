import React from 'react'

const Cart = () => {
  
    const data = [
        {
          name: "Cosmetics",
          productList: [
            {
              id:0,
              name: "Hair Oil",
              price: 122
            },
            {
              id:1,
              name: "Face wash",
              price: 123
            }
          ]
        },
        {
          name: "Household",
          productList: [
            {
              id:2,
              name: "Hair Oil",
              price: 122
            },
            {
              id:3,
              name: "Face wash",
              price: 123
            }
          ]
        }
      ];
    
      const cart = []
    
      const sections = data.map((data) => {
    
        function handleAddToCart(e){
          const item = e.target.previousSibling.previousSibling.childNodes[1].innerHTML
          cart.push(item)
          console.log("Product Added to Cart")
          console.log("My Cart", cart)
        }
    
        function handleRemoveFromCart(e){
          const item = e.target.previousSibling.previousSibling.previousSibling.childNodes[1].innerHTML
          if(cart.includes(item)){
            const index = cart.indexOf(item);
            cart.splice(index,1)
            console.log("My Cart",cart)
          }else{
              console.log("Already NOT in the cart");
              console.log("My Cart",cart)
          }
        }
    
        return (
          <div key={data.name}>
            <h3>{data.name}</h3>
            <span></span>
            <div className="allitems">
              {data.productList.map((product) => (
                <div className="items" key={product.id}>
                  <div className="wrapper"> 
                    Name: <p id="productName" className="productName">{product.name}</p>
                  </div>
                  <div className="wrapper"> 
                    Price: <p id="productPrice" className="productPrice">{product.price}</p>
                  </div>
                  <button onClick={handleAddToCart}>Add to the cart</button>
                  <button onClick={handleRemoveFromCart}>Remove from cart</button>
                </div>
              ))}
            </div>
          </div>
        );
      });
    
      return <div>{<React.Fragment>{sections}</React.Fragment>}</div>;
}

export default Cart
