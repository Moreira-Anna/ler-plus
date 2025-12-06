document.addEventListener("DOMContentLoaded", () => {
    const post = JSON.parse(localStorage.getItem("postSelecionado"));

    if (!post) {
        document.body.innerHTML = "<h2>Nenhuma publicação encontrada.</h2>";
        return;
    }

    document.getElementById("imgLivro").src = post.imagem;
    document.getElementById("resumoCompleto").textContent = post.texto;
    document.getElementById("generoLivro").textContent = post.genero;
    document.getElementById("dataLivro").textContent = post.data;
});
