<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Alapanyag extends Model
{
    protected $table = 'alapanyagok';
<<<<<<< HEAD
    protected $fillable = ['name',"unit"];
=======
    protected $fillable = ['name', 'unit'];
>>>>>>> c757c6131b90967e5a7d8136cd024b7df8ff5239
    public $timestamps = false;

    public function receptek()
    {
        return $this->hasMany(Recept::class);
    }
}
