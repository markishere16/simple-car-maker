<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CarManufacturerController;
use App\Http\Controllers\CarColorController;
use App\Http\Controllers\CarTypeController;
use App\Http\Controllers\CarController;





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




Route::prefix('/car-manufacturer')->group(function () {
    Route::get('/all',[CarManufacturerController::class, 'fetchAllManufacturer']);
    Route::post('/insert', [CarManufacturerController::class, 'insertManufacturer']);
    Route::put('/update', [CarManufacturerController::class, 'updateManufacturer']);
    Route::delete('/delete/{id}', [CarManufacturerController::class, 'deleteManufacturer']);

});


Route::prefix('/car-color')->group(function () {
    Route::get('/all',[CarColorController::class, 'fetchAllCarColor']);
    Route::post('/insert', [CarColorController::class, 'insertCarColor']);
    Route::put('/update', [CarColorController::class, 'updateCarColor']);
    Route::delete('/delete/{id}', [CarColorController::class, 'deleteCarColor']);
   
});

Route::prefix('/car-type')->group(function () {
    Route::get('/all',[CarTypeController::class, 'fetchAllCarType']);
    Route::post('/insert', [CarTypeController::class, 'insertCarType']);
    Route::put('/update', [CarTypeController::class, 'updateCarType']);
    Route::delete('/delete/{id}', [CarTypeController::class, 'deleteCarType']);
    
});


Route::prefix('/car')->group(function () {
    Route::get('/all',[CarController::class, 'fetchAllCar']);
    Route::get('/car-properties',[CarController::class, 'fetchCarProperties']);
    Route::post('/insert', [CarController::class, 'insertCar']);
    Route::put('/update', [CarController::class, 'updateCar']);
    Route::delete('/delete/{id}', [CarController::class, 'deleteCar']); 
});