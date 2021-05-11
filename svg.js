'use strict'

function drawTree(numLevels, matrices, group,
                  width, height, colour) {
  group.rect(width, height).fill(colour).cx(0).opacity(1)
  if (numLevels > 1) {
    for (let matrix of matrices) {
      let subGroup = group.group().transform(matrix)
      drawTree(numLevels - 1, matrices, subGroup,
               width, height, colour)
    }
  }
}

function updateTransforms(matrices, group) {
  for (let child of group.children()) {
    if (child.node.nodeName === 'g') {
      //child.transform(matrix)
      console.log(child.node)
      updateTransforms(matrices, child)
    }
  }
}


//window.addEventListener('load', (event) => {

let w  = window.innerWidth
let h = window.innerHeight
let draw = SVG().addTo('body').size(w, h)
let mainGroup = draw.group()
               .transform({tx: w / 2, ty: 4 * h / 5, flip: 'y'})

// Q: Where will we flip the circle coords?
// The events are on the "draw" and therefore need flipping
// into the "mainGroup" coordinate system.
// Maybe we should flip as soon as we receive the event.
// Then all the logic will be in the mainGroup coordinate system.
// Also the blob array can be in the mainGroup coordinate system.

let blobs = [ [ [0, 300], [150, 580] ],
              [ [0, 420], [-150, 640] ] ]

let matrices = []

for (let br of blobs) {  // e.g. [ [0, 300], [150, 580] ]
  for (let end of br) {
    mainGroup.circle(50).center(end[0], end[1]).fill('purple')
  }
  let a = (br[1][1] - br[0][1]) / (h / 3)
  let b = (br[1][0] - br[0][0]) / (h / 3)
  let matrix = new SVG.Matrix(a, -b, b, a, br[0][0], br[0][1])
  matrices.push(matrix)
}
/*
let uv = [0, 300]
let duv = [150, 280]
let x = duv[0] / (h / 3)
let y = duv[1] / (h / 3)

mainGroup.circle(20).center(uv[0], uv[1])
mainGroup.circle(20).center(uv[0] + duv[0],
                        uv[1] + duv[1])

let matrix1 = new SVG.Matrix(y, -x, x, y, uv[0], uv[1])

uv = [0, 420]
duv = [-150, 220]
x = duv[0] / (h / 3)
y = duv[1] / (h / 3)

mainGroup.circle(20).center(uv[0], uv[1])
mainGroup.circle(20).center(uv[0] + duv[0],
                        uv[1] + duv[1])

let matrix2 = new SVG.Matrix(y, -x, x, y, uv[0], uv[1])
*/
drawTree(2, matrices, mainGroup,
         h / 30, h / 3, 'brown')

function coords(event) {
  return [event.x - w / 2, 4 * h / 5 - event.y]
}

// note what blob we are moving and its offset from the mouse
draw.mousedown((event) => {
  let [x, y] = coords(event)
  mainGroup.circle(20).center(x, y)
  updateTransforms('not a matrix', mainGroup)
})


// Update the blob and a matrix and draw the whole tree again
// by clearing stuff and calling drawTree again.
// Or walk the tree poking the transform values.
//draw.mousedown((event) => {