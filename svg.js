//window.addEventListener('load', (event) => {
let windowWidth  = window.innerWidth
let windowHeight = window.innerHeight
let draw = SVG().addTo('body').size(windowWidth, windowHeight)
let group = draw.group()
               .transform({tx: windowWidth / 2,
                           ty: 2 * windowHeight / 3,
                           flip: 'y'
               })
group.rect(windowHeight / 30, windowHeight / 3)
               .fill('#f0f').cx(0)
               .opacity(0.5)
               //.css('cursor', 'pointer')
let uv = [0, 100]
let duv = [100, 200]
let x = duv[0] / (windowHeight / 3)
let y = duv[1] / (windowHeight / 3)
group.circle(20).center(uv[0], uv[1])
group.circle(20).center(uv[0] + duv[0],
                        uv[1] + duv[1])
let subGroup = group.group()
        .transform({//translate: uv,
                    //rotate: 30, scale: 0.5})
        a: y, b: -x, c: x, d: y,
        e: uv[0], f: uv[1]})
let t = subGroup.transform()
subGroup.rect(windowHeight / 30, windowHeight / 3)
               .fill('#af0').cx(0)
               .opacity(0.5)