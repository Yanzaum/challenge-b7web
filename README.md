- Quais as partes principais de uma requisição HTTP?
  A linha inicial contendo o verbo (GET, POST, PUT) e o alvo da requsição, normalmente contendo a URL. O cabeçalho HTTP, permitindo realizar requisições condicionais. E o corpo contendo os dados enviados por um formulário, por exemplo.
  <br/>
- Qual a diferença entre colocar um script dentro do "head" e no fim do "body"?
  Colocar o script no fim do body garante que todo conteúdo é carregado antes de carregar o script, mas, quando a página depende de um script para funcionar é colocado no head mesmo.
  <br/>
- Qual a diferença entre display: block e display: inline-block?
  Ao contrário do display: block, o display: inline-block não adiciona uma quebra de linha após o elemento.
  <br/>
- É possível criar um site responsivo SEM media queries? Por que?
  Não, os media queries são necessários para definir condições para o CSS em cenários especificos.
  <br/>
- No Javascript, é obrigatório usar VAR para criar uma variável?
  Não, quando não é declarado o tipo da variável, automaticamente ele atribui como uma váriavel global, mas é aconselhado declarar seu tipo, podendo criar como var, const ou let, a depender da necessidade.
  <br/>
- Criar funções com "function() {}" e com "() => {}" tem alguma diferença além da sintaxe?
  Sim, as arrow functions "() => {}" não tem seu próprio "this", ao contrário da expressão regular "function() {}".
  <br/>
- Explique a lógica pra fazer uma paginação.
  O ponto principal da paginação é não sobrecarregar o banco de dados com requisições de todos os dados de uma só vez, e também para uma melhor experiência do usuário com uma visualização menor e somente com o necessário.
  <br/>
- Qual a melhor forma de armazenar uma imagem no banco de dados?
  Salvar a imagem no servidor e armazenar o caminho para a imagem no banco de dados.
  <br/>
- No React, quantos useEffect eu posso usar?
  Quantos for necessário.
  <br/>
- Quais métodos de requisição preciso para criar um CRUD via API?
  GET, POST, PUT, PATCH, DELETE
