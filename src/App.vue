 <template>
  <div id="blibliApp">
    <headercomponet :title="'Pranav'" @alertmessage="search"></headercomponet>


    <!-- <div class="headerflex">
        <div>
            <img class="logos" :src="logo"/>
            <input @keyup.enter="search(msg)" type="text" size="40" style="padding-right: 30px;"  placeholder="Search..">
            <button @click="search(msg)">Search</button>


        </div>
        <div class="headerflex">
            <nav class="headerflex">
              <button @click="login(message)"> Login</button>
                <a href="http://127.0.0.1:5500/client/Allproducts.html" style="padding:0px 60px 0px 60px;"> All products</a>
                <a href="http://127.0.0.1:5500/client/cart.html"> Cart</a>
            </nav>  
        </div>
    </div> -->
    <div class="bodypage">
      <filtercomponent></filtercomponent>
        <!-- <div class="filters">
            <section>
            <h3>categories</h3>

                <form>
                  <div>Checked cateogories: {{ checkedcategories }}</div>
                    <div>
                      <input type="checkbox"  value="Electronics" v-model="checkedcategories">
                      <label for="Electronics">Electronics</label>
                    </div>
                    <div>
                      <input type="checkbox"  value="Beauty" v-model="checkedcategories">
                      <label for="Beauty">Beauty</label>
                    </div>
                    <div>
                      <input type="checkbox"  value="Fashion" v-model="checkedcategories">
                      <label for="Fashion">Fashion</label>
                    </div>
                    <div>
                      <input type="checkbox"  value="Sports" v-model="checkedcategories">
                      <label for="Sports">Sports</label>
                    </div>
                    <div>
                      <input type="checkbox"  value="Groceries" v-model="checkedcategories">
                      <label for="Groceries">Groceries</label>
                    </div>    
                </form> 
            </section>
            <br>
            <section>
              
                <div>Gender: {{ selected }}</div>
                <select v-model="selected">
                  <option disabled value="">Please select one</option>
                  <option>male</option>
                  <option>female</option>
                  <option>other</option>
                </select>
            </section>

            <section>
                <h3>Brands</h3>
                    <form>
                    <div>Brands selected: {{Brands}}</div>
                    <div>
                      <input type="checkbox"  value="Nike" v-model="Brands">
                      <label for="Nike">Nike</label>
                    </div>
                    <div>
                      <input type="checkbox"  value="Puma" v-model="Brands">
                      <label for="Puma">Puma</label>
                    </div>
                    <div>
                      <input type="checkbox"  value="Adidas" v-model="Brands">
                      <label for="Adidas">Adidas</label>
                    </div>
                    <div>
                      <input type="checkbox" value="Zara" v-model="Brands">
                      <label for="Zara">Zara</label>
                    </div>
                    <div>
                      <input type="checkbox"  value="Dell" v-model="Brands">
                      <label for="Dell">Dell</label>
                    </div>
                    <div>
                      <input type="checkbox"  value="Philips" v-model="Brands">
                      <label for="Philips">Philips</label>
                    </div>
                    <div>
                      <input type="checkbox"  value="Hp" v-model="Brands">
                      <label for="Hp">Hp</label>
                    </div>      
                  </form> 
            </section>

        </div> -->
        <productcomponent></productcomponent>
        <!-- <div class="products">
          <div>
            <h1 style="font-style: italic;">Best of Electronics:</h1>
            <section>
              <div class="image-container">
                <div v-for="product in products" :key="product">
                  <div class = "productcard">
                    <img class="image" :src="product.img" >
                    <div>
                      <h5>{{product.name}}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div>
            <h1 style="font-style: italic;">Fashion:</h1>
            <section>
              <div class="image-container">
                <div v-for="product in products" :key="product">
                  <div class = "productcard">
                    <img class="image" :src="product.img" >
                    <div>
                      <h5>{{product.name}}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
      </div> -->
  </div>
  </div>
</template>

<script src="./js/app"></script>

<style lang="scss" scoped>
@import '@blibli/blue-design-tokens/dist/tokens-default.scss';

// h5{
//     transition:font-size 1s;
//     text-align: center;
// }
// h5:hover{
//     color: blueviolet;
//     font-size: 20px;
// }
.bodypage{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

}
// .filters{
//     flex: 0 0 280px;
//     max-width: 280px;
//     padding: 0px 20px 0px 0px;
//     background-color:white;
//     border-color: palegoldenrod;
//     border-style: double;
    
// }
// .products{
//     /* background-color:; */
//     flex-direction: row;
//     flex-grow: 1;
//     overflow: auto;
// }
// .productcard{
    
//     padding: 10px;
//     border: 4px solid seashell;
// }
// .image{
    
//     min-width: 200px;    
    
//     margin-bottom: 10px; 
//     overflow-y: hidden;
   
// }
// .image-container{
//     display: flex;
//     width: 100%;
//     overflow-x: scroll;
// }
</style>
