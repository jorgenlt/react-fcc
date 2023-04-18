// helper function to move element in an array from one index to another
export default function MoveElement(array, fromIndex, toIndex) {
    let elementToMove = array.splice(fromIndex, 1)[0];
    array.splice(toIndex, 0, elementToMove);
    return array;
}