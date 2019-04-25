<template>
    <div class="Nav">
        <router-link to="/"><img src="../assets/logo.png"></router-link>
        <div class="searchbar">
            search:
            <input v-model="message" placeholder="Who you lookin foo?">
            <!-- <p>Message is: {{ message }}</p> -->
        </div>
        <div class="home">
           
        </div>
        <div class="user">
            <router-link to="/user">Welkom Joey!</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "NavBar",
    props:{
        message: String,
    }
}
</script>

<style lang="scss" scoped>
.Nav{
    height: 70px;
    width: 100vw;
    background-color: #d4f5ff;
    box-sizing: border-box;
    img{
        float: left;
        width: 40px;
        height: 40px;
        margin: 15px 10vw 0 15vw;
    }
    .searchbar{
        float: left;
        margin: 25px 5vw 0 10vw;
    }
    .user{
        float: right;
        margin: 25px 15vw 0 0;
    }
}
</style>

