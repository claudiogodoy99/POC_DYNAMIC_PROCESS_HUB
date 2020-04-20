import React from 'react'

import { AiFillCheckCircle,AiFillCloseCircle } from 'react-icons/ai'
import {Link} from 'react-router-dom'
import logoImg from '../../assets/logo.svg';
import './style.css';

export default function Processos() {
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span> Bem vindo </span>
                <Link to="/novo" className="button" > Cadastrar Novo Caso</Link>
            </header>
            <h1>PROCESSOS CADASTRADOS</h1>
            <ul>
                <li>
                    <strong>PROCESSO:</strong>
                    <p>CALCULADOR DE SWAPS</p>
                    <strong>DESCRICAO:</strong>
                    <p>CALCULAR CAMPOS SECUNDARIOS E TERNARIOS DO SWAP</p>
                    <button >
                        <AiFillCheckCircle size={20} color="#32CD32" />
                    </button>
                </li>
                <li>
                    <strong>PROCESSO:</strong>
                    <p>CALCULADOR DE SWAPS</p>
                    <strong>DESCRICAO:</strong>
                    <p>CALCULAR CAMPOS SECUNDARIOS E TERNARIOS DO SWAP</p>
                    <button >
                        <AiFillCheckCircle size={20} color="#32CD32" />
                    </button>
                </li>
                <li>
                    <strong>PROCESSO:</strong>
                    <p>CALCULADOR DE SWAPS</p>
                    <strong>DESCRICAO:</strong>
                    <p>CALCULAR CAMPOS SECUNDARIOS E TERNARIOS DO SWAP</p>
                    <button >
                        <AiFillCloseCircle size={20} color="#32CD32" />
                    </button>
                </li>
                <li>
                    <strong>PROCESSO:</strong>
                    <p>CALCULADOR DE SWAPS</p>
                    <strong>DESCRICAO:</strong>
                    <p>CALCULAR CAMPOS SECUNDARIOS E TERNARIOS DO SWAP</p>
                    <button >
                        <AiFillCloseCircle size={20} color="#FF0000" />
                    </button>
                </li>
            </ul>
        </div>
    );
}