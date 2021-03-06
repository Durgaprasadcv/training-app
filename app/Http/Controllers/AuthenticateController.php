<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Tymon\JWTAuth\Facades\JWTAuth;

use App\Http\Requests;
use App\User;

class AuthenticateController extends Controller
{
    
    public function authenticate(Request $request)
    {
    	$credentials = $request->only('name', 'password');

        try {
            // verify the credentials and create a token for the user
            if (! $token = \JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 401);
            }
        } catch (JWTException $e) {
            // something went wrong
            return response()->json(['error' => 'could_not_create_token'], 500);
        }

        // if no errors are encountered we can return a JWT
        return response()->json(compact('token'));
    }

    public function signup(Request $request)
    {

        $credentials = $request->only('name','email', 'password');

           try {
               $user = User::create($credentials);
           } catch (Exception $e) {
               return response()->json(['error' => 'User already exists.'], HttpResponse::HTTP_CONFLICT);
           }

           $token = JWTAuth::fromUser($user);

           return response()->json(compact('token'));
    }
}
