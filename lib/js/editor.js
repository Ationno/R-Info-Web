// Retrive Elements
//  buttons later

// Setup Ace
let codeEditor = ace.edit("editorCode");
let defaultCodeLine = `// Programame si te atreves <3
function foo(items, nada) {
    for (var i=0; i<items.length; i++) {
        alert(items[i] + "juhu");
    }	// Real Tab.
}`;

let editorLib = {
    init() {
        // Configure Ace

        // Theme
        codeEditor.setTheme("ace/theme/tomorrow_night_eighties");

        // Set language
        codeEditor.session.setMode("ace/mode/pascal");

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