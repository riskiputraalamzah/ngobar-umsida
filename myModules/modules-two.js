const fs = require("fs");

const data = "Saya membuat data dari variabel";
fs.writeFile("info.txt", data, (err) => {
  if (err) throw err;
  console.log("sukses");
});
