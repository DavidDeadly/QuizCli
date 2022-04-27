# SokfaU / CHALLENGE - CONCURSO DE PREGUNTAS Y RESPUESTAS

Esta app esta orientada a CLI, fue desarrollada completamente en javascript, usando como entorno de ejecución a [deno](https://deno.land).  
**Así que es pertinente tener [DENO](https://deno.land) instalado en el sistema, no funcionará en node ya que el script usa web api's.**  
No tiene ninguna dependencia más haya de las desarrollo. Aún así haz de tener instalado [npm](https://www.npmjs.com)(no obligatorio) para poder correr los scripts.

## USO

Para ejecutar el software una vez ya clonado y dentro del repositorio pudes correr cualquiera de los siguiente comandos, `npm start` o `deno run --allow-write --allow-read cli.js`, las flags en [deno](https://deno.land) son simplemente para poder escribir el fichero en el que se guardan los datos de los jugadores.

**¡IMPORTANTE!:** añadí un *god mode* para hacer más fácil la revisión del proyecto, simplemente haz de parsarle como flag `--god`  
***de la siguiente manera: `npm start -- --god` o `deno run --allow-write --allow-read cli.js --god`***  
***¡Esto lo que hará es mostrar las respuestas correctas a las preguntas!***

## Estructura de carpetas 

1. **./** - En el root nada importa más allá de `cli.js`
1. **./utils** - En utils es donde estan los archivos en cuestión, en esta esta `game.js` a partir de este todo se desprende.
    * **/clases** - En clases todas las ...
    * **/db** - Base de datos en el sistema, aquí esta el archivo que contiene las preguntas y es donde se escribirá el json con el registro de los jugadores.
    * **/functions** -- funciones modularizadas, necesarías para el correcto funcionamiento de programa.

