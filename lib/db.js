const Tapable = require('tapable')

function copyProperties(from, to) {
	for(var key in from)
		to[key] = from[key];
	return to;
}

class DB extends Tapable {
  constructor(options) {
    // TODO
    super(options)
    this.options = options || {}
  }

  request(options = {}) {
    // TODO
    copyProperties(options, this.options)
    this.applyPlugins1('options', this.options)
    return this.applyPluginsBailResult1('endpoint', this.options)
  }
}

module.exports = DB