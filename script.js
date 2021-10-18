function triggerFocus(element) {
  let isFocusIn = "onfocusin" in element;
  let eventType = isFocusIn ? "focusin" : "focus";
  let  event = new Event(eventType, { bubbles: isFocusIn, cancelable: true });
  element.dispatchEvent(event);
}

let displayActiveElement = () => console.log(document.activeElement.id);

function changeFocus()
{
  let element = document.getElementById("div0");
  element.focus();
  displayActiveElement();
}

document.addEventListener("keydown", function(evt){
  if ("Enter" !== evt.key)
    return;

  console.log(`${evt.key}: ${evt.target.id}`);
});

document.addEventListener("keyup", function(evt){
  if ("Tab" !== evt.key)
    return;

  console.log(`${evt.key}: ${evt.target.id}`);
});

document.addEventListener("click", function(evt){
  console.log(`click: ${evt.target.id}`);
});