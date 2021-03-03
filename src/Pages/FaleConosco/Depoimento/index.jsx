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
        evento.preventDefault();
        const url = "https://protected-sierra-12413.herokuapp.com/faleconosco/depoimento";
        const resposta = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(dadosForm)
        });
        if(resposta){
          window.location.reload()
        }
    }

    const [depoimentos, setDepoimentos] = useState([]);

    useEffect(() => {
        async function fethData() {
            const url = "https://protected-sierra-12413.herokuapp.com/faleconosco/depoimento";
            const resposta = await fetch(url);
            const resultado = await resposta.json();
            setDepoimentos(resultado);
        }
        fethData();
    }, []);

    return(
        <>
            <h4 style={{color:"rgb(2,155,124)"}}>Deixe seu depoimento!</h4>
            <Form onSubmit={enviaDepoimento} style={textGrey}>
                <Form.Group style={textGrey}>
                    <Form.Control id="depoimento" name="depoimento" as="textarea" rows={5} placeholder="Escreva uma mensagem aqui" onChange={handleChange} required />
                </Form.Group>
                <Form.Group>
                    <button className="btn-purple" type="submit">Enviar</button>
                </Form.Group>
            </Form>
            <h4 style={{color:"rgb(2,155,124)"}}>Depoimentos enviados:</h4>
            {depoimentos && depoimentos.map(item => <Depoimento key={item.id_depoimentos} id={item.id_depoimentos} depoimento={item.depoimento}/>)}
        </>
    )
};

export default Depoimentos;


const textGrey = {
    color:"rgb(166,166,166)"
  }