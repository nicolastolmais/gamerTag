import React from 'react';
import RecommendedFriend from './../addFriends/recommendedFriend';
import {Row, Col, Grid} from 'react-bootstrap';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {sortFriends} from '../general/sortingFunctions';
import {Card} from 'material-ui/Card';
import {orange600, grey200} from 'material-ui/styles/colors';

var addFriends = React.createClass({
    getInitialState: function() {
      return {
        value: undefined
      }
    },
    handleChange: function(event, index, value) {
        this.setState({value});
        this.sortBy(value);
    },
    sortBy: function(value) {
        var sorted = this.props.users;
        sortFriends(sorted, value);
        this.setState({
            user: {
                friends: sortFriends(sorted, value)
            }
        });
    },
    render: function() {
        const styles = {
            customWidth: {
                width: 150
            },
            card: {
              color: '#fff',
              margin: '1em auto',
              padding: '1em 2em',
              backgroundColor: '#2f2f2f'
            },
            floatingLabel: {
              color: orange600
            },
            menuLable: {
              color: grey200
            }
        };
        return (
            <Grid>
                <Card style={styles.card}>
                    <Row>
                        <Col xs={12} className="recommendedFriendPageHeader">
                            <h1>- FIND A FRIEND -</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4} className="friendMenu">
                            <SelectField floatingLabelText="Game" value={this.state.value} onChange={this.handleChange} style={styles.customWidth} labelStyle={styles.menuLable} floatingLabelStyle={styles.floatingLabel}>
                                <MenuItem value={"gameAZ"} primaryText="A-Z"/>
                                <MenuItem value={"gameZA"} primaryText="Z-A"/>
                            </SelectField>
                        </Col>
                        <Col xs={4} className="friendMenu">
                            <SelectField floatingLabelText="Name" value={this.state.value} onChange={this.handleChange} style={styles.customWidth} labelStyle={styles.menuLable} floatingLabelStyle={styles.floatingLabel}>
                                <MenuItem value={"alphAZ"} primaryText="A-Z"/>
                                <MenuItem value={"alphZA"} primaryText="Z-A"/>
                            </SelectField>
                        </Col>
                        <Col xs={4} className="friendMenu">
                            <SelectField floatingLabelText="Status" value={this.state.value} onChange={this.handleChange} style={styles.customWidth} labelStyle={styles.menuLable} floatingLabelStyle={styles.floatingLabel}>
                                <MenuItem value={"online"} primaryText="Online"/>
                                <MenuItem value={"offline"} primaryText="Offline"/>
                            </SelectField>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12} sm={6}>

                            {this.props.users.filter((user,index) => {
                              if (this.props.users[this.props.currentUser.id - 1].id !== user.id) {
                                return true;
                              }
                            }).filter((user, index) =>{
                              for(var i = 0; i <= this.props.users[this.props.currentUser.id - 1].friends.length; i++){
                                if (this.props.users[this.props.currentUser.id - 1].friends[i] === user.id) {
                                  return false;
                                }
                              }
                              return true;
                            }).filter((user, index) => {
                                if (index % 2 === 0) {
                                    return true;
                                } else {
                                    return false;
                                }
                            }).map((user, index) => {
                                return (<RecommendedFriend key={index} friendName={user.firstName} friendStatus={user.status} friendRecent={user.status} friendID={user.id} currentUserID={this.props.currentUser.id} addFriend={this.props.addFriend} />)
                            })}
                        </Col>
                        <Col xs={12} sm={6}>
                            {this.props.users.filter((user,index) => {
                              if (this.props.users[this.props.currentUser.id - 1].id !== user.id) {
                                return true;
                              }
                            }).filter((user, index) =>{
                              for(var i = 0; i <= this.props.users[this.props.currentUser.id - 1].friends.length; i++){
                                if (this.props.users[this.props.currentUser.id - 1].friends[i] === user.id) {
                                    return false;
                                }
                              }
                              return true;
                            }).filter((user, index) => {
                                if (index % 2 !== 0) {
                                    return true;
                                } else {
                                    return false;
                                }
                            }).map((user, index) => {
                                return (<RecommendedFriend key={index} friendName={user.firstName} friendStatus={user.status} friendRecent={user.status} friendID={user.id} currentUserID={this.props.currentUser.id} addFriend={this.props.addFriend}/>)
                            })}
                        </Col>
                    </Row>
                </Card>
            </Grid>
        )
    }
});

module.exports = addFriends;
