import { useState } from 'react';
import Cliente from '../core/Cliente';
import Entrada from './Entrada';
import Botao from '../components/Botao';

interface FormularioProps {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void
}

const Formulario = (props: FormularioProps) => {
    const id = props.cliente?.id ?? null;
    const [nome, setNome] = useState(props.cliente?.nome ?? '');
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0);

    return (
        <div>
            {id ? (
                <Entrada texto='ID' tipo='text' valor={id} somenteLeitura className='mb-5' />
            ) : false}
            <Entrada texto='Nome' tipo='text' valor={nome} valorAlterado={setNome} className='mb-5' />
            <Entrada texto='Idade' tipo='number' valor={idade} valorAlterado={setIdade} />

            <div className='flex justify-end mt-3'>
                <Botao cor='blue' className='mr-2' onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao cor='gray' className='ml-2' onClick={props.cancelado}>Cancelar</Botao>
            </div>
        </div>
    )
}

export default Formulario;