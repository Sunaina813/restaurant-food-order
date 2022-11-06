import React from "react";
import Table from "react-bootstrap/Table";

const CardsDetails = () => {
  return (
    <>
      <div className="container mt-2">
        <h3 style={{color:"green", display:'flex',alignItems:'center',justifyContent:'centre'}} > Item details page</h3>

        <section className="container mt-3">
          <div className="Itemsdetails">
            <div className="items_img">
              <img src="https://b.zmtcdn.com/data/pictures/chains/5/19295245/089cbcf1d3307542c72f77272556b28b_o2_featured_v2.jpg?output-format=webp" />
            </div>

            <div className="details">
              <Table>
                <tr>
                  <td> <p><strong> Restaurant</strong> : Masala Theoryy </p>    
                    <p><strong> Price</strong> : ₹ 350</p>
                    <p><strong>Dishes </strong> kofta, rice, manchurian, lacha paratha </p>
                    <p><strong> Total </strong> :₹ 378</p>
            
                  </td>
                  <td>
                    <p><strong>Rating :</strong> <span style={{background:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}> 4+★	</span></p>
                    <p><strong>Order Review :</strong> </p>
                    <p><strong>Remove :</strong> <span ><i className='fas fa-trash'  style={{color:"red",fontSize:20,cursor:"pointer"}}></i>	</span></p>
                  </td>
                </tr>
              </Table>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CardsDetails;
