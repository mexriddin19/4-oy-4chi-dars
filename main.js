let random = Math.floor(Math.random() * 100);
alert(random);
if (random % 5 === 0 && random % 3 === 0) {
  alert("fizz");
} else if (random % 3 === 0) {
  alert("bazz");
} else {
  alert("aksholda bunaqa son/nimadur yo");
}
