
function addObject(value) {
  console.log(value);
  return {
    type: 'ADD_OBJECT',
    payload: value
  }
}

export {addObject}