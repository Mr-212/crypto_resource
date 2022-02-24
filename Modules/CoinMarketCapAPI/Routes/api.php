<?php

use Illuminate\Http\Request;
// use Illuminate\Routing\Route;
use Modules\CoinMarketCapAPI\Http\Controllers\CoinMarketCapAPIController;
use Modules\CoinMarketCapAPI\Http\Controllers\CryptoController;

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

// Route::middleware('auth:api')->get('/coinmarketcapapi', function (Request $request) {
//     return $request->user();
// });
Route::prefix('coinmarket')->group(function(){
    Route::get('/',[CryptoController::class,'getLatestListing']);
    Route::get('trending',[CryptoController::class,'getTrendingLists']);
});
