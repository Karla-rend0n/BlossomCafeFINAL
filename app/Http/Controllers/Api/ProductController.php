<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function index()
    {
       $products = Product::all();
       return $products;
    }

    
    public function store(Request $request)
    {
        $product= new Product();
        $product->name=$request->name;
        $product->price=$request->price;
        $product->stock=$request->stock;
        $product->description=$request->description;
        $product->photo=$request->photo;
        $product->status=$request->status;
        $product->subcategory_id=$request->subcategory_id;
        $product->save();

    }

    
    public function show($id)
    {
        $product=Product::find($id);
        return $product;
    }

   
    public function update(Request $request, $id)
    {
        $product = Product::findOrFail($request->id);
        $product->name=$request->name;
        $product->price=$request->price;
        $product->stock=$request->stock;
        $product->description=$request->description;
        $product->photo=$request->photo;
        $product->subcategory_id=$request->subcategory_id;
        $product->save();

        return $product;

    }

    
    public function destroy($id)
    {
        $product=Product::destroy($id);
        return $product;
    }
}
