<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Sales_details;

class Sale_DetailsController extends Controller
{
    
    public function index()
    {
        $sales_d = Sales_details::all();
        return $sales_d;        
    }

    
    public function store(Request $request)
    {
        $sale_d = new Sales_details();
        $sale_d->quantity=$request->quantity;
        $sale_d->price=$request->price;
        $sale_d->sale_id=$request->sale_id;
        $sale_d->product_id=$request->product_id;
        $sale_d->save();
        
    }

   
    public function show($id)
    {
        $sale_d= Sales_details::find($id);
        return $sale_d;
    }

    public function update(Request $request)
    {
        $sale_d =Sales_details::findOrFail($request->id);
        $sale_d->quantity=$request->quantity;
        $sale_d->price=$request->price;
        $sale_d->sale_id=$request->sale_id;
        $sale_d->product_id=$request->product_id;
        $sale_d->save();

        return $sale_d;

    }

    public function destroy($id)
    {
        $sale_d=Sales_details::destroy($id);
        return $sale_d;
    }
}
