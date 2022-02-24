<?php

use App\Http\Controllers\Auth\Api\SocialiteAPIController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\SocialiteController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('cors')->group(function(){
    Route::post('login',[LoginController::class ,'login']);
    Route::post('register',[RegisterController::class ,'register']);
    Route::get('auth/{provider}', [SocialiteAPIController::class,'login']);
    Route::get('callback', [SocialiteAPIController::class,'callback']);
    Route::get('callback/{provider}', [SocialiteAPIController::class,'callbackByProvider']);

});
//Route::resource('user', UserController::class)->middleware('auth:api');

Route::middleware('auth:api')->get('/user1', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:api')->group(function(){
    Route::resource('user', UserController::class);
});


