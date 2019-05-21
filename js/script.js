var app = angular.module('myApp', []);


(function () {
    'use strict';

    //regular expressions for few markdown patterns

    var Patterns = {};
    Patterns.bold = /(\*\*|__)(.*?)\1/gi;
    //Patterns.italic = /(\/\/|__)(.*?!|)\1/gi;
    Patterns.url = /(\[\[)[^*]+(]\])/gi;
    Patterns.italic = /(\/\/)([^\[]\S+)(\/\/)/gi;

    function link(scope, element, attrs) {

        scope.$watch('ngModel', function (text)
        {
            console.log(text);
            console.log(text.match(Patterns.italic)) ;
            console.log(text.match(Patterns.url));
            
            var text2 = $('#textbox').val();
            var html = text2;
            console.log(text2);
                 
            if (Patterns.hasOwnProperty('url'))
            {
                const urlexp = Patterns['url'];
                html = html.replace(urlexp, '<a target="' + scope.props.target + '" href="$&" class="links">$&</a>');
                console.log(html);
                
            }
            if (Patterns.hasOwnProperty('bold'))
            {
                const boldexp = Patterns['bold'];
                html = html.replace(boldexp, '<strong class="strong"> $&</strong>');
                console.log(html);
            }
            if (Patterns.hasOwnProperty('italic')) {
                console.log(html.match(Patterns.italic));
                const italicexp = Patterns['italic'];
                html = html.replace(italicexp, '<em class="italic"> $&</em>');
                console.log(html);
            }
           
            document.getElementById('target').innerHTML = html;
            document.getElementById('htmltarget').innerText = html;

        });
    }

    app.directive("parseToMarkDown", function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            replace: true,
            scope: {
                ngModel: '=ngModel',
                props: '=parseToMarkDown',
            },
            link: link
        };
    });

})();

app.controller('ParserController', function ($scope, $http, $timeout) {

    //Initiallizations
    $scope.textt = "**Angular** is a TypeScript based //opensource// front-end web application //opensource// platform. [[https://angular.io/ | Learn more ]]  **hhh** //opensourc2// [[https://angular.io/ |check url ]] **Angular**";

    $scope.props = {
        target: '_blank',
    };

    $scope.updateTarget = function (textt)
    {
        var strongElems = $('.strong');
        var italicElems = $('.italic');
        var linksElems = $('.links');
        console.log(strongElems);
        console.log(linksElems);
        console.log(italicElems);


        linksElems.each(function ()
        {
            let content = $(this).text();
            //console.log(content.slice(0, 2));
            //console.log(content.slice(-2));
            console.log(content);

            if (content.slice(0, 2) == '[[' && content.slice(-2) == ']]') {
                console.log(content);
                var refpos = content.indexOf('|');
                if (refpos >= 0) {
                    $(this).attr('href', content.slice(2, refpos - 1));
                    $(this).text(content.slice(refpos + 1, -2))
                }
            }
        })
        
        
        strongElems.each(function ()
        {
            let content = $(this).text();
            console.log(content);
            
            if (content.slice(1, 3) == '**' && content.slice(-2) == '**') {
                $(this).text(content.slice(3, -2))
            }
        })

        italicElems.each(function () {
            let content = $(this).text();
            console.log(content);
            //console.log(content.slice(1, 3));
            //console.log(content.slice(-2));

            if (content.slice(1, 3) == '//' && content.slice(-2) == '//') {
                $(this).text(content.slice(3, -2))
            }
        })

        document.getElementById('htmltarget').innerText = document.getElementById('target').innerHTML;

    }
    $(window).load(function () {
        $scope.updateTarget()
    });
   
   

});












