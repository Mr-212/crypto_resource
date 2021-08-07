<template>
    <header>
    <!-- Navigation -->
    <nav class="navbar navbar-light bg-light navbar-fixed-top">

      <div class="container-fluid">
        <h3 class="navbar-brand float-left" href="" target="_blank">
          <span class="bg-info-text">#HashRank</span>
        </h3>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/login">Log in</router-link>
          </li>
          <li class="nav-item">
            <router-link class="btn btn-outline-primary" to="/register">Sign up</router-link>
          </li>
        </ul>
        
      </div>
    </nav>
    <!-- <router-view /> -->
    <!-- Main -->
    </header>
  <!-- <div class="clearfix mt-2"></div>  -->

<main>
 <aside class="sidebar">
      </aside>
      <div class="content">
         <router-view />
      </div>
       
</main>
 
</template>

<style scoped>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}
</style>