<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\Game\Create;
use App\Http\Requests\Game\Edit;
use App\Models\Game;

class GamesController extends Controller
{
    public function index()
    {
        $games = Game::orderBy('id', 'desc')->get();

        return response()->json($games, 200);
    }

    public function create(Create $request)
    {
        $game = Game::create([
            'title' => $request->input('title'),
            'description' => $request->input('description'),
            'developer_id' => $request->input('developer_id'),
            'rating_id' => $request->input('rating_id'),
            'trailer_link' => $request->input('trailer_link'),
            'release_date' => $request->input('release_date'),
        ]);

        return response()->json($game, 201);
    }

    public function update(Edit $request, $id)
    {
        $game = Game::findOrFail($id);

        $game->update([
            'title' => $request->input('title'),
            'description' => $request->input('description'),
            'developer_id' => $request->input('developer_id'),
            'rating_id' => $request->input('rating_id'),
            'trailer_link' => $request->input('trailer_link'),
            'release_date' => $request->input('release_date'),
        ]);

        return response()->json($game, 201);
    }

    public function destroy($id)
    {
        $game = Game::findOrFail($id);

        $game->delete();

        return response()->json(null, 202);
    }
}
