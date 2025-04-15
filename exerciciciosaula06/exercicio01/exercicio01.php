<?php
    for ($linha = 1; $linha <= 8; $linha++) {
    $cor = ($linha % 2 == 0) ? '#d17878' : '#ffa4a4';
    echo "<tr style='background-color: $cor;'>";
    for ($coluna = 1; $coluna <= 4; $coluna++) {
        echo "<td>Linha $linha, Coluna $coluna</td>";
    }
    echo "</tr>";
}
?>