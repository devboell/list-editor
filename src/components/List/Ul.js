import styled from 'styled-components'
import { editorBlock } from 'globalStyles'

const Ul = styled.ul`
  ${editorBlock}
  width: 150px;
  max-height: 400px;
  list-style: none;
  overflow-y: auto;
`

export default Ul
