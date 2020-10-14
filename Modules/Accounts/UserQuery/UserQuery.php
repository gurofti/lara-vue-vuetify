<?php


namespace Modules\Accounts\UserQuery;


use App\User;

trait UserQuery
{
    public static function getUserByKey($key, $value) {
        return User::where($key, $value)->first();
    }
}
