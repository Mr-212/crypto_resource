<?php

use Illuminate\Http\Request;
use Modules\CryptoCompare\Http\Controllers\CryptoCompareController;

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

// Route::middleware('auth:api')->get('/cryptocompare', function (Request $request) {
//     return $request->user();
// });

Route::prefix('cryptocompare')->group(function () {
    Route::resource('/', CryptoCompareController::class);
    Route::get('/latest_news', [CryptoCompareController::class,'getLatestNews']);
    Route::get('/get_top_volumn_list', [CryptoCompareController::class,'getTopVolumnList']);

});