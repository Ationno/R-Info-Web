define(
    "ace/theme/r_info",
    ["require","exports","module","ace/lib/dom"],
    function(e,t,n){
        t.isDark=!0,
        t.cssClass="ace-r_info",
        t.cssText=
        `.ace-r_info .ace_gutter {
            background: #282a36;
            color: rgb(144,145,148)
          }
          
          .ace-r_info .ace_print-margin {
            width: 1px;
            background: #44475a
          }
          
          .ace-r_info {
            background-color: #282a36;
            color: #f8f8f2
          }
          
          .ace-r_info .ace_cursor {
            color: #f8f8f0
          }
          
          .ace-r_info .ace_marker-layer .ace_selection {
            background: #44475a
          }
          
          .ace-r_info.ace_multiselect .ace_selection.ace_start {
            box-shadow: 0 0 3px 0px #282a36;
            border-radius: 2px
          }
          
          .ace-r_info .ace_marker-layer .ace_step {
            background: rgb(198, 219, 174)
          }
          
          .ace-r_info .ace_marker-layer .ace_bracket {
            margin: -1px 0 0 -1px;
            border: 1px solid #a29709
          }
          
          .ace-r_info .ace_marker-layer .ace_active-line {
            background: #44475a
          }
          
          .ace-r_info .ace_gutter-active-line {
            background-color: #44475a
          }
          
          .ace-r_info .ace_marker-layer .ace_selected-word {
            box-shadow: 0px 0px 0px 1px #a29709;
            border-radius: 3px;
          }
          
          .ace-r_info .ace_fold {
            background-color: #50fa7b;
            border-color: #f8f8f2
          }
          
          .ace-r_info .ace_keyword {
            color: #ff79c6
          }

          .ace-r_info .ace_keyword.ace_section {
            color: #D25252
          }

          .ace-r_info .ace_keyword.ace_codeblock {
            color: #CE9178
          }

          .ace-r_info .ace_keyword.ace_control {
            color: #D197D9
          }

          .ace-r_info .ace_keyword.ace_data.ace_type {
            color: #79ABFF
          }

          .ace-r_info .ace_keyword.ace_function {
            color: #DCDCAA
          }

          .ace-r_info .ace_keyword.ace_procedure {
            color: #DCDCAA
          }

          .ace-r_info .ace_keyword.ace_comunication {
            color: #D9E577
          }

          .ace-r_info .ace_keyword.ace_operator {
            color: #D8D8D8
          }
          
          .ace-r_info .ace_constant.ace_language {
            color: #7FB347
          }
          
          .ace-r_info .ace_constant.ace_numeric {
            color: #7FB347
          }
          
          .ace-r_info .ace_constant.ace_character {
            color: #7FB347
          }
          
          .ace-r_info .ace_constant.ace_character.ace_escape {
            color: #7FB347
          }
          
          .ace-r_info .ace_constant.ace_other {
            color: #7FB347
          }
          
          .ace-r_info .ace_support.ace_function {
            color: #8be9fd
          }
          
          .ace-r_info .ace_support.ace_constant {
            color: #6be5fd
          }
          
          .ace-r_info .ace_support.ace_class {
            font-style: italic;
            color: #66d9ef
          }
          
          .ace-r_info .ace_support.ace_type {
            font-style: italic;
            color: #66d9ef
          }
          
          .ace-r_info .ace_storage {
            color: #ff79c6
          }
          
          .ace-r_info .ace_storage.ace_type {
            font-style: italic;
            color: #8be9fd
          }
          
          .ace-r_info .ace_invalid {
            color: #F8F8F0;
            background-color: #ff79c6
          }
          
          .ace-r_info .ace_invalid.ace_deprecated {
            color: #F8F8F0;
            background-color: #bd93f9
          }
          
          .ace-r_info .ace_string {
            color: #f1fa8c
          }
          
          .ace-r_info .ace_comment {
            color: #608B4E
          }
          
          .ace-r_info .ace_variable {
            color: #50fa7b
          }
          
          .ace-r_info .ace_variable.ace_parameter {
            font-style: italic;
            color: #ffb86c
          }
          
          .ace-r_info .ace_entity.ace_other.ace_attribute-name {
            color: #50fa7b
          }
          
          .ace-r_info .ace_entity.ace_name.ace_function {
            color: #50fa7b
          }
          
          .ace-r_info .ace_entity.ace_name.ace_tag {
            color: #ff79c6
          }
          .ace-r_info .ace_invisible {
            color: #626680;
          }
          
          .ace-r_info .ace_indent-guide {
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYHB3d/8PAAOIAdULw8qMAAAAAElFTkSuQmCC) right repeat-y
          }`,
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