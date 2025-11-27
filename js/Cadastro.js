document.addEventListener("DOMContentLoaded", () => {
    console.log("Cadastro.js carregado!");

    const form = document.querySelector("#formCadastro");
    const usernameInput = document.querySelector("#username");
    const emailInput = document.querySelector("#email");
    const conteudoInput = document.querySelector("#Conteúdo");
    const senhaInput = document.querySelector("#pwd");

    if (!form || !usernameInput || !emailInput || !conteudoInput || !senhaInput) {
        console.error("ERRO: Um ou mais elementos do formulário não foram encontrados. Verifique os IDs no HTML.");
        alert("Erro interno: Falha ao carregar o formulário. Verifique o console.");
        return;
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const conteudo = conteudoInput.value;
        const senha = senhaInput.value.trim();

        if (username === "" || email === "" || conteudo === "" || senha === "") {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        const emailValido = /\S+@\S+\.\S+/;
        if (!emailValido.test(email)) {
            alert("Digite um e-mail válido!");
            return;
        }

        const novoUsuario = { username, email, conteudo, senha };
        let usuariosSalvos = JSON.parse(localStorage.getItem("usuarios")) || [];
        const emailExiste = usuariosSalvos.some(u => u.email === email);

        if (emailExiste) {
            alert("Este e-mail já está cadastrado.");
            return;
        }

        usuariosSalvos.push(novoUsuario);
        localStorage.setItem("usuarios", JSON.stringify(usuariosSalvos));

        alert("Cadastro realizado com sucesso!");
        window.location.href = "login.html";
    });
});