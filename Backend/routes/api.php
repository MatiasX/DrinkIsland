<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AlapanyagController;
use App\Http\Controllers\ItalController;
use App\Http\Controllers\KoktelController;
use App\Http\Controllers\TipusController;
use App\Http\Controllers\ReceptController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\ProfileController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/getAlapanyagByName', [AlapanyagController::class, 'getAlapanyagByName']);
Route::get('/getAlapanyagById', [AlapanyagController::class, 'getAlapanyagById']);
Route::get('/getAlapanyagok', [AlapanyagController::class, 'getAlapanyagok']);

Route::get('/getItalByName', [ItalController::class, 'getItalByName']);
Route::get('/getItalById', [ItalController::class, 'getItalById']);
Route::get('/getItalok', [ItalController::class, 'getItalok']);

Route::get('/getKoktelok', [KoktelController::class, 'getKoktelok']);
Route::get('/getTeli', [KoktelController::class, 'getTeli']);
Route::get('/getNyari', [KoktelController::class, 'getNyari']);
Route::get('/getEdes', [KoktelController::class, 'getEdes']);
Route::get('/getSavanyu', [KoktelController::class, 'getSavanyu']);
Route::get('/getKeseru', [KoktelController::class, 'getKeseru']);
Route::get('/getAlkoholos', [KoktelController::class, 'getAlkoholos']);
Route::get('/getAlkoholmentes', [KoktelController::class, 'getAlkoholmentes']);

Route::get('/getReceptByName', [KoktelController::class, 'getReceptByName']);
Route::get('/searchKoktelokByName', [KoktelController::class, 'searchKoktelokByName']);

Route::get('/getTipusByItalId', [TipusController::class, 'getTipusByItalId']);
Route::get('/getTipusok', [TipusController::class, 'getTipusok']);
//Route::delete('/deleteTipusByItalId', [TipusController::class, 'deleteTipusByItalId']);

Route::get('/getReceptek', [ReceptController::class, 'getReceptek']);
Route::get('/getReceptByAlapanyagId', [ReceptController::class, 'getReceptByAlapanyagId']);

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);


Route::group(["middleware"=>"auth:sanctum"], function(){
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/getUserProfileData', [ProfileController::class, 'getUserProfileData']);
    Route::put('/setNewPassword', [ProfileController::class, 'setNewPassword']);
    Route::delete('/deleteAccount', [ProfileController::class, 'deleteAccount']);
    Route::group(["middleware"=>"admin"], function(){
        Route::get('/getUsers', [ProfileController::class, 'getUsers']);
        Route::put('/setAdmin', [ProfileController::class, 'setAdmin']);
        
        Route::post('/addAlapanyag', [AlapanyagController::class, 'addAlapanyag']);
        Route::put('/modifyAlapanyag', [AlapanyagController::class, 'modifyAlapanyag']);
        Route::delete('/deleteAlapanyag', [AlapanyagController::class, 'deleteAlapanyag']);

        Route::post('/addItal', [ItalController::class, 'addItal']);
        Route::put('/modifyItal', [ItalController::class, 'modifyItal']);
        Route::delete('/deleteItal', [ItalController::class, 'deleteItal']);

        Route::post('/addTipus', [TipusController::class, 'addTipus']);
        Route::put('/modifyTipus', [TipusController::class, 'modifyTipus']);
        Route::delete('/deleteTipus', [TipusController::class, 'deleteTipus']);

        Route::post('/addRecept', [ReceptController::class, 'addRecept']);
        Route::put('/modifyRecept', [ReceptController::class, 'modifyRecept']);
        Route::delete('/deleteRecept', [ReceptController::class, 'deleteRecept']);
    });
});


        
        
        
        