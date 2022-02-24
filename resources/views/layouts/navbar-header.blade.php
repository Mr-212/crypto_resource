<nav class="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top">

    <div class="container-fluid">
      <h3 class="navbar-brand float-left" href="" target="_blank">
        <span class="bg-info-text">#HashRank</span>
      </h3>
      <ul class="nav navbar-nav flex-row float-right">
        {{-- @if(!Auth::user()) --}}
          <li class="nav-item">
            <a class="nav-link pr-3" href="/login">Log in</a>
            {{-- <LoginComponent/> --}}
            {{-- @livewire('auth.login') --}}
          </li>
        <li class="nav-item">
          <a class="nav-link pr-3" href="/register">Sign Up</a>

          {{-- <router-link class="btn btn-outline-primary" to="/register">Sign up</router-link> --}}
        </li>

        {{-- @else --}}
        <li class="nav-item">
          <a class="nav-link pr-3" href="/log-out">Log Out</a>
          {{-- <router-link class="btn btn-outline-primary" to="/register">Sign up</router-link> --}}
        </li>

        {{-- @endif --}}
      </ul>
      
    </div>
  </nav>