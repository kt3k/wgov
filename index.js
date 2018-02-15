import { parse } from 'query-string'

const createByText = text => {
  const board = document.createElement('div')

  board.dataset.wgo = text
  board.style.width = '700px'
  board.style.height = '550px'

  return board
} 

export const createFromQueryString = () => {
  return createByText(parse(location.search).sgf)
}

export const isValidQueryString = () => {
  const qs = parse(location.search)

  return !!qs.sgf && qs.sgf.length > 0
}

