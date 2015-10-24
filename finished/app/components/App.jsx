var React             = require('react');
var Stars             = require('../data/Stars.js');
var StarChart         = require('./StarChart.jsx');
var ShipInfo          = require('./ShipInfo.jsx');
var Navigation        = require('./Navigation.jsx');
var SetIntervalMixin  = require('../mixins/SetIntervalMixin.jsx');
var nav               = require('../utilities/starshipNavigation.js');

var App = React.createClass({
  mixins: [SetIntervalMixin],

  render: function() {
    var ship = this.props.ship;
    var stars = Stars.getStarData();
    return (
      <div>
        <StarChart
          starData={stars}
          ship={ship}
          updateDestination={this.updateDestination}/>
        <div className="helm">
          <div id="helm-header">
            <h1>Helm Control</h1>
          </div>
          <ShipInfo ship={ship} updateShip={this.props.updateShip} />
          <Navigation
            ship={ship}
            stars={stars}
            updateSpeed={this.updateSpeed}
            engageWarpDrive={this.engageWarpDrive}
            updateDestination={this.updateDestination}/>
        </div>
      </div>
    );
  },

  updateDestination: function(destination) {
    var ship = this.state.ship;
    ship.destination = destination;
    this.setState({ship: ship});
  },

  updateSpeed: function(newSpeed) {
    var ship = this.state.ship;
    ship.speed = newSpeed;
    this.setState({ship: ship});
  },

  engageWarpDrive: function() {
    this.setInterval(this.updateShipPosition, 10);
  },

  updateShipPosition: function() {
    var ship = this.state.ship;
    var nextPos = nav.nextPositionToDestination(ship);
    if (nav.destinationReached(ship)) {
      this.clearIntervals();
    } else {
      ship.position = nextPos;
      this.setState({ship: ship});
    }
  }
});

module.exports = App;
