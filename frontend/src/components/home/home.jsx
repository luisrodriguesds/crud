import React from 'react';
import Main from '../template/main';

const home = (props) => {
  return (
    <Main icon="home" title="Início" subtitle="Laboratório de Raio X - UFC">
		<div className="display-4">Bem Vindo!</div>
		<hr />
		<p className="mb-0">
			Página destinada ao cadastro de usuários do sistema.
		</p>
	</Main>
  )
}

export default home;