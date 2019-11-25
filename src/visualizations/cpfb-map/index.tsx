import React, { FC, useEffect } from 'react';
import { ComplaintsApi } from '../../services/cpfb-client';
import { GridColumn, Header } from 'semantic-ui-react';
import FilterForm from './FilterForm';
import ResultList from './ResultList';

export const CPFBMap:FC = (props) => {

    const API = new ComplaintsApi();

    useEffect(function loadTenResultsOnMount(){
        async function actualLoad(){
            const result = API.rootGetWithParam({
                
            })
        };
        actualLoad();
    }, [API]);
    return (
        <GridColumn>
            <Header dividing 
                content='CPFB Map Results' 
                subheader='See how the Consumer Financial Protection Bureau has helped people near you'/>
            <FilterForm />
            <ResultList />
        </GridColumn>
    )
    return null;
}

export default CPFBMap;