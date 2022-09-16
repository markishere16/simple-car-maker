<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class CarManufacturerSeeder extends Seeder
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
                'name' => 'Vios'
            ],
            [
                'name' => 'Honda'
            ]
          
        ];

        
        \App\Models\CarManufacturer::insert($data);
    }
}
