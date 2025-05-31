function SaudacaoUsuario(props) {
  return <p>Olá, {props.nome}! Bem-vindo(a)!</p>;
}

function ProfileCard(props) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
      <img src={props.foto} alt="Foto de perfil" width="100" />
      <h2>{props.nome}</h2>
      <p>Idade: {props.idade}</p>
      <p>{props.bio}</p>
    </div>
  );
}

function Wrapper(props) {
  return (
    <div style={{ border: '2px dashed blue', padding: '10px', margin: '10px' }}>
      {props.children}
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Exercícios da Aula 13</h1>
      <SaudacaoUsuario nome="Renan" />
      <SaudacaoUsuario nome="Turma LPV" />

      <ProfileCard
        nome="Renan Morano"
        idade={17}
        bio="Estudante de informática e futuro dev full stack."
        foto="https://via.placeholder.com/150"
      />

      <Wrapper>
        <p>Texto dentro de um wrapper!</p>
      </Wrapper>

      <Wrapper>
        <ProfileCard
          nome="Maria Oliveira"
          idade={22}
          bio="Designer e entusiasta de UI/UX."
          foto="https://via.placeholder.com/150"
        />
      </Wrapper>
    </div>
  );
}