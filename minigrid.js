/* @license Minigrid v3.1.1 – minimal cascading grid layout http://alves.im/minigrid */
!function(t, e) {
    "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.Minigrid = e()
}(this, function(t) {
    "use strict";
    function e(t, e) {
        for (var i in e)
            e.hasOwnProperty(i) && (t[i] = e[i]);
        return t
    }
    var i = function(t) {
        var i = t.container instanceof Node ? t.container : document.querySelector(t.container)
          , r = t.item instanceof NodeList ? t.item : i.querySelectorAll(t.item);
        this.props = e(t, {
            container: i,
            nodeList: r
        })
    };
    return i.prototype.mount = function() {
        if (!this.props.container)
            return !1;
        if (!this.props.nodeList || 0 === this.props.nodeList.length)
            return !1;
        var t = "number" == typeof this.props.gutter && isFinite(this.props.gutter) && Math.floor(this.props.gutter) === this.props.gutter ? this.props.gutter : 0
          , e = this.props.done
          , i = this.props.container
          , r = this.props.nodeList;
        i.style.width = "";
        var n = Array.prototype.forEach
          , o = i.getBoundingClientRect().width
          , s = r[0].getBoundingClientRect().width + t
          , p = Math.max(Math.floor((o - t) / s), 1)
          , a = 0;
        o = s * p + t + "px",
        i.style.width = o,
        i.style.position = "relative";
        for (var c = [], u = [], l = 0; l < p; ++l)
            u.push(l * s + t),
            c.push(t);
        this.props.rtl && u.reverse(),
        n.call(r, function(e) {
            var i = c.slice(0).sort(function(t, e) {
                return t - e
            }).shift();
            i = c.indexOf(i);
            var r = parseInt(u[i])
              , n = parseInt(c[i]);
            e.style.position = "absolute",
            e.style.webkitBackfaceVisibility = e.style.backfaceVisibility = "hidden",
            e.style.transformStyle = "preserve-3d",
            e.style.transform = "translate3D(" + r + "px," + n + "px, 0)",
            c[i] += e.getBoundingClientRect().height + t,
            a += 1
        }),
        i.style.display = "";
        var f = c.slice(0).sort(function(t, e) {
            return t - e
        }).pop();
        i.style.height = f + "px",
        "function" == typeof e && e(r)
    }
    ,
    i
});
