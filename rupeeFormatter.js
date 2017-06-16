module.exports = function rupeeFormatter(amount){
  amount = amount + "";
  if(amount === ""){
    return "₹ -";
  }
  var amountArr = amount.split(".");
  var first = amountArr[0];
  var decimal = amountArr[1];
  var firstdigit = first.split("").pop();
  var lastPart = first.split("").filter((v, i , A)=>{return i!== A.length-1}).join("");
  var lastPartFormatted = lastPart.split("").reverse().map((v, i, A)=>{if(i!==A.length-1){return `${A[i+1]}${v}`}else{return v}}).filter((v, i)=>{return i%2 === 0}).reverse().join(",");
  if(decimal !== undefined){
    return `₹ ${lastPartFormatted}${firstdigit}.${decimal}`;
  } else {
    return `₹ ${lastPartFormatted}${firstdigit}`;
  }
}
