import { useEffect, useState } from 'react';
import Cliente from '../core/Cliente';
import ClienteRespositorio from '../core/ClienteRepositorio';
import ColecaoCliente from '../backend/db/ColecaoCliente';
import useTabelaOuForm from './useTabelaOuForm';

export default function useClientes() {
    const repo: ClienteRespositorio = new ColecaoCliente();

    const { tabelaVisivel, exibirTabela, exibirFormulario } = useTabelaOuForm();

    const [cliente, setCliente] = useState(Cliente.vazio());
    const [clientes, setClientes] = useState<Cliente[]>([]);

    useEffect(obterTodos, []);

    function obterTodos() {
        repo.obterTodos().then(clientes => {
            setClientes(clientes);
            exibirTabela();
        });
    }

    function novoCliente() {
        setCliente(Cliente.vazio())
        exibirFormulario();
    }

    function selecionarCliente(cliente: Cliente) {
        setCliente(cliente);
        exibirFormulario();
    }

    async function excluirCliente(cliente: Cliente) {
        await repo.excluir(cliente);
        obterTodos();
    }

    async function salvarCliente(cliente: Cliente) {
        await repo.salvar(cliente);
        obterTodos()
    }

    return {
        cliente,
        clientes,
        novoCliente,
        salvarCliente,
        excluirCliente,
        selecionarCliente,
        obterTodos,
        tabelaVisivel,
        exibirTabela,
    }
}