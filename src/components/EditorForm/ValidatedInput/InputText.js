import styled from 'styled-components'

const InputText = styled.input`
  height: 25px;
  width: 200px;
  padding: 0px 10px;
  margin-left: 20px;
  font-size: 14px;
  border: none;
  border-bottom: solid 2px black;
  &:focus {
     outline: none;
     background-color: rgb(212, 208, 208);
  }
`

export default InputText
