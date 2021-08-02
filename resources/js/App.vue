<template>
    <div class="row">
    
    <!-- Navigation -->
    <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
      <div class="container">
        <a class="navbar-brand float-left" href="" target="_blank">
          App
        </a>
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
 
    <!-- Main -->
  </div>
  <!-- <div class="clearfix mt-2"></div>  -->

   <div class="row mt-5">
          <router-view />
  </div>
 
</template>