function getCSS(element){
  var rules = window.getMatchedCSSRules(element);

  return $.map(rules, function(rule){
    return rule.cssText
  }).join("\n\n");
}

var el = document.querySelectorAll('[export]')[0];

var css = $.map(el.children, function(node){
  return getCSS(node);
});