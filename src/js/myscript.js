'use strict';

confirm ('Расчитать стоимость сайта?');

let typeSite = prompt ('Какой тип сайта нужен?\n 1-Визитка\n 2-Магазин\n 3-Корпоративный\n запиши номер типа.');
let design = prompt ('Какой нужен дизайн?\n 1-стандартный\n 2-Индивидуальный\n 3-Есть свой макет');
let adaptive = prompt ('Нужен ли адаптивный дизайн?\n 1-нужен\n 2-не нужен');

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
      typeSite = matrix1[0][0];
   } else if (typeSite == 2) {
      typeSite = matrix1[0][1];
   } else if (typeSite == 3) {
      typeSite = matrix1[0][2];
   } else {typeSite = 0};

   if (design == 1) {
      design = matrix1[1][0];
   } else if (design == 2) {
      design = matrix1[1][1];
   } else if (design == 3) {
      design = matrix1[1][2];
   } else {design = 0};

   if (adaptive == 1) {
      adaptive = matrix1[2][0];
   } else if (adaptive == 2) {
      adaptive = matrix1[2][1];
   } else {adaptive = 0}; 

   let sum = typeSite + design + adaptive;
   alert('Цена - ' + (sum));

   if (typeSite == 1) {
      typeSite = matrix2[0][0];
   } else if (typeSite == 2) {
      typeSite = matrix2[0][1];
   } else if (typeSite == 3) {
      typeSite = matrix2[0][2];
   } else {typeSite = 0};

   if (design == 1) {
      design = matrix2[1][0];
   } else if (design == 2) {
      design = matrix2[1][1];
   } else if (design == 3) {
      design = matrix2[1][2];
   } else {design = 0};

   if (adaptive == 1) {
      adaptive = matrix2[2][0];
   } else if (adaptive == 2) {
      adaptive = matrix2[2][1];
   } else {adaptive = 0};

   let sum2 = typeSite + design + adaptive;
   alert('Дней на выполнение - ' + (sum2));
   













