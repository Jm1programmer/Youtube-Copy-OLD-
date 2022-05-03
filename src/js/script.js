function acao() {
   let menu = document.getElementById("menu");
   let invisivel = document.getElementById("menutransparente")
   let container = document.getElementById("container")
   invisivel.classList.toggle("menuoff")
  menu.classList.toggle("small")
  container.classList.toggle("containermenuon")

}