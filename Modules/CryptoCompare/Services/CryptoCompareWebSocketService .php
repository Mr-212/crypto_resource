<?php 
namespace Modules\CryptoCompare\Services;

class CryptoComparCryptoCompareWebSocketServicee extends AuthService {

    const SOCKET_URL = "wss://streamer.cryptocompare.com/v2";

    function __construct($apiKey)
    {
        parent::__construct($apiKey,SELF::SOCKET_URL);
    }


    public function addSubscription(Array $parameters=[]){
        // $this->setUrl('/top/totalvolfull');
        $this->setRequest($parameters);
        return $this->getResponse();
    }

    // public function getTopListVolumn(Array $parameters=[]){
    //     $this->setUrl('/top/totalvolfull');
    //     $this->setRequest($parameters);
    //     return $this->getResponse();
    // }

}