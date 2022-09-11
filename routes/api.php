<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\AuthController;
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


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::middleware('auth:sanctum')->get('/authenticated', function () {
    return true;
});


Route::prefix('/auth')->group(function () {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/logout', [AuthController::class, 'logout']);
});




Route::middleware('auth:sanctum')->prefix('/items')->group(function () {
    Route::get('/all',[ItemController::class, 'index']);
    Route::post('/store', [ItemController::class, 'store']);
    Route::put('/check', [ItemController::class, 'updateCheck']);
    Route::put('/update', [ItemController::class, 'updateName']);
    Route::delete('/delete/{id}', [ItemController::class, 'delete_task']);
    Route::delete('/clearCompleted', [ItemController::class, 'clearCompleted']);
    }
);