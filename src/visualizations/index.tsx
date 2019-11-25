import React from 'react';
import CPFBMap from './cpfb-map';
import { PageConfig } from '../App';

export const Visualizations:PageConfig[] = [
    {
        path: 'cpfb',
        displayName: 'CPFB Results Map',
        component: CPFBMap
    }
]

export default Visualizations;