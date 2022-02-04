<?php
$mysql = new mysqli("localhost","root","sa","usuarios");

$sql = "SELECT * FROM usuarios";

$statement = $mysql->query($sql);

$array = $statement->fetch_all();

html_table($array);
function html_table($array)
{
    $rows = array();
    foreach ($array as $row) {
        $cells = array();
        foreach ($row as $cell) {
            $cells[] = "<td>{$cell}</td>";
        }
        $rows[] = "<tr>" . implode('', $cells) . "</tr>";
    }
    echo "<table class='hci-table'>" . implode('', $rows) . "</table>";
}