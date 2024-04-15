<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Tipus extends Model
{
    protected $table = 'tipus';
    public $timestamps = false;
    protected $fillable = [
        'ital_id',
        'teli',
        'nyari',
        'edes',
        'savanyu',
        'keseru',
        'alkoholos',
        'alkoholmentes'];

    public function ital()
    {
        return $this->belongsTo(Ital::class);
    }
}
