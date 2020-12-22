<?php

    function query($sql){
        $servername = "localhost";
        $username = "root";
        $password = "";
        $database = "entregalegal";

        $conn = mysqli_connect($servername, $username, $password, $database);
        $conn->query("set names utf8");
        $result = mysqli_query($conn, $sql);
        return $result;
    }

    function nonquery($sql){
        $servername = "localhost";
        $username = "root";
        $password = "";
        $database = "entregalegal";

        $conn = mysqli_connect($servername, $username, $password, $database);
        $conn->query("set names utf8");
        $result = mysqli_query($conn, $sql);
        mysqli_close($conn);
    }
?>