
  <div>
    <div class="row">
      <div class="span6 text-right" >
        <img id="productId" src="images/<%= color %>.jpg"/>
      </div>
      <div class="span6">
        <h5>Product : Nice dress for all ocassions !</h5>
        
        <p>Size:<%= size %></p>
        <p>Color:<%= color %></p>
        <p>Quantity:<%= quantity %></p>
        
        <h5>Product shipped to below address</h5>
        <div id="shipaddress" >
          <h5>
            Shipping Address
          </h5>
          <p>Addrress one:<%= address.addOne %></p>
          <p>Address two:<%= address.addTwo %></p>
          <p>City:<%= address.city %></p>
          <p>State:<%= address.state %></p>
          <p>Zip code:<%= address.zipcode %></p>
        </div>
      </div>
    </div>
  </div>
