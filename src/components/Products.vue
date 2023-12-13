<template>
    <div class="products">
          <div>
            <h1 style="font-style: italic;">Best of Electronics:</h1>
            <section>
              <div class="image-container">
                <div v-for="product in products" :key="product"
                    @click="showdetails(product)">
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
                <div v-for="product in products" :key="product"
                    @click="showdetails(product)">
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
      </div>
    
</template>
<script src="./js/products.js">
</script>
<style scoped>

h5{
    transition:font-size 1s;
    text-align: center;
}
h5:hover{
    color: blueviolet;
    font-size: 20px;
}
.bodypage{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

}

.products{
    /* background-color:; */
    flex-direction: row;
    flex-grow: 1;
    overflow: auto;
}
.productcard{
    
    padding: 10px;
    border: 4px solid seashell;
}
.image{
    
    min-width: 200px;    
    height: 168px;
    object-fit: cover;
    margin-bottom: 10px; 
    overflow-y: hidden;
   
}
.image-container{
    display: flex;
    width: 100%;
    overflow-x: scroll;
}

</style>
