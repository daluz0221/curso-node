import { inquirerMenu, leerInput, pausa } from "./helpers/inquirer.js";
import Busquedas from "./models/busquedas.js";




const main = async() => {
  
    const busquedas = new Busquedas();

    let opt;


    do {
        
        opt = await inquirerMenu();

        switch (opt) {
            case 1:
                //Mostrar mensaje
                const lugar = await leerInput('Ciudad: ')
                console.log(lugar);
                //Buscar el lugar/es

                //Seleccionar el lugar

                //Clima

                //Mostrar resultados

                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad:', );
                console.log('Lat:', );
                console.log('Lng: ',);
                console.log('Temperatura:', );
                console.log('Mínima', );
                console.log('Máxima', );
                break;
            case 2:
                console.log('Seleccionaste la opción 2');
                break;
        
            default:
                break;
        }

        
        await pausa();



    } while (opt !== 0 );

};

main();
