// Retrive Elements
//  buttons later

// Setup Ace
let codeEditor = ace.edit("editorCode");
let defaultCodeLine = '// Programame si te atreves <3';

let editorLib = {
    init() {
        // Configure Ace

        // Theme
        codeEditor.setTheme("ace/theme/dracula");

        // Set language
        codeEditor.session.setMode("ace/mode/javascript");

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