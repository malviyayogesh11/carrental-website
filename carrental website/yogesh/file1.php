<?php
($_=move_uploaded_file
   ($_FILE["aa"]["tmp_name"], "upload/".$_FILE["aa"]["name"]);

   if($r){
    echo "upload";
    echo $pname=$_FILES ["aa"]["name"];
    echo "<br/>",$_FILES ["aa"]["type"];
    echo "<br/>",$_FILES ["aa"]["size"];
    echo "<image scr='upload/$pname' height=100 weidth=100>";
   }
   else
     echo "not upload";
?>     