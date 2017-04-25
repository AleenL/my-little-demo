<?php 
	$username=$_POST['username'];
	if(preg_match("/^[A-Za-z_0-9]{9,10}$/",$username)){
		$ret=array("status"=>0,"msg_type"=>$username);
	}else if($username="hunger"){
		$ret=array("status"=>1,"msg_type"=>"USERNAME_EXIST");
	}else{
		$ret=array("status"=>1,"msg_type"=>$username)
	}
	echo json_encode($ret);
 ?>