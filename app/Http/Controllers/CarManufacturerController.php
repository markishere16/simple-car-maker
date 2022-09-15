<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CarManufacturer;
class CarManufacturerController extends Controller
{
    //


        
    public function fetchAllManufacturer() {
        $manufacturers = CarManufacturer::all();
        return $manufacturers;
    }


    public function isNameTaken($name) {
        $manufacturers = CarManufacturer::where('name',$name)->count();
        
        return $manufacturers > 0 ;
    }

    public function insertManufacturer(Request $request) {
     
            $request->validate([
                'name' => ['required']
            ]);

            if(!$this->isNameTaken($request->name)) {

                $CarManufacturer = new CarManufacturer;
                $CarManufacturer->name = $request->name;
                $CarManufacturer->save();

                return response()->json(
                    [
                        'data'=> $CarManufacturer,
                        'message'=>'Manufacturer Successfully Added!'
                    ], 201);
            }

            return response()->json(
                [
                    'message'=>'Manufacturer name already taken'
                ], 404);

    
    }




   

    public function updateManufacturer(Request $request) {
     

        $request->validate([
            'name' => ['required']
        ]);

        $CarManufacturer = CarManufacturer::find($request->id);
        if(!$this->isNameTaken($request->name) || $CarManufacturer->name == $request->name) {
         

            if($CarManufacturer) {
                $CarManufacturer->name = $request->name;
                $CarManufacturer->save();
        
                return response()->json(
                    [
                        'data'=> $CarManufacturer,
                        'message'=>'Manufacturer Successfully Updated!'
                    ], 201);
            }
            
            return response()->json(
                [
                    'message'=>'ID not found'
                ], 404);
 
        }

        return response()->json(
            [
                'message'=>'Manufacturer name already taken'
            ], 404);

       
      

    }

    public function deleteManufacturer($id) {
        
        $CarManufacturer = CarManufacturer::find($id);

        if($CarManufacturer){
            $CarManufacturer->delete();
            return response()->json(
                [
                    'message'=>'Manufacturer Successfully Deleted!'
                ], 201);  
        }

        return response()->json(
            [
                'message'=>'ID not found'
            ], 404);

    }

}
