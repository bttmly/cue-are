const React = require("react");

class QrComponent extends React.Component {

  constructor (props) {
    super(props);
    this._renderRow = this._renderRow.bind(this);
    this._renderCell = this._renderCell.bind(this);
  }

  render () {
    const { rows } = this.props;
    return (
      <div>
        { rows.map(this._renderRow) }
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
      />
    );
  }
}

QrComponent.defaultProps = {
  rowClass: "qr-row",
  blackCellClass: "qr-cell-black",
  whiteCellClass: "qr-cell-white",
};

QrComponent.propTypes = {
  rows: React.PropTypes.arrayOf(React.PropTypes.arrayOf(React.PropTypes.oneOf([0, 1]))),
  rowClass: React.PropTypes.string,
  blackCellClass: React.PropTypes.string,
  whiteCellClass: React.PropTypes.string,
};

module.exports = QrComponent;
