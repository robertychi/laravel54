<?php


//Route::get('/test', function () {
//    return 'i am here';
//});

Route::get('/{vue_capture?}', function () {
    return view('welcome');
})->where('vue_capture', '[\/\w\.-]*');


