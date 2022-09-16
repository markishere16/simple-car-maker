<?php

namespace Database\Seeders;

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
        \App\Models\User::Create(
            [
            'name' => 'Mark Joshua Mandigma',
            'email' => 'carmaker@test.com',
            'password' => Hash::make('carmaker@@'),
            ]
        );
    }
}
