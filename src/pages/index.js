import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
	return (
		<div className='container mx-auto p-4'>
			<Head>
				<title></title>
				<meta name='description' content='A demo application for React Flow' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<h1 className='text-4xl font-bold mb-4'>React Flow Demo- Exemplos</h1>
				<div className='grid grid-cols-2 gap-4 '>
					<Link href='/flowchart'>
						<p className='block p-4 bg-blue-500 text-white rounded text-center'>
							Diagrama de Fluxo de Trabalho
						</p>
					</Link>
					<Link href='/dependency-map'>
						<p className='block p-4 bg-green-500 text-white rounded text-center'>
							Mapa de Dependências
						</p>
					</Link>
					<Link href='/data-flow-editor'>
						<p className='block p-4 bg-orange-500 text-white rounded text-center'>
							Editor de Fluxos de Dados
						</p>
					</Link>
					<Link href='/metrics-dashboard'>
						<p className='block p-4 bg-purple-500 text-white rounded text-center'>
							Dashboard de Métricas
						</p>
					</Link>
					<Link href='/relationships'>
						<p className='block p-4 bg-red-500 text-white rounded text-center'>
							Visualização de Relações entre Entidades
						</p>
					</Link>
				</div>
			</main>
		</div>
	);
}
