<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    protected $table = 'videos'; //interactuar con esa tabla en la base de datos
    //Relacion de tablas de un video a todos los comentarios de ese video
    public function comments(){
        return $this->hasMany('App\Comment');
    } 
    
    // relacion de uno a uno es hasOne

    //Relacionde muchos a uno
    public function user(){
        return $this->belongsTo('App\User','user_id');
    }
}
