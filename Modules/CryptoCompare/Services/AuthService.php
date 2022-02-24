<?php 
namespace Modules\CryptoCompare\Services;

class AuthService {

    private $apiKey, $apiUrl, $envType, $parameters;
    const ENVTYPE_PRODUCTION = 'production';
    const API_RUL = 'https://min-api.cryptocompare.com/data';


    public function  __construct($apiKey, $apiUrl=null, $envType = self::ENVTYPE_PRODUCTION){
        $this->apiKey = $apiKey;
        // $this->apiUrl = $envType == self::ENVTYPE_PRODUCTION ? SELF::API_RUL : null;
        $this->apiUrl = $envType == $apiUrl ? $apiUrl: SELF::API_RUL ;

    }

    private function getHeaders(): Array {
        return [
            "Accepts: application/json",
            "authorization: Apikey {$this->apiKey}"
        ];
    }



    public function setApiUrl(string $url){
        $this->apiUrl = $url;
    }


    protected function setUrl(String $url){
        $this->apiUrl.=$url;
        
    }


    protected function setRequest(Array $parameters){
        $this->parameters = $parameters;
    }


    protected function getResponse(){
        $qs = http_build_query($this->parameters); // query string encode the parameters
        // var_dump($this->apiUrl);
        $request = "{$this->apiUrl}?{$qs}"; // create the request URL


        $curl = curl_init(); // Get cURL resource
        // Set cURL options
        curl_setopt_array($curl, array(
        CURLOPT_URL => $request,            // set the request URL
        CURLOPT_HTTPHEADER => $this->getHeaders(),     // set the headers 
        CURLOPT_RETURNTRANSFER => 1         // ask for raw response instead of bool
        ));

        $response = curl_exec($curl); // Send the request, save the response
        $res = json_decode($response,1); // print json decoded response
        curl_close($curl); // Close request

        return $res;
    }


}