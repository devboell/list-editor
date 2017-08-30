import React from 'react'
import PropTypes from 'prop-types'

import Button from 'components/styled/Button'

import Wrapper from './Wrapper'

const Controls = ({ onPrepareCreateItem, onDeleteItem, showDelete }) =>
  <Wrapper>
    <Button
      onClick={onPrepareCreateItem}
    >Create</Button>
    {showDelete
      ?
        <Button
          onClick={onDeleteItem}
        >Delete</Button>
      : null
    }
  </Wrapper>

Controls.propTypes = {
  onPrepareCreateItem: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  showDelete: PropTypes.bool.isRequired,
}


export default Controls
