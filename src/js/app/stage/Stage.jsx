import React from 'react';

import PointModel from './PointModel';

import Point from './Point';
import RightMenu from './rightmenu/RightMenu';

// TODO sync points between FE and BE

class Stage extends React.Component {
    constructor(props) {
        super(props);

        var lsPoints = JSON.parse(localStorage.getItem('points'));
        var _points = (lsPoints != null) ? lsPoints : [];

        this.state = {
            points: _points
        };


        this.checkLocalStorage();
    }

    checkLocalStorage() {
        console.log(localStorage.getItem('points'));

    }

    getStyles() {
        return { position: 'relative',
        }
    }

    clickListener(e) {
        console.log('Clicked',e.pageX," ", e.pageY);
        this.addPoint(new PointModel(e.pageX, e.pageY));
    }

    saveStateToLocalStorage() {
        localStorage.setItem('points', JSON.stringify(this.state.points));
    }


    getInitialPoints() {
        this.state.points = this.props.data.points;

        console.log(this.state);


    }

    addPoint(point) {
        this.state.points.push(point);

        this.forceUpdate();

        console.log(this.state.points);

        this.saveStateToLocalStorage();
    }



    render() {
        var image = this.props.data.image;

        return (
            <div>
                <div onClick={this.clickListener.bind(this)} style={this.getStyles()}>
                    <img src={image} alt=""/>

                    {this.state.points.map(function(el) {
                            return (
                                <Point x={el.x} y={el.y}/>
                            )
                        })}
                </div>
                <RightMenu data={this.props.data} />
            </div>
        );
    }
}

export default Stage;