function calculateBMI() {
 var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);

    var result = weight / (height * height);

    document.getElementById("result").value = result;
  }