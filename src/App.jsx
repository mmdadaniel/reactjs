
// REACT Libraries
import React from 'react';

// CUSTOM Libraries
import './assets/css/App.css';

// Components
import Header from './components/Header';
import First from './components/First';
import Second from './components/Second';
import WithParameters from './components/WithParameters';
import WithChildren from './components/WithChildren';
import Card from './components/layout/Card';
import Repeater from './components/Repeater';
import Conditional from './components/Conditional';
import ConditionalIf from './components/ConditionalIf';
import DirectCommFather from './components/DirectCommFather';
import IndirectCommFather from './components/IndirectCommFather';

export default (props) => {
    return (
        <div className="app">
            <Header />
            <Card title="#1 componente" number={1}>
                <First />
            </Card>
            <Card title="#2 componente" number={2}>
                <Second></Second>
            </Card>
            <Card title="#3 componente (com parâmetros)" number={3}>
                <WithParameters 
                    title="Título aqui"
                    subtitle="Subtítulo aqui" />
                <WithParameters 
                title="Segundo título aqui"
                subtitle="Segundo subtítulo aqui" />
            </Card>
            <Card title="#4 componente (com filhos)" number={4}> 
                <WithChildren>
                    <ul>
                        <li>Ana</li>
                        <li>Bruna</li>
                        <li>Carla</li>
                        <li>Dana</li>
                    </ul>
                </WithChildren>
            </Card>
            <Card title="#5 Repetidores" number={5}>
                <Repeater />
            </Card>
            <Card title="#6 Condicionais ternárias" number={6}>
                <Conditional number={10} />
            </Card>
            <Card title="#7 Condicionais IF" number={7}>
                <ConditionalIf number={7} />
            </Card>
            <Card title="#8 Comunicação direta" number={8}>
                <DirectCommFather lastname="Matos" />
            </Card>
            <Card title="#8 Comunicação indireta" number={9}>
                <IndirectCommFather />
            </Card>
        </div>
    )
}
    