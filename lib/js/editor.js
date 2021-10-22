// Retrive Elements
//  buttons later

// Setup Ace
let codeEditor = ace.edit("editorCode");
let defaultCodeLine = `programa Ej-4
procesos
  proceso juntarFloresPapeles(ES cant: numero)
  comenzar
    mientras HayFlorEnLaEsquina
      tomarFlor
      cant:= cant + 1
    mientras HayPapelEnLaEsquina
      tomarPapel
      cant:= cant + 1
  fin
  proceso limpiarFloresPapeles(E AvO: numero; ES cant: numero)
  variables
    Av: numero
    Ca: numero
  comenzar
    Random(Av, 25, 75)
    Random(Ca, 25, 75)
    Pos(Av, Ca)
    juntarFloresPapeles(cant)
    Pos(AvO, 1)
  fin
  proceso mandarCodigo(E cod: numero; E id: numero)
  comenzar
    si (id = 1)
      EnviarMensaje(cod, robot1)
    sino
      si (id = 2)
        EnviarMensaje(cod, robot2)
      sino
        si (id = 3)
          EnviarMensaje(cod, robot3)
        sino
          EnviarMensaje(cod, robot4)
  fin`;

let editorLib = {
    init() {
        //  Configure Ace

        // Theme
        codeEditor.setTheme("ace/theme/r_info");

        // Set language
        codeEditor.session.setMode("ace/mode/r_info");

        // Set Options
        codeEditor.setOptions({
            fontFamily: 'Consolas',
            fontSize: '16pt',
            enableBasicAutocompletation: true,
            enableLiveAutocompletation: true,
        });

        // Set Default Code Line
        codeEditor.setValue(defaultCodeLine);
    }
};

editorLib.init();