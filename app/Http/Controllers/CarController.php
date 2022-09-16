<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CarManufacturer;
use App\Models\CarColor;
use App\Models\CarType;
use App\Models\Car;
class CarController extends Controller
{



    public function fetchAllCar() {
        // $car = Car::get();

        $car = Car::with(['manufacturer','color','type'])->get();
        return $car;
    }

    public function isNameTaken($name) {
        $car = Car::where('name',$name)->count();
        return $car > 0 ;
    }

    public function insertCar(Request $request) {
     
            $request->validate([
                'name' => ['required']
            ]);

            if(!$this->isNameTaken($request->name)) {

                $Car = new Car;
                $Car->name = $request->name;
                $Car->manufacturer_id = $request->manufacturer['id'];
                $Car->type_id = $request->type['id'];
                $Car->color_id = $request->color['id'];
                $Car->save();

                $Car->manufacturer = [
                    'id'=>  $Car->manufacturer_id,
                    'name'=>$request->manufacturer['name']
                ];
                $Car->type = [
                    'id'=> $Car->type_id,
                    'name'=>$request->type['name']
                ];
                $Car->color = [
                    'id'=> $Car->color_id,
                    'name'=>$request->color['name']
                ];

                return response()->json(
                    [
                        'data'=> $Car,
                        'message'=>'Car Successfully Added!'
                    ], 201);

            }
            return response()->json(
                [
                    'message'=>'Car name already taken'
                ], 404);

    }

    public function updateCar(Request $request) {
     

        $request->validate([
            'name' => ['required']
        ]);

        $Car = Car::find($request->id);
        if(!$this->isNameTaken($request->name) || $Car->name == $request->name) {
         

            if($Car) {

                $Car->name = $request->name;
                $Car->manufacturer_id = $request->manufacturer['id'];
                $Car->type_id = $request->type['id'];
                $Car->color_id = $request->color['id'];
                $Car->save();

                $Car->manufacturer = [
                    'id'=>  $Car->manufacturer_id,
                    'name'=>$request->manufacturer['name']
                ];
                $Car->type = [
                    'id'=> $Car->type_id,
                    'name'=>$request->type['name']
                ];
                $Car->color = [
                    'id'=> $Car->color_id,
                    'name'=>$request->color['name']
                ];

        
                return response()->json(
                    [
                        'data'=> $Car,
                        'message'=>'Car Successfully Updated!'
                    ], 201);
            }
            
            return response()->json(
                [
                    'message'=>'ID not found'
                ], 404);
 
        }

        return response()->json(
            [
                'message'=>'Car Name already taken'
            ], 404);

       
      

    }

    public function deleteCar($id) {
        
        $Car = Car::find($id);

        if($Car){
            $Car->delete();
            return response()->json(
                [
                    'message'=>'Car Successfully Deleted!'
                ], 201);  
        }

        return response()->json(
            [
                'message'=>'ID not found'
            ], 404);

    }

    public function CarProperties() {
        $CarManufacturer = CarManufacturer::select('id','name')->get();
        $CarType = CarType::select('id','name')->get();
        $CarColor = CarColor::select('id','name')->get();

        return [
            'manufacturers'=> $CarManufacturer, 
            'types'=>$CarType,
            'colors'=>$CarColor
        ];

    }

    public function CarPropertiesCount() {
        $Car = Car::count();
        $CarManufacturer = CarManufacturer::count();
        $CarType = CarType::count();
        $CarColor = CarColor::count();

        return [
            'total_cars'=> $Car, 
            'total_manufacturers'=> $CarManufacturer, 
            'total_types'=>$CarType,
            'total_colors'=>$CarColor
        ];

    }
}
