import * as React from 'react';
import { ComponentRegistry } from '@enonic/react-components';
import { Hello } from './components/Hello';
import { Person } from './components/Person';

export const componentRegistry = new ComponentRegistry;
componentRegistry.addContentType('portal:site', { View: Hello }); // <1>
componentRegistry.addContentType('com.enonic.app.hmdb:person', { View: Person }); // <2>
