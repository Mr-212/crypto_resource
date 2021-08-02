<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::updateOrCreate(
            ['email'=>'raza.ar10@gmail.com'],
            [
                'name' => 'Ali Raza',
                'password' => Hash::make('api123'),
            ]
            );
    }
}
