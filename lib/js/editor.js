// Default Messages
const defaultEditorCodeText = `Sintaxis para R-Info
programa  procesos  proceso  variables  areas  robots  robot
comenzar  fin
ES  E  boolean  numero  AreaC  AreaPC  AreaP
si  sino  mientras  repetir
:=  +  -  *  /  =  <=  =>  <>  ~  |  &
HayFlorEnLaEsquina  HayPapelEnLaEsquina  HayFlorEnLaBolsa  HayPapelEnLaBolsa  PosAv  PosCa
Pos  mover  derecha  tomarFlor  tomarPapel  depositarFlor  depositarPapel  AsignarArea  Iniciar  Informar  Random
EnviarMensaje  RecibirMensaje  BloquearEsquina  LiberarEsquina
{  }`;
let initialCode = "";

// Retrive Elements
const uploadFile = document.getElementById("editorUpload");
const dowloadFile = document.getElementById("editorDownload");
const shareFile = document.getElementById("editorShare");
const editorStats = document.getElementById("editorStats");

// Functions
const createLocalBackup = () => {
  initialCode = defaultEditorCodeText;
  localStorage.setItem("stored-code-text",'')
};
const updateLocalBackup = () => {
  localStorage.setItem("stored-code-text", codeEditor.getValue())
};

const updateEditorStats = () => {
  let pos = codeEditor.session.selection.getCursor();
  let row = pos["row"] + 1;
  let column = pos["column"] + 1;
  if (editorStats) {
    editorStats.innerText= `Ln ${row}, Cl ${column}`;
  };
};


const storedCodeText = localStorage.getItem("stored-code-text")
if ( !storedCodeText ) createLocalBackup();
else if ( !storedCodeText.match('\n') ) initialCode = defaultEditorCodeText;
else initialCode = storedCodeText;


// Setup Ace
let codeEditor = ace.edit("editorCode");

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
      // Never change the font-family
      fontFamily: 'monospace',
      fontSize: '100%',
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
    });

    // Set Default Code Line
    codeEditor.setValue(initialCode);
  }
};

// Events

editorLib.init();

codeEditor.selection.on("changeCursor", () => {
  updateEditorStats();
  updateLocalBackup();
});
codeEditor.selection.on("changeSelection", () => {
  updateEditorStats();
});
