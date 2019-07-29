<?php
Route::get('/', function () {
    return view('principal');
});

Route::get('/ejemplo', function () {
    return view('proyectos/ejemplo');
});

///EJEMPLOS
Route::post('/hola-mundo', function () {
    return "Hola soy adrian nuñez alanis";
});

Route::match(['get','post'],'contacto', function(){
    return view("contacto"); // crear archivo blade....
   });   

Route::get('contacto/{nombre?}/{edad?}',function($nombre ='adrian',$edad = 25){

    return view('/cursolaravel/contacto')
    ->with('nombre' , $nombre)
    ->with('edad' , $edad)
    ->with('fruta', array(
        'pera','manzana','kwi'
    ));
    
})->where([
    'nombre' => '[A-Za-z]+',
    'edad' => '[0-9]+'
    ]);



    use App\Video;
    //APLICACION YOUTUBE
    //Route::get('/youtube','youtubeController@index');
    Route::get('/youtube',function(){
     $videos = Video::all();
     foreach($videos as $video){
      echo "Este es el video: ".$video->title."<br>";
     }
     die();
     return $videos;
    });


Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/VueEx',"vueExController@index");
