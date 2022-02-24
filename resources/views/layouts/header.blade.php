
  <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'HashRank') }}</title>

    <!-- Scripts -->
    <!-- {{-- <script src="{{ asset('js/app.js') }}" defer></script> --}} -->
    {{-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.20.0/css/mdb.lite.min.css" integrity="sha512-Eu5EEZpsrO6niYlnhT+ITom/YVGoIZGEsbAvZ+gUJsO3Xaq9+hX4vZnbecMn/Cq5KOdmNOdehu/U80111W9xsA==" crossorigin="anonymous" referrerpolicy="no-referrer" />    <!-- Fonts --> --}}
    {{-- <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.1/css/mdb.min.css" rel="stylesheet"> --}}
    <link href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap" rel="stylesheet" />
    {{-- <link rel="dns-prefetch" href="//fonts.gstatic.com"> --}}
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    {{-- <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet"> --}}
    <link rel="stylesheet" href="assets/css/app.min.css">
    {{-- <link rel="stylesheet" href="assets/css/style.css"> --}}
    <script src="https://cdn.tailwindcss.com/"></script>
    <link rel="stylesheet" href="assets/bundles/bootstrap-social/bootstrap-social.css">
    <!-- Template CSS -->
    <link rel="stylesheet" href="assets/css/components.css">
    <!-- Custom style CSS -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ mix('css/app.css') }}" type="text/css" rel="stylesheet" />

    <link rel="stylesheet" href="assets/css/custom.css">
    <link rel='shortcut icon' type='image/x-icon' href='assets/img/favicon.ico' />
    <!-- Styles -->
  
    @livewireStyles

