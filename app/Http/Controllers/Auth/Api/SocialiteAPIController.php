<?php

namespace App\Http\Controllers\Auth\Api;
use App\Http\Controllers\Controller;
use App\Constants\SocialiteConstants;
use App\Models\User;
use Exception;
use Illuminate\Contracts\Session\Session;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Redirect;
use Laravel\Socialite\Facades\Socialite;

class SocialiteAPIController extends Controller
{
    public const GOOGLE = 'google';

    public function __construct()
    {
        //dd(phpinfo());
        
    }


    public function login($provider,Request $request){
   
        //return response()->json($request->headers);
        // if($client){
            // $request->session()->put('client', $client);
            //if($client == SocialiteConstants::GOOGLE){
                return  Socialite::driver($provider)
                //->with(['redirect_uri' => "http://localhost:3000/auth/login"])
                // ->setScopes(['openid', 'email'])
                ->stateless()
                ->redirectUrl($request->get('redirect_url'))
                ->redirect()
                ->getTargetUrl();

                // return new RedirectResponse($link);
                // var_dump($link);
                // return redirect()->away($link);
                // return Redirect::to("{$link}");
                // $request = Http::post($link);
                //var_dump($link);
                //dd();


               // return response()->json(['google_link'=> $link ]);
           // }
        // }
    }



    public function callback(Request $request){
        try{
            // $client = $request->session()->get('client');
            #$user = Socialite::driver($client)->user();
            $user = Socialite::driver(SocialiteConstants::GOOGLE)->stateless()->user();
            // dd($user);
            $data = User::loginSocialStateless($user,SocialiteConstants::GOOGLE);
            // return redirect()->to('http://localhost:3000/auth/login');
            return response()->json($data);

        }
        catch(Exception $e){
            return $e->getMessage();
        }

    }

    public function callbackByProvider($provider,Request $request){
        try{
            //var_dump($request->all());
            $user = Socialite::driver($provider)->stateless()
            ->redirectUrl($request->get('redirect_url'))
            ->user();
            $data = User::loginSocialStateless($user,$provider);
            return response()->json($data);

        }
        catch(Exception $e){
            return $e->getMessage();
        }
    }


}
