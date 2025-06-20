import Footer from "/react4xp/components/common/Footer";
import '../components/globalStyles.css'
import {BaseComponent} from '@enonic/react-components';
import * as React from 'react';
import {componentRegistry} from '../componentRegistry';

//TODO: revert AppProps when types are updated
const App: React.FC<any> = (props) => {
    return (
        <>
            <BaseComponent componentRegistry={componentRegistry} data={props} common={props.common}/>
            {
                (props.type == "page" || props.type == "contentType") && <Footer logoUrl={props.common.logoUrl as string}/>
            }
        </>
    );
}

App.displayName = 'App';

export default App;
