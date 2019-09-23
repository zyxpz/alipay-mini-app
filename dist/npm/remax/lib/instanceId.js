var instanceId = 0;
function generate() {
  var id = instanceId;
  instanceId += 1;
  return id;
}

export { generate };
