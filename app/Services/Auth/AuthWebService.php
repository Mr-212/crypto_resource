<?php 
namespace App\Services;
use App\Contracts\AuthContract;
use App\Models\User;

class AuthWebService implements AuthContract {

    private $user;

    public function __construct()
    {
       $this->user = User::class;
    }


    public function postLogin()
    {
        
    }

    public function postSignUp()
    {
        
    }


   

}