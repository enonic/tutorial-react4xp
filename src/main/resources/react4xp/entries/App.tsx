import Footer from "/react4xp/components/common/Footer";
import type {AppProps} from '/types/AppProps';
import '../components/globalStyles.css'
import {BaseComponent} from '@enonic/react-components';
import * as React from 'react';
import {componentRegistry} from '../componentRegistry';

const App: React.FC<AppProps> = (props) => {
    return (
        <>
            <BaseComponent componentRegistry={componentRegistry} {...props}/>
            {props.component.type == "page" && <Footer logoUrl={props.url}/>}
        </>
    );
}

App.displayName = 'App';

export default App;
