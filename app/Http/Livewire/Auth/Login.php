<?php

namespace App\Http\Livewire\Auth;

use Illuminate\Http\Request;
use Livewire\Component;
use Illuminate\Support\Facades\Auth;

class Login extends Component
{

    public 
        $email, 
        $password;

    public function mount(){

    }

    protected $rules = [
        'email' => 'required',
        'password' => 'required'
    ];



    public function render()
    {
        return view('livewire.auth.login')
        ->extends('layouts.app');
    }


    public function submit(){
        // dd('here');

        $this->validate();
        $attempt = [
            'email' => $this->email,
            'password' => $this->password
        ];

        // dd(Auth::attempt($attempt));

        if (auth()->attempt($attempt)) {
            // dd('invalid');
            // $token = auth()->user()->createToken('API Token')->accessToken;
            // dd($token);

            // return response(['user' => auth()->user(), 'token' => $token]);
            return redirect('/dashboard');
            // return response(['error_message' => 'Incorrect Details. 
            // Please try again']);
        }

       

        ;

    }
}
