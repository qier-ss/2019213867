function Animation(json) {
    this.frames = json.frames ? json.frames : []
    this.speed = json.speed ? json.speed : 5
    this.status = 0
    this.setp = -1
    this.onstart = json.onstart ? json.onstart : function () {
        return null
    }
    this.onover = json.onover ? json.onover : function () {
        return null
    }
    this.onstop = json.onstop ? json.onstop : function () {
        return null
    }
    this.setSpeed(this.speed)
}

Animation.prototype.setSpeed = function (speed) {
    this.speed = speed
    this.interval = (10 - this.speed) * 100
    if (this.frames[0]) {
        for (var i = 0; i < this.frames[0].length; i++) {
            $(this.frames[0][i].el).css('transition', 'transform ' + this.interval / 1000 + 's linear')
        }
    }
}

Animation.prototype.play = function () {
    if (this.status === 0) {
        if (this.setp === -1) {
            this.onstart()
        }
        this.status = 1
        this.run()
    }
}

Animation.prototype.stop = function () {
    this.status = 0
}

Animation.prototype.run = function () {
    var _this = this
    let interval = this.interval
    setTimeout(function () {
        if (_this.setp !== _this.frames.length - 1 && _this.status !== 0) {
            _this.next()
            _this.run()
        } else {
            _this.onover()
            _this.status = 0
        }
    }, interval)
}

Animation.prototype.next = function () {
    this.setp < (this.frames.length - 1) && this.setp++
    this.update()
}

Animation.prototype.update = function () {
    let frame = this.frames[this.setp]

    for (let i = 0; i < frame.length; i++) {
        $(frame[i].el).css(frame[i].css)
    }
}

Animation.prototype.prev = function () {
    this.setp > 0 && this.setp--
    this.update()
}
Animation.prototype.next = function () {
    this.setp < this.frames.length - 1 && this.setp++
    this.update()
}

Animation.prototype.close = function () {
    this.frames = []
    this.setp = -1
    this.status = 0
}