<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\SubCategory;

class SubCategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $subCategory1= new SubCategory;
        $subCategory1->nameSub = 'Bingsu';
        $subCategory1->description='It is slush ice with a kind of red bean jam, rice paste and dried fruit powder.';
        $subCategory1->image='subcategory/LmUvWe02hwkSPy0ORw4qXFuThQ19i2DRtKu8Bkis.jpg';
        $subCategory1->category_id =2;

        $subCategory1->save();

        $subCategory2= new SubCategory;
        $subCategory2->nameSub = 'Coffee';
        $subCategory2->description='Coffee is the beverage obtained from the roasted and ground beans of the fruits of the coffee plant; it is highly stimulating due to its caffeine content, a psychoactive substance.';
        $subCategory1->image='subcategory/mX4egiJTFlIHfZqHUMYAh2mvB4xpoFrCzS7cZSpO.jpg';
        $subCategory2->category_id =1;

        $subCategory2->save();

        $subCategory3= new SubCategory;
        $subCategory3->nameSub = 'Boba Tea';
        $subCategory3->description='Also known by its anglicism bubble tea or also as boba, it is a sweet flavored tea drink invented in Taiwan.';
        $subCategory3->image='subcategory/QWVOojLYtW5PRrUPPH1KdHeZs1PFSA9Ai2gMHdM8.jpg';
        $subCategory3->category_id =1;

        $subCategory3->save();

        $subCategory4= new SubCategory;
        $subCategory4->nameSub = 'Cake';
        $subCategory4->description=' a breadlike food made from a dough or batter that is usually fried or baked in small flat shapes and is often unleavened.';
        $subCategory1->image='subcategory/gBxs2XM4Nm6jpwZTL46fNAib8MHXfr70Q916P71B.jpg';
        $subCategory4->category_id =2;

        $subCategory4->save();

    }
}
