"use strict";

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
const editorToolUpload = document.getElementById("editorUpload");
const editorToolDownload = document.getElementById("editorDownload");
const editorToolCopy = document.getElementById("editorCopy");
const editorToolClear = document.getElementById("editorClear");
const editorStats = document.getElementById("editorStats");

// Functions
const createLocalBackup = () => {
  initialCode = defaultEditorCodeText;
  localStorage.setItem("stored-code-text",'')
};
const updateLocalBackup = () => {
  localStorage.setItem("stored-code-text", codeEditor.getValue())
};

const readFileFromUser = fl => {
  const reader = new FileReader();
  reader.readAsText(fl);
  reader.addEventListener("load", (e) => {
    codeEditor.setValue(e.currentTarget.result);
  })
};

const downloadFileToUser = (filename, content) => {
  let element = document.createElement('a');
  element.style.display = 'none';

  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));

  element.setAttribute('download',filename);
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
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
else if ( storedCodeText.length < 16 ) initialCode = defaultEditorCodeText;
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
      fontSize: '125%',
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
    });

    // Set Default Code Line
    codeEditor.setValue(initialCode);
  }
};

// Events

editorLib.init();

codeEditor.on("change", () => {
  updateLocalBackup();
});
codeEditor.selection.on("changeCursor", () => {
  updateEditorStats();
});
codeEditor.selection.on("changeSelection", () => {
  updateEditorStats();
});

// Editor Tools Buttons
// editorToolUpload.addEventListener("change", (e) => {
//   readFileFromUser(editorToolUpload.files[0]);
// });

editorToolDownload.onclick = () => {
  if ( !codeEditor ) return;
  const textToDownload = codeEditor.getValue();
  if ( !textToDownload ) return;
  if ( !textToDownload.match("programa") ) return;
  const fileName = textToDownload.split('\n')[0].replace('programa', '').trimStart();
  downloadFileToUser( `${fileName}.txt`, textToDownload );
};

editorToolCopy.onclick = () => {
  if ( codeEditor ) {
    const textToCopy = codeEditor.getValue(); 
    navigator.clipboard.writeText( textToCopy );
  };
};

editorToolClear.onclick = () => {
  if ( codeEditor ) {
    codeEditor.setValue("");
  };
};
