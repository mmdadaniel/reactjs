
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

export default props =>
    <div className="app">
        <Header />
        <Card title="#1 componente">
            <First />
        </Card>
        <Card title="#2 componente">
            <Second></Second>
        </Card>
        <Card title="#3 componente (com parâmetros)">
            <WithParameters 
                title="Título aqui"
                subtitle="Subtítulo aqui" />
            <WithParameters 
            title="Segundo título aqui"
            subtitle="Segundo subtítulo aqui" />
        </Card>
        <Card title="#4 componente (com filhos)">
            <WithChildren>
                <ul>
                    <li>Ana</li>
                    <li>Bruna</li>
                    <li>Carla</li>
                    <li>Dana</li>
                </ul>
            </WithChildren>
        </Card>
    </div>