"use strict";

import StorageAdministrator from "./StorageAdministrator.class.js";

// Default Messages
const DEFAULT_EDITOR_CODE_TEXT = `\
programa
procesos

areas

robots

variables

comenzar

fin
`;

// Retrive Elements
const editorToolUpload   = document.getElementById("editorUpload");
const editorToolDownload = document.getElementById("editorDownload");
const editorToolNew      = document.getElementById("editorNew");
const editorToolCopy     = document.getElementById("editorCopy");
const editorToolClear    = document.getElementById("editorClear");
const editorFontSize     = document.getElementById("editorFontSize");
const editorStats        = document.getElementById("editorStats");

const editorStorage = new StorageAdministrator(
  "sotred-code-text",
  DEFAULT_EDITOR_CODE_TEXT
);
const fontSizeStorage = new StorageAdministrator(
  "editor-font-size",
  "100"
);

//
//
// Functions
//

const downloadFileToUser = (filename, content) => {
  let element = document.createElement('a');
  element.style.display = 'none';

  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));

  element.setAttribute('download',filename);
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
};

const handleEditorStats = () => {
  let pos = codeEditor.session.selection.getCursor();
  let row = pos["row"] + 1;
  let column = pos["column"] + 1;
  if (editorStats) {
    editorStats.innerText= `Ln ${row}, Col ${column}`;
  };
};


// Setup Ace
const codeEditor = ace.edit("editorCode");

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
      fontSize: `${fontSizeStorage.getValue()}%`,
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      copyWithEmptySelection: true,
    });

    // Set Default Code Line
    codeEditor.setValue(editorStorage.getValue());
  }
};

//
//
// Editor Events
//

editorLib.init();
editorFontSize.value = fontSizeStorage.getValue();

codeEditor.on("change", () => editorStorage.setValue(codeEditor.getValue()));
codeEditor.selection.on("changeCursor", handleEditorStats);
codeEditor.selection.on("changeSelection", handleEditorStats);

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
    codeEditor.setValue( DEFAULT_EDITOR_CODE_TEXT );
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

editorFontSize.addEventListener("change", (e) => {
  if (e.target.value < 75) {
    e.target.value = 75
  } else if (e.target.value > 250) {
    e.target.value = 250
  }
  codeEditor.setOption('fontSize', `${e.target.value}%`)
  fontSizeStorage.setValue(`${e.target.value}`);
});
