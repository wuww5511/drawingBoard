<template>
  <div id="app" class="app clearfix">
    <div class="control pull-left">
      <button @click="$undo()">undo</button>
      <button @click="$redo()">redo</button>
    </div>
    <div class="info pull-right"></div>
    <div class="view">
      <canvas @click="$onCanvasEvent" @mousedown="$onCanvasEvent" @mouseup="$onCanvasEvent" @mousemove="$onCanvasEvent" ref="canvas" class="canvas" width="500" height="500"></canvas>
    </div>
  </div>
</template>

<script>
import Editor from './lib/Editor'
import View from './module/View'
import LinePainter from './painter/LinePainter'
import CirclePainter from './painter/CirclePainter'

export default {
  name: 'app',
  data: function () {
    return {

    }
  },
  created: function () {
    this._editor = Editor.getIns()
  },
  mounted: function () {
    this._canvas = this.$refs.canvas
    this._offset = this._getOffset(this._canvas)
    this._view = View.getIns(this._canvas)
    this._painter = new CirclePainter()
  },
  methods: {
    $undo: function () {
      this._editor.undo()
    },
    $redo: function () {
      this._editor.redo()
    },
    $onCanvasEvent: function (event) {
      var {clientX, clientY} = event
      if (this._painter) {
        this._painter.onCanvasEvent({
          x: clientX - this._offset.x,
          y: clientY - this._offset.y,
          event,
          type: event.type
        })
      }
    },
    _getOffset: function (node) {
      var ret = {
        x: 0,
        y: 0
      }
      while(node) {
        ret.x += node.offsetLeft
        ret.y += node.offsetTop
        node = ret.offsetParent
      }
      return ret
    }
  }
}
</script>

<style>
  html,body{
    height: 100%;
  }
  .app{
    background: #efefef;
    height: 100%;
  }
  .control,
  .view,
  .info{
    height: 100%;
  }
  .control{
    width: 50px;
    background: #fff;
  }
  .view{
    margin-left: 70px;
    margin-right: 320px;

  }
  .info{
    width: 300px;
    background: #333;
  }
  .canvas{
    height: 500px;
    width: 500px;
    background: #fff;
    cursor: default;
  }
</style>
