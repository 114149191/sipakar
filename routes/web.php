<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\DoctorsController;
use App\Http\Controllers\Admin\PatientsController;
use App\Http\Controllers\Admin\ActivityController;
use App\Http\Controllers\Admin\SettingsController;
use App\Http\Controllers\Admin\ProfileController;
use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;

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
    return inertia('Home');
});

Route::get('/about', function () {
    return inertia('About');
});

Route::get('/login', [LoginController::class, 'index'])->name('login');
Route::post('/login', [LoginController::class, 'checklogin']);

Route::get('/register', [LoginController::class, 'register']);
Route::post('/register', [LoginController::class, 'insert']);

Route::middleware('auth')->group(function () {
    Route::middleware('role:admin')->group(function () {
        Route::get('/dashboard', [DashboardController::class, 'index']);

        Route::get('/doctors', [DoctorsController::class, 'index']);
        Route::post('/doctors', [DoctorsController::class, 'insert']);
        Route::post('/doctor-delete', [DoctorsController::class, 'delete']);
        Route::post('/doctor-update', [DoctorsController::class, 'update']);

        Route::get('/patients', [PatientsController::class, 'index']);
        Route::post('/patients', [PatientsController::class, 'insert']);
        Route::post('/patient-delete', [DoctorsController::class, 'delete']);
        Route::post('/patient-update', [DoctorsController::class, 'update']);

        Route::get('/activity', [ActivityController::class, 'index']);
        Route::get('/settings', [SettingsController::class, 'index']);
        Route::get('/profile', [ProfileController::class, 'index']);
    });
});
