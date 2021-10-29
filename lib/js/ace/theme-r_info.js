define(
    "ace/theme/r_info",
    ["require","exports","module","ace/lib/dom"],
    function(e,t,n){
        t.isDark=!0,
        t.cssClass="ace-r_info",
        t.cssText= `
          ::-webkit-scrollbar {
            background: none;
            width: 16px;
            height: 16px;
          }
          ::-webkit-scrollbar-thumb {
            border: solid 0 transparent;
            border-right-width: 4px;
            border-left-width: 4px;
            -webkit-border-radius: 9px 4px;
            -webkit-box-shadow: inset 0 0 0 1px rgba(128, 128, 128, 0.2),
              inset 0 0 0 4px rgba(128, 128, 128, 0.2);
          }
          ::-webkit-scrollbar-track-piece {
            margin: 4px 0;
          }
          ::-webkit-scrollbar-thumb:horizontal {
            border-right-width: 0;
            border-left-width: 0;
            border-top-width: 4px;
            border-bottom-width: 4px;
            -webkit-border-radius: 4px 9px;
          }
          ::-webkit-scrollbar-thumb:hover {
            -webkit-box-shadow: inset 0 0 0 1px rgba(128, 128, 128, 0.9),
              inset 0 0 0 4px rgba(128, 128, 128, 0.9);
          }
          ::-webkit-scrollbar-corner {
            background: transparent;
          }
          
          .ace-r_info .ace_gutter {
            background: #181818;
            color: #aaaaaa;
          }
          
          .ace-r_info {
            background-color: #1c1c1c;
            color: #dddddd;
          }
          
          .ace-r_info .ace_cursor {
            color: #f8f8f0;
          }
          
          .ace-r_info .ace_marker-layer .ace_selection {
            background: #44475a5f;
          }
          
          .ace-r_info.ace_multiselect .ace_selection.ace_start {
            box-shadow: 0 0 3px 0px #282a36;
            border-radius: 2px;
          }
          
          .ace-r_info .ace_marker-layer .ace_step {
            background: rgb(198, 219, 174);
          }
          
          .ace-r_info .ace_marker-layer .ace_bracket {
            margin: -1px 0 0 -1px;
            border: 1px solid #a29709;
          }
          
          .ace-r_info .ace_marker-layer .ace_active-line {
            background: #44475a3f;
          }
          
          .ace-r_info .ace_gutter-active-line {
            background-color: #44475a3f;
          }
          
          .ace-r_info .ace_marker-layer .ace_selected-word {
            box-shadow: 0px 0px 0px 1px #a29709;
            border-radius: 3px;
          }
          
          .ace-r_info .ace_fold {
            background-color: #608b4e;
            border-color: #f8f8f2;
          }
          
          .ace-r_info .ace_keyword {
            color: #ff79c6;
          }
          
          .ace-r_info .ace_keyword.ace_section {
            color: #d25252;
          }
          
          .ace-r_info .ace_keyword.ace_codeblock {
            color: #ce9178;
          }
          
          .ace-r_info .ace_keyword.ace_control {
            color: #d197d9;
          }
          
          .ace-r_info .ace_keyword.ace_data.ace_type {
            color: #79abff;
          }
          
          .ace-r_info .ace_keyword.ace_function {
            color: #dcdcaa;
          }
          
          .ace-r_info .ace_keyword.ace_procedure {
            color: #dcdcaa;
          }
          
          .ace-r_info .ace_keyword.ace_comunication {
            color: #d9e577;
          }
          
          .ace-r_info .ace_keyword.ace_operator {
            color: #d8d8d8;
          }
          
          .ace-r_info .ace_constant.ace_language {
            color: #7fb347;
          }
          
          .ace-r_info .ace_constant.ace_numeric {
            color: #7fb347;
          }
          
          .ace-r_info .ace_constant.ace_character {
            color: #7fb347;
          }
          
          .ace-r_info .ace_constant.ace_character.ace_escape {
            color: #7fb347;
          }
          
          .ace-r_info .ace_constant.ace_other {
            color: #7fb347;
          }
          
          .ace-r_info .ace_support.ace_function {
            color: #8be9fd;
          }
          
          .ace-r_info .ace_support.ace_constant {
            color: #6be5fd;
          }
          
          .ace-r_info .ace_support.ace_class {
            font-style: italic;
            color: #66d9ef;
          }
          
          .ace-r_info .ace_support.ace_type {
            font-style: italic;
            color: #66d9ef;
          }
          
          .ace-r_info .ace_storage {
            color: #ff79c6;
          }
          
          .ace-r_info .ace_storage.ace_type {
            font-style: italic;
            color: #8be9fd;
          }
          
          .ace-r_info .ace_invalid {
            color: #f8f8f0;
            background-color: #ff79c6;
          }
          
          .ace-r_info .ace_invalid.ace_deprecated {
            color: #f8f8f0;
            background-color: #bd93f9;
          }
          
          .ace-r_info .ace_string {
            color: #f1fa8c;
          }
          
          .ace-r_info .ace_comment {
            color: #608b4e;
          }
          
          .ace-r_info .ace_variable {
            color: #50fa7b;
          }
          
          .ace-r_info .ace_variable.ace_parameter {
            font-style: italic;
            color: #ffb86c;
          }
          
          .ace-r_info .ace_entity.ace_other.ace_attribute-name {
            color: #50fa7b;
          }
          
          .ace-r_info .ace_entity.ace_name.ace_function {
            color: #50fa7b;
          }
          
          .ace-r_info .ace_entity.ace_name.ace_tag {
            color: #ff79c6;
          }
          .ace-r_info .ace_invisible {
            color: #626680;
          }
          
          .ace-r_info .ace_indent-guide {
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYHB3d/8PAAOIAdULw8qMAAAAAElFTkSuQmCC)
              right repeat-y;
          }
        `,
        t.$selectionColorConflict=!0;
        var r=e("../lib/dom");
        r.importCssString(t.cssText,t.cssClass,!1)
    }
);
(function() {
    window.require(
        ["ace/theme/r_info"],
        function(m) {
            if (typeof module == "object" && typeof exports == "object" && module) {
                module.exports = m;
            }
        }
    );
})();