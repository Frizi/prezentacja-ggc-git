hljs.initHighlighting();
marked.setOptions({pedantic: false});

var els = [].slice.call(document.querySelectorAll("code.hljs"));

function makeLine(className) {
  var n = document.createElement('div');
  n.classList.add('code-line');
  if(className) {
    n.classList.add(className);
  }
  return n;
}

function findClass(nodeOrText) {
  var text = nodeOrText;
  if(typeof nodeOrText !== 'string') {
    text = nodeOrText.textContent;
  }
  switch(text.charAt(0)) {
    case '+': return 'diff-add';
    case '-': return 'diff-rem';
  }
}

els.forEach((e) => {
  var lines = document.createDocumentFragment();
  var currentLine = makeLine(findClass(e));
  var node = e.childNodes[0];
  while(node) {
    if(node.nodeType === 3 && node.textContent.indexOf('\n') >= 0) {
      var parts = node.textContent.split('\n');
      for(var i = 0; i < parts.length; i++) {
        var part = parts[i];
        var partNode = document.createTextNode(part);
        currentLine.appendChild(partNode);
        if(i + 1 !== parts.length) {
          lines.appendChild(currentLine);
          currentLine = makeLine(findClass(parts[i+1]));
        }
      }
      node = node.nextSibling;
    }
    else {
      var prevNode = node;
      node = node.nextSibling;
      currentLine.appendChild(prevNode);
    }
  }
  lines.appendChild(currentLine);
  e.innerHTML = '';
  e.appendChild(lines, e);
});
