import { Switch, Route } from 'react-router-dom'

import Denuncia from './Pages/Denuncia'
import Depoimentos from './Pages/Depoimentos'
import faleConosco from './Pages/FaleConosco'
import Home from './Pages/Home'
import Informativo from './Pages/Informativo'
import ProcurarAjuda from './Pages/ProcurarAjuda'

const Routes = () => {
    return(
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/informativo' component={Informativo} />
            <Route exact path='/procurarAjuda' component={ProcurarAjuda} />
            <Route exact path='/depoimentos' component={Depoimentos} />
            <Route exact path='/faleConosco' component={faleConosco} />
            <Route exact path='/denuncia' component={Denuncia} />
        </Switch>
    )
}

export default Routes