// var変数
// var val1 = "var関数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // let変数も上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// //letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// constは上書き不可
// val3 = "const変数を上書き";

// const val3 = "const変数を再宣言";

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//     name: "neko",
//     age: 19,
// };
// val4.name = "neko00";
// val4.address = "kochi"
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ['dog', 'cat'];
// val5[0] = "neco";
// val5.push("mochimarusama");
// console.log(val5);

// テンプレート文字列
// const name = "猫";
// const age = "3";
// // 「吾輩は猫である。名前はまだない。歳は3歳だ。」

// // 従来の方法
// // const message1 = "吾輩は" + name + "である。名前はまだない。歳は" + age + "だ。";
// // console.log(message1);

// // テンプレート文字列
// const message2 = `吾輩は${name}である。名前はまだない。歳は${age}だ。`;
// console.log(message2);

// アロー関数

// 従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("thisFunc1"));

// アロー関数
const func2 = (str) => {
  return str;
};
console.log(func2("This func2"));

const func3 = (num1, num2) => num1 + num2;
console.log(func3(10, 20));
