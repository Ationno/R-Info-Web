define(function(require, exports, module) {
    "use strict";
    
    var oop = require("../lib/oop");
    var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
    
    var RInfoHighlightRules = function() {
        var keywordMapper = this.createKeywordMapper({
            "keyword.control": "programa|procesos|proceso|variables|areas|robots|robot" +
                "|comenzar|fin" +
                "|si|sino|mientras|repetir" +
                "|ES|E|booelan|numero|AreaC|AreaPC|AreaP" +
                "|HayFlorEnLaEsquina|HayPapelEnLaEsquina|HayFlorEnLaBolsa|HayPapelEnLaBolsa|PosAv|PosCa" +
                "|Pos|mover|derecha|tomarFlor|tomarPapel|depositarFlor|depositarPapel|AsignarArea|Iniciar|Informar|Random" +
                "|EnviarMensaje|RecibirMensaje"
        }, "identifier");
    
        this.$rules = {
            start: [{
                    caseInsensitive: true,
                    token: ['variable', "text",
                        'storage.type.prototype',
                        'entity.name.function.prototype'
                    ],
                    regex: '\\b(function|procedure)(\\s+)(\\w+)(\\.\\w+)?(?=(?:\\(.*?\\))?;\\s*(?:attribute|forward|external))'
                }, {
                    caseInsensitive: true,
                    token: ['variable', "text", 'storage.type.function', 'entity.name.function'],
                    regex: '\\b(function|procedure)(\\s+)(\\w+)(\\.\\w+)?'
                }, {
                    token: keywordMapper,
                    regex: /\b[a-z_]+\b/
                }, {
                    token: 'constant.numeric',
                    regex: '(?<=\\s|^)[-+]?\\d+(?=\\s|$)'
                }, {
                    token: 'punctuation.definition.comment',
                    regex: '//.*$'
                }, {
                    token: 'punctuation.definition.comment',
                    regex: '\\{',
                    push: [{
                            token: 'punctuation.definition.comment',
                            regex: '\\}',
                            next: 'pop'
                        },
                        { defaultToken: 'comment.block' }
                    ]
                }, {
                    token: 'keyword.operator',
                    regex: /<>|[*\/+\-&|~<>:]=?/
                }
            ]
        };
    
        this.normalizeRules();
    };
    
    oop.inherits(RInfoHighlightRules, TextHighlightRules);
    
    exports.RInfoHighlightRules = RInfoHighlightRules;
    });
    