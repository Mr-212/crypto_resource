<?php

namespace Modules\CoinMarketCapAPI\Http\Controllers;

use Exception;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\CoinMarketCapAPI\Services\CoinMarketCryptoService;

class CryptoController extends Controller
{
    private $coinmarketCryptoService;

    public function __construct()
    {
        $this->coinmarketCryptoService = new CoinMarketCryptoService('efb9356c-ba97-48b4-9b97-6e4171b8ff73');
        
    }
    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index()
    {
        return view('coinmarketcapapi::index');
    }


    public function getLatestListing(Request $request){
        $page = $request->get('page');
        $perPage = $request->get('per_page');
        $currency = $request->get('currency');
        try{
            $parameters = [
                'start' => $page,
                'limit' => $perPage,
                'convert' => $currency
                // 'convert' => 'USD'
                ];
            $response = $this->coinmarketCryptoService->getCurrencyListingLatest($parameters);
            // dd($response);
            if(isset($response['status']['error_code']) &&  !$response['status']['error_code']){
                return response()->json($response['data']);
            }
            //return response()->json($response);
        }catch(Exception $e){
            var_dump($e->getMessage());
        }

    }
    public function getTrendingLists(Request $request){
        $page = $request->get('page');
        $perPage = $request->get('per_page');
        $currency = $request->get('currency');
        try{
            $parameters = [
                'start' => $page,
                'limit' => $perPage,
                'convert' => $currency
            ];
            $response = $this->coinmarketCryptoService->getTrendingGainersAndLosers($parameters);
            dd($response);
            if(isset($response['status']['error_code']) &&  !$response['status']['error_code']){
                return response()->json($response['data']);
            }
            //return response()->json($response);
        }catch(Exception $e){
            var_dump($e->getMessage());
        }

    }

    /**
     * Show the form for creating a new resource.
     * @return Renderable
     */
    public function create()
    {
        return view('coinmarketcapapi::create');
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
        return view('coinmarketcapapi::show');
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function edit($id)
    {
        return view('coinmarketcapapi::edit');
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
