import React, { useState } from 'react'

import logoImg from '../../assets/logo.svg'
import './style.css';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function NovoProcesso() {
    const [title, setTitle] = useState('');
    const [descricao, setDescricao] = useState('');


    async function hadlerNewIncident(e) {
        e.preventDefault();

        const data = {
            title,
            descricao
        }
        try {

        } catch (error) {
            alert('algo deu errado :(');
        }
    }

    return (
        <div className="new-incident">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />
                    <h1>Cadastrar Processo</h1>
                    <p>
                        Descreva o JSON que vai ser processado e manda bala
                    </p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#FFA500" />
                        Voltar para Home
                    </Link>
                </section>
                <form onSubmit={hadlerNewIncident}>
                    <input placeholder="Nome do Processo " value={title} onChange={e => setTitle(e.target.value)} />
                    <textarea placeholder="descrição" value={descricao} onChange={e => setDescricao(e.target.value)}></textarea>
                    <button className="button">
                        Cadastrar
            </button>
                </form>
            </div>
        </div>
    );
}