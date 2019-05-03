import React, { Component } from 'react';
import { getJwt, getRefreshToken } from '../helpers/jwt';
import axios from 'axios';
import { createBrowserHistory } from 'history';

export class AuthenticatedComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            answer: undefined
        }
    }

    componentDidMount() {
        const history = createBrowserHistory({ forceRefresh: true });

        const jwt = getJwt();

        if (!jwt) {
            history.push('/Login');
            return;
        }

        axios.get('/getToken', { headers: { Authorization: `Bearer ${jwt}` } }).then(res => {

            this.setState({ answer: res.data });
            return res;
        }).catch(err => {

            console.log(err.response);
            
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            history.push('/Login');
            return;
        });
    }

    render() {
        if (this.state.answer === undefined) {
            return (
                <div>
                    <h1> Redirecting ... </h1>
                </div>
            )
        }
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}