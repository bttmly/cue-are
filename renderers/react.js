const React = require("react");
const qr = require("../");

class QrComponent extends React.Component {
  static defaultProps = {
    rowClass: "qr-row",
    blackCellClass: "qr-cell-black",
    whiteCellClass: "qr-cell-white",
  };

  static propTypes = {
    value: React.PropTypes.string.isRequired,
    rowClass: React.PropTypes.string,
    blackCellClass: React.PropTypes.string,
    whiteCellClass: React.PropTypes.string,
  };

  render () {
    const { value } = this.props;
    return (
      <div>
        { qr(value).map(this._renderRow) }
      </div>
    );
  }

  _renderRow (cells) {
    return (
      <div className={ this.props.rowClass }>
        { cells.map(this._renderCell) }
      </div>
    );
  }

  _renderCell (v) {
    return (
      <div className={ v ?
        this.props.blackCellClass :
        this.props.whiteCellClass }
      />;
    );
  }
}

module.exports = QrComponent;
