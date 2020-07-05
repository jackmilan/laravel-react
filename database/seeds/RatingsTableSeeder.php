<?php

use App\Models\Rating;
use Illuminate\Database\Seeder;

class RatingsTableSeeder extends Seeder
{
    protected $ratings = [
        [
            'color' => Rating::COLOR_WHITE,
            'min_age' => 4,
            'description' => 'No restrictions: Suitable for all ages / Aimed at young audiences / Exempt / Not rated / No applicable rating.'
        ],
        [
            'color' => Rating::COLOR_YELLOW,
            'min_age' => 9,
            'description' => 'No restrictions: Parental guidance is suggested for designated age range.'
        ],
        [
            'color' => Rating::COLOR_PURPLE,
            'min_age' => 12,
            'description' => 'No restrictions: Not recommended for a younger audience but not restricted.'
        ],
        [
            'color' => Rating::COLOR_RED,
            'min_age' => 16,
            'description' => 'Restricted: Parental accompaniment required for younger audiences.'
        ],
        [
            'color' => Rating::COLOR_BLACK,
            'min_age' => 18,
            'description' => 'Prohibitive: Exclusively for older audience / Purchase age-restricted / Banned.'
        ],
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach (self::$ratings as $rating) {
            Rating::create([
                'color' => $rating['color'],
                'min_age' => $rating['min_age'],
                'description' => $rating['description'],
            ]);
        }
    }
}
