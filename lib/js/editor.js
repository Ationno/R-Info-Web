// Retrive Elements
const uploadFile = document.querySelector(".editorUpload");
const dowloadFile = document.querySelector(".editorDownload");
const shareFile = document.querySelector(".editorShare");
const editorStats = document.getElementById("editorStats");

// Setup Ace
let codeEditor = ace.edit("editorCode");
let defaultCodeLine = `Sintaxis para R-Info
  programa  procesos  proceso  variables  areas  robots  robot
  comenzar  fin
  ES  E  boolean  numero  AreaC  AreaPC  AreaP
  si  sino  mientras  repetir
  :=  +  -  *  /  =  <=  =>  <>  ~  |  &
  HayFlorEnLaEsquina  HayPapelEnLaEsquina  HayFlorEnLaBolsa  HayPapelEnLaBolsa  PosAv  PosCa
  Pos  mover  derecha  tomarFlor  tomarPapel  depositarFlor  depositarPapel  AsignarArea  Iniciar  Informar  Random
  EnviarMensaje  RecibirMensaje
  {  }`;

let editorLib = {
  init() {
  // Configure Ace

    // Theme
    codeEditor.setTheme("ace/theme/r_info");

    // Set language
    codeEditor.session.setMode("ace/mode/r_info");

    // Set tab size
    codeEditor.session.setTabSize(2);

    // Set Options
    codeEditor.setOptions({
      fontSize: '100%',
      enableBasicAutocompletation: true,
      enableLiveAutocompletation: true,
    });

    // Set Default Code Line
    codeEditor.setValue(defaultCodeLine);
  }
};

// Events
editorLib.init();

const updateEditorStats = () => {
  let pos = codeEditor.session.selection.getCursor();
  let row = pos["row"] + 1;
  let column = pos["column"] + 1;
  if (editorStats) {
    editorStats.innerText= `Ln ${row}, Cl ${column}`;
  };
};

codeEditor.selection.on("changeCursor", function(e) {
  updateEditorStats();
});
codeEditor.selection.on("changeSelection", function(e) {
  updateEditorStats();
});
