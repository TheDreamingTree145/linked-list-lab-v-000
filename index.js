function getName(node) {
  return node["name"]
}

function headNode(list, collection) {
  return collection[list]
}

function next(head, collection) {
  let nextAddress = head["next"]
  return collection[nextAddress]
}

function nodeAt(index, list, collection) {
  let head = collection[list]
  let node = head
  for (let i = 0; i < index; i++) {
    node = next(node, collection)
  }
  return node
}

function addressAt(index, list, collection) {
  if (index === 0) {
    var node = list
    return node
  } else {
    var node = nodeAt(index - 1, list, collection) 
  }
  return node["next"]
}

function indexAt(node, list, collection) {
  for (let i = 0; i < collection.length; i++) {
    if (collection[list] === node) {
      return i
    }
  }
}