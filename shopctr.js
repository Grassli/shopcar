//shop控制器
app.controller('ShopController',function($scope){
    //把商品添加到购物车
    $scope.add=function(index){
    	 //判断购物车中是否存在该商品 
    	if($scope.cartlist.indexOf($scope.shoplist[index])==-1){
    		$scope.cartlist.push($scope.shoplist[index]);	
    	}else{
    		$scope.cartlist[$scope.cartlist.indexOf($scope.shoplist[index])].num++;
    	}

    }
});