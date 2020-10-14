<?php

namespace Modules\Accounts\Http\Controllers;

use App\User;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Accounts\AccountService\AccountService;

class AccountsController extends Controller
{
    private $account;
    public function __construct(AccountService $account)
    {
        $this->account = $account;
    }

/*    public function class(AccountService $account)
    {
        // lots of logic here..
        return $account->testData();
        return 'this is nice from controller';
    }*/
    public function class()
    {
        // lots of logic here..
        return User::getUserByKey('id', 1);
        return $this->account->testData();
        return 'this is nice from controller';
    }
    public function class2(AccountService $account)
    {
        // lots of logic here..
        return $account->testData();
        return 'this is nice from controller';
    }
}
