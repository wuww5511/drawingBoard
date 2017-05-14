import LinePainter from '@/painter/LinePainter'
import CirclePainter from '@/painter/CirclePainter'
import RectPainter from '@/painter/RectPainter'

var map = new Map()
map.set('line', LinePainter)
map.set('circle', CirclePainter)
map.set('rect', RectPainter)

export default map
