<?php

namespace App\Models\Games;

use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    protected $fillable = [
        'title',
        'description',
        'developer',
        'age_rating',
        'avatar',
        'trailer_link',
        'release_date',
    ];
}
