<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all();
        return response()->json([
            'products' => $products,

            'message'  => 'List(index) is Successfully'

        ]);

    }
}
