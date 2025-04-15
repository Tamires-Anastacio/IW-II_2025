<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $linhas = intval($_POST['linhas']);
    $colunas = intval($_POST['colunas']);

    if ($linhas > 0 && $colunas > 0) {
        echo "<h3>Tabela de $linhas linhas x $colunas colunas:</h3>";
        echo "<table border='1' cellpadding='10' cellspacing='0'>";

        $i = 1;
        while ($i <= $linhas) {
            $cor = ($i % 2 == 0) ? '#ff7c70' : '#f2dfb1';
            echo "<tr style='background-color: $cor'>";

            $j = 1;
            while ($j <= $colunas) {
                echo "<td>Linha $i, Coluna $j</td>";
                $j++;
            }

            echo "</tr>";
            $i++;
        }

        echo "</table>";
    } else {
        echo "<p>Por favor, digite valores maiores que 0.</p>";
    }
}
?>