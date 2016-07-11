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

juke.directive('songList', function (PlayerFactory) {
	return {
		restrict: 'E',
		scope: {
			listOfSongs: '='
		},
		link: function (scope) {
			
			scope.getCurrentSong = function () {
			    return PlayerFactory.getCurrentSong();
			  };

			  scope.isPlaying = function (song) {
			    return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
			  };

			  scope.toggle = function (song) {
			    if (song !== PlayerFactory.getCurrentSong()) {
			      PlayerFactory.start(song, scope.listOfSongs);
			    } else if ( PlayerFactory.isPlaying() ) {
			      PlayerFactory.pause();
			    } else {
			      PlayerFactory.resume();
			    }
			  };

		},
		templateUrl: 'js/directives/song-table.html',
	}
})

juke.directive('uponDoubleClick', function(){
	return {
		restrict: 'A',
		scope: {
			uponDoubleClick: '&'  
		},
	link: function(scope, element) {
		element.on('dblclick', function(){
			scope.uponDoubleClick();
		})
	}
	}
})