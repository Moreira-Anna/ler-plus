document.addEventListener("DOMContentLoaded", () => {

    const formRedefinir = document.getElementById("formRedefinir");
    const emailInput = document.getElementById("emailRedefinir");
    const novaSenhaInput = document.getElementById("novaSenha");

    if (!formRedefinir) {
        console.error("ERRO: Formulário de redefinição não encontrado!");
        return;
    }

    formRedefinir.addEventListener("submit", (event) => {
        event.preventDefault();

        const emailDigitado = emailInput.value.trim();
        const novaSenha = novaSenhaInput.value.trim();

        if (novaSenha.length < 6) {
            alert("A nova senha deve ter no mínimo 6 caracteres.");
            return;
        }

        let usuariosSalvos = JSON.parse(localStorage.getItem("usuarios")) || [];

        if (usuariosSalvos.length === 0) {
            alert("Não há usuários cadastrados.");
            return;
        }

        const indiceUsuario = usuariosSalvos.findIndex(
            (u) => u.email === emailDigitado
        );

        if (indiceUsuario === -1) {
            alert("Erro: E-mail não encontrado na base de dados.");
            return;
        }

        usuariosSalvos[indiceUsuario].senha = novaSenha;
        console.log(`[DEBUG] Usuário no índice ${indiceUsuario} teve a senha alterada para: ${usuariosSalvos[indiceUsuario].senha}`);
        localStorage.setItem("usuarios", JSON.stringify(usuariosSalvos));
        alert("Senha redefinida com sucesso! Você pode fazer login agora.");
        window.location.href = "login.html";
    });
});