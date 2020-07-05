<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Developer;
use App\Models\Game;
use Faker\Generator as Faker;

$factory->define(Game::class, function (Faker $faker) {
    return [
        'title' => $faker->sentence(2, true),
        'description' => $faker->text(500),
        'developer_id' => Developer::all()->random()->id,
        // 'age_rating_id' => //,
        'avatar' => '',
        'trailer_link' => '',
        'release_date' => $faker->dateTimeThisYear('now', null)
    ];
});
