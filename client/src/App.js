import './App.css'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import Footer from './components/footer/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from './context/authContext/AuthContext'
import AuthHeader from './components/auth_header/AuthHeader'
import Dashboard from './pages/dashboard/Dashboard'
import IDashboard from './pages/dashboard/IDashboard'
import Siderbar from './components/sidebar/Siderbar'
import NewOrder from './pages/newOrder/NewOrder'
import MyOrders from './pages/myOrders/myOrders'
import Tickets from './pages/tickets/Tickets'
import NewTicket from './pages/newTicket/NewTicket'
import TrackMyOrders from './pages/trackMyOrders/TrackMyOrders'
import TicketDetails from './pages/ticketDetails/TicketDetails'

function App () {
  const { user } = useContext(AuthContext)
  const renderDashboard = isAdmin => {
    return isAdmin ? (
      <Redirect to='/idashboard' />
    ) : (
      <Redirect to='/dashboard' />
    )
  }

  const renderPath = (isAdmin, path) => {
    return isAdmin ? <Redirect to='/idashboard' /> : path
  }
  return (
    <Router>
      {user ? (
        <>
          <AuthHeader />
          <Siderbar />
        </>
      ) : (
        <Header />
      )}
      <Switch>
        <Route path='/' exact>
          {!user ? <Home /> : renderDashboard(user.isAdmin)}
        </Route>
        <Route path='/register' exact>
          {!user ? <Register /> : renderDashboard(user.isAdmin)}
        </Route>
        <Route path='/login' exact>
          {!user ? <Login /> : renderDashboard(user.isAdmin)}
        </Route>

        <Route path='/dashboard' exact>
          {!user ? <Login /> : !user.isAdmin ? <Dashboard /> : <IDashboard />}
        </Route>
        <Route path='/idashboard' exact>
          {!user ? <Login /> : user.isAdmin ? <IDashboard /> : <Dashboard />}
        </Route>

        <Route path='/newOrder' exact>
          {!user ? <Login /> : renderPath(user.isAdmin, <NewOrder />)}
        </Route>
        <Route path='/myOrders' exact>
          {!user ? <Login /> : renderPath(user.isAdmin, <MyOrders />)}
        </Route>
        <Route path='/newTicket' exact>
          {!user ? <Login /> : renderPath(user.isAdmin, <NewTicket />)}
        </Route>
        <Route path='/trackMyOrders' exact>
          {!user ? <Login /> : renderPath(user.isAdmin, <TrackMyOrders />)}
        </Route>

        <Route path='/tickets/:id' exact>
          {!user ? <Login /> : <TicketDetails />}
        </Route>

        <Route path='/tickets' exact>
          {!user ? <Login /> : <Tickets />}
        </Route>
      </Switch>
      {user ? '' : <Footer />}
    </Router>
  )
}

export default App
