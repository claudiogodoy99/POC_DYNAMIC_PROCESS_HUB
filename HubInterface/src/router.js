import React from 'react'; 
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import Processos from './Pages/Processos';
import NovoProcesso from './Pages/novoProcesso';



export default function Router(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Processos}/>
                <Route path="/novo" exact component={NovoProcesso}/>
            </Switch>
        </BrowserRouter>
    );
}