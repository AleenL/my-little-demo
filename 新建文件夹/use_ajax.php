<?php 
	$username=$_GET["username"];
	$password=$_GET["password"];

	if(preg_match("/^\w{5,9}$/",$username)){
		$ret=array("sex"=>$username,"age"=>$password);
	}else{
		$ret=array("sex"=>"男","age"=>20);
	};
	$ret = array('status'=>1, 'data'=>$items);
    echo json_encode($ret);
 ?>