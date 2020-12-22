import { Card } from 'react-bootstrap'

export default function Depoimento(props){
    return(
        <Card className="mt-1">
            <Card.Header>
                <h4>Anonimo {props.id} diz:</h4>
            </Card.Header>
            <Card.Body>
                <p>{props.depoimento}</p>
            </Card.Body>
        </Card>
    )
}