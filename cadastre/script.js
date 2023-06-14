function ins() {
    var email = document.getElementById("email").value;

    // Aqui você pode realizar a validação do usuário e senha
    // Por exemplo, comparando com valores pré-definidos ou fazendo uma requisição para um servidor

    if (email === "joao@unicap.br") {
      alert("Sua inscrição foi concluida com sucesso!");
      // Aqui você pode redirecionar para uma página interna ou executar outras ações necessárias
    } else {
      alert("Ocorreu um erro. Por favor, tente novamente mais tarde.");
    }
  }
  function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Aqui você pode realizar a validação do usuário e senha
    // Por exemplo, comparando com valores pré-definidos ou fazendo uma requisição para um servidor

    if (username === "joao" && password === "1234") {
      alert("Login bem-sucedido!");
      // Aqui você pode redirecionar para uma página interna ou executar outras ações necessárias
    } else {
      alert("Usuário ou senha inválidos. Tente novamente!");
    }
  }
   