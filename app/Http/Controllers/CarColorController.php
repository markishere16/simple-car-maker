<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CarColor;
class CarColorController extends Controller
{

    public function fetchAllCarColor() {
        $car_colors = CarColor::all();
        return $car_colors;
    }


    public function isNameTaken($name) {
        $car_colors = CarColor::where('name',$name)->count();
        return $car_colors > 0 ;
    }

    public function insertCarColor(Request $request) {
     
            $request->validate([
                'name' => ['required']
            ]);

            if(!$this->isNameTaken($request->name)) {

                $CarColor = new CarColor;
                $CarColor->name = $request->name;
                $CarColor->save();

                return response()->json(
                    [
                        'data'=> $CarColor,
                        'message'=>'Color Successfully Added!'
                    ], 201);

            }

            return response()->json(
                [
                    'message'=>'Color name already taken'
                ], 404);

    
    }




   

    public function updateCarColor(Request $request) {
     

        $request->validate([
            'name' => ['required']
        ]);

        $CarColor = CarColor::find($request->id);
        if(!$this->isNameTaken($request->name) || $CarColor->name == $request->name) {
         

            if($CarColor) {
                $CarColor->name = $request->name;
                $CarColor->save();
        
                return response()->json(
                    [
                        'data'=> $CarColor,
                        'message'=>'Color Successfully Updated!'
                    ], 201);
            }
            
            return response()->json(
                [
                    'message'=>'ID not found'
                ], 404);
 
        }

        return response()->json(
            [
                'message'=>'Color name already taken'
            ], 404);

       
      

    }

    public function deleteCarColor($id) {
        
        $CarColor = CarColor::find($id);

        if($CarColor){
            $CarColor->delete();
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
