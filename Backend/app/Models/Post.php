<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Post extends Model
{
    protected $table = 'posts';
    protected $fillable = ['user_id','title', 'text'];
    public $timestamps = false;

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
