function forintszamol(){
    var ft = parseInt(document.getElementById("forint").value)

    document.write("Euróban: " + ft / 404)
    document.write("<br>")
    document.write("Dollárban: " + ft / 376.48)
    document.write("<br>")
    document.write("Japán jenben:" + ft / 2.88)
  
}