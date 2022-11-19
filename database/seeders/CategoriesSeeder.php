<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;

class CategoriesSeeder extends Seeder
{
    
    public function run()
    {
       $category1 = new Category; 
       $category1->nameCategory = 'Bebida';
       $category1->description = ' Bebida que se obtiene a partir de los granos tostados y 
                                   molidos de los frutos de la planta del café; es altamente estimulante 
                                   por su contenido de cafeína, una sustancia psicoactiva';
       $category1->save();

       $category2 = new Category; 
       $category2->nameCategory = 'Postre';
       $category2->description = 'Es el plato de sabor dulce o salado que se toma al final de la comida, o de merienda.';
       $category2->save();
    }
}
