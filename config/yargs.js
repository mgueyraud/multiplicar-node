const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opt)
    .command('crear', 'Crear un archivo', opt)
    .help()
    .argv;

module.exports = {
    argv
};
// const fs = require('express'); paquetes que no son de node
// const fs = require('../fs'); archivos que nosotros creamos