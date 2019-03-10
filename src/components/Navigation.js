import React, { Component } from 'react';
import { Route, Link,BrowserRouter as Router,Switch } from 'react-router-dom';
import BoardTask from '../components/BoardTask';
import Countdown from '../components/Countdown';
class Navigation extends Component{
    
/*    classic(){
        return(
            <Router>
            <nav className="navbar navbar-dark bg-dark">
                <a href="chupala.com" className="text-white"><Link to="/">Tasks</Link></a>
                <a href="chupala.com" className="text-white"><Link to="/Countdown">Countdown</Link></a>
                <span  className="badge bagde-pill badge-light ml-2">
                    {this.props.long}
                </span>
            </nav>

            <Route exact path="/" component={App} />
            <Route path="/Countdown" component={Countdown} />
        </Router>
        );
    }

    reactBootstrap(){
        return(
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Navbar>
        );
    }*/
    render(){
        return (
    <Router>
        <div>
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <ul className="navbar-nav">
                <li className="nav-item h2"><Link className="nav-link" to={'/'}> Tasks </Link></li>
                <li className="nav-item h2"><Link className="nav-link" to={'/Countdown'}>Countdown</Link></li>
            </ul>
          </nav>
          <Switch>
              <Route exact path='/' component={BoardTask} />
              <Route path='/Countdown' component={Countdown} />
          </Switch>
        </div>
      </Router>
        );
    }
}

export default Navigation;