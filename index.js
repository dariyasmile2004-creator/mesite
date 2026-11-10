const fs = require('fs');

// Укажи имя твоего JSON-файла (например, 'data.json' или 'db.json')
const fileName = 'data.json';

try {
    // 1. Читаем файл
    const fileContent = fs.readFileSync(fileName, 'utf8');
    const data = JSON.parse(fileContent);

    // 2. Добавляем три новые ветки рядом с остальными полями
    data.branch1 = "значение_1";
    data.branch2 = "значение_2";
    data.branch3 = "значение_3";

    // 3. Записываем обратно в файл с красивым форматированием
    fs.writeFileSync(fileName, JSON.stringify(data, null, 2), 'utf8');

    console.log('Готово! Три ветки успешно добавлены.');
} catch (error) {
    console.error('Ошибка:', error.message);
}