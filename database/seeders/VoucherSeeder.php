<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Voucher;

class VoucherSeeder extends Seeder
{
    
    public function run()
    {
        $voucher1= new Voucher;
        $voucher1->name='Dinero en efectivo';
        $voucher1->save();

        $voucher2= new Voucher;
        $voucher2->name='Tarjetas de débito';
        $voucher2->save();

        $voucher3= new Voucher;
        $voucher3->name='Tarjetas prepago';
        $voucher3->save();

        $voucher4= new Voucher;
        $voucher4->name='Targetas de crédito';
        $voucher4->save();

        $voucher5= new Voucher;
        $voucher5->name='Transferencias bancarias';
        $voucher5->save();
    }
}
