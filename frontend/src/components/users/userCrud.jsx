import React from 'react';
import Main from '../template/main';
import api from '../../services/api';

const headerProps = {
	icon: 'users',
	title: 'Usuários',
	subtitle: 'Cadastro de Usuários: Incluir, Lista, Alterar e Excluir'
}

const initalState = {
	user: {name: '', email:''},
	list:[]
}

export default class userCrud extends React.Component {
	state = {...initalState};

	clear(){
		this.setState({ user: initalState.user});
	}

	async componentWillMount(){
		const list = await api.get('/users');
		this.setState({list:list.data});
	}

	async save(){
		const user = this.state.user;
		const method = user.id ? 'put' : 'post';
		const url = user.id ? `/users/${user.id}` : `/users`;
		try{
			const resp = await api[method](url, user);
			const list = this.getUpdatedList(resp.data);
			
			this.setState({user:initalState.user, list});

		}catch(e){
			alert("Algo inesperado aconteceu")
			this.props.history.push("/");
		}
	}

	updateField(event){
		const user = {...this.state.user};
		user[event.target.name] = event.target.value;
		this.setState({user});

	}

	getUpdatedList(user, add =true){
		const list = this.state.list.filter(u => u.id !== user.id);
		if(add) list.unshift(user);
		return list;
	}

	load(user){
		this.setState({user});
	}

	async remove(user){
		await api.delete(`/users/${user.id}`);
		const list = this.getUpdatedList(user, false); //nao entendi
		this.setState({list})
	}

	renderTable(){
		return (
			<div className="table-responsive-sm">
				<table className="table mt-4">
					<thead>
						<tr>
							<th>#</th>
							<th>Nome</th>
							<th>Email</th>
							<th>Ações</th>
						</tr>
					</thead>	
					<tbody>
						{this.renderRows()}
					</tbody>
					
				</table>
			</div>
		);
	}

	renderRows(){
		return this.state.list.map(user => {
			return (
				<tr key={user.id}>
					<td>{user.id}</td>
					<td>{user.name}</td>
					<td>{user.email}</td>
					<td>
						<button className="btn btn-warning" onClick={() => this.load(user)}>
							<i className="fa fa-pencil" />
						</button>
						<button className="btn btn-danger ml-2" onClick={() => this.remove(user)}>
							<i className="fa fa-trash" />
						</button>
					</td>
				</tr>
			)
		});
	}

	renderForm(){
		return (
			<div className="form">
				<div className="row">
					<div className="col-12 col-md-6">
						<div className="form-group">
							<label>Nome:</label>
							<input type="text" className="form-control" name="name" value={this.state.user.name} onChange={(e) => this.updateField(e)} placeholder="Digite o nome ..." />
						</div>
					</div>
					<div className="col-12 col-md-6">
						<div className="form-group">
							<label>Email:</label>
							<input type="text" className="form-control" name="email" value={this.state.user.email} onChange={(e) => this.updateField(e)} placeholder="Digite o email ..." />
						</div>
					</div>
				</div>
				<hr />
				<div className="row">
					<div className="col-12 d-flex justify-content-end">
						<button className="btn btn-primary" onClick={e => this.save(e)}>Salvar</button>
						<button className="btn btn-dark ml-2" onClick={e => this.clear(e)}>Cancelar</button>
					</div>
				</div>
			</div>
		)
	}

	render() {
		console.log(this.state.list);
		return (
			<Main {...headerProps}>
				Cadastro de Usuário
				<hr />
				{this.renderForm()}
				{this.renderTable()}
			</Main>
		);
	}
}
