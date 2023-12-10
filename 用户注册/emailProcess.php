<?php
  header("Content-type:text/htmljcharset = utf-8")
  include "configSql.php"
    $email = $_POST['user_email']
    $sql = "select * from userinfo where user_name = '{$name}'"
    $result = mysqli_query($link,$sql)
    if($result->num_rows>0){
        echo json_encode(['status' =>1])
    }else{
        echo json_encode(['status' =>0])
    }
?>