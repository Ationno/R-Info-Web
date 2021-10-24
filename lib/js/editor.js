// Retrive Elements
//   Buttons for later

// Setup Ace
let codeEditor = ace.edit("editorCode");
let defaultCodeLine = `Sintaxis para R-Info
  Seccion:
    programa  procesos  proceso  variables  areas  robots  robot
  Crear bloque de codigo:
    comenzar  fin
  Tipo de dato:
    ES  E  boolean  numero  AreaC  AreaPC  AreaP
  Control:
    si  sino  mientras  repetir
  Operador:
    :=  +  -  *  /  =  <=  =>  <>  ~  |  &
  Funcion:
    HayFlorEnLaEsquina  HayPapelEnLaEsquina  HayFlorEnLaBolsa  HayPapelEnLaBolsa  PosAv  PosCa
  Procedimiento:
    Pos  mover  derecha  tomarFlor  tomarPapel  depositarFlor  depositarPapel  AsignarArea  Iniciar  Informar  Random
  Comunicacion:
    EnviarMensaje  RecibirMensaje
  Comentario:
    {  }`;

let editorLib = {
    init() {
        //  Configure Ace

        // Theme
        codeEditor.setTheme("ace/theme/r_info");

        // Set language
        codeEditor.session.setMode("ace/mode/r_info");

        // Set tab size
        codeEditor.session.setTabSize(2);

        // Set Options
        codeEditor.setOptions({
            fontFamily: 'Consolas',
            fontSize: '100%',
            enableBasicAutocompletation: true,
            enableLiveAutocompletation: true,
        });

        // Set Default Code Line
        codeEditor.setValue(defaultCodeLine);
    }
};

editorLib.init();