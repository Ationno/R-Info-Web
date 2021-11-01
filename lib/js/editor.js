"use strict";

// Default Messages
const defaultEditorCodeText = `programa
procesos

areas

robots

variables

comenzar

fin`;
let initialCode = "";

// Retrive Elements
const editorToolUpload = document.getElementById("editorUpload");
const editorToolDownload = document.getElementById("editorDownload");
const editorToolNew = document.getElementById("editorNew");
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


// editorToolUpload.addEventListener("change", (e) => {
//   readFileFromUser(editorToolUpload.files[0]);
// });
//const readFileFromUser = fl => {
//  const reader = new FileReader();
//  reader.readAsText(fl);
//  reader.addEventListener("load", (e) => {
//    codeEditor.setValue(e.currentTarget.result);
//  })
//};

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
    editorStats.innerText= `Ln ${row}, Col ${column}`;
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
      copyWithEmptySelection: true,
    });

    // Set Default Code Line
    codeEditor.setValue(initialCode);
  }
};

// Editor Events

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
editorToolUpload.onclick = () => {
  const readFile = function(e) {
    var file = e.target.files[0];
    if ( !file ) return;
    var reader = new FileReader();
    reader.onload = function(e) {
      var contents = e.target.result;
      codeEditor.setValue(contents);
      document.body.removeChild(fileInput);
    };
    reader.readAsText(file);
  }
  const fileInput = document.createElement("input");
  fileInput.type = 'file';
  fileInput.style.display = 'none';
  fileInput.onchange = readFile;
  document.body.appendChild(fileInput);
  fileInput.click();
}

editorToolDownload.onclick = () => {
  const textToDownload = codeEditor?.getValue()
  const i = textToDownload?.indexOf('programa');

  if (!textToDownload || i === -1) return

  let j = textToDownload.indexOf('\n',i);
  if ( j == -1 ) j = textToDownload.length;
  const fileName = textToDownload.substring(i,j).replace('programa','').trimStart();
  downloadFileToUser( `${fileName}.txt`, textToDownload );
};

editorToolNew.onclick = () => {
  if ( codeEditor ) {
    codeEditor.setValue( defaultEditorCodeText );
  };
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
