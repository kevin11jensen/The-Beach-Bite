import React from 'react';
import BeachBiteMenu from './BeachBiteMenu';
import DosRocasMenu from './DosRocasMenu';

import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';



export default function LandingPage() {
    return (
        <LandingWrapper>
            <Switch>
                <Route exact path = '/' component = {BeachBiteMenu} />
                <Route path = '/dosrocas' component = {DosRocasMenu} />
                </Switch>
        </LandingWrapper>
    );
}

const LandingWrapper = styled.div `
    background: dodgerblue;
    
`