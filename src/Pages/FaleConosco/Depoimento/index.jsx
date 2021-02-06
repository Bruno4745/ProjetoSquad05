import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Depoimento from '../../../Components/Depoimento';

const Depoimentos = () => {

    const enviaDepoimento = async (evento) => {
        const url = "http://localhost/ProjetoSquad05/php/api/depoimento.php";
        const dados = new FormData(evento.target);
        await fetch(url, {
            method: "POST",
            body: dados
        });
    }

    const [depoimentos, setDepoimentos] = useState([]);

    useEffect(() => {
        async function fethData() {
            const url = "http://localhost/ProjetoSquad05/php/api/depoimento.php";
            const resposta = await fetch(url);
            const resultado = await resposta.json();
            setDepoimentos(resultado);
        }
        fethData();
    }, []);

    return(
        <Container>
            <Form onSubmit={enviaDepoimento} className="my-4">
                <h2>Deixe seu depoimento!!!</h2>
                <Form.Group>
                    <Form.Control id="depoimento" name="depoimento" className="mb-3" as="textarea" rows={5} placeholder="Escreva uma mensagem aqui" required />
                </Form.Group>
                <Form.Group>
                    <Button type="submit">Enviar</Button>
                </Form.Group>
            </Form>
            <h2>Depoimentos enviados:</h2>
            {depoimentos && depoimentos.map(item => <Depoimento key={item.id_depoimentos} id={item.id_depoimentos} depoimento={item.depoimento}/>)}
        </Container>
    )
};

export default Depoimentos;