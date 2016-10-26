angular.module("BeatupApp")

.controller("SeattleController", ["$scope", function($scope){

    //these are test variables until the db is connected
    $scope.cityName = "Seattle";
    $scope.cityHeaderClass = "seattle-header";
    $scope.pText = "The rainy city slam, the Pike Place punchout. Blah Blah practice text. Trying to get my CSS aligned properly.";
    $scope.beatups = [
        {
            name: "Mill Creek Showdown",
         imgUrl: "http://www.gaffneyconstruction.com/MILLCREEK4SQ01_.jpg"
        },
        {
            name: "Everett Rumble",
            imgUrl: "http://i1.ytimg.com/vi/ool0dVCK4YY/hqdefault.jpg"
        },
        {
            name: "Tacoma Throwdown",
            imgUrl: "http://static-28.sinclairstoryline.com/resources/media/9acaf819-1e0a-44f6-8642-16ba99cb2706-130731_tacoma_house_disrepair_sale.jpg?1448097993680"
        },
        {
            name: "Kirkland Kicker",
            imgUrl: "https://i0.wp.com/img.photobucket.com/albums/v320/Vexorg/Sledgehammer/P8312060.jpg"
        }
    ];

}]);
