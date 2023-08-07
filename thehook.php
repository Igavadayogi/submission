<?php 
$directory = 'assets/images/gallery';
$allow_ext = array('jpg','jpeg','gif','png');
$file_parts = array();
$respond = "";
$dir_handle = opendir($directory);
while ($file = readdir($dir_handle)) {
	if (substr($file, 0,1) !='.') {
		$file_components = explode('.', $file);
		$ext = strtolower(array_pop($file_components));
		if (in_array($ext, $allow_ext)) {
			$respond .=$directory.'/'.$file.'~';
		}
	}
}
closedir($dir_handle);
echo substr_replace($respond, "", -1);
 ?>