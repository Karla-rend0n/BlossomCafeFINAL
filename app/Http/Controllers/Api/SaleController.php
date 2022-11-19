<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Sales;

class SaleController extends Controller
{
    
    public function index()
    {
        $sales = Sales::all();
        return $sales;
    }


    public function store(Request $request)
    {
        $sale = new Sales();
        $sale->date_time= $request->date_time;
        $sale->taxes= $request->taxes;
        $sale->total= $request->total;
        $sale->status= $request->status;
        $sale->client_id = $request->client_id ;
        $sale->user_id= $request->user_id;
        $sale->voucher_id= $request->voucher_id;
        $sale->save();


    }

    
    public function show($id)
    {
        $sale= Sales::find($id);
        return $sale;
    }

    public function update(Request $request)
    {
        $sale = Sales::findOrFail($request->id);
        $sale->date_time= $request->date_time;
        $sale->taxes= $request->taxes;
        $sale->total= $request->total;
        $sale->status= $request->status;
        $sale->client_id = $request->client_id ;
        $sale->user_id= $request->user_id;
        $sale->voucher_id= $request->voucher_id;
        $sale->save();

        return $sale;

    }

    
    public function destroy($id)
    {
        $sale=Sales::destroy($id);
        return $sale;
        
    }
}
