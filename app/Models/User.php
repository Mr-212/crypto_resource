<?php

namespace App\Models;

use Exception;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Auth;
use Laravel\Passport\HasApiTokens;
use Laravel\Socialite\Contracts\User as ContractsUser;
use Laravel\Socialite\Facades\Socialite;

class User extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'google_id',
        'facebook_id',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];


    public static function loginSocialReguler(ContractsUser $user, $client){
        if(isset($user->id)){
            try{

                return self::createUserWithSocialClient($user,$client);

            }catch(Exception $e){
                    return $e->getMessage();
            }
        }
        return false;
    }

    public static function loginSocialStateless(ContractsUser $user, $client){
       
        try{
                $user = self::createUserWithSocialClient($user,$client);
                $token = $user->createToken('API_Client')->accessToken;
                return ['user' => $user, 'token' => $token];
        }
        catch(Exception $e){
            return $e->getMessage();
        }

    }

    private static function createUserWithSocialClient(ContractsUser $user,$client){
        try{
            $newUser = SELF::updateOrCreate(['email'=>$user->email],[
                $client.'_id'=> $user->id,
                'email'=>$user->email,
                'name' =>$user->name,
                'password'=>'',
            ]);

            if($newUser){
                return  Auth::loginUsingId($newUser->id);
                    
            }
        }
        catch(Exception $e){
            return $e->getMessage();
        }
    }
}
