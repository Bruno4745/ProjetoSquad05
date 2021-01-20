import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Depoimento from '../../Components/Depoimento';

const Depoimentos = () => {

    const enviaDepoimento = async (evento) => {
        const url = "https://unfadable-air.000webhostapp.com/api/depoimento.php";
        const dados = new FormData(evento.target);
        await fetch(url, {
            method: "POST",
            body: dados
        });
    }

    const [depoimentos, setDepoimentos] = useState([]);

    useEffect(() => {
        async function fethData() {
            const url = "https://unfadable-air.000webhostapp.com/api/depoimento.php";
            const resposta = await fetch(url);
            const resultado = await resposta.json();
            setDepoimentos(resultado);
        }
        fethData();
    }, []);

    return(
        <Container>
            <Form onSubmit={enviaDepoimento} className="my-4">
                <h2>Conte sua história</h2>
                <Form.Group>
                    <Form.Control id="depoimento" name="depoimento" className="mb-3" as="textarea" rows={5} placeholder="Gostaria de compartilhar conosco como foi o seu processo de adoção?" required />
                </Form.Group>
                <Form.Group>
                    <Button type="submit">Enviar</Button>
                </Form.Group>
            </Form>
            <h2>Nossas histórias</h2>
            {depoimentos && depoimentos.map(item => <Depoimento key={item.id_depoimentos} id={item.id_depoimentos} depoimento={item.depoimento}/>)}
        </Container>
    )
};

export default Depoimentos;