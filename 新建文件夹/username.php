<?php 
	$username=$_GET['username'];
	if($username="hunger"){
		$ret=array("status"=>1,"msg_type"=>"USERNAME_EXIST");
	}else if(preg_match("/^[A-Za-z_0-9]{3,10}$/",$username)){
		$ret=array("status"=>0)};
	else{
		$ret=array("status"=>1,"msg_type"=>"USERNAME_TYPE_ERROR");
	};
	echo json_encode($ret);
 ?>