// your JS code here
document.getElementById("btn").onclick = function () {
  const input = document.getElementById("ip").value;
  const output = document.getElementById("output");

  if (input === "") {
    alert("Please enter a number");
    return;
  }

  let number = parseFloat(input);

  // Initial Promise
  new Promise((resolve) => {
    setTimeout(() => {
      output.innerHTML = `Result: ${number}`;
      resolve(number);
    }, 2000);
  })
    .then((num) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          num = num * 2;
          output.innerHTML = `Result: ${num}`;
          resolve(num);
        }, 2000);
      });
    })
    .then((num) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          num = num - 3;
          output.innerHTML = `Result: ${num}`;
          resolve(num);
        }, 1000);
      });
    })
    .then((num) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          num = num / 2;
          output.innerHTML = `Result: ${num}`;
          resolve(num);
        }, 1000);
      });
    })
    .then((num) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          num = num + 10;
          output.innerHTML = `Final Result: ${num}`;
          resolve(num);
        }, 1000);
      });
    })
    .catch((err) => {
      console.error("Error:", err);
    });
};
