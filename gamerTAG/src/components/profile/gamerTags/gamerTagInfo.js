import React from 'react';
import {Row, Col} from 'react-bootstrap';
import TextField from 'material-ui/TextField';
import {orange800} from 'material-ui/styles/colors';

var GamerTagInfo = React.createClass({
    render: function() {
      var styles = {
        underlineStyle: {
          borderColor: orange800,
        },
      };
        return (
            <Row className="tagSection">
                <Col xs={12}>
                    <h2>GamerTags</h2>
                    <Row className="tagInfo">
                        <Col sm={12} md={6}>
                            <div>
                                <p>LoL Summoner Name</p>
                                <TextField
                                  className="gamertag_input"
                                  underlineFocusStyle={styles.underlineStyle}
                                  hintText="LoL Summoner Name" />
                            </div>
                        </Col>
                        <Col sm={12} md={6}>
                            <div>
                                <p>Blizzard BattleTag</p>
                                <TextField
                                  className="gamertag_input"
                                  underlineFocusStyle={styles.underlineStyle}
                                  hintText="Blizzard BattleTag" />
                            </div>
                        </Col>
                        <Col sm={12} md={6}>
                            <div>
                                <p>Xbox Gamertag</p>
                                <TextField
                                  className="gamertag_input"
                                  underlineFocusStyle={styles.underlineStyle}
                                  hintText="Xbox Gamertag" />
                            </div>
                        </Col>
                        <Col sm={12} md={6}>
                            <div>
                                <p>Playstation UserName</p>
                                <TextField
                                  className="gamertag_input"
                                  underlineFocusStyle={styles.underlineStyle}
                                  hintText="Playstation UserName" />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
});

module.exports = GamerTagInfo;