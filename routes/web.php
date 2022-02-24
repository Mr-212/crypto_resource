<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\SocialiteController;
use App\Http\Livewire\Auth\Login;
use App\Http\Livewire\Auth\SignUp;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    // return view('home.index');
    return view('layouts.app');

});

//  Auth::routes();

Route::prefix('auth')->group(function(){
  
    Route::get('/google',[SocialiteController::class,'login']);
    Route::get('/callback',[SocialiteController::class,'callback']);


});
Route::post('/register',[RegisterController::class,'register']);
// Route::any('/login',[LoginController::class,'login']);
Route::get('/register',SignUp::class);
Route::get('/login',Login::class);
// Route::get('/log-out',Login::class);






 Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

// Auth::routes();
Route::middleware('auth')->group(function(){
    Route::resource('/dashboard', DashboardController::class);

});

