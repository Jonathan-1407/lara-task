<?php

namespace App\Policies;

use App\Models\CardList;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class CardListPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can permanently added the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\CardList  $cardList
     * @return mixed
     */
    public function createCard(User $user, CardList $cardList)
    {
        return  $user->id === $cardList->board->owner_id;
    }
}
