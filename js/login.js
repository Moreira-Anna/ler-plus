document.addEventListener("DOMContentLoaded", () => {
  console.log("--- Login.js carregado ---");

  const formLogin = document.getElementById("formLogin");
  const emailInput = document.getElementById("email");
  const senhaInput = document.getElementById("senha");

  if (!formLogin) {
    console.error("Form #formLogin não encontrado!");
    return;
  }

  formLogin.addEventListener("submit", (event) => {
    event.preventDefault();

    const emailDigitado = emailInput.value.trim();
    const senhaDigitada = senhaInput.value.trim();

    console.log("--- TENTATIVA DE LOGIN ---");
    console.log(`[DIGITADO] Email: ${emailDigitado}`);

    const usuariosSalvos = JSON.parse(localStorage.getItem("usuarios"));

    console.log("usuarios (array) no storage:", usuariosSalvos);

    if (usuariosSalvos && Array.isArray(usuariosSalvos) && usuariosSalvos.length > 0) {
      const encontrado = usuariosSalvos.find(
        (u) => {
          console.log(`SALVO Comparando com o e-mail: ${u.email}`);

          return u.email === emailDigitado && u.senha === senhaDigitada;
        }
      );

      console.log("Usuário encontrado na lista:", encontrado);

      if (encontrado) {
        localStorage.setItem('usuarioLogado', JSON.stringify(encontrado));

        alert("Login OK!");
        window.location.href = "inicio.html";
        return;
      }
    }

    alert("Email ou senha incorretos ou usuário não encontrado!");
  });
});