/** @format */

import React from 'react';

// Imports every component from React
import { Text, AppRegistry } from 'react-native';

// Create a component, with the arrow function so this App returns the JSX to render
const App = () => (
        <Text>Hello</Text>
    );

// Must register the component with at least on component
AppRegistry.registerComponent('albums', () => App);
