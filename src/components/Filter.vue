<template>
  <div class="filters">
    <section>
      <h3>categories</h3>

      <form>
        <div>Checked cateogories: {{ checkedcategories }}</div>
        <div>
          <input
            type="checkbox"
            value="Electronics"
            v-model="checkedcategories"
          />
          <label for="Electronics">Electronics</label>
        </div>
        <div>
          <input type="checkbox" value="Beauty" v-model="checkedcategories" />
          <label for="Beauty">Beauty</label>
        </div>
        <div>
          <input type="checkbox" value="Fashion" v-model="checkedcategories" />
          <label for="Fashion">Fashion</label>
        </div>
        <div>
          <input type="checkbox" value="Sports" v-model="checkedcategories" />
          <label for="Sports">Sports</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Groceries"
            v-model="checkedcategories"
          />
          <label for="Groceries">Groceries</label>
        </div>
      </form>
    </section>
    <br />
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
        <div>Brands selected: {{ Brands }}</div>
        <div>
          <input type="checkbox" value="Nike" v-model="Brands" />
          <label for="Nike">Nike</label>
        </div>
        <div>
          <input type="checkbox" value="Puma" v-model="Brands" />
          <label for="Puma">Puma</label>
        </div>
        <div>
          <input type="checkbox" value="Adidas" v-model="Brands" />
          <label for="Adidas">Adidas</label>
        </div>
        <div>
          <input type="checkbox" value="Zara" v-model="Brands" />
          <label for="Zara">Zara</label>
        </div>
        <div>
          <input type="checkbox" value="Dell" v-model="Brands" />
          <label for="Dell">Dell</label>
        </div>
        <div>
          <input type="checkbox" value="Philips" v-model="Brands" />
          <label for="Philips">Philips</label>
        </div>
        <div>
          <input type="checkbox" value="Hp" v-model="Brands" />
          <label for="Hp">Hp</label>
        </div>
      </form>
    </section>
  </div>
</template>
<script src="./js/filter.js"></script>
<style scoped>
.filters {
  flex: 0 0 280px;
  max-width: 280px;
  padding: 0px 20px 0px 0px;
  background-color: white;
  border-color: palegoldenrod;
  border-style: double;
}
</style>
