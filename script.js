
  const loginLink = document.getElementById("login-link");
  const criarContaLink = document.getElementById("criar-conta-link");
  const loginSection = document.getElementById("login");
  const criarContaSection = document.getElementById("criar-conta");
  const banner= document.getElementById("escolhas")
  

  loginLink.addEventListener("click", function(event) {
    event.preventDefault();
    loginSection.classList.toggle("ocultar");
    criarContaSection.classList.add("ocultar");
  });
  

  criarContaLink.addEventListener("click", function(event) {
    event.preventDefault();
    criarContaSection.classList.toggle("ocultar");
    loginSection.classList.add("ocultar");
    banner.classList.add("ocultar");
    
  });

  function cadastrar() {
    const novoNomeUsuario = document.getElementById("novo-nome-usuario").value;
    const novaSenha = document.getElementById("nova-senha").value;

    if (novoNomeUsuario.trim() === "" || novaSenha.trim() === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    } 

    if (novaSenha.length < 6) {
      alert("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    const usuariosArmazenados = JSON.parse(localStorage.getItem("usuarios")) || {};
    
    if (usuariosArmazenados[novoNomeUsuario]) {
      alert("Nome de usuário já existe. Por favor, escolha outro.");
    } else {
      usuariosArmazenados[novoNomeUsuario] = { senha: novaSenha };
      localStorage.setItem("usuarios", JSON.stringify(usuariosArmazenados));
      alert("Cadastro realizado com sucesso!");
      alternarFormularios(); 
    }
  }

  function alternarFormularios() {
    loginSection.classList.toggle("ocultar");
    criarContaSection.classList.add("ocultar");
  }

  function entrar() {
    const nomeUsuario = document.getElementById("nome-usuario").value;
    const senha = document.getElementById("senha").value;

    if (nomeUsuario.trim() === "" || senha.trim() === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const usuariosArmazenados = JSON.parse(localStorage.getItem("usuarios")) || {};
    const dadosUsuarioArmazenados = usuariosArmazenados[nomeUsuario];

    if (dadosUsuarioArmazenados && dadosUsuarioArmazenados.senha === senha) {
alert("Login bem-sucedido!");


    if (dadosUsuarioArmazenados.escolha) {
      alert(`Sua escolha anterior foi: ${dadosUsuarioArmazenados.escolha}`);
    } else {
      alert("Você ainda não fez uma escolha.");
      mostrarEscolhas(dadosUsuarioArmazenados.escolha); 
    }

      mostrarEscolhas(dadosUsuarioArmazenados.escolha); 
    }

    else {
      alert("Nome de usuário ou senha incorretos. Por favor, tente novamente.");
    }
  }

  function selecionarEscolha(escolha) {
    const nomeUsuario = document.getElementById("nome-usuario").value;
    const usuariosArmazenados = JSON.parse(localStorage.getItem("usuarios")) || {};
    const dadosUsuarioArmazenados = usuariosArmazenados[nomeUsuario];

    if (dadosUsuarioArmazenados) {
      dadosUsuarioArmazenados.escolha = escolha;
      localStorage.setItem("usuarios", JSON.stringify(usuariosArmazenados));
      alert(`Você escolheu a opção ${escolha}.`);
      mostrarEscolhas(escolha);
    } else {
      alert("Erro ao recuperar o perfil do usuário.");
    }
  }

  function mostrarEscolhas(escolhaAnterior) {
    const escolhas = document.getElementById("escolhas");
    escolhas.classList.remove("ocultar");
  
    const todasEscolhas = document.querySelectorAll(".caixa");
    todasEscolhas.forEach((c) => {
      c.style.display = "inline-block";
      if (escolhaAnterior && !c.classList.contains(escolhaAnterior)) {
        c.style.display = "none"; 
      }
    });
  } 

function aumentar(elemento) {
    elemento.style.width = "300px"; 
    elemento.style.height = "300px"; 
}

function normal(elemento) {
    elemento.style.width = "100px"; 
    elemento.style.height = "100px";
} 

const logoutLink = document.getElementById("logout-link");
logoutLink.addEventListener("click", function(event) {
  event.preventDefault(); 
  window.location.href = "index.html";
});

function apagarDadosSalvos() {
    localStorage.clear();
    alert("Todos os dados salvos foram apagados.");
}