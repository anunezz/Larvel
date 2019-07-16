<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class vueExController extends Controller
{
    public function index(){
        return view('cursoVue.vueex');
    }
}
