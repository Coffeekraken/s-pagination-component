import "babel-polyfill"
import "coffeekraken-sugar/js/features/all"
import SPaginationComponent from "../../../dist/index"

const $pagination = document.querySelectorAll("s-pagination")[0]
$pagination.addEventListener("change", e => {
  console.log("change!", e.detail)
})
