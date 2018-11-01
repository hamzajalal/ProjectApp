import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projectsComponents/ProjectList';

class Dashboard extends Component {
    render () {
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList />
                    </div>
                    <div className="col s12 m5 offset-1"></div>
                        <Notifications />
                </div>
            </div>
        )
    }
}

export default Dashboard;