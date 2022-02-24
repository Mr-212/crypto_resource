<?php
namespace App\Contracts;

interface AuthContract {

    public function postLogin();
    public function postSignUp();

}