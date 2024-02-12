import React from "react";
import recipes from "../recipes";
import Swal from "sweetalert2";

const Menu = () => {
  const handleOrder = (id) => {
    console.log(id);

    const swalWithBootstrapButton = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButton
      .fire({
        title: "Do you want to confirm order ?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: false,
        confirmButtonText: "Yes, Order it!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButton.fire({
            title: "Ordered",
            text: "Your Order has been confirming",
            icon: "success",
          });
        }
      });
  };
  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>This Week Specials!</h2>
        <button>Order Menu</button>
      </div>

      {/* menu card */}
      <div className="cards">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="menu-items">
            <img src={recipe.image} alt="" />
            <div className="menu-content">
              <div className="heading">
                <h5>{recipe.title}</h5>
                <p>{recipe.price}</p>
              </div>
              <p>{recipe.description}</p>
              <button className="orderbtn" onClick={() => handleOrder(recipe.id)}>
                Order Now
              </button>
             </div> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
