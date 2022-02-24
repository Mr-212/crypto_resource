<?php 
namespace Modules\CryptoCompare\Services\DB;
use App\Models\CryptoNews;
use Modules\CryptoCompare\Services\CryptoCompareService;

class DBCryptoNewsService {
    private $model, $service;

    public function __construct()
    {
        $this->model = CryptoNews::class;
        $this->service = new CryptoCompareService(env('CRYPTO_COMPARE_API_KEY'));
        
    }


    public function updateLatestNews(){
        $response = $this->service->getLatestNews();
        // dd($response);
        if(isset($response['Data'])){
            foreach($response['Data'] as $v){
                $this->model::updateOrCreate(['news_id' => $v['id']],['data' =>$v]);
            }
        }
    }

}