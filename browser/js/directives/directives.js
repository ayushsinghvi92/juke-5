juke.directive('sidebar', function () {
	return {
		restrict: 'E',
		templateUrl: '/js/directives/sidebar.html'
	}
})

juke.directive('player', function (PlayerFactory) {
	return {
		restrict: 'E',
		link: function (scope, element, attrs) {

			angular.extend(scope, PlayerFactory);
			scope.toggle = function () {
		    	if ( PlayerFactory.isPlaying() ) PlayerFactory.pause();
		    	else PlayerFactory.resume();
		  	};

		  	scope.getPercent = function () {
		    	return PlayerFactory.getProgress() * 100;
		  	};

  			scope.handleProgressClick = function (evt) {
    			PlayerFactory.seek(evt.offsetX / evt.currentTarget.scrollWidth);
  			};
		},
		templateUrl: 'js/directives/player.html'
	}
})

juke.directive('albumList', function () {
	return {
		restrict: 'E',
		scope: {
			albums: '='
		},
		templateUrl: 'js/directives/albums.html'
	}
})

juke.directive('songList', function () {
	return {
		restrict: 'E',
		scope: {
			listOfSongs: '='
		},
		link: function (scope) {
			console.log(scope.listOfSongs)
		},
		templateUrl: 'js/directives/song-table.html',
	}
})