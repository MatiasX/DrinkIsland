<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Alapanyag extends Model
{
    protected $table = 'alapanyagok';
    protected $fillable = ['name',"unit"];
    public $timestamps = false;

    public function receptek()
    {
        return $this->hasMany(Recept::class);
    }
}
