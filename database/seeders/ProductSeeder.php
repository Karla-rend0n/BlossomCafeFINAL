<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    
    public function run()
    {
        $product1= new Product();
        $product1->name='Producto1';
        $product1->price=259;
        $product1->stock=50;
        $product1->description='Descripcion larga';
        $product1->photo='Inserte foto';
        $product1->status=true;
        $product1->subcategory_id=1;
        $product1->save();
    }
}
