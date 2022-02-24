<div class="row mt-5">
        <div class="col-md-6">
        </div>
        <div class="col-md-6">
                <div class="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2">

                    <div class="card card-primary">
                    <div class="card-header">
                        <h4>Login</h4>
                    </div>
                    <div class="card-body">
                        <form class="needs-validation" novalidate="" wire:submit.prevent="submit">
                        <div class="form-group">
                            <label for="email">Email</label>
                            @error('email') <span class="error">{{ $message }}</span> @enderror
                            <input type="email" class="form-control form-control-lg" name="email" id="email" wire:model="email" autofocus/>
                            {{-- <input id="email" type="email" class="form-control" name="email" tabindex="1" required autofocus> --}}
                            <div class="invalid-feedback">
                            Please fill in your email
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="d-block">
                            <label for="password" class="control-label">Password</label>
                            <div class="float-right">
                                <a href="auth-forgot-password.html" class="text-small">
                                Forgot Password?
                                </a>
                            </div>
                            {{-- </div> --}}
                            {{-- <input id="password" type="password" class="form-control" name="password" tabindex="2" required> --}}
                            @error('password') <span class="error">{{ $message }}</span> @enderror
                            <input type="password" class="form-control form-control-lg"  name="password" id="password" wire:model="password"/>
                            <div class="invalid-feedback">
                            please fill in your password
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="custom-control custom-checkbox">
                            <input type="checkbox" name="remember" class="custom-control-input" tabindex="3" id="remember-me">
                            <label class="custom-control-label" for="remember-me">Remember Me</label>
                            </div>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-primary btn-lg btn-block" tabindex="4">
                            Login
                            </button>
                        </div>
                        </form>
                        <div class="text-center mt-4 mb-3">
                        <div class="text-job text-muted">Login With Social</div>
                        </div>
                        <div class="row sm-gutters">
                        <div class="col-6">
                            <a class="btn btn-block btn-social btn-google" href="/auth/google">
                                <span class="fab fa-google"></span> Google
                            </a>
                        </div>
                        <div class="col-6">
                            <a class="btn btn-block btn-social btn-facebook">
                            <span class="fab fa-facebook"></span> Facebook
                            </a>
                        </div>
                        {{-- <div class="col-6">
                            <a class="btn btn-block btn-social btn-twitter">
                            <span class="fab fa-twitter"></span> Twitter
                            </a>
                        </div> --}}

                        </div>
                    </div>
                    </div>
                    <div class="mt-5 text-muted text-center">
                    Don't have an account? <a href="auth-register.html">Create One</a>
                    </div>
        </div>

</div>




    
@push('scripts')

@endpush
