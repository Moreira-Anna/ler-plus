
function carregarFeed(filtro = null) {
    const feed = document.getElementById("feed");

    let posts = JSON.parse(localStorage.getItem("posts")) || [];

    // Apenas aplica filtro se filtro não for null
    if (filtro !== null && filtro.trim() !== "") {
        const termo = filtro.toLowerCase();

        posts = posts.filter(post =>
            post.texto.toLowerCase().includes(termo) ||
            post.genero.toLowerCase().includes(termo)
        );
    }

    // Se não houver posts → mensagem
    if (posts.length === 0) {
        feed.innerHTML = "<p>Nenhuma publicação encontrada.</p>";
        return;
    }

    // Limpa o feed
    feed.innerHTML = "";

    // Monta cada publicação
    posts.forEach(post => {
        const caixa = document.createElement("div");
        caixa.classList.add("caixa-destaque", "user-post");

 caixa.innerHTML = `
    <img src="${post.imagem}" alt="Imagem do livro">
    <div class="overlay">
        <p><strong>Autor:</strong> ${post.Autor}</p>
        <p>${post.texto.substring(0, 150)}...</p>
        <p><strong>Gênero:</strong> ${post.genero}</p>
        <span>${post.data}</span>
    </div>
`;


        caixa.addEventListener("click", () => {
            localStorage.setItem("postSelecionado", JSON.stringify(post));
            window.location.href = "./Detalhes.html";
        });

        feed.appendChild(caixa);
    });
}

window.addEventListener("load", () => {
    carregarFeed(); 
});



document.addEventListener("DOMContentLoaded", () => {
    const campo = document.getElementById("campoBusca");
    const botao = document.getElementById("btnBuscar");

    botao.addEventListener("click", () => {
        const termo = campo.value.trim();

        if (termo === "") {
            carregarFeed(); 
        } else {
            carregarFeed(termo); 
        }
    });

    
    campo.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
            const termo = campo.value.trim();

            if (termo === "") {
                carregarFeed();
            } else {
                carregarFeed(termo);
            }
        }
    });
});
