<?php

use App\Models\Developer;
use Illuminate\Database\Seeder;

class DevelopersTableSeeder extends Seeder
{
    protected $developers = [
        'Rockstar', 'Konami', 'EA', 'Ubisoft', 'Kojima Production'
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ($this->developers  as $developer) {
            Developer::create([
                'title' => $developer
            ]);
        }
    }
}
