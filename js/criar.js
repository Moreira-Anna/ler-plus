function publicar() {
    const Autor = document.getElementById("Autor").value.trim();
    const resumo = document.getElementById("resumo").value.trim();
    const genero = document.getElementById("Conteúdo").value;
    const imagemInput = document.getElementById("imageInput");

    if (!resumo || !genero) {
        alert("Por favor, preencha o resumo e selecione o gênero.");
        return;
    }

    let imagemBase64 = "";

    const reader = new FileReader();
    reader.onload = function (event) {
        imagemBase64 = event.target.result;

        const novoPost = {
            Autor: Autor,
            texto: resumo,
            genero: genero,
            imagem: imagemBase64,
            data: new Date().toLocaleString()
        };

        let posts = JSON.parse(localStorage.getItem("posts")) || [];

        posts.unshift(novoPost);

        localStorage.setItem("posts", JSON.stringify(posts));

        alert("Publicado com sucesso!");

        document.getElementById("Autor").value = "";
        document.getElementById("resumo").value = "";
        document.getElementById("Conteúdo").value = "";
        document.getElementById("imageInput").value = "";
    };

    if (imagemInput.files.length > 0) {
        reader.readAsDataURL(imagemInput.files[0]);
    } else {
        alert("Escolha uma imagem antes de publicar.");
    }
}
