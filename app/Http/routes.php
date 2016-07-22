<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/




Route::group(['prefix' => 'api'], function(){
	Route::post('authenticate','AuthenticateController@authenticate');
	Route::post('signup', 'AuthenticateController@signup');

	Route::get('me', 'UserController@index');
	Route::get('allNotes', 'NotesController@index');
	Route::post('addNote', 'NotesController@create');
});

/*Route::group(['middleware' => 'jwt.auth'], function() {
	Route::get('/', function () {
    return view('welcome');
});
	Route::get('/home', 'HomeController@index');
});*/

Route::get('/', function () {
    return view('welcome');
});

Route::auth();

Route::get('/home', 'HomeController@index');

Route::get('angular', function(){
	return redirect('/angular.html');
});

Route::get('index', function(){
	return view('index');
});




