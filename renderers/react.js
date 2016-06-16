class QrCode extends React.Component {
  static defaultProps = {
    rowClass: "qr-row",
    blackCellClass: "qr-cell-black",
    whiteCellClass: "qr-cell-white",
  }

  render () {
    const {value} = this.props;
    return (
      <div>
        {qr(value).map(this._makeRow)}
      </div>
    )
  }

  _makeRow (cells) {
    return (
      <div className={this.props.rowClass}>
        {cells.map(this._cell)}
      </div>
    );
  }

  _cell (v) {
    return <div className={v ? this.props.blackCellClass : this.props.whiteCellClass}/>;
  }
}

module.exports = QrCode;