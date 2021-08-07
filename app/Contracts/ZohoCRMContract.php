<?php
namespace App\Contracts;

interface ZohoCRMContact{

    public function get();
    public function create();
    public function update();
    public function delete();

}