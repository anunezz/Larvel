<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Form</title>
    <link rel="stylesheet" href="css/plantilla.css">
</head>
<body>
    <div class="container" id="app">
        <form-component></form-component>
    </div>
    
    <script src="js/app.js"></script>
    <script src="js/plantilla.js"></script> 
</body>
</html>