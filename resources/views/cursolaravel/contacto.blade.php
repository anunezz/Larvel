@include('cursolaravel.cabecera.cabecera', array("nombre" => $nombre))


<h1>Esta es una pagina de ejemplo de laravel.</h1>
<hr>

<p>
<h2>If:</h2>
<hr>
El nombre es: <br>
{{ is_null($nombre) && !isset($nombre)?'Nombre no existe':$nombre  }}
La edad es: <br>
{{ is_null($edad) && !isset($edad)?'Edad no existe':$edad  }}

</p>