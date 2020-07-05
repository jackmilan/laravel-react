<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Developer;
use Faker\Generator as Faker;

$factory->define(Developer::class, function (Faker $faker) {
    return [
        'title' => $faker->word
    ];
});
