<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
<!-- <script src="{{ asset('js/react_app/app.js') }}" type="text/javascript" defer></script>  -->
<script src="{{ mix('js/react_app_typescript/index.js') }}" type="text/javascript" defer></script> 

{{-- <script src="assets/js/app.min.js"></script> --}}
<!-- JS Libraies -->
<!-- Page Specific JS File -->
<!-- Template JS File -->
<script src="assets/js/scripts.js"></script>
<!-- Custom JS File -->
<script src="assets/js/custom.js"></script>
@livewireScripts
@stack('scripts')
