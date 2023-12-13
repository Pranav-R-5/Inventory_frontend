<template>
    <div class="headerflex">
        <div>
            <img class="logos" :src="logo"/>
            <input @keyup.enter="search(msg)" type="text" size="40" style="padding-right: 30px;"  placeholder="Search..">
            <button @click="$emit('alertmessage',title)">Search</button>
            <span>{{ title }}</span>


        </div>
        <div class="headerflex">
            <nav class="headerflex">
              <button @click="login(message)"> Login</button>
                <a href="http://127.0.0.1:5500/client/Allproducts.html" style="padding:0px 60px 0px 60px;"> All products</a>
                <a href="http://127.0.0.1:5500/client/cart.html"> Cart</a>
            </nav>  
        </div>
    </div>
     
</template>
<script src="./js/header-component.js">


</script>
<style>
@import '@blibli/blue-design-tokens/dist/tokens-default.scss';
.logos {

    width: 110px;
    margin-bottom: -6px;
    padding:0px 30px 0px 30px;

}
.headerflex{
    background-color: wheat; 
    margin:22px;

    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

</style>
