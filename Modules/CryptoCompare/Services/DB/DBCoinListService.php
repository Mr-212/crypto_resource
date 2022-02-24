<?php 
namespace Modules\CryptoCompare\Services\DB;
use App\Models\CryptoCoinList;
use Modules\CryptoCompare\Services\CryptoCompareService;

class DBCoinListService {
    private $model, $service;

    function __construct()
    {
        $this->model = CryptoCoinList::class;
        $this->service = new CryptoCompareService(env('CRYPTO_COMPARE_API_KEY'));
        
    }

    public function updateAllCoinsList(){
        $response = $this->service->getAllCoinsList([]);
        if(isset($response['Data'])){
            foreach($response['Data'] as $k => $v){
                $this->model::updateOrCreate(['Symbol' => $k],['Symbol'=>$k,'response_json' => json_encode($v,1)]);
                // $this->model::updateOrCreate(['Symbol' => $k], $v);
            }
        }

    }

    public function updateSelfDataAllCoinsList(){
        foreach($this->model::cursor() as $k){
            $this->model::updateOrCreate(['Symbol' => $k->Symbol], json_decode($k->response_json,1));

        }
    }


    // public function updateLatestNews(){
    //     $response = $this->cryptoCompareService->getLatestNews();
    //     if(isset($response['Data'])){
    //         foreach($response['Data'] as $k=>$v){

    //         }
    //     }
    // }

}