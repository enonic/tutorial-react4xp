import Footer from "/react4xp/components/common/Footer";
import '../components/globalStyles.css'
import {BaseComponent} from '@enonic/react-components';
import * as React from 'react';
import {componentRegistry} from '../componentRegistry';
import type {AppProps} from '/types/AppProps';

const App: React.FC<AppProps> = (props) => {
    return (
        <>
            <BaseComponent componentRegistry={componentRegistry} data={props}/>
            {
                (props.type == "page" || props.type == "contentType") && <Footer logoUrl={props.commonProps.url as string}/>
            }
        </>
    );
}

App.displayName = 'App';

export default App;
