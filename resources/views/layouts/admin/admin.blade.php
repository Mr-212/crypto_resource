<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>

  <head>
    @include('layouts.admin.header')
  </head>
</head>
<body>

    <div id="app" class="">
        <div class="main-wrapper main-wrapper-1">
                @include('layouts.admin.navbar-header')
                @include('layouts.admin.navbar-side')
                <div class="main-content">
                    @yield('content')
                </div>
        </div>
        <div>
              
                {{-- <router-view /> --}}
        
        </div>
        
    </div>

    <footer>
        @include('layouts.admin.footer')
      
    </footer>
 
    


</body>

</html>
