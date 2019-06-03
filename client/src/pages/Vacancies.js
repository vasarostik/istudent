import React, { Component } from 'react';
import '../css/Vacancies.css';
import { CardDeck, Card } from 'react-bootstrap';
import { AuthNavbar } from '../components/AuthNavbar';
import { getJwt } from '../helpers/jwt';

export class Vacancies extends Component {
    constructor() {
        super();
        this.state = {
            vacancies: [],
        };

    }

    componentDidMount() {

        let token  = getJwt();
        fetch('/vacancy', { 
            method: 'get', 
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                Authorization: `Bearer ${token}`
            })
          }).then(results => {

                console.log('dsd' + results);
                return results.json();
            }).then(data => {
                let vacancies = data.map((vac) => {
                    return (
                        <Card style={{ flex: '0 0 500px', marginTop: '50px' }}>
                            <Card.Body>
                                <div style={{ margin: '0 10px', fontWeight: '600', fontSize: '16px' }}>
                                    <p style={{ float: 'left', color: '#78cc1f' }}>position</p>
                                    <p style={{ float: 'right', color: '#78cc1f' }}>Company<span style={{ paddingLeft: '65px', marginRight: '42px' }}>$</span></p>
                                </div>
                                <div style={{ marginLeft: '10px', marginTop: '5vh', paddingBottom: '5vh' }}>
                                    <Card.Title style={{ float: 'left' ,fontSize: '14px'}}>{vac.Position.name}</Card.Title>
                                    <Card.Title style={{ float: 'right', textTransform: 'uppercase', fontSize: '14px' }}>{vac.Company.name}<span style={{ paddingLeft: '76px', marginRight: '10px  ' }}>{vac.salaryFrom} - {vac.salaryTo}</span></Card.Title>
                                </div>
                                <p style={{ margin: '0 10px', fontWeight: '600', fontSize: '16px', float: 'left', color: '#78cc1f' }}>required skills</p>
                                <ul className="reqs" style={{ marginTop: '5vh', marginLeft: '-25px' }}>
                                    <li><span>{vac.detail}</span></li>
                                </ul>
                            </Card.Body>
                            <button className="applyBtn">Apply</button>
                        </Card>
                    )
                })
                this.setState({ vacancies: vacancies });
                console.log("state", this.state.vacancies);
            })
    }

    render() {

        return (
            <div className="bodybg">
                <AuthNavbar style={{ boxShadow: "none" }} />
                {/* main container */}
                <div className="vacancies">
                    <CardDeck style={{ width: '100%', display: 'flex', flexWrap: 'wrap', alignItems: 'stretch' }}>
                        {this.state.vacancies}
                    </CardDeck>
                </div>
                {/* end of main container */}
            </div>
        );
    }
}