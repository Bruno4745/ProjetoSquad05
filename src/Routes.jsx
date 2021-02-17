import { Switch, Route } from 'react-router-dom'

import Home from './Pages/Home'
import GestanteMae from './Pages/InfoGestante/'
import InfoProfissional from './Pages/InfoProfissional'
import ProcurarAjuda from './Pages/ProcurarAjuda/index'
import ProcurarAjudaAdm from './Pages/ProcurarAjuda/adm'
import FaleConosco from './Pages/FaleConosco'
import SobreNos from './Pages/SobreNos'
import Legislacao from './Pages/Legislacao'
import Historia from './Pages/historia'
const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/gestantemae' component={GestanteMae} />
            <Route exact path='/profissional' component={InfoProfissional} />
            <Route exact path='/procurarAjuda' component={ProcurarAjuda} />
            <Route exact path='/procurarAjudaAdm' component={ProcurarAjudaAdm} />
            <Route exact path='/sobrenos' component={SobreNos} />
            <Route exact path='/legislacao' component={Legislacao} />
            <Route exact path='/faleConosco' component={FaleConosco} />
            <Route exact path='/historia' component={Historia} />
        </Switch>
    )
}

export default Routes