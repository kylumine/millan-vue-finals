<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <div class="side-bar"> 

      <div class="title">
      <H1>Rent a Movie</H1>
      <p></p>        
      </div>


      <div class="navigation">
        <RouterLink to="/">Movies</RouterLink>
        <RouterLink to="/about">Customers</RouterLink>    
        <RouterLink to="/work">Rents</RouterLink>  
        <!-- <RouterLink to="/portfolio">Portfolio</RouterLink>   -->
      </div>

      <div class="img">
        <img src="src/components/pink-removebg.png" alt="" class="rev">
      </div>

    </div>
    <div class="content">
      <RouterView />   
    </div>

  </div>


</template>

<style>
  .container{
    display: flex;
    
    
  }

  .side-bar{
    background-position: 0px 290px;
    background-repeat: no-repeat;
    background-size: 500px;
    margin-right: 0;
    background-color: rgb(255, 255, 255);

    width: 35%;
    height: 49.4rem;
    z-index: 1;
    background: rgb(255,129,187);
    background: linear-gradient(180deg, rgba(255,129,187,1) 7%, rgba(255,255,255,1) 65%);
  }
  .img img{
    position: 0px 290px;
    height: 50vh;
    margin-left: 17%;
  }

  .title{
    margin: 3rem 2rem;
    margin-top: 2rem;
    color: rgb(34, 34, 34);
  }
  .title h1{
    text-align: right;
    font-size: 35px;
    font-weight: 1000;
    letter-spacing: -2px;
    font-family: 'Cavilant';
    margin: 0;
    color: white;

  }
  .side-bar p{
    text-align: right;
    font-family: 'Cavilant';
    margin: 0;
  }

  .wrapper h3{
    margin: 0;
  }

  .navigation {
    display: flex;
    flex-direction: column;
    text-align: right;
    margin: 0rem 2rem;


    font-size: 20px;
    font-family: 'Poppins';
  }

  .navigation a{
    text-decoration: none;
    letter-spacing: -.5px;
    margin: .5rem 0rem;
    color: white;
    padding: 5px 25px;
    margin: 10px auto;
    border-radius: 10px;
    margin-right: 0;
    transition: .5s ease;
  }
  .navigation a:hover{
    
    color: rgb(255, 133, 194);
    background-color:  rgb(255, 239, 239);
  }
  .navigation a.router-link-active{
    color: rgb(255, 133, 194);
    background-color:  rgb(255, 235, 235);
    padding: 5px 25px;
    margin: 10px auto;
    margin-right: 0;
    text-align: right;
    border-radius: 10px;
  }

  .content{
    width: 65%;
    height: 49.4rem;
    overflow: scroll;
    background: rgb(255,129,187);
    background: linear-gradient(180deg, rgba(255,129,187,1) 7%, rgba(255,255,255,1) 100%); 
  }
  
</style>

<!-- <script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="container">
    <header>

      <div class="left">
        <div class="sidenav">

          <div class="name">
            <h1>Fiona R. Millan</h1>
            <text> ICT STUDENT</text>
          </div>

          <nav class="nav-links">
            <RouterLink to="/">Personal Information</RouterLink>
            <RouterLink to="/educ">Educational Background</RouterLink>
            <RouterLink to="/">Work Experience</RouterLink>
            <RouterLink to="/about">Portfolio</RouterLink>
          </nav>
        </div>
      </div>

    </header>
  </div>

  <RouterView />
</template>

<style scoped>
text{
  text-align: left;
}
.container{
  height: 100vh;
}
.name{
  padding: 16px;
  background-color: antiquewhite;
  font-size: 1.3rem;
}
header {
  width: 30%;
  height: 100%;
  background-color: aqua;
}
.nav-links{
  display: flex;
  flex-direction: column;
  position: absolute;
  padding: 16px;
}
nav {
  width: 470px;
  font-size: 1px;
  text-align: center;
  display: inline-block;
  text-align: left;
  margin-left: -1rem;
  font-size: 1rem;
  padding: 1rem 0;
}
.nav-links a{
  padding: 16px;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  text-decoration: none;
}
a{
  margin-right: 10px;
  color:black;
}

a:hover{
  background-color: aliceblue;
}

nav a:first-of-type {
  border: 0;
}

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

</style> -->
