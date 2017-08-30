import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import Ul from './Ul'

const preselectFirstItem = (props) => {
  const { items, selectedId, showSelection, onSelectItem } = props

  if (items.length &&
     selectedId === 'no_selection' &&
     showSelection) {
    onSelectItem(items[0].id)
  }
}

class List extends Component {
  componentDidMount() {
    preselectFirstItem(this.props)
  }

  componentWillReceiveProps(nextProps) {
    preselectFirstItem(nextProps)
  }

  render() {
    const {
      items,
      displayKey,
      selectedId,
      showSelection,
      onSelectItem,
    } = this.props

    return (
      <Ul>
        {items.map(item =>
          <li key={item.id}>
            <Button
              isSelected={item.id === selectedId && showSelection}
              onClick={() => onSelectItem(item.id)}
            >
              {item[displayKey]}
            </Button>
          </li>,
        )}
      </Ul>
    )
  }
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  displayKey: PropTypes.string.isRequired,
  selectedId: PropTypes.string.isRequired,
  showSelection: PropTypes.bool,
  onSelectItem: PropTypes.func.isRequired,
}

List.defaultProps = {
  showSelection: true,
}


export default List
