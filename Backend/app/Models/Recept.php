<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Recept extends Model
{
    protected $table = 'receptek';
    public $timestamps = false;

    protected $fillable = ['ital_id', 'alapanyag_id', 'amount'];
    
    public function ital()
    {
        return $this->belongsTo(Ital::class);
    }

    public function alapanyag()
    {
        return $this->belongsTo(Alapanyag::class);
    }
}
