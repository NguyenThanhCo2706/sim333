var render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"answer-opts",attrs:{"tabindex":"0"},on:{"focus":_vm.onFocusQuestion,"blur":_vm.onBlurQuestion}},_vm._l((_vm.question.options),function(opt){return _c('div',{key:opt[0],ref:"options",refInFor:true,staticClass:"opt",class:{selected: _vm.question.value == opt[0]},on:{"click":function($event){return _vm.chooseAnswer(opt[0])}}},[(opt[0] === -1)?_c('span',[_c('span',{attrs:{"title":"Not applicable"}},[_vm._v("N/A")])]):_c('span',[_vm._v(_vm._s(opt[0]))]),_c('div',[_vm._v(_vm._s(opt[1]))])])}),0)
}
var staticRenderFns = []

export { render, staticRenderFns }