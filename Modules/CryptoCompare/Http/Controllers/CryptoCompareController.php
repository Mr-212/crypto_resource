<?php

namespace Modules\CryptoCompare\Http\Controllers;

use App\Models\CryptoNews;
use Exception;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\CryptoCompare\Services\CryptoCompareService;
use Modules\CryptoCompare\Services\DB\DBCoinListService;
use Modules\CryptoCompare\Services\DB\DBCryptoNewsService;
use Throwable;

class CryptoCompareController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    private $cryptoCompareService ;

     public function __construct()
     {
         $this->cryptoCompareService = new CryptoCompareService(env('CRYPTO_COMPARE_API_KEY'));
         
     }
    public function index()
    {
        // dd('here');
        // $service = new DBCoinListService();
        $service = new DBCryptoNewsService();

        // $service->updateAllCoinsList();
        $service->updateLatestNews();

        
    }


    public function getLatestNews(Request $request){
        
        // try{
        //     $response = $this->cryptoCompareService->getLatestNews();
        //     return response()->json(@$response['Data']);

        // }catch(Throwable $e){
        //     var_dump($e->getMessage());
             
        // }

        try{
            $page = $request->get('page');
            $limit = $request->get('limit');
            $response = CryptoNews::latest()->offset(($page)*$limit)->limit($limit)->get(['data'])
            ->map(function($item){
                return $item->data;
            });

            return response()->json($response);

        }catch(Throwable $e){
            var_dump($e->getMessage());
            
        }

    }


    public function getTopVolumnList(Request $request){
        
        try{
            $page = $request->get('page');
            $limit = $request->get('limit');
            $currency = $request->get('currency');
            $parameters = [ 'page' => 1, 'limit' => 10,'tsym'=>$currency??'USD'];

            $response = $this->cryptoCompareService->getTopListVolumn($parameters);
            // var_dump($response);
            return response()->json(@$response['Data']);

        }catch(Throwable $e){
            var_dump($e->getMessage());
             
        }

      
    }




    /**
     * Show the form for creating a new resource.
     * @return Renderable
     */
    public function create()
    {
        return view('cryptocompare::create');
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Renderable
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Show the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function show($id)
    {
        return view('cryptocompare::show');
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function edit($id)
    {
        return view('cryptocompare::edit');
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return Renderable
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return Renderable
     */
    public function destroy($id)
    {
        //
    }
}
