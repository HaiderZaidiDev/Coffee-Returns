import './App.css';
import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Compound_Interest(props) {
  // Calculates compound interest (8% S&P 500 Average) over 30 years given a principal.
  var final_amount = (props.principal*(1+0.08)**30).toPrecision(5);
  return (
    <p> ${props.principal} invested in an S&P 500 Index Fund would return ${final_amount} on average over 30-years.</p>
  );

}

class Conversion extends React.Component {
  // Determines opportunity cost of purchasing Starbucks Coffees vs. Investing
  // in an S&P 500 Index Fund.
  constructor(props) {
    // Constructor function, similar to __init__ in Python.
    super(props);
    this.state = {
      coffee_consumed: '0',
      principal: '0',
    };

    // Binds tell the functions which "this" to use, without this, the functions are undefined, since it does not have a this.
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    // Target: For whatever triggered the event, get the attribute from that trigger.
    this.setState({coffee_consumed: event.target.value})
    this.setState({principal: ((event.target.value)*this.props.price).toPrecision(4)})
  }

  handleSubmit(event) {
    // Handles form submission, not really used here.
    console.log(this.state.coffee_consumed + " coffees were purchased.");
  }

  render() {
    return (
      <Container fluid>
        <div className="header-wrapper text-center">
          <Row>
            <Col lg={12} className="d-flex justify-content-center">
              <h1> Coffee <span className="header-secondary"> Returns</span></h1>
            </Col>
          </Row>
        </div>
        <Row className="justify-content-center mt-3">
          <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="Coffee(s) Purchased" onChange={this.handleChange} />
          </form>
        </Row>

        <Row className="justify-content-center">
          <Col lg={8} md={8}>
            <div className="result-wrapper text-center">
              <p> Purchasing {this.state.coffee_consumed} coffee(s) from Starbucks a year costs, ${this.state.principal}.</p>
              <Compound_Interest principal={this.state.principal}/>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}


export default Conversion;
