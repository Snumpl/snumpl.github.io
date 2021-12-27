'use strict';

confirm ('Расчитать стоимость сайта?');

let typeSite = prompt ('Какой тип сайта нужен?\n 1-Визитка\n 2-Магазин\n 3-Корпоративный\n запиши номер типа.');
let design = prompt ('Какой нужен дизайн?\n 1-стандартный\n 2-Индивидуальный\n 3-Есть свой макет');
let adaptive = prompt ('Нужен ли адаптивный дизайн?\n 1-нужен\n 2-не нужен');

let sum = 0;
let sum1 = 0;

let matrix1 = [
   [1700,2900,3100],
   [1500,1200,0],
   [1300,200],
];

let matrix2 = [
   [2,5,7],
   [1,5,0],
   [1,0],
];

if (typeSite == 1) {
   sum += matrix1[0][0];
   sum1 += matrix2[0][0];
} else if (typeSite == 2) {
   sum += matrix1[0][1];
   sum1 += matrix2[0][1];
} else if (typeSite == 3) {
   sum += matrix1[0][2];
   sum1 += matrix2[0][2];
} else { typeSite = 0 };

if (design == 1) {
   sum += matrix1[1][0];
   sum1 += matrix2[1][0];
} else if (design == 2) {
   sum += matrix1[1][1];
   sum1 += matrix2[1][1];
} else if (design == 3) {
   sum += matrix1[1][2];
   sum1 += matrix2[1][2];
} else { design = 0 };

if (adaptive == 1) {
   sum += matrix1[2][0];
   sum1 += matrix2[2][0];
} else if (adaptive == 2) {
   sum += matrix1[2][1];
   sum1 += matrix2[2][1];
} else { adaptive = 0 }; 

  alert('Цена - ' + (sum) + '\n' + 'Срок выполнения - ' + (sum1) + ' дней.');

   
   
   













