angular.module('BeatupApp')
	.service("EventService", ['$http', 'TokenService', function ($http, TokenService){
		// this.loggedInUser = UserService.loggedInUser;
		var _this = this;
		var newEvent = {};
		var baseUrl = "http://localhost:8000";



		//adding user (yourself) as a member to an event//
		this.joinEvent = function(eventObj) {
			return $http.post(baseUrl + '/api/event/:id/members', eventObj._id)
			.then(function(response) {
				_this.loggedInUser = UserService.loggedInUser;
				_this.Event.push(_this.loggedInUser.username);
				return response.data;
			});
		};

		//adding comment to event page//
		this.addComment = function(eventObj, comment) {
			return $http
				.post(baseUrl + 'api/event/comments', eventObj._id, comment)
				.then(function(reponse) {
					_this.Event.comments.push(response.data);
					return response.data;
				});
		};
		//creating new event
		this.createEvent = function(eventData) {
			return $http({
				method: 'POST',
				url: 'http://localhost:8000/api/event',
				data: eventData,
				headers: {
					authorization: 'Bearer ' + TokenService.getToken()
				}
				
			});
		};
	}]);
