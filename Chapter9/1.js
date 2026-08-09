<!DOCTYPE html>
<html>
<head>
  <title>Counter</title>
</head>
<body>

  <h2 id="display">0</h2>

  <button id="increase">Increase</button>
  <button id="decrease">Decrease</button>
  <button id="reset">Reset</button>

  <script>
    let count = 0;

    const display = document.getElementById("display");

    document.getElementById("increase").addEventListener("click", () => {
      count++;
      display.textContent = count;
    });

    document.getElementById("decrease").addEventListener("click", () => {
      count--;
      display.textContent = count;
    });

    document.getElementById("reset").addEventListener("click", () => {
      count = 0;
      display.textContent = count;
    });
  </script>

</body>
</html>