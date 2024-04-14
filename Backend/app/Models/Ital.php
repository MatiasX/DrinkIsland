<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Ital extends Model
{
    protected $table = 'italok';
    protected $fillable = ['name'];
    public $timestamps = false;

    public function receptek()
    {
        return $this->hasMany(Recept::class);
    }

    public function tipus()
    {
        return $this->hasOne(Tipus::class);
    }
}
