angular.module("BeatupApp")



.controller("eventController", ["$scope", "UserService", "EventService", "$http", function($scope, UserService, EventService, $http) {


    $scope.user = UserService.loggedInUser;
    $scope.event = {};
    $scope.comments = [];
    $scope.members = [];
	
	
	var resetBeatupForm = function () {
		$scope.newBeatup = {
			name: '',
			description: '',
			location: {
				street: '',
				city: '',
				state: ''
			},
			region: '',
			imgUrl: ''
		};
	}

	resetBeatupForm();
	
    $scope.getEvent = function() {
        $http.get("http://localhost:8000/event/:id").then(function(response) {
            $scope.event = response.data;
        });
    };
    $scope.getEvent();

    $scope.joinEvent = function(index) {
        EventService.joinEvent($scope.event[index], $scope.user)
            .then(function(user) {
                $scope.event.members.splice(index, 1, user);
            });
    };



    $scope.addEvent = function() {
		EventService
			.createEvent($scope.newBeatup)
			.then(function (res) {
				console.log(res);
				return res;
			})
			.then(function () {
				// TODO add logic on success
				resetBeatupForm();
			})
			.catch(console.error);
    };

    $scope.addComment = function(index) {
        $scope.comment = {
            content: $scope.content,
            owner: $scope.user
        };
        EventService.addComment($scope.event[index], $scope.comment)
            .then(function(comment) {
                $scope.event.comments.splice(index, 1, comment);
            });
        $scope.comment = {
            content: "",
            owner: ""
        };
    };
}]);





//$scope.event = {
//		name: "Downtown Beatup",
//		description: "Come one, come all! This is an open call to the those who consider themselves to be toughest of Seattle! All ages and genders welcome as long as you're down to get beat up. This is in a secure location right down town. Hit join and include yourself in the group conversation. Be there at 9pm sharp. Only one rule.... don't talk about this outside of Beatup Meetup.",
//		location: {
//			street: "123 Pike St",
//			city: "Seattle",
//			state: "WA"
//		},
//		organizer: "Jim",
//		members: ["Carl", "Frank", "Mark", "Nancy", "Jose", "Jamal", "Chase", "Dane"],
//		region: "Seattle",
//		comments: [{
//				content: "I'm gonna kick Carl's ass",
//				owner: "Mark"
//			},
//			{
//				content: "What is Nancy doing here? Get out Nancy.",
//				owner: "Jamal"
//			},
//			{
//				content: "Jamal I'm gonna knock that yellow ass tooth out",
//				owner: "Nancy"
//			},
//			{
//				content: "Suh dudes",
//				owner: "Jose"
//			}],
//		imgUrl: "http://lghttp.44441.nexcesscdn.net/8019CE5/magento/media/catalog/category/Accessories-Banners-Decals.jpg"
//	};
