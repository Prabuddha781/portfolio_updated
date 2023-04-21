import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from "react";
import { inference, modelDownloadInProgress } from '../browser-inference/inference';
import Badge from 'react-bootstrap/Badge';
import classes from './MLinference.module.css';

const MLinference = () => {
    const [ text, setText ] = useState("");
    const [ result, setResult ] = useState(false);

    const infer = (e) => {
        setText(e.target.value);

        (async () => {
            let inferedValue = await inference(e.target.value);
            setResult(inferedValue)
        })()
    }

    return (
    <InputGroup className={`${ classes.container }`}>
        <Form.Control
          className={`w-100`}
          onChange={ (e) => infer(e) }
          value={text}
          placeholder="check if the sentence is hate speech"
        />
        <Form.Label>{result ? 
            <Badge bg="danger">
                Hate speech
            </Badge> :
            <Badge bg="success">
                Not hate speech
            </Badge>}
        </Form.Label>
    </InputGroup>
    )
}

export default MLinference;