<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\SubCategory;
use Illuminate\Support\File;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;



class SubCategoryController extends Controller
{
    
    public function index()
    {
        $subcategories=SubCategory::all();
        return $subcategories;
    }

    
    public function store(Request $request)
    {
        
        try{
            $subCategory= new SubCategory();
            $subCategory ->nameSub = $request->input('nameSub');
            $subCategory ->description = $request->input('description');
            $subCategory ->image = $request->file('image')->store('subcategory');
            $subCategory ->category_id = $request->input('category_id');
            $subCategory->save();
           

            return response()->json([
                'message'=>'SubCategory created successfully!'
            ]);
        }catch(\Exception $e){
            \Log::error($e->getMessage());

            return response()->json([
                'message'=>'Something goes wrong while creating a subCategory!'
            ], 500);
        }
    }

    
    public function show($id)
    {
        $subCategory= SubCategory::find($id);
        return $subCategory;
    }

    
    public function update(Request $request, SubCategory $subCategory)
    {       
         $request->validate([
            'nameSub'=>'required',
            'description'=>'required',
            'category_id'=>'required',
            'image'=>'required'

         ]);

         try{
            $subCategory->fill($request->post())->update();

            if($request->hasFile('image')) {
                if($subCategory->image){
                    $exists = Storage::disk('public')->exists("public/subcategory/{$subCategory->image}");

                    if($exists){
                        Storage::disk('public')->delete("public/subcategory/{$subCategory->image}");
                    }

                }

                $imageName= Str::random() . '.' . $request->image->getClientOnExtension();
                Storage::disk('public')->putFileAs('subcategory', $request->image, $imageName);
                $subCategory->image = $imageName;
                $subCategory->save();

                return response()->json([
                    'message'=>'SubCategory update successfully!'
                ]);
            }

         } catch(\Exception $e){
            \Log::error($e->getMessage());

            return response()->json([
                'message'=>'Something goes wrong while updating a subCategory!'
            ], 500);
        }
    }

    
    public function destroy($id)
    {
        $subCategory= SubCategory::destroy($id);
        return $subCategory;
    }
}
