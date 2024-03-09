let num = Math.floor(Math.random() * 15);

//変数numが３と５の倍数の場合
if (num % 3 === 0 && num % 5 === 0) {
  console.log('3と5の倍数');
  //変数がnumが３の倍数の場合
} else if (num % 3 === 0) {
  console.log('３の倍数です');
  //変数numが５の倍数の場合
} else if (num % 5 === 0) {
  console.log('５の倍数です');
  //変数numがそれ以外の場合
} else {
  console.log(num)
}