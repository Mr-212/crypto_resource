<?php 
namespace Modules\CryptoCompare\Services;

class CryptoCompareService extends AuthService {

    function __construct($apiKey)
    {
        parent::__construct($apiKey);
    }

    public function getCurrencyListingLatest(Array $parameters){
        $this->setUrl('/cryptocurrency/listings/latest');
        $this->setRequest($parameters);
        return $this->getResponse();

    }

    public function getTrendingGainersAndLosers(Array $parameters){
        $this->setUrl('/cryptocurrency/trending/gainers-losers');
        $this->setRequest($parameters);
        return $this->getResponse();

    }
    public function getLatestNews(Array $parameters=['lang'=>'EN']){
        $this->setUrl('/v2/news/');
        // if(!empty($parameters))
            $this->setRequest($parameters);
        return $this->getResponse();
    }

    public function getAllCoinsList(Array $parameters=[]){
        $this->setUrl('/all/coinlist');
        $this->setRequest($parameters);
        return $this->getResponse();
    }

    public function getTopListVolumn(Array $parameters=[]){
        $this->setUrl('/top/totalvolfull');
        $this->setRequest($parameters);
        return $this->getResponse();
    }

    // public function getTopListVolumn(Array $parameters=[]){
    //     $this->setUrl('/top/totalvolfull');
    //     $this->setRequest($parameters);
    //     return $this->getResponse();
    // }

}