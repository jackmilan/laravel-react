<?php

namespace App\Observers;

use App\Events\GameAdd as GameAddEvent;
use App\Events\GameDelete as GameDeleteEvent;
use App\Events\GameUpdate as GameUpdateEvent;
use App\Models\Game;

class GameObserver
{
    /**
     * Handle the game "created" event.
     *
     * @param  \App\Game  $game
     * @return void
     */
    public function created(Game $game)
    {
        broadcast(new GameAddEvent($game));
    }

    /**
     * Handle the game "updated" event.
     *
     * @param  \App\Game  $game
     * @return void
     */
    public function updating(Game $game)
    {
        broadcast(new GameUpdateEvent($game));
    }

    /**
     * Handle the game "deleted" event.
     *
     * @param  \App\Game  $game
     * @return void
     */
    public function deleted(Game $game)
    {
        broadcast(new GameDeleteEvent($game));
    }

    /**
     * Handle the game "restored" event.
     *
     * @param  \App\Game  $game
     * @return void
     */
    public function restored(Game $game)
    {
        //
    }

    /**
     * Handle the game "force deleted" event.
     *
     * @param  \App\Game  $game
     * @return void
     */
    public function forceDeleted(Game $game)
    {
        //
    }
}
