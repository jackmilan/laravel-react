<?php

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

Route::group(['prefix' => 'v1', 'namespace' => 'Api\V1'], function () {

    // games
    Route::group(['prefix' => 'games'], function () {
        Route::get('/', 'GamesController@index');
        Route::post('create', 'GamesController@create');
    });

    // developers
    Route::apiResource('developers', 'DevelopersController');

    // age ratings
    Route::apiResource('ratings', 'RatingsController');
});
