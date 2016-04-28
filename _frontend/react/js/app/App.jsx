import React from 'react';

import Stage from './stage/Stage';
//import RightMenu from 'stage/rightmenu/RightMenu';


class App extends React.Component {
    getStyles() {
        var styles = {
        };

        return styles;
    }

    render() {
        return (
            <div>
                <Stage data={this.props.data} />
            </div>
        );
    }
}


export default App;