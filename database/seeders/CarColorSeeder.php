<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class CarColorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            [
                'name' => 'Red'
            ],
            [
                'name' => 'Blue'
            ]
           
        ];

        
        \App\Models\CarColor::insert($data);
    }
}
