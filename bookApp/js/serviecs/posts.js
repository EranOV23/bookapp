app.factory('postData', function ($http) {
	return {
		getPosts: function() {
			return $http.get('data/posts.json')
		}		
	};
});