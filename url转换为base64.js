function getBase64Image(img) {
    var demoCanvas = document.getElementById("demoCanvas");
    demoCanvas.width = img.width;
    demoCanvas.height = img.height;
    var ctx = demoCanvas.getContext("2d");
    ctx.drawImage(img, 0, 0, 300, 150);
    var ext = img.src.substring(img.src.lastIndexOf(".")+1).toLowerCase();
    var dataURL = demoCanvas.toDataURL("image/"+ext);
    return {
      dataURL: dataURL,
      type: "image/"+ext
    };
  }
