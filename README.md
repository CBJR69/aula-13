*
# Aula 13 - React JS: Props e Children

Este projeto foi feito para praticar o uso de **props** e **props.children** em componentes React usando Babel.

## Componentes

### 1. SaudacaoUsuario
Recebe `nome` como prop e exibe uma saudação personalizada.

### 2. ProfileCard
Exibe nome, idade, bio e uma imagem de perfil baseando-se em props.

### 3. Wrapper
Utiliza `props.children` para envolver qualquer conteúdo passado entre suas tags com uma borda.

## Como executar

Abra o arquivo `index.html` em um navegador moderno.

Não requer nenhum servidor ou configuração extra — usa React e Babel via CDN.

## Exemplo de uso
```jsx
<Wrapper>
  <ProfileCard 
    nome="Lucas" 
    idade={25} 
    bio="Apaixonado por tecnologia e música." 
    foto="https://via.placeholder.com/150" 
  />
</Wrapper>
```

---

## Estrutura do Projeto

```treeview
aula_13
├── App.jsx
├── index.html
├── index.js
└── README.md
```

---

Feito com React, por Renan Morano. 💻🚀
*/
