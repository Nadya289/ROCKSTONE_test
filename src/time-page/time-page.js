import React from 'react';
import './time-page.css';

class TimePage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        time: new Date().toLocaleString().split(',')[1]
      };
    }
    componentDidMount() {
      this.intervalID = setInterval(
        () => this.tick(),
        1000
      );
    }
    componentWillUnmount() {
      clearInterval(this.intervalID);
    }
    tick() {
      this.setState({
        time: new Date().toLocaleString().split(',')[1]
      });
    }
    render() {
      return (
        <div className="time-page">
          {this.state.time}
        </div>
      );
    }
  }

export default TimePage;