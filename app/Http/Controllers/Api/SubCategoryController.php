<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\SubCategory;

class SubCategoryController extends Controller
{
    
    public function index()
    {
        $subcategories=SubCategory::all();
        return $subcategories;
    }

    
    public function store(Request $request)
    {
        $subCategory = new SubCategory();
        $subCategory->nameSub=$request->nameSub;
        $subCategory->description=$request->description;
        $subCategory->photo=$request->photo;
        $subCategory->category_id=$request->category_id;
        $subCategory->save();
    }

    
    public function show($id)
    {
        $subCategory= SubCategory::find($id);
        return $subCategory;
    }

    
    public function update(Request $request, $id)
    {
        $subCategory = SubCategory::findOrFail($request->id);
        $subCategory->nameSub=$request->nameSub;
        $subCategory->description=$request->description;
        $subCategory->photo=$request->photo;
        $subCategory->category_id=$request->category_id;
        $subCategory->save();
        
        return $subCategory;
    }

    
    public function destroy($id)
    {
        $subCategory= SubCategory::destroy($id);
        return $subCategory;
    }
}
