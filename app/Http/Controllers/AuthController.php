<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\DB;
class AuthController extends Controller
{
    public function login(Request $request){

        $request->validate([
            'email' => ['required'],
            'password' => ['required']
        ]);

        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){
      
            $request->session()->regenerate();
            $id = auth("sanctum")->id();
          
            return response()->json([
                "message" => "Login Success",
                "success" => true,
                "details"=>auth("sanctum")->user()
            ]); 
        }
        else{
            return response()->json([
                "message" => "Incorrect Email or Password. Please try again",
                "success" => false
            ]);
        }
    }

    public function register(Request $request){
     
        $request->validate([
            'name' => ['required'],
            'email' => ['required'],
            'password' => ['required']
        ]);

        $verifyEmail = User::where('email',$request->email)->count();

        if($verifyEmail > 0) {
            return ['success'=>false,'message'=> 'Email is already taken'];
        } 

         
        $New = User::create([
            'name' =>  $request->name,
            'email' =>  $request->email,
            'password' => Hash::make($request->password),
        ]);

        return ['success'=>true,'message'=> 'Your account have been successfully created!'];

    }

    public function logout(Request $request) {

        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

    }

}



?>