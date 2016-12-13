app.controller('homeController', 
    function($scope, postData){
        postData.getPosts()
        	.success(function(data) { 
                $scope.posts = data;
                })
			.error(function(){
			    return console.log("Could not load json data");
			    });

    $scope.delete = function(index) {
        var answer = prompt("enter DELETE to remove this book", "DELETE");
        if(answer != null){
            $scope.posts.splice(index,1);
        }
    };

    $scope.edit = function(index){
        $scope.posts[index].editable = true;
    };

    $scope.save = function(index){
        $scope.posts[index].editable = false;
    };
});