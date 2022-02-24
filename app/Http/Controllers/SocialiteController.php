<?php

namespace App\Http\Controllers;

use App\Constants\SocialiteConstants;
use App\Models\User;
use Exception;
use Illuminate\Contracts\Session\Session;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;

class SocialiteController extends Controller
{
    public const GOOGLE = 'google';

    public function __construct()
    {
        //dd(phpinfo());
        
    }


    public function login(Request $request){
        $client = $request->segment(2);
        if($client){
            $request->session()->put('client', $client);
            if($client == SocialiteConstants::GOOGLE){
                return Socialite::driver(SocialiteConstants::GOOGLE)
                ->with(['client' => SocialiteConstants::GOOGLE])
                ->stateless()
                ->redirect();
            }
        }
    }



    public function callback(Request $request){
        try{
            $client = $request->session()->get('client');
            #$user = Socialite::driver($client)->user();
            $user = Socialite::driver($client)->stateless()->user();
            //dd($user);
            $data = User::loginSocialStateless($user,$client);
            return redirect()->to('http://localhost:3000/auth/login');
            return response()->json($data);

        }
        catch(Exception $e){
            return $e->getMessage();
        }
    }   
    
    // public function getSocialUserByProvider($provider){
    //     try{
    //         $client = $request->session()->get('client');
    //         #$user = Socialite::driver($client)->user();
    //         $user = Socialite::driver($client)->stateless()->user();
    //         //dd($user);
    //         $data = User::loginSocialStateless($user,$client);
    //         return redirect()->to('http://localhost:3000/auth/login');
    //         return response()->json($data);

    //     }
    //     catch(Exception $e){
    //         return $e->getMessage();
    //     }
    // }
       
}
