import { Switch, Route } from 'react-router-dom'

import Denuncia from './Pages/Denuncia'
import Depoimentos from './Pages/Depoimentos'
import faleConosco from './Pages/FaleConosco'
import Home from './Pages/Home'
import GestanteMae from './Pages/InfoGestante/'
import InfoProfissional from './Pages/InfoProfissional'
import ProcurarAjuda from './Pages/ProcurarAjuda'

const Routes = () => {
    return(
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/gestantemae' component={GestanteMae} />
            <Route exact path='/profissional' component={InfoProfissional} />
            <Route exact path='/procurarAjuda' component={ProcurarAjuda} />
            <Route exact path='/depoimentos' component={Depoimentos} />
            <Route exact path='/faleConosco' component={faleConosco} />
            <Route exact path='/denuncia' component={Denuncia} />
        </Switch>
    )
}

export default Routes