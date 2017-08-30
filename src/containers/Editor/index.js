import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { find } from 'lodash/fp'

import List from 'components/List'
import Controls from 'components/Controls'
import EditorForm from 'components/EditorForm'

import Wrapper from './Wrapper'

import { updateItem } from './actions'
import { selectItem, prepareCreateItem, createItem, deleteItem } from './thunks'

const newItem = {
  id: null,
  value: '',
}


const Editor = ({
  items,
  selectedId,
  onSelectItem,
  onPrepareCreateItem,
  onSubmitCreate,
  onSubmitUpdate,
  onDeleteItem,
  createMode,
}) =>
  <Wrapper>
    <List
      {...{ items, selectedId, onSelectItem }}
      showSelection={!createMode}
      displayKey={'lastName'}
    />
    <Controls
      {...{ onPrepareCreateItem }}
      showDelete={selectedId !== 'no_selection'}
      onDeleteItem={() => onDeleteItem(selectedId)}
    />
    {selectedId !== 'no_selection' || createMode
      ?
        <EditorForm
          onSubmit={createMode ? onSubmitCreate : onSubmitUpdate}
          initialValues={createMode
            ? newItem
            : find({ id: selectedId })(items)}
        />
      : null
    }
  </Wrapper>

Editor.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  selectedId: PropTypes.string.isRequired,
  onSelectItem: PropTypes.func.isRequired,
  onPrepareCreateItem: PropTypes.func.isRequired,
  onSubmitCreate: PropTypes.func.isRequired,
  onSubmitUpdate: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  createMode: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  items: state.editor.items,
  selectedId: state.editor.selectedId,
  createMode: state.editor.createMode,
})

const mapDispatchToProps = dispatch => ({
  onSelectItem: id => dispatch(selectItem(id)),
  onPrepareCreateItem: () => dispatch(prepareCreateItem()),
  onSubmitUpdate: item => dispatch(updateItem(item)),
  onSubmitCreate: item => dispatch(createItem(item)),
  onDeleteItem: id => dispatch(deleteItem(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Editor)
