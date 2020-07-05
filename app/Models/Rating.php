<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Rating extends Model
{
    protected $fillable = [
        'color',
        'min_age',
        'description'
    ];

    const COLOR_WHITE = 'white';
    const COLOR_YELLOW = 'yellow';
    const COLOR_PURPLE = 'purple';
    const COLOR_RED = 'red';
    const COLOR_BLACK = 'black';

    public static function getColors()
    {
        return [
            self::COLOR_WHITE,
            self::COLOR_YELLOW,
            self::COLOR_PURPLE,
            self::COLOR_RED,
            self::COLOR_BLACK,
        ];
    }
}
