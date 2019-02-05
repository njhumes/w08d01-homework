import React, { Component } from 'react';


class Account extends Component {
  constructor(){
    super();
    this.state = {
      balance: 0
    }

  }
  deposit = () => {
    const amount = parseInt(this.inputBox.value);
    const theBalance = this.state.balance + amount
    this.setState({
      balance: theBalance
    })
    this.inputBox.value = '';
  }

  withdraw = () => {
    if(this.state.balance < this.inputBox.value){
      console.log('insufficient funds')
      // let balanceClass = 'balance';
      // balanceClass = 'balance zero'
    } else {
      const amount = parseInt(this.inputBox.value);
      const theBalance = this.state.balance - amount;
      this.setState({
        balance: theBalance
      })
      this.inputBox.value = '';
    }
    
  }
  render() {
    let balanceClass = 'balance'
    if(this.state.balance == 0){
       balanceClass = 'balance zero'
    }
    console.log(this.state.balance);
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={balanceClass}>${this.state.balance}</div>
        <input type="text" placeholder="enter an amount" ref={(input) => {this.inputBox = input}} />
        <input type="button" onClick={this.deposit} value="Deposit" />
        <input type="button" onClick={this.withdraw} value="Withdraw" />
      </div>
    )
  }
}

export default Account;
