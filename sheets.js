// const sheetID = "1KvW6k1LVD5YwPMTpE_OPTEc0nqZOLzP3aD14HFbSd-M";
// const base = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?`;
// const sheetName = "users";
// const query = encodeURIComponent("Select *");
// const url = `${base}&sheet=${sheetName}&tq=${query}`;
// const data = [];
// document.addEventListener("DOMContentLoaded", init);

// let output;

// function init() {
//   output = document.querySelector(".output");

//   console.log("ready");

//   fetch(url)
//     .then((res) => res.text())
//     .then((rep) => {
//       //console.log(rep);
//       const jsData = JSON.parse(rep.substring(47).slice(0, -2));
//       const colz = [];

//       console.log('🚀 ~ .then ~ jsData', jsData);

//       jsData.table.cols.forEach((heading) => {
//         if (heading.label) {
//           colz.push(heading.label.toLowerCase().replace(/\s/g, ""));
//         }
//       });

//       jsData.table.rows.forEach((main) => {
//         //console.log(main);
//         const row = {};
//         colz.forEach((ele, ind) => {
//           //console.log(ele);
//           row[ele] = main.c[ind] != null ? main.c[ind].v : "";
//         });
//         data.push(row);
//       });

//       maker(data);
//     });
// }

// function maker(json) {
//   const div = document.createElement("div");
//   div.style.display = "grid";
//   div.style.gridTemplateColumns = "25% 25% 25% 25%";
//   output.append(div);
//   let first = true;
//   json.forEach((el) => {
//     const keys = Object.keys(el);

//     if (first) {
//       first = false;
//       keys.forEach((heading) => {
//         const ele = document.createElement("div");
//         ele.textContent = heading.toUpperCase();
//         ele.style.background = "black";
//         ele.style.color = "white";
//         div.append(ele);
//       });
//     }

//     keys.forEach((key) => {
//       const ele = document.createElement("div");
//       ele.style.border = "1px solid #ddd";
//       ele.textContent = el[key];
//       div.append(ele);
//     });

//     // console.log(keys);
//   });
// }


let url = "https://api.sheety.co/654ba0af3567b546e1dc142300c1e3d4/beautyAndTheBeast/sheet1";
fetch(url)
  .then((response) => response.json())
  .then((json) => {
    // Do something with the data
    console.log(json.sheet1);
  });