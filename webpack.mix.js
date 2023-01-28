let mix = require('laravel-mix');

mix.sass('src/style.scss', 'dist/')
    .options({ processCssUrls: false });

/* mix.js('src/app.js', 'dist/')
    .sass('src/app.scss', 'dist/')
    .options({ processCssUrls: false }); */