// Inicializar módulos
// A importação de funções específicas da API gulp nos permite escrevê-las abaixo como series () em vez de gulp.series ()
const { src, dest, watch, series, parallel } = require('gulp');
// Importando todos os pacotes relacionados ao Gulp que queremos usar
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
var replace = require('gulp-replace');

// Caminhos de arquivo
const files = { 
    scssPath: 'src/scss/**/*.scss',
    jsPath: 'src/js/**/*.js'
}

// Tarefa Sass: compila o arquivo style.scss em style.css
function scssTask(){    
    return src(files.scssPath)
        // .pipe(sourcemaps.init()) // inicializar mapas de origem primeiro
        .pipe(sass()) // compile SCSS to CSS
        .pipe(postcss([ autoprefixer(), cssnano() ])) // PostCSS plugins
        // .pipe(sourcemaps.write('/map/.')) // escrever o arquivo de mapas de origem no diretório atual
        .pipe(dest('dist/css')
    ); // coloca o CSS final na pasta dist
}

// Tarefa JS: concatena e modifica arquivos JS para script.js
// function jsTask(){
//     return src([
//         files.jsPath
//         //,'!' + 'includes/js/jquery.min.js', // para excluir quaisquer arquivos específicos
//         ])
//         .pipe(uglify())
//         .pipe(concat('all.js'))
//         .pipe(dest('dist/js')
//     );
// }

function jsTask(){    
    return src([
        files.jsPath
        // ,'!' + 'includes/js/jquery.min.js', // para excluir quaisquer arquivos específicos
        ])
        // .pipe(sourcemaps.init()) // inicializar mapas de origem primeiro
        // .pipe(sourcemaps.write('.')) // escrever o arquivo de mapas de origem no diretório atual
        .pipe(dest('dist/js')
    ); // coloca o CSS final na pasta dist
}


// cacheBust
// Quebra de cache
function cacheBustTask(){
    var cbString = new Date().getTime();
    return src(['*.html'])
        .pipe(replace(/cb=\d+/g, 'cb=' + cbString))
        .pipe(dest('.'));
}

// Observe a tarefa: observe os arquivos SCSS e JS em busca de alterações
// Se houver alguma alteração, execute as tarefas scss e js simultaneamente
function watchTask(){
    watch([files.scssPath, files.jsPath],
        {interval: 1000, usePolling: true}, // Faz o docker funcionar
        series(
            parallel(scssTask, jsTask),
            cacheBustTask
        )
    );    
}

function addComputerNameAndDate(file){
    var comment = "/* " + os.hostname() + " - " + dateFormat(new Date(), "dd/mm/yyyy HH:MM:ss Z") + " */\n";
    var fileContent = file.contents.toString('utf-8');
    return comment + fileContent;
}

// Exporte a tarefa Gulp padrão para que possa ser executada
// Executa as tarefas scss e js simultaneamente
// em seguida, executa cacheBust e observa a tarefa
exports.default = series(
    parallel(scssTask, jsTask), 
    cacheBustTask,
    watchTask
);