<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;
use Illuminate\Support\Carbon;
class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user_id = auth("sanctum")->id();
        return Item::orderBy('created_at' ,'DESC')
        ->where('user_id',$user_id)
        ->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
    
        $request->validate([
            'name' => ['required']
        ]);
        $user_id = auth("sanctum")->id();

        $newItem = new Item;
        $newItem->user_id = $user_id;
        $newItem->name = $request->name;
        $newItem->completed = 0;
        $newItem->save();
        return $newItem;
        
    }

 
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateCheck(Request $request)
    {
        $existingItem = Item::find($request->item['id']);

        if($existingItem) {
            $existingItem->completed = $request->item['completed'] ? true : false;
            $existingItem->completed_at = $request->item['completed'] ? Carbon::now() : null;
            $existingItem->save();
            return $existingItem;
        }

        return "item not found";


    }

    public function updateName(Request $request)
    {

        $existingItem = Item::find($request->item['id']);

        if($existingItem) {
            $existingItem->name = $request->item['name'] ;
            $existingItem->save();
            return $existingItem;
        }

        return "item not found";


    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function delete_task($id)
    {
        $existingItem = Item::find($id);

        if($existingItem){
            $existingItem->delete();
            return "Item Successfully Deleted!";
        }
        
        return "item not found";

    }

    public function clearCompleted()
    {
        $deleteCompleted = Item::where('completed',true)->delete();

        if($deleteCompleted){
            return "Completed Task Successfully Deleted!";
        }
    }
}
