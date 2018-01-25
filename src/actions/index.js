export const addQuote = quote => {
  return {
    type: 'ADD_QUOTE',
    quote,
  };
}
export const addContent = content => {
  return {
    type: 'ADD_CONTENT',
    content,
  };
}
