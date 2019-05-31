import React, { Component } from 'react';
import '../css/Vacancies.css';
import { CardDeck, Card } from 'react-bootstrap';
import { AuthNavbar } from '../components/AuthNavbar';

export class Vacancies extends Component {

    render() {

        return (
            <div className="Vacancies">
                <AuthNavbar style={{ boxShadow: "none" }} />
                {/* main container */}
                <div className="vacancies">
                    <CardDeck style={{ width: '100%', display: 'flex', flexWrap: 'wrap', alignItems: 'stretch' }}>
                        <Card style={{ flex: '0 0 500px', marginTop: '50px' }}>
                            <Card.Body>
                                <div style={{ margin: '0 10px', fontWeight: '600', fontSize: '16px' }}>
                                    <p style={{ float: 'left', color: '#78cc1f' }}>position</p>
                                    <p style={{ float: 'right', color: '#78cc1f' }}>location <span style={{ paddingLeft: '50px', marginRight: '20px' }}>$</span></p>
                                </div>
                                <div style={{ marginLeft: '10px', marginTop: '5vh', paddingBottom: '5vh' }}>
                                    <Card.Title style={{ float: 'left' }}>C++ Developer</Card.Title>
                                    <Card.Title style={{ float: 'right', textTransform: 'uppercase' }}>Lviv <span style={{ paddingLeft: '70px', marginRight: '10px  ' }}>800</span></Card.Title>
                                </div>
                                <p style={{ margin: '0 10px', fontWeight: '600', fontSize: '16px', float: 'left', color: '#78cc1f' }}>required skills</p>
                                <ul className="reqs" style={{  marginTop: '5vh', marginLeft: '-25px' }}>
                                    <li><span>blablabalblabla ablba ablab ablaa</span></li>
                                </ul>
                            </Card.Body>
                            <button className="applyBtn">Apply</button>
                        </Card>
                    </CardDeck>
                </div>
                {/* end of main container */}
            </div>
        );
    }
}