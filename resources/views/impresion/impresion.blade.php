<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>SRE Impresión</title>
    <link rel="stylesheet" href="css/plantilla.css">
</head>
<body>
    <div class="container" id="app">  
        <impresion-component></impresion-component> 
    </div>

    <script src="js/plantilla.js"></script>    
    <script src="js/app.js"></script>
</body>
</body>
</html>