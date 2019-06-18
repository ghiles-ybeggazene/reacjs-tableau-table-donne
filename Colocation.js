import React, { Component } from 'react';


class Colocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [
	
	            {   
                id: 1,
                name: "Réservation instantanée",
                standard: "done",
                premium: "done",
                allinclusive: "done",
                },
				
				{   
                id: 1,
                name: "Réservation instantanée",
                standard: "done",
                premium: "done",
                allinclusive: "done",
                },
				
				{   
                id: 1,
                name: "Réservation instantanée",
                standard: "done",
                premium: "done",
                allinclusive: "done",
                },
				
				{   
                id: 1,
                name: "Réservation instantanée",
                standard: "done",
                premium: "done",
                allinclusive: "done",
                },
				
				{   
                id: 1,
                name: "Réservation instantanée",
                standard: "done",
                premium: "done",
                allinclusive: "done",
                },
				
				
	
	               
	
	] };
  }

 
  render() {
   

    return (
      <div class="App">
        <header class="App-header">
          <h1 class="App-title">colocaction Services</h1>
        </header>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>SERVICES</th>
                <th>STANDARD</th>
                <th>PREMIUM</th>
                <th>ALL INCLUSIVE</th>
              </tr>
            </thead>
            {this.state.users.map(user => {
              return (
                <tbody>
                    <tr key={user.id}>
		    <td>{user.name}</td>
                    <td>{user.standard}</td>
                    <td>{user.premium}</td>
		    <td>{user.allinclusive}</td>
                   
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    );
  }
}



export default Colocation;
