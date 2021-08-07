<?php 
namespace App\Services;
use App\Contracts\ZohoCRMContact;

class ZohoCRMContactService implements ZohoCRMContact {

    private $accessToken;

    public function __construct($accessToken)
    {
        $this->accessToken = $accessToken;
    }


    public function get()
    {
        
    }


    public function create()
    {
        
    }



    public function update()
    {
        
    }

    public function delete()
    {
        
    }

}