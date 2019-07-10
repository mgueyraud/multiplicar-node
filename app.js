 const { crearArchivo, listar } = require('./multiplicar/multiplicar');
 const colors = require('colors');
 const { argv } = require('./config/yargs');

 let comando = argv._[0];

 switch (comando) {
     case 'listar':
         //  console.log('listar');
         listar(argv.base, argv.limite);
         break;

     case 'crear':
         //  console.log('crear');
         crearArchivo(argv.base, argv.limite)
             .then(archivo => console.log('Archivo creado:' + colors.green(archivo)))
             .catch(err => console.log(err));
         break;

     default:
         console.log('comando no reconocido');
 }

 //let base = 'abc';
 //  let argv2 = process.argv;
 //  let parametro = argv[2];
 //  let base = parametro.split('=')[1];