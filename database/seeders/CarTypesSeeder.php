<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class CarTypesSeeder extends Seeder
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
                'name' => 'Truck'
            ],
            [
                'name' => 'Sports'
            ]
          
        ];

        \App\Models\CarType::insert($data);
    }
}
