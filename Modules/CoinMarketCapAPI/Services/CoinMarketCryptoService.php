<?php 
namespace  Modules\CoinMarketCapAPI\Services;

class CoinMarketCryptoService extends AuthService {

    function __construct($apiKey)
    {
        // var_dump($apiKey);
        parent::__construct($apiKey);
    }

    public function getCurrencyListingLatest(Array $parameters){
        $this->setUrl('/cryptocurrency/listings/latest');
        $this->setRequest($parameters);
        return $this->getResponse();
        // print_r($response);

    }

    public function getTrendingGainersAndLosers(Array $parameters){
        $this->setUrl('/cryptocurrency/trending/gainers-losers');
        $this->setRequest($parameters);
        return $this->getResponse();
        // print_r($response);

    }

}