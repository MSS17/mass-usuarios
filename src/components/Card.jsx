import './Card.css';

function Card({id,name,image,activo,cambiarEstado,}) {
	const cambiandoEstado = (id) => {
		cambiarEstado(id);
	};
	let className = activo ? '' : ' disabled ';
	return (
		<article className='card'>
			<div>
				{id ? (
					<img
						onClick={() => cambiandoEstado(id)}
						src={image}
						className={'card-img-top ' + className}
						alt=''
					/>
				) : (
					<img
						src='https://cuv.upc.edu/es/shared/imatges/fotos-professorat-i-professionals/anonimo.jpg'
						className={'card-img-top ' + className}
						alt=''
					/>
				)}
				<h2 className='card-title-user'>
					{activo ? name : 'Suspendida'}
				</h2>
			</div>
		</article>
	);
}

export default Card;
