<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Developer;

class DevelopersController extends Controller
{
    public function index()
    {
        $developers = Developer::orderBy('id', 'desc')->get();

        return response()->json($developers, 200);
    }
}
