import React from 'react';
import {Grid} from 'react-bootstrap';
import { Link } from 'react-router';
import { Card } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import {orange600} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import './sign-in.css';

var SignIn = React.createClass({
    getInitialState: function() {
      return {
        email: "",
        password: ""
      }
    },
    componentDidMount: function(){
      localStorage.removeItem("currentUser");
    },
    componentDidUpdate: function(){
      this.checkCredentials();
    },
    checkCredentials : function() {
      for(var user of this.props.users){
        if(user.email === this.state.email && user.password === this.state.password){
            localStorage.setItem("currentUser", JSON.stringify(user));
            this.props.setCurrentUser(user);
            this.props.router.push('/profile-page');
        }
      }
    },
    setPossibleUser: function(e){
      var email = document.querySelector("#email").value;
      var password = document.querySelector("#password").value;
      this.setState({
        email: email,
        password:password
      });
      e.preventDefault();
    },
    render: function() {
      var styles = {
        blurFix: {
          willChange: 'contents'
        },
        input: {
          color: '#ddd'
        },
        hint: {
          color: 'rgba(255,255,255,0.3)'
        },
        underlineStyle: {
          borderColor: orange600,
        },
        floatingLabel: {
          color: orange600
        },
        card: {
          maxWidth: '375px',
          color: '#fff',
          margin: '1em auto',
          padding: '1em 2em',
          backgroundColor: '#2f2f2f'
        },
        flatButton: {
          color: '#eee'
        }
      };
        return (
            <Grid className="account-sign-in">
              <Card style={styles.card}>
                <h1>- Sign In -</h1>
                <form className="account-information">
                    <div className="sign-in-info">
                        <TextField
                          id="email"
                          style={styles.blurFix}
                          inputStyle={styles.input}
                          className="sign-in-email"
                          underlineFocusStyle={styles.underlineStyle}
                          floatingLabelText="Email Address"
                          floatingLabelStyle={styles.floatingLabel}
                          floatingLabelFixed={true}
                          hintText="Email Address"
                          hintStyle={styles.hint}
                        />
                        <br/>
                        <TextField
                          id="password"
                          style={styles.blurFix}
                          inputStyle={styles.input}
                          className="sign-in-password"
                          underlineFocusStyle={styles.underlineStyle}
                          floatingLabelText="Password"
                          floatingLabelStyle={styles.floatingLabel}
                          floatingLabelFixed={true}
                          hintText="Password"
                          hintStyle={styles.hint}
                          type="password"
                        />
                        <br/>
                          <RaisedButton type="submit" form="form1" value="Submit" label="Submit" primary={true} onClick={this.setPossibleUser}/>
                        <br/>
                        <Link to='/profile-page'>
                          <FlatButton label="Forgot Password" style={styles.flatButton} />
                        </Link>
                        <br/>
                        <Link to='/create-account'>
                          <FlatButton label="Don't got a Tag" style={styles.flatButton} />
                        </Link>

                    </div>
                </form>
              </Card>
            </Grid>
        )
    }
});

module.exports = SignIn;
