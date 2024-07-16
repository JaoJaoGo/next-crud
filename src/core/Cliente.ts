import React from 'react';

class Cliente {
    #id: string;  // O '#' é como se fosse um 'private', está sendo utilizado para poder criar, por exemplo, 'get id()' sem
    #nome: string // gerar problemas de nomes duplicados, deve alterar o tsconfig.json, adicionando target: "ES2015"...
    #idade: number;

    constructor(nome: string, idade: number, id: string = null) {
        this.#nome = nome;
        this.#idade = idade;
        this.#id = id;
    }

    static vazio() {
        return new Cliente('', 0);
    }

    get id() {
        return this.#id;
    }

    get nome() {
        return this.#nome;
    }

    get idade() {
        return this.#idade;
    }
}

export default Cliente;