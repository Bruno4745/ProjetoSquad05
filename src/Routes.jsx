import { Switch, Route } from 'react-router-dom'

import Denuncia from './Pages/Denuncia'
import Depoimentos from './Pages/Depoimentos'
import Contatos from './Pages/Contatos'
import Home from './Pages/Home'
import GestanteMae from './Pages/InfoGestante/'
import InfoProfissional from './Pages/InfoProfissional'
import ProcurarAjuda from './Pages/ProcurarAjuda/index'
import ProcurarAjudaAdm from './Pages/ProcurarAjuda/adm'
import SobreNos from './Pages/SobreNos'
import Legislacao from './Pages/Legislacao'
const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/gestantemae' component={GestanteMae} />
            <Route exact path='/profissional' component={InfoProfissional} />
            <Route exact path='/procurarAjuda' component={ProcurarAjuda} />
            <Route exact path='/procurarAjudaAdm' component={ProcurarAjudaAdm} />
            <Route exact path='/depoimentos' component={Depoimentos} />
            <Route exact path='/contatos' component={Contatos} />
            <Route exact path='/denuncia' component={Denuncia} />
            <Route exact path='/sobrenos' component={SobreNos} />
            <Route exact path='/legislacao' component={Legislacao} />
        </Switch>
    )
}

export default Routes