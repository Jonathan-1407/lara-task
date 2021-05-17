<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Lara task</title>

        <link rel="stylesheet" href="{{ mix('css/app.css') }}">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">

        <script src="{{ mix('js/app.js') }}" defer></script>
    </head>
    <body>
        <div class="h-screen text-gray-800">
            <div id="app">
                <board></board>
            </div>
        </div>
    </body>
</html>
