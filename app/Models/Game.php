<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    protected $fillable = [
        'title',
        'description',
        'developer_id',
        'rating_id',
        'avatar',
        'trailer_link',
        'release_date',
    ];
}
