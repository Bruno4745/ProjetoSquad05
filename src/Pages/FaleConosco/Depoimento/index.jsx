import React from 'react';
import { Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Depoimento from '../../../Components/Depoimento';

const Depoimentos = () => {

    // Definindo um state vazio
    const [dadosForm] = useState({
        depoimento: ''
    })

    // Inserindo os valores no state
    function handleChange(evento){
        dadosForm[evento.target.name] = evento.target.value;
        console.log(dadosForm);
    }

    const enviaDepoimento = async (evento) => {
        const url = "http://app-6025a955-23b3-45e3-97e3-0b617e91beec.cleverapps.io/faleconosco/depoimento";
        await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(dadosForm)
        });
    }

    const [depoimentos, setDepoimentos] = useState([]);

    useEffect(() => {
        async function fethData() {
            const url = "http://app-6025a955-23b3-45e3-97e3-0b617e91beec.cleverapps.io/faleconosco/depoimento";
            const resposta = await fetch(url);
            const resultado = await resposta.json();
            setDepoimentos(resultado);
        }
        fethData();
    }, []);

    return(
        <>
            <h2>Deixe seu depoimento!</h2>
            <Form onSubmit={enviaDepoimento}>
                <Form.Group>
                    <Form.Control id="depoimento" name="depoimento" as="textarea" rows={5} placeholder="Escreva uma mensagem aqui" onChange={handleChange} required />
                </Form.Group>
                <Form.Group>
                    <button className="btn-purple" type="submit">Enviar</button>
                </Form.Group>
            </Form>
            <h2>Depoimentos enviados:</h2>
            {depoimentos && depoimentos.map(item => <Depoimento key={item.id_depoimentos} id={item.id_depoimentos} depoimento={item.depoimento}/>)}
        </>
    )
};

export default Depoimentos;