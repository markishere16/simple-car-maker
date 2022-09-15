<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    use HasFactory;
    protected $table = 'cars';
    public $timestamps = false;

    public function manufacturer()
    {
        return $this->belongsTo(CarManufacturer::class);
    }
    
    public function type()
    {
        return $this->belongsTo(CarType::class);
    }

    public function color()
    {
        return $this->belongsTo(CarColor::class);
    }
}
