import Footer from "/react4xp/components/common/Footer";
import '../components/globalStyles.css'
import type {AppProps} from '/types/AppProps';
import {BaseComponent} from '@enonic/react-components';
import * as React from 'react';
import {componentRegistry} from '../componentRegistry';

const App: React.FC<AppProps> = (props) => {
    return (
        <>
            <BaseComponent componentRegistry={componentRegistry} data={props}/>
            {
                (props.type == "page" || props.type == "contentType") && <Footer logoUrl={props.commonProps.logoUrl as string}/>
            }
        </>
    );
}

App.displayName = 'App';

export default App;
