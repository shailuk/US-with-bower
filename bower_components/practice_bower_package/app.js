
var app = angular.module("myApp", []);



app.directive("imageReplace", function ($controller) {

    var big_imageElement;
    var styleElement;
    var smallImageElement;
    var i = 0;
   

    function linkfunc(scope, element, attributes) {

       
        scope.linkSrc = scope.copysheet[i].image;

        scope.smallImgSrc= scope.copysheet[i].thumbnail;

        scope.height = scope.copysheet[i].height;

        scope.width = scope.copysheet[i].width;

        i++;

        element.bind('mouseover', function ($scope) {                           //mouseover event

            smallImageElement = element[0].childNodes[0].childNodes[0].childNodes[1].childNodes[1];

            bigImageElement = element[0].childNodes[0].childNodes[0].childNodes[1].childNodes[3];

            var index = element[0].attributes.source.value[10]; 

            bigImageElement = element[0].childNodes[0].childNodes[0].childNodes[1].childNodes[3];

            bigImageElement.attributes[0].value = scope.copysheet[index].image;

            smallImageElement.attributes[6].value = "border:2px solid blue";

        });

        element.bind('mouseout', function ($scope) {
             smallImageElement.attributes[6].value = " ";

        });

    }

    return {
        restrict: 'E',
        scope: { img_src: '=', },
        template: '<div><div> <a href = "{{linkSrc}}"> <img src = "{{smallImgSrc}}" id="id1" alt="thumbnail_copysheet" width="{{width}}" height="{{height}}" class = "small_img" style=" "> <embed src = " "  class = "big_img" height = "100" width = "100"> </a></div></div>',
        link: linkfunc,
        controller: 'controller'
    }
});