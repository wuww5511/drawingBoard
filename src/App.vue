<template>
  <div id="app" class="app clearfix">
    <div class="control pull-left">
      <button>undo</button>
      <button>redo</button>
    </div>
    <div class="info pull-right"></div>
    <div class="view">
      <canvas ref="canvas" class="canvas" width="500" height="500"></canvas>
    </div>
  </div>
</template>

<script>
import Editor from './lib/Editor'
export default {
  name: 'app',
  data: function () {
    return {}
  },
  created: function () {
    this._editor = Editor.getIns()
    this._editor.on('change', () => {
      this._repaint()
    })
  },
  mounted: function () {
    this._canvas = this.$refs.canvas
    this._cxt = this._canvas.getContext('2d')
  },
  methods: {
    $undo: function () {
      this._editor.undo()
    },
    $redo: function () {
      this._editor.redo()
    },
    _repaint: function () {
      this._cxt.clearRect(0, 0, 500, 500)
      this._editor.getData().search(ele => {
        ele.paint(cxt)
      })
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
  }
</style>
