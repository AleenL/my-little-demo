<?php 
	$start=$_GET["start"];
	$len=$_GET["len"];
	for($x=0;$x<=6;$x++){
		$add=$start+$x;
		echo "<li>内容$add</li>";
	};
 ?>