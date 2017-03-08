
  <div>
    <div class="row">
      <div class="span6 text-right" >
        <img id="productId" src="images/<%= color %>.jpg"/>
      </div>
      <div class="span6">
        <h3>Product : Nice dress for all ocassions !</h3>
        <div class="alert alert-warning" id="errMsg" hidden>
          <p><strong>Please select the size.</strong></p>
        </div>
        <div id="size-selection">
          Size selection dialog
            
          <label for="sizes"><input type="radio" id="sizes" name="sizes" value="Small" ><span>Small </span>  </label>
            
          <label for="sizem"><input type="radio" id="sizem" name="sizes" value="Medium"><span>Medium<span> </label>

          <label for="sizel"><input type="radio" id="sizel" name="sizes" value="Large"><span> Large  </span></label>
          
        </div>
        <div id="color-selection">
          <label for="color"><strong>Color selection</strong></label>
          <select id="color" data-key="color">
            <option value="blue">blue</option>
            <option value="green">Green</option>
            <option value="white">White</option>
            <option value="black">Black</option>
          </select>
        </div>
        <div id="quantity-selection">
          <label for="quantity"><strong>Quantity selection dialog</strong></label>
           <select id="quantity" data-key="quantity">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>

        <button id="next" class="btn"> Next </button>
        <div class="alert alert-warning" id="adrErrMsg" hidden>
          <p><strong>Please Enter Zip code.</strong></p>
        </div>
        <div id="shipaddress" hidden>
          <h5>
            Shipping Address
            </h5>
          <div>
            <label>AddressOne</label>
            <input type="text" required="required" name="address1" id="addOne"/>
          </div>
          <div>
            <label>AddressTwo</label>
            <input type="text" name="address2" id="addTwo" />
          </div>
          <div>
            <label>City</label>
            <input type="text" name="city" id="city" />
          </div>
          <div>
            <label>State</label>
            <input type="text" name="state" id="state" />
          </div>
          <div>
            <label>ZipCode</label>
            <input type="number" name="zipcode" id="zipcode" />
          </div>
          <div>
            <button class="btn" id="finish">Finish</button>
          </div>
        </div>
      </div>
    </div>
  </div>
