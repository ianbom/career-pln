<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
    Route::inertia('files', 'files')->name('files');
    Route::inertia('online-test', 'online-test')->name('online-test');
    Route::inertia('announcement', 'announcement')->name('announcement');
});

require __DIR__.'/settings.php';
