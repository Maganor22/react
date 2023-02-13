import React, { Component } from "react";

class TimerDate extends Component {
    state = {
        timer: "",
    };

    componentDidMount() {
        this.interval = setInterval(() => {
            let d = new Date();
            //let date = d.getHours() + "-" + d.getMinutes() + "-" + d.getSeconds();
            let date = d.toLocaleString()
            this.setState({ timer: date });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                <h1>{this.state.timer}</h1>
            </div>
        );
    }
}

export default TimerDate;




