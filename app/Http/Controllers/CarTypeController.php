<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CarType;

class CarTypeController extends Controller
{
    
  
    public function fetchAllCarType() {
        $car_types = CarType::all();
        return $car_types;
    }


    public function isNameTaken($name) {
        $car_types = CarType::where('name',$name)->count();
        return $car_types > 0 ;
    }

    public function insertCarType(Request $request) {
     
            $request->validate([
                'name' => ['required']
            ]);

            if(!$this->isNameTaken($request->name)) {

                $CarType = new CarType;
                $CarType->name = $request->name;
                $CarType->save();

                return response()->json(
                    [
                        'data'=> $CarType,
                        'message'=>'Car Type Successfully Added!'
                    ], 201);

            }

            return response()->json(
                [
                    'message'=>'Type name already taken'
                ], 404);

    
    }




   

    public function updateCarType(Request $request) {
     

        $request->validate([
            'name' => ['required']
        ]);

        $CarType = CarType::find($request->id);
        if(!$this->isNameTaken($request->name) || $CarType->name == $request->name) {
         

            if($CarType) {
                $CarType->name = $request->name;
                $CarType->save();
        
                return response()->json(
                    [
                        'data'=> $CarType,
                        'message'=>'Car Type Successfully Updated!'
                    ], 201);
            }
            
            return response()->json(
                [
                    'message'=>'ID not found'
                ], 404);
 
        }

        return response()->json(
            [
                'message'=>'Type name already taken'
            ], 404);

    

    }

    public function deleteCarType($id) {
        
        $CarType = CarType::find($id);

        if($CarType){
            $CarType->delete();
            return response()->json(
                [
                    'message'=>'Color Successfully Deleted!'
                ], 201);  
        }

        return response()->json(
            [
                'message'=>'ID not found'
            ], 404);

    }
}
