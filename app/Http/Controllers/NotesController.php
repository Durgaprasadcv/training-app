<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Note;

use App\Http\Requests;

class NotesController extends Controller
{

    function __construct()
    {
    	$this->middleware('jwt.auth');
    }

    public function index()
    {
    	$user = \JWTAuth::parseToken()->toUser();

    	//$user->load('notes');
    	$notes = $user->notes;

    	//return response()->json(compact('notes'));
        return $notes;
    }

    public function create(Request $request)
    {
    	$user = \JWTAuth::parseToken()->toUser();

    	$note = Note::create($request->all());

    	$note->user_id = $user->id;

    	$note->save();
    	
    	return response()->json(compact('note'));
    }
}
