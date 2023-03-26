
const argv = require ("yargs") 
        .options("b",{
            alias:"base",
            type:"number",
            demandOption: true,
            describe:"crea la tabla de multiplicar"
        })
        .options("l",{
            alias:"listar",
            type:"boolean",
            default:"false",
            describe:"muestra la tabla en la consola"
        })
        .options("h",{
            alias:"hasta",
            type:"number",
            default:"10",
            describe:"numero limite"
        })
        .check((argv, options) =>{
            if(isNaN(argv.base) ) {
            throw "la base tiene que ser un numero"
            }
             return true
        })
        .argv

  module.exports = argv;      
