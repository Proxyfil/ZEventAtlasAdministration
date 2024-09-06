const canvasSize = {
	x: 500,
	y: 500
}
window.canvasSize = canvasSize

const canvasCenter = {
	x: canvasSize.x/2,
	y: canvasSize.y/2
}
window.canvasCenter = canvasCenter

let variationsConfig = {"zevent2024":{"name":"ZEvent2024 Place","code":"","default":73,"drawablePeriods":[0,73],"expansions":[],"versions":[{"timestamp":1725639000,"url":["./img/canvas/default/1662737400.png"]},{"timestamp":1725636839,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725632632727.png"]},{"timestamp":1725637139,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725632632727.png"]},{"timestamp":1725637439,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725632632727.png"]},{"timestamp":1725637739,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725632632727.png"]},{"timestamp":1725638039,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725632632727.png"]},{"timestamp":1725638339,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725632632727.png"]},{"timestamp":1725638639,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725632632727.png"]},{"timestamp":1725638939,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725632632727.png"]},{"timestamp":1725639239,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725632632727.png"]},{"timestamp":1725639539,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725639538467.png"]},{"timestamp":1725639839,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725639838277.png"]},{"timestamp":1725640139,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725640138304.png"]},{"timestamp":1725640440,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725640438548.png"]},{"timestamp":1725640740,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725640738659.png"]},{"timestamp":1725641040,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725641038379.png"]},{"timestamp":1725641340,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725641338447.png"]},{"timestamp":1725641640,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725641638524.png"]},{"timestamp":1725641940,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725641938823.png"]},{"timestamp":1725642240,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725642238604.png"]},{"timestamp":1725642540,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725642539140.png"]},{"timestamp":1725642840,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725642838619.png"]},{"timestamp":1725643140,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725643138712.png"]},{"timestamp":1725643440,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725643438524.png"]},{"timestamp":1725643740,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725643738809.png"]},{"timestamp":1725644040,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725644038913.png"]},{"timestamp":1725644340,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725644338522.png"]},{"timestamp":1725644640,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725644639176.png"]},{"timestamp":1725644940,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725644938746.png"]},{"timestamp":1725645240,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725645239115.png"]},{"timestamp":1725645540,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725645539230.png"]},{"timestamp":1725645840,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725645839094.png"]},{"timestamp":1725646140,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725646138785.png"]},{"timestamp":1725646440,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725646438987.png"]},{"timestamp":1725646740,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725646739223.png"]},{"timestamp":1725647041,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725647039688.png"]},{"timestamp":1725647341,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725647339815.png"]},{"timestamp":1725647641,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725647639859.png"]},{"timestamp":1725647941,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725647939728.png"]},{"timestamp":1725648241,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725648239899.png"]},{"timestamp":1725648541,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725648539945.png"]},{"timestamp":1725648841,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725648839777.png"]},{"timestamp":1725649141,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725649139578.png"]},{"timestamp":1725649441,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725649439535.png"]},{"timestamp":1725649741,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725649739780.png"]},{"timestamp":1725650041,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725649937142.png"]},{"timestamp":1725650341,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725650339403.png"]},{"timestamp":1725650641,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725650639888.png"]},{"timestamp":1725650941,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725650940341.png"]},{"timestamp":1725651241,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725651239369.png"]},{"timestamp":1725651541,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725651540162.png"]},{"timestamp":1725651841,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725651840268.png"]},{"timestamp":1725652141,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725652140546.png"]},{"timestamp":1725652441,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725652440508.png"]},{"timestamp":1725652741,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725652740088.png"]},{"timestamp":1725653042,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725653040553.png"]},{"timestamp":1725653342,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725653339698.png"]},{"timestamp":1725653642,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725653638557.png"]},{"timestamp":1725653942,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725653930135.png"]},{"timestamp":1725654242,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725654239346.png"]},{"timestamp":1725654542,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725654539390.png"]},{"timestamp":1725654842,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725654840635.png"]},{"timestamp":1725655142,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725655140219.png"]},{"timestamp":1725655442,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725655440788.png"]},{"timestamp":1725655742,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725655728808.png"]},{"timestamp":1725656042,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725656040791.png"]},{"timestamp":1725656342,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725656340577.png"]},{"timestamp":1725656642,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725656640801.png"]},{"timestamp":1725656942,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725656846590.png"]},{"timestamp":1725657242,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725657238072.png"]},{"timestamp":1725657542,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725657539458.png"]},{"timestamp":1725657842,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725657841227.png"]},{"timestamp":1725658142,"url":["https://zevent-cdn.mog.gg/zplace-cdn.mog.gg/full/1725658140834.png"]}],"icon":"<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' viewBox='0 0 11 11' aria-hidden='true'><polygon points='3 0 8 0 8 1 9 1 9 2 10 2 10 3 9 3 9 4 10 4 10 3 11 3 11 4 11 8 10 8 10 9 9 9 9 8 8 8 8 7 7 7 7 5 8 5 8 4 7 4 7 3 6 3 6 2 7 2 7 1 5 1 5 2 4 2 4 5 5 5 5 6 3 6 3 5 1 5 1 7 3 7 3 8 4 8 4 10 8 10 8 11 3 11 3 10 2 10 2 9 1 9 1 8 0 8 0 3 1 3 1 2 2 2 2 1 3 1 3 0'/><polygon points='8 9 8 10 9 10 9 9'/></svg>"}}
window.variationsConfig = variationsConfig