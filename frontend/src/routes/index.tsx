import React, { useState } from 'react';
import Authroutes from './Authroutes';
import Approutes from './Approutes';

const RouteStackRoutes: React.FC = () => {
    const [teste, setTeste] = useState(true)

    return (teste ? <Authroutes /> : <Approutes />)
};
export default RouteStackRoutes