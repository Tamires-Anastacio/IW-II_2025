<?php
$produtos = [
    ['nome' => 'Jordan', 'preco' => 3500.00, 'categoria' => 'Calçados'],
    ['nome' => 'Camiseta', 'preco' => 49.90, 'categoria' => 'Vestuário'],
    ['nome' => 'Tablet', 'preco' => 2800.00, 'categoria' => 'Eletrônicos'],
    ['nome' => 'Meia', 'preco' => 199.99, 'categoria' => 'Vestuário'],
    ['nome' => 'Fone de Ouvido', 'preco' => 150.00, 'categoria' => 'Eletrônicos'],
    ['nome' => 'Calça Jeans', 'preco' => 120.00, 'categoria' => 'Vestuário']
];

// Cores por categoria
$coresCategoria = [
    'Eletrônicos' => '#cdaf7b',
    'Vestuário' => '#f3ecbe',
    'Calçados' => '#ee9f80'
];

foreach ($produtos as $produto) {
    $cor = isset($coresCategoria[$produto['categoria']]) ? $coresCategoria[$produto['categoria']] : '#ffffff';
    
    echo "<tr style='background-color: $cor;'>";
    echo "<td>{$produto['nome']}</td>";
    echo "<td>R$ " . number_format($produto['preco'], 2, ',', '.') . "</td>";
    echo "<td>{$produto['categoria']}</td>";
    echo "</tr>";
}
?>
