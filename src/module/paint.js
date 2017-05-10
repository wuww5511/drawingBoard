export default function paint (cxt, data, width, height) {
  cxt.clearRect(0, 0, width, height)
  data.search(ele => {
    ele.paint(cxt)
  })
}

