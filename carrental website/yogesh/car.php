<?php
$r=mysqli_query($con,"select name from student");
?>
<select>
    <option value = ''>Select Name </option>
<?php
   while($row=mysqli_fatch_array($r)){
    echo "<option value='$row[0]'>$row[0]</option>"
   }    
?>
</select>  


front page 
project duraction
intoducation 
aim 
technical specifications 
project module 
