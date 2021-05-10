'use strict'
function drawTree(numLevels, matrices, group,
                  width, height, colour) {
  if (numLevels == 0) {
    return
  }
  group.rect(width, height).fill(colour).cx(0).opacity(1)
          .radius(width/3)
  for (let matrix of matrices) {
    let subGroup = group.group().transform(matrix)
    drawTree(numLevels - 1, matrices, subGroup,
             width, height, colour)
  }
}


//window.addEventListener('load', (event) => {
let windowWidth  = window.innerWidth
let windowHeight = window.innerHeight
let draw = SVG().addTo('body').size(windowWidth, windowHeight)
let group = draw.group()
               .transform({tx: windowWidth / 2,
                           ty: 4 * windowHeight / 5,
                           flip: 'y'
               })
/*
group.rect(windowHeight / 30, windowHeight / 3)
               .fill('#f0f').cx(0)
               .opacity(0.5)
*/
let uv = [0, 300]
let duv = [150, 280]
let x = duv[0] / (windowHeight / 3)
let y = duv[1] / (windowHeight / 3)

group.circle(20).center(uv[0], uv[1])
group.circle(20).center(uv[0] + duv[0],
                        uv[1] + duv[1])

let matrix1 = new SVG.Matrix(y, -x, x, y, uv[0], uv[1])

uv = [0, 420]
duv = [-150, 220]
x = duv[0] / (windowHeight / 3)
y = duv[1] / (windowHeight / 3)

group.circle(20).center(uv[0], uv[1])
group.circle(20).center(uv[0] + duv[0],
                        uv[1] + duv[1])

let matrix2 = new SVG.Matrix(y, -x, x, y, uv[0], uv[1])

drawTree(10, [matrix1, matrix2], group,
         windowHeight / 30, windowHeight / 3, 'brown')
/*
let subGroup = group.group()
        .transform({//translate: uv,
                    //rotate: 30, scale: 0.5})
        a: y, b: -x, c: x, d: y,
        e: uv[0], f: uv[1]})
let t = subGroup.transform()
subGroup.rect(windowHeight / 30, windowHeight / 3)
               .fill('#af0').cx(0)
               .opacity(0.5)
*/