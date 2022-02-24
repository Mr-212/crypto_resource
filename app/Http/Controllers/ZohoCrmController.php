<?php

namespace App\Http\Controllers;

use App\Services\ZohoCRMContactService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;

class ZohoCrmController extends Controller
{
    
    private $access_token;
    private $contactService;
    public function __construct()
    {
        $this->access_token = Config::get('constants.zoho:crm.access_token', 'default');
        $this->contactService = new ZohoCRMContactService($this->access_token);
    }


    public function createContact(Request $request){
        $response = $this->contactService->create($request->all());
        return $response;
    }
}
