function HideModal()
{
  document.getElementById('modal').style.display = "none";
}

function ShowModal()
{
  document.getElementById('modal').style.display = "flex";
}

function login() {
  var nome = $("#nome").val();
  var senha = $("#senha").val();

  if (nome && senha && nome === "admin" && senha === "admin") {
    const user = {
      name: nome,
      dataEntrada: new Date(),
      id: Math.floor(Math.random() * 100000),
    };

    localStorage.setItem("usuario", JSON.stringify(user));

    window.location.href = "../Loja/loja.html";
  } else {
    ShowModal();
  }
}
