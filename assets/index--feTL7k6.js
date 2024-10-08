import {
    E as Ra,
    k as J,
    f as pn,
    l as Pi,
    t as $h,
    h as Bh
} from "./index-DkrJLxXi.js";
import {
    r as Lo,
    e as Dn
} from "./events-BBCr8JYX.js";

function Dh(e, t) {
    for (var r = 0; r < t.length; r++) {
        const n = t[r];
        if (typeof n != "string" && !Array.isArray(n)) {
            for (const i in n)
                if (i !== "default" && !(i in e)) {
                    const s = Object.getOwnPropertyDescriptor(n, i);
                    s && Object.defineProperty(e, i, s.get ? s : {
                        enumerable: !0,
                        get: () => n[i]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
const Fh = Object.freeze(Object.defineProperty({
    __proto__: null,
    EventEmitter: Ra,
    default: Ra
}, Symbol.toStringTag, {
    value: "Module"
}));
var Po = {},
    Ln = {},
    Oi = {};
Object.defineProperty(Oi, "__esModule", {
    value: !0
});
Oi.walletLogo = void 0;
const jh = (e, t) => {
    let r;
    switch (e) {
        case "standard":
            return r = t, `data:image/svg+xml,%3Csvg width='${t}' height='${r}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `;
        case "circle":
            return r = t, `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${t}' height='${r}' viewBox='0 0 999.81 999.81'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052fe;%7D.cls-2%7Bfill:%23fefefe;%7D.cls-3%7Bfill:%230152fe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M655-115.9h56c.83,1.59,2.36.88,3.56,1a478,478,0,0,1,75.06,10.42C891.4-81.76,978.33-32.58,1049.19,44q116.7,126,131.94,297.61c.38,4.14-.34,8.53,1.78,12.45v59c-1.58.84-.91,2.35-1,3.56a482.05,482.05,0,0,1-10.38,74.05c-24,106.72-76.64,196.76-158.83,268.93s-178.18,112.82-287.2,122.6c-4.83.43-9.86-.25-14.51,1.77H654c-1-1.68-2.69-.91-4.06-1a496.89,496.89,0,0,1-105.9-18.59c-93.54-27.42-172.78-77.59-236.91-150.94Q199.34,590.1,184.87,426.58c-.47-5.19.25-10.56-1.77-15.59V355c1.68-1,.91-2.7,1-4.06a498.12,498.12,0,0,1,18.58-105.9c26-88.75,72.64-164.9,140.6-227.57q126-116.27,297.21-131.61C645.32-114.57,650.35-113.88,655-115.9Zm377.92,500c0-192.44-156.31-349.49-347.56-350.15-194.13-.68-350.94,155.13-352.29,347.42-1.37,194.55,155.51,352.1,348.56,352.47C876.15,734.23,1032.93,577.84,1032.93,384.11Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-2' d='M1032.93,384.11c0,193.73-156.78,350.12-351.29,349.74-193-.37-349.93-157.92-348.56-352.47C334.43,189.09,491.24,33.28,685.37,34,876.62,34.62,1032.94,191.67,1032.93,384.11ZM683,496.81q43.74,0,87.48,0c15.55,0,25.32-9.72,25.33-25.21q0-87.48,0-175c0-15.83-9.68-25.46-25.59-25.46H595.77c-15.88,0-25.57,9.64-25.58,25.46q0,87.23,0,174.45c0,16.18,9.59,25.7,25.84,25.71Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-3' d='M683,496.81H596c-16.25,0-25.84-9.53-25.84-25.71q0-87.23,0-174.45c0-15.82,9.7-25.46,25.58-25.46H770.22c15.91,0,25.59,9.63,25.59,25.46q0,87.47,0,175c0,15.49-9.78,25.2-25.33,25.21Q726.74,496.84,683,496.81Z' transform='translate(-183.1 115.9)'/%3E%3C/svg%3E`;
        case "text":
            return r = (.1 * t).toFixed(2), `data:image/svg+xml,%3Csvg width='${t}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;
        case "textWithLogo":
            return r = (.25 * t).toFixed(2), `data:image/svg+xml,%3Csvg width='${t}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`;
        case "textLight":
            return r = (.1 * t).toFixed(2), `data:image/svg+xml,%3Csvg width='${t}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;
        case "textWithLogoLight":
            return r = (.25 * t).toFixed(2), `data:image/svg+xml,%3Csvg width='${t}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`;
        default:
            return r = t, `data:image/svg+xml,%3Csvg width='${t}' height='${r}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `
    }
};
Oi.walletLogo = jh;
var $i = {};
Object.defineProperty($i, "__esModule", {
    value: !0
});
$i.LINK_API_URL = void 0;
$i.LINK_API_URL = "https://www.walletlink.org";
var z = {},
    Oo = {
        exports: {}
    };
Oo.exports;
(function (e) {
    (function (t, r) {
        function n(v, o) {
            if (!v) throw new Error(o || "Assertion failed")
        }

        function i(v, o) {
            v.super_ = o;
            var d = function () {};
            d.prototype = o.prototype, v.prototype = new d, v.prototype.constructor = v
        }

        function s(v, o, d) {
            if (s.isBN(v)) return v;
            this.negative = 0, this.words = null, this.length = 0, this.red = null, v !== null && ((o === "le" || o === "be") && (d = o, o = 10), this._init(v || 0, o || 10, d || "be"))
        }
        typeof t == "object" ? t.exports = s : r.BN = s, s.BN = s, s.wordSize = 26;
        var a;
        try {
            typeof window < "u" && typeof window.Buffer < "u" ? a = window.Buffer : a = Lo.Buffer
        } catch {}
        s.isBN = function (o) {
            return o instanceof s ? !0 : o !== null && typeof o == "object" && o.constructor.wordSize === s.wordSize && Array.isArray(o.words)
        }, s.max = function (o, d) {
            return o.cmp(d) > 0 ? o : d
        }, s.min = function (o, d) {
            return o.cmp(d) < 0 ? o : d
        }, s.prototype._init = function (o, d, g) {
            if (typeof o == "number") return this._initNumber(o, d, g);
            if (typeof o == "object") return this._initArray(o, d, g);
            d === "hex" && (d = 16), n(d === (d | 0) && d >= 2 && d <= 36), o = o.toString().replace(/\s+/g, "");
            var m = 0;
            o[0] === "-" && (m++, this.negative = 1), m < o.length && (d === 16 ? this._parseHex(o, m, g) : (this._parseBase(o, d, m), g === "le" && this._initArray(this.toArray(), d, g)))
        }, s.prototype._initNumber = function (o, d, g) {
            o < 0 && (this.negative = 1, o = -o), o < 67108864 ? (this.words = [o & 67108863], this.length = 1) : o < 4503599627370496 ? (this.words = [o & 67108863, o / 67108864 & 67108863], this.length = 2) : (n(o < 9007199254740992), this.words = [o & 67108863, o / 67108864 & 67108863, 1], this.length = 3), g === "le" && this._initArray(this.toArray(), d, g)
        }, s.prototype._initArray = function (o, d, g) {
            if (n(typeof o.length == "number"), o.length <= 0) return this.words = [0], this.length = 1, this;
            this.length = Math.ceil(o.length / 3), this.words = new Array(this.length);
            for (var m = 0; m < this.length; m++) this.words[m] = 0;
            var y, C, x = 0;
            if (g === "be")
                for (m = o.length - 1, y = 0; m >= 0; m -= 3) C = o[m] | o[m - 1] << 8 | o[m - 2] << 16, this.words[y] |= C << x & 67108863, this.words[y + 1] = C >>> 26 - x & 67108863, x += 24, x >= 26 && (x -= 26, y++);
            else if (g === "le")
                for (m = 0, y = 0; m < o.length; m += 3) C = o[m] | o[m + 1] << 8 | o[m + 2] << 16, this.words[y] |= C << x & 67108863, this.words[y + 1] = C >>> 26 - x & 67108863, x += 24, x >= 26 && (x -= 26, y++);
            return this._strip()
        };

        function c(v, o) {
            var d = v.charCodeAt(o);
            if (d >= 48 && d <= 57) return d - 48;
            if (d >= 65 && d <= 70) return d - 55;
            if (d >= 97 && d <= 102) return d - 87;
            n(!1, "Invalid character in " + v)
        }

        function l(v, o, d) {
            var g = c(v, d);
            return d - 1 >= o && (g |= c(v, d - 1) << 4), g
        }
        s.prototype._parseHex = function (o, d, g) {
            this.length = Math.ceil((o.length - d) / 6), this.words = new Array(this.length);
            for (var m = 0; m < this.length; m++) this.words[m] = 0;
            var y = 0,
                C = 0,
                x;
            if (g === "be")
                for (m = o.length - 1; m >= d; m -= 2) x = l(o, d, m) << y, this.words[C] |= x & 67108863, y >= 18 ? (y -= 18, C += 1, this.words[C] |= x >>> 26) : y += 8;
            else {
                var b = o.length - d;
                for (m = b % 2 === 0 ? d + 1 : d; m < o.length; m += 2) x = l(o, d, m) << y, this.words[C] |= x & 67108863, y >= 18 ? (y -= 18, C += 1, this.words[C] |= x >>> 26) : y += 8
            }
            this._strip()
        };

        function h(v, o, d, g) {
            for (var m = 0, y = 0, C = Math.min(v.length, d), x = o; x < C; x++) {
                var b = v.charCodeAt(x) - 48;
                m *= g, b >= 49 ? y = b - 49 + 10 : b >= 17 ? y = b - 17 + 10 : y = b, n(b >= 0 && y < g, "Invalid character"), m += y
            }
            return m
        }
        s.prototype._parseBase = function (o, d, g) {
            this.words = [0], this.length = 1;
            for (var m = 0, y = 1; y <= 67108863; y *= d) m++;
            m--, y = y / d | 0;
            for (var C = o.length - g, x = C % m, b = Math.min(C, C - x) + g, u = 0, S = g; S < b; S += m) u = h(o, S, S + m, d), this.imuln(y), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u);
            if (x !== 0) {
                var W = 1;
                for (u = h(o, S, o.length, d), S = 0; S < x; S++) W *= d;
                this.imuln(W), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u)
            }
            this._strip()
        }, s.prototype.copy = function (o) {
            o.words = new Array(this.length);
            for (var d = 0; d < this.length; d++) o.words[d] = this.words[d];
            o.length = this.length, o.negative = this.negative, o.red = this.red
        };

        function p(v, o) {
            v.words = o.words, v.length = o.length, v.negative = o.negative, v.red = o.red
        }
        if (s.prototype._move = function (o) {
                p(o, this)
            }, s.prototype.clone = function () {
                var o = new s(null);
                return this.copy(o), o
            }, s.prototype._expand = function (o) {
                for (; this.length < o;) this.words[this.length++] = 0;
                return this
            }, s.prototype._strip = function () {
                for (; this.length > 1 && this.words[this.length - 1] === 0;) this.length--;
                return this._normSign()
            }, s.prototype._normSign = function () {
                return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this
            }, typeof Symbol < "u" && typeof Symbol.for == "function") try {
            s.prototype[Symbol.for("nodejs.util.inspect.custom")] = f
        } catch {
            s.prototype.inspect = f
        } else s.prototype.inspect = f;

        function f() {
            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
        }
        var _ = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
            R = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
            A = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
        s.prototype.toString = function (o, d) {
            o = o || 10, d = d | 0 || 1;
            var g;
            if (o === 16 || o === "hex") {
                g = "";
                for (var m = 0, y = 0, C = 0; C < this.length; C++) {
                    var x = this.words[C],
                        b = ((x << m | y) & 16777215).toString(16);
                    y = x >>> 24 - m & 16777215, m += 2, m >= 26 && (m -= 26, C--), y !== 0 || C !== this.length - 1 ? g = _[6 - b.length] + b + g : g = b + g
                }
                for (y !== 0 && (g = y.toString(16) + g); g.length % d !== 0;) g = "0" + g;
                return this.negative !== 0 && (g = "-" + g), g
            }
            if (o === (o | 0) && o >= 2 && o <= 36) {
                var u = R[o],
                    S = A[o];
                g = "";
                var W = this.clone();
                for (W.negative = 0; !W.isZero();) {
                    var q = W.modrn(S).toString(o);
                    W = W.idivn(S), W.isZero() ? g = q + g : g = _[u - q.length] + q + g
                }
                for (this.isZero() && (g = "0" + g); g.length % d !== 0;) g = "0" + g;
                return this.negative !== 0 && (g = "-" + g), g
            }
            n(!1, "Base should be between 2 and 36")
        }, s.prototype.toNumber = function () {
            var o = this.words[0];
            return this.length === 2 ? o += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? o += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -o : o
        }, s.prototype.toJSON = function () {
            return this.toString(16, 2)
        }, a && (s.prototype.toBuffer = function (o, d) {
            return this.toArrayLike(a, o, d)
        }), s.prototype.toArray = function (o, d) {
            return this.toArrayLike(Array, o, d)
        };
        var O = function (o, d) {
            return o.allocUnsafe ? o.allocUnsafe(d) : new o(d)
        };
        s.prototype.toArrayLike = function (o, d, g) {
            this._strip();
            var m = this.byteLength(),
                y = g || Math.max(1, m);
            n(m <= y, "byte array longer than desired length"), n(y > 0, "Requested array length <= 0");
            var C = O(o, y),
                x = d === "le" ? "LE" : "BE";
            return this["_toArrayLike" + x](C, m), C
        }, s.prototype._toArrayLikeLE = function (o, d) {
            for (var g = 0, m = 0, y = 0, C = 0; y < this.length; y++) {
                var x = this.words[y] << C | m;
                o[g++] = x & 255, g < o.length && (o[g++] = x >> 8 & 255), g < o.length && (o[g++] = x >> 16 & 255), C === 6 ? (g < o.length && (o[g++] = x >> 24 & 255), m = 0, C = 0) : (m = x >>> 24, C += 2)
            }
            if (g < o.length)
                for (o[g++] = m; g < o.length;) o[g++] = 0
        }, s.prototype._toArrayLikeBE = function (o, d) {
            for (var g = o.length - 1, m = 0, y = 0, C = 0; y < this.length; y++) {
                var x = this.words[y] << C | m;
                o[g--] = x & 255, g >= 0 && (o[g--] = x >> 8 & 255), g >= 0 && (o[g--] = x >> 16 & 255), C === 6 ? (g >= 0 && (o[g--] = x >> 24 & 255), m = 0, C = 0) : (m = x >>> 24, C += 2)
            }
            if (g >= 0)
                for (o[g--] = m; g >= 0;) o[g--] = 0
        }, Math.clz32 ? s.prototype._countBits = function (o) {
            return 32 - Math.clz32(o)
        } : s.prototype._countBits = function (o) {
            var d = o,
                g = 0;
            return d >= 4096 && (g += 13, d >>>= 13), d >= 64 && (g += 7, d >>>= 7), d >= 8 && (g += 4, d >>>= 4), d >= 2 && (g += 2, d >>>= 2), g + d
        }, s.prototype._zeroBits = function (o) {
            if (o === 0) return 26;
            var d = o,
                g = 0;
            return d & 8191 || (g += 13, d >>>= 13), d & 127 || (g += 7, d >>>= 7), d & 15 || (g += 4, d >>>= 4), d & 3 || (g += 2, d >>>= 2), d & 1 || g++, g
        }, s.prototype.bitLength = function () {
            var o = this.words[this.length - 1],
                d = this._countBits(o);
            return (this.length - 1) * 26 + d
        };

        function L(v) {
            for (var o = new Array(v.bitLength()), d = 0; d < o.length; d++) {
                var g = d / 26 | 0,
                    m = d % 26;
                o[d] = v.words[g] >>> m & 1
            }
            return o
        }
        s.prototype.zeroBits = function () {
            if (this.isZero()) return 0;
            for (var o = 0, d = 0; d < this.length; d++) {
                var g = this._zeroBits(this.words[d]);
                if (o += g, g !== 26) break
            }
            return o
        }, s.prototype.byteLength = function () {
            return Math.ceil(this.bitLength() / 8)
        }, s.prototype.toTwos = function (o) {
            return this.negative !== 0 ? this.abs().inotn(o).iaddn(1) : this.clone()
        }, s.prototype.fromTwos = function (o) {
            return this.testn(o - 1) ? this.notn(o).iaddn(1).ineg() : this.clone()
        }, s.prototype.isNeg = function () {
            return this.negative !== 0
        }, s.prototype.neg = function () {
            return this.clone().ineg()
        }, s.prototype.ineg = function () {
            return this.isZero() || (this.negative ^= 1), this
        }, s.prototype.iuor = function (o) {
            for (; this.length < o.length;) this.words[this.length++] = 0;
            for (var d = 0; d < o.length; d++) this.words[d] = this.words[d] | o.words[d];
            return this._strip()
        }, s.prototype.ior = function (o) {
            return n((this.negative | o.negative) === 0), this.iuor(o)
        }, s.prototype.or = function (o) {
            return this.length > o.length ? this.clone().ior(o) : o.clone().ior(this)
        }, s.prototype.uor = function (o) {
            return this.length > o.length ? this.clone().iuor(o) : o.clone().iuor(this)
        }, s.prototype.iuand = function (o) {
            var d;
            this.length > o.length ? d = o : d = this;
            for (var g = 0; g < d.length; g++) this.words[g] = this.words[g] & o.words[g];
            return this.length = d.length, this._strip()
        }, s.prototype.iand = function (o) {
            return n((this.negative | o.negative) === 0), this.iuand(o)
        }, s.prototype.and = function (o) {
            return this.length > o.length ? this.clone().iand(o) : o.clone().iand(this)
        }, s.prototype.uand = function (o) {
            return this.length > o.length ? this.clone().iuand(o) : o.clone().iuand(this)
        }, s.prototype.iuxor = function (o) {
            var d, g;
            this.length > o.length ? (d = this, g = o) : (d = o, g = this);
            for (var m = 0; m < g.length; m++) this.words[m] = d.words[m] ^ g.words[m];
            if (this !== d)
                for (; m < d.length; m++) this.words[m] = d.words[m];
            return this.length = d.length, this._strip()
        }, s.prototype.ixor = function (o) {
            return n((this.negative | o.negative) === 0), this.iuxor(o)
        }, s.prototype.xor = function (o) {
            return this.length > o.length ? this.clone().ixor(o) : o.clone().ixor(this)
        }, s.prototype.uxor = function (o) {
            return this.length > o.length ? this.clone().iuxor(o) : o.clone().iuxor(this)
        }, s.prototype.inotn = function (o) {
            n(typeof o == "number" && o >= 0);
            var d = Math.ceil(o / 26) | 0,
                g = o % 26;
            this._expand(d), g > 0 && d--;
            for (var m = 0; m < d; m++) this.words[m] = ~this.words[m] & 67108863;
            return g > 0 && (this.words[m] = ~this.words[m] & 67108863 >> 26 - g), this._strip()
        }, s.prototype.notn = function (o) {
            return this.clone().inotn(o)
        }, s.prototype.setn = function (o, d) {
            n(typeof o == "number" && o >= 0);
            var g = o / 26 | 0,
                m = o % 26;
            return this._expand(g + 1), d ? this.words[g] = this.words[g] | 1 << m : this.words[g] = this.words[g] & ~(1 << m), this._strip()
        }, s.prototype.iadd = function (o) {
            var d;
            if (this.negative !== 0 && o.negative === 0) return this.negative = 0, d = this.isub(o), this.negative ^= 1, this._normSign();
            if (this.negative === 0 && o.negative !== 0) return o.negative = 0, d = this.isub(o), o.negative = 1, d._normSign();
            var g, m;
            this.length > o.length ? (g = this, m = o) : (g = o, m = this);
            for (var y = 0, C = 0; C < m.length; C++) d = (g.words[C] | 0) + (m.words[C] | 0) + y, this.words[C] = d & 67108863, y = d >>> 26;
            for (; y !== 0 && C < g.length; C++) d = (g.words[C] | 0) + y, this.words[C] = d & 67108863, y = d >>> 26;
            if (this.length = g.length, y !== 0) this.words[this.length] = y, this.length++;
            else if (g !== this)
                for (; C < g.length; C++) this.words[C] = g.words[C];
            return this
        }, s.prototype.add = function (o) {
            var d;
            return o.negative !== 0 && this.negative === 0 ? (o.negative = 0, d = this.sub(o), o.negative ^= 1, d) : o.negative === 0 && this.negative !== 0 ? (this.negative = 0, d = o.sub(this), this.negative = 1, d) : this.length > o.length ? this.clone().iadd(o) : o.clone().iadd(this)
        }, s.prototype.isub = function (o) {
            if (o.negative !== 0) {
                o.negative = 0;
                var d = this.iadd(o);
                return o.negative = 1, d._normSign()
            } else if (this.negative !== 0) return this.negative = 0, this.iadd(o), this.negative = 1, this._normSign();
            var g = this.cmp(o);
            if (g === 0) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
            var m, y;
            g > 0 ? (m = this, y = o) : (m = o, y = this);
            for (var C = 0, x = 0; x < y.length; x++) d = (m.words[x] | 0) - (y.words[x] | 0) + C, C = d >> 26, this.words[x] = d & 67108863;
            for (; C !== 0 && x < m.length; x++) d = (m.words[x] | 0) + C, C = d >> 26, this.words[x] = d & 67108863;
            if (C === 0 && x < m.length && m !== this)
                for (; x < m.length; x++) this.words[x] = m.words[x];
            return this.length = Math.max(this.length, x), m !== this && (this.negative = 1), this._strip()
        }, s.prototype.sub = function (o) {
            return this.clone().isub(o)
        };

        function M(v, o, d) {
            d.negative = o.negative ^ v.negative;
            var g = v.length + o.length | 0;
            d.length = g, g = g - 1 | 0;
            var m = v.words[0] | 0,
                y = o.words[0] | 0,
                C = m * y,
                x = C & 67108863,
                b = C / 67108864 | 0;
            d.words[0] = x;
            for (var u = 1; u < g; u++) {
                for (var S = b >>> 26, W = b & 67108863, q = Math.min(u, o.length - 1), I = Math.max(0, u - v.length + 1); I <= q; I++) {
                    var N = u - I | 0;
                    m = v.words[N] | 0, y = o.words[I] | 0, C = m * y + W, S += C / 67108864 | 0, W = C & 67108863
                }
                d.words[u] = W | 0, b = S | 0
            }
            return b !== 0 ? d.words[u] = b | 0 : d.length--, d._strip()
        }
        var k = function (o, d, g) {
            var m = o.words,
                y = d.words,
                C = g.words,
                x = 0,
                b, u, S, W = m[0] | 0,
                q = W & 8191,
                I = W >>> 13,
                N = m[1] | 0,
                B = N & 8191,
                U = N >>> 13,
                te = m[2] | 0,
                w = te & 8191,
                E = te >>> 13,
                F = m[3] | 0,
                j = F & 8191,
                K = F >>> 13,
                ee = m[4] | 0,
                Z = ee & 8191,
                le = ee >>> 13,
                Mt = m[5] | 0,
                ge = Mt & 8191,
                me = Mt >>> 13,
                Vt = m[6] | 0,
                de = Vt & 8191,
                fe = Vt >>> 13,
                Ot = m[7] | 0,
                he = Ot & 8191,
                ue = Ot >>> 13,
                ct = m[8] | 0,
                ve = ct & 8191,
                be = ct >>> 13,
                Pr = m[9] | 0,
                ye = Pr & 8191,
                we = Pr >>> 13,
                Or = y[0] | 0,
                Ee = Or & 8191,
                Se = Or >>> 13,
                $r = y[1] | 0,
                Re = $r & 8191,
                Me = $r >>> 13,
                Br = y[2] | 0,
                Ce = Br & 8191,
                ke = Br >>> 13,
                Dr = y[3] | 0,
                Ie = Dr & 8191,
                xe = Dr >>> 13,
                Fr = y[4] | 0,
                Ae = Fr & 8191,
                Ne = Fr >>> 13,
                jr = y[5] | 0,
                Te = jr & 8191,
                Le = jr >>> 13,
                Hr = y[6] | 0,
                Pe = Hr & 8191,
                Oe = Hr >>> 13,
                Ur = y[7] | 0,
                $e = Ur & 8191,
                Be = Ur >>> 13,
                Wr = y[8] | 0,
                De = Wr & 8191,
                Fe = Wr >>> 13,
                Vr = y[9] | 0,
                je = Vr & 8191,
                He = Vr >>> 13;
            g.negative = o.negative ^ d.negative, g.length = 19, b = Math.imul(q, Ee), u = Math.imul(q, Se), u = u + Math.imul(I, Ee) | 0, S = Math.imul(I, Se);
            var Yt = (x + b | 0) + ((u & 8191) << 13) | 0;
            x = (S + (u >>> 13) | 0) + (Yt >>> 26) | 0, Yt &= 67108863, b = Math.imul(B, Ee), u = Math.imul(B, Se), u = u + Math.imul(U, Ee) | 0, S = Math.imul(U, Se), b = b + Math.imul(q, Re) | 0, u = u + Math.imul(q, Me) | 0, u = u + Math.imul(I, Re) | 0, S = S + Math.imul(I, Me) | 0;
            var Xt = (x + b | 0) + ((u & 8191) << 13) | 0;
            x = (S + (u >>> 13) | 0) + (Xt >>> 26) | 0, Xt &= 67108863, b = Math.imul(w, Ee), u = Math.imul(w, Se), u = u + Math.imul(E, Ee) | 0, S = Math.imul(E, Se), b = b + Math.imul(B, Re) | 0, u = u + Math.imul(B, Me) | 0, u = u + Math.imul(U, Re) | 0, S = S + Math.imul(U, Me) | 0, b = b + Math.imul(q, Ce) | 0, u = u + Math.imul(q, ke) | 0, u = u + Math.imul(I, Ce) | 0, S = S + Math.imul(I, ke) | 0;
            var er = (x + b | 0) + ((u & 8191) << 13) | 0;
            x = (S + (u >>> 13) | 0) + (er >>> 26) | 0, er &= 67108863, b = Math.imul(j, Ee), u = Math.imul(j, Se), u = u + Math.imul(K, Ee) | 0, S = Math.imul(K, Se), b = b + Math.imul(w, Re) | 0, u = u + Math.imul(w, Me) | 0, u = u + Math.imul(E, Re) | 0, S = S + Math.imul(E, Me) | 0, b = b + Math.imul(B, Ce) | 0, u = u + Math.imul(B, ke) | 0, u = u + Math.imul(U, Ce) | 0, S = S + Math.imul(U, ke) | 0, b = b + Math.imul(q, Ie) | 0, u = u + Math.imul(q, xe) | 0, u = u + Math.imul(I, Ie) | 0, S = S + Math.imul(I, xe) | 0;
            var tr = (x + b | 0) + ((u & 8191) << 13) | 0;
            x = (S + (u >>> 13) | 0) + (tr >>> 26) | 0, tr &= 67108863, b = Math.imul(Z, Ee), u = Math.imul(Z, Se), u = u + Math.imul(le, Ee) | 0, S = Math.imul(le, Se), b = b + Math.imul(j, Re) | 0, u = u + Math.imul(j, Me) | 0, u = u + Math.imul(K, Re) | 0, S = S + Math.imul(K, Me) | 0, b = b + Math.imul(w, Ce) | 0, u = u + Math.imul(w, ke) | 0, u = u + Math.imul(E, Ce) | 0, S = S + Math.imul(E, ke) | 0, b = b + Math.imul(B, Ie) | 0, u = u + Math.imul(B, xe) | 0, u = u + Math.imul(U, Ie) | 0, S = S + Math.imul(U, xe) | 0, b = b + Math.imul(q, Ae) | 0, u = u + Math.imul(q, Ne) | 0, u = u + Math.imul(I, Ae) | 0, S = S + Math.imul(I, Ne) | 0;
            var rr = (x + b | 0) + ((u & 8191) << 13) | 0;
            x = (S + (u >>> 13) | 0) + (rr >>> 26) | 0, rr &= 67108863, b = Math.imul(ge, Ee), u = Math.imul(ge, Se), u = u + Math.imul(me, Ee) | 0, S = Math.imul(me, Se), b = b + Math.imul(Z, Re) | 0, u = u + Math.imul(Z, Me) | 0, u = u + Math.imul(le, Re) | 0, S = S + Math.imul(le, Me) | 0, b = b + Math.imul(j, Ce) | 0, u = u + Math.imul(j, ke) | 0, u = u + Math.imul(K, Ce) | 0, S = S + Math.imul(K, ke) | 0, b = b + Math.imul(w, Ie) | 0, u = u + Math.imul(w, xe) | 0, u = u + Math.imul(E, Ie) | 0, S = S + Math.imul(E, xe) | 0, b = b + Math.imul(B, Ae) | 0, u = u + Math.imul(B, Ne) | 0, u = u + Math.imul(U, Ae) | 0, S = S + Math.imul(U, Ne) | 0, b = b + Math.imul(q, Te) | 0, u = u + Math.imul(q, Le) | 0, u = u + Math.imul(I, Te) | 0, S = S + Math.imul(I, Le) | 0;
            var nr = (x + b | 0) + ((u & 8191) << 13) | 0;
            x = (S + (u >>> 13) | 0) + (nr >>> 26) | 0, nr &= 67108863, b = Math.imul(de, Ee), u = Math.imul(de, Se), u = u + Math.imul(fe, Ee) | 0, S = Math.imul(fe, Se), b = b + Math.imul(ge, Re) | 0, u = u + Math.imul(ge, Me) | 0, u = u + Math.imul(me, Re) | 0, S = S + Math.imul(me, Me) | 0, b = b + Math.imul(Z, Ce) | 0, u = u + Math.imul(Z, ke) | 0, u = u + Math.imul(le, Ce) | 0, S = S + Math.imul(le, ke) | 0, b = b + Math.imul(j, Ie) | 0, u = u + Math.imul(j, xe) | 0, u = u + Math.imul(K, Ie) | 0, S = S + Math.imul(K, xe) | 0, b = b + Math.imul(w, Ae) | 0, u = u + Math.imul(w, Ne) | 0, u = u + Math.imul(E, Ae) | 0, S = S + Math.imul(E, Ne) | 0, b = b + Math.imul(B, Te) | 0, u = u + Math.imul(B, Le) | 0, u = u + Math.imul(U, Te) | 0, S = S + Math.imul(U, Le) | 0, b = b + Math.imul(q, Pe) | 0, u = u + Math.imul(q, Oe) | 0, u = u + Math.imul(I, Pe) | 0, S = S + Math.imul(I, Oe) | 0;
            var ir = (x + b | 0) + ((u & 8191) << 13) | 0;
            x = (S + (u >>> 13) | 0) + (ir >>> 26) | 0, ir &= 67108863, b = Math.imul(he, Ee), u = Math.imul(he, Se), u = u + Math.imul(ue, Ee) | 0, S = Math.imul(ue, Se), b = b + Math.imul(de, Re) | 0, u = u + Math.imul(de, Me) | 0, u = u + Math.imul(fe, Re) | 0, S = S + Math.imul(fe, Me) | 0, b = b + Math.imul(ge, Ce) | 0, u = u + Math.imul(ge, ke) | 0, u = u + Math.imul(me, Ce) | 0, S = S + Math.imul(me, ke) | 0, b = b + Math.imul(Z, Ie) | 0, u = u + Math.imul(Z, xe) | 0, u = u + Math.imul(le, Ie) | 0, S = S + Math.imul(le, xe) | 0, b = b + Math.imul(j, Ae) | 0, u = u + Math.imul(j, Ne) | 0, u = u + Math.imul(K, Ae) | 0, S = S + Math.imul(K, Ne) | 0, b = b + Math.imul(w, Te) | 0, u = u + Math.imul(w, Le) | 0, u = u + Math.imul(E, Te) | 0, S = S + Math.imul(E, Le) | 0, b = b + Math.imul(B, Pe) | 0, u = u + Math.imul(B, Oe) | 0, u = u + Math.imul(U, Pe) | 0, S = S + Math.imul(U, Oe) | 0, b = b + Math.imul(q, $e) | 0, u = u + Math.imul(q, Be) | 0, u = u + Math.imul(I, $e) | 0, S = S + Math.imul(I, Be) | 0;
            var sr = (x + b | 0) + ((u & 8191) << 13) | 0;
            x = (S + (u >>> 13) | 0) + (sr >>> 26) | 0, sr &= 67108863, b = Math.imul(ve, Ee), u = Math.imul(ve, Se), u = u + Math.imul(be, Ee) | 0, S = Math.imul(be, Se), b = b + Math.imul(he, Re) | 0, u = u + Math.imul(he, Me) | 0, u = u + Math.imul(ue, Re) | 0, S = S + Math.imul(ue, Me) | 0, b = b + Math.imul(de, Ce) | 0, u = u + Math.imul(de, ke) | 0, u = u + Math.imul(fe, Ce) | 0, S = S + Math.imul(fe, ke) | 0, b = b + Math.imul(ge, Ie) | 0, u = u + Math.imul(ge, xe) | 0, u = u + Math.imul(me, Ie) | 0, S = S + Math.imul(me, xe) | 0, b = b + Math.imul(Z, Ae) | 0, u = u + Math.imul(Z, Ne) | 0, u = u + Math.imul(le, Ae) | 0, S = S + Math.imul(le, Ne) | 0, b = b + Math.imul(j, Te) | 0, u = u + Math.imul(j, Le) | 0, u = u + Math.imul(K, Te) | 0, S = S + Math.imul(K, Le) | 0, b = b + Math.imul(w, Pe) | 0, u = u + Math.imul(w, Oe) | 0, u = u + Math.imul(E, Pe) | 0, S = S + Math.imul(E, Oe) | 0, b = b + Math.imul(B, $e) | 0, u = u + Math.imul(B, Be) | 0, u = u + Math.imul(U, $e) | 0, S = S + Math.imul(U, Be) | 0, b = b + Math.imul(q, De) | 0, u = u + Math.imul(q, Fe) | 0, u = u + Math.imul(I, De) | 0, S = S + Math.imul(I, Fe) | 0;
            var or = (x + b | 0) + ((u & 8191) << 13) | 0;
            x = (S + (u >>> 13) | 0) + (or >>> 26) | 0, or &= 67108863, b = Math.imul(ye, Ee), u = Math.imul(ye, Se), u = u + Math.imul(we, Ee) | 0, S = Math.imul(we, Se), b = b + Math.imul(ve, Re) | 0, u = u + Math.imul(ve, Me) | 0, u = u + Math.imul(be, Re) | 0, S = S + Math.imul(be, Me) | 0, b = b + Math.imul(he, Ce) | 0, u = u + Math.imul(he, ke) | 0, u = u + Math.imul(ue, Ce) | 0, S = S + Math.imul(ue, ke) | 0, b = b + Math.imul(de, Ie) | 0, u = u + Math.imul(de, xe) | 0, u = u + Math.imul(fe, Ie) | 0, S = S + Math.imul(fe, xe) | 0, b = b + Math.imul(ge, Ae) | 0, u = u + Math.imul(ge, Ne) | 0, u = u + Math.imul(me, Ae) | 0, S = S + Math.imul(me, Ne) | 0, b = b + Math.imul(Z, Te) | 0, u = u + Math.imul(Z, Le) | 0, u = u + Math.imul(le, Te) | 0, S = S + Math.imul(le, Le) | 0, b = b + Math.imul(j, Pe) | 0, u = u + Math.imul(j, Oe) | 0, u = u + Math.imul(K, Pe) | 0, S = S + Math.imul(K, Oe) | 0, b = b + Math.imul(w, $e) | 0, u = u + Math.imul(w, Be) | 0, u = u + Math.imul(E, $e) | 0, S = S + Math.imul(E, Be) | 0, b = b + Math.imul(B, De) | 0, u = u + Math.imul(B, Fe) | 0, u = u + Math.imul(U, De) | 0, S = S + Math.imul(U, Fe) | 0, b = b + Math.imul(q, je) | 0, u = u + Math.imul(q, He) | 0, u = u + Math.imul(I, je) | 0, S = S + Math.imul(I, He) | 0;
            var ar = (x + b | 0) + ((u & 8191) << 13) | 0;
            x = (S + (u >>> 13) | 0) + (ar >>> 26) | 0, ar &= 67108863, b = Math.imul(ye, Re), u = Math.imul(ye, Me), u = u + Math.imul(we, Re) | 0, S = Math.imul(we, Me), b = b + Math.imul(ve, Ce) | 0, u = u + Math.imul(ve, ke) | 0, u = u + Math.imul(be, Ce) | 0, S = S + Math.imul(be, ke) | 0, b = b + Math.imul(he, Ie) | 0, u = u + Math.imul(he, xe) | 0, u = u + Math.imul(ue, Ie) | 0, S = S + Math.imul(ue, xe) | 0, b = b + Math.imul(de, Ae) | 0, u = u + Math.imul(de, Ne) | 0, u = u + Math.imul(fe, Ae) | 0, S = S + Math.imul(fe, Ne) | 0, b = b + Math.imul(ge, Te) | 0, u = u + Math.imul(ge, Le) | 0, u = u + Math.imul(me, Te) | 0, S = S + Math.imul(me, Le) | 0, b = b + Math.imul(Z, Pe) | 0, u = u + Math.imul(Z, Oe) | 0, u = u + Math.imul(le, Pe) | 0, S = S + Math.imul(le, Oe) | 0, b = b + Math.imul(j, $e) | 0, u = u + Math.imul(j, Be) | 0, u = u + Math.imul(K, $e) | 0, S = S + Math.imul(K, Be) | 0, b = b + Math.imul(w, De) | 0, u = u + Math.imul(w, Fe) | 0, u = u + Math.imul(E, De) | 0, S = S + Math.imul(E, Fe) | 0, b = b + Math.imul(B, je) | 0, u = u + Math.imul(B, He) | 0, u = u + Math.imul(U, je) | 0, S = S + Math.imul(U, He) | 0;
            var cr = (x + b | 0) + ((u & 8191) << 13) | 0;
            x = (S + (u >>> 13) | 0) + (cr >>> 26) | 0, cr &= 67108863, b = Math.imul(ye, Ce), u = Math.imul(ye, ke), u = u + Math.imul(we, Ce) | 0, S = Math.imul(we, ke), b = b + Math.imul(ve, Ie) | 0, u = u + Math.imul(ve, xe) | 0, u = u + Math.imul(be, Ie) | 0, S = S + Math.imul(be, xe) | 0, b = b + Math.imul(he, Ae) | 0, u = u + Math.imul(he, Ne) | 0, u = u + Math.imul(ue, Ae) | 0, S = S + Math.imul(ue, Ne) | 0, b = b + Math.imul(de, Te) | 0, u = u + Math.imul(de, Le) | 0, u = u + Math.imul(fe, Te) | 0, S = S + Math.imul(fe, Le) | 0, b = b + Math.imul(ge, Pe) | 0, u = u + Math.imul(ge, Oe) | 0, u = u + Math.imul(me, Pe) | 0, S = S + Math.imul(me, Oe) | 0, b = b + Math.imul(Z, $e) | 0, u = u + Math.imul(Z, Be) | 0, u = u + Math.imul(le, $e) | 0, S = S + Math.imul(le, Be) | 0, b = b + Math.imul(j, De) | 0, u = u + Math.imul(j, Fe) | 0, u = u + Math.imul(K, De) | 0, S = S + Math.imul(K, Fe) | 0, b = b + Math.imul(w, je) | 0, u = u + Math.imul(w, He) | 0, u = u + Math.imul(E, je) | 0, S = S + Math.imul(E, He) | 0;
            var lr = (x + b | 0) + ((u & 8191) << 13) | 0;
            x = (S + (u >>> 13) | 0) + (lr >>> 26) | 0, lr &= 67108863, b = Math.imul(ye, Ie), u = Math.imul(ye, xe), u = u + Math.imul(we, Ie) | 0, S = Math.imul(we, xe), b = b + Math.imul(ve, Ae) | 0, u = u + Math.imul(ve, Ne) | 0, u = u + Math.imul(be, Ae) | 0, S = S + Math.imul(be, Ne) | 0, b = b + Math.imul(he, Te) | 0, u = u + Math.imul(he, Le) | 0, u = u + Math.imul(ue, Te) | 0, S = S + Math.imul(ue, Le) | 0, b = b + Math.imul(de, Pe) | 0, u = u + Math.imul(de, Oe) | 0, u = u + Math.imul(fe, Pe) | 0, S = S + Math.imul(fe, Oe) | 0, b = b + Math.imul(ge, $e) | 0, u = u + Math.imul(ge, Be) | 0, u = u + Math.imul(me, $e) | 0, S = S + Math.imul(me, Be) | 0, b = b + Math.imul(Z, De) | 0, u = u + Math.imul(Z, Fe) | 0, u = u + Math.imul(le, De) | 0, S = S + Math.imul(le, Fe) | 0, b = b + Math.imul(j, je) | 0, u = u + Math.imul(j, He) | 0, u = u + Math.imul(K, je) | 0, S = S + Math.imul(K, He) | 0;
            var ur = (x + b | 0) + ((u & 8191) << 13) | 0;
            x = (S + (u >>> 13) | 0) + (ur >>> 26) | 0, ur &= 67108863, b = Math.imul(ye, Ae), u = Math.imul(ye, Ne), u = u + Math.imul(we, Ae) | 0, S = Math.imul(we, Ne), b = b + Math.imul(ve, Te) | 0, u = u + Math.imul(ve, Le) | 0, u = u + Math.imul(be, Te) | 0, S = S + Math.imul(be, Le) | 0, b = b + Math.imul(he, Pe) | 0, u = u + Math.imul(he, Oe) | 0, u = u + Math.imul(ue, Pe) | 0, S = S + Math.imul(ue, Oe) | 0, b = b + Math.imul(de, $e) | 0, u = u + Math.imul(de, Be) | 0, u = u + Math.imul(fe, $e) | 0, S = S + Math.imul(fe, Be) | 0, b = b + Math.imul(ge, De) | 0, u = u + Math.imul(ge, Fe) | 0, u = u + Math.imul(me, De) | 0, S = S + Math.imul(me, Fe) | 0, b = b + Math.imul(Z, je) | 0, u = u + Math.imul(Z, He) | 0, u = u + Math.imul(le, je) | 0, S = S + Math.imul(le, He) | 0;
            var hr = (x + b | 0) + ((u & 8191) << 13) | 0;
            x = (S + (u >>> 13) | 0) + (hr >>> 26) | 0, hr &= 67108863, b = Math.imul(ye, Te), u = Math.imul(ye, Le), u = u + Math.imul(we, Te) | 0, S = Math.imul(we, Le), b = b + Math.imul(ve, Pe) | 0, u = u + Math.imul(ve, Oe) | 0, u = u + Math.imul(be, Pe) | 0, S = S + Math.imul(be, Oe) | 0, b = b + Math.imul(he, $e) | 0, u = u + Math.imul(he, Be) | 0, u = u + Math.imul(ue, $e) | 0, S = S + Math.imul(ue, Be) | 0, b = b + Math.imul(de, De) | 0, u = u + Math.imul(de, Fe) | 0, u = u + Math.imul(fe, De) | 0, S = S + Math.imul(fe, Fe) | 0, b = b + Math.imul(ge, je) | 0, u = u + Math.imul(ge, He) | 0, u = u + Math.imul(me, je) | 0, S = S + Math.imul(me, He) | 0;
            var Ls = (x + b | 0) + ((u & 8191) << 13) | 0;
            x = (S + (u >>> 13) | 0) + (Ls >>> 26) | 0, Ls &= 67108863, b = Math.imul(ye, Pe), u = Math.imul(ye, Oe), u = u + Math.imul(we, Pe) | 0, S = Math.imul(we, Oe), b = b + Math.imul(ve, $e) | 0, u = u + Math.imul(ve, Be) | 0, u = u + Math.imul(be, $e) | 0, S = S + Math.imul(be, Be) | 0, b = b + Math.imul(he, De) | 0, u = u + Math.imul(he, Fe) | 0, u = u + Math.imul(ue, De) | 0, S = S + Math.imul(ue, Fe) | 0, b = b + Math.imul(de, je) | 0, u = u + Math.imul(de, He) | 0, u = u + Math.imul(fe, je) | 0, S = S + Math.imul(fe, He) | 0;
            var Ps = (x + b | 0) + ((u & 8191) << 13) | 0;
            x = (S + (u >>> 13) | 0) + (Ps >>> 26) | 0, Ps &= 67108863, b = Math.imul(ye, $e), u = Math.imul(ye, Be), u = u + Math.imul(we, $e) | 0, S = Math.imul(we, Be), b = b + Math.imul(ve, De) | 0, u = u + Math.imul(ve, Fe) | 0, u = u + Math.imul(be, De) | 0, S = S + Math.imul(be, Fe) | 0, b = b + Math.imul(he, je) | 0, u = u + Math.imul(he, He) | 0, u = u + Math.imul(ue, je) | 0, S = S + Math.imul(ue, He) | 0;
            var Os = (x + b | 0) + ((u & 8191) << 13) | 0;
            x = (S + (u >>> 13) | 0) + (Os >>> 26) | 0, Os &= 67108863, b = Math.imul(ye, De), u = Math.imul(ye, Fe), u = u + Math.imul(we, De) | 0, S = Math.imul(we, Fe), b = b + Math.imul(ve, je) | 0, u = u + Math.imul(ve, He) | 0, u = u + Math.imul(be, je) | 0, S = S + Math.imul(be, He) | 0;
            var $s = (x + b | 0) + ((u & 8191) << 13) | 0;
            x = (S + (u >>> 13) | 0) + ($s >>> 26) | 0, $s &= 67108863, b = Math.imul(ye, je), u = Math.imul(ye, He), u = u + Math.imul(we, je) | 0, S = Math.imul(we, He);
            var Bs = (x + b | 0) + ((u & 8191) << 13) | 0;
            return x = (S + (u >>> 13) | 0) + (Bs >>> 26) | 0, Bs &= 67108863, C[0] = Yt, C[1] = Xt, C[2] = er, C[3] = tr, C[4] = rr, C[5] = nr, C[6] = ir, C[7] = sr, C[8] = or, C[9] = ar, C[10] = cr, C[11] = lr, C[12] = ur, C[13] = hr, C[14] = Ls, C[15] = Ps, C[16] = Os, C[17] = $s, C[18] = Bs, x !== 0 && (C[19] = x, g.length++), g
        };
        Math.imul || (k = M);

        function T(v, o, d) {
            d.negative = o.negative ^ v.negative, d.length = v.length + o.length;
            for (var g = 0, m = 0, y = 0; y < d.length - 1; y++) {
                var C = m;
                m = 0;
                for (var x = g & 67108863, b = Math.min(y, o.length - 1), u = Math.max(0, y - v.length + 1); u <= b; u++) {
                    var S = y - u,
                        W = v.words[S] | 0,
                        q = o.words[u] | 0,
                        I = W * q,
                        N = I & 67108863;
                    C = C + (I / 67108864 | 0) | 0, N = N + x | 0, x = N & 67108863, C = C + (N >>> 26) | 0, m += C >>> 26, C &= 67108863
                }
                d.words[y] = x, g = C, C = m
            }
            return g !== 0 ? d.words[y] = g : d.length--, d._strip()
        }

        function $(v, o, d) {
            return T(v, o, d)
        }
        s.prototype.mulTo = function (o, d) {
            var g, m = this.length + o.length;
            return this.length === 10 && o.length === 10 ? g = k(this, o, d) : m < 63 ? g = M(this, o, d) : m < 1024 ? g = T(this, o, d) : g = $(this, o, d), g
        }, s.prototype.mul = function (o) {
            var d = new s(null);
            return d.words = new Array(this.length + o.length), this.mulTo(o, d)
        }, s.prototype.mulf = function (o) {
            var d = new s(null);
            return d.words = new Array(this.length + o.length), $(this, o, d)
        }, s.prototype.imul = function (o) {
            return this.clone().mulTo(o, this)
        }, s.prototype.imuln = function (o) {
            var d = o < 0;
            d && (o = -o), n(typeof o == "number"), n(o < 67108864);
            for (var g = 0, m = 0; m < this.length; m++) {
                var y = (this.words[m] | 0) * o,
                    C = (y & 67108863) + (g & 67108863);
                g >>= 26, g += y / 67108864 | 0, g += C >>> 26, this.words[m] = C & 67108863
            }
            return g !== 0 && (this.words[m] = g, this.length++), d ? this.ineg() : this
        }, s.prototype.muln = function (o) {
            return this.clone().imuln(o)
        }, s.prototype.sqr = function () {
            return this.mul(this)
        }, s.prototype.isqr = function () {
            return this.imul(this.clone())
        }, s.prototype.pow = function (o) {
            var d = L(o);
            if (d.length === 0) return new s(1);
            for (var g = this, m = 0; m < d.length && d[m] === 0; m++, g = g.sqr());
            if (++m < d.length)
                for (var y = g.sqr(); m < d.length; m++, y = y.sqr()) d[m] !== 0 && (g = g.mul(y));
            return g
        }, s.prototype.iushln = function (o) {
            n(typeof o == "number" && o >= 0);
            var d = o % 26,
                g = (o - d) / 26,
                m = 67108863 >>> 26 - d << 26 - d,
                y;
            if (d !== 0) {
                var C = 0;
                for (y = 0; y < this.length; y++) {
                    var x = this.words[y] & m,
                        b = (this.words[y] | 0) - x << d;
                    this.words[y] = b | C, C = x >>> 26 - d
                }
                C && (this.words[y] = C, this.length++)
            }
            if (g !== 0) {
                for (y = this.length - 1; y >= 0; y--) this.words[y + g] = this.words[y];
                for (y = 0; y < g; y++) this.words[y] = 0;
                this.length += g
            }
            return this._strip()
        }, s.prototype.ishln = function (o) {
            return n(this.negative === 0), this.iushln(o)
        }, s.prototype.iushrn = function (o, d, g) {
            n(typeof o == "number" && o >= 0);
            var m;
            d ? m = (d - d % 26) / 26 : m = 0;
            var y = o % 26,
                C = Math.min((o - y) / 26, this.length),
                x = 67108863 ^ 67108863 >>> y << y,
                b = g;
            if (m -= C, m = Math.max(0, m), b) {
                for (var u = 0; u < C; u++) b.words[u] = this.words[u];
                b.length = C
            }
            if (C !== 0)
                if (this.length > C)
                    for (this.length -= C, u = 0; u < this.length; u++) this.words[u] = this.words[u + C];
                else this.words[0] = 0, this.length = 1;
            var S = 0;
            for (u = this.length - 1; u >= 0 && (S !== 0 || u >= m); u--) {
                var W = this.words[u] | 0;
                this.words[u] = S << 26 - y | W >>> y, S = W & x
            }
            return b && S !== 0 && (b.words[b.length++] = S), this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip()
        }, s.prototype.ishrn = function (o, d, g) {
            return n(this.negative === 0), this.iushrn(o, d, g)
        }, s.prototype.shln = function (o) {
            return this.clone().ishln(o)
        }, s.prototype.ushln = function (o) {
            return this.clone().iushln(o)
        }, s.prototype.shrn = function (o) {
            return this.clone().ishrn(o)
        }, s.prototype.ushrn = function (o) {
            return this.clone().iushrn(o)
        }, s.prototype.testn = function (o) {
            n(typeof o == "number" && o >= 0);
            var d = o % 26,
                g = (o - d) / 26,
                m = 1 << d;
            if (this.length <= g) return !1;
            var y = this.words[g];
            return !!(y & m)
        }, s.prototype.imaskn = function (o) {
            n(typeof o == "number" && o >= 0);
            var d = o % 26,
                g = (o - d) / 26;
            if (n(this.negative === 0, "imaskn works only with positive numbers"), this.length <= g) return this;
            if (d !== 0 && g++, this.length = Math.min(g, this.length), d !== 0) {
                var m = 67108863 ^ 67108863 >>> d << d;
                this.words[this.length - 1] &= m
            }
            return this._strip()
        }, s.prototype.maskn = function (o) {
            return this.clone().imaskn(o)
        }, s.prototype.iaddn = function (o) {
            return n(typeof o == "number"), n(o < 67108864), o < 0 ? this.isubn(-o) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) <= o ? (this.words[0] = o - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(o), this.negative = 1, this) : this._iaddn(o)
        }, s.prototype._iaddn = function (o) {
            this.words[0] += o;
            for (var d = 0; d < this.length && this.words[d] >= 67108864; d++) this.words[d] -= 67108864, d === this.length - 1 ? this.words[d + 1] = 1 : this.words[d + 1]++;
            return this.length = Math.max(this.length, d + 1), this
        }, s.prototype.isubn = function (o) {
            if (n(typeof o == "number"), n(o < 67108864), o < 0) return this.iaddn(-o);
            if (this.negative !== 0) return this.negative = 0, this.iaddn(o), this.negative = 1, this;
            if (this.words[0] -= o, this.length === 1 && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
            else
                for (var d = 0; d < this.length && this.words[d] < 0; d++) this.words[d] += 67108864, this.words[d + 1] -= 1;
            return this._strip()
        }, s.prototype.addn = function (o) {
            return this.clone().iaddn(o)
        }, s.prototype.subn = function (o) {
            return this.clone().isubn(o)
        }, s.prototype.iabs = function () {
            return this.negative = 0, this
        }, s.prototype.abs = function () {
            return this.clone().iabs()
        }, s.prototype._ishlnsubmul = function (o, d, g) {
            var m = o.length + g,
                y;
            this._expand(m);
            var C, x = 0;
            for (y = 0; y < o.length; y++) {
                C = (this.words[y + g] | 0) + x;
                var b = (o.words[y] | 0) * d;
                C -= b & 67108863, x = (C >> 26) - (b / 67108864 | 0), this.words[y + g] = C & 67108863
            }
            for (; y < this.length - g; y++) C = (this.words[y + g] | 0) + x, x = C >> 26, this.words[y + g] = C & 67108863;
            if (x === 0) return this._strip();
            for (n(x === -1), x = 0, y = 0; y < this.length; y++) C = -(this.words[y] | 0) + x, x = C >> 26, this.words[y] = C & 67108863;
            return this.negative = 1, this._strip()
        }, s.prototype._wordDiv = function (o, d) {
            var g = this.length - o.length,
                m = this.clone(),
                y = o,
                C = y.words[y.length - 1] | 0,
                x = this._countBits(C);
            g = 26 - x, g !== 0 && (y = y.ushln(g), m.iushln(g), C = y.words[y.length - 1] | 0);
            var b = m.length - y.length,
                u;
            if (d !== "mod") {
                u = new s(null), u.length = b + 1, u.words = new Array(u.length);
                for (var S = 0; S < u.length; S++) u.words[S] = 0
            }
            var W = m.clone()._ishlnsubmul(y, 1, b);
            W.negative === 0 && (m = W, u && (u.words[b] = 1));
            for (var q = b - 1; q >= 0; q--) {
                var I = (m.words[y.length + q] | 0) * 67108864 + (m.words[y.length + q - 1] | 0);
                for (I = Math.min(I / C | 0, 67108863), m._ishlnsubmul(y, I, q); m.negative !== 0;) I--, m.negative = 0, m._ishlnsubmul(y, 1, q), m.isZero() || (m.negative ^= 1);
                u && (u.words[q] = I)
            }
            return u && u._strip(), m._strip(), d !== "div" && g !== 0 && m.iushrn(g), {
                div: u || null,
                mod: m
            }
        }, s.prototype.divmod = function (o, d, g) {
            if (n(!o.isZero()), this.isZero()) return {
                div: new s(0),
                mod: new s(0)
            };
            var m, y, C;
            return this.negative !== 0 && o.negative === 0 ? (C = this.neg().divmod(o, d), d !== "mod" && (m = C.div.neg()), d !== "div" && (y = C.mod.neg(), g && y.negative !== 0 && y.iadd(o)), {
                div: m,
                mod: y
            }) : this.negative === 0 && o.negative !== 0 ? (C = this.divmod(o.neg(), d), d !== "mod" && (m = C.div.neg()), {
                div: m,
                mod: C.mod
            }) : this.negative & o.negative ? (C = this.neg().divmod(o.neg(), d), d !== "div" && (y = C.mod.neg(), g && y.negative !== 0 && y.isub(o)), {
                div: C.div,
                mod: y
            }) : o.length > this.length || this.cmp(o) < 0 ? {
                div: new s(0),
                mod: this
            } : o.length === 1 ? d === "div" ? {
                div: this.divn(o.words[0]),
                mod: null
            } : d === "mod" ? {
                div: null,
                mod: new s(this.modrn(o.words[0]))
            } : {
                div: this.divn(o.words[0]),
                mod: new s(this.modrn(o.words[0]))
            } : this._wordDiv(o, d)
        }, s.prototype.div = function (o) {
            return this.divmod(o, "div", !1).div
        }, s.prototype.mod = function (o) {
            return this.divmod(o, "mod", !1).mod
        }, s.prototype.umod = function (o) {
            return this.divmod(o, "mod", !0).mod
        }, s.prototype.divRound = function (o) {
            var d = this.divmod(o);
            if (d.mod.isZero()) return d.div;
            var g = d.div.negative !== 0 ? d.mod.isub(o) : d.mod,
                m = o.ushrn(1),
                y = o.andln(1),
                C = g.cmp(m);
            return C < 0 || y === 1 && C === 0 ? d.div : d.div.negative !== 0 ? d.div.isubn(1) : d.div.iaddn(1)
        }, s.prototype.modrn = function (o) {
            var d = o < 0;
            d && (o = -o), n(o <= 67108863);
            for (var g = (1 << 26) % o, m = 0, y = this.length - 1; y >= 0; y--) m = (g * m + (this.words[y] | 0)) % o;
            return d ? -m : m
        }, s.prototype.modn = function (o) {
            return this.modrn(o)
        }, s.prototype.idivn = function (o) {
            var d = o < 0;
            d && (o = -o), n(o <= 67108863);
            for (var g = 0, m = this.length - 1; m >= 0; m--) {
                var y = (this.words[m] | 0) + g * 67108864;
                this.words[m] = y / o | 0, g = y % o
            }
            return this._strip(), d ? this.ineg() : this
        }, s.prototype.divn = function (o) {
            return this.clone().idivn(o)
        }, s.prototype.egcd = function (o) {
            n(o.negative === 0), n(!o.isZero());
            var d = this,
                g = o.clone();
            d.negative !== 0 ? d = d.umod(o) : d = d.clone();
            for (var m = new s(1), y = new s(0), C = new s(0), x = new s(1), b = 0; d.isEven() && g.isEven();) d.iushrn(1), g.iushrn(1), ++b;
            for (var u = g.clone(), S = d.clone(); !d.isZero();) {
                for (var W = 0, q = 1; !(d.words[0] & q) && W < 26; ++W, q <<= 1);
                if (W > 0)
                    for (d.iushrn(W); W-- > 0;)(m.isOdd() || y.isOdd()) && (m.iadd(u), y.isub(S)), m.iushrn(1), y.iushrn(1);
                for (var I = 0, N = 1; !(g.words[0] & N) && I < 26; ++I, N <<= 1);
                if (I > 0)
                    for (g.iushrn(I); I-- > 0;)(C.isOdd() || x.isOdd()) && (C.iadd(u), x.isub(S)), C.iushrn(1), x.iushrn(1);
                d.cmp(g) >= 0 ? (d.isub(g), m.isub(C), y.isub(x)) : (g.isub(d), C.isub(m), x.isub(y))
            }
            return {
                a: C,
                b: x,
                gcd: g.iushln(b)
            }
        }, s.prototype._invmp = function (o) {
            n(o.negative === 0), n(!o.isZero());
            var d = this,
                g = o.clone();
            d.negative !== 0 ? d = d.umod(o) : d = d.clone();
            for (var m = new s(1), y = new s(0), C = g.clone(); d.cmpn(1) > 0 && g.cmpn(1) > 0;) {
                for (var x = 0, b = 1; !(d.words[0] & b) && x < 26; ++x, b <<= 1);
                if (x > 0)
                    for (d.iushrn(x); x-- > 0;) m.isOdd() && m.iadd(C), m.iushrn(1);
                for (var u = 0, S = 1; !(g.words[0] & S) && u < 26; ++u, S <<= 1);
                if (u > 0)
                    for (g.iushrn(u); u-- > 0;) y.isOdd() && y.iadd(C), y.iushrn(1);
                d.cmp(g) >= 0 ? (d.isub(g), m.isub(y)) : (g.isub(d), y.isub(m))
            }
            var W;
            return d.cmpn(1) === 0 ? W = m : W = y, W.cmpn(0) < 0 && W.iadd(o), W
        }, s.prototype.gcd = function (o) {
            if (this.isZero()) return o.abs();
            if (o.isZero()) return this.abs();
            var d = this.clone(),
                g = o.clone();
            d.negative = 0, g.negative = 0;
            for (var m = 0; d.isEven() && g.isEven(); m++) d.iushrn(1), g.iushrn(1);
            do {
                for (; d.isEven();) d.iushrn(1);
                for (; g.isEven();) g.iushrn(1);
                var y = d.cmp(g);
                if (y < 0) {
                    var C = d;
                    d = g, g = C
                } else if (y === 0 || g.cmpn(1) === 0) break;
                d.isub(g)
            } while (!0);
            return g.iushln(m)
        }, s.prototype.invm = function (o) {
            return this.egcd(o).a.umod(o)
        }, s.prototype.isEven = function () {
            return (this.words[0] & 1) === 0
        }, s.prototype.isOdd = function () {
            return (this.words[0] & 1) === 1
        }, s.prototype.andln = function (o) {
            return this.words[0] & o
        }, s.prototype.bincn = function (o) {
            n(typeof o == "number");
            var d = o % 26,
                g = (o - d) / 26,
                m = 1 << d;
            if (this.length <= g) return this._expand(g + 1), this.words[g] |= m, this;
            for (var y = m, C = g; y !== 0 && C < this.length; C++) {
                var x = this.words[C] | 0;
                x += y, y = x >>> 26, x &= 67108863, this.words[C] = x
            }
            return y !== 0 && (this.words[C] = y, this.length++), this
        }, s.prototype.isZero = function () {
            return this.length === 1 && this.words[0] === 0
        }, s.prototype.cmpn = function (o) {
            var d = o < 0;
            if (this.negative !== 0 && !d) return -1;
            if (this.negative === 0 && d) return 1;
            this._strip();
            var g;
            if (this.length > 1) g = 1;
            else {
                d && (o = -o), n(o <= 67108863, "Number is too big");
                var m = this.words[0] | 0;
                g = m === o ? 0 : m < o ? -1 : 1
            }
            return this.negative !== 0 ? -g | 0 : g
        }, s.prototype.cmp = function (o) {
            if (this.negative !== 0 && o.negative === 0) return -1;
            if (this.negative === 0 && o.negative !== 0) return 1;
            var d = this.ucmp(o);
            return this.negative !== 0 ? -d | 0 : d
        }, s.prototype.ucmp = function (o) {
            if (this.length > o.length) return 1;
            if (this.length < o.length) return -1;
            for (var d = 0, g = this.length - 1; g >= 0; g--) {
                var m = this.words[g] | 0,
                    y = o.words[g] | 0;
                if (m !== y) {
                    m < y ? d = -1 : m > y && (d = 1);
                    break
                }
            }
            return d
        }, s.prototype.gtn = function (o) {
            return this.cmpn(o) === 1
        }, s.prototype.gt = function (o) {
            return this.cmp(o) === 1
        }, s.prototype.gten = function (o) {
            return this.cmpn(o) >= 0
        }, s.prototype.gte = function (o) {
            return this.cmp(o) >= 0
        }, s.prototype.ltn = function (o) {
            return this.cmpn(o) === -1
        }, s.prototype.lt = function (o) {
            return this.cmp(o) === -1
        }, s.prototype.lten = function (o) {
            return this.cmpn(o) <= 0
        }, s.prototype.lte = function (o) {
            return this.cmp(o) <= 0
        }, s.prototype.eqn = function (o) {
            return this.cmpn(o) === 0
        }, s.prototype.eq = function (o) {
            return this.cmp(o) === 0
        }, s.red = function (o) {
            return new Q(o)
        }, s.prototype.toRed = function (o) {
            return n(!this.red, "Already a number in reduction context"), n(this.negative === 0, "red works only with positives"), o.convertTo(this)._forceRed(o)
        }, s.prototype.fromRed = function () {
            return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
        }, s.prototype._forceRed = function (o) {
            return this.red = o, this
        }, s.prototype.forceRed = function (o) {
            return n(!this.red, "Already a number in reduction context"), this._forceRed(o)
        }, s.prototype.redAdd = function (o) {
            return n(this.red, "redAdd works only with red numbers"), this.red.add(this, o)
        }, s.prototype.redIAdd = function (o) {
            return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, o)
        }, s.prototype.redSub = function (o) {
            return n(this.red, "redSub works only with red numbers"), this.red.sub(this, o)
        }, s.prototype.redISub = function (o) {
            return n(this.red, "redISub works only with red numbers"), this.red.isub(this, o)
        }, s.prototype.redShl = function (o) {
            return n(this.red, "redShl works only with red numbers"), this.red.shl(this, o)
        }, s.prototype.redMul = function (o) {
            return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, o), this.red.mul(this, o)
        }, s.prototype.redIMul = function (o) {
            return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, o), this.red.imul(this, o)
        }, s.prototype.redSqr = function () {
            return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
        }, s.prototype.redISqr = function () {
            return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
        }, s.prototype.redSqrt = function () {
            return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
        }, s.prototype.redInvm = function () {
            return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
        }, s.prototype.redNeg = function () {
            return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
        }, s.prototype.redPow = function (o) {
            return n(this.red && !o.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, o)
        };
        var P = {
            k256: null,
            p224: null,
            p192: null,
            p25519: null
        };

        function D(v, o) {
            this.name = v, this.p = new s(o, 16), this.n = this.p.bitLength(), this.k = new s(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
        }
        D.prototype._tmp = function () {
            var o = new s(null);
            return o.words = new Array(Math.ceil(this.n / 13)), o
        }, D.prototype.ireduce = function (o) {
            var d = o,
                g;
            do this.split(d, this.tmp), d = this.imulK(d), d = d.iadd(this.tmp), g = d.bitLength(); while (g > this.n);
            var m = g < this.n ? -1 : d.ucmp(this.p);
            return m === 0 ? (d.words[0] = 0, d.length = 1) : m > 0 ? d.isub(this.p) : d.strip !== void 0 ? d.strip() : d._strip(), d
        }, D.prototype.split = function (o, d) {
            o.iushrn(this.n, 0, d)
        }, D.prototype.imulK = function (o) {
            return o.imul(this.k)
        };

        function G() {
            D.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
        }
        i(G, D), G.prototype.split = function (o, d) {
            for (var g = 4194303, m = Math.min(o.length, 9), y = 0; y < m; y++) d.words[y] = o.words[y];
            if (d.length = m, o.length <= 9) {
                o.words[0] = 0, o.length = 1;
                return
            }
            var C = o.words[9];
            for (d.words[d.length++] = C & g, y = 10; y < o.length; y++) {
                var x = o.words[y] | 0;
                o.words[y - 10] = (x & g) << 4 | C >>> 22, C = x
            }
            C >>>= 22, o.words[y - 10] = C, C === 0 && o.length > 10 ? o.length -= 10 : o.length -= 9
        }, G.prototype.imulK = function (o) {
            o.words[o.length] = 0, o.words[o.length + 1] = 0, o.length += 2;
            for (var d = 0, g = 0; g < o.length; g++) {
                var m = o.words[g] | 0;
                d += m * 977, o.words[g] = d & 67108863, d = m * 64 + (d / 67108864 | 0)
            }
            return o.words[o.length - 1] === 0 && (o.length--, o.words[o.length - 1] === 0 && o.length--), o
        };

        function V() {
            D.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
        }
        i(V, D);

        function H() {
            D.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
        }
        i(H, D);

        function X() {
            D.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
        }
        i(X, D), X.prototype.imulK = function (o) {
            for (var d = 0, g = 0; g < o.length; g++) {
                var m = (o.words[g] | 0) * 19 + d,
                    y = m & 67108863;
                m >>>= 26, o.words[g] = y, d = m
            }
            return d !== 0 && (o.words[o.length++] = d), o
        }, s._prime = function (o) {
            if (P[o]) return P[o];
            var d;
            if (o === "k256") d = new G;
            else if (o === "p224") d = new V;
            else if (o === "p192") d = new H;
            else if (o === "p25519") d = new X;
            else throw new Error("Unknown prime " + o);
            return P[o] = d, d
        };

        function Q(v) {
            if (typeof v == "string") {
                var o = s._prime(v);
                this.m = o.p, this.prime = o
            } else n(v.gtn(1), "modulus must be greater than 1"), this.m = v, this.prime = null
        }
        Q.prototype._verify1 = function (o) {
            n(o.negative === 0, "red works only with positives"), n(o.red, "red works only with red numbers")
        }, Q.prototype._verify2 = function (o, d) {
            n((o.negative | d.negative) === 0, "red works only with positives"), n(o.red && o.red === d.red, "red works only with red numbers")
        }, Q.prototype.imod = function (o) {
            return this.prime ? this.prime.ireduce(o)._forceRed(this) : (p(o, o.umod(this.m)._forceRed(this)), o)
        }, Q.prototype.neg = function (o) {
            return o.isZero() ? o.clone() : this.m.sub(o)._forceRed(this)
        }, Q.prototype.add = function (o, d) {
            this._verify2(o, d);
            var g = o.add(d);
            return g.cmp(this.m) >= 0 && g.isub(this.m), g._forceRed(this)
        }, Q.prototype.iadd = function (o, d) {
            this._verify2(o, d);
            var g = o.iadd(d);
            return g.cmp(this.m) >= 0 && g.isub(this.m), g
        }, Q.prototype.sub = function (o, d) {
            this._verify2(o, d);
            var g = o.sub(d);
            return g.cmpn(0) < 0 && g.iadd(this.m), g._forceRed(this)
        }, Q.prototype.isub = function (o, d) {
            this._verify2(o, d);
            var g = o.isub(d);
            return g.cmpn(0) < 0 && g.iadd(this.m), g
        }, Q.prototype.shl = function (o, d) {
            return this._verify1(o), this.imod(o.ushln(d))
        }, Q.prototype.imul = function (o, d) {
            return this._verify2(o, d), this.imod(o.imul(d))
        }, Q.prototype.mul = function (o, d) {
            return this._verify2(o, d), this.imod(o.mul(d))
        }, Q.prototype.isqr = function (o) {
            return this.imul(o, o.clone())
        }, Q.prototype.sqr = function (o) {
            return this.mul(o, o)
        }, Q.prototype.sqrt = function (o) {
            if (o.isZero()) return o.clone();
            var d = this.m.andln(3);
            if (n(d % 2 === 1), d === 3) {
                var g = this.m.add(new s(1)).iushrn(2);
                return this.pow(o, g)
            }
            for (var m = this.m.subn(1), y = 0; !m.isZero() && m.andln(1) === 0;) y++, m.iushrn(1);
            n(!m.isZero());
            var C = new s(1).toRed(this),
                x = C.redNeg(),
                b = this.m.subn(1).iushrn(1),
                u = this.m.bitLength();
            for (u = new s(2 * u * u).toRed(this); this.pow(u, b).cmp(x) !== 0;) u.redIAdd(x);
            for (var S = this.pow(u, m), W = this.pow(o, m.addn(1).iushrn(1)), q = this.pow(o, m), I = y; q.cmp(C) !== 0;) {
                for (var N = q, B = 0; N.cmp(C) !== 0; B++) N = N.redSqr();
                n(B < I);
                var U = this.pow(S, new s(1).iushln(I - B - 1));
                W = W.redMul(U), S = U.redSqr(), q = q.redMul(S), I = B
            }
            return W
        }, Q.prototype.invm = function (o) {
            var d = o._invmp(this.m);
            return d.negative !== 0 ? (d.negative = 0, this.imod(d).redNeg()) : this.imod(d)
        }, Q.prototype.pow = function (o, d) {
            if (d.isZero()) return new s(1).toRed(this);
            if (d.cmpn(1) === 0) return o.clone();
            var g = 4,
                m = new Array(1 << g);
            m[0] = new s(1).toRed(this), m[1] = o;
            for (var y = 2; y < m.length; y++) m[y] = this.mul(m[y - 1], o);
            var C = m[0],
                x = 0,
                b = 0,
                u = d.bitLength() % 26;
            for (u === 0 && (u = 26), y = d.length - 1; y >= 0; y--) {
                for (var S = d.words[y], W = u - 1; W >= 0; W--) {
                    var q = S >> W & 1;
                    if (C !== m[0] && (C = this.sqr(C)), q === 0 && x === 0) {
                        b = 0;
                        continue
                    }
                    x <<= 1, x |= q, b++, !(b !== g && (y !== 0 || W !== 0)) && (C = this.mul(C, m[x]), b = 0, x = 0)
                }
                u = 26
            }
            return C
        }, Q.prototype.convertTo = function (o) {
            var d = o.umod(this.m);
            return d === o ? d.clone() : d
        }, Q.prototype.convertFrom = function (o) {
            var d = o.clone();
            return d.red = null, d
        }, s.mont = function (o) {
            return new ie(o)
        };

        function ie(v) {
            Q.call(this, v), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new s(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
        }
        i(ie, Q), ie.prototype.convertTo = function (o) {
            return this.imod(o.ushln(this.shift))
        }, ie.prototype.convertFrom = function (o) {
            var d = this.imod(o.mul(this.rinv));
            return d.red = null, d
        }, ie.prototype.imul = function (o, d) {
            if (o.isZero() || d.isZero()) return o.words[0] = 0, o.length = 1, o;
            var g = o.imul(d),
                m = g.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                y = g.isub(m).iushrn(this.shift),
                C = y;
            return y.cmp(this.m) >= 0 ? C = y.isub(this.m) : y.cmpn(0) < 0 && (C = y.iadd(this.m)), C._forceRed(this)
        }, ie.prototype.mul = function (o, d) {
            if (o.isZero() || d.isZero()) return new s(0)._forceRed(this);
            var g = o.mul(d),
                m = g.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                y = g.isub(m).iushrn(this.shift),
                C = y;
            return y.cmp(this.m) >= 0 ? C = y.isub(this.m) : y.cmpn(0) < 0 && (C = y.iadd(this.m)), C._forceRed(this)
        }, ie.prototype.invm = function (o) {
            var d = this.imod(o._invmp(this.m).mul(this.r2));
            return d._forceRed(this)
        }
    })(e, J)
})(Oo);
var Bi = Oo.exports,
    Fn = {},
    Ht = {};
Object.defineProperty(Ht, "__esModule", {
    value: !0
});
Ht.errorValues = Ht.standardErrorCodes = void 0;
Ht.standardErrorCodes = {
    rpc: {
        invalidInput: -32e3,
        resourceNotFound: -32001,
        resourceUnavailable: -32002,
        transactionRejected: -32003,
        methodNotSupported: -32004,
        limitExceeded: -32005,
        parse: -32700,
        invalidRequest: -32600,
        methodNotFound: -32601,
        invalidParams: -32602,
        internal: -32603
    },
    provider: {
        userRejectedRequest: 4001,
        unauthorized: 4100,
        unsupportedMethod: 4200,
        disconnected: 4900,
        chainDisconnected: 4901,
        unsupportedChain: 4902
    }
};
Ht.errorValues = {
    "-32700": {
        standard: "JSON RPC 2.0",
        message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
    },
    "-32600": {
        standard: "JSON RPC 2.0",
        message: "The JSON sent is not a valid Request object."
    },
    "-32601": {
        standard: "JSON RPC 2.0",
        message: "The method does not exist / is not available."
    },
    "-32602": {
        standard: "JSON RPC 2.0",
        message: "Invalid method parameter(s)."
    },
    "-32603": {
        standard: "JSON RPC 2.0",
        message: "Internal JSON-RPC error."
    },
    "-32000": {
        standard: "EIP-1474",
        message: "Invalid input."
    },
    "-32001": {
        standard: "EIP-1474",
        message: "Resource not found."
    },
    "-32002": {
        standard: "EIP-1474",
        message: "Resource unavailable."
    },
    "-32003": {
        standard: "EIP-1474",
        message: "Transaction rejected."
    },
    "-32004": {
        standard: "EIP-1474",
        message: "Method not supported."
    },
    "-32005": {
        standard: "EIP-1474",
        message: "Request limit exceeded."
    },
    4001: {
        standard: "EIP-1193",
        message: "User rejected the request."
    },
    4100: {
        standard: "EIP-1193",
        message: "The requested account and/or method has not been authorized by the user."
    },
    4200: {
        standard: "EIP-1193",
        message: "The requested method is not supported by this Ethereum provider."
    },
    4900: {
        standard: "EIP-1193",
        message: "The provider is disconnected from all chains."
    },
    4901: {
        standard: "EIP-1193",
        message: "The provider is disconnected from the specified chain."
    },
    4902: {
        standard: "EIP-3085",
        message: "Unrecognized chain ID."
    }
};
var Di = {},
    Fi = {};
(function (e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.serialize = e.getErrorCode = e.isValidCode = e.getMessageFromCode = e.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
    const t = Ht,
        r = "Unspecified error message.";
    e.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.";

    function n(_, R = r) {
        if (_ && Number.isInteger(_)) {
            const A = _.toString();
            if (p(t.errorValues, A)) return t.errorValues[A].message;
            if (l(_)) return e.JSON_RPC_SERVER_ERROR_MESSAGE
        }
        return R
    }
    e.getMessageFromCode = n;

    function i(_) {
        if (!Number.isInteger(_)) return !1;
        const R = _.toString();
        return !!(t.errorValues[R] || l(_))
    }
    e.isValidCode = i;

    function s(_) {
        var R;
        if (typeof _ == "number") return _;
        if (a(_)) return (R = _.code) !== null && R !== void 0 ? R : _.errorCode
    }
    e.getErrorCode = s;

    function a(_) {
        return typeof _ == "object" && _ !== null && (typeof _.code == "number" || typeof _.errorCode == "number")
    }

    function c(_, {
        shouldIncludeStack: R = !1
    } = {}) {
        const A = {};
        if (_ && typeof _ == "object" && !Array.isArray(_) && p(_, "code") && i(_.code)) {
            const O = _;
            A.code = O.code, O.message && typeof O.message == "string" ? (A.message = O.message, p(O, "data") && (A.data = O.data)) : (A.message = n(A.code), A.data = {
                originalError: h(_)
            })
        } else A.code = t.standardErrorCodes.rpc.internal, A.message = f(_, "message") ? _.message : r, A.data = {
            originalError: h(_)
        };
        return R && (A.stack = f(_, "stack") ? _.stack : void 0), A
    }
    e.serialize = c;

    function l(_) {
        return _ >= -32099 && _ <= -32e3
    }

    function h(_) {
        return _ && typeof _ == "object" && !Array.isArray(_) ? Object.assign({}, _) : _
    }

    function p(_, R) {
        return Object.prototype.hasOwnProperty.call(_, R)
    }

    function f(_, R) {
        return typeof _ == "object" && _ !== null && R in _ && typeof _[R] == "string"
    }
})(Fi);
Object.defineProperty(Di, "__esModule", {
    value: !0
});
Di.standardErrors = void 0;
const Xe = Ht,
    yl = Fi;
Di.standardErrors = {
    rpc: {
        parse: e => dt(Xe.standardErrorCodes.rpc.parse, e),
        invalidRequest: e => dt(Xe.standardErrorCodes.rpc.invalidRequest, e),
        invalidParams: e => dt(Xe.standardErrorCodes.rpc.invalidParams, e),
        methodNotFound: e => dt(Xe.standardErrorCodes.rpc.methodNotFound, e),
        internal: e => dt(Xe.standardErrorCodes.rpc.internal, e),
        server: e => {
            if (!e || typeof e != "object" || Array.isArray(e)) throw new Error("Ethereum RPC Server errors must provide single object argument.");
            const {
                code: t
            } = e;
            if (!Number.isInteger(t) || t > -32005 || t < -32099) throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
            return dt(t, e)
        },
        invalidInput: e => dt(Xe.standardErrorCodes.rpc.invalidInput, e),
        resourceNotFound: e => dt(Xe.standardErrorCodes.rpc.resourceNotFound, e),
        resourceUnavailable: e => dt(Xe.standardErrorCodes.rpc.resourceUnavailable, e),
        transactionRejected: e => dt(Xe.standardErrorCodes.rpc.transactionRejected, e),
        methodNotSupported: e => dt(Xe.standardErrorCodes.rpc.methodNotSupported, e),
        limitExceeded: e => dt(Xe.standardErrorCodes.rpc.limitExceeded, e)
    },
    provider: {
        userRejectedRequest: e => qr(Xe.standardErrorCodes.provider.userRejectedRequest, e),
        unauthorized: e => qr(Xe.standardErrorCodes.provider.unauthorized, e),
        unsupportedMethod: e => qr(Xe.standardErrorCodes.provider.unsupportedMethod, e),
        disconnected: e => qr(Xe.standardErrorCodes.provider.disconnected, e),
        chainDisconnected: e => qr(Xe.standardErrorCodes.provider.chainDisconnected, e),
        unsupportedChain: e => qr(Xe.standardErrorCodes.provider.unsupportedChain, e),
        custom: e => {
            if (!e || typeof e != "object" || Array.isArray(e)) throw new Error("Ethereum Provider custom errors must provide single object argument.");
            const {
                code: t,
                message: r,
                data: n
            } = e;
            if (!r || typeof r != "string") throw new Error('"message" must be a nonempty string');
            return new Sl(t, r, n)
        }
    }
};

function dt(e, t) {
    const [r, n] = wl(t);
    return new El(e, r || (0, yl.getMessageFromCode)(e), n)
}

function qr(e, t) {
    const [r, n] = wl(t);
    return new Sl(e, r || (0, yl.getMessageFromCode)(e), n)
}

function wl(e) {
    if (e) {
        if (typeof e == "string") return [e];
        if (typeof e == "object" && !Array.isArray(e)) {
            const {
                message: t,
                data: r
            } = e;
            if (t && typeof t != "string") throw new Error("Must specify string message.");
            return [t || void 0, r]
        }
    }
    return []
}
let El = class extends Error {
        constructor(t, r, n) {
            if (!Number.isInteger(t)) throw new Error('"code" must be an integer.');
            if (!r || typeof r != "string") throw new Error('"message" must be a nonempty string.');
            super(r), this.code = t, n !== void 0 && (this.data = n)
        }
    },
    Sl = class extends El {
        constructor(t, r, n) {
            if (!Hh(t)) throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
            super(t, r, n)
        }
    };

function Hh(e) {
    return Number.isInteger(e) && e >= 1e3 && e <= 4999
}
var ji = {},
    gn = {};
Object.defineProperty(gn, "__esModule", {
    value: !0
});
gn.isErrorResponse = void 0;

function Uh(e) {
    return e.errorMessage !== void 0
}
gn.isErrorResponse = Uh;
var _n = {};
Object.defineProperty(_n, "__esModule", {
    value: !0
});
_n.LIB_VERSION = void 0;
_n.LIB_VERSION = "3.9.1";
Object.defineProperty(ji, "__esModule", {
    value: !0
});
ji.serializeError = void 0;
const Wh = gn,
    Vh = _n,
    qh = Ht,
    zh = Fi;

function Gh(e, t) {
    const r = (0, zh.serialize)(Jh(e), {
            shouldIncludeStack: !0
        }),
        n = new URL("https://docs.cloud.coinbase.com/wallet-sdk/docs/errors");
    n.searchParams.set("version", Vh.LIB_VERSION), n.searchParams.set("code", r.code.toString());
    const i = Zh(r.data, t);
    return i && n.searchParams.set("method", i), n.searchParams.set("message", r.message), Object.assign(Object.assign({}, r), {
        docUrl: n.href
    })
}
ji.serializeError = Gh;

function Jh(e) {
    return typeof e == "string" ? {
        message: e,
        code: qh.standardErrorCodes.rpc.internal
    } : (0, Wh.isErrorResponse)(e) ? Object.assign(Object.assign({}, e), {
        message: e.errorMessage,
        code: e.errorCode,
        data: {
            method: e.method
        }
    }) : e
}

function Zh(e, t) {
    const r = e == null ? void 0 : e.method;
    if (r) return r;
    if (t !== void 0) {
        if (typeof t == "string") return t;
        if (Array.isArray(t)) {
            if (t.length > 0) return t[0].method
        } else return t.method
    }
}(function (e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.standardErrors = e.standardErrorCodes = e.serializeError = e.getMessageFromCode = e.getErrorCode = void 0;
    const t = Ht;
    Object.defineProperty(e, "standardErrorCodes", {
        enumerable: !0,
        get: function () {
            return t.standardErrorCodes
        }
    });
    const r = Di;
    Object.defineProperty(e, "standardErrors", {
        enumerable: !0,
        get: function () {
            return r.standardErrors
        }
    });
    const n = ji;
    Object.defineProperty(e, "serializeError", {
        enumerable: !0,
        get: function () {
            return n.serializeError
        }
    });
    const i = Fi;
    Object.defineProperty(e, "getErrorCode", {
        enumerable: !0,
        get: function () {
            return i.getErrorCode
        }
    }), Object.defineProperty(e, "getMessageFromCode", {
        enumerable: !0,
        get: function () {
            return i.getMessageFromCode
        }
    })
})(Fn);
var Je = {};
Object.defineProperty(Je, "__esModule", {
    value: !0
});
Je.ProviderType = Je.RegExpString = Je.IntNumber = Je.BigIntString = Je.AddressString = Je.HexString = Je.OpaqueType = void 0;

function jn() {
    return e => e
}
Je.OpaqueType = jn;
Je.HexString = jn();
Je.AddressString = jn();
Je.BigIntString = jn();

function Kh(e) {
    return Math.floor(e)
}
Je.IntNumber = Kh;
Je.RegExpString = jn();
var Ma;
(function (e) {
    e.CoinbaseWallet = "CoinbaseWallet", e.MetaMask = "MetaMask", e.Unselected = ""
})(Ma || (Je.ProviderType = Ma = {}));
var Qh = J && J.__importDefault || function (e) {
    return e && e.__esModule ? e : {
        default: e
    }
};
Object.defineProperty(z, "__esModule", {
    value: !0
});
z.isMobileWeb = z.getLocation = z.isInIFrame = z.createQrUrl = z.getFavicon = z.range = z.isBigNumber = z.ensureParsedJSONObject = z.ensureBN = z.ensureRegExpString = z.ensureIntNumber = z.ensureBuffer = z.ensureAddressString = z.ensureEvenLengthHexString = z.ensureHexString = z.isHexString = z.prepend0x = z.strip0x = z.has0xPrefix = z.hexStringFromIntNumber = z.intNumberFromHexString = z.bigIntStringFromBN = z.hexStringFromBuffer = z.hexStringToUint8Array = z.uint8ArrayToHex = z.randomBytesHex = void 0;
const Gt = Qh(Bi),
    Ir = Fn,
    _t = Je,
    Rl = /^[0-9]*$/,
    Ml = /^[a-f0-9]*$/;

function Yh(e) {
    return Cl(crypto.getRandomValues(new Uint8Array(e)))
}
z.randomBytesHex = Yh;

function Cl(e) {
    return [...e].map(t => t.toString(16).padStart(2, "0")).join("")
}
z.uint8ArrayToHex = Cl;

function Xh(e) {
    return new Uint8Array(e.match(/.{1,2}/g).map(t => parseInt(t, 16)))
}
z.hexStringToUint8Array = Xh;

function ed(e, t = !1) {
    const r = e.toString("hex");
    return (0, _t.HexString)(t ? `0x${r}` : r)
}
z.hexStringFromBuffer = ed;

function td(e) {
    return (0, _t.BigIntString)(e.toString(10))
}
z.bigIntStringFromBN = td;

function rd(e) {
    return (0, _t.IntNumber)(new Gt.default(Un(e, !1), 16).toNumber())
}
z.intNumberFromHexString = rd;

function nd(e) {
    return (0, _t.HexString)(`0x${new Gt.default(e).toString(16)}`)
}
z.hexStringFromIntNumber = nd;

function $o(e) {
    return e.startsWith("0x") || e.startsWith("0X")
}
z.has0xPrefix = $o;

function Hi(e) {
    return $o(e) ? e.slice(2) : e
}
z.strip0x = Hi;

function kl(e) {
    return $o(e) ? `0x${e.slice(2)}` : `0x${e}`
}
z.prepend0x = kl;

function Hn(e) {
    if (typeof e != "string") return !1;
    const t = Hi(e).toLowerCase();
    return Ml.test(t)
}
z.isHexString = Hn;

function Il(e, t = !1) {
    if (typeof e == "string") {
        const r = Hi(e).toLowerCase();
        if (Ml.test(r)) return (0, _t.HexString)(t ? `0x${r}` : r)
    }
    throw Ir.standardErrors.rpc.invalidParams(`"${String(e)}" is not a hexadecimal string`)
}
z.ensureHexString = Il;

function Un(e, t = !1) {
    let r = Il(e, !1);
    return r.length % 2 === 1 && (r = (0, _t.HexString)(`0${r}`)), t ? (0, _t.HexString)(`0x${r}`) : r
}
z.ensureEvenLengthHexString = Un;

function id(e) {
    if (typeof e == "string") {
        const t = Hi(e).toLowerCase();
        if (Hn(t) && t.length === 40) return (0, _t.AddressString)(kl(t))
    }
    throw Ir.standardErrors.rpc.invalidParams(`Invalid Ethereum address: ${String(e)}`)
}
z.ensureAddressString = id;

function sd(e) {
    if (Buffer.isBuffer(e)) return e;
    if (typeof e == "string") {
        if (Hn(e)) {
            const t = Un(e, !1);
            return Buffer.from(t, "hex")
        }
        return Buffer.from(e, "utf8")
    }
    throw Ir.standardErrors.rpc.invalidParams(`Not binary data: ${String(e)}`)
}
z.ensureBuffer = sd;

function xl(e) {
    if (typeof e == "number" && Number.isInteger(e)) return (0, _t.IntNumber)(e);
    if (typeof e == "string") {
        if (Rl.test(e)) return (0, _t.IntNumber)(Number(e));
        if (Hn(e)) return (0, _t.IntNumber)(new Gt.default(Un(e, !1), 16).toNumber())
    }
    throw Ir.standardErrors.rpc.invalidParams(`Not an integer: ${String(e)}`)
}
z.ensureIntNumber = xl;

function od(e) {
    if (e instanceof RegExp) return (0, _t.RegExpString)(e.toString());
    throw Ir.standardErrors.rpc.invalidParams(`Not a RegExp: ${String(e)}`)
}
z.ensureRegExpString = od;

function ad(e) {
    if (e !== null && (Gt.default.isBN(e) || Al(e))) return new Gt.default(e.toString(10), 10);
    if (typeof e == "number") return new Gt.default(xl(e));
    if (typeof e == "string") {
        if (Rl.test(e)) return new Gt.default(e, 10);
        if (Hn(e)) return new Gt.default(Un(e, !1), 16)
    }
    throw Ir.standardErrors.rpc.invalidParams(`Not an integer: ${String(e)}`)
}
z.ensureBN = ad;

function cd(e) {
    if (typeof e == "string") return JSON.parse(e);
    if (typeof e == "object") return e;
    throw Ir.standardErrors.rpc.invalidParams(`Not a JSON string or an object: ${String(e)}`)
}
z.ensureParsedJSONObject = cd;

function Al(e) {
    if (e == null || typeof e.constructor != "function") return !1;
    const {
        constructor: t
    } = e;
    return typeof t.config == "function" && typeof t.EUCLID == "number"
}
z.isBigNumber = Al;

function ld(e, t) {
    return Array.from({
        length: t - e
    }, (r, n) => e + n)
}
z.range = ld;

function ud() {
    const e = document.querySelector('link[sizes="192x192"]') || document.querySelector('link[sizes="180x180"]') || document.querySelector('link[rel="icon"]') || document.querySelector('link[rel="shortcut icon"]'),
        {
            protocol: t,
            host: r
        } = document.location,
        n = e ? e.getAttribute("href") : null;
    return !n || n.startsWith("javascript:") || n.startsWith("vbscript:") ? null : n.startsWith("http://") || n.startsWith("https://") || n.startsWith("data:") ? n : n.startsWith("//") ? t + n : `${t}//${r}${n}`
}
z.getFavicon = ud;

function hd(e, t, r, n, i, s) {
    const a = n ? "parent-id" : "id",
        c = new URLSearchParams({
            [a]: e,
            secret: t,
            server: r,
            v: i,
            chainId: s.toString()
        }).toString();
    return `${r}/#/link?${c}`
}
z.createQrUrl = hd;

function Nl() {
    try {
        return window.frameElement !== null
    } catch {
        return !1
    }
}
z.isInIFrame = Nl;

function dd() {
    try {
        return Nl() && window.top ? window.top.location : window.location
    } catch {
        return window.location
    }
}
z.getLocation = dd;

function fd() {
    var e;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test((e = window == null ? void 0 : window.navigator) === null || e === void 0 ? void 0 : e.userAgent)
}
z.isMobileWeb = fd;
var Ui = {};
Object.defineProperty(Ui, "__esModule", {
    value: !0
});
Ui.ScopedLocalStorage = void 0;
class pd {
    constructor(t) {
        this.scope = t
    }
    setItem(t, r) {
        localStorage.setItem(this.scopedKey(t), r)
    }
    getItem(t) {
        return localStorage.getItem(this.scopedKey(t))
    }
    removeItem(t) {
        localStorage.removeItem(this.scopedKey(t))
    }
    clear() {
        const t = this.scopedKey(""),
            r = [];
        for (let n = 0; n < localStorage.length; n++) {
            const i = localStorage.key(n);
            typeof i == "string" && i.startsWith(t) && r.push(i)
        }
        r.forEach(n => localStorage.removeItem(n))
    }
    scopedKey(t) {
        return `${this.scope}:${t}`
    }
}
Ui.ScopedLocalStorage = pd;
var on = {};
const gd = pn(Fh);
var Wn = {},
    Vn = {},
    mn = {};
Object.defineProperty(mn, "__esModule", {
    value: !0
});
mn.EVENTS = void 0;
mn.EVENTS = {
    STARTED_CONNECTING: "walletlink_sdk.started.connecting",
    CONNECTED_STATE_CHANGE: "walletlink_sdk.connected",
    DISCONNECTED: "walletlink_sdk.disconnected",
    METADATA_DESTROYED: "walletlink_sdk_metadata_destroyed",
    LINKED: "walletlink_sdk.linked",
    FAILURE: "walletlink_sdk.generic_failure",
    SESSION_CONFIG_RECEIVED: "walletlink_sdk.session_config_event_received",
    ETH_ACCOUNTS_STATE: "walletlink_sdk.eth_accounts_state",
    SESSION_STATE_CHANGE: "walletlink_sdk.session_state_change",
    UNLINKED_ERROR_STATE: "walletlink_sdk.unlinked_error_state",
    SKIPPED_CLEARING_SESSION: "walletlink_sdk.skipped_clearing_session",
    GENERAL_ERROR: "walletlink_sdk.general_error",
    WEB3_REQUEST: "walletlink_sdk.web3.request",
    WEB3_REQUEST_PUBLISHED: "walletlink_sdk.web3.request_published",
    WEB3_RESPONSE: "walletlink_sdk.web3.response",
    METHOD_NOT_IMPLEMENTED: "walletlink_sdk.method_not_implemented",
    UNKNOWN_ADDRESS_ENCOUNTERED: "walletlink_sdk.unknown_address_encountered"
};
var gt = {};
Object.defineProperty(gt, "__esModule", {
    value: !0
});
gt.RelayAbstract = gt.APP_VERSION_KEY = gt.LOCAL_STORAGE_ADDRESSES_KEY = gt.WALLET_USER_NAME_KEY = void 0;
const Ca = Fn;
gt.WALLET_USER_NAME_KEY = "walletUsername";
gt.LOCAL_STORAGE_ADDRESSES_KEY = "Addresses";
gt.APP_VERSION_KEY = "AppVersion";
class _d {
    async makeEthereumJSONRPCRequest(t, r) {
        if (!r) throw new Error("Error: No jsonRpcUrl provided");
        return window.fetch(r, {
            method: "POST",
            body: JSON.stringify(t),
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(n => n.json()).then(n => {
            if (!n) throw Ca.standardErrors.rpc.parse({});
            const i = n,
                {
                    error: s
                } = i;
            if (s) throw (0, Ca.serializeError)(s, t.method);
            return i
        })
    }
}
gt.RelayAbstract = _d;
var vn = {},
    Tl = {
        exports: {}
    },
    vo = {
        exports: {}
    };
typeof Object.create == "function" ? vo.exports = function (t, r) {
    r && (t.super_ = r, t.prototype = Object.create(r.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }))
} : vo.exports = function (t, r) {
    if (r) {
        t.super_ = r;
        var n = function () {};
        n.prototype = r.prototype, t.prototype = new n, t.prototype.constructor = t
    }
};
var Et = vo.exports,
    bo = {
        exports: {}
    };
(function (e, t) {
    var r = Pi,
        n = r.Buffer;

    function i(a, c) {
        for (var l in a) c[l] = a[l]
    }
    n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow ? e.exports = r : (i(r, t), t.Buffer = s);

    function s(a, c, l) {
        return n(a, c, l)
    }
    i(n, s), s.from = function (a, c, l) {
        if (typeof a == "number") throw new TypeError("Argument must not be a number");
        return n(a, c, l)
    }, s.alloc = function (a, c, l) {
        if (typeof a != "number") throw new TypeError("Argument must be a number");
        var h = n(a);
        return c !== void 0 ? typeof l == "string" ? h.fill(c, l) : h.fill(c) : h.fill(0), h
    }, s.allocUnsafe = function (a) {
        if (typeof a != "number") throw new TypeError("Argument must be a number");
        return n(a)
    }, s.allocUnsafeSlow = function (a) {
        if (typeof a != "number") throw new TypeError("Argument must be a number");
        return r.SlowBuffer(a)
    }
})(bo, bo.exports);
var Qt = bo.exports,
    Ll = Qt.Buffer;

function Wi(e, t) {
    this._block = Ll.alloc(e), this._finalSize = t, this._blockSize = e, this._len = 0
}
Wi.prototype.update = function (e, t) {
    typeof e == "string" && (t = t || "utf8", e = Ll.from(e, t));
    for (var r = this._block, n = this._blockSize, i = e.length, s = this._len, a = 0; a < i;) {
        for (var c = s % n, l = Math.min(i - a, n - c), h = 0; h < l; h++) r[c + h] = e[a + h];
        s += l, a += l, s % n === 0 && this._update(r)
    }
    return this._len += i, this
};
Wi.prototype.digest = function (e) {
    var t = this._len % this._blockSize;
    this._block[t] = 128, this._block.fill(0, t + 1), t >= this._finalSize && (this._update(this._block), this._block.fill(0));
    var r = this._len * 8;
    if (r <= 4294967295) this._block.writeUInt32BE(r, this._blockSize - 4);
    else {
        var n = (r & 4294967295) >>> 0,
            i = (r - n) / 4294967296;
        this._block.writeUInt32BE(i, this._blockSize - 8), this._block.writeUInt32BE(n, this._blockSize - 4)
    }
    this._update(this._block);
    var s = this._hash();
    return e ? s.toString(e) : s
};
Wi.prototype._update = function () {
    throw new Error("_update must be implemented by subclass")
};
var bn = Wi,
    md = Et,
    Pl = bn,
    vd = Qt.Buffer,
    bd = [1518500249, 1859775393, -1894007588, -899497514],
    yd = new Array(80);

function qn() {
    this.init(), this._w = yd, Pl.call(this, 64, 56)
}
md(qn, Pl);
qn.prototype.init = function () {
    return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this
};

function wd(e) {
    return e << 5 | e >>> 27
}

function Ed(e) {
    return e << 30 | e >>> 2
}

function Sd(e, t, r, n) {
    return e === 0 ? t & r | ~t & n : e === 2 ? t & r | t & n | r & n : t ^ r ^ n
}
qn.prototype._update = function (e) {
    for (var t = this._w, r = this._a | 0, n = this._b | 0, i = this._c | 0, s = this._d | 0, a = this._e | 0, c = 0; c < 16; ++c) t[c] = e.readInt32BE(c * 4);
    for (; c < 80; ++c) t[c] = t[c - 3] ^ t[c - 8] ^ t[c - 14] ^ t[c - 16];
    for (var l = 0; l < 80; ++l) {
        var h = ~~(l / 20),
            p = wd(r) + Sd(h, n, i, s) + a + t[l] + bd[h] | 0;
        a = s, s = i, i = Ed(n), n = r, r = p
    }
    this._a = r + this._a | 0, this._b = n + this._b | 0, this._c = i + this._c | 0, this._d = s + this._d | 0, this._e = a + this._e | 0
};
qn.prototype._hash = function () {
    var e = vd.allocUnsafe(20);
    return e.writeInt32BE(this._a | 0, 0), e.writeInt32BE(this._b | 0, 4), e.writeInt32BE(this._c | 0, 8), e.writeInt32BE(this._d | 0, 12), e.writeInt32BE(this._e | 0, 16), e
};
var Rd = qn,
    Md = Et,
    Ol = bn,
    Cd = Qt.Buffer,
    kd = [1518500249, 1859775393, -1894007588, -899497514],
    Id = new Array(80);

function zn() {
    this.init(), this._w = Id, Ol.call(this, 64, 56)
}
Md(zn, Ol);
zn.prototype.init = function () {
    return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this
};

function xd(e) {
    return e << 1 | e >>> 31
}

function Ad(e) {
    return e << 5 | e >>> 27
}

function Nd(e) {
    return e << 30 | e >>> 2
}

function Td(e, t, r, n) {
    return e === 0 ? t & r | ~t & n : e === 2 ? t & r | t & n | r & n : t ^ r ^ n
}
zn.prototype._update = function (e) {
    for (var t = this._w, r = this._a | 0, n = this._b | 0, i = this._c | 0, s = this._d | 0, a = this._e | 0, c = 0; c < 16; ++c) t[c] = e.readInt32BE(c * 4);
    for (; c < 80; ++c) t[c] = xd(t[c - 3] ^ t[c - 8] ^ t[c - 14] ^ t[c - 16]);
    for (var l = 0; l < 80; ++l) {
        var h = ~~(l / 20),
            p = Ad(r) + Td(h, n, i, s) + a + t[l] + kd[h] | 0;
        a = s, s = i, i = Nd(n), n = r, r = p
    }
    this._a = r + this._a | 0, this._b = n + this._b | 0, this._c = i + this._c | 0, this._d = s + this._d | 0, this._e = a + this._e | 0
};
zn.prototype._hash = function () {
    var e = Cd.allocUnsafe(20);
    return e.writeInt32BE(this._a | 0, 0), e.writeInt32BE(this._b | 0, 4), e.writeInt32BE(this._c | 0, 8), e.writeInt32BE(this._d | 0, 12), e.writeInt32BE(this._e | 0, 16), e
};
var Ld = zn,
    Pd = Et,
    $l = bn,
    Od = Qt.Buffer,
    $d = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
    Bd = new Array(64);

function Gn() {
    this.init(), this._w = Bd, $l.call(this, 64, 56)
}
Pd(Gn, $l);
Gn.prototype.init = function () {
    return this._a = 1779033703, this._b = 3144134277, this._c = 1013904242, this._d = 2773480762, this._e = 1359893119, this._f = 2600822924, this._g = 528734635, this._h = 1541459225, this
};

function Dd(e, t, r) {
    return r ^ e & (t ^ r)
}

function Fd(e, t, r) {
    return e & t | r & (e | t)
}

function jd(e) {
    return (e >>> 2 | e << 30) ^ (e >>> 13 | e << 19) ^ (e >>> 22 | e << 10)
}

function Hd(e) {
    return (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7)
}

function Ud(e) {
    return (e >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3
}

function Wd(e) {
    return (e >>> 17 | e << 15) ^ (e >>> 19 | e << 13) ^ e >>> 10
}
Gn.prototype._update = function (e) {
    for (var t = this._w, r = this._a | 0, n = this._b | 0, i = this._c | 0, s = this._d | 0, a = this._e | 0, c = this._f | 0, l = this._g | 0, h = this._h | 0, p = 0; p < 16; ++p) t[p] = e.readInt32BE(p * 4);
    for (; p < 64; ++p) t[p] = Wd(t[p - 2]) + t[p - 7] + Ud(t[p - 15]) + t[p - 16] | 0;
    for (var f = 0; f < 64; ++f) {
        var _ = h + Hd(a) + Dd(a, c, l) + $d[f] + t[f] | 0,
            R = jd(r) + Fd(r, n, i) | 0;
        h = l, l = c, c = a, a = s + _ | 0, s = i, i = n, n = r, r = _ + R | 0
    }
    this._a = r + this._a | 0, this._b = n + this._b | 0, this._c = i + this._c | 0, this._d = s + this._d | 0, this._e = a + this._e | 0, this._f = c + this._f | 0, this._g = l + this._g | 0, this._h = h + this._h | 0
};
Gn.prototype._hash = function () {
    var e = Od.allocUnsafe(32);
    return e.writeInt32BE(this._a, 0), e.writeInt32BE(this._b, 4), e.writeInt32BE(this._c, 8), e.writeInt32BE(this._d, 12), e.writeInt32BE(this._e, 16), e.writeInt32BE(this._f, 20), e.writeInt32BE(this._g, 24), e.writeInt32BE(this._h, 28), e
};
var Bl = Gn,
    Vd = Et,
    qd = Bl,
    zd = bn,
    Gd = Qt.Buffer,
    Jd = new Array(64);

function Vi() {
    this.init(), this._w = Jd, zd.call(this, 64, 56)
}
Vd(Vi, qd);
Vi.prototype.init = function () {
    return this._a = 3238371032, this._b = 914150663, this._c = 812702999, this._d = 4144912697, this._e = 4290775857, this._f = 1750603025, this._g = 1694076839, this._h = 3204075428, this
};
Vi.prototype._hash = function () {
    var e = Gd.allocUnsafe(28);
    return e.writeInt32BE(this._a, 0), e.writeInt32BE(this._b, 4), e.writeInt32BE(this._c, 8), e.writeInt32BE(this._d, 12), e.writeInt32BE(this._e, 16), e.writeInt32BE(this._f, 20), e.writeInt32BE(this._g, 24), e
};
var Zd = Vi,
    Kd = Et,
    Dl = bn,
    Qd = Qt.Buffer,
    ka = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591],
    Yd = new Array(160);

function Jn() {
    this.init(), this._w = Yd, Dl.call(this, 128, 112)
}
Kd(Jn, Dl);
Jn.prototype.init = function () {
    return this._ah = 1779033703, this._bh = 3144134277, this._ch = 1013904242, this._dh = 2773480762, this._eh = 1359893119, this._fh = 2600822924, this._gh = 528734635, this._hh = 1541459225, this._al = 4089235720, this._bl = 2227873595, this._cl = 4271175723, this._dl = 1595750129, this._el = 2917565137, this._fl = 725511199, this._gl = 4215389547, this._hl = 327033209, this
};

function Ia(e, t, r) {
    return r ^ e & (t ^ r)
}

function xa(e, t, r) {
    return e & t | r & (e | t)
}

function Aa(e, t) {
    return (e >>> 28 | t << 4) ^ (t >>> 2 | e << 30) ^ (t >>> 7 | e << 25)
}

function Na(e, t) {
    return (e >>> 14 | t << 18) ^ (e >>> 18 | t << 14) ^ (t >>> 9 | e << 23)
}

function Xd(e, t) {
    return (e >>> 1 | t << 31) ^ (e >>> 8 | t << 24) ^ e >>> 7
}

function ef(e, t) {
    return (e >>> 1 | t << 31) ^ (e >>> 8 | t << 24) ^ (e >>> 7 | t << 25)
}

function tf(e, t) {
    return (e >>> 19 | t << 13) ^ (t >>> 29 | e << 3) ^ e >>> 6
}

function rf(e, t) {
    return (e >>> 19 | t << 13) ^ (t >>> 29 | e << 3) ^ (e >>> 6 | t << 26)
}

function Ke(e, t) {
    return e >>> 0 < t >>> 0 ? 1 : 0
}
Jn.prototype._update = function (e) {
    for (var t = this._w, r = this._ah | 0, n = this._bh | 0, i = this._ch | 0, s = this._dh | 0, a = this._eh | 0, c = this._fh | 0, l = this._gh | 0, h = this._hh | 0, p = this._al | 0, f = this._bl | 0, _ = this._cl | 0, R = this._dl | 0, A = this._el | 0, O = this._fl | 0, L = this._gl | 0, M = this._hl | 0, k = 0; k < 32; k += 2) t[k] = e.readInt32BE(k * 4), t[k + 1] = e.readInt32BE(k * 4 + 4);
    for (; k < 160; k += 2) {
        var T = t[k - 30],
            $ = t[k - 15 * 2 + 1],
            P = Xd(T, $),
            D = ef($, T);
        T = t[k - 2 * 2], $ = t[k - 2 * 2 + 1];
        var G = tf(T, $),
            V = rf($, T),
            H = t[k - 7 * 2],
            X = t[k - 7 * 2 + 1],
            Q = t[k - 16 * 2],
            ie = t[k - 16 * 2 + 1],
            v = D + X | 0,
            o = P + H + Ke(v, D) | 0;
        v = v + V | 0, o = o + G + Ke(v, V) | 0, v = v + ie | 0, o = o + Q + Ke(v, ie) | 0, t[k] = o, t[k + 1] = v
    }
    for (var d = 0; d < 160; d += 2) {
        o = t[d], v = t[d + 1];
        var g = xa(r, n, i),
            m = xa(p, f, _),
            y = Aa(r, p),
            C = Aa(p, r),
            x = Na(a, A),
            b = Na(A, a),
            u = ka[d],
            S = ka[d + 1],
            W = Ia(a, c, l),
            q = Ia(A, O, L),
            I = M + b | 0,
            N = h + x + Ke(I, M) | 0;
        I = I + q | 0, N = N + W + Ke(I, q) | 0, I = I + S | 0, N = N + u + Ke(I, S) | 0, I = I + v | 0, N = N + o + Ke(I, v) | 0;
        var B = C + m | 0,
            U = y + g + Ke(B, C) | 0;
        h = l, M = L, l = c, L = O, c = a, O = A, A = R + I | 0, a = s + N + Ke(A, R) | 0, s = i, R = _, i = n, _ = f, n = r, f = p, p = I + B | 0, r = N + U + Ke(p, I) | 0
    }
    this._al = this._al + p | 0, this._bl = this._bl + f | 0, this._cl = this._cl + _ | 0, this._dl = this._dl + R | 0, this._el = this._el + A | 0, this._fl = this._fl + O | 0, this._gl = this._gl + L | 0, this._hl = this._hl + M | 0, this._ah = this._ah + r + Ke(this._al, p) | 0, this._bh = this._bh + n + Ke(this._bl, f) | 0, this._ch = this._ch + i + Ke(this._cl, _) | 0, this._dh = this._dh + s + Ke(this._dl, R) | 0, this._eh = this._eh + a + Ke(this._el, A) | 0, this._fh = this._fh + c + Ke(this._fl, O) | 0, this._gh = this._gh + l + Ke(this._gl, L) | 0, this._hh = this._hh + h + Ke(this._hl, M) | 0
};
Jn.prototype._hash = function () {
    var e = Qd.allocUnsafe(64);

    function t(r, n, i) {
        e.writeInt32BE(r, i), e.writeInt32BE(n, i + 4)
    }
    return t(this._ah, this._al, 0), t(this._bh, this._bl, 8), t(this._ch, this._cl, 16), t(this._dh, this._dl, 24), t(this._eh, this._el, 32), t(this._fh, this._fl, 40), t(this._gh, this._gl, 48), t(this._hh, this._hl, 56), e
};
var Fl = Jn,
    nf = Et,
    sf = Fl,
    of = bn,
    af = Qt.Buffer,
    cf = new Array(160);

function qi() {
    this.init(), this._w = cf, of .call(this, 128, 112)
}
nf(qi, sf);
qi.prototype.init = function () {
    return this._ah = 3418070365, this._bh = 1654270250, this._ch = 2438529370, this._dh = 355462360, this._eh = 1731405415, this._fh = 2394180231, this._gh = 3675008525, this._hh = 1203062813, this._al = 3238371032, this._bl = 914150663, this._cl = 812702999, this._dl = 4144912697, this._el = 4290775857, this._fl = 1750603025, this._gl = 1694076839, this._hl = 3204075428, this
};
qi.prototype._hash = function () {
    var e = af.allocUnsafe(48);

    function t(r, n, i) {
        e.writeInt32BE(r, i), e.writeInt32BE(n, i + 4)
    }
    return t(this._ah, this._al, 0), t(this._bh, this._bl, 8), t(this._ch, this._cl, 16), t(this._dh, this._dl, 24), t(this._eh, this._el, 32), t(this._fh, this._fl, 40), e
};
var lf = qi,
    xr = Tl.exports = function (t) {
        t = t.toLowerCase();
        var r = xr[t];
        if (!r) throw new Error(t + " is not supported (we accept pull requests)");
        return new r
    };
xr.sha = Rd;
xr.sha1 = Ld;
xr.sha224 = Zd;
xr.sha256 = Bl;
xr.sha384 = lf;
xr.sha512 = Fl;
var uf = Tl.exports;
Object.defineProperty(vn, "__esModule", {
    value: !0
});
vn.Session = void 0;
const Ta = uf,
    La = z,
    Pa = "session:id",
    Oa = "session:secret",
    $a = "session:linked";
class Bo {
    constructor(t, r, n, i) {
        this._storage = t, this._id = r || (0, La.randomBytesHex)(16), this._secret = n || (0, La.randomBytesHex)(32), this._key = new Ta.sha256().update(`${this._id}, ${this._secret} WalletLink`).digest("hex"), this._linked = !!i
    }
    static load(t) {
        const r = t.getItem(Pa),
            n = t.getItem($a),
            i = t.getItem(Oa);
        return r && i ? new Bo(t, r, i, n === "1") : null
    }
    static hash(t) {
        return new Ta.sha256().update(t).digest("hex")
    }
    get id() {
        return this._id
    }
    get secret() {
        return this._secret
    }
    get key() {
        return this._key
    }
    get linked() {
        return this._linked
    }
    set linked(t) {
        this._linked = t, this.persistLinked()
    }
    save() {
        return this._storage.setItem(Pa, this._id), this._storage.setItem(Oa, this._secret), this.persistLinked(), this
    }
    persistLinked() {
        this._storage.setItem($a, this._linked ? "1" : "0")
    }
}
vn.Session = Bo;
var zi = {},
    Gi = {};
Object.defineProperty(Gi, "__esModule", {
    value: !0
});
Gi.Cipher = void 0;
const hi = z;
class hf {
    constructor(t) {
        this.secret = t
    }
    async encrypt(t) {
        const r = this.secret;
        if (r.length !== 64) throw Error("secret must be 256 bits");
        const n = crypto.getRandomValues(new Uint8Array(12)),
            i = await crypto.subtle.importKey("raw", (0, hi.hexStringToUint8Array)(r), {
                name: "aes-gcm"
            }, !1, ["encrypt", "decrypt"]),
            s = new TextEncoder,
            a = await window.crypto.subtle.encrypt({
                name: "AES-GCM",
                iv: n
            }, i, s.encode(t)),
            c = 16,
            l = a.slice(a.byteLength - c),
            h = a.slice(0, a.byteLength - c),
            p = new Uint8Array(l),
            f = new Uint8Array(h),
            _ = new Uint8Array([...n, ...p, ...f]);
        return (0, hi.uint8ArrayToHex)(_)
    }
    async decrypt(t) {
        const r = this.secret;
        if (r.length !== 64) throw Error("secret must be 256 bits");
        return new Promise((n, i) => {
            (async function () {
                const s = await crypto.subtle.importKey("raw", (0, hi.hexStringToUint8Array)(r), {
                        name: "aes-gcm"
                    }, !1, ["encrypt", "decrypt"]),
                    a = (0, hi.hexStringToUint8Array)(t),
                    c = a.slice(0, 12),
                    l = a.slice(12, 28),
                    h = a.slice(28),
                    p = new Uint8Array([...h, ...l]),
                    f = {
                        name: "AES-GCM",
                        iv: new Uint8Array(c)
                    };
                try {
                    const _ = await window.crypto.subtle.decrypt(f, s, p),
                        R = new TextDecoder;
                    n(R.decode(_))
                } catch (_) {
                    i(_)
                }
            })()
        })
    }
}
Gi.Cipher = hf;
var Ji = {};
Object.defineProperty(Ji, "__esModule", {
    value: !0
});
Ji.WalletLinkHTTP = void 0;
class df {
    constructor(t, r, n) {
        this.linkAPIUrl = t, this.sessionId = r;
        const i = `${r}:${n}`;
        this.auth = `Basic ${btoa(i)}`
    }
    async markUnseenEventsAsSeen(t) {
        return Promise.all(t.map(r => fetch(`${this.linkAPIUrl}/events/${r.eventId}/seen`, {
            method: "POST",
            headers: {
                Authorization: this.auth
            }
        }))).catch(r => console.error("Unabled to mark event as failed:", r))
    }
    async fetchUnseenEvents() {
        var t;
        const r = await fetch(`${this.linkAPIUrl}/events?unseen=true`, {
            headers: {
                Authorization: this.auth
            }
        });
        if (r.ok) {
            const {
                events: n,
                error: i
            } = await r.json();
            if (i) throw new Error(`Check unseen events failed: ${i}`);
            const s = (t = n == null ? void 0 : n.filter(a => a.event === "Web3Response").map(a => ({
                type: "Event",
                sessionId: this.sessionId,
                eventId: a.id,
                event: a.event,
                data: a.data
            }))) !== null && t !== void 0 ? t : [];
            return this.markUnseenEventsAsSeen(s), s
        }
        throw new Error(`Check unseen events failed: ${r.status}`)
    }
}
Ji.WalletLinkHTTP = df;
var an = {};
Object.defineProperty(an, "__esModule", {
    value: !0
});
an.WalletLinkWebSocket = an.ConnectionState = void 0;
var Xr;
(function (e) {
    e[e.DISCONNECTED = 0] = "DISCONNECTED", e[e.CONNECTING = 1] = "CONNECTING", e[e.CONNECTED = 2] = "CONNECTED"
})(Xr || (an.ConnectionState = Xr = {}));
class ff {
    setConnectionStateListener(t) {
        this.connectionStateListener = t
    }
    setIncomingDataListener(t) {
        this.incomingDataListener = t
    }
    constructor(t, r = WebSocket) {
        this.WebSocketClass = r, this.webSocket = null, this.pendingData = [], this.url = t.replace(/^http/, "ws")
    }
    async connect() {
        if (this.webSocket) throw new Error("webSocket object is not null");
        return new Promise((t, r) => {
            var n;
            let i;
            try {
                this.webSocket = i = new this.WebSocketClass(this.url)
            } catch (s) {
                r(s);
                return
            }(n = this.connectionStateListener) === null || n === void 0 || n.call(this, Xr.CONNECTING), i.onclose = s => {
                var a;
                this.clearWebSocket(), r(new Error(`websocket error ${s.code}: ${s.reason}`)), (a = this.connectionStateListener) === null || a === void 0 || a.call(this, Xr.DISCONNECTED)
            }, i.onopen = s => {
                var a;
                t(), (a = this.connectionStateListener) === null || a === void 0 || a.call(this, Xr.CONNECTED), this.pendingData.length > 0 && ([...this.pendingData].forEach(l => this.sendData(l)), this.pendingData = [])
            }, i.onmessage = s => {
                var a, c;
                if (s.data === "h")(a = this.incomingDataListener) === null || a === void 0 || a.call(this, {
                    type: "Heartbeat"
                });
                else try {
                    const l = JSON.parse(s.data);
                    (c = this.incomingDataListener) === null || c === void 0 || c.call(this, l)
                } catch {}
            }
        })
    }
    disconnect() {
        var t;
        const {
            webSocket: r
        } = this;
        if (r) {
            this.clearWebSocket(), (t = this.connectionStateListener) === null || t === void 0 || t.call(this, Xr.DISCONNECTED), this.connectionStateListener = void 0, this.incomingDataListener = void 0;
            try {
                r.close()
            } catch {}
        }
    }
    sendData(t) {
        const {
            webSocket: r
        } = this;
        if (!r) {
            this.pendingData.push(t), this.connect();
            return
        }
        r.send(t)
    }
    clearWebSocket() {
        const {
            webSocket: t
        } = this;
        t && (this.webSocket = null, t.onclose = null, t.onerror = null, t.onmessage = null, t.onopen = null)
    }
}
an.WalletLinkWebSocket = ff;
Object.defineProperty(zi, "__esModule", {
    value: !0
});
zi.WalletLinkConnection = void 0;
const zr = Je,
    pf = Gi,
    Ct = mn,
    Ba = gt,
    Gr = vn,
    gf = Ji,
    di = an,
    Da = 1e4,
    _f = 6e4;
class mf {
    constructor({
        session: t,
        linkAPIUrl: r,
        listener: n,
        diagnostic: i,
        WebSocketClass: s = WebSocket
    }) {
        this.destroyed = !1, this.lastHeartbeatResponse = 0, this.nextReqId = (0, zr.IntNumber)(1), this._connected = !1, this._linked = !1, this.shouldFetchUnseenEventsOnConnect = !1, this.requestResolutions = new Map, this.handleSessionMetadataUpdated = c => {
            if (!c) return;
            new Map([
                ["__destroyed", this.handleDestroyed],
                ["EthereumAddress", this.handleAccountUpdated],
                ["WalletUsername", this.handleWalletUsernameUpdated],
                ["AppVersion", this.handleAppVersionUpdated],
                ["ChainId", h => c.JsonRpcUrl && this.handleChainUpdated(h, c.JsonRpcUrl)]
            ]).forEach((h, p) => {
                const f = c[p];
                f !== void 0 && h(f)
            })
        }, this.handleDestroyed = c => {
            var l, h;
            c === "1" && ((l = this.listener) === null || l === void 0 || l.resetAndReload(), (h = this.diagnostic) === null || h === void 0 || h.log(Ct.EVENTS.METADATA_DESTROYED, {
                alreadyDestroyed: this.isDestroyed,
                sessionIdHash: Gr.Session.hash(this.session.id)
            }))
        }, this.handleAccountUpdated = async c => {
            var l, h;
            try {
                const p = await this.cipher.decrypt(c);
                (l = this.listener) === null || l === void 0 || l.accountUpdated(p)
            } catch {
                (h = this.diagnostic) === null || h === void 0 || h.log(Ct.EVENTS.GENERAL_ERROR, {
                    message: "Had error decrypting",
                    value: "selectedAddress"
                })
            }
        }, this.handleMetadataUpdated = async (c, l) => {
            var h, p;
            try {
                const f = await this.cipher.decrypt(l);
                (h = this.listener) === null || h === void 0 || h.metadataUpdated(c, f)
            } catch {
                (p = this.diagnostic) === null || p === void 0 || p.log(Ct.EVENTS.GENERAL_ERROR, {
                    message: "Had error decrypting",
                    value: c
                })
            }
        }, this.handleWalletUsernameUpdated = async c => {
            this.handleMetadataUpdated(Ba.WALLET_USER_NAME_KEY, c)
        }, this.handleAppVersionUpdated = async c => {
            this.handleMetadataUpdated(Ba.APP_VERSION_KEY, c)
        }, this.handleChainUpdated = async (c, l) => {
            var h, p;
            try {
                const f = await this.cipher.decrypt(c),
                    _ = await this.cipher.decrypt(l);
                (h = this.listener) === null || h === void 0 || h.chainUpdated(f, _)
            } catch {
                (p = this.diagnostic) === null || p === void 0 || p.log(Ct.EVENTS.GENERAL_ERROR, {
                    message: "Had error decrypting",
                    value: "chainId|jsonRpcUrl"
                })
            }
        }, this.session = t, this.cipher = new pf.Cipher(t.secret), this.diagnostic = i, this.listener = n;
        const a = new di.WalletLinkWebSocket(`${r}/rpc`, s);
        a.setConnectionStateListener(async c => {
            var l;
            (l = this.diagnostic) === null || l === void 0 || l.log(Ct.EVENTS.CONNECTED_STATE_CHANGE, {
                state: c,
                sessionIdHash: Gr.Session.hash(t.id)
            });
            let h = !1;
            switch (c) {
                case di.ConnectionState.DISCONNECTED:
                    if (!this.destroyed) {
                        const p = async () => {
                            await new Promise(f => setTimeout(f, 5e3)), this.destroyed || a.connect().catch(() => {
                                p()
                            })
                        };
                        p()
                    }
                    break;
                case di.ConnectionState.CONNECTED:
                    try {
                        await this.authenticate(), this.sendIsLinked(), this.sendGetSessionConfig(), h = !0
                    } catch {}
                    this.updateLastHeartbeat(), setInterval(() => {
                        this.heartbeat()
                    }, Da), this.shouldFetchUnseenEventsOnConnect && this.fetchUnseenEventsAPI();
                    break;
                case di.ConnectionState.CONNECTING:
                    break
            }
            this.connected !== h && (this.connected = h)
        }), a.setIncomingDataListener(c => {
            var l, h, p;
            switch (c.type) {
                case "Heartbeat":
                    this.updateLastHeartbeat();
                    return;
                case "IsLinkedOK":
                case "Linked": {
                    const f = c.type === "IsLinkedOK" ? c.linked : void 0;
                    (l = this.diagnostic) === null || l === void 0 || l.log(Ct.EVENTS.LINKED, {
                        sessionIdHash: Gr.Session.hash(t.id),
                        linked: f,
                        type: c.type,
                        onlineGuests: c.onlineGuests
                    }), this.linked = f || c.onlineGuests > 0;
                    break
                }
                case "GetSessionConfigOK":
                case "SessionConfigUpdated": {
                    (h = this.diagnostic) === null || h === void 0 || h.log(Ct.EVENTS.SESSION_CONFIG_RECEIVED, {
                        sessionIdHash: Gr.Session.hash(t.id),
                        metadata_keys: c && c.metadata ? Object.keys(c.metadata) : void 0
                    }), this.handleSessionMetadataUpdated(c.metadata);
                    break
                }
                case "Event": {
                    this.handleIncomingEvent(c);
                    break
                }
            }
            c.id !== void 0 && ((p = this.requestResolutions.get(c.id)) === null || p === void 0 || p(c))
        }), this.ws = a, this.http = new gf.WalletLinkHTTP(r, t.id, t.key)
    }
    connect() {
        var t;
        if (this.destroyed) throw new Error("instance is destroyed");
        (t = this.diagnostic) === null || t === void 0 || t.log(Ct.EVENTS.STARTED_CONNECTING, {
            sessionIdHash: Gr.Session.hash(this.session.id)
        }), this.ws.connect()
    }
    destroy() {
        var t;
        this.destroyed = !0, this.ws.disconnect(), (t = this.diagnostic) === null || t === void 0 || t.log(Ct.EVENTS.DISCONNECTED, {
            sessionIdHash: Gr.Session.hash(this.session.id)
        }), this.listener = void 0
    }
    get isDestroyed() {
        return this.destroyed
    }
    get connected() {
        return this._connected
    }
    set connected(t) {
        var r, n;
        this._connected = t, t && ((r = this.onceConnected) === null || r === void 0 || r.call(this)), (n = this.listener) === null || n === void 0 || n.connectedUpdated(t)
    }
    setOnceConnected(t) {
        return new Promise(r => {
            this.connected ? t().then(r) : this.onceConnected = () => {
                t().then(r), this.onceConnected = void 0
            }
        })
    }
    get linked() {
        return this._linked
    }
    set linked(t) {
        var r, n;
        this._linked = t, t && ((r = this.onceLinked) === null || r === void 0 || r.call(this)), (n = this.listener) === null || n === void 0 || n.linkedUpdated(t)
    }
    setOnceLinked(t) {
        return new Promise(r => {
            this.linked ? t().then(r) : this.onceLinked = () => {
                t().then(r), this.onceLinked = void 0
            }
        })
    }
    async handleIncomingEvent(t) {
        var r, n;
        if (!(t.type !== "Event" || t.event !== "Web3Response")) try {
            const i = await this.cipher.decrypt(t.data),
                s = JSON.parse(i);
            if (s.type !== "WEB3_RESPONSE") return;
            (r = this.listener) === null || r === void 0 || r.handleWeb3ResponseMessage(s)
        } catch {
            (n = this.diagnostic) === null || n === void 0 || n.log(Ct.EVENTS.GENERAL_ERROR, {
                message: "Had error decrypting",
                value: "incomingEvent"
            })
        }
    }
    async checkUnseenEvents() {
        if (!this.connected) {
            this.shouldFetchUnseenEventsOnConnect = !0;
            return
        }
        await new Promise(t => setTimeout(t, 250));
        try {
            await this.fetchUnseenEventsAPI()
        } catch (t) {
            console.error("Unable to check for unseen events", t)
        }
    }
    async fetchUnseenEventsAPI() {
        this.shouldFetchUnseenEventsOnConnect = !1, (await this.http.fetchUnseenEvents()).forEach(r => this.handleIncomingEvent(r))
    }
    async setSessionMetadata(t, r) {
        const n = {
            type: "SetSessionConfig",
            id: (0, zr.IntNumber)(this.nextReqId++),
            sessionId: this.session.id,
            metadata: {
                [t]: r
            }
        };
        return this.setOnceConnected(async () => {
            const i = await this.makeRequest(n);
            if (i.type === "Fail") throw new Error(i.error || "failed to set session metadata")
        })
    }
    async publishEvent(t, r, n = !1) {
        const i = await this.cipher.encrypt(JSON.stringify(Object.assign(Object.assign({}, r), {
                origin: location.origin,
                relaySource: window.coinbaseWalletExtension ? "injected_sdk" : "sdk"
            }))),
            s = {
                type: "PublishEvent",
                id: (0, zr.IntNumber)(this.nextReqId++),
                sessionId: this.session.id,
                event: t,
                data: i,
                callWebhook: n
            };
        return this.setOnceLinked(async () => {
            const a = await this.makeRequest(s);
            if (a.type === "Fail") throw new Error(a.error || "failed to publish event");
            return a.eventId
        })
    }
    sendData(t) {
        this.ws.sendData(JSON.stringify(t))
    }
    updateLastHeartbeat() {
        this.lastHeartbeatResponse = Date.now()
    }
    heartbeat() {
        if (Date.now() - this.lastHeartbeatResponse > Da * 2) {
            this.ws.disconnect();
            return
        }
        try {
            this.ws.sendData("h")
        } catch {}
    }
    async makeRequest(t, r = _f) {
        const n = t.id;
        this.sendData(t);
        let i;
        return Promise.race([new Promise((s, a) => {
            i = window.setTimeout(() => {
                a(new Error(`request ${n} timed out`))
            }, r)
        }), new Promise(s => {
            this.requestResolutions.set(n, a => {
                clearTimeout(i), s(a), this.requestResolutions.delete(n)
            })
        })])
    }
    async authenticate() {
        const t = {
                type: "HostSession",
                id: (0, zr.IntNumber)(this.nextReqId++),
                sessionId: this.session.id,
                sessionKey: this.session.key
            },
            r = await this.makeRequest(t);
        if (r.type === "Fail") throw new Error(r.error || "failed to authentcate")
    }
    sendIsLinked() {
        const t = {
            type: "IsLinked",
            id: (0, zr.IntNumber)(this.nextReqId++),
            sessionId: this.session.id
        };
        this.sendData(t)
    }
    sendGetSessionConfig() {
        const t = {
            type: "GetSessionConfig",
            id: (0, zr.IntNumber)(this.nextReqId++),
            sessionId: this.session.id
        };
        this.sendData(t)
    }
}
zi.WalletLinkConnection = mf;
var Zn = {},
    Kn = {},
    Do = {};
Object.defineProperty(Do, "__esModule", {
    value: !0
});
Do.default = '@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}';
var vf = J && J.__importDefault || function (e) {
    return e && e.__esModule ? e : {
        default: e
    }
};
Object.defineProperty(Kn, "__esModule", {
    value: !0
});
Kn.injectCssReset = void 0;
const bf = vf(Do);

function yf() {
    const e = document.createElement("style");
    e.type = "text/css", e.appendChild(document.createTextNode(bf.default)), document.documentElement.appendChild(e)
}
Kn.injectCssReset = yf;
var Zi = {},
    Qn, _e, jl, Hl, _r, Fa, Ul, yo, Wl, Pn = {},
    Vl = [],
    wf = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
    Ki = Array.isArray;

function jt(e, t) {
    for (var r in t) e[r] = t[r];
    return e
}

function ql(e) {
    var t = e.parentNode;
    t && t.removeChild(e)
}

function wo(e, t, r) {
    var n, i, s, a = {};
    for (s in t) s == "key" ? n = t[s] : s == "ref" ? i = t[s] : a[s] = t[s];
    if (arguments.length > 2 && (a.children = arguments.length > 3 ? Qn.call(arguments, 2) : r), typeof e == "function" && e.defaultProps != null)
        for (s in e.defaultProps) a[s] === void 0 && (a[s] = e.defaultProps[s]);
    return xn(e, a, n, i, null)
}

function xn(e, t, r, n, i) {
    var s = {
        type: e,
        props: t,
        key: r,
        ref: n,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        constructor: void 0,
        __v: i ? ? ++jl,
        __i: -1,
        __u: 0
    };
    return i == null && _e.vnode != null && _e.vnode(s), s
}

function Ef() {
    return {
        current: null
    }
}

function Yn(e) {
    return e.children
}

function An(e, t) {
    this.props = e, this.context = t
}

function Rr(e, t) {
    if (t == null) return e.__ ? Rr(e.__, e.__i + 1) : null;
    for (var r; t < e.__k.length; t++)
        if ((r = e.__k[t]) != null && r.__e != null) return r.__e;
    return typeof e.type == "function" ? Rr(e) : null
}

function zl(e) {
    var t, r;
    if ((e = e.__) != null && e.__c != null) {
        for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
            if ((r = e.__k[t]) != null && r.__e != null) {
                e.__e = e.__c.base = r.__e;
                break
            } return zl(e)
    }
}

function Eo(e) {
    (!e.__d && (e.__d = !0) && _r.push(e) && !xi.__r++ || Fa !== _e.debounceRendering) && ((Fa = _e.debounceRendering) || Ul)(xi)
}

function xi() {
    var e, t, r, n, i, s, a, c, l;
    for (_r.sort(yo); e = _r.shift();) e.__d && (t = _r.length, n = void 0, s = (i = (r = e).__v).__e, c = [], l = [], (a = r.__P) && ((n = jt({}, i)).__v = i.__v + 1, _e.vnode && _e.vnode(n), Fo(a, n, i, r.__n, a.ownerSVGElement !== void 0, 32 & i.__u ? [s] : null, c, s ? ? Rr(i), !!(32 & i.__u), l), n.__v = i.__v, n.__.__k[n.__i] = n, Kl(c, n, l), n.__e != s && zl(n)), _r.length > t && _r.sort(yo));
    xi.__r = 0
}

function Gl(e, t, r, n, i, s, a, c, l, h, p) {
    var f, _, R, A, O, L = n && n.__k || Vl,
        M = t.length;
    for (r.__d = l, Sf(r, t, L), l = r.__d, f = 0; f < M; f++)(R = r.__k[f]) != null && typeof R != "boolean" && typeof R != "function" && (_ = R.__i === -1 ? Pn : L[R.__i] || Pn, R.__i = f, Fo(e, R, _, i, s, a, c, l, h, p), A = R.__e, R.ref && _.ref != R.ref && (_.ref && jo(_.ref, null, R), p.push(R.ref, R.__c || A, R)), O == null && A != null && (O = A), 65536 & R.__u || _.__k === R.__k ? (A || _.__e != l || (l = Rr(_)), l = Jl(R, l, e)) : typeof R.type == "function" && R.__d !== void 0 ? l = R.__d : A && (l = A.nextSibling), R.__d = void 0, R.__u &= -196609);
    r.__d = l, r.__e = O
}

function Sf(e, t, r) {
    var n, i, s, a, c, l = t.length,
        h = r.length,
        p = h,
        f = 0;
    for (e.__k = [], n = 0; n < l; n++) a = n + f, (i = e.__k[n] = (i = t[n]) == null || typeof i == "boolean" || typeof i == "function" ? null : typeof i == "string" || typeof i == "number" || typeof i == "bigint" || i.constructor == String ? xn(null, i, null, null, null) : Ki(i) ? xn(Yn, {
        children: i
    }, null, null, null) : i.constructor === void 0 && i.__b > 0 ? xn(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : i) != null ? (i.__ = e, i.__b = e.__b + 1, c = Rf(i, r, a, p), i.__i = c, s = null, c !== -1 && (p--, (s = r[c]) && (s.__u |= 131072)), s == null || s.__v === null ? (c == -1 && f--, typeof i.type != "function" && (i.__u |= 65536)) : c !== a && (c === a + 1 ? f++ : c > a ? p > l - a ? f += c - a : f-- : c < a ? c == a - 1 && (f = c - a) : f = 0, c !== n + f && (i.__u |= 65536))) : (s = r[a]) && s.key == null && s.__e && !(131072 & s.__u) && (s.__e == e.__d && (e.__d = Rr(s)), So(s, s, !1), r[a] = null, p--);
    if (p)
        for (n = 0; n < h; n++)(s = r[n]) != null && !(131072 & s.__u) && (s.__e == e.__d && (e.__d = Rr(s)), So(s, s))
}

function Jl(e, t, r) {
    var n, i;
    if (typeof e.type == "function") {
        for (n = e.__k, i = 0; n && i < n.length; i++) n[i] && (n[i].__ = e, t = Jl(n[i], t, r));
        return t
    }
    e.__e != t && (r.insertBefore(e.__e, t || null), t = e.__e);
    do t = t && t.nextSibling; while (t != null && t.nodeType === 8);
    return t
}

function Zl(e, t) {
    return t = t || [], e == null || typeof e == "boolean" || (Ki(e) ? e.some(function (r) {
        Zl(r, t)
    }) : t.push(e)), t
}

function Rf(e, t, r, n) {
    var i = e.key,
        s = e.type,
        a = r - 1,
        c = r + 1,
        l = t[r];
    if (l === null || l && i == l.key && s === l.type && !(131072 & l.__u)) return r;
    if (n > (l != null && !(131072 & l.__u) ? 1 : 0))
        for (; a >= 0 || c < t.length;) {
            if (a >= 0) {
                if ((l = t[a]) && !(131072 & l.__u) && i == l.key && s === l.type) return a;
                a--
            }
            if (c < t.length) {
                if ((l = t[c]) && !(131072 & l.__u) && i == l.key && s === l.type) return c;
                c++
            }
        }
    return -1
}

function ja(e, t, r) {
    t[0] === "-" ? e.setProperty(t, r ? ? "") : e[t] = r == null ? "" : typeof r != "number" || wf.test(t) ? r : r + "px"
}

function fi(e, t, r, n, i) {
    var s;
    e: if (t === "style")
        if (typeof r == "string") e.style.cssText = r;
        else {
            if (typeof n == "string" && (e.style.cssText = n = ""), n)
                for (t in n) r && t in r || ja(e.style, t, "");
            if (r)
                for (t in r) n && r[t] === n[t] || ja(e.style, t, r[t])
        }
    else if (t[0] === "o" && t[1] === "n") s = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1")), t = t.toLowerCase() in e || t === "onFocusOut" || t === "onFocusIn" ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + s] = r, r ? n ? r.u = n.u : (r.u = Date.now(), e.addEventListener(t, s ? Ua : Ha, s)) : e.removeEventListener(t, s ? Ua : Ha, s);
    else {
        if (i) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (t !== "width" && t !== "height" && t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t !== "rowSpan" && t !== "colSpan" && t !== "role" && t in e) try {
            e[t] = r ? ? "";
            break e
        } catch {}
        typeof r == "function" || (r == null || r === !1 && t[4] !== "-" ? e.removeAttribute(t) : e.setAttribute(t, r))
    }
}

function Ha(e) {
    if (this.l) {
        var t = this.l[e.type + !1];
        if (e.t) {
            if (e.t <= t.u) return
        } else e.t = Date.now();
        return t(_e.event ? _e.event(e) : e)
    }
}

function Ua(e) {
    if (this.l) return this.l[e.type + !0](_e.event ? _e.event(e) : e)
}

function Fo(e, t, r, n, i, s, a, c, l, h) {
    var p, f, _, R, A, O, L, M, k, T, $, P, D, G, V, H = t.type;
    if (t.constructor !== void 0) return null;
    128 & r.__u && (l = !!(32 & r.__u), s = [c = t.__e = r.__e]), (p = _e.__b) && p(t);
    e: if (typeof H == "function") try {
        if (M = t.props, k = (p = H.contextType) && n[p.__c], T = p ? k ? k.props.value : p.__ : n, r.__c ? L = (f = t.__c = r.__c).__ = f.__E : ("prototype" in H && H.prototype.render ? t.__c = f = new H(M, T) : (t.__c = f = new An(M, T), f.constructor = H, f.render = Cf), k && k.sub(f), f.props = M, f.state || (f.state = {}), f.context = T, f.__n = n, _ = f.__d = !0, f.__h = [], f._sb = []), f.__s == null && (f.__s = f.state), H.getDerivedStateFromProps != null && (f.__s == f.state && (f.__s = jt({}, f.__s)), jt(f.__s, H.getDerivedStateFromProps(M, f.__s))), R = f.props, A = f.state, f.__v = t, _) H.getDerivedStateFromProps == null && f.componentWillMount != null && f.componentWillMount(), f.componentDidMount != null && f.__h.push(f.componentDidMount);
        else {
            if (H.getDerivedStateFromProps == null && M !== R && f.componentWillReceiveProps != null && f.componentWillReceiveProps(M, T), !f.__e && (f.shouldComponentUpdate != null && f.shouldComponentUpdate(M, f.__s, T) === !1 || t.__v === r.__v)) {
                for (t.__v !== r.__v && (f.props = M, f.state = f.__s, f.__d = !1), t.__e = r.__e, t.__k = r.__k, t.__k.forEach(function (X) {
                        X && (X.__ = t)
                    }), $ = 0; $ < f._sb.length; $++) f.__h.push(f._sb[$]);
                f._sb = [], f.__h.length && a.push(f);
                break e
            }
            f.componentWillUpdate != null && f.componentWillUpdate(M, f.__s, T), f.componentDidUpdate != null && f.__h.push(function () {
                f.componentDidUpdate(R, A, O)
            })
        }
        if (f.context = T, f.props = M, f.__P = e, f.__e = !1, P = _e.__r, D = 0, "prototype" in H && H.prototype.render) {
            for (f.state = f.__s, f.__d = !1, P && P(t), p = f.render(f.props, f.state, f.context), G = 0; G < f._sb.length; G++) f.__h.push(f._sb[G]);
            f._sb = []
        } else
            do f.__d = !1, P && P(t), p = f.render(f.props, f.state, f.context), f.state = f.__s; while (f.__d && ++D < 25);
        f.state = f.__s, f.getChildContext != null && (n = jt(jt({}, n), f.getChildContext())), _ || f.getSnapshotBeforeUpdate == null || (O = f.getSnapshotBeforeUpdate(R, A)), Gl(e, Ki(V = p != null && p.type === Yn && p.key == null ? p.props.children : p) ? V : [V], t, r, n, i, s, a, c, l, h), f.base = t.__e, t.__u &= -161, f.__h.length && a.push(f), L && (f.__E = f.__ = null)
    } catch (X) {
        t.__v = null, l || s != null ? (t.__e = c, t.__u |= l ? 160 : 32, s[s.indexOf(c)] = null) : (t.__e = r.__e, t.__k = r.__k), _e.__e(X, t, r)
    } else s == null && t.__v === r.__v ? (t.__k = r.__k, t.__e = r.__e) : t.__e = Mf(r.__e, t, r, n, i, s, a, l, h);
    (p = _e.diffed) && p(t)
}

function Kl(e, t, r) {
    t.__d = void 0;
    for (var n = 0; n < r.length; n++) jo(r[n], r[++n], r[++n]);
    _e.__c && _e.__c(t, e), e.some(function (i) {
        try {
            e = i.__h, i.__h = [], e.some(function (s) {
                s.call(i)
            })
        } catch (s) {
            _e.__e(s, i.__v)
        }
    })
}

function Mf(e, t, r, n, i, s, a, c, l) {
    var h, p, f, _, R, A, O, L = r.props,
        M = t.props,
        k = t.type;
    if (k === "svg" && (i = !0), s != null) {
        for (h = 0; h < s.length; h++)
            if ((R = s[h]) && "setAttribute" in R == !!k && (k ? R.localName === k : R.nodeType === 3)) {
                e = R, s[h] = null;
                break
            }
    }
    if (e == null) {
        if (k === null) return document.createTextNode(M);
        e = i ? document.createElementNS("http://www.w3.org/2000/svg", k) : document.createElement(k, M.is && M), s = null, c = !1
    }
    if (k === null) L === M || c && e.data === M || (e.data = M);
    else {
        if (s = s && Qn.call(e.childNodes), L = r.props || Pn, !c && s != null)
            for (L = {}, h = 0; h < e.attributes.length; h++) L[(R = e.attributes[h]).name] = R.value;
        for (h in L) R = L[h], h == "children" || (h == "dangerouslySetInnerHTML" ? f = R : h === "key" || h in M || fi(e, h, null, R, i));
        for (h in M) R = M[h], h == "children" ? _ = R : h == "dangerouslySetInnerHTML" ? p = R : h == "value" ? A = R : h == "checked" ? O = R : h === "key" || c && typeof R != "function" || L[h] === R || fi(e, h, R, L[h], i);
        if (p) c || f && (p.__html === f.__html || p.__html === e.innerHTML) || (e.innerHTML = p.__html), t.__k = [];
        else if (f && (e.innerHTML = ""), Gl(e, Ki(_) ? _ : [_], t, r, n, i && k !== "foreignObject", s, a, s ? s[0] : r.__k && Rr(r, 0), c, l), s != null)
            for (h = s.length; h--;) s[h] != null && ql(s[h]);
        c || (h = "value", A !== void 0 && (A !== e[h] || k === "progress" && !A || k === "option" && A !== L[h]) && fi(e, h, A, L[h], !1), h = "checked", O !== void 0 && O !== e[h] && fi(e, h, O, L[h], !1))
    }
    return e
}

function jo(e, t, r) {
    try {
        typeof e == "function" ? e(t) : e.current = t
    } catch (n) {
        _e.__e(n, r)
    }
}

function So(e, t, r) {
    var n, i;
    if (_e.unmount && _e.unmount(e), (n = e.ref) && (n.current && n.current !== e.__e || jo(n, null, t)), (n = e.__c) != null) {
        if (n.componentWillUnmount) try {
            n.componentWillUnmount()
        } catch (s) {
            _e.__e(s, t)
        }
        n.base = n.__P = null, e.__c = void 0
    }
    if (n = e.__k)
        for (i = 0; i < n.length; i++) n[i] && So(n[i], t, r || typeof e.type != "function");
    r || e.__e == null || ql(e.__e), e.__ = e.__e = e.__d = void 0
}

function Cf(e, t, r) {
    return this.constructor(e, r)
}

function Ql(e, t, r) {
    var n, i, s, a;
    _e.__ && _e.__(e, t), i = (n = typeof r == "function") ? null : r && r.__k || t.__k, s = [], a = [], Fo(t, e = (!n && r || t).__k = wo(Yn, null, [e]), i || Pn, Pn, t.ownerSVGElement !== void 0, !n && r ? [r] : i ? null : t.firstChild ? Qn.call(t.childNodes) : null, s, !n && r ? r : i ? i.__e : t.firstChild, n, a), Kl(s, e, a)
}

function Yl(e, t) {
    Ql(e, t, Yl)
}

function kf(e, t, r) {
    var n, i, s, a, c = jt({}, e.props);
    for (s in e.type && e.type.defaultProps && (a = e.type.defaultProps), t) s == "key" ? n = t[s] : s == "ref" ? i = t[s] : c[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s];
    return arguments.length > 2 && (c.children = arguments.length > 3 ? Qn.call(arguments, 2) : r), xn(e.type, c, n || e.key, i || e.ref, null)
}

function If(e, t) {
    var r = {
        __c: t = "__cC" + Wl++,
        __: e,
        Consumer: function (n, i) {
            return n.children(i)
        },
        Provider: function (n) {
            var i, s;
            return this.getChildContext || (i = [], (s = {})[t] = this, this.getChildContext = function () {
                return s
            }, this.shouldComponentUpdate = function (a) {
                this.props.value !== a.value && i.some(function (c) {
                    c.__e = !0, Eo(c)
                })
            }, this.sub = function (a) {
                i.push(a);
                var c = a.componentWillUnmount;
                a.componentWillUnmount = function () {
                    i.splice(i.indexOf(a), 1), c && c.call(a)
                }
            }), n.children
        }
    };
    return r.Provider.__ = r.Consumer.contextType = r
}
Qn = Vl.slice, _e = {
    __e: function (e, t, r, n) {
        for (var i, s, a; t = t.__;)
            if ((i = t.__c) && !i.__) try {
                if ((s = i.constructor) && s.getDerivedStateFromError != null && (i.setState(s.getDerivedStateFromError(e)), a = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, n || {}), a = i.__d), a) return i.__E = i
            } catch (c) {
                e = c
            }
        throw e
    }
}, jl = 0, Hl = function (e) {
    return e != null && e.constructor == null
}, An.prototype.setState = function (e, t) {
    var r;
    r = this.__s != null && this.__s !== this.state ? this.__s : this.__s = jt({}, this.state), typeof e == "function" && (e = e(jt({}, r), this.props)), e && jt(r, e), e != null && this.__v && (t && this._sb.push(t), Eo(this))
}, An.prototype.forceUpdate = function (e) {
    this.__v && (this.__e = !0, e && this.__h.push(e), Eo(this))
}, An.prototype.render = Yn, _r = [], Ul = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, yo = function (e, t) {
    return e.__v.__b - t.__v.__b
}, xi.__r = 0, Wl = 0;
const xf = Object.freeze(Object.defineProperty({
        __proto__: null,
        Component: An,
        Fragment: Yn,
        cloneElement: kf,
        createContext: If,
        createElement: wo,
        createRef: Ef,
        h: wo,
        hydrate: Yl,
        get isValidElement() {
            return Hl
        },
        get options() {
            return _e
        },
        render: Ql,
        toChildArray: Zl
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    ot = pn(xf);
var Qi = {};

function Xl(e) {
    var t, r, n = "";
    if (typeof e == "string" || typeof e == "number") n += e;
    else if (typeof e == "object")
        if (Array.isArray(e))
            for (t = 0; t < e.length; t++) e[t] && (r = Xl(e[t])) && (n && (n += " "), n += r);
        else
            for (t in e) e[t] && (n && (n += " "), n += t);
    return n
}

function Wa() {
    for (var e, t, r = 0, n = ""; r < arguments.length;)(e = arguments[r++]) && (t = Xl(e)) && (n && (n += " "), n += t);
    return n
}
const Af = Object.freeze(Object.defineProperty({
        __proto__: null,
        clsx: Wa,
        default: Wa
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Xn = pn(Af);
var Ut, pe, Ds, Va, cn = 0,
    eu = [],
    Mi = [],
    Ve = _e,
    qa = Ve.__b,
    za = Ve.__r,
    Ga = Ve.diffed,
    Ja = Ve.__c,
    Za = Ve.unmount,
    Ka = Ve.__;

function Ar(e, t) {
    Ve.__h && Ve.__h(pe, e, cn || t), cn = 0;
    var r = pe.__H || (pe.__H = {
        __: [],
        __h: []
    });
    return e >= r.__.length && r.__.push({
        __V: Mi
    }), r.__[e]
}

function tu(e) {
    return cn = 1, ru(iu, e)
}

function ru(e, t, r) {
    var n = Ar(Ut++, 2);
    if (n.t = e, !n.__c && (n.__ = [r ? r(t) : iu(void 0, t), function (c) {
            var l = n.__N ? n.__N[0] : n.__[0],
                h = n.t(l, c);
            l !== h && (n.__N = [h, n.__[1]], n.__c.setState({}))
        }], n.__c = pe, !pe.u)) {
        var i = function (c, l, h) {
            if (!n.__c.__H) return !0;
            var p = n.__c.__H.__.filter(function (_) {
                return !!_.__c
            });
            if (p.every(function (_) {
                    return !_.__N
                })) return !s || s.call(this, c, l, h);
            var f = !1;
            return p.forEach(function (_) {
                if (_.__N) {
                    var R = _.__[0];
                    _.__ = _.__N, _.__N = void 0, R !== _.__[0] && (f = !0)
                }
            }), !(!f && n.__c.props === c) && (!s || s.call(this, c, l, h))
        };
        pe.u = !0;
        var s = pe.shouldComponentUpdate,
            a = pe.componentWillUpdate;
        pe.componentWillUpdate = function (c, l, h) {
            if (this.__e) {
                var p = s;
                s = void 0, i(c, l, h), s = p
            }
            a && a.call(this, c, l, h)
        }, pe.shouldComponentUpdate = i
    }
    return n.__N || n.__
}

function Nf(e, t) {
    var r = Ar(Ut++, 3);
    !Ve.__s && Uo(r.__H, t) && (r.__ = e, r.i = t, pe.__H.__h.push(r))
}

function nu(e, t) {
    var r = Ar(Ut++, 4);
    !Ve.__s && Uo(r.__H, t) && (r.__ = e, r.i = t, pe.__h.push(r))
}

function Tf(e) {
    return cn = 5, Ho(function () {
        return {
            current: e
        }
    }, [])
}

function Lf(e, t, r) {
    cn = 6, nu(function () {
        return typeof e == "function" ? (e(t()), function () {
            return e(null)
        }) : e ? (e.current = t(), function () {
            return e.current = null
        }) : void 0
    }, r == null ? r : r.concat(e))
}

function Ho(e, t) {
    var r = Ar(Ut++, 7);
    return Uo(r.__H, t) ? (r.__V = e(), r.i = t, r.__h = e, r.__V) : r.__
}

function Pf(e, t) {
    return cn = 8, Ho(function () {
        return e
    }, t)
}

function Of(e) {
    var t = pe.context[e.__c],
        r = Ar(Ut++, 9);
    return r.c = e, t ? (r.__ == null && (r.__ = !0, t.sub(pe)), t.props.value) : e.__
}

function $f(e, t) {
    Ve.useDebugValue && Ve.useDebugValue(t ? t(e) : e)
}

function Bf(e) {
    var t = Ar(Ut++, 10),
        r = tu();
    return t.__ = e, pe.componentDidCatch || (pe.componentDidCatch = function (n, i) {
        t.__ && t.__(n, i), r[1](n)
    }), [r[0], function () {
        r[1](void 0)
    }]
}

function Df() {
    var e = Ar(Ut++, 11);
    if (!e.__) {
        for (var t = pe.__v; t !== null && !t.__m && t.__ !== null;) t = t.__;
        var r = t.__m || (t.__m = [0, 0]);
        e.__ = "P" + r[0] + "-" + r[1]++
    }
    return e.__
}

function Ff() {
    for (var e; e = eu.shift();)
        if (e.__P && e.__H) try {
            e.__H.__h.forEach(Ci), e.__H.__h.forEach(Ro), e.__H.__h = []
        } catch (t) {
            e.__H.__h = [], Ve.__e(t, e.__v)
        }
}
Ve.__b = function (e) {
    pe = null, qa && qa(e)
}, Ve.__ = function (e, t) {
    e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Ka && Ka(e, t)
}, Ve.__r = function (e) {
    za && za(e), Ut = 0;
    var t = (pe = e.__c).__H;
    t && (Ds === pe ? (t.__h = [], pe.__h = [], t.__.forEach(function (r) {
        r.__N && (r.__ = r.__N), r.__V = Mi, r.__N = r.i = void 0
    })) : (t.__h.forEach(Ci), t.__h.forEach(Ro), t.__h = [], Ut = 0)), Ds = pe
}, Ve.diffed = function (e) {
    Ga && Ga(e);
    var t = e.__c;
    t && t.__H && (t.__H.__h.length && (eu.push(t) !== 1 && Va === Ve.requestAnimationFrame || ((Va = Ve.requestAnimationFrame) || jf)(Ff)), t.__H.__.forEach(function (r) {
        r.i && (r.__H = r.i), r.__V !== Mi && (r.__ = r.__V), r.i = void 0, r.__V = Mi
    })), Ds = pe = null
}, Ve.__c = function (e, t) {
    t.some(function (r) {
        try {
            r.__h.forEach(Ci), r.__h = r.__h.filter(function (n) {
                return !n.__ || Ro(n)
            })
        } catch (n) {
            t.some(function (i) {
                i.__h && (i.__h = [])
            }), t = [], Ve.__e(n, r.__v)
        }
    }), Ja && Ja(e, t)
}, Ve.unmount = function (e) {
    Za && Za(e);
    var t, r = e.__c;
    r && r.__H && (r.__H.__.forEach(function (n) {
        try {
            Ci(n)
        } catch (i) {
            t = i
        }
    }), r.__H = void 0, t && Ve.__e(t, r.__v))
};
var Qa = typeof requestAnimationFrame == "function";

function jf(e) {
    var t, r = function () {
            clearTimeout(n), Qa && cancelAnimationFrame(t), setTimeout(e)
        },
        n = setTimeout(r, 100);
    Qa && (t = requestAnimationFrame(r))
}

function Ci(e) {
    var t = pe,
        r = e.__c;
    typeof r == "function" && (e.__c = void 0, r()), pe = t
}

function Ro(e) {
    var t = pe;
    e.__c = e.__(), pe = t
}

function Uo(e, t) {
    return !e || e.length !== t.length || t.some(function (r, n) {
        return r !== e[n]
    })
}

function iu(e, t) {
    return typeof t == "function" ? t(e) : t
}
const Hf = Object.freeze(Object.defineProperty({
        __proto__: null,
        useCallback: Pf,
        useContext: Of,
        useDebugValue: $f,
        useEffect: Nf,
        useErrorBoundary: Bf,
        useId: Df,
        useImperativeHandle: Lf,
        useLayoutEffect: nu,
        useMemo: Ho,
        useReducer: ru,
        useRef: Tf,
        useState: tu
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Yi = pn(Hf);
var ln = {},
    Xi = {};
Object.defineProperty(Xi, "__esModule", {
    value: !0
});
Xi.CloseIcon = void 0;
const Ya = ot;

function Uf(e) {
    return (0, Ya.h)("svg", Object.assign({
        width: "40",
        height: "40",
        viewBox: "0 0 40 40",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, e), (0, Ya.h)("path", {
        d: "M13.7677 13L12.3535 14.4142L18.3535 20.4142L12.3535 26.4142L13.7677 27.8284L19.7677 21.8284L25.7677 27.8284L27.1819 26.4142L21.1819 20.4142L27.1819 14.4142L25.7677 13L19.7677 19L13.7677 13Z"
    }))
}
Xi.CloseIcon = Uf;
var es = {};
Object.defineProperty(es, "__esModule", {
    value: !0
});
es.CoinbaseWalletRound = void 0;
const pi = ot;

function Wf(e) {
    return (0, pi.h)("svg", Object.assign({
        width: "28",
        height: "28",
        viewBox: "0 0 28 28",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, e), (0, pi.h)("circle", {
        cx: "14",
        cy: "14",
        r: "14",
        fill: "#0052FF"
    }), (0, pi.h)("path", {
        d: "M23.8521 14.0003C23.8521 19.455 19.455 23.8521 14.0003 23.8521C8.54559 23.8521 4.14844 19.455 4.14844 14.0003C4.14844 8.54559 8.54559 4.14844 14.0003 4.14844C19.455 4.14844 23.8521 8.54559 23.8521 14.0003Z",
        fill: "white"
    }), (0, pi.h)("path", {
        d: "M11.1855 12.5042C11.1855 12.0477 11.1855 11.7942 11.2835 11.642C11.3814 11.4899 11.4793 11.3377 11.6261 11.287C11.8219 11.1855 12.0178 11.1855 12.5073 11.1855H15.4934C15.983 11.1855 16.1788 11.1855 16.3746 11.287C16.5215 11.3884 16.6683 11.4899 16.7173 11.642C16.8152 11.8449 16.8152 12.0477 16.8152 12.5042V15.4965C16.8152 15.953 16.8152 16.2066 16.7173 16.3587C16.6194 16.5109 16.5215 16.663 16.3746 16.7137C16.1788 16.8152 15.983 16.8152 15.4934 16.8152H12.5073C12.0178 16.8152 11.8219 16.8152 11.6261 16.7137C11.4793 16.6123 11.3324 16.5109 11.2835 16.3587C11.1855 16.1558 11.1855 15.953 11.1855 15.4965V12.5042Z",
        fill: "#0052FF"
    }))
}
es.CoinbaseWalletRound = Wf;
var ts = {};
Object.defineProperty(ts, "__esModule", {
    value: !0
});
ts.QRCodeIcon = void 0;
const Rn = ot;

function Vf(e) {
    return (0, Rn.h)("svg", Object.assign({
        width: "18",
        height: "18",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg"
    }, e), (0, Rn.h)("path", {
        d: "M3 3V8.99939L5 8.99996V5H9V3H3Z"
    }), (0, Rn.h)("path", {
        d: "M15 21L21 21V15.0006L19 15V19L15 19V21Z"
    }), (0, Rn.h)("path", {
        d: "M21 9H19V5H15.0006L15 3H21V9Z"
    }), (0, Rn.h)("path", {
        d: "M3 15V21H8.99939L8.99996 19H5L5 15H3Z"
    }))
}
ts.QRCodeIcon = Vf;
var rs = {};

function su(e) {
    this.mode = ut.MODE_8BIT_BYTE, this.data = e, this.parsedData = [];
    for (var t = 0, r = this.data.length; t < r; t++) {
        var n = [],
            i = this.data.charCodeAt(t);
        i > 65536 ? (n[0] = 240 | (i & 1835008) >>> 18, n[1] = 128 | (i & 258048) >>> 12, n[2] = 128 | (i & 4032) >>> 6, n[3] = 128 | i & 63) : i > 2048 ? (n[0] = 224 | (i & 61440) >>> 12, n[1] = 128 | (i & 4032) >>> 6, n[2] = 128 | i & 63) : i > 128 ? (n[0] = 192 | (i & 1984) >>> 6, n[1] = 128 | i & 63) : n[0] = i, this.parsedData.push(n)
    }
    this.parsedData = Array.prototype.concat.apply([], this.parsedData), this.parsedData.length != this.data.length && (this.parsedData.unshift(191), this.parsedData.unshift(187), this.parsedData.unshift(239))
}
su.prototype = {
    getLength: function (e) {
        return this.parsedData.length
    },
    write: function (e) {
        for (var t = 0, r = this.parsedData.length; t < r; t++) e.put(this.parsedData[t], 8)
    }
};

function Tt(e, t) {
    this.typeNumber = e, this.errorCorrectLevel = t, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = []
}
Tt.prototype = {
    addData: function (e) {
        var t = new su(e);
        this.dataList.push(t), this.dataCache = null
    },
    isDark: function (e, t) {
        if (e < 0 || this.moduleCount <= e || t < 0 || this.moduleCount <= t) throw new Error(e + "," + t);
        return this.modules[e][t]
    },
    getModuleCount: function () {
        return this.moduleCount
    },
    make: function () {
        this.makeImpl(!1, this.getBestMaskPattern())
    },
    makeImpl: function (e, t) {
        this.moduleCount = this.typeNumber * 4 + 17, this.modules = new Array(this.moduleCount);
        for (var r = 0; r < this.moduleCount; r++) {
            this.modules[r] = new Array(this.moduleCount);
            for (var n = 0; n < this.moduleCount; n++) this.modules[r][n] = null
        }
        this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(e, t), this.typeNumber >= 7 && this.setupTypeNumber(e), this.dataCache == null && (this.dataCache = Tt.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, t)
    },
    setupPositionProbePattern: function (e, t) {
        for (var r = -1; r <= 7; r++)
            if (!(e + r <= -1 || this.moduleCount <= e + r))
                for (var n = -1; n <= 7; n++) t + n <= -1 || this.moduleCount <= t + n || (0 <= r && r <= 6 && (n == 0 || n == 6) || 0 <= n && n <= 6 && (r == 0 || r == 6) || 2 <= r && r <= 4 && 2 <= n && n <= 4 ? this.modules[e + r][t + n] = !0 : this.modules[e + r][t + n] = !1)
    },
    getBestMaskPattern: function () {
        for (var e = 0, t = 0, r = 0; r < 8; r++) {
            this.makeImpl(!0, r);
            var n = We.getLostPoint(this);
            (r == 0 || e > n) && (e = n, t = r)
        }
        return t
    },
    createMovieClip: function (e, t, r) {
        var n = e.createEmptyMovieClip(t, r),
            i = 1;
        this.make();
        for (var s = 0; s < this.modules.length; s++)
            for (var a = s * i, c = 0; c < this.modules[s].length; c++) {
                var l = c * i,
                    h = this.modules[s][c];
                h && (n.beginFill(0, 100), n.moveTo(l, a), n.lineTo(l + i, a), n.lineTo(l + i, a + i), n.lineTo(l, a + i), n.endFill())
            }
        return n
    },
    setupTimingPattern: function () {
        for (var e = 8; e < this.moduleCount - 8; e++) this.modules[e][6] == null && (this.modules[e][6] = e % 2 == 0);
        for (var t = 8; t < this.moduleCount - 8; t++) this.modules[6][t] == null && (this.modules[6][t] = t % 2 == 0)
    },
    setupPositionAdjustPattern: function () {
        for (var e = We.getPatternPosition(this.typeNumber), t = 0; t < e.length; t++)
            for (var r = 0; r < e.length; r++) {
                var n = e[t],
                    i = e[r];
                if (this.modules[n][i] == null)
                    for (var s = -2; s <= 2; s++)
                        for (var a = -2; a <= 2; a++) s == -2 || s == 2 || a == -2 || a == 2 || s == 0 && a == 0 ? this.modules[n + s][i + a] = !0 : this.modules[n + s][i + a] = !1
            }
    },
    setupTypeNumber: function (e) {
        for (var t = We.getBCHTypeNumber(this.typeNumber), r = 0; r < 18; r++) {
            var n = !e && (t >> r & 1) == 1;
            this.modules[Math.floor(r / 3)][r % 3 + this.moduleCount - 8 - 3] = n
        }
        for (var r = 0; r < 18; r++) {
            var n = !e && (t >> r & 1) == 1;
            this.modules[r % 3 + this.moduleCount - 8 - 3][Math.floor(r / 3)] = n
        }
    },
    setupTypeInfo: function (e, t) {
        for (var r = this.errorCorrectLevel << 3 | t, n = We.getBCHTypeInfo(r), i = 0; i < 15; i++) {
            var s = !e && (n >> i & 1) == 1;
            i < 6 ? this.modules[i][8] = s : i < 8 ? this.modules[i + 1][8] = s : this.modules[this.moduleCount - 15 + i][8] = s
        }
        for (var i = 0; i < 15; i++) {
            var s = !e && (n >> i & 1) == 1;
            i < 8 ? this.modules[8][this.moduleCount - i - 1] = s : i < 9 ? this.modules[8][15 - i - 1 + 1] = s : this.modules[8][15 - i - 1] = s
        }
        this.modules[this.moduleCount - 8][8] = !e
    },
    mapData: function (e, t) {
        for (var r = -1, n = this.moduleCount - 1, i = 7, s = 0, a = this.moduleCount - 1; a > 0; a -= 2)
            for (a == 6 && a--;;) {
                for (var c = 0; c < 2; c++)
                    if (this.modules[n][a - c] == null) {
                        var l = !1;
                        s < e.length && (l = (e[s] >>> i & 1) == 1);
                        var h = We.getMask(t, n, a - c);
                        h && (l = !l), this.modules[n][a - c] = l, i--, i == -1 && (s++, i = 7)
                    } if (n += r, n < 0 || this.moduleCount <= n) {
                    n -= r, r = -r;
                    break
                }
            }
    }
};
Tt.PAD0 = 236;
Tt.PAD1 = 17;
Tt.createData = function (e, t, r) {
    for (var n = Nt.getRSBlocks(e, t), i = new ou, s = 0; s < r.length; s++) {
        var a = r[s];
        i.put(a.mode, 4), i.put(a.getLength(), We.getLengthInBits(a.mode, e)), a.write(i)
    }
    for (var c = 0, s = 0; s < n.length; s++) c += n[s].dataCount;
    if (i.getLengthInBits() > c * 8) throw new Error("code length overflow. (" + i.getLengthInBits() + ">" + c * 8 + ")");
    for (i.getLengthInBits() + 4 <= c * 8 && i.put(0, 4); i.getLengthInBits() % 8 != 0;) i.putBit(!1);
    for (; !(i.getLengthInBits() >= c * 8 || (i.put(Tt.PAD0, 8), i.getLengthInBits() >= c * 8));) i.put(Tt.PAD1, 8);
    return Tt.createBytes(i, n)
};
Tt.createBytes = function (e, t) {
    for (var r = 0, n = 0, i = 0, s = new Array(t.length), a = new Array(t.length), c = 0; c < t.length; c++) {
        var l = t[c].dataCount,
            h = t[c].totalCount - l;
        n = Math.max(n, l), i = Math.max(i, h), s[c] = new Array(l);
        for (var p = 0; p < s[c].length; p++) s[c][p] = 255 & e.buffer[p + r];
        r += l;
        var f = We.getErrorCorrectPolynomial(h),
            _ = new en(s[c], f.getLength() - 1),
            R = _.mod(f);
        a[c] = new Array(f.getLength() - 1);
        for (var p = 0; p < a[c].length; p++) {
            var A = p + R.getLength() - a[c].length;
            a[c][p] = A >= 0 ? R.get(A) : 0
        }
    }
    for (var O = 0, p = 0; p < t.length; p++) O += t[p].totalCount;
    for (var L = new Array(O), M = 0, p = 0; p < n; p++)
        for (var c = 0; c < t.length; c++) p < s[c].length && (L[M++] = s[c][p]);
    for (var p = 0; p < i; p++)
        for (var c = 0; c < t.length; c++) p < a[c].length && (L[M++] = a[c][p]);
    return L
};
var ut = {
        MODE_NUMBER: 1,
        MODE_ALPHA_NUM: 2,
        MODE_8BIT_BYTE: 4,
        MODE_KANJI: 8
    },
    Jt = {
        L: 1,
        M: 0,
        Q: 3,
        H: 2
    },
    qt = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7
    },
    We = {
        PATTERN_POSITION_TABLE: [
            [],
            [6, 18],
            [6, 22],
            [6, 26],
            [6, 30],
            [6, 34],
            [6, 22, 38],
            [6, 24, 42],
            [6, 26, 46],
            [6, 28, 50],
            [6, 30, 54],
            [6, 32, 58],
            [6, 34, 62],
            [6, 26, 46, 66],
            [6, 26, 48, 70],
            [6, 26, 50, 74],
            [6, 30, 54, 78],
            [6, 30, 56, 82],
            [6, 30, 58, 86],
            [6, 34, 62, 90],
            [6, 28, 50, 72, 94],
            [6, 26, 50, 74, 98],
            [6, 30, 54, 78, 102],
            [6, 28, 54, 80, 106],
            [6, 32, 58, 84, 110],
            [6, 30, 58, 86, 114],
            [6, 34, 62, 90, 118],
            [6, 26, 50, 74, 98, 122],
            [6, 30, 54, 78, 102, 126],
            [6, 26, 52, 78, 104, 130],
            [6, 30, 56, 82, 108, 134],
            [6, 34, 60, 86, 112, 138],
            [6, 30, 58, 86, 114, 142],
            [6, 34, 62, 90, 118, 146],
            [6, 30, 54, 78, 102, 126, 150],
            [6, 24, 50, 76, 102, 128, 154],
            [6, 28, 54, 80, 106, 132, 158],
            [6, 32, 58, 84, 110, 136, 162],
            [6, 26, 54, 82, 110, 138, 166],
            [6, 30, 58, 86, 114, 142, 170]
        ],
        G15: 1335,
        G18: 7973,
        G15_MASK: 21522,
        getBCHTypeInfo: function (e) {
            for (var t = e << 10; We.getBCHDigit(t) - We.getBCHDigit(We.G15) >= 0;) t ^= We.G15 << We.getBCHDigit(t) - We.getBCHDigit(We.G15);
            return (e << 10 | t) ^ We.G15_MASK
        },
        getBCHTypeNumber: function (e) {
            for (var t = e << 12; We.getBCHDigit(t) - We.getBCHDigit(We.G18) >= 0;) t ^= We.G18 << We.getBCHDigit(t) - We.getBCHDigit(We.G18);
            return e << 12 | t
        },
        getBCHDigit: function (e) {
            for (var t = 0; e != 0;) t++, e >>>= 1;
            return t
        },
        getPatternPosition: function (e) {
            return We.PATTERN_POSITION_TABLE[e - 1]
        },
        getMask: function (e, t, r) {
            switch (e) {
                case qt.PATTERN000:
                    return (t + r) % 2 == 0;
                case qt.PATTERN001:
                    return t % 2 == 0;
                case qt.PATTERN010:
                    return r % 3 == 0;
                case qt.PATTERN011:
                    return (t + r) % 3 == 0;
                case qt.PATTERN100:
                    return (Math.floor(t / 2) + Math.floor(r / 3)) % 2 == 0;
                case qt.PATTERN101:
                    return t * r % 2 + t * r % 3 == 0;
                case qt.PATTERN110:
                    return (t * r % 2 + t * r % 3) % 2 == 0;
                case qt.PATTERN111:
                    return (t * r % 3 + (t + r) % 2) % 2 == 0;
                default:
                    throw new Error("bad maskPattern:" + e)
            }
        },
        getErrorCorrectPolynomial: function (e) {
            for (var t = new en([1], 0), r = 0; r < e; r++) t = t.multiply(new en([1, Ye.gexp(r)], 0));
            return t
        },
        getLengthInBits: function (e, t) {
            if (1 <= t && t < 10) switch (e) {
                case ut.MODE_NUMBER:
                    return 10;
                case ut.MODE_ALPHA_NUM:
                    return 9;
                case ut.MODE_8BIT_BYTE:
                    return 8;
                case ut.MODE_KANJI:
                    return 8;
                default:
                    throw new Error("mode:" + e)
            } else if (t < 27) switch (e) {
                case ut.MODE_NUMBER:
                    return 12;
                case ut.MODE_ALPHA_NUM:
                    return 11;
                case ut.MODE_8BIT_BYTE:
                    return 16;
                case ut.MODE_KANJI:
                    return 10;
                default:
                    throw new Error("mode:" + e)
            } else if (t < 41) switch (e) {
                case ut.MODE_NUMBER:
                    return 14;
                case ut.MODE_ALPHA_NUM:
                    return 13;
                case ut.MODE_8BIT_BYTE:
                    return 16;
                case ut.MODE_KANJI:
                    return 12;
                default:
                    throw new Error("mode:" + e)
            } else throw new Error("type:" + t)
        },
        getLostPoint: function (e) {
            for (var t = e.getModuleCount(), r = 0, n = 0; n < t; n++)
                for (var i = 0; i < t; i++) {
                    for (var s = 0, a = e.isDark(n, i), c = -1; c <= 1; c++)
                        if (!(n + c < 0 || t <= n + c))
                            for (var l = -1; l <= 1; l++) i + l < 0 || t <= i + l || c == 0 && l == 0 || a == e.isDark(n + c, i + l) && s++;
                    s > 5 && (r += 3 + s - 5)
                }
            for (var n = 0; n < t - 1; n++)
                for (var i = 0; i < t - 1; i++) {
                    var h = 0;
                    e.isDark(n, i) && h++, e.isDark(n + 1, i) && h++, e.isDark(n, i + 1) && h++, e.isDark(n + 1, i + 1) && h++, (h == 0 || h == 4) && (r += 3)
                }
            for (var n = 0; n < t; n++)
                for (var i = 0; i < t - 6; i++) e.isDark(n, i) && !e.isDark(n, i + 1) && e.isDark(n, i + 2) && e.isDark(n, i + 3) && e.isDark(n, i + 4) && !e.isDark(n, i + 5) && e.isDark(n, i + 6) && (r += 40);
            for (var i = 0; i < t; i++)
                for (var n = 0; n < t - 6; n++) e.isDark(n, i) && !e.isDark(n + 1, i) && e.isDark(n + 2, i) && e.isDark(n + 3, i) && e.isDark(n + 4, i) && !e.isDark(n + 5, i) && e.isDark(n + 6, i) && (r += 40);
            for (var p = 0, i = 0; i < t; i++)
                for (var n = 0; n < t; n++) e.isDark(n, i) && p++;
            var f = Math.abs(100 * p / t / t - 50) / 5;
            return r += f * 10, r
        }
    },
    Ye = {
        glog: function (e) {
            if (e < 1) throw new Error("glog(" + e + ")");
            return Ye.LOG_TABLE[e]
        },
        gexp: function (e) {
            for (; e < 0;) e += 255;
            for (; e >= 256;) e -= 255;
            return Ye.EXP_TABLE[e]
        },
        EXP_TABLE: new Array(256),
        LOG_TABLE: new Array(256)
    };
for (var et = 0; et < 8; et++) Ye.EXP_TABLE[et] = 1 << et;
for (var et = 8; et < 256; et++) Ye.EXP_TABLE[et] = Ye.EXP_TABLE[et - 4] ^ Ye.EXP_TABLE[et - 5] ^ Ye.EXP_TABLE[et - 6] ^ Ye.EXP_TABLE[et - 8];
for (var et = 0; et < 255; et++) Ye.LOG_TABLE[Ye.EXP_TABLE[et]] = et;

function en(e, t) {
    if (e.length == null) throw new Error(e.length + "/" + t);
    for (var r = 0; r < e.length && e[r] == 0;) r++;
    this.num = new Array(e.length - r + t);
    for (var n = 0; n < e.length - r; n++) this.num[n] = e[n + r]
}
en.prototype = {
    get: function (e) {
        return this.num[e]
    },
    getLength: function () {
        return this.num.length
    },
    multiply: function (e) {
        for (var t = new Array(this.getLength() + e.getLength() - 1), r = 0; r < this.getLength(); r++)
            for (var n = 0; n < e.getLength(); n++) t[r + n] ^= Ye.gexp(Ye.glog(this.get(r)) + Ye.glog(e.get(n)));
        return new en(t, 0)
    },
    mod: function (e) {
        if (this.getLength() - e.getLength() < 0) return this;
        for (var t = Ye.glog(this.get(0)) - Ye.glog(e.get(0)), r = new Array(this.getLength()), n = 0; n < this.getLength(); n++) r[n] = this.get(n);
        for (var n = 0; n < e.getLength(); n++) r[n] ^= Ye.gexp(Ye.glog(e.get(n)) + t);
        return new en(r, 0).mod(e)
    }
};

function Nt(e, t) {
    this.totalCount = e, this.dataCount = t
}
Nt.RS_BLOCK_TABLE = [
    [1, 26, 19],
    [1, 26, 16],
    [1, 26, 13],
    [1, 26, 9],
    [1, 44, 34],
    [1, 44, 28],
    [1, 44, 22],
    [1, 44, 16],
    [1, 70, 55],
    [1, 70, 44],
    [2, 35, 17],
    [2, 35, 13],
    [1, 100, 80],
    [2, 50, 32],
    [2, 50, 24],
    [4, 25, 9],
    [1, 134, 108],
    [2, 67, 43],
    [2, 33, 15, 2, 34, 16],
    [2, 33, 11, 2, 34, 12],
    [2, 86, 68],
    [4, 43, 27],
    [4, 43, 19],
    [4, 43, 15],
    [2, 98, 78],
    [4, 49, 31],
    [2, 32, 14, 4, 33, 15],
    [4, 39, 13, 1, 40, 14],
    [2, 121, 97],
    [2, 60, 38, 2, 61, 39],
    [4, 40, 18, 2, 41, 19],
    [4, 40, 14, 2, 41, 15],
    [2, 146, 116],
    [3, 58, 36, 2, 59, 37],
    [4, 36, 16, 4, 37, 17],
    [4, 36, 12, 4, 37, 13],
    [2, 86, 68, 2, 87, 69],
    [4, 69, 43, 1, 70, 44],
    [6, 43, 19, 2, 44, 20],
    [6, 43, 15, 2, 44, 16],
    [4, 101, 81],
    [1, 80, 50, 4, 81, 51],
    [4, 50, 22, 4, 51, 23],
    [3, 36, 12, 8, 37, 13],
    [2, 116, 92, 2, 117, 93],
    [6, 58, 36, 2, 59, 37],
    [4, 46, 20, 6, 47, 21],
    [7, 42, 14, 4, 43, 15],
    [4, 133, 107],
    [8, 59, 37, 1, 60, 38],
    [8, 44, 20, 4, 45, 21],
    [12, 33, 11, 4, 34, 12],
    [3, 145, 115, 1, 146, 116],
    [4, 64, 40, 5, 65, 41],
    [11, 36, 16, 5, 37, 17],
    [11, 36, 12, 5, 37, 13],
    [5, 109, 87, 1, 110, 88],
    [5, 65, 41, 5, 66, 42],
    [5, 54, 24, 7, 55, 25],
    [11, 36, 12],
    [5, 122, 98, 1, 123, 99],
    [7, 73, 45, 3, 74, 46],
    [15, 43, 19, 2, 44, 20],
    [3, 45, 15, 13, 46, 16],
    [1, 135, 107, 5, 136, 108],
    [10, 74, 46, 1, 75, 47],
    [1, 50, 22, 15, 51, 23],
    [2, 42, 14, 17, 43, 15],
    [5, 150, 120, 1, 151, 121],
    [9, 69, 43, 4, 70, 44],
    [17, 50, 22, 1, 51, 23],
    [2, 42, 14, 19, 43, 15],
    [3, 141, 113, 4, 142, 114],
    [3, 70, 44, 11, 71, 45],
    [17, 47, 21, 4, 48, 22],
    [9, 39, 13, 16, 40, 14],
    [3, 135, 107, 5, 136, 108],
    [3, 67, 41, 13, 68, 42],
    [15, 54, 24, 5, 55, 25],
    [15, 43, 15, 10, 44, 16],
    [4, 144, 116, 4, 145, 117],
    [17, 68, 42],
    [17, 50, 22, 6, 51, 23],
    [19, 46, 16, 6, 47, 17],
    [2, 139, 111, 7, 140, 112],
    [17, 74, 46],
    [7, 54, 24, 16, 55, 25],
    [34, 37, 13],
    [4, 151, 121, 5, 152, 122],
    [4, 75, 47, 14, 76, 48],
    [11, 54, 24, 14, 55, 25],
    [16, 45, 15, 14, 46, 16],
    [6, 147, 117, 4, 148, 118],
    [6, 73, 45, 14, 74, 46],
    [11, 54, 24, 16, 55, 25],
    [30, 46, 16, 2, 47, 17],
    [8, 132, 106, 4, 133, 107],
    [8, 75, 47, 13, 76, 48],
    [7, 54, 24, 22, 55, 25],
    [22, 45, 15, 13, 46, 16],
    [10, 142, 114, 2, 143, 115],
    [19, 74, 46, 4, 75, 47],
    [28, 50, 22, 6, 51, 23],
    [33, 46, 16, 4, 47, 17],
    [8, 152, 122, 4, 153, 123],
    [22, 73, 45, 3, 74, 46],
    [8, 53, 23, 26, 54, 24],
    [12, 45, 15, 28, 46, 16],
    [3, 147, 117, 10, 148, 118],
    [3, 73, 45, 23, 74, 46],
    [4, 54, 24, 31, 55, 25],
    [11, 45, 15, 31, 46, 16],
    [7, 146, 116, 7, 147, 117],
    [21, 73, 45, 7, 74, 46],
    [1, 53, 23, 37, 54, 24],
    [19, 45, 15, 26, 46, 16],
    [5, 145, 115, 10, 146, 116],
    [19, 75, 47, 10, 76, 48],
    [15, 54, 24, 25, 55, 25],
    [23, 45, 15, 25, 46, 16],
    [13, 145, 115, 3, 146, 116],
    [2, 74, 46, 29, 75, 47],
    [42, 54, 24, 1, 55, 25],
    [23, 45, 15, 28, 46, 16],
    [17, 145, 115],
    [10, 74, 46, 23, 75, 47],
    [10, 54, 24, 35, 55, 25],
    [19, 45, 15, 35, 46, 16],
    [17, 145, 115, 1, 146, 116],
    [14, 74, 46, 21, 75, 47],
    [29, 54, 24, 19, 55, 25],
    [11, 45, 15, 46, 46, 16],
    [13, 145, 115, 6, 146, 116],
    [14, 74, 46, 23, 75, 47],
    [44, 54, 24, 7, 55, 25],
    [59, 46, 16, 1, 47, 17],
    [12, 151, 121, 7, 152, 122],
    [12, 75, 47, 26, 76, 48],
    [39, 54, 24, 14, 55, 25],
    [22, 45, 15, 41, 46, 16],
    [6, 151, 121, 14, 152, 122],
    [6, 75, 47, 34, 76, 48],
    [46, 54, 24, 10, 55, 25],
    [2, 45, 15, 64, 46, 16],
    [17, 152, 122, 4, 153, 123],
    [29, 74, 46, 14, 75, 47],
    [49, 54, 24, 10, 55, 25],
    [24, 45, 15, 46, 46, 16],
    [4, 152, 122, 18, 153, 123],
    [13, 74, 46, 32, 75, 47],
    [48, 54, 24, 14, 55, 25],
    [42, 45, 15, 32, 46, 16],
    [20, 147, 117, 4, 148, 118],
    [40, 75, 47, 7, 76, 48],
    [43, 54, 24, 22, 55, 25],
    [10, 45, 15, 67, 46, 16],
    [19, 148, 118, 6, 149, 119],
    [18, 75, 47, 31, 76, 48],
    [34, 54, 24, 34, 55, 25],
    [20, 45, 15, 61, 46, 16]
];
Nt.getRSBlocks = function (e, t) {
    var r = Nt.getRsBlockTable(e, t);
    if (r == null) throw new Error("bad rs block @ typeNumber:" + e + "/errorCorrectLevel:" + t);
    for (var n = r.length / 3, i = [], s = 0; s < n; s++)
        for (var a = r[s * 3 + 0], c = r[s * 3 + 1], l = r[s * 3 + 2], h = 0; h < a; h++) i.push(new Nt(c, l));
    return i
};
Nt.getRsBlockTable = function (e, t) {
    switch (t) {
        case Jt.L:
            return Nt.RS_BLOCK_TABLE[(e - 1) * 4 + 0];
        case Jt.M:
            return Nt.RS_BLOCK_TABLE[(e - 1) * 4 + 1];
        case Jt.Q:
            return Nt.RS_BLOCK_TABLE[(e - 1) * 4 + 2];
        case Jt.H:
            return Nt.RS_BLOCK_TABLE[(e - 1) * 4 + 3];
        default:
            return
    }
};

function ou() {
    this.buffer = [], this.length = 0
}
ou.prototype = {
    get: function (e) {
        var t = Math.floor(e / 8);
        return (this.buffer[t] >>> 7 - e % 8 & 1) == 1
    },
    put: function (e, t) {
        for (var r = 0; r < t; r++) this.putBit((e >>> t - r - 1 & 1) == 1)
    },
    getLengthInBits: function () {
        return this.length
    },
    putBit: function (e) {
        var t = Math.floor(this.length / 8);
        this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++
    }
};
var Fs = [
    [17, 14, 11, 7],
    [32, 26, 20, 14],
    [53, 42, 32, 24],
    [78, 62, 46, 34],
    [106, 84, 60, 44],
    [134, 106, 74, 58],
    [154, 122, 86, 64],
    [192, 152, 108, 84],
    [230, 180, 130, 98],
    [271, 213, 151, 119],
    [321, 251, 177, 137],
    [367, 287, 203, 155],
    [425, 331, 241, 177],
    [458, 362, 258, 194],
    [520, 412, 292, 220],
    [586, 450, 322, 250],
    [644, 504, 364, 280],
    [718, 560, 394, 310],
    [792, 624, 442, 338],
    [858, 666, 482, 382],
    [929, 711, 509, 403],
    [1003, 779, 565, 439],
    [1091, 857, 611, 461],
    [1171, 911, 661, 511],
    [1273, 997, 715, 535],
    [1367, 1059, 751, 593],
    [1465, 1125, 805, 625],
    [1528, 1190, 868, 658],
    [1628, 1264, 908, 698],
    [1732, 1370, 982, 742],
    [1840, 1452, 1030, 790],
    [1952, 1538, 1112, 842],
    [2068, 1628, 1168, 898],
    [2188, 1722, 1228, 958],
    [2303, 1809, 1283, 983],
    [2431, 1911, 1351, 1051],
    [2563, 1989, 1423, 1093],
    [2699, 2099, 1499, 1139],
    [2809, 2213, 1579, 1219],
    [2953, 2331, 1663, 1273]
];

function au(e) {
    if (this.options = {
            padding: 4,
            width: 256,
            height: 256,
            typeNumber: 4,
            color: "#000000",
            background: "#ffffff",
            ecl: "M",
            image: {
                svg: "",
                width: 0,
                height: 0
            }
        }, typeof e == "string" && (e = {
            content: e
        }), e)
        for (var t in e) this.options[t] = e[t];
    if (typeof this.options.content != "string") throw new Error("Expected 'content' as string!");
    if (this.options.content.length === 0) throw new Error("Expected 'content' to be non-empty!");
    if (!(this.options.padding >= 0)) throw new Error("Expected 'padding' value to be non-negative!");
    if (!(this.options.width > 0) || !(this.options.height > 0)) throw new Error("Expected 'width' or 'height' value to be higher than zero!");

    function r(l) {
        switch (l) {
            case "L":
                return Jt.L;
            case "M":
                return Jt.M;
            case "Q":
                return Jt.Q;
            case "H":
                return Jt.H;
            default:
                throw new Error("Unknwon error correction level: " + l)
        }
    }

    function n(l, h) {
        for (var p = i(l), f = 1, _ = 0, R = 0, A = Fs.length; R <= A; R++) {
            var O = Fs[R];
            if (!O) throw new Error("Content too long: expected " + _ + " but got " + p);
            switch (h) {
                case "L":
                    _ = O[0];
                    break;
                case "M":
                    _ = O[1];
                    break;
                case "Q":
                    _ = O[2];
                    break;
                case "H":
                    _ = O[3];
                    break;
                default:
                    throw new Error("Unknwon error correction level: " + h)
            }
            if (p <= _) break;
            f++
        }
        if (f > Fs.length) throw new Error("Content too long");
        return f
    }

    function i(l) {
        var h = encodeURI(l).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
        return h.length + (h.length != l ? 3 : 0)
    }
    var s = this.options.content,
        a = n(s, this.options.ecl),
        c = r(this.options.ecl);
    this.qrcode = new Tt(a, c), this.qrcode.addData(s), this.qrcode.make()
}
au.prototype.svg = function (e) {
    var t = this.options || {},
        r = this.qrcode.modules;
    typeof e > "u" && (e = {
        container: t.container || "svg"
    });
    for (var n = typeof t.pretty < "u" ? !!t.pretty : !0, i = n ? "  " : "", s = n ? `\r
` : "", a = t.width, c = t.height, l = r.length, h = a / (l + 2 * t.padding), p = c / (l + 2 * t.padding), f = typeof t.join < "u" ? !!t.join : !1, _ = typeof t.swap < "u" ? !!t.swap : !1, R = typeof t.xmlDeclaration < "u" ? !!t.xmlDeclaration : !0, A = typeof t.predefined < "u" ? !!t.predefined : !1, O = A ? i + '<defs><path id="qrmodule" d="M0 0 h' + p + " v" + h + ' H0 z" style="fill:' + t.color + ';shape-rendering:crispEdges;" /></defs>' + s : "", L = i + '<rect x="0" y="0" width="' + a + '" height="' + c + '" style="fill:' + t.background + ';shape-rendering:crispEdges;"/>' + s, M = "", k = "", T = 0; T < l; T++)
        for (var $ = 0; $ < l; $++) {
            var P = r[$][T];
            if (P) {
                var D = $ * h + t.padding * h,
                    G = T * p + t.padding * p;
                if (_) {
                    var V = D;
                    D = G, G = V
                }
                if (f) {
                    var H = h + D,
                        X = p + G;
                    D = Number.isInteger(D) ? Number(D) : D.toFixed(2), G = Number.isInteger(G) ? Number(G) : G.toFixed(2), H = Number.isInteger(H) ? Number(H) : H.toFixed(2), X = Number.isInteger(X) ? Number(X) : X.toFixed(2), k += "M" + D + "," + G + " V" + X + " H" + H + " V" + G + " H" + D + " Z "
                } else A ? M += i + '<use x="' + D.toString() + '" y="' + G.toString() + '" href="#qrmodule" />' + s : M += i + '<rect x="' + D.toString() + '" y="' + G.toString() + '" width="' + h + '" height="' + p + '" style="fill:' + t.color + ';shape-rendering:crispEdges;"/>' + s
            }
        }
    f && (M = i + '<path x="0" y="0" style="fill:' + t.color + ';shape-rendering:crispEdges;" d="' + k + '" />');
    let Q = "";
    if (this.options.image !== void 0 && this.options.image.svg) {
        const v = a * this.options.image.width / 100,
            o = c * this.options.image.height / 100,
            d = a / 2 - v / 2,
            g = c / 2 - o / 2;
        Q += `<svg x="${d}" y="${g}" width="${v}" height="${o}" viewBox="0 0 100 100" preserveAspectRatio="xMinYMin meet">`, Q += this.options.image.svg + s, Q += "</svg>"
    }
    var ie = "";
    switch (e.container) {
        case "svg":
            R && (ie += '<?xml version="1.0" standalone="yes"?>' + s), ie += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="' + a + '" height="' + c + '">' + s, ie += O + L + M, ie += Q, ie += "</svg>";
            break;
        case "svg-viewbox":
            R && (ie += '<?xml version="1.0" standalone="yes"?>' + s), ie += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 ' + a + " " + c + '">' + s, ie += O + L + M, ie += Q, ie += "</svg>";
            break;
        case "g":
            ie += '<g width="' + a + '" height="' + c + '">' + s, ie += O + L + M, ie += Q, ie += "</g>";
            break;
        default:
            ie += (O + L + M + Q).replace(/^\s+/, "");
            break
    }
    return ie
};
var qf = au,
    zf = J && J.__importDefault || function (e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
Object.defineProperty(rs, "__esModule", {
    value: !0
});
rs.QRCode = void 0;
const Gf = ot,
    Xa = Yi,
    Jf = zf(qf),
    Zf = e => {
        const [t, r] = (0, Xa.useState)("");
        return (0, Xa.useEffect)(() => {
            var n, i;
            const s = new Jf.default({
                    content: e.content,
                    background: e.bgColor || "#ffffff",
                    color: e.fgColor || "#000000",
                    container: "svg",
                    ecl: "M",
                    width: (n = e.width) !== null && n !== void 0 ? n : 256,
                    height: (i = e.height) !== null && i !== void 0 ? i : 256,
                    padding: 0,
                    image: e.image
                }),
                a = Buffer.from(s.svg(), "utf8").toString("base64");
            r(`data:image/svg+xml;base64,${a}`)
        }, [e.bgColor, e.content, e.fgColor, e.height, e.image, e.width]), t ? (0, Gf.h)("img", {
            src: t,
            alt: "QR Code"
        }) : null
    };
rs.QRCode = Zf;
var ns = {},
    Wo = {};
Object.defineProperty(Wo, "__esModule", {
    value: !0
});
Wo.default = ".-cbwsdk-css-reset .-cbwsdk-spinner{display:inline-block}.-cbwsdk-css-reset .-cbwsdk-spinner svg{display:inline-block;animation:2s linear infinite -cbwsdk-spinner-svg}.-cbwsdk-css-reset .-cbwsdk-spinner svg circle{animation:1.9s ease-in-out infinite both -cbwsdk-spinner-circle;display:block;fill:rgba(0,0,0,0);stroke-dasharray:283;stroke-dashoffset:280;stroke-linecap:round;stroke-width:10px;transform-origin:50% 50%}@keyframes -cbwsdk-spinner-svg{0%{transform:rotateZ(0deg)}100%{transform:rotateZ(360deg)}}@keyframes -cbwsdk-spinner-circle{0%,25%{stroke-dashoffset:280;transform:rotate(0)}50%,75%{stroke-dashoffset:75;transform:rotate(45deg)}100%{stroke-dashoffset:280;transform:rotate(360deg)}}";
var Kf = J && J.__importDefault || function (e) {
    return e && e.__esModule ? e : {
        default: e
    }
};
Object.defineProperty(ns, "__esModule", {
    value: !0
});
ns.Spinner = void 0;
const gi = ot,
    Qf = Kf(Wo),
    Yf = e => {
        var t;
        const r = (t = e.size) !== null && t !== void 0 ? t : 64,
            n = e.color || "#000";
        return (0, gi.h)("div", {
            class: "-cbwsdk-spinner"
        }, (0, gi.h)("style", null, Qf.default), (0, gi.h)("svg", {
            viewBox: "0 0 100 100",
            xmlns: "http://www.w3.org/2000/svg",
            style: {
                width: r,
                height: r
            }
        }, (0, gi.h)("circle", {
            style: {
                cx: 50,
                cy: 50,
                r: 45,
                stroke: n
            }
        })))
    };
ns.Spinner = Yf;
var Vo = {};
Object.defineProperty(Vo, "__esModule", {
    value: !0
});
Vo.default = ".-cbwsdk-css-reset .-cbwsdk-connect-content{height:430px;width:700px;border-radius:12px;padding:30px}.-cbwsdk-css-reset .-cbwsdk-connect-content.light{background:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content.dark{background:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-header{display:flex;align-items:center;justify-content:space-between;margin:0 0 30px}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading{font-style:normal;font-weight:500;font-size:28px;line-height:36px;margin:0}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-layout{display:flex;flex-direction:row}.-cbwsdk-css-reset .-cbwsdk-connect-content-column-left{margin-right:30px;display:flex;flex-direction:column;justify-content:space-between}.-cbwsdk-css-reset .-cbwsdk-connect-content-column-right{flex:25%;margin-right:34px}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-wrapper{width:220px;height:220px;border-radius:12px;display:flex;justify-content:center;align-items:center;background:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting{position:absolute;top:0;bottom:0;left:0;right:0;display:flex;flex-direction:column;align-items:center;justify-content:center}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.light{background-color:rgba(255,255,255,.95)}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.light>p{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.dark{background-color:rgba(10,11,13,.9)}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.dark>p{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting>p{font-size:12px;font-weight:bold;margin-top:16px}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app{border-radius:8px;font-size:14px;line-height:20px;padding:12px;width:339px}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app.light{background:#eef0f3;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app.dark{background:#1e2025;color:#8a919e}.-cbwsdk-css-reset .-cbwsdk-cancel-button{-webkit-appearance:none;border:none;background:none;cursor:pointer;padding:0;margin:0}.-cbwsdk-css-reset .-cbwsdk-cancel-button-x{position:relative;display:block;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-wallet-steps{padding:0 0 0 16px;margin:0;width:100%;list-style:decimal}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item{list-style-type:decimal;display:list-item;font-style:normal;font-weight:400;font-size:16px;line-height:24px;margin-top:20px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item-wrapper{display:flex;align-items:center}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-pad-left{margin-left:6px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon{display:flex;border-radius:50%;height:24px;width:24px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon svg{margin:auto;display:block}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon.light{background:#0052ff}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon.dark{background:#588af5}.-cbwsdk-css-reset .-cbwsdk-connect-item{align-items:center;display:flex;flex-direction:row;padding:16px 24px;gap:12px;cursor:pointer;border-radius:100px;font-weight:600}.-cbwsdk-css-reset .-cbwsdk-connect-item.light{background:#f5f8ff;color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-connect-item.dark{background:#001033;color:#588af5}.-cbwsdk-css-reset .-cbwsdk-connect-item-copy-wrapper{margin:0 4px 0 8px}.-cbwsdk-css-reset .-cbwsdk-connect-item-title{margin:0 0 0;font-size:16px;line-height:24px;font-weight:500}.-cbwsdk-css-reset .-cbwsdk-connect-item-description{font-weight:400;font-size:14px;line-height:20px;margin:0}";
var cu = J && J.__importDefault || function (e) {
    return e && e.__esModule ? e : {
        default: e
    }
};
Object.defineProperty(ln, "__esModule", {
    value: !0
});
ln.CoinbaseWalletSteps = ln.ConnectContent = void 0;
const Sr = cu(Xn),
    oe = ot,
    Xf = z,
    e0 = _n,
    t0 = Xi,
    r0 = es,
    n0 = ts,
    i0 = rs,
    s0 = ns,
    o0 = cu(Vo),
    js = {
        title: "Coinbase Wallet app",
        description: "Connect with your self-custody wallet",
        steps: lu
    },
    a0 = e => e === "light" ? "#FFFFFF" : "#0A0B0D";

function c0(e) {
    const {
        theme: t
    } = e, r = (0, Xf.createQrUrl)(e.sessionId, e.sessionSecret, e.linkAPIUrl, e.isParentConnection, e.version, e.chainId), n = js.steps;
    return (0, oe.h)("div", {
        "data-testid": "connect-content",
        className: (0, Sr.default)("-cbwsdk-connect-content", t)
    }, (0, oe.h)("style", null, o0.default), (0, oe.h)("div", {
        className: "-cbwsdk-connect-content-header"
    }, (0, oe.h)("h2", {
        className: (0, Sr.default)("-cbwsdk-connect-content-heading", t)
    }, "Scan to connect with our mobile app"), e.onCancel && (0, oe.h)("button", {
        type: "button",
        className: "-cbwsdk-cancel-button",
        onClick: e.onCancel
    }, (0, oe.h)(t0.CloseIcon, {
        fill: t === "light" ? "#0A0B0D" : "#FFFFFF"
    }))), (0, oe.h)("div", {
        className: "-cbwsdk-connect-content-layout"
    }, (0, oe.h)("div", {
        className: "-cbwsdk-connect-content-column-left"
    }, (0, oe.h)(l0, {
        title: js.title,
        description: js.description,
        theme: t
    })), (0, oe.h)("div", {
        className: "-cbwsdk-connect-content-column-right"
    }, (0, oe.h)("div", {
        className: "-cbwsdk-connect-content-qr-wrapper"
    }, (0, oe.h)(i0.QRCode, {
        content: r,
        width: 200,
        height: 200,
        fgColor: "#000",
        bgColor: "transparent"
    }), (0, oe.h)("input", {
        type: "hidden",
        name: "cbw-cbwsdk-version",
        value: e0.LIB_VERSION
    }), (0, oe.h)("input", {
        type: "hidden",
        value: r
    })), (0, oe.h)(n, {
        theme: t
    }), !e.isConnected && (0, oe.h)("div", {
        "data-testid": "connecting-spinner",
        className: (0, Sr.default)("-cbwsdk-connect-content-qr-connecting", t)
    }, (0, oe.h)(s0.Spinner, {
        size: 36,
        color: t === "dark" ? "#FFF" : "#000"
    }), (0, oe.h)("p", null, "Connecting...")))))
}
ln.ConnectContent = c0;

function l0({
    title: e,
    description: t,
    theme: r
}) {
    return (0, oe.h)("div", {
        className: (0, Sr.default)("-cbwsdk-connect-item", r)
    }, (0, oe.h)("div", null, (0, oe.h)(r0.CoinbaseWalletRound, null)), (0, oe.h)("div", {
        className: "-cbwsdk-connect-item-copy-wrapper"
    }, (0, oe.h)("h3", {
        className: "-cbwsdk-connect-item-title"
    }, e), (0, oe.h)("p", {
        className: "-cbwsdk-connect-item-description"
    }, t)))
}

function lu({
    theme: e
}) {
    return (0, oe.h)("ol", {
        className: "-cbwsdk-wallet-steps"
    }, (0, oe.h)("li", {
        className: (0, Sr.default)("-cbwsdk-wallet-steps-item", e)
    }, (0, oe.h)("div", {
        className: "-cbwsdk-wallet-steps-item-wrapper"
    }, "Open Coinbase Wallet app")), (0, oe.h)("li", {
        className: (0, Sr.default)("-cbwsdk-wallet-steps-item", e)
    }, (0, oe.h)("div", {
        className: "-cbwsdk-wallet-steps-item-wrapper"
    }, (0, oe.h)("span", null, "Tap ", (0, oe.h)("strong", null, "Scan"), " "), (0, oe.h)("span", {
        className: (0, Sr.default)("-cbwsdk-wallet-steps-pad-left", "-cbwsdk-wallet-steps-icon", e)
    }, (0, oe.h)(n0.QRCodeIcon, {
        fill: a0(e)
    })))))
}
ln.CoinbaseWalletSteps = lu;
var is = {},
    ss = {};
Object.defineProperty(ss, "__esModule", {
    value: !0
});
ss.ArrowLeftIcon = void 0;
const ec = ot;

function u0(e) {
    return (0, ec.h)("svg", Object.assign({
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        xmlns: "http://www.w3.org/2000/svg"
    }, e), (0, ec.h)("path", {
        d: "M8.60675 0.155884L7.37816 1.28209L12.7723 7.16662H0V8.83328H12.6548L6.82149 14.6666L8 15.8451L15.8201 8.02501L8.60675 0.155884Z"
    }))
}
ss.ArrowLeftIcon = u0;
var os = {};
Object.defineProperty(os, "__esModule", {
    value: !0
});
os.LaptopIcon = void 0;
const Hs = ot;

function h0(e) {
    return (0, Hs.h)("svg", Object.assign({
        width: "14",
        height: "14",
        viewBox: "0 0 14 14",
        xmlns: "http://www.w3.org/2000/svg"
    }, e), (0, Hs.h)("path", {
        d: "M1.8001 2.2002H12.2001V9.40019H1.8001V2.2002ZM3.4001 3.8002V7.80019H10.6001V3.8002H3.4001Z"
    }), (0, Hs.h)("path", {
        d: "M13.4001 10.2002H0.600098C0.600098 11.0838 1.31644 11.8002 2.2001 11.8002H11.8001C12.6838 11.8002 13.4001 11.0838 13.4001 10.2002Z"
    }))
}
os.LaptopIcon = h0;
var as = {};
Object.defineProperty(as, "__esModule", {
    value: !0
});
as.SafeIcon = void 0;
const tc = ot;

function d0(e) {
    return (0, tc.h)("svg", Object.assign({
        width: "14",
        height: "14",
        viewBox: "0 0 14 14",
        xmlns: "http://www.w3.org/2000/svg"
    }, e), (0, tc.h)("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M0.600098 0.600098V11.8001H13.4001V0.600098H0.600098ZM7.0001 9.2001C5.3441 9.2001 4.0001 7.8561 4.0001 6.2001C4.0001 4.5441 5.3441 3.2001 7.0001 3.2001C8.6561 3.2001 10.0001 4.5441 10.0001 6.2001C10.0001 7.8561 8.6561 9.2001 7.0001 9.2001ZM0.600098 12.6001H3.8001V13.4001H0.600098V12.6001ZM10.2001 12.6001H13.4001V13.4001H10.2001V12.6001ZM8.8001 6.2001C8.8001 7.19421 7.99421 8.0001 7.0001 8.0001C6.00598 8.0001 5.2001 7.19421 5.2001 6.2001C5.2001 5.20598 6.00598 4.4001 7.0001 4.4001C7.99421 4.4001 8.8001 5.20598 8.8001 6.2001Z"
    }))
}
as.SafeIcon = d0;
var qo = {};
Object.defineProperty(qo, "__esModule", {
    value: !0
});
qo.default = ".-cbwsdk-css-reset .-cbwsdk-try-extension{display:flex;margin-top:12px;height:202px;width:700px;border-radius:12px;padding:30px}.-cbwsdk-css-reset .-cbwsdk-try-extension.light{background:#fff}.-cbwsdk-css-reset .-cbwsdk-try-extension.dark{background:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-try-extension-column-half{flex:50%}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading{font-style:normal;font-weight:500;font-size:25px;line-height:32px;margin:0;max-width:204px}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta{appearance:none;border:none;background:none;color:#0052ff;cursor:pointer;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta.light{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta.dark{color:#588af5}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta-wrapper{display:flex;align-items:center;margin-top:12px}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta-icon{display:block;margin-left:4px;height:14px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:0;padding:0;list-style:none;height:100%}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item{display:flex;align-items:center;flex-flow:nowrap;margin-top:24px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item:first-of-type{margin-top:0}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon-wrapper{display:block}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon{display:flex;height:32px;width:32px;border-radius:50%}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon svg{margin:auto;display:block}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon.light{background:#eef0f3}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon.dark{background:#1e2025}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy{display:block;font-weight:400;font-size:14px;line-height:20px;padding-left:12px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy.light{color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy.dark{color:#8a919e}";
var uu = J && J.__importDefault || function (e) {
    return e && e.__esModule ? e : {
        default: e
    }
};
Object.defineProperty(is, "__esModule", {
    value: !0
});
is.TryExtensionContent = void 0;
const dr = uu(Xn),
    Ge = ot,
    Us = Yi,
    f0 = ss,
    p0 = os,
    g0 = as,
    _0 = uu(qo);

function m0({
    theme: e
}) {
    const [t, r] = (0, Us.useState)(!1), n = (0, Us.useCallback)(() => {
        window.open("https://api.wallet.coinbase.com/rpc/v2/desktop/chrome", "_blank")
    }, []), i = (0, Us.useCallback)(() => {
        t ? window.location.reload() : (n(), r(!0))
    }, [n, t]);
    return (0, Ge.h)("div", {
        class: (0, dr.default)("-cbwsdk-try-extension", e)
    }, (0, Ge.h)("style", null, _0.default), (0, Ge.h)("div", {
        class: "-cbwsdk-try-extension-column-half"
    }, (0, Ge.h)("h3", {
        class: (0, dr.default)("-cbwsdk-try-extension-heading", e)
    }, "Or try the Coinbase Wallet browser extension"), (0, Ge.h)("div", {
        class: "-cbwsdk-try-extension-cta-wrapper"
    }, (0, Ge.h)("button", {
        class: (0, dr.default)("-cbwsdk-try-extension-cta", e),
        onClick: i
    }, t ? "Refresh" : "Install"), (0, Ge.h)("div", null, !t && (0, Ge.h)(f0.ArrowLeftIcon, {
        class: "-cbwsdk-try-extension-cta-icon",
        fill: e === "light" ? "#0052FF" : "#588AF5"
    })))), (0, Ge.h)("div", {
        class: "-cbwsdk-try-extension-column-half"
    }, (0, Ge.h)("ul", {
        class: "-cbwsdk-try-extension-list"
    }, (0, Ge.h)("li", {
        class: "-cbwsdk-try-extension-list-item"
    }, (0, Ge.h)("div", {
        class: "-cbwsdk-try-extension-list-item-icon-wrapper"
    }, (0, Ge.h)("span", {
        class: (0, dr.default)("-cbwsdk-try-extension-list-item-icon", e)
    }, (0, Ge.h)(p0.LaptopIcon, {
        fill: e === "light" ? "#0A0B0D" : "#FFFFFF"
    }))), (0, Ge.h)("div", {
        class: (0, dr.default)("-cbwsdk-try-extension-list-item-copy", e)
    }, "Connect with dapps with just one click on your desktop browser")), (0, Ge.h)("li", {
        class: "-cbwsdk-try-extension-list-item"
    }, (0, Ge.h)("div", {
        class: "-cbwsdk-try-extension-list-item-icon-wrapper"
    }, (0, Ge.h)("span", {
        class: (0, dr.default)("-cbwsdk-try-extension-list-item-icon", e)
    }, (0, Ge.h)(g0.SafeIcon, {
        fill: e === "light" ? "#0A0B0D" : "#FFFFFF"
    }))), (0, Ge.h)("div", {
        class: (0, dr.default)("-cbwsdk-try-extension-list-item-copy", e)
    }, "Add an additional layer of security by using a supported Ledger hardware wallet")))))
}
is.TryExtensionContent = m0;
var zo = {};
Object.defineProperty(zo, "__esModule", {
    value: !0
});
zo.default = ".-cbwsdk-css-reset .-cbwsdk-connect-dialog{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop.light{background-color:rgba(0,0,0,.5)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop.dark{background-color:rgba(50,53,61,.4)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-box{display:flex;position:relative;flex-direction:column;transform:scale(1);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-box-hidden{opacity:0;transform:scale(0.85)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-container{display:block}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-container-hidden{display:none}";
var hu = J && J.__importDefault || function (e) {
    return e && e.__esModule ? e : {
        default: e
    }
};
Object.defineProperty(Qi, "__esModule", {
    value: !0
});
Qi.ConnectDialog = void 0;
const Ws = hu(Xn),
    fr = ot,
    Vs = Yi,
    v0 = ln,
    b0 = is,
    y0 = hu(zo),
    w0 = e => {
        const {
            isOpen: t,
            darkMode: r
        } = e, [n, i] = (0, Vs.useState)(!t), [s, a] = (0, Vs.useState)(!t);
        (0, Vs.useEffect)(() => {
            const l = [window.setTimeout(() => {
                a(!t)
            }, 10)];
            return t ? i(!1) : l.push(window.setTimeout(() => {
                i(!0)
            }, 360)), () => {
                l.forEach(window.clearTimeout)
            }
        }, [t]);
        const c = r ? "dark" : "light";
        return (0, fr.h)("div", {
            class: (0, Ws.default)("-cbwsdk-connect-dialog-container", n && "-cbwsdk-connect-dialog-container-hidden")
        }, (0, fr.h)("style", null, y0.default), (0, fr.h)("div", {
            class: (0, Ws.default)("-cbwsdk-connect-dialog-backdrop", c, s && "-cbwsdk-connect-dialog-backdrop-hidden")
        }), (0, fr.h)("div", {
            class: "-cbwsdk-connect-dialog"
        }, (0, fr.h)("div", {
            class: (0, Ws.default)("-cbwsdk-connect-dialog-box", s && "-cbwsdk-connect-dialog-box-hidden")
        }, e.connectDisabled ? null : (0, fr.h)(v0.ConnectContent, {
            theme: c,
            version: e.version,
            sessionId: e.sessionId,
            sessionSecret: e.sessionSecret,
            linkAPIUrl: e.linkAPIUrl,
            isConnected: e.isConnected,
            isParentConnection: e.isParentConnection,
            chainId: e.chainId,
            onCancel: e.onCancel
        }), (0, fr.h)(b0.TryExtensionContent, {
            theme: c
        }))))
    };
Qi.ConnectDialog = w0;
Object.defineProperty(Zi, "__esModule", {
    value: !0
});
Zi.LinkFlow = void 0;
const qs = ot,
    E0 = Qi;
class S0 {
    constructor(t) {
        this.connected = !1, this.chainId = 1, this.isOpen = !1, this.onCancel = null, this.root = null, this.connectDisabled = !1, this.darkMode = t.darkMode, this.version = t.version, this.sessionId = t.sessionId, this.sessionSecret = t.sessionSecret, this.linkAPIUrl = t.linkAPIUrl, this.isParentConnection = t.isParentConnection
    }
    attach(t) {
        this.root = document.createElement("div"), this.root.className = "-cbwsdk-link-flow-root", t.appendChild(this.root), this.render()
    }
    setConnected(t) {
        this.connected !== t && (this.connected = t, this.render())
    }
    setChainId(t) {
        this.chainId !== t && (this.chainId = t, this.render())
    }
    detach() {
        var t;
        this.root && ((0, qs.render)(null, this.root), (t = this.root.parentElement) === null || t === void 0 || t.removeChild(this.root))
    }
    setConnectDisabled(t) {
        this.connectDisabled = t
    }
    open(t) {
        this.isOpen = !0, this.onCancel = t.onCancel, this.render()
    }
    close() {
        this.isOpen = !1, this.onCancel = null, this.render()
    }
    render() {
        this.root && (0, qs.render)((0, qs.h)(E0.ConnectDialog, {
            darkMode: this.darkMode,
            version: this.version,
            sessionId: this.sessionId,
            sessionSecret: this.sessionSecret,
            linkAPIUrl: this.linkAPIUrl,
            isOpen: this.isOpen,
            isConnected: this.connected,
            isParentConnection: this.isParentConnection,
            chainId: this.chainId,
            onCancel: this.onCancel,
            connectDisabled: this.connectDisabled
        }), this.root)
    }
}
Zi.LinkFlow = S0;
var Go = {},
    Jo = {};
Object.defineProperty(Jo, "__esModule", {
    value: !0
});
Jo.default = ".-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}";
(function (e) {
    var t = J && J.__importDefault || function (f) {
        return f && f.__esModule ? f : {
            default: f
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.SnackbarInstance = e.SnackbarContainer = e.Snackbar = void 0;
    const r = t(Xn),
        n = ot,
        i = Yi,
        s = t(Jo),
        a = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+",
        c = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=";
    class l {
        constructor(_) {
            this.items = new Map, this.nextItemKey = 0, this.root = null, this.darkMode = _.darkMode
        }
        attach(_) {
            this.root = document.createElement("div"), this.root.className = "-cbwsdk-snackbar-root", _.appendChild(this.root), this.render()
        }
        presentItem(_) {
            const R = this.nextItemKey++;
            return this.items.set(R, _), this.render(), () => {
                this.items.delete(R), this.render()
            }
        }
        clear() {
            this.items.clear(), this.render()
        }
        render() {
            this.root && (0, n.render)((0, n.h)("div", null, (0, n.h)(e.SnackbarContainer, {
                darkMode: this.darkMode
            }, Array.from(this.items.entries()).map(([_, R]) => (0, n.h)(e.SnackbarInstance, Object.assign({}, R, {
                key: _
            }))))), this.root)
        }
    }
    e.Snackbar = l;
    const h = f => (0, n.h)("div", {
        class: (0, r.default)("-cbwsdk-snackbar-container")
    }, (0, n.h)("style", null, s.default), (0, n.h)("div", {
        class: "-cbwsdk-snackbar"
    }, f.children));
    e.SnackbarContainer = h;
    const p = ({
        autoExpand: f,
        message: _,
        menuItems: R
    }) => {
        const [A, O] = (0, i.useState)(!0), [L, M] = (0, i.useState)(f ? ? !1);
        (0, i.useEffect)(() => {
            const T = [window.setTimeout(() => {
                O(!1)
            }, 1), window.setTimeout(() => {
                M(!0)
            }, 1e4)];
            return () => {
                T.forEach(window.clearTimeout)
            }
        });
        const k = () => {
            M(!L)
        };
        return (0, n.h)("div", {
            class: (0, r.default)("-cbwsdk-snackbar-instance", A && "-cbwsdk-snackbar-instance-hidden", L && "-cbwsdk-snackbar-instance-expanded")
        }, (0, n.h)("div", {
            class: "-cbwsdk-snackbar-instance-header",
            onClick: k
        }, (0, n.h)("img", {
            src: a,
            class: "-cbwsdk-snackbar-instance-header-cblogo"
        }), " ", (0, n.h)("div", {
            class: "-cbwsdk-snackbar-instance-header-message"
        }, _), (0, n.h)("div", {
            class: "-gear-container"
        }, !L && (0, n.h)("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, (0, n.h)("circle", {
            cx: "12",
            cy: "12",
            r: "12",
            fill: "#F5F7F8"
        })), (0, n.h)("img", {
            src: c,
            class: "-gear-icon",
            title: "Expand"
        }))), R && R.length > 0 && (0, n.h)("div", {
            class: "-cbwsdk-snackbar-instance-menu"
        }, R.map((T, $) => (0, n.h)("div", {
            class: (0, r.default)("-cbwsdk-snackbar-instance-menu-item", T.isRed && "-cbwsdk-snackbar-instance-menu-item-is-red"),
            onClick: T.onClick,
            key: $
        }, (0, n.h)("svg", {
            width: T.svgWidth,
            height: T.svgHeight,
            viewBox: "0 0 10 11",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, (0, n.h)("path", {
            "fill-rule": T.defaultFillRule,
            "clip-rule": T.defaultClipRule,
            d: T.path,
            fill: "#AAAAAA"
        })), (0, n.h)("span", {
            class: (0, r.default)("-cbwsdk-snackbar-instance-menu-item-info", T.isRed && "-cbwsdk-snackbar-instance-menu-item-info-is-red")
        }, T.info)))))
    };
    e.SnackbarInstance = p
})(Go);
Object.defineProperty(Zn, "__esModule", {
    value: !0
});
Zn.WalletLinkRelayUI = void 0;
const R0 = Kn,
    M0 = Zi,
    C0 = Go;
class k0 {
    constructor(t) {
        this.standalone = null, this.attached = !1, this.snackbar = new C0.Snackbar({
            darkMode: t.darkMode
        }), this.linkFlow = new M0.LinkFlow({
            darkMode: t.darkMode,
            version: t.version,
            sessionId: t.session.id,
            sessionSecret: t.session.secret,
            linkAPIUrl: t.linkAPIUrl,
            isParentConnection: !1
        })
    }
    attach() {
        if (this.attached) throw new Error("Coinbase Wallet SDK UI is already attached");
        const t = document.documentElement,
            r = document.createElement("div");
        r.className = "-cbwsdk-css-reset", t.appendChild(r), this.linkFlow.attach(r), this.snackbar.attach(r), this.attached = !0, (0, R0.injectCssReset)()
    }
    setConnected(t) {
        this.linkFlow.setConnected(t)
    }
    setChainId(t) {
        this.linkFlow.setChainId(t)
    }
    setConnectDisabled(t) {
        this.linkFlow.setConnectDisabled(t)
    }
    addEthereumChain() {}
    watchAsset() {}
    switchEthereumChain() {}
    requestEthereumAccounts(t) {
        this.linkFlow.open({
            onCancel: t.onCancel
        })
    }
    hideRequestEthereumAccounts() {
        this.linkFlow.close()
    }
    signEthereumMessage() {}
    signEthereumTransaction() {}
    submitEthereumTransaction() {}
    ethereumAddressFromSignedMessage() {}
    showConnecting(t) {
        let r;
        return t.isUnlinkedErrorState ? r = {
            autoExpand: !0,
            message: "Connection lost",
            menuItems: [{
                isRed: !1,
                info: "Reset connection",
                svgWidth: "10",
                svgHeight: "11",
                path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                defaultFillRule: "evenodd",
                defaultClipRule: "evenodd",
                onClick: t.onResetConnection
            }]
        } : r = {
            message: "Confirm on phone",
            menuItems: [{
                isRed: !0,
                info: "Cancel transaction",
                svgWidth: "11",
                svgHeight: "11",
                path: "M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z",
                defaultFillRule: "inherit",
                defaultClipRule: "inherit",
                onClick: t.onCancel
            }, {
                isRed: !1,
                info: "Reset connection",
                svgWidth: "10",
                svgHeight: "11",
                path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                defaultFillRule: "evenodd",
                defaultClipRule: "evenodd",
                onClick: t.onResetConnection
            }]
        }, this.snackbar.presentItem(r)
    }
    reloadUI() {
        document.location.reload()
    }
    inlineAccountsResponse() {
        return !1
    }
    inlineAddEthereumChain() {
        return !1
    }
    inlineWatchAsset() {
        return !1
    }
    inlineSwitchEthereumChain() {
        return !1
    }
    setStandalone(t) {
        this.standalone = t
    }
    isStandalone() {
        var t;
        return (t = this.standalone) !== null && t !== void 0 ? t : !1
    }
}
Zn.WalletLinkRelayUI = k0;
Object.defineProperty(Vn, "__esModule", {
    value: !0
});
Vn.WalletLinkRelay = void 0;
const Jr = Fn,
    I0 = Je,
    Ue = z,
    pr = mn,
    rc = gt,
    zt = vn,
    x0 = zi,
    gr = gn,
    A0 = Zn;
class Dt extends rc.RelayAbstract {
    constructor(t) {
        var r;
        super(), this.accountsCallback = null, this.chainCallbackParams = {
            chainId: "",
            jsonRpcUrl: ""
        }, this.chainCallback = null, this.dappDefaultChain = 1, this.appName = "", this.appLogoUrl = null, this.linkedUpdated = a => {
            var c;
            this.isLinked = a;
            const l = this.storage.getItem(rc.LOCAL_STORAGE_ADDRESSES_KEY);
            if (a && (this.session.linked = a), this.isUnlinkedErrorState = !1, l) {
                const h = l.split(" "),
                    p = this.storage.getItem("IsStandaloneSigning") === "true";
                if (h[0] !== "" && !a && this.session.linked && !p) {
                    this.isUnlinkedErrorState = !0;
                    const f = this.getSessionIdHash();
                    (c = this.diagnostic) === null || c === void 0 || c.log(pr.EVENTS.UNLINKED_ERROR_STATE, {
                        sessionIdHash: f
                    })
                }
            }
        }, this.metadataUpdated = (a, c) => {
            this.storage.setItem(a, c)
        }, this.chainUpdated = (a, c) => {
            this.chainCallbackParams.chainId === a && this.chainCallbackParams.jsonRpcUrl === c || (this.chainCallbackParams = {
                chainId: a,
                jsonRpcUrl: c
            }, this.chainCallback && this.chainCallback(a, c))
        }, this.accountUpdated = a => {
            this.accountsCallback && this.accountsCallback([a]), Dt.accountRequestCallbackIds.size > 0 && (Array.from(Dt.accountRequestCallbackIds.values()).forEach(c => {
                const l = {
                    type: "WEB3_RESPONSE",
                    id: c,
                    response: {
                        method: "requestEthereumAccounts",
                        result: [a]
                    }
                };
                this.invokeCallback(Object.assign(Object.assign({}, l), {
                    id: c
                }))
            }), Dt.accountRequestCallbackIds.clear())
        }, this.connectedUpdated = a => {
            this.ui.setConnected(a)
        }, this.resetAndReload = this.resetAndReload.bind(this), this.linkAPIUrl = t.linkAPIUrl, this.storage = t.storage, this.options = t;
        const {
            session: n,
            ui: i,
            connection: s
        } = this.subscribe();
        this._session = n, this.connection = s, this.relayEventManager = t.relayEventManager, this.diagnostic = t.diagnosticLogger, this._reloadOnDisconnect = (r = t.reloadOnDisconnect) !== null && r !== void 0 ? r : !0, this.ui = i
    }
    subscribe() {
        const t = zt.Session.load(this.storage) || new zt.Session(this.storage).save(),
            {
                linkAPIUrl: r,
                diagnostic: n
            } = this,
            i = new x0.WalletLinkConnection({
                session: t,
                linkAPIUrl: r,
                diagnostic: n,
                listener: this
            }),
            {
                version: s,
                darkMode: a
            } = this.options,
            c = this.options.uiConstructor({
                linkAPIUrl: r,
                version: s,
                darkMode: a,
                session: t
            });
        return i.connect(), {
            session: t,
            ui: c,
            connection: i
        }
    }
    attachUI() {
        this.ui.attach()
    }
    resetAndReload() {
        Promise.race([this.connection.setSessionMetadata("__destroyed", "1"), new Promise(t => setTimeout(() => t(null), 1e3))]).then(() => {
            var t, r;
            const n = this.ui.isStandalone();
            (t = this.diagnostic) === null || t === void 0 || t.log(pr.EVENTS.SESSION_STATE_CHANGE, {
                method: "relay::resetAndReload",
                sessionMetadataChange: "__destroyed, 1",
                sessionIdHash: this.getSessionIdHash()
            }), this.connection.destroy();
            const i = zt.Session.load(this.storage);
            if ((i == null ? void 0 : i.id) === this._session.id ? this.storage.clear() : i && ((r = this.diagnostic) === null || r === void 0 || r.log(pr.EVENTS.SKIPPED_CLEARING_SESSION, {
                    sessionIdHash: this.getSessionIdHash(),
                    storedSessionIdHash: zt.Session.hash(i.id)
                })), this._reloadOnDisconnect) {
                this.ui.reloadUI();
                return
            }
            this.accountsCallback && this.accountsCallback([], !0);
            const {
                session: s,
                ui: a,
                connection: c
            } = this.subscribe();
            this._session = s, this.connection = c, this.ui = a, n && this.ui.setStandalone && this.ui.setStandalone(!0), this.attachUI()
        }).catch(t => {
            var r;
            (r = this.diagnostic) === null || r === void 0 || r.log(pr.EVENTS.FAILURE, {
                method: "relay::resetAndReload",
                message: `failed to reset and reload with ${t}`,
                sessionIdHash: this.getSessionIdHash()
            })
        })
    }
    setAppInfo(t, r) {
        this.appName = t, this.appLogoUrl = r
    }
    getStorageItem(t) {
        return this.storage.getItem(t)
    }
    get session() {
        return this._session
    }
    setStorageItem(t, r) {
        this.storage.setItem(t, r)
    }
    signEthereumMessage(t, r, n, i) {
        return this.sendRequest({
            method: "signEthereumMessage",
            params: {
                message: (0, Ue.hexStringFromBuffer)(t, !0),
                address: r,
                addPrefix: n,
                typedDataJson: i || null
            }
        })
    }
    ethereumAddressFromSignedMessage(t, r, n) {
        return this.sendRequest({
            method: "ethereumAddressFromSignedMessage",
            params: {
                message: (0, Ue.hexStringFromBuffer)(t, !0),
                signature: (0, Ue.hexStringFromBuffer)(r, !0),
                addPrefix: n
            }
        })
    }
    signEthereumTransaction(t) {
        return this.sendRequest({
            method: "signEthereumTransaction",
            params: {
                fromAddress: t.fromAddress,
                toAddress: t.toAddress,
                weiValue: (0, Ue.bigIntStringFromBN)(t.weiValue),
                data: (0, Ue.hexStringFromBuffer)(t.data, !0),
                nonce: t.nonce,
                gasPriceInWei: t.gasPriceInWei ? (0, Ue.bigIntStringFromBN)(t.gasPriceInWei) : null,
                maxFeePerGas: t.gasPriceInWei ? (0, Ue.bigIntStringFromBN)(t.gasPriceInWei) : null,
                maxPriorityFeePerGas: t.gasPriceInWei ? (0, Ue.bigIntStringFromBN)(t.gasPriceInWei) : null,
                gasLimit: t.gasLimit ? (0, Ue.bigIntStringFromBN)(t.gasLimit) : null,
                chainId: t.chainId,
                shouldSubmit: !1
            }
        })
    }
    signAndSubmitEthereumTransaction(t) {
        return this.sendRequest({
            method: "signEthereumTransaction",
            params: {
                fromAddress: t.fromAddress,
                toAddress: t.toAddress,
                weiValue: (0, Ue.bigIntStringFromBN)(t.weiValue),
                data: (0, Ue.hexStringFromBuffer)(t.data, !0),
                nonce: t.nonce,
                gasPriceInWei: t.gasPriceInWei ? (0, Ue.bigIntStringFromBN)(t.gasPriceInWei) : null,
                maxFeePerGas: t.maxFeePerGas ? (0, Ue.bigIntStringFromBN)(t.maxFeePerGas) : null,
                maxPriorityFeePerGas: t.maxPriorityFeePerGas ? (0, Ue.bigIntStringFromBN)(t.maxPriorityFeePerGas) : null,
                gasLimit: t.gasLimit ? (0, Ue.bigIntStringFromBN)(t.gasLimit) : null,
                chainId: t.chainId,
                shouldSubmit: !0
            }
        })
    }
    submitEthereumTransaction(t, r) {
        return this.sendRequest({
            method: "submitEthereumTransaction",
            params: {
                signedTransaction: (0, Ue.hexStringFromBuffer)(t, !0),
                chainId: r
            }
        })
    }
    scanQRCode(t) {
        return this.sendRequest({
            method: "scanQRCode",
            params: {
                regExp: t
            }
        })
    }
    getQRCodeUrl() {
        return (0, Ue.createQrUrl)(this._session.id, this._session.secret, this.linkAPIUrl, !1, this.options.version, this.dappDefaultChain)
    }
    genericRequest(t, r) {
        return this.sendRequest({
            method: "generic",
            params: {
                action: r,
                data: t
            }
        })
    }
    sendGenericMessage(t) {
        return this.sendRequest(t)
    }
    sendRequest(t) {
        let r = null;
        const n = (0, Ue.randomBytesHex)(8),
            i = a => {
                this.publishWeb3RequestCanceledEvent(n), this.handleErrorResponse(n, t.method, a), r == null || r()
            };
        return {
            promise: new Promise((a, c) => {
                this.ui.isStandalone() || (r = this.ui.showConnecting({
                    isUnlinkedErrorState: this.isUnlinkedErrorState,
                    onCancel: i,
                    onResetConnection: this.resetAndReload
                })), this.relayEventManager.callbacks.set(n, l => {
                    if (r == null || r(), (0, gr.isErrorResponse)(l)) return c(new Error(l.errorMessage));
                    a(l)
                }), this.ui.isStandalone() ? this.sendRequestStandalone(n, t) : this.publishWeb3RequestEvent(n, t)
            }),
            cancel: i
        }
    }
    setConnectDisabled(t) {
        this.ui.setConnectDisabled(t)
    }
    setAccountsCallback(t) {
        this.accountsCallback = t
    }
    setChainCallback(t) {
        this.chainCallback = t
    }
    setDappDefaultChainCallback(t) {
        this.dappDefaultChain = t, this.ui instanceof A0.WalletLinkRelayUI && this.ui.setChainId(t)
    }
    publishWeb3RequestEvent(t, r) {
        var n;
        const i = {
                type: "WEB3_REQUEST",
                id: t,
                request: r
            },
            s = zt.Session.load(this.storage);
        (n = this.diagnostic) === null || n === void 0 || n.log(pr.EVENTS.WEB3_REQUEST, {
            eventId: i.id,
            method: `relay::${r.method}`,
            sessionIdHash: this.getSessionIdHash(),
            storedSessionIdHash: s ? zt.Session.hash(s.id) : "",
            isSessionMismatched: ((s == null ? void 0 : s.id) !== this._session.id).toString()
        }), this.publishEvent("Web3Request", i, !0).then(a => {
            var c;
            (c = this.diagnostic) === null || c === void 0 || c.log(pr.EVENTS.WEB3_REQUEST_PUBLISHED, {
                eventId: i.id,
                method: `relay::${r.method}`,
                sessionIdHash: this.getSessionIdHash(),
                storedSessionIdHash: s ? zt.Session.hash(s.id) : "",
                isSessionMismatched: ((s == null ? void 0 : s.id) !== this._session.id).toString()
            })
        }).catch(a => {
            this.handleWeb3ResponseMessage({
                type: "WEB3_RESPONSE",
                id: i.id,
                response: {
                    method: r.method,
                    errorMessage: a.message
                }
            })
        })
    }
    publishWeb3RequestCanceledEvent(t) {
        const r = {
            type: "WEB3_REQUEST_CANCELED",
            id: t
        };
        this.publishEvent("Web3RequestCanceled", r, !1).then()
    }
    publishEvent(t, r, n) {
        return this.connection.publishEvent(t, r, n)
    }
    handleWeb3ResponseMessage(t) {
        var r;
        const {
            response: n
        } = t;
        if ((r = this.diagnostic) === null || r === void 0 || r.log(pr.EVENTS.WEB3_RESPONSE, {
                eventId: t.id,
                method: `relay::${n.method}`,
                sessionIdHash: this.getSessionIdHash()
            }), n.method === "requestEthereumAccounts") {
            Dt.accountRequestCallbackIds.forEach(i => this.invokeCallback(Object.assign(Object.assign({}, t), {
                id: i
            }))), Dt.accountRequestCallbackIds.clear();
            return
        }
        this.invokeCallback(t)
    }
    handleErrorResponse(t, r, n, i) {
        var s;
        const a = (s = n == null ? void 0 : n.message) !== null && s !== void 0 ? s : (0, Jr.getMessageFromCode)(i);
        this.handleWeb3ResponseMessage({
            type: "WEB3_RESPONSE",
            id: t,
            response: {
                method: r,
                errorMessage: a,
                errorCode: i
            }
        })
    }
    invokeCallback(t) {
        const r = this.relayEventManager.callbacks.get(t.id);
        r && (r(t.response), this.relayEventManager.callbacks.delete(t.id))
    }
    requestEthereumAccounts() {
        const t = {
                method: "requestEthereumAccounts",
                params: {
                    appName: this.appName,
                    appLogoUrl: this.appLogoUrl || null
                }
            },
            r = (0, Ue.randomBytesHex)(8),
            n = s => {
                this.publishWeb3RequestCanceledEvent(r), this.handleErrorResponse(r, t.method, s)
            };
        return {
            promise: new Promise((s, a) => {
                if (this.relayEventManager.callbacks.set(r, c => {
                        if (this.ui.hideRequestEthereumAccounts(), (0, gr.isErrorResponse)(c)) return a(new Error(c.errorMessage));
                        s(c)
                    }), this.ui.inlineAccountsResponse()) {
                    const c = l => {
                        this.handleWeb3ResponseMessage({
                            type: "WEB3_RESPONSE",
                            id: r,
                            response: {
                                method: "requestEthereumAccounts",
                                result: l
                            }
                        })
                    };
                    this.ui.requestEthereumAccounts({
                        onCancel: n,
                        onAccounts: c
                    })
                } else {
                    const c = Jr.standardErrors.provider.userRejectedRequest("User denied account authorization");
                    this.ui.requestEthereumAccounts({
                        onCancel: () => n(c)
                    })
                }
                Dt.accountRequestCallbackIds.add(r), !this.ui.inlineAccountsResponse() && !this.ui.isStandalone() && this.publishWeb3RequestEvent(r, t)
            }),
            cancel: n
        }
    }
    selectProvider(t) {
        const r = {
                method: "selectProvider",
                params: {
                    providerOptions: t
                }
            },
            n = (0, Ue.randomBytesHex)(8),
            i = a => {
                this.publishWeb3RequestCanceledEvent(n), this.handleErrorResponse(n, r.method, a)
            },
            s = new Promise((a, c) => {
                this.relayEventManager.callbacks.set(n, p => {
                    if ((0, gr.isErrorResponse)(p)) return c(new Error(p.errorMessage));
                    a(p)
                });
                const l = p => {
                        this.handleWeb3ResponseMessage({
                            type: "WEB3_RESPONSE",
                            id: n,
                            response: {
                                method: "selectProvider",
                                result: I0.ProviderType.Unselected
                            }
                        })
                    },
                    h = p => {
                        this.handleWeb3ResponseMessage({
                            type: "WEB3_RESPONSE",
                            id: n,
                            response: {
                                method: "selectProvider",
                                result: p
                            }
                        })
                    };
                this.ui.selectProvider && this.ui.selectProvider({
                    onApprove: h,
                    onCancel: l,
                    providerOptions: t
                })
            });
        return {
            cancel: i,
            promise: s
        }
    }
    watchAsset(t, r, n, i, s, a) {
        const c = {
            method: "watchAsset",
            params: {
                type: t,
                options: {
                    address: r,
                    symbol: n,
                    decimals: i,
                    image: s
                },
                chainId: a
            }
        };
        let l = null;
        const h = (0, Ue.randomBytesHex)(8),
            p = _ => {
                this.publishWeb3RequestCanceledEvent(h), this.handleErrorResponse(h, c.method, _), l == null || l()
            };
        this.ui.inlineWatchAsset() || (l = this.ui.showConnecting({
            isUnlinkedErrorState: this.isUnlinkedErrorState,
            onCancel: p,
            onResetConnection: this.resetAndReload
        }));
        const f = new Promise((_, R) => {
            this.relayEventManager.callbacks.set(h, L => {
                if (l == null || l(), (0, gr.isErrorResponse)(L)) return R(new Error(L.errorMessage));
                _(L)
            });
            const A = L => {
                    this.handleWeb3ResponseMessage({
                        type: "WEB3_RESPONSE",
                        id: h,
                        response: {
                            method: "watchAsset",
                            result: !1
                        }
                    })
                },
                O = () => {
                    this.handleWeb3ResponseMessage({
                        type: "WEB3_RESPONSE",
                        id: h,
                        response: {
                            method: "watchAsset",
                            result: !0
                        }
                    })
                };
            this.ui.inlineWatchAsset() && this.ui.watchAsset({
                onApprove: O,
                onCancel: A,
                type: t,
                address: r,
                symbol: n,
                decimals: i,
                image: s,
                chainId: a
            }), !this.ui.inlineWatchAsset() && !this.ui.isStandalone() && this.publishWeb3RequestEvent(h, c)
        });
        return {
            cancel: p,
            promise: f
        }
    }
    addEthereumChain(t, r, n, i, s, a) {
        const c = {
            method: "addEthereumChain",
            params: {
                chainId: t,
                rpcUrls: r,
                blockExplorerUrls: i,
                chainName: s,
                iconUrls: n,
                nativeCurrency: a
            }
        };
        let l = null;
        const h = (0, Ue.randomBytesHex)(8),
            p = _ => {
                this.publishWeb3RequestCanceledEvent(h), this.handleErrorResponse(h, c.method, _), l == null || l()
            };
        return this.ui.inlineAddEthereumChain(t) || (l = this.ui.showConnecting({
            isUnlinkedErrorState: this.isUnlinkedErrorState,
            onCancel: p,
            onResetConnection: this.resetAndReload
        })), {
            promise: new Promise((_, R) => {
                this.relayEventManager.callbacks.set(h, L => {
                    if (l == null || l(), (0, gr.isErrorResponse)(L)) return R(new Error(L.errorMessage));
                    _(L)
                });
                const A = L => {
                        this.handleWeb3ResponseMessage({
                            type: "WEB3_RESPONSE",
                            id: h,
                            response: {
                                method: "addEthereumChain",
                                result: {
                                    isApproved: !1,
                                    rpcUrl: ""
                                }
                            }
                        })
                    },
                    O = L => {
                        this.handleWeb3ResponseMessage({
                            type: "WEB3_RESPONSE",
                            id: h,
                            response: {
                                method: "addEthereumChain",
                                result: {
                                    isApproved: !0,
                                    rpcUrl: L
                                }
                            }
                        })
                    };
                this.ui.inlineAddEthereumChain(t) && this.ui.addEthereumChain({
                    onCancel: A,
                    onApprove: O,
                    chainId: c.params.chainId,
                    rpcUrls: c.params.rpcUrls,
                    blockExplorerUrls: c.params.blockExplorerUrls,
                    chainName: c.params.chainName,
                    iconUrls: c.params.iconUrls,
                    nativeCurrency: c.params.nativeCurrency
                }), !this.ui.inlineAddEthereumChain(t) && !this.ui.isStandalone() && this.publishWeb3RequestEvent(h, c)
            }),
            cancel: p
        }
    }
    switchEthereumChain(t, r) {
        const n = {
                method: "switchEthereumChain",
                params: Object.assign({
                    chainId: t
                }, {
                    address: r
                })
            },
            i = (0, Ue.randomBytesHex)(8),
            s = c => {
                this.publishWeb3RequestCanceledEvent(i), this.handleErrorResponse(i, n.method, c)
            };
        return {
            promise: new Promise((c, l) => {
                this.relayEventManager.callbacks.set(i, f => {
                    if ((0, gr.isErrorResponse)(f) && f.errorCode) return l(Jr.standardErrors.provider.custom({
                        code: f.errorCode,
                        message: "Unrecognized chain ID. Try adding the chain using addEthereumChain first."
                    }));
                    if ((0, gr.isErrorResponse)(f)) return l(new Error(f.errorMessage));
                    c(f)
                });
                const h = f => {
                        var _;
                        if (f) {
                            const R = (_ = (0, Jr.getErrorCode)(f)) !== null && _ !== void 0 ? _ : Jr.standardErrorCodes.provider.unsupportedChain;
                            this.handleErrorResponse(i, "switchEthereumChain", f instanceof Error ? f : Jr.standardErrors.provider.unsupportedChain(t), R)
                        } else this.handleWeb3ResponseMessage({
                            type: "WEB3_RESPONSE",
                            id: i,
                            response: {
                                method: "switchEthereumChain",
                                result: {
                                    isApproved: !1,
                                    rpcUrl: ""
                                }
                            }
                        })
                    },
                    p = f => {
                        this.handleWeb3ResponseMessage({
                            type: "WEB3_RESPONSE",
                            id: i,
                            response: {
                                method: "switchEthereumChain",
                                result: {
                                    isApproved: !0,
                                    rpcUrl: f
                                }
                            }
                        })
                    };
                this.ui.switchEthereumChain({
                    onCancel: h,
                    onApprove: p,
                    chainId: n.params.chainId,
                    address: n.params.address
                }), !this.ui.inlineSwitchEthereumChain() && !this.ui.isStandalone() && this.publishWeb3RequestEvent(i, n)
            }),
            cancel: s
        }
    }
    inlineAddEthereumChain(t) {
        return this.ui.inlineAddEthereumChain(t)
    }
    getSessionIdHash() {
        return zt.Session.hash(this._session.id)
    }
    sendRequestStandalone(t, r) {
        const n = s => {
                this.handleErrorResponse(t, r.method, s)
            },
            i = s => {
                this.handleWeb3ResponseMessage({
                    type: "WEB3_RESPONSE",
                    id: t,
                    response: s
                })
            };
        switch (r.method) {
            case "signEthereumMessage":
                this.ui.signEthereumMessage({
                    request: r,
                    onSuccess: i,
                    onCancel: n
                });
                break;
            case "signEthereumTransaction":
                this.ui.signEthereumTransaction({
                    request: r,
                    onSuccess: i,
                    onCancel: n
                });
                break;
            case "submitEthereumTransaction":
                this.ui.submitEthereumTransaction({
                    request: r,
                    onSuccess: i,
                    onCancel: n
                });
                break;
            case "ethereumAddressFromSignedMessage":
                this.ui.ethereumAddressFromSignedMessage({
                    request: r,
                    onSuccess: i
                });
                break;
            default:
                n();
                break
        }
    }
}
Vn.WalletLinkRelay = Dt;
Dt.accountRequestCallbackIds = new Set;
var ei = {},
    cs = {},
    du = {};
(function (e) {
    var t = J && J.__createBinding || (Object.create ? function (n, i, s, a) {
            a === void 0 && (a = s);
            var c = Object.getOwnPropertyDescriptor(i, s);
            (!c || ("get" in c ? !i.__esModule : c.writable || c.configurable)) && (c = {
                enumerable: !0,
                get: function () {
                    return i[s]
                }
            }), Object.defineProperty(n, a, c)
        } : function (n, i, s, a) {
            a === void 0 && (a = s), n[a] = i[s]
        }),
        r = J && J.__exportStar || function (n, i) {
            for (var s in n) s !== "default" && !Object.prototype.hasOwnProperty.call(i, s) && t(i, n, s)
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), r(Go, e)
})(du);
var Zo = {};
Object.defineProperty(Zo, "__esModule", {
    value: !0
});
Zo.default = ".-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s;background-color:rgba(10,11,13,.5)}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box{display:block;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);padding:20px;border-radius:8px;background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box p{display:block;font-weight:400;font-size:14px;line-height:20px;padding-bottom:12px;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box button{appearance:none;border:none;background:none;color:#0052ff;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark{background-color:#0a0b0d;color:#fff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark button{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light{background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light button{color:#0052ff}";
var fu = J && J.__importDefault || function (e) {
    return e && e.__esModule ? e : {
        default: e
    }
};
Object.defineProperty(cs, "__esModule", {
    value: !0
});
cs.RedirectDialog = void 0;
const N0 = fu(Xn),
    At = ot,
    T0 = Kn,
    L0 = du,
    P0 = fu(Zo);
class O0 {
    constructor() {
        this.root = null
    }
    attach() {
        const t = document.documentElement;
        this.root = document.createElement("div"), this.root.className = "-cbwsdk-css-reset", t.appendChild(this.root), (0, T0.injectCssReset)()
    }
    present(t) {
        this.render(t)
    }
    clear() {
        this.render(null)
    }
    render(t) {
        this.root && ((0, At.render)(null, this.root), t && (0, At.render)((0, At.h)($0, Object.assign({}, t, {
            onDismiss: () => {
                this.clear()
            }
        })), this.root))
    }
}
cs.RedirectDialog = O0;
const $0 = ({
    title: e,
    buttonText: t,
    darkMode: r,
    onButtonClick: n,
    onDismiss: i
}) => {
    const s = r ? "dark" : "light";
    return (0, At.h)(L0.SnackbarContainer, {
        darkMode: r
    }, (0, At.h)("div", {
        class: "-cbwsdk-redirect-dialog"
    }, (0, At.h)("style", null, P0.default), (0, At.h)("div", {
        class: "-cbwsdk-redirect-dialog-backdrop",
        onClick: i
    }), (0, At.h)("div", {
        class: (0, N0.default)("-cbwsdk-redirect-dialog-box", s)
    }, (0, At.h)("p", null, e), (0, At.h)("button", {
        onClick: n
    }, t))))
};
Object.defineProperty(ei, "__esModule", {
    value: !0
});
ei.MobileRelayUI = void 0;
const B0 = cs;
class D0 {
    constructor(t) {
        this.attached = !1, this.darkMode = !1, this.openedWindow = null, this.redirectDialog = new B0.RedirectDialog, this.darkMode = t.darkMode
    }
    attach() {
        if (this.attached) throw new Error("Coinbase Wallet SDK UI is already attached");
        this.redirectDialog.attach(), this.attached = !0
    }
    setConnected(t) {}
    closeOpenedWindow() {
        var t;
        (t = this.openedWindow) === null || t === void 0 || t.close(), this.openedWindow = null
    }
    redirectToCoinbaseWallet(t) {
        const r = new URL("https://go.cb-w.com/walletlink");
        r.searchParams.append("redirect_url", window.location.href), t && r.searchParams.append("wl_url", t), this.openedWindow = window.open(r.href, "cbw-opener"), this.openedWindow && setTimeout(() => this.closeOpenedWindow(), 5e3)
    }
    openCoinbaseWalletDeeplink(t) {
        this.redirectDialog.present({
            title: "Redirecting to Coinbase Wallet...",
            buttonText: "Open",
            darkMode: this.darkMode,
            onButtonClick: () => {
                this.redirectToCoinbaseWallet(t)
            }
        }), setTimeout(() => {
            this.redirectToCoinbaseWallet(t)
        }, 99)
    }
    showConnecting(t) {
        return () => {
            this.closeOpenedWindow(), this.redirectDialog.clear()
        }
    }
    hideRequestEthereumAccounts() {
        this.closeOpenedWindow(), this.redirectDialog.clear()
    }
    requestEthereumAccounts() {}
    addEthereumChain() {}
    watchAsset() {}
    selectProvider() {}
    switchEthereumChain() {}
    signEthereumMessage() {}
    signEthereumTransaction() {}
    submitEthereumTransaction() {}
    ethereumAddressFromSignedMessage() {}
    reloadUI() {}
    setStandalone() {}
    setConnectDisabled() {}
    inlineAccountsResponse() {
        return !1
    }
    inlineAddEthereumChain() {
        return !1
    }
    inlineWatchAsset() {
        return !1
    }
    inlineSwitchEthereumChain() {
        return !1
    }
    isStandalone() {
        return !1
    }
}
ei.MobileRelayUI = D0;
Object.defineProperty(Wn, "__esModule", {
    value: !0
});
Wn.MobileRelay = void 0;
const F0 = z,
    j0 = Vn,
    nc = ei;
class H0 extends j0.WalletLinkRelay {
    constructor(t) {
        var r;
        super(t), this._enableMobileWalletLink = (r = t.enableMobileWalletLink) !== null && r !== void 0 ? r : !1
    }
    requestEthereumAccounts() {
        return this._enableMobileWalletLink ? super.requestEthereumAccounts() : {
            promise: new Promise(() => {
                const t = (0, F0.getLocation)();
                t.href = `https://go.cb-w.com/dapp?cb_url=${encodeURIComponent(t.href)}`
            }),
            cancel: () => {}
        }
    }
    publishWeb3RequestEvent(t, r) {
        if (super.publishWeb3RequestEvent(t, r), !(this._enableMobileWalletLink && this.ui instanceof nc.MobileRelayUI)) return;
        let n = !1;
        switch (r.method) {
            case "requestEthereumAccounts":
            case "connectAndSignIn":
                n = !0, this.ui.openCoinbaseWalletDeeplink(this.getQRCodeUrl());
                break;
            case "switchEthereumChain":
                return;
            default:
                n = !0, this.ui.openCoinbaseWalletDeeplink();
                break
        }
        n && window.addEventListener("blur", () => {
            window.addEventListener("focus", () => {
                this.connection.checkUnseenEvents()
            }, {
                once: !0
            })
        }, {
            once: !0
        })
    }
    handleWeb3ResponseMessage(t) {
        super.handleWeb3ResponseMessage(t), this._enableMobileWalletLink && this.ui instanceof nc.MobileRelayUI && this.ui.closeOpenedWindow()
    }
    connectAndSignIn(t) {
        if (!this._enableMobileWalletLink) throw new Error("connectAndSignIn is supported only when enableMobileWalletLink is on");
        return this.sendRequest({
            method: "connectAndSignIn",
            params: {
                appName: this.appName,
                appLogoUrl: this.appLogoUrl,
                domain: window.location.hostname,
                aud: window.location.href,
                version: "1",
                type: "eip4361",
                nonce: t.nonce,
                iat: new Date().toISOString(),
                chainId: `eip155:${this.dappDefaultChain}`,
                statement: t.statement,
                resources: t.resources
            }
        })
    }
}
Wn.MobileRelay = H0;
var Mo = {
        exports: {}
    },
    pu = Dn.EventEmitter,
    zs, ic;

function U0() {
    if (ic) return zs;
    ic = 1;

    function e(A, O) {
        var L = Object.keys(A);
        if (Object.getOwnPropertySymbols) {
            var M = Object.getOwnPropertySymbols(A);
            O && (M = M.filter(function (k) {
                return Object.getOwnPropertyDescriptor(A, k).enumerable
            })), L.push.apply(L, M)
        }
        return L
    }

    function t(A) {
        for (var O = 1; O < arguments.length; O++) {
            var L = arguments[O] != null ? arguments[O] : {};
            O % 2 ? e(Object(L), !0).forEach(function (M) {
                r(A, M, L[M])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(L)) : e(Object(L)).forEach(function (M) {
                Object.defineProperty(A, M, Object.getOwnPropertyDescriptor(L, M))
            })
        }
        return A
    }

    function r(A, O, L) {
        return O = a(O), O in A ? Object.defineProperty(A, O, {
            value: L,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : A[O] = L, A
    }

    function n(A, O) {
        if (!(A instanceof O)) throw new TypeError("Cannot call a class as a function")
    }

    function i(A, O) {
        for (var L = 0; L < O.length; L++) {
            var M = O[L];
            M.enumerable = M.enumerable || !1, M.configurable = !0, "value" in M && (M.writable = !0), Object.defineProperty(A, a(M.key), M)
        }
    }

    function s(A, O, L) {
        return O && i(A.prototype, O), L && i(A, L), Object.defineProperty(A, "prototype", {
            writable: !1
        }), A
    }

    function a(A) {
        var O = c(A, "string");
        return typeof O == "symbol" ? O : String(O)
    }

    function c(A, O) {
        if (typeof A != "object" || A === null) return A;
        var L = A[Symbol.toPrimitive];
        if (L !== void 0) {
            var M = L.call(A, O || "default");
            if (typeof M != "object") return M;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (O === "string" ? String : Number)(A)
    }
    var l = Pi,
        h = l.Buffer,
        p = Lo,
        f = p.inspect,
        _ = f && f.custom || "inspect";

    function R(A, O, L) {
        h.prototype.copy.call(A, O, L)
    }
    return zs = function () {
        function A() {
            n(this, A), this.head = null, this.tail = null, this.length = 0
        }
        return s(A, [{
            key: "push",
            value: function (L) {
                var M = {
                    data: L,
                    next: null
                };
                this.length > 0 ? this.tail.next = M : this.head = M, this.tail = M, ++this.length
            }
        }, {
            key: "unshift",
            value: function (L) {
                var M = {
                    data: L,
                    next: this.head
                };
                this.length === 0 && (this.tail = M), this.head = M, ++this.length
            }
        }, {
            key: "shift",
            value: function () {
                if (this.length !== 0) {
                    var L = this.head.data;
                    return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, L
                }
            }
        }, {
            key: "clear",
            value: function () {
                this.head = this.tail = null, this.length = 0
            }
        }, {
            key: "join",
            value: function (L) {
                if (this.length === 0) return "";
                for (var M = this.head, k = "" + M.data; M = M.next;) k += L + M.data;
                return k
            }
        }, {
            key: "concat",
            value: function (L) {
                if (this.length === 0) return h.alloc(0);
                for (var M = h.allocUnsafe(L >>> 0), k = this.head, T = 0; k;) R(k.data, M, T), T += k.data.length, k = k.next;
                return M
            }
        }, {
            key: "consume",
            value: function (L, M) {
                var k;
                return L < this.head.data.length ? (k = this.head.data.slice(0, L), this.head.data = this.head.data.slice(L)) : L === this.head.data.length ? k = this.shift() : k = M ? this._getString(L) : this._getBuffer(L), k
            }
        }, {
            key: "first",
            value: function () {
                return this.head.data
            }
        }, {
            key: "_getString",
            value: function (L) {
                var M = this.head,
                    k = 1,
                    T = M.data;
                for (L -= T.length; M = M.next;) {
                    var $ = M.data,
                        P = L > $.length ? $.length : L;
                    if (P === $.length ? T += $ : T += $.slice(0, L), L -= P, L === 0) {
                        P === $.length ? (++k, M.next ? this.head = M.next : this.head = this.tail = null) : (this.head = M, M.data = $.slice(P));
                        break
                    }++k
                }
                return this.length -= k, T
            }
        }, {
            key: "_getBuffer",
            value: function (L) {
                var M = h.allocUnsafe(L),
                    k = this.head,
                    T = 1;
                for (k.data.copy(M), L -= k.data.length; k = k.next;) {
                    var $ = k.data,
                        P = L > $.length ? $.length : L;
                    if ($.copy(M, M.length - L, 0, P), L -= P, L === 0) {
                        P === $.length ? (++T, k.next ? this.head = k.next : this.head = this.tail = null) : (this.head = k, k.data = $.slice(P));
                        break
                    }++T
                }
                return this.length -= T, M
            }
        }, {
            key: _,
            value: function (L, M) {
                return f(this, t(t({}, M), {}, {
                    depth: 0,
                    customInspect: !1
                }))
            }
        }]), A
    }(), zs
}

function W0(e, t) {
    var r = this,
        n = this._readableState && this._readableState.destroyed,
        i = this._writableState && this._writableState.destroyed;
    return n || i ? (t ? t(e) : e && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, process.nextTick(Co, this, e)) : process.nextTick(Co, this, e)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(e || null, function (s) {
        !t && s ? r._writableState ? r._writableState.errorEmitted ? process.nextTick(ki, r) : (r._writableState.errorEmitted = !0, process.nextTick(sc, r, s)) : process.nextTick(sc, r, s) : t ? (process.nextTick(ki, r), t(s)) : process.nextTick(ki, r)
    }), this)
}

function sc(e, t) {
    Co(e, t), ki(e)
}

function ki(e) {
    e._writableState && !e._writableState.emitClose || e._readableState && !e._readableState.emitClose || e.emit("close")
}

function V0() {
    this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1)
}

function Co(e, t) {
    e.emit("error", t)
}

function q0(e, t) {
    var r = e._readableState,
        n = e._writableState;
    r && r.autoDestroy || n && n.autoDestroy ? e.destroy(t) : e.emit("error", t)
}
var gu = {
        destroy: W0,
        undestroy: V0,
        errorOrDestroy: q0
    },
    Nr = {};

function z0(e, t) {
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
}
var _u = {};

function vt(e, t, r) {
    r || (r = Error);

    function n(s, a, c) {
        return typeof t == "string" ? t : t(s, a, c)
    }
    var i = function (s) {
        z0(a, s);

        function a(c, l, h) {
            return s.call(this, n(c, l, h)) || this
        }
        return a
    }(r);
    i.prototype.name = r.name, i.prototype.code = e, _u[e] = i
}

function oc(e, t) {
    if (Array.isArray(e)) {
        var r = e.length;
        return e = e.map(function (n) {
            return String(n)
        }), r > 2 ? "one of ".concat(t, " ").concat(e.slice(0, r - 1).join(", "), ", or ") + e[r - 1] : r === 2 ? "one of ".concat(t, " ").concat(e[0], " or ").concat(e[1]) : "of ".concat(t, " ").concat(e[0])
    } else return "of ".concat(t, " ").concat(String(e))
}

function G0(e, t, r) {
    return e.substr(!r || r < 0 ? 0 : +r, t.length) === t
}

function J0(e, t, r) {
    return (r === void 0 || r > e.length) && (r = e.length), e.substring(r - t.length, r) === t
}

function Z0(e, t, r) {
    return typeof r != "number" && (r = 0), r + t.length > e.length ? !1 : e.indexOf(t, r) !== -1
}
vt("ERR_INVALID_OPT_VALUE", function (e, t) {
    return 'The value "' + t + '" is invalid for option "' + e + '"'
}, TypeError);
vt("ERR_INVALID_ARG_TYPE", function (e, t, r) {
    var n;
    typeof t == "string" && G0(t, "not ") ? (n = "must not be", t = t.replace(/^not /, "")) : n = "must be";
    var i;
    if (J0(e, " argument")) i = "The ".concat(e, " ").concat(n, " ").concat(oc(t, "type"));
    else {
        var s = Z0(e, ".") ? "property" : "argument";
        i = 'The "'.concat(e, '" ').concat(s, " ").concat(n, " ").concat(oc(t, "type"))
    }
    return i += ". Received type ".concat(typeof r), i
}, TypeError);
vt("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
vt("ERR_METHOD_NOT_IMPLEMENTED", function (e) {
    return "The " + e + " method is not implemented"
});
vt("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
vt("ERR_STREAM_DESTROYED", function (e) {
    return "Cannot call " + e + " after a stream was destroyed"
});
vt("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
vt("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
vt("ERR_STREAM_WRITE_AFTER_END", "write after end");
vt("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
vt("ERR_UNKNOWN_ENCODING", function (e) {
    return "Unknown encoding: " + e
}, TypeError);
vt("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
Nr.codes = _u;
var K0 = Nr.codes.ERR_INVALID_OPT_VALUE;

function Q0(e, t, r) {
    return e.highWaterMark != null ? e.highWaterMark : t ? e[r] : null
}

function Y0(e, t, r, n) {
    var i = Q0(t, n, r);
    if (i != null) {
        if (!(isFinite(i) && Math.floor(i) === i) || i < 0) {
            var s = n ? r : "highWaterMark";
            throw new K0(s, i)
        }
        return Math.floor(i)
    }
    return e.objectMode ? 16 : 16 * 1024
}
var mu = {
        getHighWaterMark: Y0
    },
    X0 = ep;

function ep(e, t) {
    if (Gs("noDeprecation")) return e;
    var r = !1;

    function n() {
        if (!r) {
            if (Gs("throwDeprecation")) throw new Error(t);
            Gs("traceDeprecation") ? console.trace(t) : console.warn(t), r = !0
        }
        return e.apply(this, arguments)
    }
    return n
}

function Gs(e) {
    try {
        if (!J.localStorage) return !1
    } catch {
        return !1
    }
    var t = J.localStorage[e];
    return t == null ? !1 : String(t).toLowerCase() === "true"
}
var Js, ac;

function vu() {
    if (ac) return Js;
    ac = 1, Js = V;

    function e(I) {
        var N = this;
        this.next = null, this.entry = null, this.finish = function () {
            q(N, I)
        }
    }
    var t;
    V.WritableState = D;
    var r = {
            deprecate: X0
        },
        n = pu,
        i = Pi.Buffer,
        s = (typeof J < "u" ? J : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function () {};

    function a(I) {
        return i.from(I)
    }

    function c(I) {
        return i.isBuffer(I) || I instanceof s
    }
    var l = gu,
        h = mu,
        p = h.getHighWaterMark,
        f = Nr.codes,
        _ = f.ERR_INVALID_ARG_TYPE,
        R = f.ERR_METHOD_NOT_IMPLEMENTED,
        A = f.ERR_MULTIPLE_CALLBACK,
        O = f.ERR_STREAM_CANNOT_PIPE,
        L = f.ERR_STREAM_DESTROYED,
        M = f.ERR_STREAM_NULL_VALUES,
        k = f.ERR_STREAM_WRITE_AFTER_END,
        T = f.ERR_UNKNOWN_ENCODING,
        $ = l.errorOrDestroy;
    Et(V, n);

    function P() {}

    function D(I, N, B) {
        t = t || un(), I = I || {}, typeof B != "boolean" && (B = N instanceof t), this.objectMode = !!I.objectMode, B && (this.objectMode = this.objectMode || !!I.writableObjectMode), this.highWaterMark = p(this, I, "writableHighWaterMark", B), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
        var U = I.decodeStrings === !1;
        this.decodeStrings = !U, this.defaultEncoding = I.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function (te) {
            g(N, te)
        }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = I.emitClose !== !1, this.autoDestroy = !!I.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new e(this)
    }
    D.prototype.getBuffer = function () {
            for (var N = this.bufferedRequest, B = []; N;) B.push(N), N = N.next;
            return B
        },
        function () {
            try {
                Object.defineProperty(D.prototype, "buffer", {
                    get: r.deprecate(function () {
                        return this.getBuffer()
                    }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                })
            } catch {}
        }();
    var G;
    typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function" ? (G = Function.prototype[Symbol.hasInstance], Object.defineProperty(V, Symbol.hasInstance, {
        value: function (N) {
            return G.call(this, N) ? !0 : this !== V ? !1 : N && N._writableState instanceof D
        }
    })) : G = function (N) {
        return N instanceof this
    };

    function V(I) {
        t = t || un();
        var N = this instanceof t;
        if (!N && !G.call(V, this)) return new V(I);
        this._writableState = new D(I, this, N), this.writable = !0, I && (typeof I.write == "function" && (this._write = I.write), typeof I.writev == "function" && (this._writev = I.writev), typeof I.destroy == "function" && (this._destroy = I.destroy), typeof I.final == "function" && (this._final = I.final)), n.call(this)
    }
    V.prototype.pipe = function () {
        $(this, new O)
    };

    function H(I, N) {
        var B = new k;
        $(I, B), process.nextTick(N, B)
    }

    function X(I, N, B, U) {
        var te;
        return B === null ? te = new M : typeof B != "string" && !N.objectMode && (te = new _("chunk", ["string", "Buffer"], B)), te ? ($(I, te), process.nextTick(U, te), !1) : !0
    }
    V.prototype.write = function (I, N, B) {
        var U = this._writableState,
            te = !1,
            w = !U.objectMode && c(I);
        return w && !i.isBuffer(I) && (I = a(I)), typeof N == "function" && (B = N, N = null), w ? N = "buffer" : N || (N = U.defaultEncoding), typeof B != "function" && (B = P), U.ending ? H(this, B) : (w || X(this, U, I, B)) && (U.pendingcb++, te = ie(this, U, w, I, N, B)), te
    }, V.prototype.cork = function () {
        this._writableState.corked++
    }, V.prototype.uncork = function () {
        var I = this._writableState;
        I.corked && (I.corked--, !I.writing && !I.corked && !I.bufferProcessing && I.bufferedRequest && C(this, I))
    }, V.prototype.setDefaultEncoding = function (N) {
        if (typeof N == "string" && (N = N.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((N + "").toLowerCase()) > -1)) throw new T(N);
        return this._writableState.defaultEncoding = N, this
    }, Object.defineProperty(V.prototype, "writableBuffer", {
        enumerable: !1,
        get: function () {
            return this._writableState && this._writableState.getBuffer()
        }
    });

    function Q(I, N, B) {
        return !I.objectMode && I.decodeStrings !== !1 && typeof N == "string" && (N = i.from(N, B)), N
    }
    Object.defineProperty(V.prototype, "writableHighWaterMark", {
        enumerable: !1,
        get: function () {
            return this._writableState.highWaterMark
        }
    });

    function ie(I, N, B, U, te, w) {
        if (!B) {
            var E = Q(N, U, te);
            U !== E && (B = !0, te = "buffer", U = E)
        }
        var F = N.objectMode ? 1 : U.length;
        N.length += F;
        var j = N.length < N.highWaterMark;
        if (j || (N.needDrain = !0), N.writing || N.corked) {
            var K = N.lastBufferedRequest;
            N.lastBufferedRequest = {
                chunk: U,
                encoding: te,
                isBuf: B,
                callback: w,
                next: null
            }, K ? K.next = N.lastBufferedRequest : N.bufferedRequest = N.lastBufferedRequest, N.bufferedRequestCount += 1
        } else v(I, N, !1, F, U, te, w);
        return j
    }

    function v(I, N, B, U, te, w, E) {
        N.writelen = U, N.writecb = E, N.writing = !0, N.sync = !0, N.destroyed ? N.onwrite(new L("write")) : B ? I._writev(te, N.onwrite) : I._write(te, w, N.onwrite), N.sync = !1
    }

    function o(I, N, B, U, te) {
        --N.pendingcb, B ? (process.nextTick(te, U), process.nextTick(S, I, N), I._writableState.errorEmitted = !0, $(I, U)) : (te(U), I._writableState.errorEmitted = !0, $(I, U), S(I, N))
    }

    function d(I) {
        I.writing = !1, I.writecb = null, I.length -= I.writelen, I.writelen = 0
    }

    function g(I, N) {
        var B = I._writableState,
            U = B.sync,
            te = B.writecb;
        if (typeof te != "function") throw new A;
        if (d(B), N) o(I, B, U, N, te);
        else {
            var w = x(B) || I.destroyed;
            !w && !B.corked && !B.bufferProcessing && B.bufferedRequest && C(I, B), U ? process.nextTick(m, I, B, w, te) : m(I, B, w, te)
        }
    }

    function m(I, N, B, U) {
        B || y(I, N), N.pendingcb--, U(), S(I, N)
    }

    function y(I, N) {
        N.length === 0 && N.needDrain && (N.needDrain = !1, I.emit("drain"))
    }

    function C(I, N) {
        N.bufferProcessing = !0;
        var B = N.bufferedRequest;
        if (I._writev && B && B.next) {
            var U = N.bufferedRequestCount,
                te = new Array(U),
                w = N.corkedRequestsFree;
            w.entry = B;
            for (var E = 0, F = !0; B;) te[E] = B, B.isBuf || (F = !1), B = B.next, E += 1;
            te.allBuffers = F, v(I, N, !0, N.length, te, "", w.finish), N.pendingcb++, N.lastBufferedRequest = null, w.next ? (N.corkedRequestsFree = w.next, w.next = null) : N.corkedRequestsFree = new e(N), N.bufferedRequestCount = 0
        } else {
            for (; B;) {
                var j = B.chunk,
                    K = B.encoding,
                    ee = B.callback,
                    Z = N.objectMode ? 1 : j.length;
                if (v(I, N, !1, Z, j, K, ee), B = B.next, N.bufferedRequestCount--, N.writing) break
            }
            B === null && (N.lastBufferedRequest = null)
        }
        N.bufferedRequest = B, N.bufferProcessing = !1
    }
    V.prototype._write = function (I, N, B) {
        B(new R("_write()"))
    }, V.prototype._writev = null, V.prototype.end = function (I, N, B) {
        var U = this._writableState;
        return typeof I == "function" ? (B = I, I = null, N = null) : typeof N == "function" && (B = N, N = null), I != null && this.write(I, N), U.corked && (U.corked = 1, this.uncork()), U.ending || W(this, U, B), this
    }, Object.defineProperty(V.prototype, "writableLength", {
        enumerable: !1,
        get: function () {
            return this._writableState.length
        }
    });

    function x(I) {
        return I.ending && I.length === 0 && I.bufferedRequest === null && !I.finished && !I.writing
    }

    function b(I, N) {
        I._final(function (B) {
            N.pendingcb--, B && $(I, B), N.prefinished = !0, I.emit("prefinish"), S(I, N)
        })
    }

    function u(I, N) {
        !N.prefinished && !N.finalCalled && (typeof I._final == "function" && !N.destroyed ? (N.pendingcb++, N.finalCalled = !0, process.nextTick(b, I, N)) : (N.prefinished = !0, I.emit("prefinish")))
    }

    function S(I, N) {
        var B = x(N);
        if (B && (u(I, N), N.pendingcb === 0 && (N.finished = !0, I.emit("finish"), N.autoDestroy))) {
            var U = I._readableState;
            (!U || U.autoDestroy && U.endEmitted) && I.destroy()
        }
        return B
    }

    function W(I, N, B) {
        N.ending = !0, S(I, N), B && (N.finished ? process.nextTick(B) : I.once("finish", B)), N.ended = !0, I.writable = !1
    }

    function q(I, N, B) {
        var U = I.entry;
        for (I.entry = null; U;) {
            var te = U.callback;
            N.pendingcb--, te(B), U = U.next
        }
        N.corkedRequestsFree.next = I
    }
    return Object.defineProperty(V.prototype, "destroyed", {
        enumerable: !1,
        get: function () {
            return this._writableState === void 0 ? !1 : this._writableState.destroyed
        },
        set: function (N) {
            this._writableState && (this._writableState.destroyed = N)
        }
    }), V.prototype.destroy = l.destroy, V.prototype._undestroy = l.undestroy, V.prototype._destroy = function (I, N) {
        N(I)
    }, Js
}
var Zs, cc;

function un() {
    if (cc) return Zs;
    cc = 1;
    var e = Object.keys || function (h) {
        var p = [];
        for (var f in h) p.push(f);
        return p
    };
    Zs = a;
    var t = yu(),
        r = vu();
    Et(a, t);
    for (var n = e(r.prototype), i = 0; i < n.length; i++) {
        var s = n[i];
        a.prototype[s] || (a.prototype[s] = r.prototype[s])
    }

    function a(h) {
        if (!(this instanceof a)) return new a(h);
        t.call(this, h), r.call(this, h), this.allowHalfOpen = !0, h && (h.readable === !1 && (this.readable = !1), h.writable === !1 && (this.writable = !1), h.allowHalfOpen === !1 && (this.allowHalfOpen = !1, this.once("end", c)))
    }
    Object.defineProperty(a.prototype, "writableHighWaterMark", {
        enumerable: !1,
        get: function () {
            return this._writableState.highWaterMark
        }
    }), Object.defineProperty(a.prototype, "writableBuffer", {
        enumerable: !1,
        get: function () {
            return this._writableState && this._writableState.getBuffer()
        }
    }), Object.defineProperty(a.prototype, "writableLength", {
        enumerable: !1,
        get: function () {
            return this._writableState.length
        }
    });

    function c() {
        this._writableState.ended || process.nextTick(l, this)
    }

    function l(h) {
        h.end()
    }
    return Object.defineProperty(a.prototype, "destroyed", {
        enumerable: !1,
        get: function () {
            return this._readableState === void 0 || this._writableState === void 0 ? !1 : this._readableState.destroyed && this._writableState.destroyed
        },
        set: function (p) {
            this._readableState === void 0 || this._writableState === void 0 || (this._readableState.destroyed = p, this._writableState.destroyed = p)
        }
    }), Zs
}
var Ks = {},
    lc;

function uc() {
    if (lc) return Ks;
    lc = 1;
    var e = Qt.Buffer,
        t = e.isEncoding || function (M) {
            switch (M = "" + M, M && M.toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                case "raw":
                    return !0;
                default:
                    return !1
            }
        };

    function r(M) {
        if (!M) return "utf8";
        for (var k;;) switch (M) {
            case "utf8":
            case "utf-8":
                return "utf8";
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return "utf16le";
            case "latin1":
            case "binary":
                return "latin1";
            case "base64":
            case "ascii":
            case "hex":
                return M;
            default:
                if (k) return;
                M = ("" + M).toLowerCase(), k = !0
        }
    }

    function n(M) {
        var k = r(M);
        if (typeof k != "string" && (e.isEncoding === t || !t(M))) throw new Error("Unknown encoding: " + M);
        return k || M
    }
    Ks.StringDecoder = i;

    function i(M) {
        this.encoding = n(M);
        var k;
        switch (this.encoding) {
            case "utf16le":
                this.text = f, this.end = _, k = 4;
                break;
            case "utf8":
                this.fillLast = l, k = 4;
                break;
            case "base64":
                this.text = R, this.end = A, k = 3;
                break;
            default:
                this.write = O, this.end = L;
                return
        }
        this.lastNeed = 0, this.lastTotal = 0, this.lastChar = e.allocUnsafe(k)
    }
    i.prototype.write = function (M) {
        if (M.length === 0) return "";
        var k, T;
        if (this.lastNeed) {
            if (k = this.fillLast(M), k === void 0) return "";
            T = this.lastNeed, this.lastNeed = 0
        } else T = 0;
        return T < M.length ? k ? k + this.text(M, T) : this.text(M, T) : k || ""
    }, i.prototype.end = p, i.prototype.text = h, i.prototype.fillLast = function (M) {
        if (this.lastNeed <= M.length) return M.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
        M.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, M.length), this.lastNeed -= M.length
    };

    function s(M) {
        return M <= 127 ? 0 : M >> 5 === 6 ? 2 : M >> 4 === 14 ? 3 : M >> 3 === 30 ? 4 : M >> 6 === 2 ? -1 : -2
    }

    function a(M, k, T) {
        var $ = k.length - 1;
        if ($ < T) return 0;
        var P = s(k[$]);
        return P >= 0 ? (P > 0 && (M.lastNeed = P - 1), P) : --$ < T || P === -2 ? 0 : (P = s(k[$]), P >= 0 ? (P > 0 && (M.lastNeed = P - 2), P) : --$ < T || P === -2 ? 0 : (P = s(k[$]), P >= 0 ? (P > 0 && (P === 2 ? P = 0 : M.lastNeed = P - 3), P) : 0))
    }

    function c(M, k, T) {
        if ((k[0] & 192) !== 128) return M.lastNeed = 0, "�";
        if (M.lastNeed > 1 && k.length > 1) {
            if ((k[1] & 192) !== 128) return M.lastNeed = 1, "�";
            if (M.lastNeed > 2 && k.length > 2 && (k[2] & 192) !== 128) return M.lastNeed = 2, "�"
        }
    }

    function l(M) {
        var k = this.lastTotal - this.lastNeed,
            T = c(this, M);
        if (T !== void 0) return T;
        if (this.lastNeed <= M.length) return M.copy(this.lastChar, k, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
        M.copy(this.lastChar, k, 0, M.length), this.lastNeed -= M.length
    }

    function h(M, k) {
        var T = a(this, M, k);
        if (!this.lastNeed) return M.toString("utf8", k);
        this.lastTotal = T;
        var $ = M.length - (T - this.lastNeed);
        return M.copy(this.lastChar, 0, $), M.toString("utf8", k, $)
    }

    function p(M) {
        var k = M && M.length ? this.write(M) : "";
        return this.lastNeed ? k + "�" : k
    }

    function f(M, k) {
        if ((M.length - k) % 2 === 0) {
            var T = M.toString("utf16le", k);
            if (T) {
                var $ = T.charCodeAt(T.length - 1);
                if ($ >= 55296 && $ <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = M[M.length - 2], this.lastChar[1] = M[M.length - 1], T.slice(0, -1)
            }
            return T
        }
        return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = M[M.length - 1], M.toString("utf16le", k, M.length - 1)
    }

    function _(M) {
        var k = M && M.length ? this.write(M) : "";
        if (this.lastNeed) {
            var T = this.lastTotal - this.lastNeed;
            return k + this.lastChar.toString("utf16le", 0, T)
        }
        return k
    }

    function R(M, k) {
        var T = (M.length - k) % 3;
        return T === 0 ? M.toString("base64", k) : (this.lastNeed = 3 - T, this.lastTotal = 3, T === 1 ? this.lastChar[0] = M[M.length - 1] : (this.lastChar[0] = M[M.length - 2], this.lastChar[1] = M[M.length - 1]), M.toString("base64", k, M.length - T))
    }

    function A(M) {
        var k = M && M.length ? this.write(M) : "";
        return this.lastNeed ? k + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : k
    }

    function O(M) {
        return M.toString(this.encoding)
    }

    function L(M) {
        return M && M.length ? this.write(M) : ""
    }
    return Ks
}
var hc = Nr.codes.ERR_STREAM_PREMATURE_CLOSE;

function tp(e) {
    var t = !1;
    return function () {
        if (!t) {
            t = !0;
            for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++) n[i] = arguments[i];
            e.apply(this, n)
        }
    }
}

function rp() {}

function np(e) {
    return e.setHeader && typeof e.abort == "function"
}

function bu(e, t, r) {
    if (typeof t == "function") return bu(e, null, t);
    t || (t = {}), r = tp(r || rp);
    var n = t.readable || t.readable !== !1 && e.readable,
        i = t.writable || t.writable !== !1 && e.writable,
        s = function () {
            e.writable || c()
        },
        a = e._writableState && e._writableState.finished,
        c = function () {
            i = !1, a = !0, n || r.call(e)
        },
        l = e._readableState && e._readableState.endEmitted,
        h = function () {
            n = !1, l = !0, i || r.call(e)
        },
        p = function (A) {
            r.call(e, A)
        },
        f = function () {
            var A;
            if (n && !l) return (!e._readableState || !e._readableState.ended) && (A = new hc), r.call(e, A);
            if (i && !a) return (!e._writableState || !e._writableState.ended) && (A = new hc), r.call(e, A)
        },
        _ = function () {
            e.req.on("finish", c)
        };
    return np(e) ? (e.on("complete", c), e.on("abort", f), e.req ? _() : e.on("request", _)) : i && !e._writableState && (e.on("end", s), e.on("close", s)), e.on("end", h), e.on("finish", c), t.error !== !1 && e.on("error", p), e.on("close", f),
        function () {
            e.removeListener("complete", c), e.removeListener("abort", f), e.removeListener("request", _), e.req && e.req.removeListener("finish", c), e.removeListener("end", s), e.removeListener("close", s), e.removeListener("finish", c), e.removeListener("end", h), e.removeListener("error", p), e.removeListener("close", f)
        }
}
var Ko = bu,
    Qs, dc;

function ip() {
    if (dc) return Qs;
    dc = 1;
    var e;

    function t(T, $, P) {
        return $ = r($), $ in T ? Object.defineProperty(T, $, {
            value: P,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : T[$] = P, T
    }

    function r(T) {
        var $ = n(T, "string");
        return typeof $ == "symbol" ? $ : String($)
    }

    function n(T, $) {
        if (typeof T != "object" || T === null) return T;
        var P = T[Symbol.toPrimitive];
        if (P !== void 0) {
            var D = P.call(T, $ || "default");
            if (typeof D != "object") return D;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ($ === "string" ? String : Number)(T)
    }
    var i = Ko,
        s = Symbol("lastResolve"),
        a = Symbol("lastReject"),
        c = Symbol("error"),
        l = Symbol("ended"),
        h = Symbol("lastPromise"),
        p = Symbol("handlePromise"),
        f = Symbol("stream");

    function _(T, $) {
        return {
            value: T,
            done: $
        }
    }

    function R(T) {
        var $ = T[s];
        if ($ !== null) {
            var P = T[f].read();
            P !== null && (T[h] = null, T[s] = null, T[a] = null, $(_(P, !1)))
        }
    }

    function A(T) {
        process.nextTick(R, T)
    }

    function O(T, $) {
        return function (P, D) {
            T.then(function () {
                if ($[l]) {
                    P(_(void 0, !0));
                    return
                }
                $[p](P, D)
            }, D)
        }
    }
    var L = Object.getPrototypeOf(function () {}),
        M = Object.setPrototypeOf((e = {
            get stream() {
                return this[f]
            },
            next: function () {
                var $ = this,
                    P = this[c];
                if (P !== null) return Promise.reject(P);
                if (this[l]) return Promise.resolve(_(void 0, !0));
                if (this[f].destroyed) return new Promise(function (H, X) {
                    process.nextTick(function () {
                        $[c] ? X($[c]) : H(_(void 0, !0))
                    })
                });
                var D = this[h],
                    G;
                if (D) G = new Promise(O(D, this));
                else {
                    var V = this[f].read();
                    if (V !== null) return Promise.resolve(_(V, !1));
                    G = new Promise(this[p])
                }
                return this[h] = G, G
            }
        }, t(e, Symbol.asyncIterator, function () {
            return this
        }), t(e, "return", function () {
            var $ = this;
            return new Promise(function (P, D) {
                $[f].destroy(null, function (G) {
                    if (G) {
                        D(G);
                        return
                    }
                    P(_(void 0, !0))
                })
            })
        }), e), L),
        k = function ($) {
            var P, D = Object.create(M, (P = {}, t(P, f, {
                value: $,
                writable: !0
            }), t(P, s, {
                value: null,
                writable: !0
            }), t(P, a, {
                value: null,
                writable: !0
            }), t(P, c, {
                value: null,
                writable: !0
            }), t(P, l, {
                value: $._readableState.endEmitted,
                writable: !0
            }), t(P, p, {
                value: function (V, H) {
                    var X = D[f].read();
                    X ? (D[h] = null, D[s] = null, D[a] = null, V(_(X, !1))) : (D[s] = V, D[a] = H)
                },
                writable: !0
            }), P));
            return D[h] = null, i($, function (G) {
                if (G && G.code !== "ERR_STREAM_PREMATURE_CLOSE") {
                    var V = D[a];
                    V !== null && (D[h] = null, D[s] = null, D[a] = null, V(G)), D[c] = G;
                    return
                }
                var H = D[s];
                H !== null && (D[h] = null, D[s] = null, D[a] = null, H(_(void 0, !0))), D[l] = !0
            }), $.on("readable", A.bind(null, D)), D
        };
    return Qs = k, Qs
}
var Ys, fc;

function sp() {
    return fc || (fc = 1, Ys = function () {
        throw new Error("Readable.from is not available in the browser")
    }), Ys
}
var Xs, pc;

function yu() {
    if (pc) return Xs;
    pc = 1, Xs = H;
    var e;
    H.ReadableState = V, Dn.EventEmitter;
    var t = function (E, F) {
            return E.listeners(F).length
        },
        r = pu,
        n = Pi.Buffer,
        i = (typeof J < "u" ? J : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function () {};

    function s(w) {
        return n.from(w)
    }

    function a(w) {
        return n.isBuffer(w) || w instanceof i
    }
    var c = Lo,
        l;
    c && c.debuglog ? l = c.debuglog("stream") : l = function () {};
    var h = U0(),
        p = gu,
        f = mu,
        _ = f.getHighWaterMark,
        R = Nr.codes,
        A = R.ERR_INVALID_ARG_TYPE,
        O = R.ERR_STREAM_PUSH_AFTER_EOF,
        L = R.ERR_METHOD_NOT_IMPLEMENTED,
        M = R.ERR_STREAM_UNSHIFT_AFTER_END_EVENT,
        k, T, $;
    Et(H, r);
    var P = p.errorOrDestroy,
        D = ["error", "close", "destroy", "pause", "resume"];

    function G(w, E, F) {
        if (typeof w.prependListener == "function") return w.prependListener(E, F);
        !w._events || !w._events[E] ? w.on(E, F) : Array.isArray(w._events[E]) ? w._events[E].unshift(F) : w._events[E] = [F, w._events[E]]
    }

    function V(w, E, F) {
        e = e || un(), w = w || {}, typeof F != "boolean" && (F = E instanceof e), this.objectMode = !!w.objectMode, F && (this.objectMode = this.objectMode || !!w.readableObjectMode), this.highWaterMark = _(this, w, "readableHighWaterMark", F), this.buffer = new h, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose = w.emitClose !== !1, this.autoDestroy = !!w.autoDestroy, this.destroyed = !1, this.defaultEncoding = w.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, w.encoding && (k || (k = uc().StringDecoder), this.decoder = new k(w.encoding), this.encoding = w.encoding)
    }

    function H(w) {
        if (e = e || un(), !(this instanceof H)) return new H(w);
        var E = this instanceof e;
        this._readableState = new V(w, this, E), this.readable = !0, w && (typeof w.read == "function" && (this._read = w.read), typeof w.destroy == "function" && (this._destroy = w.destroy)), r.call(this)
    }
    Object.defineProperty(H.prototype, "destroyed", {
        enumerable: !1,
        get: function () {
            return this._readableState === void 0 ? !1 : this._readableState.destroyed
        },
        set: function (E) {
            this._readableState && (this._readableState.destroyed = E)
        }
    }), H.prototype.destroy = p.destroy, H.prototype._undestroy = p.undestroy, H.prototype._destroy = function (w, E) {
        E(w)
    }, H.prototype.push = function (w, E) {
        var F = this._readableState,
            j;
        return F.objectMode ? j = !0 : typeof w == "string" && (E = E || F.defaultEncoding, E !== F.encoding && (w = n.from(w, E), E = ""), j = !0), X(this, w, E, !1, j)
    }, H.prototype.unshift = function (w) {
        return X(this, w, null, !0, !1)
    };

    function X(w, E, F, j, K) {
        l("readableAddChunk", E);
        var ee = w._readableState;
        if (E === null) ee.reading = !1, g(w, ee);
        else {
            var Z;
            if (K || (Z = ie(ee, E)), Z) P(w, Z);
            else if (ee.objectMode || E && E.length > 0)
                if (typeof E != "string" && !ee.objectMode && Object.getPrototypeOf(E) !== n.prototype && (E = s(E)), j) ee.endEmitted ? P(w, new M) : Q(w, ee, E, !0);
                else if (ee.ended) P(w, new O);
            else {
                if (ee.destroyed) return !1;
                ee.reading = !1, ee.decoder && !F ? (E = ee.decoder.write(E), ee.objectMode || E.length !== 0 ? Q(w, ee, E, !1) : C(w, ee)) : Q(w, ee, E, !1)
            } else j || (ee.reading = !1, C(w, ee))
        }
        return !ee.ended && (ee.length < ee.highWaterMark || ee.length === 0)
    }

    function Q(w, E, F, j) {
        E.flowing && E.length === 0 && !E.sync ? (E.awaitDrain = 0, w.emit("data", F)) : (E.length += E.objectMode ? 1 : F.length, j ? E.buffer.unshift(F) : E.buffer.push(F), E.needReadable && m(w)), C(w, E)
    }

    function ie(w, E) {
        var F;
        return !a(E) && typeof E != "string" && E !== void 0 && !w.objectMode && (F = new A("chunk", ["string", "Buffer", "Uint8Array"], E)), F
    }
    H.prototype.isPaused = function () {
        return this._readableState.flowing === !1
    }, H.prototype.setEncoding = function (w) {
        k || (k = uc().StringDecoder);
        var E = new k(w);
        this._readableState.decoder = E, this._readableState.encoding = this._readableState.decoder.encoding;
        for (var F = this._readableState.buffer.head, j = ""; F !== null;) j += E.write(F.data), F = F.next;
        return this._readableState.buffer.clear(), j !== "" && this._readableState.buffer.push(j), this._readableState.length = j.length, this
    };
    var v = 1073741824;

    function o(w) {
        return w >= v ? w = v : (w--, w |= w >>> 1, w |= w >>> 2, w |= w >>> 4, w |= w >>> 8, w |= w >>> 16, w++), w
    }

    function d(w, E) {
        return w <= 0 || E.length === 0 && E.ended ? 0 : E.objectMode ? 1 : w !== w ? E.flowing && E.length ? E.buffer.head.data.length : E.length : (w > E.highWaterMark && (E.highWaterMark = o(w)), w <= E.length ? w : E.ended ? E.length : (E.needReadable = !0, 0))
    }
    H.prototype.read = function (w) {
        l("read", w), w = parseInt(w, 10);
        var E = this._readableState,
            F = w;
        if (w !== 0 && (E.emittedReadable = !1), w === 0 && E.needReadable && ((E.highWaterMark !== 0 ? E.length >= E.highWaterMark : E.length > 0) || E.ended)) return l("read: emitReadable", E.length, E.ended), E.length === 0 && E.ended ? B(this) : m(this), null;
        if (w = d(w, E), w === 0 && E.ended) return E.length === 0 && B(this), null;
        var j = E.needReadable;
        l("need readable", j), (E.length === 0 || E.length - w < E.highWaterMark) && (j = !0, l("length less than watermark", j)), E.ended || E.reading ? (j = !1, l("reading or ended", j)) : j && (l("do read"), E.reading = !0, E.sync = !0, E.length === 0 && (E.needReadable = !0), this._read(E.highWaterMark), E.sync = !1, E.reading || (w = d(F, E)));
        var K;
        return w > 0 ? K = N(w, E) : K = null, K === null ? (E.needReadable = E.length <= E.highWaterMark, w = 0) : (E.length -= w, E.awaitDrain = 0), E.length === 0 && (E.ended || (E.needReadable = !0), F !== w && E.ended && B(this)), K !== null && this.emit("data", K), K
    };

    function g(w, E) {
        if (l("onEofChunk"), !E.ended) {
            if (E.decoder) {
                var F = E.decoder.end();
                F && F.length && (E.buffer.push(F), E.length += E.objectMode ? 1 : F.length)
            }
            E.ended = !0, E.sync ? m(w) : (E.needReadable = !1, E.emittedReadable || (E.emittedReadable = !0, y(w)))
        }
    }

    function m(w) {
        var E = w._readableState;
        l("emitReadable", E.needReadable, E.emittedReadable), E.needReadable = !1, E.emittedReadable || (l("emitReadable", E.flowing), E.emittedReadable = !0, process.nextTick(y, w))
    }

    function y(w) {
        var E = w._readableState;
        l("emitReadable_", E.destroyed, E.length, E.ended), !E.destroyed && (E.length || E.ended) && (w.emit("readable"), E.emittedReadable = !1), E.needReadable = !E.flowing && !E.ended && E.length <= E.highWaterMark, I(w)
    }

    function C(w, E) {
        E.readingMore || (E.readingMore = !0, process.nextTick(x, w, E))
    }

    function x(w, E) {
        for (; !E.reading && !E.ended && (E.length < E.highWaterMark || E.flowing && E.length === 0);) {
            var F = E.length;
            if (l("maybeReadMore read 0"), w.read(0), F === E.length) break
        }
        E.readingMore = !1
    }
    H.prototype._read = function (w) {
        P(this, new L("_read()"))
    }, H.prototype.pipe = function (w, E) {
        var F = this,
            j = this._readableState;
        switch (j.pipesCount) {
            case 0:
                j.pipes = w;
                break;
            case 1:
                j.pipes = [j.pipes, w];
                break;
            default:
                j.pipes.push(w);
                break
        }
        j.pipesCount += 1, l("pipe count=%d opts=%j", j.pipesCount, E);
        var K = (!E || E.end !== !1) && w !== process.stdout && w !== process.stderr,
            ee = K ? le : he;
        j.endEmitted ? process.nextTick(ee) : F.once("end", ee), w.on("unpipe", Z);

        function Z(ue, ct) {
            l("onunpipe"), ue === F && ct && ct.hasUnpiped === !1 && (ct.hasUnpiped = !0, me())
        }

        function le() {
            l("onend"), w.end()
        }
        var Mt = b(F);
        w.on("drain", Mt);
        var ge = !1;

        function me() {
            l("cleanup"), w.removeListener("close", fe), w.removeListener("finish", Ot), w.removeListener("drain", Mt), w.removeListener("error", de), w.removeListener("unpipe", Z), F.removeListener("end", le), F.removeListener("end", he), F.removeListener("data", Vt), ge = !0, j.awaitDrain && (!w._writableState || w._writableState.needDrain) && Mt()
        }
        F.on("data", Vt);

        function Vt(ue) {
            l("ondata");
            var ct = w.write(ue);
            l("dest.write", ct), ct === !1 && ((j.pipesCount === 1 && j.pipes === w || j.pipesCount > 1 && te(j.pipes, w) !== -1) && !ge && (l("false write response, pause", j.awaitDrain), j.awaitDrain++), F.pause())
        }

        function de(ue) {
            l("onerror", ue), he(), w.removeListener("error", de), t(w, "error") === 0 && P(w, ue)
        }
        G(w, "error", de);

        function fe() {
            w.removeListener("finish", Ot), he()
        }
        w.once("close", fe);

        function Ot() {
            l("onfinish"), w.removeListener("close", fe), he()
        }
        w.once("finish", Ot);

        function he() {
            l("unpipe"), F.unpipe(w)
        }
        return w.emit("pipe", F), j.flowing || (l("pipe resume"), F.resume()), w
    };

    function b(w) {
        return function () {
            var F = w._readableState;
            l("pipeOnDrain", F.awaitDrain), F.awaitDrain && F.awaitDrain--, F.awaitDrain === 0 && t(w, "data") && (F.flowing = !0, I(w))
        }
    }
    H.prototype.unpipe = function (w) {
        var E = this._readableState,
            F = {
                hasUnpiped: !1
            };
        if (E.pipesCount === 0) return this;
        if (E.pipesCount === 1) return w && w !== E.pipes ? this : (w || (w = E.pipes), E.pipes = null, E.pipesCount = 0, E.flowing = !1, w && w.emit("unpipe", this, F), this);
        if (!w) {
            var j = E.pipes,
                K = E.pipesCount;
            E.pipes = null, E.pipesCount = 0, E.flowing = !1;
            for (var ee = 0; ee < K; ee++) j[ee].emit("unpipe", this, {
                hasUnpiped: !1
            });
            return this
        }
        var Z = te(E.pipes, w);
        return Z === -1 ? this : (E.pipes.splice(Z, 1), E.pipesCount -= 1, E.pipesCount === 1 && (E.pipes = E.pipes[0]), w.emit("unpipe", this, F), this)
    }, H.prototype.on = function (w, E) {
        var F = r.prototype.on.call(this, w, E),
            j = this._readableState;
        return w === "data" ? (j.readableListening = this.listenerCount("readable") > 0, j.flowing !== !1 && this.resume()) : w === "readable" && !j.endEmitted && !j.readableListening && (j.readableListening = j.needReadable = !0, j.flowing = !1, j.emittedReadable = !1, l("on readable", j.length, j.reading), j.length ? m(this) : j.reading || process.nextTick(S, this)), F
    }, H.prototype.addListener = H.prototype.on, H.prototype.removeListener = function (w, E) {
        var F = r.prototype.removeListener.call(this, w, E);
        return w === "readable" && process.nextTick(u, this), F
    }, H.prototype.removeAllListeners = function (w) {
        var E = r.prototype.removeAllListeners.apply(this, arguments);
        return (w === "readable" || w === void 0) && process.nextTick(u, this), E
    };

    function u(w) {
        var E = w._readableState;
        E.readableListening = w.listenerCount("readable") > 0, E.resumeScheduled && !E.paused ? E.flowing = !0 : w.listenerCount("data") > 0 && w.resume()
    }

    function S(w) {
        l("readable nexttick read 0"), w.read(0)
    }
    H.prototype.resume = function () {
        var w = this._readableState;
        return w.flowing || (l("resume"), w.flowing = !w.readableListening, W(this, w)), w.paused = !1, this
    };

    function W(w, E) {
        E.resumeScheduled || (E.resumeScheduled = !0, process.nextTick(q, w, E))
    }

    function q(w, E) {
        l("resume", E.reading), E.reading || w.read(0), E.resumeScheduled = !1, w.emit("resume"), I(w), E.flowing && !E.reading && w.read(0)
    }
    H.prototype.pause = function () {
        return l("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== !1 && (l("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState.paused = !0, this
    };

    function I(w) {
        var E = w._readableState;
        for (l("flow", E.flowing); E.flowing && w.read() !== null;);
    }
    H.prototype.wrap = function (w) {
        var E = this,
            F = this._readableState,
            j = !1;
        w.on("end", function () {
            if (l("wrapped end"), F.decoder && !F.ended) {
                var Z = F.decoder.end();
                Z && Z.length && E.push(Z)
            }
            E.push(null)
        }), w.on("data", function (Z) {
            if (l("wrapped data"), F.decoder && (Z = F.decoder.write(Z)), !(F.objectMode && Z == null) && !(!F.objectMode && (!Z || !Z.length))) {
                var le = E.push(Z);
                le || (j = !0, w.pause())
            }
        });
        for (var K in w) this[K] === void 0 && typeof w[K] == "function" && (this[K] = function (le) {
            return function () {
                return w[le].apply(w, arguments)
            }
        }(K));
        for (var ee = 0; ee < D.length; ee++) w.on(D[ee], this.emit.bind(this, D[ee]));
        return this._read = function (Z) {
            l("wrapped _read", Z), j && (j = !1, w.resume())
        }, this
    }, typeof Symbol == "function" && (H.prototype[Symbol.asyncIterator] = function () {
        return T === void 0 && (T = ip()), T(this)
    }), Object.defineProperty(H.prototype, "readableHighWaterMark", {
        enumerable: !1,
        get: function () {
            return this._readableState.highWaterMark
        }
    }), Object.defineProperty(H.prototype, "readableBuffer", {
        enumerable: !1,
        get: function () {
            return this._readableState && this._readableState.buffer
        }
    }), Object.defineProperty(H.prototype, "readableFlowing", {
        enumerable: !1,
        get: function () {
            return this._readableState.flowing
        },
        set: function (E) {
            this._readableState && (this._readableState.flowing = E)
        }
    }), H._fromList = N, Object.defineProperty(H.prototype, "readableLength", {
        enumerable: !1,
        get: function () {
            return this._readableState.length
        }
    });

    function N(w, E) {
        if (E.length === 0) return null;
        var F;
        return E.objectMode ? F = E.buffer.shift() : !w || w >= E.length ? (E.decoder ? F = E.buffer.join("") : E.buffer.length === 1 ? F = E.buffer.first() : F = E.buffer.concat(E.length), E.buffer.clear()) : F = E.buffer.consume(w, E.decoder), F
    }

    function B(w) {
        var E = w._readableState;
        l("endReadable", E.endEmitted), E.endEmitted || (E.ended = !0, process.nextTick(U, E, w))
    }

    function U(w, E) {
        if (l("endReadableNT", w.endEmitted, w.length), !w.endEmitted && w.length === 0 && (w.endEmitted = !0, E.readable = !1, E.emit("end"), w.autoDestroy)) {
            var F = E._writableState;
            (!F || F.autoDestroy && F.finished) && E.destroy()
        }
    }
    typeof Symbol == "function" && (H.from = function (w, E) {
        return $ === void 0 && ($ = sp()), $(H, w, E)
    });

    function te(w, E) {
        for (var F = 0, j = w.length; F < j; F++)
            if (w[F] === E) return F;
        return -1
    }
    return Xs
}
var wu = Wt,
    ls = Nr.codes,
    op = ls.ERR_METHOD_NOT_IMPLEMENTED,
    ap = ls.ERR_MULTIPLE_CALLBACK,
    cp = ls.ERR_TRANSFORM_ALREADY_TRANSFORMING,
    lp = ls.ERR_TRANSFORM_WITH_LENGTH_0,
    us = un();
Et(Wt, us);

function up(e, t) {
    var r = this._transformState;
    r.transforming = !1;
    var n = r.writecb;
    if (n === null) return this.emit("error", new ap);
    r.writechunk = null, r.writecb = null, t != null && this.push(t), n(e);
    var i = this._readableState;
    i.reading = !1, (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
}

function Wt(e) {
    if (!(this instanceof Wt)) return new Wt(e);
    us.call(this, e), this._transformState = {
        afterTransform: up.bind(this),
        needTransform: !1,
        transforming: !1,
        writecb: null,
        writechunk: null,
        writeencoding: null
    }, this._readableState.needReadable = !0, this._readableState.sync = !1, e && (typeof e.transform == "function" && (this._transform = e.transform), typeof e.flush == "function" && (this._flush = e.flush)), this.on("prefinish", hp)
}

function hp() {
    var e = this;
    typeof this._flush == "function" && !this._readableState.destroyed ? this._flush(function (t, r) {
        gc(e, t, r)
    }) : gc(this, null, null)
}
Wt.prototype.push = function (e, t) {
    return this._transformState.needTransform = !1, us.prototype.push.call(this, e, t)
};
Wt.prototype._transform = function (e, t, r) {
    r(new op("_transform()"))
};
Wt.prototype._write = function (e, t, r) {
    var n = this._transformState;
    if (n.writecb = r, n.writechunk = e, n.writeencoding = t, !n.transforming) {
        var i = this._readableState;
        (n.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
    }
};
Wt.prototype._read = function (e) {
    var t = this._transformState;
    t.writechunk !== null && !t.transforming ? (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform)) : t.needTransform = !0
};
Wt.prototype._destroy = function (e, t) {
    us.prototype._destroy.call(this, e, function (r) {
        t(r)
    })
};

function gc(e, t, r) {
    if (t) return e.emit("error", t);
    if (r != null && e.push(r), e._writableState.length) throw new lp;
    if (e._transformState.transforming) throw new cp;
    return e.push(null)
}
var dp = On,
    Eu = wu;
Et(On, Eu);

function On(e) {
    if (!(this instanceof On)) return new On(e);
    Eu.call(this, e)
}
On.prototype._transform = function (e, t, r) {
    r(null, e)
};
var eo;

function fp(e) {
    var t = !1;
    return function () {
        t || (t = !0, e.apply(void 0, arguments))
    }
}
var Su = Nr.codes,
    pp = Su.ERR_MISSING_ARGS,
    gp = Su.ERR_STREAM_DESTROYED;

function _c(e) {
    if (e) throw e
}

function _p(e) {
    return e.setHeader && typeof e.abort == "function"
}

function mp(e, t, r, n) {
    n = fp(n);
    var i = !1;
    e.on("close", function () {
        i = !0
    }), eo === void 0 && (eo = Ko), eo(e, {
        readable: t,
        writable: r
    }, function (a) {
        if (a) return n(a);
        i = !0, n()
    });
    var s = !1;
    return function (a) {
        if (!i && !s) {
            if (s = !0, _p(e)) return e.abort();
            if (typeof e.destroy == "function") return e.destroy();
            n(a || new gp("pipe"))
        }
    }
}

function mc(e) {
    e()
}

function vp(e, t) {
    return e.pipe(t)
}

function bp(e) {
    return !e.length || typeof e[e.length - 1] != "function" ? _c : e.pop()
}

function yp() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
    var n = bp(t);
    if (Array.isArray(t[0]) && (t = t[0]), t.length < 2) throw new pp("streams");
    var i, s = t.map(function (a, c) {
        var l = c < t.length - 1,
            h = c > 0;
        return mp(a, l, h, function (p) {
            i || (i = p), p && s.forEach(mc), !l && (s.forEach(mc), n(i))
        })
    });
    return t.reduce(vp)
}
var wp = yp;
(function (e, t) {
    t = e.exports = yu(), t.Stream = t, t.Readable = t, t.Writable = vu(), t.Duplex = un(), t.Transform = wu, t.PassThrough = dp, t.finished = Ko, t.pipeline = wp
})(Mo, Mo.exports);
var Ru = Mo.exports;
const {
    Transform: Ep
} = Ru;
var Sp = e => class Mu extends Ep {
    constructor(r, n, i, s, a) {
        super(a), this._rate = r, this._capacity = n, this._delimitedSuffix = i, this._hashBitLength = s, this._options = a, this._state = new e, this._state.initialize(r, n), this._finalized = !1
    }
    _transform(r, n, i) {
        let s = null;
        try {
            this.update(r, n)
        } catch (a) {
            s = a
        }
        i(s)
    }
    _flush(r) {
        let n = null;
        try {
            this.push(this.digest())
        } catch (i) {
            n = i
        }
        r(n)
    }
    update(r, n) {
        if (!Buffer.isBuffer(r) && typeof r != "string") throw new TypeError("Data must be a string or a buffer");
        if (this._finalized) throw new Error("Digest already called");
        return Buffer.isBuffer(r) || (r = Buffer.from(r, n)), this._state.absorb(r), this
    }
    digest(r) {
        if (this._finalized) throw new Error("Digest already called");
        this._finalized = !0, this._delimitedSuffix && this._state.absorbLastFewBits(this._delimitedSuffix);
        let n = this._state.squeeze(this._hashBitLength / 8);
        return r !== void 0 && (n = n.toString(r)), this._resetState(), n
    }
    _resetState() {
        return this._state.initialize(this._rate, this._capacity), this
    }
    _clone() {
        const r = new Mu(this._rate, this._capacity, this._delimitedSuffix, this._hashBitLength, this._options);
        return this._state.copy(r._state), r._finalized = this._finalized, r
    }
};
const {
    Transform: Rp
} = Ru;
var Mp = e => class Cu extends Rp {
    constructor(r, n, i, s) {
        super(s), this._rate = r, this._capacity = n, this._delimitedSuffix = i, this._options = s, this._state = new e, this._state.initialize(r, n), this._finalized = !1
    }
    _transform(r, n, i) {
        let s = null;
        try {
            this.update(r, n)
        } catch (a) {
            s = a
        }
        i(s)
    }
    _flush() {}
    _read(r) {
        this.push(this.squeeze(r))
    }
    update(r, n) {
        if (!Buffer.isBuffer(r) && typeof r != "string") throw new TypeError("Data must be a string or a buffer");
        if (this._finalized) throw new Error("Squeeze already called");
        return Buffer.isBuffer(r) || (r = Buffer.from(r, n)), this._state.absorb(r), this
    }
    squeeze(r, n) {
        this._finalized || (this._finalized = !0, this._state.absorbLastFewBits(this._delimitedSuffix));
        let i = this._state.squeeze(r);
        return n !== void 0 && (i = i.toString(n)), i
    }
    _resetState() {
        return this._state.initialize(this._rate, this._capacity), this
    }
    _clone() {
        const r = new Cu(this._rate, this._capacity, this._delimitedSuffix, this._options);
        return this._state.copy(r._state), r._finalized = this._finalized, r
    }
};
const Cp = Sp,
    kp = Mp;
var Ip = function (e) {
        const t = Cp(e),
            r = kp(e);
        return function (n, i) {
            switch (typeof n == "string" ? n.toLowerCase() : n) {
                case "keccak224":
                    return new t(1152, 448, null, 224, i);
                case "keccak256":
                    return new t(1088, 512, null, 256, i);
                case "keccak384":
                    return new t(832, 768, null, 384, i);
                case "keccak512":
                    return new t(576, 1024, null, 512, i);
                case "sha3-224":
                    return new t(1152, 448, 6, 224, i);
                case "sha3-256":
                    return new t(1088, 512, 6, 256, i);
                case "sha3-384":
                    return new t(832, 768, 6, 384, i);
                case "sha3-512":
                    return new t(576, 1024, 6, 512, i);
                case "shake128":
                    return new r(1344, 256, 31, i);
                case "shake256":
                    return new r(1088, 512, 31, i);
                default:
                    throw new Error("Invald algorithm: " + n)
            }
        }
    },
    ku = {};
const vc = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648];
ku.p1600 = function (e) {
    for (let t = 0; t < 24; ++t) {
        const r = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40],
            n = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41],
            i = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42],
            s = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43],
            a = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44],
            c = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45],
            l = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46],
            h = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47],
            p = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48],
            f = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49];
        let _ = p ^ (i << 1 | s >>> 31),
            R = f ^ (s << 1 | i >>> 31);
        const A = e[0] ^ _,
            O = e[1] ^ R,
            L = e[10] ^ _,
            M = e[11] ^ R,
            k = e[20] ^ _,
            T = e[21] ^ R,
            $ = e[30] ^ _,
            P = e[31] ^ R,
            D = e[40] ^ _,
            G = e[41] ^ R;
        _ = r ^ (a << 1 | c >>> 31), R = n ^ (c << 1 | a >>> 31);
        const V = e[2] ^ _,
            H = e[3] ^ R,
            X = e[12] ^ _,
            Q = e[13] ^ R,
            ie = e[22] ^ _,
            v = e[23] ^ R,
            o = e[32] ^ _,
            d = e[33] ^ R,
            g = e[42] ^ _,
            m = e[43] ^ R;
        _ = i ^ (l << 1 | h >>> 31), R = s ^ (h << 1 | l >>> 31);
        const y = e[4] ^ _,
            C = e[5] ^ R,
            x = e[14] ^ _,
            b = e[15] ^ R,
            u = e[24] ^ _,
            S = e[25] ^ R,
            W = e[34] ^ _,
            q = e[35] ^ R,
            I = e[44] ^ _,
            N = e[45] ^ R;
        _ = a ^ (p << 1 | f >>> 31), R = c ^ (f << 1 | p >>> 31);
        const B = e[6] ^ _,
            U = e[7] ^ R,
            te = e[16] ^ _,
            w = e[17] ^ R,
            E = e[26] ^ _,
            F = e[27] ^ R,
            j = e[36] ^ _,
            K = e[37] ^ R,
            ee = e[46] ^ _,
            Z = e[47] ^ R;
        _ = l ^ (r << 1 | n >>> 31), R = h ^ (n << 1 | r >>> 31);
        const le = e[8] ^ _,
            Mt = e[9] ^ R,
            ge = e[18] ^ _,
            me = e[19] ^ R,
            Vt = e[28] ^ _,
            de = e[29] ^ R,
            fe = e[38] ^ _,
            Ot = e[39] ^ R,
            he = e[48] ^ _,
            ue = e[49] ^ R,
            ct = A,
            ve = O,
            be = M << 4 | L >>> 28,
            Pr = L << 4 | M >>> 28,
            ye = k << 3 | T >>> 29,
            we = T << 3 | k >>> 29,
            Or = P << 9 | $ >>> 23,
            Ee = $ << 9 | P >>> 23,
            Se = D << 18 | G >>> 14,
            $r = G << 18 | D >>> 14,
            Re = V << 1 | H >>> 31,
            Me = H << 1 | V >>> 31,
            Br = Q << 12 | X >>> 20,
            Ce = X << 12 | Q >>> 20,
            ke = ie << 10 | v >>> 22,
            Dr = v << 10 | ie >>> 22,
            Ie = d << 13 | o >>> 19,
            xe = o << 13 | d >>> 19,
            Fr = g << 2 | m >>> 30,
            Ae = m << 2 | g >>> 30,
            Ne = C << 30 | y >>> 2,
            jr = y << 30 | C >>> 2,
            Te = x << 6 | b >>> 26,
            Le = b << 6 | x >>> 26,
            Hr = S << 11 | u >>> 21,
            Pe = u << 11 | S >>> 21,
            Oe = W << 15 | q >>> 17,
            Ur = q << 15 | W >>> 17,
            $e = N << 29 | I >>> 3,
            Be = I << 29 | N >>> 3,
            Wr = B << 28 | U >>> 4,
            De = U << 28 | B >>> 4,
            Fe = w << 23 | te >>> 9,
            Vr = te << 23 | w >>> 9,
            je = E << 25 | F >>> 7,
            He = F << 25 | E >>> 7,
            Yt = j << 21 | K >>> 11,
            Xt = K << 21 | j >>> 11,
            er = Z << 24 | ee >>> 8,
            tr = ee << 24 | Z >>> 8,
            rr = le << 27 | Mt >>> 5,
            nr = Mt << 27 | le >>> 5,
            ir = ge << 20 | me >>> 12,
            sr = me << 20 | ge >>> 12,
            or = de << 7 | Vt >>> 25,
            ar = Vt << 7 | de >>> 25,
            cr = fe << 8 | Ot >>> 24,
            lr = Ot << 8 | fe >>> 24,
            ur = he << 14 | ue >>> 18,
            hr = ue << 14 | he >>> 18;
        e[0] = ct ^ ~Br & Hr, e[1] = ve ^ ~Ce & Pe, e[10] = Wr ^ ~ir & ye, e[11] = De ^ ~sr & we, e[20] = Re ^ ~Te & je, e[21] = Me ^ ~Le & He, e[30] = rr ^ ~be & ke, e[31] = nr ^ ~Pr & Dr, e[40] = Ne ^ ~Fe & or, e[41] = jr ^ ~Vr & ar, e[2] = Br ^ ~Hr & Yt, e[3] = Ce ^ ~Pe & Xt, e[12] = ir ^ ~ye & Ie, e[13] = sr ^ ~we & xe, e[22] = Te ^ ~je & cr, e[23] = Le ^ ~He & lr, e[32] = be ^ ~ke & Oe, e[33] = Pr ^ ~Dr & Ur, e[42] = Fe ^ ~or & Or, e[43] = Vr ^ ~ar & Ee, e[4] = Hr ^ ~Yt & ur, e[5] = Pe ^ ~Xt & hr, e[14] = ye ^ ~Ie & $e, e[15] = we ^ ~xe & Be, e[24] = je ^ ~cr & Se, e[25] = He ^ ~lr & $r, e[34] = ke ^ ~Oe & er, e[35] = Dr ^ ~Ur & tr, e[44] = or ^ ~Or & Fr, e[45] = ar ^ ~Ee & Ae, e[6] = Yt ^ ~ur & ct, e[7] = Xt ^ ~hr & ve, e[16] = Ie ^ ~$e & Wr, e[17] = xe ^ ~Be & De, e[26] = cr ^ ~Se & Re, e[27] = lr ^ ~$r & Me, e[36] = Oe ^ ~er & rr, e[37] = Ur ^ ~tr & nr, e[46] = Or ^ ~Fr & Ne, e[47] = Ee ^ ~Ae & jr, e[8] = ur ^ ~ct & Br, e[9] = hr ^ ~ve & Ce, e[18] = $e ^ ~Wr & ir, e[19] = Be ^ ~De & sr, e[28] = Se ^ ~Re & Te, e[29] = $r ^ ~Me & Le, e[38] = er ^ ~rr & be, e[39] = tr ^ ~nr & Pr, e[48] = Fr ^ ~Ne & Fe, e[49] = Ae ^ ~jr & Vr, e[0] ^= vc[t * 2], e[1] ^= vc[t * 2 + 1]
    }
};
const Ai = ku;

function yn() {
    this.state = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.blockSize = null, this.count = 0, this.squeezing = !1
}
yn.prototype.initialize = function (e, t) {
    for (let r = 0; r < 50; ++r) this.state[r] = 0;
    this.blockSize = e / 8, this.count = 0, this.squeezing = !1
};
yn.prototype.absorb = function (e) {
    for (let t = 0; t < e.length; ++t) this.state[~~(this.count / 4)] ^= e[t] << 8 * (this.count % 4), this.count += 1, this.count === this.blockSize && (Ai.p1600(this.state), this.count = 0)
};
yn.prototype.absorbLastFewBits = function (e) {
    this.state[~~(this.count / 4)] ^= e << 8 * (this.count % 4), e & 128 && this.count === this.blockSize - 1 && Ai.p1600(this.state), this.state[~~((this.blockSize - 1) / 4)] ^= 128 << 8 * ((this.blockSize - 1) % 4), Ai.p1600(this.state), this.count = 0, this.squeezing = !0
};
yn.prototype.squeeze = function (e) {
    this.squeezing || this.absorbLastFewBits(1);
    const t = Buffer.alloc(e);
    for (let r = 0; r < e; ++r) t[r] = this.state[~~(this.count / 4)] >>> 8 * (this.count % 4) & 255, this.count += 1, this.count === this.blockSize && (Ai.p1600(this.state), this.count = 0);
    return t
};
yn.prototype.copy = function (e) {
    for (let t = 0; t < 50; ++t) e.state[t] = this.state[t];
    e.blockSize = this.blockSize, e.count = this.count, e.squeezing = this.squeezing
};
var xp = yn,
    Ap = Ip(xp);
const Np = Ap,
    Tp = Bi;

function Iu(e) {
    return Buffer.allocUnsafe(e).fill(0)
}

function xu(e, t, r) {
    const n = Iu(t);
    return e = hs(e), r ? e.length < t ? (e.copy(n), n) : e.slice(0, t) : e.length < t ? (e.copy(n, t - e.length), n) : e.slice(-t)
}

function Lp(e, t) {
    return xu(e, t, !0)
}

function hs(e) {
    if (!Buffer.isBuffer(e))
        if (Array.isArray(e)) e = Buffer.from(e);
        else if (typeof e == "string") Au(e) ? e = Buffer.from($p(Nu(e)), "hex") : e = Buffer.from(e);
    else if (typeof e == "number") e = intToBuffer(e);
    else if (e == null) e = Buffer.allocUnsafe(0);
    else if (Tp.isBN(e)) e = e.toArrayLike(Buffer);
    else if (e.toArray) e = Buffer.from(e.toArray());
    else throw new Error("invalid type");
    return e
}

function Pp(e) {
    return e = hs(e), "0x" + e.toString("hex")
}

function Op(e, t) {
    return e = hs(e), t || (t = 256), Np("keccak" + t).update(e).digest()
}

function $p(e) {
    return e.length % 2 ? "0" + e : e
}

function Au(e) {
    return typeof e == "string" && e.match(/^0x[0-9A-Fa-f]*$/)
}

function Nu(e) {
    return typeof e == "string" && e.startsWith("0x") ? e.slice(2) : e
}
var Tu = {
    zeros: Iu,
    setLength: xu,
    setLengthRight: Lp,
    isHexString: Au,
    stripHexPrefix: Nu,
    toBuffer: hs,
    bufferToHex: Pp,
    keccak: Op
};
const Mr = Tu,
    yr = Bi;

function Lu(e) {
    return e.startsWith("int[") ? "int256" + e.slice(3) : e === "int" ? "int256" : e.startsWith("uint[") ? "uint256" + e.slice(4) : e === "uint" ? "uint256" : e.startsWith("fixed[") ? "fixed128x128" + e.slice(5) : e === "fixed" ? "fixed128x128" : e.startsWith("ufixed[") ? "ufixed128x128" + e.slice(6) : e === "ufixed" ? "ufixed128x128" : e
}

function tn(e) {
    return parseInt(/^\D+(\d+)$/.exec(e)[1], 10)
}

function bc(e) {
    var t = /^\D+(\d+)x(\d+)$/.exec(e);
    return [parseInt(t[1], 10), parseInt(t[2], 10)]
}

function Pu(e) {
    var t = e.match(/(.*)\[(.*?)\]$/);
    return t ? t[2] === "" ? "dynamic" : parseInt(t[2], 10) : null
}

function mr(e) {
    var t = typeof e;
    if (t === "string") return Mr.isHexString(e) ? new yr(Mr.stripHexPrefix(e), 16) : new yr(e, 10);
    if (t === "number") return new yr(e);
    if (e.toArray) return e;
    throw new Error("Argument is not a number")
}

function xt(e, t) {
    var r, n, i, s;
    if (e === "address") return xt("uint160", mr(t));
    if (e === "bool") return xt("uint8", t ? 1 : 0);
    if (e === "string") return xt("bytes", new Buffer(t, "utf8"));
    if (Dp(e)) {
        if (typeof t.length > "u") throw new Error("Not an array?");
        if (r = Pu(e), r !== "dynamic" && r !== 0 && t.length > r) throw new Error("Elements exceed array size: " + r);
        i = [], e = e.slice(0, e.lastIndexOf("[")), typeof t == "string" && (t = JSON.parse(t));
        for (s in t) i.push(xt(e, t[s]));
        if (r === "dynamic") {
            var a = xt("uint256", t.length);
            i.unshift(a)
        }
        return Buffer.concat(i)
    } else {
        if (e === "bytes") return t = new Buffer(t), i = Buffer.concat([xt("uint256", t.length), t]), t.length % 32 !== 0 && (i = Buffer.concat([i, Mr.zeros(32 - t.length % 32)])), i;
        if (e.startsWith("bytes")) {
            if (r = tn(e), r < 1 || r > 32) throw new Error("Invalid bytes<N> width: " + r);
            return Mr.setLengthRight(t, 32)
        } else if (e.startsWith("uint")) {
            if (r = tn(e), r % 8 || r < 8 || r > 256) throw new Error("Invalid uint<N> width: " + r);
            if (n = mr(t), n.bitLength() > r) throw new Error("Supplied uint exceeds width: " + r + " vs " + n.bitLength());
            if (n < 0) throw new Error("Supplied uint is negative");
            return n.toArrayLike(Buffer, "be", 32)
        } else if (e.startsWith("int")) {
            if (r = tn(e), r % 8 || r < 8 || r > 256) throw new Error("Invalid int<N> width: " + r);
            if (n = mr(t), n.bitLength() > r) throw new Error("Supplied int exceeds width: " + r + " vs " + n.bitLength());
            return n.toTwos(256).toArrayLike(Buffer, "be", 32)
        } else if (e.startsWith("ufixed")) {
            if (r = bc(e), n = mr(t), n < 0) throw new Error("Supplied ufixed is negative");
            return xt("uint256", n.mul(new yr(2).pow(new yr(r[1]))))
        } else if (e.startsWith("fixed")) return r = bc(e), xt("int256", mr(t).mul(new yr(2).pow(new yr(r[1]))))
    }
    throw new Error("Unsupported or invalid type: " + e)
}

function Bp(e) {
    return e === "string" || e === "bytes" || Pu(e) === "dynamic"
}

function Dp(e) {
    return e.lastIndexOf("]") === e.length - 1
}

function Fp(e, t) {
    var r = [],
        n = [],
        i = 32 * e.length;
    for (var s in e) {
        var a = Lu(e[s]),
            c = t[s],
            l = xt(a, c);
        Bp(a) ? (r.push(xt("uint256", i)), n.push(l), i += l.length) : r.push(l)
    }
    return Buffer.concat(r.concat(n))
}

function Ou(e, t) {
    if (e.length !== t.length) throw new Error("Number of types are not matching the values");
    for (var r, n, i = [], s = 0; s < e.length; s++) {
        var a = Lu(e[s]),
            c = t[s];
        if (a === "bytes") i.push(c);
        else if (a === "string") i.push(new Buffer(c, "utf8"));
        else if (a === "bool") i.push(new Buffer(c ? "01" : "00", "hex"));
        else if (a === "address") i.push(Mr.setLength(c, 20));
        else if (a.startsWith("bytes")) {
            if (r = tn(a), r < 1 || r > 32) throw new Error("Invalid bytes<N> width: " + r);
            i.push(Mr.setLengthRight(c, r))
        } else if (a.startsWith("uint")) {
            if (r = tn(a), r % 8 || r < 8 || r > 256) throw new Error("Invalid uint<N> width: " + r);
            if (n = mr(c), n.bitLength() > r) throw new Error("Supplied uint exceeds width: " + r + " vs " + n.bitLength());
            i.push(n.toArrayLike(Buffer, "be", r / 8))
        } else if (a.startsWith("int")) {
            if (r = tn(a), r % 8 || r < 8 || r > 256) throw new Error("Invalid int<N> width: " + r);
            if (n = mr(c), n.bitLength() > r) throw new Error("Supplied int exceeds width: " + r + " vs " + n.bitLength());
            i.push(n.toTwos(r).toArrayLike(Buffer, "be", r / 8))
        } else throw new Error("Unsupported or invalid type: " + a)
    }
    return Buffer.concat(i)
}

function jp(e, t) {
    return Mr.keccak(Ou(e, t))
}
var Hp = {
    rawEncode: Fp,
    solidityPack: Ou,
    soliditySHA3: jp
};
const yt = Tu,
    Nn = Hp,
    $u = {
        type: "object",
        properties: {
            types: {
                type: "object",
                additionalProperties: {
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            name: {
                                type: "string"
                            },
                            type: {
                                type: "string"
                            }
                        },
                        required: ["name", "type"]
                    }
                }
            },
            primaryType: {
                type: "string"
            },
            domain: {
                type: "object"
            },
            message: {
                type: "object"
            }
        },
        required: ["types", "primaryType", "domain", "message"]
    },
    to = {
        encodeData(e, t, r, n = !0) {
            const i = ["bytes32"],
                s = [this.hashType(e, r)];
            if (n) {
                const a = (c, l, h) => {
                    if (r[l] !== void 0) return ["bytes32", h == null ? "0x0000000000000000000000000000000000000000000000000000000000000000" : yt.keccak(this.encodeData(l, h, r, n))];
                    if (h === void 0) throw new Error(`missing value for field ${c} of type ${l}`);
                    if (l === "bytes") return ["bytes32", yt.keccak(h)];
                    if (l === "string") return typeof h == "string" && (h = Buffer.from(h, "utf8")), ["bytes32", yt.keccak(h)];
                    if (l.lastIndexOf("]") === l.length - 1) {
                        const p = l.slice(0, l.lastIndexOf("[")),
                            f = h.map(_ => a(c, p, _));
                        return ["bytes32", yt.keccak(Nn.rawEncode(f.map(([_]) => _), f.map(([, _]) => _)))]
                    }
                    return [l, h]
                };
                for (const c of r[e]) {
                    const [l, h] = a(c.name, c.type, t[c.name]);
                    i.push(l), s.push(h)
                }
            } else
                for (const a of r[e]) {
                    let c = t[a.name];
                    if (c !== void 0)
                        if (a.type === "bytes") i.push("bytes32"), c = yt.keccak(c), s.push(c);
                        else if (a.type === "string") i.push("bytes32"), typeof c == "string" && (c = Buffer.from(c, "utf8")), c = yt.keccak(c), s.push(c);
                    else if (r[a.type] !== void 0) i.push("bytes32"), c = yt.keccak(this.encodeData(a.type, c, r, n)), s.push(c);
                    else {
                        if (a.type.lastIndexOf("]") === a.type.length - 1) throw new Error("Arrays currently unimplemented in encodeData");
                        i.push(a.type), s.push(c)
                    }
                }
            return Nn.rawEncode(i, s)
        },
        encodeType(e, t) {
            let r = "",
                n = this.findTypeDependencies(e, t).filter(i => i !== e);
            n = [e].concat(n.sort());
            for (const i of n) {
                if (!t[i]) throw new Error("No type definition specified: " + i);
                r += i + "(" + t[i].map(({
                    name: a,
                    type: c
                }) => c + " " + a).join(",") + ")"
            }
            return r
        },
        findTypeDependencies(e, t, r = []) {
            if (e = e.match(/^\w*/)[0], r.includes(e) || t[e] === void 0) return r;
            r.push(e);
            for (const n of t[e])
                for (const i of this.findTypeDependencies(n.type, t, r)) !r.includes(i) && r.push(i);
            return r
        },
        hashStruct(e, t, r, n = !0) {
            return yt.keccak(this.encodeData(e, t, r, n))
        },
        hashType(e, t) {
            return yt.keccak(this.encodeType(e, t))
        },
        sanitizeData(e) {
            const t = {};
            for (const r in $u.properties) e[r] && (t[r] = e[r]);
            return t.types && (t.types = Object.assign({
                EIP712Domain: []
            }, t.types)), t
        },
        hash(e, t = !0) {
            const r = this.sanitizeData(e),
                n = [Buffer.from("1901", "hex")];
            return n.push(this.hashStruct("EIP712Domain", r.domain, r.types, t)), r.primaryType !== "EIP712Domain" && n.push(this.hashStruct(r.primaryType, r.message, r.types, t)), yt.keccak(Buffer.concat(n))
        }
    };
var Up = {
    TYPED_MESSAGE_SCHEMA: $u,
    TypedDataUtils: to,
    hashForSignTypedDataLegacy: function (e) {
        return Wp(e.data)
    },
    hashForSignTypedData_v3: function (e) {
        return to.hash(e.data, !1)
    },
    hashForSignTypedData_v4: function (e) {
        return to.hash(e.data)
    }
};

function Wp(e) {
    const t = new Error("Expect argument to be non-empty array");
    if (typeof e != "object" || !e.length) throw t;
    const r = e.map(function (s) {
            return s.type === "bytes" ? yt.toBuffer(s.value) : s.value
        }),
        n = e.map(function (s) {
            return s.type
        }),
        i = e.map(function (s) {
            if (!s.name) throw t;
            return s.type + " " + s.name
        });
    return Nn.soliditySHA3(["bytes32", "bytes32"], [Nn.soliditySHA3(new Array(e.length).fill("string"), i), Nn.soliditySHA3(n, r)])
}
var hn = {};
Object.defineProperty(hn, "__esModule", {
    value: !0
});
hn.filterFromParam = hn.FilterPolyfill = void 0;
const Yr = Je,
    nt = z,
    Vp = 5 * 60 * 1e3,
    vr = {
        jsonrpc: "2.0",
        id: 0
    };
class qp {
    constructor(t) {
        this.logFilters = new Map, this.blockFilters = new Set, this.pendingTransactionFilters = new Set, this.cursors = new Map, this.timeouts = new Map, this.nextFilterId = (0, Yr.IntNumber)(1), this.REQUEST_THROTTLE_INTERVAL = 1e3, this.lastFetchTimestamp = new Date(0), this.resolvers = [], this.provider = t
    }
    async newFilter(t) {
        const r = Bu(t),
            n = this.makeFilterId(),
            i = await this.setInitialCursorPosition(n, r.fromBlock);
        return console.info(`Installing new log filter(${n}):`, r, "initial cursor position:", i), this.logFilters.set(n, r), this.setFilterTimeout(n), (0, nt.hexStringFromIntNumber)(n)
    }
    async newBlockFilter() {
        const t = this.makeFilterId(),
            r = await this.setInitialCursorPosition(t, "latest");
        return console.info(`Installing new block filter (${t}) with initial cursor position:`, r), this.blockFilters.add(t), this.setFilterTimeout(t), (0, nt.hexStringFromIntNumber)(t)
    }
    async newPendingTransactionFilter() {
        const t = this.makeFilterId(),
            r = await this.setInitialCursorPosition(t, "latest");
        return console.info(`Installing new block filter (${t}) with initial cursor position:`, r), this.pendingTransactionFilters.add(t), this.setFilterTimeout(t), (0, nt.hexStringFromIntNumber)(t)
    }
    uninstallFilter(t) {
        const r = (0, nt.intNumberFromHexString)(t);
        return console.info(`Uninstalling filter (${r})`), this.deleteFilter(r), !0
    }
    getFilterChanges(t) {
        const r = (0, nt.intNumberFromHexString)(t);
        return this.timeouts.has(r) && this.setFilterTimeout(r), this.logFilters.has(r) ? this.getLogFilterChanges(r) : this.blockFilters.has(r) ? this.getBlockFilterChanges(r) : this.pendingTransactionFilters.has(r) ? this.getPendingTransactionFilterChanges(r) : Promise.resolve(_i())
    }
    async getFilterLogs(t) {
        const r = (0, nt.intNumberFromHexString)(t),
            n = this.logFilters.get(r);
        return n ? this.sendAsyncPromise(Object.assign(Object.assign({}, vr), {
            method: "eth_getLogs",
            params: [yc(n)]
        })) : _i()
    }
    makeFilterId() {
        return (0, Yr.IntNumber)(++this.nextFilterId)
    }
    sendAsyncPromise(t) {
        return new Promise((r, n) => {
            this.provider.sendAsync(t, (i, s) => {
                if (i) return n(i);
                if (Array.isArray(s) || s == null) return n(new Error(`unexpected response received: ${JSON.stringify(s)}`));
                r(s)
            })
        })
    }
    deleteFilter(t) {
        console.info(`Deleting filter (${t})`), this.logFilters.delete(t), this.blockFilters.delete(t), this.pendingTransactionFilters.delete(t), this.cursors.delete(t), this.timeouts.delete(t)
    }
    async getLogFilterChanges(t) {
        const r = this.logFilters.get(t),
            n = this.cursors.get(t);
        if (!n || !r) return _i();
        const i = await this.getCurrentBlockHeight(),
            s = r.toBlock === "latest" ? i : r.toBlock;
        if (n > i || n > Number(r.toBlock)) return mi();
        console.info(`Fetching logs from ${n} to ${s} for filter ${t}`);
        const a = await this.sendAsyncPromise(Object.assign(Object.assign({}, vr), {
            method: "eth_getLogs",
            params: [yc(Object.assign(Object.assign({}, r), {
                fromBlock: n,
                toBlock: s
            }))]
        }));
        if (Array.isArray(a.result)) {
            const c = a.result.map(h => (0, nt.intNumberFromHexString)(h.blockNumber || "0x0")),
                l = Math.max(...c);
            if (l && l > n) {
                const h = (0, Yr.IntNumber)(l + 1);
                console.info(`Moving cursor position for filter (${t}) from ${n} to ${h}`), this.cursors.set(t, h)
            }
        }
        return a
    }
    async getBlockFilterChanges(t) {
        const r = this.cursors.get(t);
        if (!r) return _i();
        const n = await this.getCurrentBlockHeight();
        if (r > n) return mi();
        console.info(`Fetching blocks from ${r} to ${n} for filter (${t})`);
        const i = (await Promise.all((0, nt.range)(r, n + 1).map(a => this.getBlockHashByNumber((0, Yr.IntNumber)(a))))).filter(a => !!a),
            s = (0, Yr.IntNumber)(r + i.length);
        return console.info(`Moving cursor position for filter (${t}) from ${r} to ${s}`), this.cursors.set(t, s), Object.assign(Object.assign({}, vr), {
            result: i
        })
    }
    async getPendingTransactionFilterChanges(t) {
        return Promise.resolve(mi())
    }
    async setInitialCursorPosition(t, r) {
        const n = await this.getCurrentBlockHeight(),
            i = typeof r == "number" && r > n ? r : n;
        return this.cursors.set(t, i), i
    }
    setFilterTimeout(t) {
        const r = this.timeouts.get(t);
        r && window.clearTimeout(r);
        const n = window.setTimeout(() => {
            console.info(`Filter (${t}) timed out`), this.deleteFilter(t)
        }, Vp);
        this.timeouts.set(t, n)
    }
    async getCurrentBlockHeight() {
        const t = new Date;
        if (t.getTime() - this.lastFetchTimestamp.getTime() > this.REQUEST_THROTTLE_INTERVAL) {
            this.lastFetchTimestamp = t;
            const r = await this._getCurrentBlockHeight();
            this.currentBlockHeight = r, this.resolvers.forEach(n => n(r)), this.resolvers = []
        }
        return this.currentBlockHeight ? this.currentBlockHeight : new Promise(r => this.resolvers.push(r))
    }
    async _getCurrentBlockHeight() {
        const {
            result: t
        } = await this.sendAsyncPromise(Object.assign(Object.assign({}, vr), {
            method: "eth_blockNumber",
            params: []
        }));
        return (0, nt.intNumberFromHexString)((0, nt.ensureHexString)(t))
    }
    async getBlockHashByNumber(t) {
        const r = await this.sendAsyncPromise(Object.assign(Object.assign({}, vr), {
            method: "eth_getBlockByNumber",
            params: [(0, nt.hexStringFromIntNumber)(t), !1]
        }));
        return r.result && typeof r.result.hash == "string" ? (0, nt.ensureHexString)(r.result.hash) : null
    }
}
hn.FilterPolyfill = qp;

function Bu(e) {
    return {
        fromBlock: wc(e.fromBlock),
        toBlock: wc(e.toBlock),
        addresses: e.address === void 0 ? null : Array.isArray(e.address) ? e.address : [e.address],
        topics: e.topics || []
    }
}
hn.filterFromParam = Bu;

function yc(e) {
    const t = {
        fromBlock: Ec(e.fromBlock),
        toBlock: Ec(e.toBlock),
        topics: e.topics
    };
    return e.addresses !== null && (t.address = e.addresses), t
}

function wc(e) {
    if (e === void 0 || e === "latest" || e === "pending") return "latest";
    if (e === "earliest") return (0, Yr.IntNumber)(0);
    if ((0, nt.isHexString)(e)) return (0, nt.intNumberFromHexString)(e);
    throw new Error(`Invalid block option: ${String(e)}`)
}

function Ec(e) {
    return e === "latest" ? e : (0, nt.hexStringFromIntNumber)(e)
}

function _i() {
    return Object.assign(Object.assign({}, vr), {
        error: {
            code: -32e3,
            message: "filter not found"
        }
    })
}

function mi() {
    return Object.assign(Object.assign({}, vr), {
        result: []
    })
}
var ds = {},
    Du = {},
    fs = {},
    Qo = zp;

function zp(e) {
    e = e || {};
    var t = e.max || Number.MAX_SAFE_INTEGER,
        r = typeof e.start < "u" ? e.start : Math.floor(Math.random() * t);
    return function () {
        return r = r % t, r++
    }
}
const Sc = (e, t) => function () {
    const r = t.promiseModule,
        n = new Array(arguments.length);
    for (let i = 0; i < arguments.length; i++) n[i] = arguments[i];
    return new r((i, s) => {
        t.errorFirst ? n.push(function (a, c) {
            if (t.multiArgs) {
                const l = new Array(arguments.length - 1);
                for (let h = 1; h < arguments.length; h++) l[h - 1] = arguments[h];
                a ? (l.unshift(a), s(l)) : i(l)
            } else a ? s(a) : i(c)
        }) : n.push(function (a) {
            if (t.multiArgs) {
                const c = new Array(arguments.length - 1);
                for (let l = 0; l < arguments.length; l++) c[l] = arguments[l];
                i(c)
            } else i(a)
        }), e.apply(this, n)
    })
};
var Gp = (e, t) => {
        t = Object.assign({
            exclude: [/.+(Sync|Stream)$/],
            errorFirst: !0,
            promiseModule: Promise
        }, t);
        const r = i => {
            const s = a => typeof a == "string" ? i === a : a.test(i);
            return t.include ? t.include.some(s) : !t.exclude.some(s)
        };
        let n;
        typeof e == "function" ? n = function () {
            return t.excludeMain ? e.apply(this, arguments) : Sc(e, t).apply(this, arguments)
        } : n = Object.create(Object.getPrototypeOf(e));
        for (const i in e) {
            const s = e[i];
            n[i] = typeof s == "function" && r(i) ? Sc(s, t) : s
        }
        return n
    },
    ti = {},
    Yo = {};
Object.defineProperty(Yo, "__esModule", {
    value: !0
});
const Jp = Dn;

function Rc(e, t, r) {
    try {
        Reflect.apply(e, t, r)
    } catch (n) {
        setTimeout(() => {
            throw n
        })
    }
}

function Zp(e) {
    const t = e.length,
        r = new Array(t);
    for (let n = 0; n < t; n += 1) r[n] = e[n];
    return r
}
let Kp = class extends Jp.EventEmitter {
    emit(t, ...r) {
        let n = t === "error";
        const i = this._events;
        if (i !== void 0) n = n && i.error === void 0;
        else if (!n) return !1;
        if (n) {
            let a;
            if (r.length > 0 && ([a] = r), a instanceof Error) throw a;
            const c = new Error(`Unhandled error.${a?` (${a.message})`:""}`);
            throw c.context = a, c
        }
        const s = i[t];
        if (s === void 0) return !1;
        if (typeof s == "function") Rc(s, this, r);
        else {
            const a = s.length,
                c = Zp(s);
            for (let l = 0; l < a; l += 1) Rc(c[l], this, r)
        }
        return !0
    }
};
Yo.default = Kp;
var Qp = J && J.__importDefault || function (e) {
    return e && e.__esModule ? e : {
        default: e
    }
};
Object.defineProperty(ti, "__esModule", {
    value: !0
});
ti.BaseBlockTracker = void 0;
const Yp = Qp(Yo),
    Xp = 1e3,
    e1 = (e, t) => e + t,
    Mc = ["sync", "latest"];
class t1 extends Yp.default {
    constructor(t) {
        super(), this._blockResetDuration = t.blockResetDuration || 20 * Xp, this._usePastBlocks = t.usePastBlocks || !1, this._currentBlock = null, this._isRunning = !1, this._onNewListener = this._onNewListener.bind(this), this._onRemoveListener = this._onRemoveListener.bind(this), this._resetCurrentBlock = this._resetCurrentBlock.bind(this), this._setupInternalEvents()
    }
    async destroy() {
        this._cancelBlockResetTimeout(), await this._maybeEnd(), super.removeAllListeners()
    }
    isRunning() {
        return this._isRunning
    }
    getCurrentBlock() {
        return this._currentBlock
    }
    async getLatestBlock() {
        return this._currentBlock ? this._currentBlock : await new Promise(r => this.once("latest", r))
    }
    removeAllListeners(t) {
        return t ? super.removeAllListeners(t) : super.removeAllListeners(), this._setupInternalEvents(), this._onRemoveListener(), this
    }
    _setupInternalEvents() {
        this.removeListener("newListener", this._onNewListener), this.removeListener("removeListener", this._onRemoveListener), this.on("newListener", this._onNewListener), this.on("removeListener", this._onRemoveListener)
    }
    _onNewListener(t) {
        Mc.includes(t) && this._maybeStart()
    }
    _onRemoveListener() {
        this._getBlockTrackerEventCount() > 0 || this._maybeEnd()
    }
    async _maybeStart() {
        this._isRunning || (this._isRunning = !0, this._cancelBlockResetTimeout(), await this._start(), this.emit("_started"))
    }
    async _maybeEnd() {
        this._isRunning && (this._isRunning = !1, this._setupBlockResetTimeout(), await this._end(), this.emit("_ended"))
    }
    _getBlockTrackerEventCount() {
        return Mc.map(t => this.listenerCount(t)).reduce(e1)
    }
    _shouldUseNewBlock(t) {
        const r = this._currentBlock;
        if (!r) return !0;
        const n = Cc(t),
            i = Cc(r);
        return this._usePastBlocks && n < i || n > i
    }
    _newPotentialLatest(t) {
        this._shouldUseNewBlock(t) && this._setCurrentBlock(t)
    }
    _setCurrentBlock(t) {
        const r = this._currentBlock;
        this._currentBlock = t, this.emit("latest", t), this.emit("sync", {
            oldBlock: r,
            newBlock: t
        })
    }
    _setupBlockResetTimeout() {
        this._cancelBlockResetTimeout(), this._blockResetTimeout = setTimeout(this._resetCurrentBlock, this._blockResetDuration), this._blockResetTimeout.unref && this._blockResetTimeout.unref()
    }
    _cancelBlockResetTimeout() {
        this._blockResetTimeout && clearTimeout(this._blockResetTimeout)
    }
    _resetCurrentBlock() {
        this._currentBlock = null
    }
}
ti.BaseBlockTracker = t1;

function Cc(e) {
    return Number.parseInt(e, 16)
}
var Fu = {},
    ju = {},
    tt = {};
class Hu extends TypeError {
    constructor(t, r) {
        let n;
        const {
            message: i,
            explanation: s,
            ...a
        } = t, {
            path: c
        } = t, l = c.length === 0 ? i : `At path: ${c.join(".")} -- ${i}`;
        super(s ? ? l), s != null && (this.cause = l), Object.assign(this, a), this.name = this.constructor.name, this.failures = () => n ? ? (n = [t, ...r()])
    }
}

function r1(e) {
    return mt(e) && typeof e[Symbol.iterator] == "function"
}

function mt(e) {
    return typeof e == "object" && e != null
}

function kc(e) {
    if (Object.prototype.toString.call(e) !== "[object Object]") return !1;
    const t = Object.getPrototypeOf(e);
    return t === null || t === Object.prototype
}

function Ze(e) {
    return typeof e == "symbol" ? e.toString() : typeof e == "string" ? JSON.stringify(e) : `${e}`
}

function n1(e) {
    const {
        done: t,
        value: r
    } = e.next();
    return t ? void 0 : r
}

function i1(e, t, r, n) {
    if (e === !0) return;
    e === !1 ? e = {} : typeof e == "string" && (e = {
        message: e
    });
    const {
        path: i,
        branch: s
    } = t, {
        type: a
    } = r, {
        refinement: c,
        message: l = `Expected a value of type \`${a}\`${c?` with refinement \`${c}\``:""}, but received: \`${Ze(n)}\``
    } = e;
    return {
        value: n,
        type: a,
        refinement: c,
        key: i[i.length - 1],
        path: i,
        branch: s,
        ...e,
        message: l
    }
}

function* ko(e, t, r, n) {
    r1(e) || (e = [e]);
    for (const i of e) {
        const s = i1(i, t, r, n);
        s && (yield s)
    }
}

function* Xo(e, t, r = {}) {
    const {
        path: n = [],
        branch: i = [e],
        coerce: s = !1,
        mask: a = !1
    } = r, c = {
        path: n,
        branch: i
    };
    if (s && (e = t.coercer(e, c), a && t.type !== "type" && mt(t.schema) && mt(e) && !Array.isArray(e)))
        for (const h in e) t.schema[h] === void 0 && delete e[h];
    let l = "valid";
    for (const h of t.validator(e, c)) h.explanation = r.message, l = "not_valid", yield [h, void 0];
    for (let [h, p, f] of t.entries(e, c)) {
        const _ = Xo(p, f, {
            path: h === void 0 ? n : [...n, h],
            branch: h === void 0 ? i : [...i, p],
            coerce: s,
            mask: a,
            message: r.message
        });
        for (const R of _) R[0] ? (l = R[0].refinement != null ? "not_refined" : "not_valid", yield [R[0], void 0]) : s && (p = R[1], h === void 0 ? e = p : e instanceof Map ? e.set(h, p) : e instanceof Set ? e.add(p) : mt(e) && (p !== void 0 || h in e) && (e[h] = p))
    }
    if (l !== "not_valid")
        for (const h of t.refiner(e, c)) h.explanation = r.message, l = "not_refined", yield [h, void 0];
    l === "valid" && (yield [void 0, e])
}
class ze {
    constructor(t) {
        const {
            type: r,
            schema: n,
            validator: i,
            refiner: s,
            coercer: a = l => l,
            entries: c = function* () {}
        } = t;
        this.type = r, this.schema = n, this.entries = c, this.coercer = a, i ? this.validator = (l, h) => {
            const p = i(l, h);
            return ko(p, h, this, l)
        } : this.validator = () => [], s ? this.refiner = (l, h) => {
            const p = s(l, h);
            return ko(p, h, this, l)
        } : this.refiner = () => []
    }
    assert(t, r) {
        return Uu(t, this, r)
    }
    create(t, r) {
        return Wu(t, this, r)
    }
    is(t) {
        return ea(t, this)
    }
    mask(t, r) {
        return Vu(t, this, r)
    }
    validate(t, r = {}) {
        return wn(t, this, r)
    }
}

function Uu(e, t, r) {
    const n = wn(e, t, {
        message: r
    });
    if (n[0]) throw n[0]
}

function Wu(e, t, r) {
    const n = wn(e, t, {
        coerce: !0,
        message: r
    });
    if (n[0]) throw n[0];
    return n[1]
}

function Vu(e, t, r) {
    const n = wn(e, t, {
        coerce: !0,
        mask: !0,
        message: r
    });
    if (n[0]) throw n[0];
    return n[1]
}

function ea(e, t) {
    return !wn(e, t)[0]
}

function wn(e, t, r = {}) {
    const n = Xo(e, t, r),
        i = n1(n);
    return i[0] ? [new Hu(i[0], function* () {
        for (const a of n) a[0] && (yield a[0])
    }), void 0] : [void 0, i[1]]
}

function s1(...e) {
    const t = e[0].type === "type",
        r = e.map(i => i.schema),
        n = Object.assign({}, ...r);
    return t ? ni(n) : ri(n)
}

function at(e, t) {
    return new ze({
        type: e,
        schema: null,
        validator: t
    })
}

function o1(e, t) {
    return new ze({
        ...e,
        refiner: (r, n) => r === void 0 || e.refiner(r, n),
        validator(r, n) {
            return r === void 0 ? !0 : (t(r, n), e.validator(r, n))
        }
    })
}

function a1(e) {
    return new ze({
        type: "dynamic",
        schema: null,
        * entries(t, r) {
            yield* e(t, r).entries(t, r)
        },
        validator(t, r) {
            return e(t, r).validator(t, r)
        },
        coercer(t, r) {
            return e(t, r).coercer(t, r)
        },
        refiner(t, r) {
            return e(t, r).refiner(t, r)
        }
    })
}

function c1(e) {
    let t;
    return new ze({
        type: "lazy",
        schema: null,
        * entries(r, n) {
            t ? ? (t = e()), yield* t.entries(r, n)
        },
        validator(r, n) {
            return t ? ? (t = e()), t.validator(r, n)
        },
        coercer(r, n) {
            return t ? ? (t = e()), t.coercer(r, n)
        },
        refiner(r, n) {
            return t ? ? (t = e()), t.refiner(r, n)
        }
    })
}

function l1(e, t) {
    const {
        schema: r
    } = e, n = {
        ...r
    };
    for (const i of t) delete n[i];
    switch (e.type) {
        case "type":
            return ni(n);
        default:
            return ri(n)
    }
}

function u1(e) {
    const t = e instanceof ze,
        r = t ? {
            ...e.schema
        } : {
            ...e
        };
    for (const n in r) r[n] = qu(r[n]);
    return t && e.type === "type" ? ni(r) : ri(r)
}

function h1(e, t) {
    const {
        schema: r
    } = e, n = {};
    for (const i of t) n[i] = r[i];
    switch (e.type) {
        case "type":
            return ni(n);
        default:
            return ri(n)
    }
}

function d1(e, t) {
    return console.warn("superstruct@0.11 - The `struct` helper has been renamed to `define`."), at(e, t)
}

function f1() {
    return at("any", () => !0)
}

function p1(e) {
    return new ze({
        type: "array",
        schema: e,
        * entries(t) {
            if (e && Array.isArray(t))
                for (const [r, n] of t.entries()) yield [r, n, e]
        },
        coercer(t) {
            return Array.isArray(t) ? t.slice() : t
        },
        validator(t) {
            return Array.isArray(t) || `Expected an array value, but received: ${Ze(t)}`
        }
    })
}

function g1() {
    return at("bigint", e => typeof e == "bigint")
}

function _1() {
    return at("boolean", e => typeof e == "boolean")
}

function m1() {
    return at("date", e => e instanceof Date && !isNaN(e.getTime()) || `Expected a valid \`Date\` object, but received: ${Ze(e)}`)
}

function v1(e) {
    const t = {},
        r = e.map(n => Ze(n)).join();
    for (const n of e) t[n] = n;
    return new ze({
        type: "enums",
        schema: t,
        validator(n) {
            return e.includes(n) || `Expected one of \`${r}\`, but received: ${Ze(n)}`
        }
    })
}

function b1() {
    return at("func", e => typeof e == "function" || `Expected a function, but received: ${Ze(e)}`)
}

function y1(e) {
    return at("instance", t => t instanceof e || `Expected a \`${e.name}\` instance, but received: ${Ze(t)}`)
}

function w1() {
    return at("integer", e => typeof e == "number" && !isNaN(e) && Number.isInteger(e) || `Expected an integer, but received: ${Ze(e)}`)
}

function E1(e) {
    return new ze({
        type: "intersection",
        schema: null,
        * entries(t, r) {
            for (const n of e) yield* n.entries(t, r)
        },
        * validator(t, r) {
            for (const n of e) yield* n.validator(t, r)
        },
        * refiner(t, r) {
            for (const n of e) yield* n.refiner(t, r)
        }
    })
}

function S1(e) {
    const t = Ze(e),
        r = typeof e;
    return new ze({
        type: "literal",
        schema: r === "string" || r === "number" || r === "boolean" ? e : null,
        validator(n) {
            return n === e || `Expected the literal \`${t}\`, but received: ${Ze(n)}`
        }
    })
}

function R1(e, t) {
    return new ze({
        type: "map",
        schema: null,
        * entries(r) {
            if (e && t && r instanceof Map)
                for (const [n, i] of r.entries()) yield [n, n, e], yield [n, i, t]
        },
        coercer(r) {
            return r instanceof Map ? new Map(r) : r
        },
        validator(r) {
            return r instanceof Map || `Expected a \`Map\` object, but received: ${Ze(r)}`
        }
    })
}

function ta() {
    return at("never", () => !1)
}

function M1(e) {
    return new ze({
        ...e,
        validator: (t, r) => t === null || e.validator(t, r),
        refiner: (t, r) => t === null || e.refiner(t, r)
    })
}

function C1() {
    return at("number", e => typeof e == "number" && !isNaN(e) || `Expected a number, but received: ${Ze(e)}`)
}

function ri(e) {
    const t = e ? Object.keys(e) : [],
        r = ta();
    return new ze({
        type: "object",
        schema: e || null,
        * entries(n) {
            if (e && mt(n)) {
                const i = new Set(Object.keys(n));
                for (const s of t) i.delete(s), yield [s, n[s], e[s]];
                for (const s of i) yield [s, n[s], r]
            }
        },
        validator(n) {
            return mt(n) || `Expected an object, but received: ${Ze(n)}`
        },
        coercer(n) {
            return mt(n) ? {
                ...n
            } : n
        }
    })
}

function qu(e) {
    return new ze({
        ...e,
        validator: (t, r) => t === void 0 || e.validator(t, r),
        refiner: (t, r) => t === void 0 || e.refiner(t, r)
    })
}

function k1(e, t) {
    return new ze({
        type: "record",
        schema: null,
        * entries(r) {
            if (mt(r))
                for (const n in r) {
                    const i = r[n];
                    yield [n, n, e], yield [n, i, t]
                }
        },
        validator(r) {
            return mt(r) || `Expected an object, but received: ${Ze(r)}`
        }
    })
}

function I1() {
    return at("regexp", e => e instanceof RegExp)
}

function x1(e) {
    return new ze({
        type: "set",
        schema: null,
        * entries(t) {
            if (e && t instanceof Set)
                for (const r of t) yield [r, r, e]
        },
        coercer(t) {
            return t instanceof Set ? new Set(t) : t
        },
        validator(t) {
            return t instanceof Set || `Expected a \`Set\` object, but received: ${Ze(t)}`
        }
    })
}

function zu() {
    return at("string", e => typeof e == "string" || `Expected a string, but received: ${Ze(e)}`)
}

function A1(e) {
    const t = ta();
    return new ze({
        type: "tuple",
        schema: null,
        * entries(r) {
            if (Array.isArray(r)) {
                const n = Math.max(e.length, r.length);
                for (let i = 0; i < n; i++) yield [i, r[i], e[i] || t]
            }
        },
        validator(r) {
            return Array.isArray(r) || `Expected an array, but received: ${Ze(r)}`
        }
    })
}

function ni(e) {
    const t = Object.keys(e);
    return new ze({
        type: "type",
        schema: e,
        * entries(r) {
            if (mt(r))
                for (const n of t) yield [n, r[n], e[n]]
        },
        validator(r) {
            return mt(r) || `Expected an object, but received: ${Ze(r)}`
        },
        coercer(r) {
            return mt(r) ? {
                ...r
            } : r
        }
    })
}

function N1(e) {
    const t = e.map(r => r.type).join(" | ");
    return new ze({
        type: "union",
        schema: null,
        coercer(r) {
            for (const n of e) {
                const [i, s] = n.validate(r, {
                    coerce: !0
                });
                if (!i) return s
            }
            return r
        },
        validator(r, n) {
            const i = [];
            for (const s of e) {
                const [...a] = Xo(r, s, n), [c] = a;
                if (c[0])
                    for (const [l] of a) l && i.push(l);
                else return []
            }
            return [`Expected the value to satisfy a union of \`${t}\`, but received: ${Ze(r)}`, ...i]
        }
    })
}

function Gu() {
    return at("unknown", () => !0)
}

function ra(e, t, r) {
    return new ze({
        ...e,
        coercer: (n, i) => ea(n, t) ? e.coercer(r(n, i), i) : e.coercer(n, i)
    })
}

function T1(e, t, r = {}) {
    return ra(e, Gu(), n => {
        const i = typeof t == "function" ? t() : t;
        if (n === void 0) return i;
        if (!r.strict && kc(n) && kc(i)) {
            const s = {
                ...n
            };
            let a = !1;
            for (const c in i) s[c] === void 0 && (s[c] = i[c], a = !0);
            if (a) return s
        }
        return n
    })
}

function L1(e) {
    return ra(e, zu(), t => t.trim())
}

function P1(e) {
    return Tr(e, "empty", t => {
        const r = Ju(t);
        return r === 0 || `Expected an empty ${e.type} but received one with a size of \`${r}\``
    })
}

function Ju(e) {
    return e instanceof Map || e instanceof Set ? e.size : e.length
}

function O1(e, t, r = {}) {
    const {
        exclusive: n
    } = r;
    return Tr(e, "max", i => n ? i < t : i <= t || `Expected a ${e.type} less than ${n?"":"or equal to "}${t} but received \`${i}\``)
}

function $1(e, t, r = {}) {
    const {
        exclusive: n
    } = r;
    return Tr(e, "min", i => n ? i > t : i >= t || `Expected a ${e.type} greater than ${n?"":"or equal to "}${t} but received \`${i}\``)
}

function B1(e) {
    return Tr(e, "nonempty", t => Ju(t) > 0 || `Expected a nonempty ${e.type} but received an empty one`)
}

function D1(e, t) {
    return Tr(e, "pattern", r => t.test(r) || `Expected a ${e.type} matching \`/${t.source}/\` but received "${r}"`)
}

function F1(e, t, r = t) {
    const n = `Expected a ${e.type}`,
        i = t === r ? `of \`${t}\`` : `between \`${t}\` and \`${r}\``;
    return Tr(e, "size", s => {
        if (typeof s == "number" || s instanceof Date) return t <= s && s <= r || `${n} ${i} but received \`${s}\``;
        if (s instanceof Map || s instanceof Set) {
            const {
                size: a
            } = s;
            return t <= a && a <= r || `${n} with a size ${i} but received one with a size of \`${a}\``
        } else {
            const {
                length: a
            } = s;
            return t <= a && a <= r || `${n} with a length ${i} but received one with a length of \`${a}\``
        }
    })
}

function Tr(e, t, r) {
    return new ze({
        ...e,
        * refiner(n, i) {
            yield* e.refiner(n, i);
            const s = r(n, i),
                a = ko(s, i, e, n);
            for (const c of a) yield {
                ...c,
                refinement: t
            }
        }
    })
}
const j1 = Object.freeze(Object.defineProperty({
        __proto__: null,
        Struct: ze,
        StructError: Hu,
        any: f1,
        array: p1,
        assert: Uu,
        assign: s1,
        bigint: g1,
        boolean: _1,
        coerce: ra,
        create: Wu,
        date: m1,
        defaulted: T1,
        define: at,
        deprecated: o1,
        dynamic: a1,
        empty: P1,
        enums: v1,
        func: b1,
        instance: y1,
        integer: w1,
        intersection: E1,
        is: ea,
        lazy: c1,
        literal: S1,
        map: R1,
        mask: Vu,
        max: O1,
        min: $1,
        never: ta,
        nonempty: B1,
        nullable: M1,
        number: C1,
        object: ri,
        omit: l1,
        optional: qu,
        partial: u1,
        pattern: D1,
        pick: h1,
        record: k1,
        refine: Tr,
        regexp: I1,
        set: x1,
        size: F1,
        string: zu,
        struct: d1,
        trimmed: L1,
        tuple: A1,
        type: ni,
        union: N1,
        unknown: Gu,
        validate: wn
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Lr = pn(j1);
Object.defineProperty(tt, "__esModule", {
    value: !0
});
tt.assertExhaustive = tt.assertStruct = tt.assert = tt.AssertionError = void 0;
const H1 = Lr;

function U1(e) {
    return typeof e == "object" && e !== null && "message" in e
}

function W1(e) {
    var t, r;
    return typeof ((r = (t = e == null ? void 0 : e.prototype) === null || t === void 0 ? void 0 : t.constructor) === null || r === void 0 ? void 0 : r.name) == "string"
}

function V1(e) {
    const t = U1(e) ? e.message : String(e);
    return t.endsWith(".") ? t.slice(0, -1) : t
}

function Zu(e, t) {
    return W1(e) ? new e({
        message: t
    }) : e({
        message: t
    })
}
class na extends Error {
    constructor(t) {
        super(t.message), this.code = "ERR_ASSERTION"
    }
}
tt.AssertionError = na;

function q1(e, t = "Assertion failed.", r = na) {
    if (!e) throw t instanceof Error ? t : Zu(r, t)
}
tt.assert = q1;

function z1(e, t, r = "Assertion failed", n = na) {
    try {
        (0, H1.assert)(e, t)
    } catch (i) {
        throw Zu(n, `${r}: ${V1(i)}.`)
    }
}
tt.assertStruct = z1;

function G1(e) {
    throw new Error("Invalid branch reached. Should be detected during compilation.")
}
tt.assertExhaustive = G1;
var ii = {};
Object.defineProperty(ii, "__esModule", {
    value: !0
});
ii.base64 = void 0;
const J1 = Lr,
    Z1 = tt,
    K1 = (e, t = {}) => {
        var r, n;
        const i = (r = t.paddingRequired) !== null && r !== void 0 ? r : !1,
            s = (n = t.characterSet) !== null && n !== void 0 ? n : "base64";
        let a;
        s === "base64" ? a = String.raw `[A-Za-z0-9+\/]` : ((0, Z1.assert)(s === "base64url"), a = String.raw `[-_A-Za-z0-9]`);
        let c;
        return i ? c = new RegExp(`^(?:${a}{4})*(?:${a}{3}=|${a}{2}==)?$`, "u") : c = new RegExp(`^(?:${a}{4})*(?:${a}{2,3}|${a}{3}=|${a}{2}==)?$`, "u"), (0, J1.pattern)(e, c)
    };
ii.base64 = K1;
var ae = {},
    si = {};
(function (e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.remove0x = e.add0x = e.assertIsStrictHexString = e.assertIsHexString = e.isStrictHexString = e.isHexString = e.StrictHexStruct = e.HexStruct = void 0;
    const t = Lr,
        r = tt;
    e.HexStruct = (0, t.pattern)((0, t.string)(), /^(?:0x)?[0-9a-f]+$/iu), e.StrictHexStruct = (0, t.pattern)((0, t.string)(), /^0x[0-9a-f]+$/iu);

    function n(h) {
        return (0, t.is)(h, e.HexStruct)
    }
    e.isHexString = n;

    function i(h) {
        return (0, t.is)(h, e.StrictHexStruct)
    }
    e.isStrictHexString = i;

    function s(h) {
        (0, r.assert)(n(h), "Value must be a hexadecimal string.")
    }
    e.assertIsHexString = s;

    function a(h) {
        (0, r.assert)(i(h), 'Value must be a hexadecimal string, starting with "0x".')
    }
    e.assertIsStrictHexString = a;

    function c(h) {
        return h.startsWith("0x") ? h : h.startsWith("0X") ? `0x${h.substring(2)}` : `0x${h}`
    }
    e.add0x = c;

    function l(h) {
        return h.startsWith("0x") || h.startsWith("0X") ? h.substring(2) : h
    }
    e.remove0x = l
})(si);
Object.defineProperty(ae, "__esModule", {
    value: !0
});
ae.createDataView = ae.concatBytes = ae.valueToBytes = ae.stringToBytes = ae.numberToBytes = ae.signedBigIntToBytes = ae.bigIntToBytes = ae.hexToBytes = ae.bytesToString = ae.bytesToNumber = ae.bytesToSignedBigInt = ae.bytesToBigInt = ae.bytesToHex = ae.assertIsBytes = ae.isBytes = void 0;
const ht = tt,
    Io = si,
    Ic = 48,
    xc = 58,
    Ac = 87;

function Q1() {
    const e = [];
    return () => {
        if (e.length === 0)
            for (let t = 0; t < 256; t++) e.push(t.toString(16).padStart(2, "0"));
        return e
    }
}
const Y1 = Q1();

function ia(e) {
    return e instanceof Uint8Array
}
ae.isBytes = ia;

function En(e) {
    (0, ht.assert)(ia(e), "Value must be a Uint8Array.")
}
ae.assertIsBytes = En;

function Ku(e) {
    if (En(e), e.length === 0) return "0x";
    const t = Y1(),
        r = new Array(e.length);
    for (let n = 0; n < e.length; n++) r[n] = t[e[n]];
    return (0, Io.add0x)(r.join(""))
}
ae.bytesToHex = Ku;

function Qu(e) {
    En(e);
    const t = Ku(e);
    return BigInt(t)
}
ae.bytesToBigInt = Qu;

function X1(e) {
    En(e);
    let t = BigInt(0);
    for (const r of e) t = (t << BigInt(8)) + BigInt(r);
    return BigInt.asIntN(e.length * 8, t)
}
ae.bytesToSignedBigInt = X1;

function eg(e) {
    En(e);
    const t = Qu(e);
    return (0, ht.assert)(t <= BigInt(Number.MAX_SAFE_INTEGER), "Number is not a safe integer. Use `bytesToBigInt` instead."), Number(t)
}
ae.bytesToNumber = eg;

function tg(e) {
    return En(e), new TextDecoder().decode(e)
}
ae.bytesToString = tg;

function ps(e) {
    var t;
    if (((t = e == null ? void 0 : e.toLowerCase) === null || t === void 0 ? void 0 : t.call(e)) === "0x") return new Uint8Array;
    (0, Io.assertIsHexString)(e);
    const r = (0, Io.remove0x)(e).toLowerCase(),
        n = r.length % 2 === 0 ? r : `0${r}`,
        i = new Uint8Array(n.length / 2);
    for (let s = 0; s < i.length; s++) {
        const a = n.charCodeAt(s * 2),
            c = n.charCodeAt(s * 2 + 1),
            l = a - (a < xc ? Ic : Ac),
            h = c - (c < xc ? Ic : Ac);
        i[s] = l * 16 + h
    }
    return i
}
ae.hexToBytes = ps;

function Yu(e) {
    (0, ht.assert)(typeof e == "bigint", "Value must be a bigint."), (0, ht.assert)(e >= BigInt(0), "Value must be a non-negative bigint.");
    const t = e.toString(16);
    return ps(t)
}
ae.bigIntToBytes = Yu;

function rg(e, t) {
    (0, ht.assert)(t > 0);
    const r = e >> BigInt(31);
    return !((~e & r) + (e & ~r) >> BigInt(t * 8 + -1))
}

function ng(e, t) {
    (0, ht.assert)(typeof e == "bigint", "Value must be a bigint."), (0, ht.assert)(typeof t == "number", "Byte length must be a number."), (0, ht.assert)(t > 0, "Byte length must be greater than 0."), (0, ht.assert)(rg(e, t), "Byte length is too small to represent the given value.");
    let r = e;
    const n = new Uint8Array(t);
    for (let i = 0; i < n.length; i++) n[i] = Number(BigInt.asUintN(8, r)), r >>= BigInt(8);
    return n.reverse()
}
ae.signedBigIntToBytes = ng;

function Xu(e) {
    (0, ht.assert)(typeof e == "number", "Value must be a number."), (0, ht.assert)(e >= 0, "Value must be a non-negative number."), (0, ht.assert)(Number.isSafeInteger(e), "Value is not a safe integer. Use `bigIntToBytes` instead.");
    const t = e.toString(16);
    return ps(t)
}
ae.numberToBytes = Xu;

function eh(e) {
    return (0, ht.assert)(typeof e == "string", "Value must be a string."), new TextEncoder().encode(e)
}
ae.stringToBytes = eh;

function th(e) {
    if (typeof e == "bigint") return Yu(e);
    if (typeof e == "number") return Xu(e);
    if (typeof e == "string") return e.startsWith("0x") ? ps(e) : eh(e);
    if (ia(e)) return e;
    throw new TypeError(`Unsupported value type: "${typeof e}".`)
}
ae.valueToBytes = th;

function ig(e) {
    const t = new Array(e.length);
    let r = 0;
    for (let i = 0; i < e.length; i++) {
        const s = th(e[i]);
        t[i] = s, r += s.length
    }
    const n = new Uint8Array(r);
    for (let i = 0, s = 0; i < t.length; i++) n.set(t[i], s), s += t[i].length;
    return n
}
ae.concatBytes = ig;

function sg(e) {
    if (typeof Buffer < "u" && e instanceof Buffer) {
        const t = e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
        return new DataView(t)
    }
    return new DataView(e.buffer, e.byteOffset, e.byteLength)
}
ae.createDataView = sg;
var gs = {};
Object.defineProperty(gs, "__esModule", {
    value: !0
});
gs.ChecksumStruct = void 0;
const Nc = Lr,
    og = ii;
gs.ChecksumStruct = (0, Nc.size)((0, og.base64)((0, Nc.string)(), {
    paddingRequired: !0
}), 44, 44);
var Lt = {};
Object.defineProperty(Lt, "__esModule", {
    value: !0
});
Lt.createHex = Lt.createBytes = Lt.createBigInt = Lt.createNumber = void 0;
const qe = Lr,
    ag = tt,
    rh = ae,
    _s = si,
    nh = (0, qe.union)([(0, qe.number)(), (0, qe.bigint)(), (0, qe.string)(), _s.StrictHexStruct]),
    cg = (0, qe.coerce)((0, qe.number)(), nh, Number),
    lg = (0, qe.coerce)((0, qe.bigint)(), nh, BigInt);
(0, qe.union)([_s.StrictHexStruct, (0, qe.instance)(Uint8Array)]);
const ug = (0, qe.coerce)((0, qe.instance)(Uint8Array), (0, qe.union)([_s.StrictHexStruct]), rh.hexToBytes),
    hg = (0, qe.coerce)(_s.StrictHexStruct, (0, qe.instance)(Uint8Array), rh.bytesToHex);

function dg(e) {
    try {
        const t = (0, qe.create)(e, cg);
        return (0, ag.assert)(Number.isFinite(t), `Expected a number-like value, got "${e}".`), t
    } catch (t) {
        throw t instanceof qe.StructError ? new Error(`Expected a number-like value, got "${e}".`) : t
    }
}
Lt.createNumber = dg;

function fg(e) {
    try {
        return (0, qe.create)(e, lg)
    } catch (t) {
        throw t instanceof qe.StructError ? new Error(`Expected a number-like value, got "${String(t.value)}".`) : t
    }
}
Lt.createBigInt = fg;

function pg(e) {
    if (typeof e == "string" && e.toLowerCase() === "0x") return new Uint8Array;
    try {
        return (0, qe.create)(e, ug)
    } catch (t) {
        throw t instanceof qe.StructError ? new Error(`Expected a bytes-like value, got "${String(t.value)}".`) : t
    }
}
Lt.createBytes = pg;

function gg(e) {
    if (e instanceof Uint8Array && e.length === 0 || typeof e == "string" && e.toLowerCase() === "0x") return "0x";
    try {
        return (0, qe.create)(e, hg)
    } catch (t) {
        throw t instanceof qe.StructError ? new Error(`Expected a bytes-like value, got "${String(t.value)}".`) : t
    }
}
Lt.createHex = gg;
var dn = {},
    ih = J && J.__classPrivateFieldSet || function (e, t, r, n, i) {
        if (n === "m") throw new TypeError("Private method is not writable");
        if (n === "a" && !i) throw new TypeError("Private accessor was defined without a setter");
        if (typeof t == "function" ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return n === "a" ? i.call(e, r) : i ? i.value = r : t.set(e, r), r
    },
    it = J && J.__classPrivateFieldGet || function (e, t, r, n) {
        if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
        if (typeof t == "function" ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e)
    },
    bt, kt;
Object.defineProperty(dn, "__esModule", {
    value: !0
});
dn.FrozenSet = dn.FrozenMap = void 0;
class sa {
    constructor(t) {
        bt.set(this, void 0), ih(this, bt, new Map(t), "f"), Object.freeze(this)
    }
    get size() {
        return it(this, bt, "f").size
    } [(bt = new WeakMap, Symbol.iterator)]() {
        return it(this, bt, "f")[Symbol.iterator]()
    }
    entries() {
        return it(this, bt, "f").entries()
    }
    forEach(t, r) {
        return it(this, bt, "f").forEach((n, i, s) => t.call(r, n, i, this))
    }
    get(t) {
        return it(this, bt, "f").get(t)
    }
    has(t) {
        return it(this, bt, "f").has(t)
    }
    keys() {
        return it(this, bt, "f").keys()
    }
    values() {
        return it(this, bt, "f").values()
    }
    toString() {
        return `FrozenMap(${this.size}) {${this.size>0?` ${[...this.entries()].map(([t,r])=>`${String(t)} => ${String(r)}`).join(", ")} `:""}}`
    }
}
dn.FrozenMap = sa;
class oa {
    constructor(t) {
        kt.set(this, void 0), ih(this, kt, new Set(t), "f"), Object.freeze(this)
    }
    get size() {
        return it(this, kt, "f").size
    } [(kt = new WeakMap, Symbol.iterator)]() {
        return it(this, kt, "f")[Symbol.iterator]()
    }
    entries() {
        return it(this, kt, "f").entries()
    }
    forEach(t, r) {
        return it(this, kt, "f").forEach((n, i, s) => t.call(r, n, i, this))
    }
    has(t) {
        return it(this, kt, "f").has(t)
    }
    keys() {
        return it(this, kt, "f").keys()
    }
    values() {
        return it(this, kt, "f").values()
    }
    toString() {
        return `FrozenSet(${this.size}) {${this.size>0?` ${[...this.values()].map(t=>String(t)).join(", ")} `:""}}`
    }
}
dn.FrozenSet = oa;
Object.freeze(sa);
Object.freeze(sa.prototype);
Object.freeze(oa);
Object.freeze(oa.prototype);
var sh = {};
Object.defineProperty(sh, "__esModule", {
    value: !0
});
var oh = {};
(function (e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getJsonRpcIdValidator = e.assertIsJsonRpcError = e.isJsonRpcError = e.assertIsJsonRpcFailure = e.isJsonRpcFailure = e.assertIsJsonRpcSuccess = e.isJsonRpcSuccess = e.assertIsJsonRpcResponse = e.isJsonRpcResponse = e.assertIsPendingJsonRpcResponse = e.isPendingJsonRpcResponse = e.JsonRpcResponseStruct = e.JsonRpcFailureStruct = e.JsonRpcSuccessStruct = e.PendingJsonRpcResponseStruct = e.assertIsJsonRpcRequest = e.isJsonRpcRequest = e.assertIsJsonRpcNotification = e.isJsonRpcNotification = e.JsonRpcNotificationStruct = e.JsonRpcRequestStruct = e.JsonRpcParamsStruct = e.JsonRpcErrorStruct = e.JsonRpcIdStruct = e.JsonRpcVersionStruct = e.jsonrpc2 = e.getJsonSize = e.isValidJson = e.JsonStruct = e.UnsafeJsonStruct = void 0;
    const t = Lr,
        r = tt,
        n = () => (0, t.define)("finite number", P => (0, t.is)(P, (0, t.number)()) && Number.isFinite(P));
    e.UnsafeJsonStruct = (0, t.union)([(0, t.literal)(null), (0, t.boolean)(), n(), (0, t.string)(), (0, t.array)((0, t.lazy)(() => e.UnsafeJsonStruct)), (0, t.record)((0, t.string)(), (0, t.lazy)(() => e.UnsafeJsonStruct))]), e.JsonStruct = (0, t.define)("Json", (P, D) => {
        function G(V, H) {
            const Q = [...H.validator(V, D)];
            return Q.length > 0 ? Q : !0
        }
        try {
            const V = G(P, e.UnsafeJsonStruct);
            return V !== !0 ? V : G(JSON.parse(JSON.stringify(P)), e.UnsafeJsonStruct)
        } catch (V) {
            return V instanceof RangeError ? "Circular reference detected" : !1
        }
    });

    function i(P) {
        return (0, t.is)(P, e.JsonStruct)
    }
    e.isValidJson = i;

    function s(P) {
        (0, r.assertStruct)(P, e.JsonStruct, "Invalid JSON value");
        const D = JSON.stringify(P);
        return new TextEncoder().encode(D).byteLength
    }
    e.getJsonSize = s, e.jsonrpc2 = "2.0", e.JsonRpcVersionStruct = (0, t.literal)(e.jsonrpc2), e.JsonRpcIdStruct = (0, t.nullable)((0, t.union)([(0, t.number)(), (0, t.string)()])), e.JsonRpcErrorStruct = (0, t.object)({
        code: (0, t.integer)(),
        message: (0, t.string)(),
        data: (0, t.optional)(e.JsonStruct),
        stack: (0, t.optional)((0, t.string)())
    }), e.JsonRpcParamsStruct = (0, t.optional)((0, t.union)([(0, t.record)((0, t.string)(), e.JsonStruct), (0, t.array)(e.JsonStruct)])), e.JsonRpcRequestStruct = (0, t.object)({
        id: e.JsonRpcIdStruct,
        jsonrpc: e.JsonRpcVersionStruct,
        method: (0, t.string)(),
        params: e.JsonRpcParamsStruct
    }), e.JsonRpcNotificationStruct = (0, t.omit)(e.JsonRpcRequestStruct, ["id"]);

    function a(P) {
        return (0, t.is)(P, e.JsonRpcNotificationStruct)
    }
    e.isJsonRpcNotification = a;

    function c(P, D) {
        (0, r.assertStruct)(P, e.JsonRpcNotificationStruct, "Invalid JSON-RPC notification", D)
    }
    e.assertIsJsonRpcNotification = c;

    function l(P) {
        return (0, t.is)(P, e.JsonRpcRequestStruct)
    }
    e.isJsonRpcRequest = l;

    function h(P, D) {
        (0, r.assertStruct)(P, e.JsonRpcRequestStruct, "Invalid JSON-RPC request", D)
    }
    e.assertIsJsonRpcRequest = h, e.PendingJsonRpcResponseStruct = (0, t.object)({
        id: e.JsonRpcIdStruct,
        jsonrpc: e.JsonRpcVersionStruct,
        result: (0, t.optional)((0, t.unknown)()),
        error: (0, t.optional)(e.JsonRpcErrorStruct)
    }), e.JsonRpcSuccessStruct = (0, t.object)({
        id: e.JsonRpcIdStruct,
        jsonrpc: e.JsonRpcVersionStruct,
        result: e.JsonStruct
    }), e.JsonRpcFailureStruct = (0, t.object)({
        id: e.JsonRpcIdStruct,
        jsonrpc: e.JsonRpcVersionStruct,
        error: e.JsonRpcErrorStruct
    }), e.JsonRpcResponseStruct = (0, t.union)([e.JsonRpcSuccessStruct, e.JsonRpcFailureStruct]);

    function p(P) {
        return (0, t.is)(P, e.PendingJsonRpcResponseStruct)
    }
    e.isPendingJsonRpcResponse = p;

    function f(P, D) {
        (0, r.assertStruct)(P, e.PendingJsonRpcResponseStruct, "Invalid pending JSON-RPC response", D)
    }
    e.assertIsPendingJsonRpcResponse = f;

    function _(P) {
        return (0, t.is)(P, e.JsonRpcResponseStruct)
    }
    e.isJsonRpcResponse = _;

    function R(P, D) {
        (0, r.assertStruct)(P, e.JsonRpcResponseStruct, "Invalid JSON-RPC response", D)
    }
    e.assertIsJsonRpcResponse = R;

    function A(P) {
        return (0, t.is)(P, e.JsonRpcSuccessStruct)
    }
    e.isJsonRpcSuccess = A;

    function O(P, D) {
        (0, r.assertStruct)(P, e.JsonRpcSuccessStruct, "Invalid JSON-RPC success response", D)
    }
    e.assertIsJsonRpcSuccess = O;

    function L(P) {
        return (0, t.is)(P, e.JsonRpcFailureStruct)
    }
    e.isJsonRpcFailure = L;

    function M(P, D) {
        (0, r.assertStruct)(P, e.JsonRpcFailureStruct, "Invalid JSON-RPC failure response", D)
    }
    e.assertIsJsonRpcFailure = M;

    function k(P) {
        return (0, t.is)(P, e.JsonRpcErrorStruct)
    }
    e.isJsonRpcError = k;

    function T(P, D) {
        (0, r.assertStruct)(P, e.JsonRpcErrorStruct, "Invalid JSON-RPC error", D)
    }
    e.assertIsJsonRpcError = T;

    function $(P) {
        const {
            permitEmptyString: D,
            permitFractions: G,
            permitNull: V
        } = Object.assign({
            permitEmptyString: !0,
            permitFractions: !1,
            permitNull: !0
        }, P);
        return X => !!(typeof X == "number" && (G || Number.isInteger(X)) || typeof X == "string" && (D || X.length > 0) || V && X === null)
    }
    e.getJsonRpcIdValidator = $
})(oh);
var ah = {};
Object.defineProperty(ah, "__esModule", {
    value: !0
});
var fn = {},
    xo = {
        exports: {}
    },
    ro, Tc;

function _g() {
    if (Tc) return ro;
    Tc = 1;
    var e = 1e3,
        t = e * 60,
        r = t * 60,
        n = r * 24,
        i = n * 7,
        s = n * 365.25;
    ro = function (p, f) {
        f = f || {};
        var _ = typeof p;
        if (_ === "string" && p.length > 0) return a(p);
        if (_ === "number" && isFinite(p)) return f.long ? l(p) : c(p);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(p))
    };

    function a(p) {
        if (p = String(p), !(p.length > 100)) {
            var f = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(p);
            if (f) {
                var _ = parseFloat(f[1]),
                    R = (f[2] || "ms").toLowerCase();
                switch (R) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                        return _ * s;
                    case "weeks":
                    case "week":
                    case "w":
                        return _ * i;
                    case "days":
                    case "day":
                    case "d":
                        return _ * n;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                        return _ * r;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                        return _ * t;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                        return _ * e;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                        return _;
                    default:
                        return
                }
            }
        }
    }

    function c(p) {
        var f = Math.abs(p);
        return f >= n ? Math.round(p / n) + "d" : f >= r ? Math.round(p / r) + "h" : f >= t ? Math.round(p / t) + "m" : f >= e ? Math.round(p / e) + "s" : p + "ms"
    }

    function l(p) {
        var f = Math.abs(p);
        return f >= n ? h(p, f, n, "day") : f >= r ? h(p, f, r, "hour") : f >= t ? h(p, f, t, "minute") : f >= e ? h(p, f, e, "second") : p + " ms"
    }

    function h(p, f, _, R) {
        var A = f >= _ * 1.5;
        return Math.round(p / _) + " " + R + (A ? "s" : "")
    }
    return ro
}

function mg(e) {
    r.debug = r, r.default = r, r.coerce = l, r.disable = s, r.enable = i, r.enabled = a, r.humanize = _g(), r.destroy = h, Object.keys(e).forEach(p => {
        r[p] = e[p]
    }), r.names = [], r.skips = [], r.formatters = {};

    function t(p) {
        let f = 0;
        for (let _ = 0; _ < p.length; _++) f = (f << 5) - f + p.charCodeAt(_), f |= 0;
        return r.colors[Math.abs(f) % r.colors.length]
    }
    r.selectColor = t;

    function r(p) {
        let f, _ = null,
            R, A;

        function O(...L) {
            if (!O.enabled) return;
            const M = O,
                k = Number(new Date),
                T = k - (f || k);
            M.diff = T, M.prev = f, M.curr = k, f = k, L[0] = r.coerce(L[0]), typeof L[0] != "string" && L.unshift("%O");
            let $ = 0;
            L[0] = L[0].replace(/%([a-zA-Z%])/g, (D, G) => {
                if (D === "%%") return "%";
                $++;
                const V = r.formatters[G];
                if (typeof V == "function") {
                    const H = L[$];
                    D = V.call(M, H), L.splice($, 1), $--
                }
                return D
            }), r.formatArgs.call(M, L), (M.log || r.log).apply(M, L)
        }
        return O.namespace = p, O.useColors = r.useColors(), O.color = r.selectColor(p), O.extend = n, O.destroy = r.destroy, Object.defineProperty(O, "enabled", {
            enumerable: !0,
            configurable: !1,
            get: () => _ !== null ? _ : (R !== r.namespaces && (R = r.namespaces, A = r.enabled(p)), A),
            set: L => {
                _ = L
            }
        }), typeof r.init == "function" && r.init(O), O
    }

    function n(p, f) {
        const _ = r(this.namespace + (typeof f > "u" ? ":" : f) + p);
        return _.log = this.log, _
    }

    function i(p) {
        r.save(p), r.namespaces = p, r.names = [], r.skips = [];
        let f;
        const _ = (typeof p == "string" ? p : "").split(/[\s,]+/),
            R = _.length;
        for (f = 0; f < R; f++) _[f] && (p = _[f].replace(/\*/g, ".*?"), p[0] === "-" ? r.skips.push(new RegExp("^" + p.slice(1) + "$")) : r.names.push(new RegExp("^" + p + "$")))
    }

    function s() {
        const p = [...r.names.map(c), ...r.skips.map(c).map(f => "-" + f)].join(",");
        return r.enable(""), p
    }

    function a(p) {
        if (p[p.length - 1] === "*") return !0;
        let f, _;
        for (f = 0, _ = r.skips.length; f < _; f++)
            if (r.skips[f].test(p)) return !1;
        for (f = 0, _ = r.names.length; f < _; f++)
            if (r.names[f].test(p)) return !0;
        return !1
    }

    function c(p) {
        return p.toString().substring(2, p.toString().length - 2).replace(/\.\*\?$/, "*")
    }

    function l(p) {
        return p instanceof Error ? p.stack || p.message : p
    }

    function h() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")
    }
    return r.enable(r.load()), r
}
var vg = mg;
(function (e, t) {
    var r = {};
    t.formatArgs = i, t.save = s, t.load = a, t.useColors = n, t.storage = c(), t.destroy = (() => {
        let h = !1;
        return () => {
            h || (h = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))
        }
    })(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];

    function n() {
        return typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs) ? !0 : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
    }

    function i(h) {
        if (h[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + h[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors) return;
        const p = "color: " + this.color;
        h.splice(1, 0, p, "color: inherit");
        let f = 0,
            _ = 0;
        h[0].replace(/%[a-zA-Z%]/g, R => {
            R !== "%%" && (f++, R === "%c" && (_ = f))
        }), h.splice(_, 0, p)
    }
    t.log = console.debug || console.log || (() => {});

    function s(h) {
        try {
            h ? t.storage.setItem("debug", h) : t.storage.removeItem("debug")
        } catch {}
    }

    function a() {
        let h;
        try {
            h = t.storage.getItem("debug")
        } catch {}
        return !h && typeof process < "u" && "env" in process && (h = r.DEBUG), h
    }

    function c() {
        try {
            return localStorage
        } catch {}
    }
    e.exports = vg(t);
    const {
        formatters: l
    } = e.exports;
    l.j = function (h) {
        try {
            return JSON.stringify(h)
        } catch (p) {
            return "[UnexpectedJSONParseError]: " + p.message
        }
    }
})(xo, xo.exports);
var bg = xo.exports,
    yg = J && J.__importDefault || function (e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
Object.defineProperty(fn, "__esModule", {
    value: !0
});
fn.createModuleLogger = fn.createProjectLogger = void 0;
const wg = yg(bg),
    Eg = (0, wg.default)("metamask");

function Sg(e) {
    return Eg.extend(e)
}
fn.createProjectLogger = Sg;

function Rg(e, t) {
    return e.extend(t)
}
fn.createModuleLogger = Rg;
var ch = {};
(function (e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.calculateNumberSize = e.calculateStringSize = e.isASCII = e.isPlainObject = e.ESCAPE_CHARACTERS_REGEXP = e.JsonSize = e.hasProperty = e.isObject = e.isNullOrUndefined = e.isNonEmptyArray = void 0;

    function t(h) {
        return Array.isArray(h) && h.length > 0
    }
    e.isNonEmptyArray = t;

    function r(h) {
        return h == null
    }
    e.isNullOrUndefined = r;

    function n(h) {
        return !!h && typeof h == "object" && !Array.isArray(h)
    }
    e.isObject = n;
    const i = (h, p) => Object.hasOwnProperty.call(h, p);
    e.hasProperty = i,
        function (h) {
            h[h.Null = 4] = "Null", h[h.Comma = 1] = "Comma", h[h.Wrapper = 1] = "Wrapper", h[h.True = 4] = "True", h[h.False = 5] = "False", h[h.Quote = 1] = "Quote", h[h.Colon = 1] = "Colon", h[h.Date = 24] = "Date"
        }(e.JsonSize || (e.JsonSize = {})), e.ESCAPE_CHARACTERS_REGEXP = /"|\\|\n|\r|\t/gu;

    function s(h) {
        if (typeof h != "object" || h === null) return !1;
        try {
            let p = h;
            for (; Object.getPrototypeOf(p) !== null;) p = Object.getPrototypeOf(p);
            return Object.getPrototypeOf(h) === p
        } catch {
            return !1
        }
    }
    e.isPlainObject = s;

    function a(h) {
        return h.charCodeAt(0) <= 127
    }
    e.isASCII = a;

    function c(h) {
        var p;
        return h.split("").reduce((_, R) => a(R) ? _ + 1 : _ + 2, 0) + ((p = h.match(e.ESCAPE_CHARACTERS_REGEXP)) !== null && p !== void 0 ? p : []).length
    }
    e.calculateStringSize = c;

    function l(h) {
        return h.toString().length
    }
    e.calculateNumberSize = l
})(ch);
var Pt = {};
Object.defineProperty(Pt, "__esModule", {
    value: !0
});
Pt.hexToBigInt = Pt.hexToNumber = Pt.bigIntToHex = Pt.numberToHex = void 0;
const rn = tt,
    $n = si,
    Mg = e => ((0, rn.assert)(typeof e == "number", "Value must be a number."), (0, rn.assert)(e >= 0, "Value must be a non-negative number."), (0, rn.assert)(Number.isSafeInteger(e), "Value is not a safe integer. Use `bigIntToHex` instead."), (0, $n.add0x)(e.toString(16)));
Pt.numberToHex = Mg;
const Cg = e => ((0, rn.assert)(typeof e == "bigint", "Value must be a bigint."), (0, rn.assert)(e >= 0, "Value must be a non-negative bigint."), (0, $n.add0x)(e.toString(16)));
Pt.bigIntToHex = Cg;
const kg = e => {
    (0, $n.assertIsHexString)(e);
    const t = parseInt(e, 16);
    return (0, rn.assert)(Number.isSafeInteger(t), "Value is not a safe integer. Use `hexToBigInt` instead."), t
};
Pt.hexToNumber = kg;
const Ig = e => ((0, $n.assertIsHexString)(e), BigInt((0, $n.add0x)(e)));
Pt.hexToBigInt = Ig;
var lh = {};
Object.defineProperty(lh, "__esModule", {
    value: !0
});
var uh = {};
(function (e) {
    Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.timeSince = e.inMilliseconds = e.Duration = void 0,
        function (s) {
            s[s.Millisecond = 1] = "Millisecond", s[s.Second = 1e3] = "Second", s[s.Minute = 6e4] = "Minute", s[s.Hour = 36e5] = "Hour", s[s.Day = 864e5] = "Day", s[s.Week = 6048e5] = "Week", s[s.Year = 31536e6] = "Year"
        }(e.Duration || (e.Duration = {}));
    const t = s => Number.isInteger(s) && s >= 0,
        r = (s, a) => {
            if (!t(s)) throw new Error(`"${a}" must be a non-negative integer. Received: "${s}".`)
        };

    function n(s, a) {
        return r(s, "count"), s * a
    }
    e.inMilliseconds = n;

    function i(s) {
        return r(s, "timestamp"), Date.now() - s
    }
    e.timeSince = i
})(uh);
var hh = {};
Object.defineProperty(hh, "__esModule", {
    value: !0
});
var dh = {},
    Ao = {
        exports: {}
    };
const xg = "2.0.0",
    fh = 256,
    Ag = Number.MAX_SAFE_INTEGER || 9007199254740991,
    Ng = 16,
    Tg = fh - 6,
    Lg = ["major", "premajor", "minor", "preminor", "patch", "prepatch", "prerelease"];
var ms = {
        MAX_LENGTH: fh,
        MAX_SAFE_COMPONENT_LENGTH: Ng,
        MAX_SAFE_BUILD_LENGTH: Tg,
        MAX_SAFE_INTEGER: Ag,
        RELEASE_TYPES: Lg,
        SEMVER_SPEC_VERSION: xg,
        FLAG_INCLUDE_PRERELEASE: 1,
        FLAG_LOOSE: 2
    },
    no = {};
const Pg = typeof process == "object" && no && no.NODE_DEBUG && /\bsemver\b/i.test(no.NODE_DEBUG) ? (...e) => console.error("SEMVER", ...e) : () => {};
var vs = Pg;
(function (e, t) {
    const {
        MAX_SAFE_COMPONENT_LENGTH: r,
        MAX_SAFE_BUILD_LENGTH: n,
        MAX_LENGTH: i
    } = ms, s = vs;
    t = e.exports = {};
    const a = t.re = [],
        c = t.safeRe = [],
        l = t.src = [],
        h = t.t = {};
    let p = 0;
    const f = "[a-zA-Z0-9-]",
        _ = [
            ["\\s", 1],
            ["\\d", i],
            [f, n]
        ],
        R = O => {
            for (const [L, M] of _) O = O.split(`${L}*`).join(`${L}{0,${M}}`).split(`${L}+`).join(`${L}{1,${M}}`);
            return O
        },
        A = (O, L, M) => {
            const k = R(L),
                T = p++;
            s(O, T, L), h[O] = T, l[T] = L, a[T] = new RegExp(L, M ? "g" : void 0), c[T] = new RegExp(k, M ? "g" : void 0)
        };
    A("NUMERICIDENTIFIER", "0|[1-9]\\d*"), A("NUMERICIDENTIFIERLOOSE", "\\d+"), A("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${f}*`), A("MAINVERSION", `(${l[h.NUMERICIDENTIFIER]})\\.(${l[h.NUMERICIDENTIFIER]})\\.(${l[h.NUMERICIDENTIFIER]})`), A("MAINVERSIONLOOSE", `(${l[h.NUMERICIDENTIFIERLOOSE]})\\.(${l[h.NUMERICIDENTIFIERLOOSE]})\\.(${l[h.NUMERICIDENTIFIERLOOSE]})`), A("PRERELEASEIDENTIFIER", `(?:${l[h.NUMERICIDENTIFIER]}|${l[h.NONNUMERICIDENTIFIER]})`), A("PRERELEASEIDENTIFIERLOOSE", `(?:${l[h.NUMERICIDENTIFIERLOOSE]}|${l[h.NONNUMERICIDENTIFIER]})`), A("PRERELEASE", `(?:-(${l[h.PRERELEASEIDENTIFIER]}(?:\\.${l[h.PRERELEASEIDENTIFIER]})*))`), A("PRERELEASELOOSE", `(?:-?(${l[h.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${l[h.PRERELEASEIDENTIFIERLOOSE]})*))`), A("BUILDIDENTIFIER", `${f}+`), A("BUILD", `(?:\\+(${l[h.BUILDIDENTIFIER]}(?:\\.${l[h.BUILDIDENTIFIER]})*))`), A("FULLPLAIN", `v?${l[h.MAINVERSION]}${l[h.PRERELEASE]}?${l[h.BUILD]}?`), A("FULL", `^${l[h.FULLPLAIN]}$`), A("LOOSEPLAIN", `[v=\\s]*${l[h.MAINVERSIONLOOSE]}${l[h.PRERELEASELOOSE]}?${l[h.BUILD]}?`), A("LOOSE", `^${l[h.LOOSEPLAIN]}$`), A("GTLT", "((?:<|>)?=?)"), A("XRANGEIDENTIFIERLOOSE", `${l[h.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), A("XRANGEIDENTIFIER", `${l[h.NUMERICIDENTIFIER]}|x|X|\\*`), A("XRANGEPLAIN", `[v=\\s]*(${l[h.XRANGEIDENTIFIER]})(?:\\.(${l[h.XRANGEIDENTIFIER]})(?:\\.(${l[h.XRANGEIDENTIFIER]})(?:${l[h.PRERELEASE]})?${l[h.BUILD]}?)?)?`), A("XRANGEPLAINLOOSE", `[v=\\s]*(${l[h.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[h.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[h.XRANGEIDENTIFIERLOOSE]})(?:${l[h.PRERELEASELOOSE]})?${l[h.BUILD]}?)?)?`), A("XRANGE", `^${l[h.GTLT]}\\s*${l[h.XRANGEPLAIN]}$`), A("XRANGELOOSE", `^${l[h.GTLT]}\\s*${l[h.XRANGEPLAINLOOSE]}$`), A("COERCEPLAIN", `(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?`), A("COERCE", `${l[h.COERCEPLAIN]}(?:$|[^\\d])`), A("COERCEFULL", l[h.COERCEPLAIN] + `(?:${l[h.PRERELEASE]})?(?:${l[h.BUILD]})?(?:$|[^\\d])`), A("COERCERTL", l[h.COERCE], !0), A("COERCERTLFULL", l[h.COERCEFULL], !0), A("LONETILDE", "(?:~>?)"), A("TILDETRIM", `(\\s*)${l[h.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", A("TILDE", `^${l[h.LONETILDE]}${l[h.XRANGEPLAIN]}$`), A("TILDELOOSE", `^${l[h.LONETILDE]}${l[h.XRANGEPLAINLOOSE]}$`), A("LONECARET", "(?:\\^)"), A("CARETTRIM", `(\\s*)${l[h.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", A("CARET", `^${l[h.LONECARET]}${l[h.XRANGEPLAIN]}$`), A("CARETLOOSE", `^${l[h.LONECARET]}${l[h.XRANGEPLAINLOOSE]}$`), A("COMPARATORLOOSE", `^${l[h.GTLT]}\\s*(${l[h.LOOSEPLAIN]})$|^$`), A("COMPARATOR", `^${l[h.GTLT]}\\s*(${l[h.FULLPLAIN]})$|^$`), A("COMPARATORTRIM", `(\\s*)${l[h.GTLT]}\\s*(${l[h.LOOSEPLAIN]}|${l[h.XRANGEPLAIN]})`, !0), t.comparatorTrimReplace = "$1$2$3", A("HYPHENRANGE", `^\\s*(${l[h.XRANGEPLAIN]})\\s+-\\s+(${l[h.XRANGEPLAIN]})\\s*$`), A("HYPHENRANGELOOSE", `^\\s*(${l[h.XRANGEPLAINLOOSE]})\\s+-\\s+(${l[h.XRANGEPLAINLOOSE]})\\s*$`), A("STAR", "(<|>)?=?\\s*\\*"), A("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), A("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$")
})(Ao, Ao.exports);
var oi = Ao.exports;
const Og = Object.freeze({
        loose: !0
    }),
    $g = Object.freeze({}),
    Bg = e => e ? typeof e != "object" ? Og : e : $g;
var aa = Bg;
const Lc = /^[0-9]+$/,
    ph = (e, t) => {
        const r = Lc.test(e),
            n = Lc.test(t);
        return r && n && (e = +e, t = +t), e === t ? 0 : r && !n ? -1 : n && !r ? 1 : e < t ? -1 : 1
    },
    Dg = (e, t) => ph(t, e);
var gh = {
    compareIdentifiers: ph,
    rcompareIdentifiers: Dg
};
const vi = vs,
    {
        MAX_LENGTH: Pc,
        MAX_SAFE_INTEGER: bi
    } = ms,
    {
        safeRe: Oc,
        t: $c
    } = oi,
    Fg = aa,
    {
        compareIdentifiers: Zr
    } = gh;
let jg = class It {
    constructor(t, r) {
        if (r = Fg(r), t instanceof It) {
            if (t.loose === !!r.loose && t.includePrerelease === !!r.includePrerelease) return t;
            t = t.version
        } else if (typeof t != "string") throw new TypeError(`Invalid version. Must be a string. Got type "${typeof t}".`);
        if (t.length > Pc) throw new TypeError(`version is longer than ${Pc} characters`);
        vi("SemVer", t, r), this.options = r, this.loose = !!r.loose, this.includePrerelease = !!r.includePrerelease;
        const n = t.trim().match(r.loose ? Oc[$c.LOOSE] : Oc[$c.FULL]);
        if (!n) throw new TypeError(`Invalid Version: ${t}`);
        if (this.raw = t, this.major = +n[1], this.minor = +n[2], this.patch = +n[3], this.major > bi || this.major < 0) throw new TypeError("Invalid major version");
        if (this.minor > bi || this.minor < 0) throw new TypeError("Invalid minor version");
        if (this.patch > bi || this.patch < 0) throw new TypeError("Invalid patch version");
        n[4] ? this.prerelease = n[4].split(".").map(i => {
            if (/^[0-9]+$/.test(i)) {
                const s = +i;
                if (s >= 0 && s < bi) return s
            }
            return i
        }) : this.prerelease = [], this.build = n[5] ? n[5].split(".") : [], this.format()
    }
    format() {
        return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version
    }
    toString() {
        return this.version
    }
    compare(t) {
        if (vi("SemVer.compare", this.version, this.options, t), !(t instanceof It)) {
            if (typeof t == "string" && t === this.version) return 0;
            t = new It(t, this.options)
        }
        return t.version === this.version ? 0 : this.compareMain(t) || this.comparePre(t)
    }
    compareMain(t) {
        return t instanceof It || (t = new It(t, this.options)), Zr(this.major, t.major) || Zr(this.minor, t.minor) || Zr(this.patch, t.patch)
    }
    comparePre(t) {
        if (t instanceof It || (t = new It(t, this.options)), this.prerelease.length && !t.prerelease.length) return -1;
        if (!this.prerelease.length && t.prerelease.length) return 1;
        if (!this.prerelease.length && !t.prerelease.length) return 0;
        let r = 0;
        do {
            const n = this.prerelease[r],
                i = t.prerelease[r];
            if (vi("prerelease compare", r, n, i), n === void 0 && i === void 0) return 0;
            if (i === void 0) return 1;
            if (n === void 0) return -1;
            if (n === i) continue;
            return Zr(n, i)
        } while (++r)
    }
    compareBuild(t) {
        t instanceof It || (t = new It(t, this.options));
        let r = 0;
        do {
            const n = this.build[r],
                i = t.build[r];
            if (vi("prerelease compare", r, n, i), n === void 0 && i === void 0) return 0;
            if (i === void 0) return 1;
            if (n === void 0) return -1;
            if (n === i) continue;
            return Zr(n, i)
        } while (++r)
    }
    inc(t, r, n) {
        switch (t) {
            case "premajor":
                this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", r, n);
                break;
            case "preminor":
                this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", r, n);
                break;
            case "prepatch":
                this.prerelease.length = 0, this.inc("patch", r, n), this.inc("pre", r, n);
                break;
            case "prerelease":
                this.prerelease.length === 0 && this.inc("patch", r, n), this.inc("pre", r, n);
                break;
            case "major":
                (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
                break;
            case "minor":
                (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
                break;
            case "patch":
                this.prerelease.length === 0 && this.patch++, this.prerelease = [];
                break;
            case "pre": {
                const i = Number(n) ? 1 : 0;
                if (!r && n === !1) throw new Error("invalid increment argument: identifier is empty");
                if (this.prerelease.length === 0) this.prerelease = [i];
                else {
                    let s = this.prerelease.length;
                    for (; --s >= 0;) typeof this.prerelease[s] == "number" && (this.prerelease[s]++, s = -2);
                    if (s === -1) {
                        if (r === this.prerelease.join(".") && n === !1) throw new Error("invalid increment argument: identifier already exists");
                        this.prerelease.push(i)
                    }
                }
                if (r) {
                    let s = [r, i];
                    n === !1 && (s = [r]), Zr(this.prerelease[0], r) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = s) : this.prerelease = s
                }
                break
            }
            default:
                throw new Error(`invalid increment argument: ${t}`)
        }
        return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this
    }
};
var st = jg;
const Bc = st,
    Hg = (e, t, r = !1) => {
        if (e instanceof Bc) return e;
        try {
            return new Bc(e, t)
        } catch (n) {
            if (!r) return null;
            throw n
        }
    };
var Sn = Hg;
const Ug = Sn,
    Wg = (e, t) => {
        const r = Ug(e, t);
        return r ? r.version : null
    };
var Vg = Wg;
const qg = Sn,
    zg = (e, t) => {
        const r = qg(e.trim().replace(/^[=v]+/, ""), t);
        return r ? r.version : null
    };
var Gg = zg;
const Dc = st,
    Jg = (e, t, r, n, i) => {
        typeof r == "string" && (i = n, n = r, r = void 0);
        try {
            return new Dc(e instanceof Dc ? e.version : e, r).inc(t, n, i).version
        } catch {
            return null
        }
    };
var Zg = Jg;
const Fc = Sn,
    Kg = (e, t) => {
        const r = Fc(e, null, !0),
            n = Fc(t, null, !0),
            i = r.compare(n);
        if (i === 0) return null;
        const s = i > 0,
            a = s ? r : n,
            c = s ? n : r,
            l = !!a.prerelease.length;
        if (!!c.prerelease.length && !l) return !c.patch && !c.minor ? "major" : a.patch ? "patch" : a.minor ? "minor" : "major";
        const p = l ? "pre" : "";
        return r.major !== n.major ? p + "major" : r.minor !== n.minor ? p + "minor" : r.patch !== n.patch ? p + "patch" : "prerelease"
    };
var Qg = Kg;
const Yg = st,
    Xg = (e, t) => new Yg(e, t).major;
var e_ = Xg;
const t_ = st,
    r_ = (e, t) => new t_(e, t).minor;
var n_ = r_;
const i_ = st,
    s_ = (e, t) => new i_(e, t).patch;
var o_ = s_;
const a_ = Sn,
    c_ = (e, t) => {
        const r = a_(e, t);
        return r && r.prerelease.length ? r.prerelease : null
    };
var l_ = c_;
const jc = st,
    u_ = (e, t, r) => new jc(e, r).compare(new jc(t, r));
var St = u_;
const h_ = St,
    d_ = (e, t, r) => h_(t, e, r);
var f_ = d_;
const p_ = St,
    g_ = (e, t) => p_(e, t, !0);
var __ = g_;
const Hc = st,
    m_ = (e, t, r) => {
        const n = new Hc(e, r),
            i = new Hc(t, r);
        return n.compare(i) || n.compareBuild(i)
    };
var ca = m_;
const v_ = ca,
    b_ = (e, t) => e.sort((r, n) => v_(r, n, t));
var y_ = b_;
const w_ = ca,
    E_ = (e, t) => e.sort((r, n) => w_(n, r, t));
var S_ = E_;
const R_ = St,
    M_ = (e, t, r) => R_(e, t, r) > 0;
var bs = M_;
const C_ = St,
    k_ = (e, t, r) => C_(e, t, r) < 0;
var la = k_;
const I_ = St,
    x_ = (e, t, r) => I_(e, t, r) === 0;
var _h = x_;
const A_ = St,
    N_ = (e, t, r) => A_(e, t, r) !== 0;
var mh = N_;
const T_ = St,
    L_ = (e, t, r) => T_(e, t, r) >= 0;
var ua = L_;
const P_ = St,
    O_ = (e, t, r) => P_(e, t, r) <= 0;
var ha = O_;
const $_ = _h,
    B_ = mh,
    D_ = bs,
    F_ = ua,
    j_ = la,
    H_ = ha,
    U_ = (e, t, r, n) => {
        switch (t) {
            case "===":
                return typeof e == "object" && (e = e.version), typeof r == "object" && (r = r.version), e === r;
            case "!==":
                return typeof e == "object" && (e = e.version), typeof r == "object" && (r = r.version), e !== r;
            case "":
            case "=":
            case "==":
                return $_(e, r, n);
            case "!=":
                return B_(e, r, n);
            case ">":
                return D_(e, r, n);
            case ">=":
                return F_(e, r, n);
            case "<":
                return j_(e, r, n);
            case "<=":
                return H_(e, r, n);
            default:
                throw new TypeError(`Invalid operator: ${t}`)
        }
    };
var vh = U_;
const W_ = st,
    V_ = Sn,
    {
        safeRe: yi,
        t: wi
    } = oi,
    q_ = (e, t) => {
        if (e instanceof W_) return e;
        if (typeof e == "number" && (e = String(e)), typeof e != "string") return null;
        t = t || {};
        let r = null;
        if (!t.rtl) r = e.match(t.includePrerelease ? yi[wi.COERCEFULL] : yi[wi.COERCE]);
        else {
            const l = t.includePrerelease ? yi[wi.COERCERTLFULL] : yi[wi.COERCERTL];
            let h;
            for (;
                (h = l.exec(e)) && (!r || r.index + r[0].length !== e.length);)(!r || h.index + h[0].length !== r.index + r[0].length) && (r = h), l.lastIndex = h.index + h[1].length + h[2].length;
            l.lastIndex = -1
        }
        if (r === null) return null;
        const n = r[2],
            i = r[3] || "0",
            s = r[4] || "0",
            a = t.includePrerelease && r[5] ? `-${r[5]}` : "",
            c = t.includePrerelease && r[6] ? `+${r[6]}` : "";
        return V_(`${n}.${i}.${s}${a}${c}`, t)
    };
var z_ = q_,
    io, Uc;

function G_() {
    return Uc || (Uc = 1, io = function (e) {
        e.prototype[Symbol.iterator] = function* () {
            for (let t = this.head; t; t = t.next) yield t.value
        }
    }), io
}
var J_ = ce;
ce.Node = Cr;
ce.create = ce;

function ce(e) {
    var t = this;
    if (t instanceof ce || (t = new ce), t.tail = null, t.head = null, t.length = 0, e && typeof e.forEach == "function") e.forEach(function (i) {
        t.push(i)
    });
    else if (arguments.length > 0)
        for (var r = 0, n = arguments.length; r < n; r++) t.push(arguments[r]);
    return t
}
ce.prototype.removeNode = function (e) {
    if (e.list !== this) throw new Error("removing node which does not belong to this list");
    var t = e.next,
        r = e.prev;
    return t && (t.prev = r), r && (r.next = t), e === this.head && (this.head = t), e === this.tail && (this.tail = r), e.list.length--, e.next = null, e.prev = null, e.list = null, t
};
ce.prototype.unshiftNode = function (e) {
    if (e !== this.head) {
        e.list && e.list.removeNode(e);
        var t = this.head;
        e.list = this, e.next = t, t && (t.prev = e), this.head = e, this.tail || (this.tail = e), this.length++
    }
};
ce.prototype.pushNode = function (e) {
    if (e !== this.tail) {
        e.list && e.list.removeNode(e);
        var t = this.tail;
        e.list = this, e.prev = t, t && (t.next = e), this.tail = e, this.head || (this.head = e), this.length++
    }
};
ce.prototype.push = function () {
    for (var e = 0, t = arguments.length; e < t; e++) K_(this, arguments[e]);
    return this.length
};
ce.prototype.unshift = function () {
    for (var e = 0, t = arguments.length; e < t; e++) Q_(this, arguments[e]);
    return this.length
};
ce.prototype.pop = function () {
    if (this.tail) {
        var e = this.tail.value;
        return this.tail = this.tail.prev, this.tail ? this.tail.next = null : this.head = null, this.length--, e
    }
};
ce.prototype.shift = function () {
    if (this.head) {
        var e = this.head.value;
        return this.head = this.head.next, this.head ? this.head.prev = null : this.tail = null, this.length--, e
    }
};
ce.prototype.forEach = function (e, t) {
    t = t || this;
    for (var r = this.head, n = 0; r !== null; n++) e.call(t, r.value, n, this), r = r.next
};
ce.prototype.forEachReverse = function (e, t) {
    t = t || this;
    for (var r = this.tail, n = this.length - 1; r !== null; n--) e.call(t, r.value, n, this), r = r.prev
};
ce.prototype.get = function (e) {
    for (var t = 0, r = this.head; r !== null && t < e; t++) r = r.next;
    if (t === e && r !== null) return r.value
};
ce.prototype.getReverse = function (e) {
    for (var t = 0, r = this.tail; r !== null && t < e; t++) r = r.prev;
    if (t === e && r !== null) return r.value
};
ce.prototype.map = function (e, t) {
    t = t || this;
    for (var r = new ce, n = this.head; n !== null;) r.push(e.call(t, n.value, this)), n = n.next;
    return r
};
ce.prototype.mapReverse = function (e, t) {
    t = t || this;
    for (var r = new ce, n = this.tail; n !== null;) r.push(e.call(t, n.value, this)), n = n.prev;
    return r
};
ce.prototype.reduce = function (e, t) {
    var r, n = this.head;
    if (arguments.length > 1) r = t;
    else if (this.head) n = this.head.next, r = this.head.value;
    else throw new TypeError("Reduce of empty list with no initial value");
    for (var i = 0; n !== null; i++) r = e(r, n.value, i), n = n.next;
    return r
};
ce.prototype.reduceReverse = function (e, t) {
    var r, n = this.tail;
    if (arguments.length > 1) r = t;
    else if (this.tail) n = this.tail.prev, r = this.tail.value;
    else throw new TypeError("Reduce of empty list with no initial value");
    for (var i = this.length - 1; n !== null; i--) r = e(r, n.value, i), n = n.prev;
    return r
};
ce.prototype.toArray = function () {
    for (var e = new Array(this.length), t = 0, r = this.head; r !== null; t++) e[t] = r.value, r = r.next;
    return e
};
ce.prototype.toArrayReverse = function () {
    for (var e = new Array(this.length), t = 0, r = this.tail; r !== null; t++) e[t] = r.value, r = r.prev;
    return e
};
ce.prototype.slice = function (e, t) {
    t = t || this.length, t < 0 && (t += this.length), e = e || 0, e < 0 && (e += this.length);
    var r = new ce;
    if (t < e || t < 0) return r;
    e < 0 && (e = 0), t > this.length && (t = this.length);
    for (var n = 0, i = this.head; i !== null && n < e; n++) i = i.next;
    for (; i !== null && n < t; n++, i = i.next) r.push(i.value);
    return r
};
ce.prototype.sliceReverse = function (e, t) {
    t = t || this.length, t < 0 && (t += this.length), e = e || 0, e < 0 && (e += this.length);
    var r = new ce;
    if (t < e || t < 0) return r;
    e < 0 && (e = 0), t > this.length && (t = this.length);
    for (var n = this.length, i = this.tail; i !== null && n > t; n--) i = i.prev;
    for (; i !== null && n > e; n--, i = i.prev) r.push(i.value);
    return r
};
ce.prototype.splice = function (e, t, ...r) {
    e > this.length && (e = this.length - 1), e < 0 && (e = this.length + e);
    for (var n = 0, i = this.head; i !== null && n < e; n++) i = i.next;
    for (var s = [], n = 0; i && n < t; n++) s.push(i.value), i = this.removeNode(i);
    i === null && (i = this.tail), i !== this.head && i !== this.tail && (i = i.prev);
    for (var n = 0; n < r.length; n++) i = Z_(this, i, r[n]);
    return s
};
ce.prototype.reverse = function () {
    for (var e = this.head, t = this.tail, r = e; r !== null; r = r.prev) {
        var n = r.prev;
        r.prev = r.next, r.next = n
    }
    return this.head = t, this.tail = e, this
};

function Z_(e, t, r) {
    var n = t === e.head ? new Cr(r, null, t, e) : new Cr(r, t, t.next, e);
    return n.next === null && (e.tail = n), n.prev === null && (e.head = n), e.length++, n
}

function K_(e, t) {
    e.tail = new Cr(t, e.tail, null, e), e.head || (e.head = e.tail), e.length++
}

function Q_(e, t) {
    e.head = new Cr(t, null, e.head, e), e.tail || (e.tail = e.head), e.length++
}

function Cr(e, t, r, n) {
    if (!(this instanceof Cr)) return new Cr(e, t, r, n);
    this.list = n, this.value = e, t ? (t.next = this, this.prev = t) : this.prev = null, r ? (r.prev = this, this.next = r) : this.next = null
}
try {
    G_()(ce)
} catch {}
const Y_ = J_,
    br = Symbol("max"),
    Ft = Symbol("length"),
    Kr = Symbol("lengthCalculator"),
    Tn = Symbol("allowStale"),
    wr = Symbol("maxAge"),
    $t = Symbol("dispose"),
    Wc = Symbol("noDisposeOnSet"),
    Qe = Symbol("lruList"),
    wt = Symbol("cache"),
    bh = Symbol("updateAgeOnGet"),
    so = () => 1;
class X_ {
    constructor(t) {
        if (typeof t == "number" && (t = {
                max: t
            }), t || (t = {}), t.max && (typeof t.max != "number" || t.max < 0)) throw new TypeError("max must be a non-negative number");
        this[br] = t.max || 1 / 0;
        const r = t.length || so;
        if (this[Kr] = typeof r != "function" ? so : r, this[Tn] = t.stale || !1, t.maxAge && typeof t.maxAge != "number") throw new TypeError("maxAge must be a number");
        this[wr] = t.maxAge || 0, this[$t] = t.dispose, this[Wc] = t.noDisposeOnSet || !1, this[bh] = t.updateAgeOnGet || !1, this.reset()
    }
    set max(t) {
        if (typeof t != "number" || t < 0) throw new TypeError("max must be a non-negative number");
        this[br] = t || 1 / 0, Mn(this)
    }
    get max() {
        return this[br]
    }
    set allowStale(t) {
        this[Tn] = !!t
    }
    get allowStale() {
        return this[Tn]
    }
    set maxAge(t) {
        if (typeof t != "number") throw new TypeError("maxAge must be a non-negative number");
        this[wr] = t, Mn(this)
    }
    get maxAge() {
        return this[wr]
    }
    set lengthCalculator(t) {
        typeof t != "function" && (t = so), t !== this[Kr] && (this[Kr] = t, this[Ft] = 0, this[Qe].forEach(r => {
            r.length = this[Kr](r.value, r.key), this[Ft] += r.length
        })), Mn(this)
    }
    get lengthCalculator() {
        return this[Kr]
    }
    get length() {
        return this[Ft]
    }
    get itemCount() {
        return this[Qe].length
    }
    rforEach(t, r) {
        r = r || this;
        for (let n = this[Qe].tail; n !== null;) {
            const i = n.prev;
            Vc(this, t, n, r), n = i
        }
    }
    forEach(t, r) {
        r = r || this;
        for (let n = this[Qe].head; n !== null;) {
            const i = n.next;
            Vc(this, t, n, r), n = i
        }
    }
    keys() {
        return this[Qe].toArray().map(t => t.key)
    }
    values() {
        return this[Qe].toArray().map(t => t.value)
    }
    reset() {
        this[$t] && this[Qe] && this[Qe].length && this[Qe].forEach(t => this[$t](t.key, t.value)), this[wt] = new Map, this[Qe] = new Y_, this[Ft] = 0
    }
    dump() {
        return this[Qe].map(t => Ni(this, t) ? !1 : {
            k: t.key,
            v: t.value,
            e: t.now + (t.maxAge || 0)
        }).toArray().filter(t => t)
    }
    dumpLru() {
        return this[Qe]
    }
    set(t, r, n) {
        if (n = n || this[wr], n && typeof n != "number") throw new TypeError("maxAge must be a number");
        const i = n ? Date.now() : 0,
            s = this[Kr](r, t);
        if (this[wt].has(t)) {
            if (s > this[br]) return nn(this, this[wt].get(t)), !1;
            const l = this[wt].get(t).value;
            return this[$t] && (this[Wc] || this[$t](t, l.value)), l.now = i, l.maxAge = n, l.value = r, this[Ft] += s - l.length, l.length = s, this.get(t), Mn(this), !0
        }
        const a = new em(t, r, s, i, n);
        return a.length > this[br] ? (this[$t] && this[$t](t, r), !1) : (this[Ft] += a.length, this[Qe].unshift(a), this[wt].set(t, this[Qe].head), Mn(this), !0)
    }
    has(t) {
        if (!this[wt].has(t)) return !1;
        const r = this[wt].get(t).value;
        return !Ni(this, r)
    }
    get(t) {
        return oo(this, t, !0)
    }
    peek(t) {
        return oo(this, t, !1)
    }
    pop() {
        const t = this[Qe].tail;
        return t ? (nn(this, t), t.value) : null
    }
    del(t) {
        nn(this, this[wt].get(t))
    }
    load(t) {
        this.reset();
        const r = Date.now();
        for (let n = t.length - 1; n >= 0; n--) {
            const i = t[n],
                s = i.e || 0;
            if (s === 0) this.set(i.k, i.v);
            else {
                const a = s - r;
                a > 0 && this.set(i.k, i.v, a)
            }
        }
    }
    prune() {
        this[wt].forEach((t, r) => oo(this, r, !1))
    }
}
const oo = (e, t, r) => {
        const n = e[wt].get(t);
        if (n) {
            const i = n.value;
            if (Ni(e, i)) {
                if (nn(e, n), !e[Tn]) return
            } else r && (e[bh] && (n.value.now = Date.now()), e[Qe].unshiftNode(n));
            return i.value
        }
    },
    Ni = (e, t) => {
        if (!t || !t.maxAge && !e[wr]) return !1;
        const r = Date.now() - t.now;
        return t.maxAge ? r > t.maxAge : e[wr] && r > e[wr]
    },
    Mn = e => {
        if (e[Ft] > e[br])
            for (let t = e[Qe].tail; e[Ft] > e[br] && t !== null;) {
                const r = t.prev;
                nn(e, t), t = r
            }
    },
    nn = (e, t) => {
        if (t) {
            const r = t.value;
            e[$t] && e[$t](r.key, r.value), e[Ft] -= r.length, e[wt].delete(r.key), e[Qe].removeNode(t)
        }
    };
class em {
    constructor(t, r, n, i, s) {
        this.key = t, this.value = r, this.length = n, this.now = i, this.maxAge = s || 0
    }
}
const Vc = (e, t, r, n) => {
    let i = r.value;
    Ni(e, i) && (nn(e, r), e[Tn] || (i = void 0)), i && t.call(n, i.value, i.key, e)
};
var tm = X_,
    ao, qc;

function Rt() {
    if (qc) return ao;
    qc = 1;
    class e {
        constructor(o, d) {
            if (d = n(d), o instanceof e) return o.loose === !!d.loose && o.includePrerelease === !!d.includePrerelease ? o : new e(o.raw, d);
            if (o instanceof i) return this.raw = o.value, this.set = [
                [o]
            ], this.format(), this;
            if (this.options = d, this.loose = !!d.loose, this.includePrerelease = !!d.includePrerelease, this.raw = o.trim().split(/\s+/).join(" "), this.set = this.raw.split("||").map(g => this.parseRange(g.trim())).filter(g => g.length), !this.set.length) throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
            if (this.set.length > 1) {
                const g = this.set[0];
                if (this.set = this.set.filter(m => !A(m[0])), this.set.length === 0) this.set = [g];
                else if (this.set.length > 1) {
                    for (const m of this.set)
                        if (m.length === 1 && O(m[0])) {
                            this.set = [m];
                            break
                        }
                }
            }
            this.format()
        }
        format() {
            return this.range = this.set.map(o => o.join(" ").trim()).join("||").trim(), this.range
        }
        toString() {
            return this.range
        }
        parseRange(o) {
            const g = ((this.options.includePrerelease && _) | (this.options.loose && R)) + ":" + o,
                m = r.get(g);
            if (m) return m;
            const y = this.options.loose,
                C = y ? c[l.HYPHENRANGELOOSE] : c[l.HYPHENRANGE];
            o = o.replace(C, Q(this.options.includePrerelease)), s("hyphen replace", o), o = o.replace(c[l.COMPARATORTRIM], h), s("comparator trim", o), o = o.replace(c[l.TILDETRIM], p), s("tilde trim", o), o = o.replace(c[l.CARETTRIM], f), s("caret trim", o);
            let x = o.split(" ").map(W => M(W, this.options)).join(" ").split(/\s+/).map(W => X(W, this.options));
            y && (x = x.filter(W => (s("loose invalid filter", W, this.options), !!W.match(c[l.COMPARATORLOOSE])))), s("range list", x);
            const b = new Map,
                u = x.map(W => new i(W, this.options));
            for (const W of u) {
                if (A(W)) return [W];
                b.set(W.value, W)
            }
            b.size > 1 && b.has("") && b.delete("");
            const S = [...b.values()];
            return r.set(g, S), S
        }
        intersects(o, d) {
            if (!(o instanceof e)) throw new TypeError("a Range is required");
            return this.set.some(g => L(g, d) && o.set.some(m => L(m, d) && g.every(y => m.every(C => y.intersects(C, d)))))
        }
        test(o) {
            if (!o) return !1;
            if (typeof o == "string") try {
                o = new a(o, this.options)
            } catch {
                return !1
            }
            for (let d = 0; d < this.set.length; d++)
                if (ie(this.set[d], o, this.options)) return !0;
            return !1
        }
    }
    ao = e;
    const t = tm,
        r = new t({
            max: 1e3
        }),
        n = aa,
        i = ys(),
        s = vs,
        a = st,
        {
            safeRe: c,
            t: l,
            comparatorTrimReplace: h,
            tildeTrimReplace: p,
            caretTrimReplace: f
        } = oi,
        {
            FLAG_INCLUDE_PRERELEASE: _,
            FLAG_LOOSE: R
        } = ms,
        A = v => v.value === "<0.0.0-0",
        O = v => v.value === "",
        L = (v, o) => {
            let d = !0;
            const g = v.slice();
            let m = g.pop();
            for (; d && g.length;) d = g.every(y => m.intersects(y, o)), m = g.pop();
            return d
        },
        M = (v, o) => (s("comp", v, o), v = P(v, o), s("caret", v), v = T(v, o), s("tildes", v), v = G(v, o), s("xrange", v), v = H(v, o), s("stars", v), v),
        k = v => !v || v.toLowerCase() === "x" || v === "*",
        T = (v, o) => v.trim().split(/\s+/).map(d => $(d, o)).join(" "),
        $ = (v, o) => {
            const d = o.loose ? c[l.TILDELOOSE] : c[l.TILDE];
            return v.replace(d, (g, m, y, C, x) => {
                s("tilde", v, g, m, y, C, x);
                let b;
                return k(m) ? b = "" : k(y) ? b = `>=${m}.0.0 <${+m+1}.0.0-0` : k(C) ? b = `>=${m}.${y}.0 <${m}.${+y+1}.0-0` : x ? (s("replaceTilde pr", x), b = `>=${m}.${y}.${C}-${x} <${m}.${+y+1}.0-0`) : b = `>=${m}.${y}.${C} <${m}.${+y+1}.0-0`, s("tilde return", b), b
            })
        },
        P = (v, o) => v.trim().split(/\s+/).map(d => D(d, o)).join(" "),
        D = (v, o) => {
            s("caret", v, o);
            const d = o.loose ? c[l.CARETLOOSE] : c[l.CARET],
                g = o.includePrerelease ? "-0" : "";
            return v.replace(d, (m, y, C, x, b) => {
                s("caret", v, m, y, C, x, b);
                let u;
                return k(y) ? u = "" : k(C) ? u = `>=${y}.0.0${g} <${+y+1}.0.0-0` : k(x) ? y === "0" ? u = `>=${y}.${C}.0${g} <${y}.${+C+1}.0-0` : u = `>=${y}.${C}.0${g} <${+y+1}.0.0-0` : b ? (s("replaceCaret pr", b), y === "0" ? C === "0" ? u = `>=${y}.${C}.${x}-${b} <${y}.${C}.${+x+1}-0` : u = `>=${y}.${C}.${x}-${b} <${y}.${+C+1}.0-0` : u = `>=${y}.${C}.${x}-${b} <${+y+1}.0.0-0`) : (s("no pr"), y === "0" ? C === "0" ? u = `>=${y}.${C}.${x}${g} <${y}.${C}.${+x+1}-0` : u = `>=${y}.${C}.${x}${g} <${y}.${+C+1}.0-0` : u = `>=${y}.${C}.${x} <${+y+1}.0.0-0`), s("caret return", u), u
            })
        },
        G = (v, o) => (s("replaceXRanges", v, o), v.split(/\s+/).map(d => V(d, o)).join(" ")),
        V = (v, o) => {
            v = v.trim();
            const d = o.loose ? c[l.XRANGELOOSE] : c[l.XRANGE];
            return v.replace(d, (g, m, y, C, x, b) => {
                s("xRange", v, g, m, y, C, x, b);
                const u = k(y),
                    S = u || k(C),
                    W = S || k(x),
                    q = W;
                return m === "=" && q && (m = ""), b = o.includePrerelease ? "-0" : "", u ? m === ">" || m === "<" ? g = "<0.0.0-0" : g = "*" : m && q ? (S && (C = 0), x = 0, m === ">" ? (m = ">=", S ? (y = +y + 1, C = 0, x = 0) : (C = +C + 1, x = 0)) : m === "<=" && (m = "<", S ? y = +y + 1 : C = +C + 1), m === "<" && (b = "-0"), g = `${m+y}.${C}.${x}${b}`) : S ? g = `>=${y}.0.0${b} <${+y+1}.0.0-0` : W && (g = `>=${y}.${C}.0${b} <${y}.${+C+1}.0-0`), s("xRange return", g), g
            })
        },
        H = (v, o) => (s("replaceStars", v, o), v.trim().replace(c[l.STAR], "")),
        X = (v, o) => (s("replaceGTE0", v, o), v.trim().replace(c[o.includePrerelease ? l.GTE0PRE : l.GTE0], "")),
        Q = v => (o, d, g, m, y, C, x, b, u, S, W, q, I) => (k(g) ? d = "" : k(m) ? d = `>=${g}.0.0${v?"-0":""}` : k(y) ? d = `>=${g}.${m}.0${v?"-0":""}` : C ? d = `>=${d}` : d = `>=${d}${v?"-0":""}`, k(u) ? b = "" : k(S) ? b = `<${+u+1}.0.0-0` : k(W) ? b = `<${u}.${+S+1}.0-0` : q ? b = `<=${u}.${S}.${W}-${q}` : v ? b = `<${u}.${S}.${+W+1}-0` : b = `<=${b}`, `${d} ${b}`.trim()),
        ie = (v, o, d) => {
            for (let g = 0; g < v.length; g++)
                if (!v[g].test(o)) return !1;
            if (o.prerelease.length && !d.includePrerelease) {
                for (let g = 0; g < v.length; g++)
                    if (s(v[g].semver), v[g].semver !== i.ANY && v[g].semver.prerelease.length > 0) {
                        const m = v[g].semver;
                        if (m.major === o.major && m.minor === o.minor && m.patch === o.patch) return !0
                    } return !1
            }
            return !0
        };
    return ao
}
var co, zc;

function ys() {
    if (zc) return co;
    zc = 1;
    const e = Symbol("SemVer ANY");
    class t {
        static get ANY() {
            return e
        }
        constructor(p, f) {
            if (f = r(f), p instanceof t) {
                if (p.loose === !!f.loose) return p;
                p = p.value
            }
            p = p.trim().split(/\s+/).join(" "), a("comparator", p, f), this.options = f, this.loose = !!f.loose, this.parse(p), this.semver === e ? this.value = "" : this.value = this.operator + this.semver.version, a("comp", this)
        }
        parse(p) {
            const f = this.options.loose ? n[i.COMPARATORLOOSE] : n[i.COMPARATOR],
                _ = p.match(f);
            if (!_) throw new TypeError(`Invalid comparator: ${p}`);
            this.operator = _[1] !== void 0 ? _[1] : "", this.operator === "=" && (this.operator = ""), _[2] ? this.semver = new c(_[2], this.options.loose) : this.semver = e
        }
        toString() {
            return this.value
        }
        test(p) {
            if (a("Comparator.test", p, this.options.loose), this.semver === e || p === e) return !0;
            if (typeof p == "string") try {
                p = new c(p, this.options)
            } catch {
                return !1
            }
            return s(p, this.operator, this.semver, this.options)
        }
        intersects(p, f) {
            if (!(p instanceof t)) throw new TypeError("a Comparator is required");
            return this.operator === "" ? this.value === "" ? !0 : new l(p.value, f).test(this.value) : p.operator === "" ? p.value === "" ? !0 : new l(this.value, f).test(p.semver) : (f = r(f), f.includePrerelease && (this.value === "<0.0.0-0" || p.value === "<0.0.0-0") || !f.includePrerelease && (this.value.startsWith("<0.0.0") || p.value.startsWith("<0.0.0")) ? !1 : !!(this.operator.startsWith(">") && p.operator.startsWith(">") || this.operator.startsWith("<") && p.operator.startsWith("<") || this.semver.version === p.semver.version && this.operator.includes("=") && p.operator.includes("=") || s(this.semver, "<", p.semver, f) && this.operator.startsWith(">") && p.operator.startsWith("<") || s(this.semver, ">", p.semver, f) && this.operator.startsWith("<") && p.operator.startsWith(">")))
        }
    }
    co = t;
    const r = aa,
        {
            safeRe: n,
            t: i
        } = oi,
        s = vh,
        a = vs,
        c = st,
        l = Rt();
    return co
}
const rm = Rt(),
    nm = (e, t, r) => {
        try {
            t = new rm(t, r)
        } catch {
            return !1
        }
        return t.test(e)
    };
var ws = nm;
const im = Rt(),
    sm = (e, t) => new im(e, t).set.map(r => r.map(n => n.value).join(" ").trim().split(" "));
var om = sm;
const am = st,
    cm = Rt(),
    lm = (e, t, r) => {
        let n = null,
            i = null,
            s = null;
        try {
            s = new cm(t, r)
        } catch {
            return null
        }
        return e.forEach(a => {
            s.test(a) && (!n || i.compare(a) === -1) && (n = a, i = new am(n, r))
        }), n
    };
var um = lm;
const hm = st,
    dm = Rt(),
    fm = (e, t, r) => {
        let n = null,
            i = null,
            s = null;
        try {
            s = new dm(t, r)
        } catch {
            return null
        }
        return e.forEach(a => {
            s.test(a) && (!n || i.compare(a) === 1) && (n = a, i = new hm(n, r))
        }), n
    };
var pm = fm;
const lo = st,
    gm = Rt(),
    Gc = bs,
    _m = (e, t) => {
        e = new gm(e, t);
        let r = new lo("0.0.0");
        if (e.test(r) || (r = new lo("0.0.0-0"), e.test(r))) return r;
        r = null;
        for (let n = 0; n < e.set.length; ++n) {
            const i = e.set[n];
            let s = null;
            i.forEach(a => {
                const c = new lo(a.semver.version);
                switch (a.operator) {
                    case ">":
                        c.prerelease.length === 0 ? c.patch++ : c.prerelease.push(0), c.raw = c.format();
                    case "":
                    case ">=":
                        (!s || Gc(c, s)) && (s = c);
                        break;
                    case "<":
                    case "<=":
                        break;
                    default:
                        throw new Error(`Unexpected operation: ${a.operator}`)
                }
            }), s && (!r || Gc(r, s)) && (r = s)
        }
        return r && e.test(r) ? r : null
    };
var mm = _m;
const vm = Rt(),
    bm = (e, t) => {
        try {
            return new vm(e, t).range || "*"
        } catch {
            return null
        }
    };
var ym = bm;
const wm = st,
    yh = ys(),
    {
        ANY: Em
    } = yh,
    Sm = Rt(),
    Rm = ws,
    Jc = bs,
    Zc = la,
    Mm = ha,
    Cm = ua,
    km = (e, t, r, n) => {
        e = new wm(e, n), t = new Sm(t, n);
        let i, s, a, c, l;
        switch (r) {
            case ">":
                i = Jc, s = Mm, a = Zc, c = ">", l = ">=";
                break;
            case "<":
                i = Zc, s = Cm, a = Jc, c = "<", l = "<=";
                break;
            default:
                throw new TypeError('Must provide a hilo val of "<" or ">"')
        }
        if (Rm(e, t, n)) return !1;
        for (let h = 0; h < t.set.length; ++h) {
            const p = t.set[h];
            let f = null,
                _ = null;
            if (p.forEach(R => {
                    R.semver === Em && (R = new yh(">=0.0.0")), f = f || R, _ = _ || R, i(R.semver, f.semver, n) ? f = R : a(R.semver, _.semver, n) && (_ = R)
                }), f.operator === c || f.operator === l || (!_.operator || _.operator === c) && s(e, _.semver)) return !1;
            if (_.operator === l && a(e, _.semver)) return !1
        }
        return !0
    };
var da = km;
const Im = da,
    xm = (e, t, r) => Im(e, t, ">", r);
var Am = xm;
const Nm = da,
    Tm = (e, t, r) => Nm(e, t, "<", r);
var Lm = Tm;
const Kc = Rt(),
    Pm = (e, t, r) => (e = new Kc(e, r), t = new Kc(t, r), e.intersects(t, r));
var Om = Pm;
const $m = ws,
    Bm = St;
var Dm = (e, t, r) => {
    const n = [];
    let i = null,
        s = null;
    const a = e.sort((p, f) => Bm(p, f, r));
    for (const p of a) $m(p, t, r) ? (s = p, i || (i = p)) : (s && n.push([i, s]), s = null, i = null);
    i && n.push([i, null]);
    const c = [];
    for (const [p, f] of n) p === f ? c.push(p) : !f && p === a[0] ? c.push("*") : f ? p === a[0] ? c.push(`<=${f}`) : c.push(`${p} - ${f}`) : c.push(`>=${p}`);
    const l = c.join(" || "),
        h = typeof t.raw == "string" ? t.raw : String(t);
    return l.length < h.length ? l : t
};
const Qc = Rt(),
    fa = ys(),
    {
        ANY: uo
    } = fa,
    Cn = ws,
    pa = St,
    Fm = (e, t, r = {}) => {
        if (e === t) return !0;
        e = new Qc(e, r), t = new Qc(t, r);
        let n = !1;
        e: for (const i of e.set) {
            for (const s of t.set) {
                const a = Hm(i, s, r);
                if (n = n || a !== null, a) continue e
            }
            if (n) return !1
        }
        return !0
    },
    jm = [new fa(">=0.0.0-0")],
    Yc = [new fa(">=0.0.0")],
    Hm = (e, t, r) => {
        if (e === t) return !0;
        if (e.length === 1 && e[0].semver === uo) {
            if (t.length === 1 && t[0].semver === uo) return !0;
            r.includePrerelease ? e = jm : e = Yc
        }
        if (t.length === 1 && t[0].semver === uo) {
            if (r.includePrerelease) return !0;
            t = Yc
        }
        const n = new Set;
        let i, s;
        for (const R of e) R.operator === ">" || R.operator === ">=" ? i = Xc(i, R, r) : R.operator === "<" || R.operator === "<=" ? s = el(s, R, r) : n.add(R.semver);
        if (n.size > 1) return null;
        let a;
        if (i && s) {
            if (a = pa(i.semver, s.semver, r), a > 0) return null;
            if (a === 0 && (i.operator !== ">=" || s.operator !== "<=")) return null
        }
        for (const R of n) {
            if (i && !Cn(R, String(i), r) || s && !Cn(R, String(s), r)) return null;
            for (const A of t)
                if (!Cn(R, String(A), r)) return !1;
            return !0
        }
        let c, l, h, p, f = s && !r.includePrerelease && s.semver.prerelease.length ? s.semver : !1,
            _ = i && !r.includePrerelease && i.semver.prerelease.length ? i.semver : !1;
        f && f.prerelease.length === 1 && s.operator === "<" && f.prerelease[0] === 0 && (f = !1);
        for (const R of t) {
            if (p = p || R.operator === ">" || R.operator === ">=", h = h || R.operator === "<" || R.operator === "<=", i) {
                if (_ && R.semver.prerelease && R.semver.prerelease.length && R.semver.major === _.major && R.semver.minor === _.minor && R.semver.patch === _.patch && (_ = !1), R.operator === ">" || R.operator === ">=") {
                    if (c = Xc(i, R, r), c === R && c !== i) return !1
                } else if (i.operator === ">=" && !Cn(i.semver, String(R), r)) return !1
            }
            if (s) {
                if (f && R.semver.prerelease && R.semver.prerelease.length && R.semver.major === f.major && R.semver.minor === f.minor && R.semver.patch === f.patch && (f = !1), R.operator === "<" || R.operator === "<=") {
                    if (l = el(s, R, r), l === R && l !== s) return !1
                } else if (s.operator === "<=" && !Cn(s.semver, String(R), r)) return !1
            }
            if (!R.operator && (s || i) && a !== 0) return !1
        }
        return !(i && h && !s && a !== 0 || s && p && !i && a !== 0 || _ || f)
    },
    Xc = (e, t, r) => {
        if (!e) return t;
        const n = pa(e.semver, t.semver, r);
        return n > 0 ? e : n < 0 || t.operator === ">" && e.operator === ">=" ? t : e
    },
    el = (e, t, r) => {
        if (!e) return t;
        const n = pa(e.semver, t.semver, r);
        return n < 0 ? e : n > 0 || t.operator === "<" && e.operator === "<=" ? t : e
    };
var Um = Fm;
const ho = oi,
    tl = ms,
    Wm = st,
    rl = gh,
    Vm = Sn,
    qm = Vg,
    zm = Gg,
    Gm = Zg,
    Jm = Qg,
    Zm = e_,
    Km = n_,
    Qm = o_,
    Ym = l_,
    Xm = St,
    ev = f_,
    tv = __,
    rv = ca,
    nv = y_,
    iv = S_,
    sv = bs,
    ov = la,
    av = _h,
    cv = mh,
    lv = ua,
    uv = ha,
    hv = vh,
    dv = z_,
    fv = ys(),
    pv = Rt(),
    gv = ws,
    _v = om,
    mv = um,
    vv = pm,
    bv = mm,
    yv = ym,
    wv = da,
    Ev = Am,
    Sv = Lm,
    Rv = Om,
    Mv = Dm,
    Cv = Um;
var kv = {
    parse: Vm,
    valid: qm,
    clean: zm,
    inc: Gm,
    diff: Jm,
    major: Zm,
    minor: Km,
    patch: Qm,
    prerelease: Ym,
    compare: Xm,
    rcompare: ev,
    compareLoose: tv,
    compareBuild: rv,
    sort: nv,
    rsort: iv,
    gt: sv,
    lt: ov,
    eq: av,
    neq: cv,
    gte: lv,
    lte: uv,
    cmp: hv,
    coerce: dv,
    Comparator: fv,
    Range: pv,
    satisfies: gv,
    toComparators: _v,
    maxSatisfying: mv,
    minSatisfying: vv,
    minVersion: bv,
    validRange: yv,
    outside: wv,
    gtr: Ev,
    ltr: Sv,
    intersects: Rv,
    simplifyRange: Mv,
    subset: Cv,
    SemVer: Wm,
    re: ho.re,
    src: ho.src,
    tokens: ho.t,
    SEMVER_SPEC_VERSION: tl.SEMVER_SPEC_VERSION,
    RELEASE_TYPES: tl.RELEASE_TYPES,
    compareIdentifiers: rl.compareIdentifiers,
    rcompareIdentifiers: rl.rcompareIdentifiers
};
(function (e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.satisfiesVersionRange = e.gtRange = e.gtVersion = e.assertIsSemVerRange = e.assertIsSemVerVersion = e.isValidSemVerRange = e.isValidSemVerVersion = e.VersionRangeStruct = e.VersionStruct = void 0;
    const t = kv,
        r = Lr,
        n = tt;
    e.VersionStruct = (0, r.refine)((0, r.string)(), "Version", f => (0, t.valid)(f) === null ? `Expected SemVer version, got "${f}"` : !0), e.VersionRangeStruct = (0, r.refine)((0, r.string)(), "Version range", f => (0, t.validRange)(f) === null ? `Expected SemVer range, got "${f}"` : !0);

    function i(f) {
        return (0, r.is)(f, e.VersionStruct)
    }
    e.isValidSemVerVersion = i;

    function s(f) {
        return (0, r.is)(f, e.VersionRangeStruct)
    }
    e.isValidSemVerRange = s;

    function a(f) {
        (0, n.assertStruct)(f, e.VersionStruct)
    }
    e.assertIsSemVerVersion = a;

    function c(f) {
        (0, n.assertStruct)(f, e.VersionRangeStruct)
    }
    e.assertIsSemVerRange = c;

    function l(f, _) {
        return (0, t.gt)(f, _)
    }
    e.gtVersion = l;

    function h(f, _) {
        return (0, t.gtr)(f, _)
    }
    e.gtRange = h;

    function p(f, _) {
        return (0, t.satisfies)(f, _, {
            includePrerelease: !0
        })
    }
    e.satisfiesVersionRange = p
})(dh);
(function (e) {
    var t = J && J.__createBinding || (Object.create ? function (n, i, s, a) {
            a === void 0 && (a = s);
            var c = Object.getOwnPropertyDescriptor(i, s);
            (!c || ("get" in c ? !i.__esModule : c.writable || c.configurable)) && (c = {
                enumerable: !0,
                get: function () {
                    return i[s]
                }
            }), Object.defineProperty(n, a, c)
        } : function (n, i, s, a) {
            a === void 0 && (a = s), n[a] = i[s]
        }),
        r = J && J.__exportStar || function (n, i) {
            for (var s in n) s !== "default" && !Object.prototype.hasOwnProperty.call(i, s) && t(i, n, s)
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), r(tt, e), r(ii, e), r(ae, e), r(gs, e), r(Lt, e), r(dn, e), r(sh, e), r(si, e), r(oh, e), r(ah, e), r(fn, e), r(ch, e), r(Pt, e), r(lh, e), r(uh, e), r(hh, e), r(dh, e)
})(ju);
(function (e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.createModuleLogger = e.projectLogger = void 0;
    const t = ju;
    Object.defineProperty(e, "createModuleLogger", {
        enumerable: !0,
        get: function () {
            return t.createModuleLogger
        }
    }), e.projectLogger = (0, t.createProjectLogger)("eth-block-tracker")
})(Fu);
var wh = J && J.__importDefault || function (e) {
    return e && e.__esModule ? e : {
        default: e
    }
};
Object.defineProperty(fs, "__esModule", {
    value: !0
});
fs.PollingBlockTracker = void 0;
const Iv = wh(Qo),
    xv = wh(Gp),
    Av = ti,
    nl = Fu,
    il = (0, nl.createModuleLogger)(nl.projectLogger, "polling-block-tracker"),
    Nv = (0, Iv.default)(),
    Tv = 1e3;
class Lv extends Av.BaseBlockTracker {
    constructor(t = {}) {
        var r;
        if (!t.provider) throw new Error("PollingBlockTracker - no provider specified.");
        super(Object.assign(Object.assign({}, t), {
            blockResetDuration: (r = t.blockResetDuration) !== null && r !== void 0 ? r : t.pollingInterval
        })), this._provider = t.provider, this._pollingInterval = t.pollingInterval || 20 * Tv, this._retryTimeout = t.retryTimeout || this._pollingInterval / 10, this._keepEventLoopActive = t.keepEventLoopActive === void 0 ? !0 : t.keepEventLoopActive, this._setSkipCacheFlag = t.setSkipCacheFlag || !1
    }
    async checkForLatestBlock() {
        return await this._updateLatestBlock(), await this.getLatestBlock()
    }
    async _start() {
        this._synchronize()
    }
    async _end() {}
    async _synchronize() {
        for (var t; this._isRunning;) try {
            await this._updateLatestBlock();
            const r = sl(this._pollingInterval, !this._keepEventLoopActive);
            this.emit("_waitingForNextIteration"), await r
        } catch (r) {
            const n = new Error(`PollingBlockTracker - encountered an error while attempting to update latest block:
${(t=r.stack)!==null&&t!==void 0?t:r}`);
            try {
                this.emit("error", n)
            } catch {
                console.error(n)
            }
            const i = sl(this._retryTimeout, !this._keepEventLoopActive);
            this.emit("_waitingForNextIteration"), await i
        }
    }
    async _updateLatestBlock() {
        const t = await this._fetchLatestBlock();
        this._newPotentialLatest(t)
    }
    async _fetchLatestBlock() {
        const t = {
            jsonrpc: "2.0",
            id: Nv(),
            method: "eth_blockNumber",
            params: []
        };
        this._setSkipCacheFlag && (t.skipCache = !0), il("Making request", t);
        const r = await (0, xv.default)(n => this._provider.sendAsync(t, n))();
        if (il("Got response", r), r.error) throw new Error(`PollingBlockTracker - encountered error fetching block:
${r.error.message}`);
        return r.result
    }
}
fs.PollingBlockTracker = Lv;

function sl(e, t) {
    return new Promise(r => {
        const n = setTimeout(r, e);
        n.unref && t && n.unref()
    })
}
var Es = {},
    Pv = J && J.__importDefault || function (e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
Object.defineProperty(Es, "__esModule", {
    value: !0
});
Es.SubscribeBlockTracker = void 0;
const Ov = Pv(Qo),
    $v = ti,
    Bv = (0, Ov.default)();
class Dv extends $v.BaseBlockTracker {
    constructor(t = {}) {
        if (!t.provider) throw new Error("SubscribeBlockTracker - no provider specified.");
        super(t), this._provider = t.provider, this._subscriptionId = null
    }
    async checkForLatestBlock() {
        return await this.getLatestBlock()
    }
    async _start() {
        if (this._subscriptionId === void 0 || this._subscriptionId === null) try {
            const t = await this._call("eth_blockNumber");
            this._subscriptionId = await this._call("eth_subscribe", "newHeads"), this._provider.on("data", this._handleSubData.bind(this)), this._newPotentialLatest(t)
        } catch (t) {
            this.emit("error", t)
        }
    }
    async _end() {
        if (this._subscriptionId !== null && this._subscriptionId !== void 0) try {
            await this._call("eth_unsubscribe", this._subscriptionId), this._subscriptionId = null
        } catch (t) {
            this.emit("error", t)
        }
    }
    _call(t, ...r) {
        return new Promise((n, i) => {
            this._provider.sendAsync({
                id: Bv(),
                method: t,
                params: r,
                jsonrpc: "2.0"
            }, (s, a) => {
                s ? i(s) : n(a.result)
            })
        })
    }
    _handleSubData(t, r) {
        var n;
        r.method === "eth_subscription" && ((n = r.params) === null || n === void 0 ? void 0 : n.subscription) === this._subscriptionId && this._newPotentialLatest(r.params.result.number)
    }
}
Es.SubscribeBlockTracker = Dv;
(function (e) {
    var t = J && J.__createBinding || (Object.create ? function (n, i, s, a) {
            a === void 0 && (a = s), Object.defineProperty(n, a, {
                enumerable: !0,
                get: function () {
                    return i[s]
                }
            })
        } : function (n, i, s, a) {
            a === void 0 && (a = s), n[a] = i[s]
        }),
        r = J && J.__exportStar || function (n, i) {
            for (var s in n) s !== "default" && !Object.prototype.hasOwnProperty.call(i, s) && t(i, n, s)
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), r(fs, e), r(Es, e)
})(Du);
var Ss = {};
Object.defineProperty(Ss, "__esModule", {
    value: !0
});
const Fv = Dn;

function ol(e, t, r) {
    try {
        Reflect.apply(e, t, r)
    } catch (n) {
        setTimeout(() => {
            throw n
        })
    }
}

function jv(e) {
    const t = e.length,
        r = new Array(t);
    for (let n = 0; n < t; n += 1) r[n] = e[n];
    return r
}
let Hv = class extends Fv.EventEmitter {
    emit(t, ...r) {
        let n = t === "error";
        const i = this._events;
        if (i !== void 0) n = n && i.error === void 0;
        else if (!n) return !1;
        if (n) {
            let a;
            if (r.length > 0 && ([a] = r), a instanceof Error) throw a;
            const c = new Error(`Unhandled error.${a?` (${a.message})`:""}`);
            throw c.context = a, c
        }
        const s = i[t];
        if (s === void 0) return !1;
        if (typeof s == "function") ol(s, this, r);
        else {
            const a = s.length,
                c = jv(s);
            for (let l = 0; l < a; l += 1) ol(c[l], this, r)
        }
        return !0
    }
};
Ss.default = Hv;
var ga = {},
    Rs = {},
    ai = {};
Object.defineProperty(ai, "__esModule", {
    value: !0
});
ai.getUniqueId = void 0;
const Eh = 4294967295;
let fo = Math.floor(Math.random() * Eh);

function Uv() {
    return fo = (fo + 1) % Eh, fo
}
ai.getUniqueId = Uv;
Object.defineProperty(Rs, "__esModule", {
    value: !0
});
Rs.createIdRemapMiddleware = void 0;
const Wv = ai;

function Vv() {
    return (e, t, r, n) => {
        const i = e.id,
            s = Wv.getUniqueId();
        e.id = s, t.id = s, r(a => {
            e.id = i, t.id = i, a()
        })
    }
}
Rs.createIdRemapMiddleware = Vv;
var Ms = {};
Object.defineProperty(Ms, "__esModule", {
    value: !0
});
Ms.createAsyncMiddleware = void 0;

function qv(e) {
    return async (t, r, n, i) => {
        let s;
        const a = new Promise(p => {
            s = p
        });
        let c = null,
            l = !1;
        const h = async () => {
            l = !0, n(p => {
                c = p, s()
            }), await a
        };
        try {
            await e(t, r, h), l ? (await a, c(null)) : i(null)
        } catch (p) {
            c ? c(p) : i(p)
        }
    }
}
Ms.createAsyncMiddleware = qv;
var Cs = {};
Object.defineProperty(Cs, "__esModule", {
    value: !0
});
Cs.createScaffoldMiddleware = void 0;

function zv(e) {
    return (t, r, n, i) => {
        const s = e[t.method];
        return s === void 0 ? n() : typeof s == "function" ? s(t, r, n, i) : (r.result = s, i())
    }
}
Cs.createScaffoldMiddleware = zv;
var ci = {},
    _a = {};
Object.defineProperty(_a, "__esModule", {
    value: !0
});
const Gv = Dn;

function al(e, t, r) {
    try {
        Reflect.apply(e, t, r)
    } catch (n) {
        setTimeout(() => {
            throw n
        })
    }
}

function Jv(e) {
    const t = e.length,
        r = new Array(t);
    for (let n = 0; n < t; n += 1) r[n] = e[n];
    return r
}
let Zv = class extends Gv.EventEmitter {
    emit(t, ...r) {
        let n = t === "error";
        const i = this._events;
        if (i !== void 0) n = n && i.error === void 0;
        else if (!n) return !1;
        if (n) {
            let a;
            if (r.length > 0 && ([a] = r), a instanceof Error) throw a;
            const c = new Error(`Unhandled error.${a?` (${a.message})`:""}`);
            throw c.context = a, c
        }
        const s = i[t];
        if (s === void 0) return !1;
        if (typeof s == "function") al(s, this, r);
        else {
            const a = s.length,
                c = Jv(s);
            for (let l = 0; l < a; l += 1) al(c[l], this, r)
        }
        return !0
    }
};
_a.default = Zv;
var Sh = {},
    Zt = {},
    Kv = Bn;
Bn.default = Bn;
Bn.stable = Ch;
Bn.stableStringify = Ch;
var Ti = "[...]",
    Rh = "[Circular]",
    kr = [],
    Er = [];

function Mh() {
    return {
        depthLimit: Number.MAX_SAFE_INTEGER,
        edgesLimit: Number.MAX_SAFE_INTEGER
    }
}

function Bn(e, t, r, n) {
    typeof n > "u" && (n = Mh()), No(e, "", 0, [], void 0, 0, n);
    var i;
    try {
        Er.length === 0 ? i = JSON.stringify(e, t, r) : i = JSON.stringify(e, kh(t), r)
    } catch {
        return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")
    } finally {
        for (; kr.length !== 0;) {
            var s = kr.pop();
            s.length === 4 ? Object.defineProperty(s[0], s[1], s[3]) : s[0][s[1]] = s[2]
        }
    }
    return i
}

function sn(e, t, r, n) {
    var i = Object.getOwnPropertyDescriptor(n, r);
    i.get !== void 0 ? i.configurable ? (Object.defineProperty(n, r, {
        value: e
    }), kr.push([n, r, t, i])) : Er.push([t, r, e]) : (n[r] = e, kr.push([n, r, t]))
}

function No(e, t, r, n, i, s, a) {
    s += 1;
    var c;
    if (typeof e == "object" && e !== null) {
        for (c = 0; c < n.length; c++)
            if (n[c] === e) {
                sn(Rh, e, t, i);
                return
            } if (typeof a.depthLimit < "u" && s > a.depthLimit) {
            sn(Ti, e, t, i);
            return
        }
        if (typeof a.edgesLimit < "u" && r + 1 > a.edgesLimit) {
            sn(Ti, e, t, i);
            return
        }
        if (n.push(e), Array.isArray(e))
            for (c = 0; c < e.length; c++) No(e[c], c, c, n, e, s, a);
        else {
            var l = Object.keys(e);
            for (c = 0; c < l.length; c++) {
                var h = l[c];
                No(e[h], h, c, n, e, s, a)
            }
        }
        n.pop()
    }
}

function Qv(e, t) {
    return e < t ? -1 : e > t ? 1 : 0
}

function Ch(e, t, r, n) {
    typeof n > "u" && (n = Mh());
    var i = To(e, "", 0, [], void 0, 0, n) || e,
        s;
    try {
        Er.length === 0 ? s = JSON.stringify(i, t, r) : s = JSON.stringify(i, kh(t), r)
    } catch {
        return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")
    } finally {
        for (; kr.length !== 0;) {
            var a = kr.pop();
            a.length === 4 ? Object.defineProperty(a[0], a[1], a[3]) : a[0][a[1]] = a[2]
        }
    }
    return s
}

function To(e, t, r, n, i, s, a) {
    s += 1;
    var c;
    if (typeof e == "object" && e !== null) {
        for (c = 0; c < n.length; c++)
            if (n[c] === e) {
                sn(Rh, e, t, i);
                return
            } try {
            if (typeof e.toJSON == "function") return
        } catch {
            return
        }
        if (typeof a.depthLimit < "u" && s > a.depthLimit) {
            sn(Ti, e, t, i);
            return
        }
        if (typeof a.edgesLimit < "u" && r + 1 > a.edgesLimit) {
            sn(Ti, e, t, i);
            return
        }
        if (n.push(e), Array.isArray(e))
            for (c = 0; c < e.length; c++) To(e[c], c, c, n, e, s, a);
        else {
            var l = {},
                h = Object.keys(e).sort(Qv);
            for (c = 0; c < h.length; c++) {
                var p = h[c];
                To(e[p], p, c, n, e, s, a), l[p] = e[p]
            }
            if (typeof i < "u") kr.push([i, t, e]), i[t] = l;
            else return l
        }
        n.pop()
    }
}

function kh(e) {
    return e = typeof e < "u" ? e : function (t, r) {
            return r
        },
        function (t, r) {
            if (Er.length > 0)
                for (var n = 0; n < Er.length; n++) {
                    var i = Er[n];
                    if (i[1] === t && i[0] === r) {
                        r = i[2], Er.splice(n, 1);
                        break
                    }
                }
            return e.call(this, t, r)
        }
}
Object.defineProperty(Zt, "__esModule", {
    value: !0
});
Zt.EthereumProviderError = Zt.EthereumRpcError = void 0;
const Yv = Kv;
class Ih extends Error {
    constructor(t, r, n) {
        if (!Number.isInteger(t)) throw new Error('"code" must be an integer.');
        if (!r || typeof r != "string") throw new Error('"message" must be a nonempty string.');
        super(r), this.code = t, n !== void 0 && (this.data = n)
    }
    serialize() {
        const t = {
            code: this.code,
            message: this.message
        };
        return this.data !== void 0 && (t.data = this.data), this.stack && (t.stack = this.stack), t
    }
    toString() {
        return Yv.default(this.serialize(), tb, 2)
    }
}
Zt.EthereumRpcError = Ih;
class Xv extends Ih {
    constructor(t, r, n) {
        if (!eb(t)) throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
        super(t, r, n)
    }
}
Zt.EthereumProviderError = Xv;

function eb(e) {
    return Number.isInteger(e) && e >= 1e3 && e <= 4999
}

function tb(e, t) {
    if (t !== "[Circular]") return t
}
var ma = {},
    Kt = {};
Object.defineProperty(Kt, "__esModule", {
    value: !0
});
Kt.errorValues = Kt.errorCodes = void 0;
Kt.errorCodes = {
    rpc: {
        invalidInput: -32e3,
        resourceNotFound: -32001,
        resourceUnavailable: -32002,
        transactionRejected: -32003,
        methodNotSupported: -32004,
        limitExceeded: -32005,
        parse: -32700,
        invalidRequest: -32600,
        methodNotFound: -32601,
        invalidParams: -32602,
        internal: -32603
    },
    provider: {
        userRejectedRequest: 4001,
        unauthorized: 4100,
        unsupportedMethod: 4200,
        disconnected: 4900,
        chainDisconnected: 4901
    }
};
Kt.errorValues = {
    "-32700": {
        standard: "JSON RPC 2.0",
        message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
    },
    "-32600": {
        standard: "JSON RPC 2.0",
        message: "The JSON sent is not a valid Request object."
    },
    "-32601": {
        standard: "JSON RPC 2.0",
        message: "The method does not exist / is not available."
    },
    "-32602": {
        standard: "JSON RPC 2.0",
        message: "Invalid method parameter(s)."
    },
    "-32603": {
        standard: "JSON RPC 2.0",
        message: "Internal JSON-RPC error."
    },
    "-32000": {
        standard: "EIP-1474",
        message: "Invalid input."
    },
    "-32001": {
        standard: "EIP-1474",
        message: "Resource not found."
    },
    "-32002": {
        standard: "EIP-1474",
        message: "Resource unavailable."
    },
    "-32003": {
        standard: "EIP-1474",
        message: "Transaction rejected."
    },
    "-32004": {
        standard: "EIP-1474",
        message: "Method not supported."
    },
    "-32005": {
        standard: "EIP-1474",
        message: "Request limit exceeded."
    },
    4001: {
        standard: "EIP-1193",
        message: "User rejected the request."
    },
    4100: {
        standard: "EIP-1193",
        message: "The requested account and/or method has not been authorized by the user."
    },
    4200: {
        standard: "EIP-1193",
        message: "The requested method is not supported by this Ethereum provider."
    },
    4900: {
        standard: "EIP-1193",
        message: "The provider is disconnected from all chains."
    },
    4901: {
        standard: "EIP-1193",
        message: "The provider is disconnected from the specified chain."
    }
};
(function (e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.serializeError = e.isValidCode = e.getMessageFromCode = e.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
    const t = Kt,
        r = Zt,
        n = t.errorCodes.rpc.internal,
        i = "Unspecified error message. This is a bug, please report it.",
        s = {
            code: n,
            message: a(n)
        };
    e.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.";

    function a(_, R = i) {
        if (Number.isInteger(_)) {
            const A = _.toString();
            if (f(t.errorValues, A)) return t.errorValues[A].message;
            if (h(_)) return e.JSON_RPC_SERVER_ERROR_MESSAGE
        }
        return R
    }
    e.getMessageFromCode = a;

    function c(_) {
        if (!Number.isInteger(_)) return !1;
        const R = _.toString();
        return !!(t.errorValues[R] || h(_))
    }
    e.isValidCode = c;

    function l(_, {
        fallbackError: R = s,
        shouldIncludeStack: A = !1
    } = {}) {
        var O, L;
        if (!R || !Number.isInteger(R.code) || typeof R.message != "string") throw new Error("Must provide fallback error with integer number code and string message.");
        if (_ instanceof r.EthereumRpcError) return _.serialize();
        const M = {};
        if (_ && typeof _ == "object" && !Array.isArray(_) && f(_, "code") && c(_.code)) {
            const T = _;
            M.code = T.code, T.message && typeof T.message == "string" ? (M.message = T.message, f(T, "data") && (M.data = T.data)) : (M.message = a(M.code), M.data = {
                originalError: p(_)
            })
        } else {
            M.code = R.code;
            const T = (O = _) === null || O === void 0 ? void 0 : O.message;
            M.message = T && typeof T == "string" ? T : R.message, M.data = {
                originalError: p(_)
            }
        }
        const k = (L = _) === null || L === void 0 ? void 0 : L.stack;
        return A && _ && k && typeof k == "string" && (M.stack = k), M
    }
    e.serializeError = l;

    function h(_) {
        return _ >= -32099 && _ <= -32e3
    }

    function p(_) {
        return _ && typeof _ == "object" && !Array.isArray(_) ? Object.assign({}, _) : _
    }

    function f(_, R) {
        return Object.prototype.hasOwnProperty.call(_, R)
    }
})(ma);
var ks = {};
Object.defineProperty(ks, "__esModule", {
    value: !0
});
ks.ethErrors = void 0;
const va = Zt,
    xh = ma,
    rt = Kt;
ks.ethErrors = {
    rpc: {
        parse: e => ft(rt.errorCodes.rpc.parse, e),
        invalidRequest: e => ft(rt.errorCodes.rpc.invalidRequest, e),
        invalidParams: e => ft(rt.errorCodes.rpc.invalidParams, e),
        methodNotFound: e => ft(rt.errorCodes.rpc.methodNotFound, e),
        internal: e => ft(rt.errorCodes.rpc.internal, e),
        server: e => {
            if (!e || typeof e != "object" || Array.isArray(e)) throw new Error("Ethereum RPC Server errors must provide single object argument.");
            const {
                code: t
            } = e;
            if (!Number.isInteger(t) || t > -32005 || t < -32099) throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
            return ft(t, e)
        },
        invalidInput: e => ft(rt.errorCodes.rpc.invalidInput, e),
        resourceNotFound: e => ft(rt.errorCodes.rpc.resourceNotFound, e),
        resourceUnavailable: e => ft(rt.errorCodes.rpc.resourceUnavailable, e),
        transactionRejected: e => ft(rt.errorCodes.rpc.transactionRejected, e),
        methodNotSupported: e => ft(rt.errorCodes.rpc.methodNotSupported, e),
        limitExceeded: e => ft(rt.errorCodes.rpc.limitExceeded, e)
    },
    provider: {
        userRejectedRequest: e => kn(rt.errorCodes.provider.userRejectedRequest, e),
        unauthorized: e => kn(rt.errorCodes.provider.unauthorized, e),
        unsupportedMethod: e => kn(rt.errorCodes.provider.unsupportedMethod, e),
        disconnected: e => kn(rt.errorCodes.provider.disconnected, e),
        chainDisconnected: e => kn(rt.errorCodes.provider.chainDisconnected, e),
        custom: e => {
            if (!e || typeof e != "object" || Array.isArray(e)) throw new Error("Ethereum Provider custom errors must provide single object argument.");
            const {
                code: t,
                message: r,
                data: n
            } = e;
            if (!r || typeof r != "string") throw new Error('"message" must be a nonempty string');
            return new va.EthereumProviderError(t, r, n)
        }
    }
};

function ft(e, t) {
    const [r, n] = Ah(t);
    return new va.EthereumRpcError(e, r || xh.getMessageFromCode(e), n)
}

function kn(e, t) {
    const [r, n] = Ah(t);
    return new va.EthereumProviderError(e, r || xh.getMessageFromCode(e), n)
}

function Ah(e) {
    if (e) {
        if (typeof e == "string") return [e];
        if (typeof e == "object" && !Array.isArray(e)) {
            const {
                message: t,
                data: r
            } = e;
            if (t && typeof t != "string") throw new Error("Must specify string message.");
            return [t || void 0, r]
        }
    }
    return []
}(function (e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getMessageFromCode = e.serializeError = e.EthereumProviderError = e.EthereumRpcError = e.ethErrors = e.errorCodes = void 0;
    const t = Zt;
    Object.defineProperty(e, "EthereumRpcError", {
        enumerable: !0,
        get: function () {
            return t.EthereumRpcError
        }
    }), Object.defineProperty(e, "EthereumProviderError", {
        enumerable: !0,
        get: function () {
            return t.EthereumProviderError
        }
    });
    const r = ma;
    Object.defineProperty(e, "serializeError", {
        enumerable: !0,
        get: function () {
            return r.serializeError
        }
    }), Object.defineProperty(e, "getMessageFromCode", {
        enumerable: !0,
        get: function () {
            return r.getMessageFromCode
        }
    });
    const n = ks;
    Object.defineProperty(e, "ethErrors", {
        enumerable: !0,
        get: function () {
            return n.ethErrors
        }
    });
    const i = Kt;
    Object.defineProperty(e, "errorCodes", {
        enumerable: !0,
        get: function () {
            return i.errorCodes
        }
    })
})(Sh);
var rb = J && J.__importDefault || function (e) {
    return e && e.__esModule ? e : {
        default: e
    }
};
Object.defineProperty(ci, "__esModule", {
    value: !0
});
ci.JsonRpcEngine = void 0;
const nb = rb(_a),
    pt = Sh;
class Bt extends nb.default {
    constructor() {
        super(), this._middleware = []
    }
    push(t) {
        this._middleware.push(t)
    }
    handle(t, r) {
        if (r && typeof r != "function") throw new Error('"callback" must be a function if provided.');
        return Array.isArray(t) ? r ? this._handleBatch(t, r) : this._handleBatch(t) : r ? this._handle(t, r) : this._promiseHandle(t)
    }
    asMiddleware() {
        return async (t, r, n, i) => {
            try {
                const [s, a, c] = await Bt._runAllMiddleware(t, r, this._middleware);
                return a ? (await Bt._runReturnHandlers(c), i(s)) : n(async l => {
                    try {
                        await Bt._runReturnHandlers(c)
                    } catch (h) {
                        return l(h)
                    }
                    return l()
                })
            } catch (s) {
                return i(s)
            }
        }
    }
    async _handleBatch(t, r) {
        try {
            const n = await Promise.all(t.map(this._promiseHandle.bind(this)));
            return r ? r(null, n) : n
        } catch (n) {
            if (r) return r(n);
            throw n
        }
    }
    _promiseHandle(t) {
        return new Promise(r => {
            this._handle(t, (n, i) => {
                r(i)
            })
        })
    }
    async _handle(t, r) {
        if (!t || Array.isArray(t) || typeof t != "object") {
            const a = new pt.EthereumRpcError(pt.errorCodes.rpc.invalidRequest, `Requests must be plain objects. Received: ${typeof t}`, {
                request: t
            });
            return r(a, {
                id: void 0,
                jsonrpc: "2.0",
                error: a
            })
        }
        if (typeof t.method != "string") {
            const a = new pt.EthereumRpcError(pt.errorCodes.rpc.invalidRequest, `Must specify a string method. Received: ${typeof t.method}`, {
                request: t
            });
            return r(a, {
                id: t.id,
                jsonrpc: "2.0",
                error: a
            })
        }
        const n = Object.assign({}, t),
            i = {
                id: n.id,
                jsonrpc: n.jsonrpc
            };
        let s = null;
        try {
            await this._processRequest(n, i)
        } catch (a) {
            s = a
        }
        return s && (delete i.result, i.error || (i.error = pt.serializeError(s))), r(s, i)
    }
    async _processRequest(t, r) {
        const [n, i, s] = await Bt._runAllMiddleware(t, r, this._middleware);
        if (Bt._checkForCompletion(t, r, i), await Bt._runReturnHandlers(s), n) throw n
    }
    static async _runAllMiddleware(t, r, n) {
        const i = [];
        let s = null,
            a = !1;
        for (const c of n)
            if ([s, a] = await Bt._runMiddleware(t, r, c, i), a) break;
        return [s, a, i.reverse()]
    }
    static _runMiddleware(t, r, n, i) {
        return new Promise(s => {
            const a = l => {
                    const h = l || r.error;
                    h && (r.error = pt.serializeError(h)), s([h, !0])
                },
                c = l => {
                    r.error ? a(r.error) : (l && (typeof l != "function" && a(new pt.EthereumRpcError(pt.errorCodes.rpc.internal, `JsonRpcEngine: "next" return handlers must be functions. Received "${typeof l}" for request:
${po(t)}`, {
                        request: t
                    })), i.push(l)), s([null, !1]))
                };
            try {
                n(t, r, c, a)
            } catch (l) {
                a(l)
            }
        })
    }
    static async _runReturnHandlers(t) {
        for (const r of t) await new Promise((n, i) => {
            r(s => s ? i(s) : n())
        })
    }
    static _checkForCompletion(t, r, n) {
        if (!("result" in r) && !("error" in r)) throw new pt.EthereumRpcError(pt.errorCodes.rpc.internal, `JsonRpcEngine: Response has no error or result for request:
${po(t)}`, {
            request: t
        });
        if (!n) throw new pt.EthereumRpcError(pt.errorCodes.rpc.internal, `JsonRpcEngine: Nothing ended request:
${po(t)}`, {
            request: t
        })
    }
}
ci.JsonRpcEngine = Bt;

function po(e) {
    return JSON.stringify(e, null, 2)
}
var Is = {};
Object.defineProperty(Is, "__esModule", {
    value: !0
});
Is.mergeMiddleware = void 0;
const ib = ci;

function sb(e) {
    const t = new ib.JsonRpcEngine;
    return e.forEach(r => t.push(r)), t.asMiddleware()
}
Is.mergeMiddleware = sb;
(function (e) {
    var t = J && J.__createBinding || (Object.create ? function (n, i, s, a) {
            a === void 0 && (a = s), Object.defineProperty(n, a, {
                enumerable: !0,
                get: function () {
                    return i[s]
                }
            })
        } : function (n, i, s, a) {
            a === void 0 && (a = s), n[a] = i[s]
        }),
        r = J && J.__exportStar || function (n, i) {
            for (var s in n) s !== "default" && !Object.prototype.hasOwnProperty.call(i, s) && t(i, n, s)
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), r(Rs, e), r(Ms, e), r(Cs, e), r(ai, e), r(ci, e), r(Is, e)
})(ga);
var Nh = {},
    ba = {};
const ya = pn($h);
var xs = {};
Object.defineProperty(xs, "__esModule", {
    value: !0
});
var cl = ya,
    ob = function () {
        function e(t) {
            if (this._maxConcurrency = t, this._queue = [], t <= 0) throw new Error("semaphore must be initialized to a positive value");
            this._value = t
        }
        return e.prototype.acquire = function () {
            var t = this,
                r = this.isLocked(),
                n = new Promise(function (i) {
                    return t._queue.push(i)
                });
            return r || this._dispatch(), n
        }, e.prototype.runExclusive = function (t) {
            return cl.__awaiter(this, void 0, void 0, function () {
                var r, n, i;
                return cl.__generator(this, function (s) {
                    switch (s.label) {
                        case 0:
                            return [4, this.acquire()];
                        case 1:
                            r = s.sent(), n = r[0], i = r[1], s.label = 2;
                        case 2:
                            return s.trys.push([2, , 4, 5]), [4, t(n)];
                        case 3:
                            return [2, s.sent()];
                        case 4:
                            return i(), [7];
                        case 5:
                            return [2]
                    }
                })
            })
        }, e.prototype.isLocked = function () {
            return this._value <= 0
        }, e.prototype.release = function () {
            if (this._maxConcurrency > 1) throw new Error("this method is unavailabel on semaphores with concurrency > 1; use the scoped release returned by acquire instead");
            if (this._currentReleaser) {
                var t = this._currentReleaser;
                this._currentReleaser = void 0, t()
            }
        }, e.prototype._dispatch = function () {
            var t = this,
                r = this._queue.shift();
            if (r) {
                var n = !1;
                this._currentReleaser = function () {
                    n || (n = !0, t._value++, t._dispatch())
                }, r([this._value--, this._currentReleaser])
            }
        }, e
    }();
xs.default = ob;
Object.defineProperty(ba, "__esModule", {
    value: !0
});
var ll = ya,
    ab = xs,
    cb = function () {
        function e() {
            this._semaphore = new ab.default(1)
        }
        return e.prototype.acquire = function () {
            return ll.__awaiter(this, void 0, void 0, function () {
                var t, r;
                return ll.__generator(this, function (n) {
                    switch (n.label) {
                        case 0:
                            return [4, this._semaphore.acquire()];
                        case 1:
                            return t = n.sent(), r = t[1], [2, r]
                    }
                })
            })
        }, e.prototype.runExclusive = function (t) {
            return this._semaphore.runExclusive(function () {
                return t()
            })
        }, e.prototype.isLocked = function () {
            return this._semaphore.isLocked()
        }, e.prototype.release = function () {
            this._semaphore.release()
        }, e
    }();
ba.default = cb;
var As = {};
Object.defineProperty(As, "__esModule", {
    value: !0
});
As.withTimeout = void 0;
var Ei = ya;

function lb(e, t, r) {
    var n = this;
    return r === void 0 && (r = new Error("timeout")), {
        acquire: function () {
            return new Promise(function (i, s) {
                return Ei.__awaiter(n, void 0, void 0, function () {
                    var a, c, l;
                    return Ei.__generator(this, function (h) {
                        switch (h.label) {
                            case 0:
                                return a = !1, setTimeout(function () {
                                    a = !0, s(r)
                                }, t), [4, e.acquire()];
                            case 1:
                                return c = h.sent(), a ? (l = Array.isArray(c) ? c[1] : c, l()) : i(c), [2]
                        }
                    })
                })
            })
        },
        runExclusive: function (i) {
            return Ei.__awaiter(this, void 0, void 0, function () {
                var s, a;
                return Ei.__generator(this, function (c) {
                    switch (c.label) {
                        case 0:
                            s = function () {}, c.label = 1;
                        case 1:
                            return c.trys.push([1, , 7, 8]), [4, this.acquire()];
                        case 2:
                            return a = c.sent(), Array.isArray(a) ? (s = a[1], [4, i(a[0])]) : [3, 4];
                        case 3:
                            return [2, c.sent()];
                        case 4:
                            return s = a, [4, i()];
                        case 5:
                            return [2, c.sent()];
                        case 6:
                            return [3, 8];
                        case 7:
                            return s(), [7];
                        case 8:
                            return [2]
                    }
                })
            })
        },
        release: function () {
            e.release()
        },
        isLocked: function () {
            return e.isLocked()
        }
    }
}
As.withTimeout = lb;
(function (e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.withTimeout = e.Semaphore = e.Mutex = void 0;
    var t = ba;
    Object.defineProperty(e, "Mutex", {
        enumerable: !0,
        get: function () {
            return t.default
        }
    });
    var r = xs;
    Object.defineProperty(e, "Semaphore", {
        enumerable: !0,
        get: function () {
            return r.default
        }
    });
    var n = As;
    Object.defineProperty(e, "withTimeout", {
        enumerable: !0,
        get: function () {
            return n.withTimeout
        }
    })
})(Nh);
var ub = db,
    hb = Object.prototype.hasOwnProperty;

function db() {
    for (var e = {}, t = 0; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) hb.call(r, n) && (e[n] = r[n])
    }
    return e
}
const fb = ub,
    pb = Qo();
var gb = Y;

function Y(e) {
    const t = this;
    t.currentProvider = e
}
Y.prototype.getBalance = li(2, "eth_getBalance");
Y.prototype.getCode = li(2, "eth_getCode");
Y.prototype.getTransactionCount = li(2, "eth_getTransactionCount");
Y.prototype.getStorageAt = li(3, "eth_getStorageAt");
Y.prototype.call = li(2, "eth_call");
Y.prototype.protocolVersion = ne("eth_protocolVersion");
Y.prototype.syncing = ne("eth_syncing");
Y.prototype.coinbase = ne("eth_coinbase");
Y.prototype.mining = ne("eth_mining");
Y.prototype.hashrate = ne("eth_hashrate");
Y.prototype.gasPrice = ne("eth_gasPrice");
Y.prototype.accounts = ne("eth_accounts");
Y.prototype.blockNumber = ne("eth_blockNumber");
Y.prototype.getBlockTransactionCountByHash = ne("eth_getBlockTransactionCountByHash");
Y.prototype.getBlockTransactionCountByNumber = ne("eth_getBlockTransactionCountByNumber");
Y.prototype.getUncleCountByBlockHash = ne("eth_getUncleCountByBlockHash");
Y.prototype.getUncleCountByBlockNumber = ne("eth_getUncleCountByBlockNumber");
Y.prototype.sign = ne("eth_sign");
Y.prototype.sendTransaction = ne("eth_sendTransaction");
Y.prototype.sendRawTransaction = ne("eth_sendRawTransaction");
Y.prototype.estimateGas = ne("eth_estimateGas");
Y.prototype.getBlockByHash = ne("eth_getBlockByHash");
Y.prototype.getBlockByNumber = ne("eth_getBlockByNumber");
Y.prototype.getTransactionByHash = ne("eth_getTransactionByHash");
Y.prototype.getTransactionByBlockHashAndIndex = ne("eth_getTransactionByBlockHashAndIndex");
Y.prototype.getTransactionByBlockNumberAndIndex = ne("eth_getTransactionByBlockNumberAndIndex");
Y.prototype.getTransactionReceipt = ne("eth_getTransactionReceipt");
Y.prototype.getUncleByBlockHashAndIndex = ne("eth_getUncleByBlockHashAndIndex");
Y.prototype.getUncleByBlockNumberAndIndex = ne("eth_getUncleByBlockNumberAndIndex");
Y.prototype.getCompilers = ne("eth_getCompilers");
Y.prototype.compileLLL = ne("eth_compileLLL");
Y.prototype.compileSolidity = ne("eth_compileSolidity");
Y.prototype.compileSerpent = ne("eth_compileSerpent");
Y.prototype.newFilter = ne("eth_newFilter");
Y.prototype.newBlockFilter = ne("eth_newBlockFilter");
Y.prototype.newPendingTransactionFilter = ne("eth_newPendingTransactionFilter");
Y.prototype.uninstallFilter = ne("eth_uninstallFilter");
Y.prototype.getFilterChanges = ne("eth_getFilterChanges");
Y.prototype.getFilterLogs = ne("eth_getFilterLogs");
Y.prototype.getLogs = ne("eth_getLogs");
Y.prototype.getWork = ne("eth_getWork");
Y.prototype.submitWork = ne("eth_submitWork");
Y.prototype.submitHashrate = ne("eth_submitHashrate");
Y.prototype.sendAsync = function (e, t) {
    this.currentProvider.sendAsync(_b(e), function (n, i) {
        if (!n && i.error && (n = new Error("EthQuery - RPC Error - " + i.error.message)), n) return t(n);
        t(null, i.result)
    })
};

function ne(e) {
    return function () {
        const t = this;
        var r = [].slice.call(arguments),
            n = r.pop();
        t.sendAsync({
            method: e,
            params: r
        }, n)
    }
}

function li(e, t) {
    return function () {
        const r = this;
        var n = [].slice.call(arguments),
            i = n.pop();
        n.length < e && n.push("latest"), r.sendAsync({
            method: t,
            params: n
        }, i)
    }
}

function _b(e) {
    return fb({
        id: pb(),
        jsonrpc: "2.0",
        params: []
    }, e)
}
const ul = (e, t, r, n) => function (...i) {
        const s = t.promiseModule;
        return new s((a, c) => {
            t.multiArgs ? i.push((...h) => {
                t.errorFirst ? h[0] ? c(h) : (h.shift(), a(h)) : a(h)
            }) : t.errorFirst ? i.push((h, p) => {
                h ? c(h) : a(p)
            }) : i.push(a), Reflect.apply(e, this === r ? n : this, i)
        })
    },
    hl = new WeakMap;
var mb = (e, t) => {
    t = {
        exclude: [/.+(?:Sync|Stream)$/],
        errorFirst: !0,
        promiseModule: Promise,
        ...t
    };
    const r = typeof e;
    if (!(e !== null && (r === "object" || r === "function"))) throw new TypeError(`Expected \`input\` to be a \`Function\` or \`Object\`, got \`${e===null?"null":r}\``);
    const n = (a, c) => {
            let l = hl.get(a);
            if (l || (l = {}, hl.set(a, l)), c in l) return l[c];
            const h = A => typeof A == "string" || typeof c == "symbol" ? c === A : A.test(c),
                p = Reflect.getOwnPropertyDescriptor(a, c),
                f = p === void 0 || p.writable || p.configurable,
                R = (t.include ? t.include.some(h) : !t.exclude.some(h)) && f;
            return l[c] = R, R
        },
        i = new WeakMap,
        s = new Proxy(e, {
            apply(a, c, l) {
                const h = i.get(a);
                if (h) return Reflect.apply(h, c, l);
                const p = t.excludeMain ? a : ul(a, t, s, a);
                return i.set(a, p), Reflect.apply(p, c, l)
            },
            get(a, c) {
                const l = a[c];
                if (!n(a, c) || l === Function.prototype[c]) return l;
                const h = i.get(l);
                if (h) return h;
                if (typeof l == "function") {
                    const p = ul(l, t, s, a);
                    return i.set(l, p), p
                }
                return l
            }
        });
    return s
};
const vb = Ss.default;
let bb = class extends vb {
    constructor() {
        super(), this.updates = []
    }
    async initialize() {}
    async update() {
        throw new Error("BaseFilter - no update method specified")
    }
    addResults(t) {
        this.updates = this.updates.concat(t), t.forEach(r => this.emit("update", r))
    }
    addInitialResults(t) {}
    getChangesAndClear() {
        const t = this.updates;
        return this.updates = [], t
    }
};
var wa = bb;
const yb = wa;
let wb = class extends yb {
    constructor() {
        super(), this.allResults = []
    }
    async update() {
        throw new Error("BaseFilterWithHistory - no update method specified")
    }
    addResults(t) {
        this.allResults = this.allResults.concat(t), super.addResults(t)
    }
    addInitialResults(t) {
        this.allResults = this.allResults.concat(t), super.addInitialResults(t)
    }
    getAllResults() {
        return this.allResults
    }
};
var Eb = wb,
    ui = {
        minBlockRef: Sb,
        maxBlockRef: Rb,
        sortBlockRefs: Ea,
        bnToHex: Mb,
        blockRefIsNumber: Cb,
        hexToInt: Li,
        incrementHexInt: kb,
        intToHex: Th,
        unsafeRandomBytes: Ib
    };

function Sb(...e) {
    return Ea(e)[0]
}

function Rb(...e) {
    const t = Ea(e);
    return t[t.length - 1]
}

function Ea(e) {
    return e.sort((t, r) => t === "latest" || r === "earliest" ? 1 : r === "latest" || t === "earliest" ? -1 : Li(t) - Li(r))
}

function Mb(e) {
    return "0x" + e.toString(16)
}

function Cb(e) {
    return e && !["earliest", "latest", "pending"].includes(e)
}

function Li(e) {
    return e == null ? e : Number.parseInt(e, 16)
}

function kb(e) {
    if (e == null) return e;
    const t = Li(e);
    return Th(t + 1)
}

function Th(e) {
    if (e == null) return e;
    let t = e.toString(16);
    return t.length % 2 && (t = "0" + t), "0x" + t
}

function Ib(e) {
    let t = "0x";
    for (let r = 0; r < e; r++) t += dl(), t += dl();
    return t
}

function dl() {
    return Math.floor(Math.random() * 16).toString(16)
}
const xb = gb,
    Ab = mb,
    Nb = Eb,
    {
        bnToHex: qy,
        hexToInt: Si,
        incrementHexInt: Tb,
        minBlockRef: Lb,
        blockRefIsNumber: Pb
    } = ui;
let Ob = class extends Nb {
    constructor({
        provider: t,
        params: r
    }) {
        super(), this.type = "log", this.ethQuery = new xb(t), this.params = Object.assign({
            fromBlock: "latest",
            toBlock: "latest",
            address: void 0,
            topics: []
        }, r), this.params.address && (Array.isArray(this.params.address) || (this.params.address = [this.params.address]), this.params.address = this.params.address.map(n => n.toLowerCase()))
    }
    async initialize({
        currentBlock: t
    }) {
        let r = this.params.fromBlock;
        ["latest", "pending"].includes(r) && (r = t), r === "earliest" && (r = "0x0"), this.params.fromBlock = r;
        const n = Lb(this.params.toBlock, t),
            i = Object.assign({}, this.params, {
                toBlock: n
            }),
            s = await this._fetchLogs(i);
        this.addInitialResults(s)
    }
    async update({
        oldBlock: t,
        newBlock: r
    }) {
        const n = r;
        let i;
        t ? i = Tb(t) : i = r;
        const s = Object.assign({}, this.params, {
                fromBlock: i,
                toBlock: n
            }),
            c = (await this._fetchLogs(s)).filter(l => this.matchLog(l));
        this.addResults(c)
    }
    async _fetchLogs(t) {
        return await Ab(n => this.ethQuery.getLogs(t, n))()
    }
    matchLog(t) {
        if (Si(this.params.fromBlock) >= Si(t.blockNumber) || Pb(this.params.toBlock) && Si(this.params.toBlock) <= Si(t.blockNumber)) return !1;
        const r = t.address && t.address.toLowerCase();
        return this.params.address && r && !this.params.address.includes(r) ? !1 : this.params.topics.every((i, s) => {
            let a = t.topics[s];
            if (!a) return !1;
            a = a.toLowerCase();
            let c = Array.isArray(i) ? i : [i];
            return c.includes(null) ? !0 : (c = c.map(p => p.toLowerCase()), c.includes(a))
        })
    }
};
var $b = Ob,
    Sa = Bb;
async function Bb({
    provider: e,
    fromBlock: t,
    toBlock: r
}) {
    t || (t = r);
    const n = fl(t),
        s = fl(r) - n + 1,
        a = Array(s).fill().map((l, h) => n + h).map(Db);
    let c = await Promise.all(a.map(l => jb(e, "eth_getBlockByNumber", [l, !1])));
    return c = c.filter(l => l !== null), c
}

function fl(e) {
    return e == null ? e : Number.parseInt(e, 16)
}

function Db(e) {
    return e == null ? e : "0x" + e.toString(16)
}

function Fb(e, t) {
    return new Promise((r, n) => {
        e.sendAsync(t, (i, s) => {
            i ? n(i) : s.error ? n(s.error) : s.result ? r(s.result) : n(new Error("Result was empty"))
        })
    })
}
async function jb(e, t, r) {
    for (let n = 0; n < 3; n++) try {
        return await Fb(e, {
            id: 1,
            jsonrpc: "2.0",
            method: t,
            params: r
        })
    } catch (i) {
        console.error(`provider.sendAsync failed: ${i.stack||i.message||i}`)
    }
    return null
}
const Hb = wa,
    Ub = Sa,
    {
        incrementHexInt: Wb
    } = ui;
let Vb = class extends Hb {
    constructor({
        provider: t,
        params: r
    }) {
        super(), this.type = "block", this.provider = t
    }
    async update({
        oldBlock: t,
        newBlock: r
    }) {
        const n = r,
            i = Wb(t),
            a = (await Ub({
                provider: this.provider,
                fromBlock: i,
                toBlock: n
            })).map(c => c.hash);
        this.addResults(a)
    }
};
var qb = Vb;
const zb = wa,
    Gb = Sa,
    {
        incrementHexInt: Jb
    } = ui;
let Zb = class extends zb {
    constructor({
        provider: t
    }) {
        super(), this.type = "tx", this.provider = t
    }
    async update({
        oldBlock: t
    }) {
        const r = t,
            n = Jb(t),
            i = await Gb({
                provider: this.provider,
                fromBlock: n,
                toBlock: r
            }),
            s = [];
        for (const a of i) s.push(...a.transactions);
        this.addResults(s)
    }
};
var Kb = Zb;
const Qb = Nh.Mutex,
    {
        createAsyncMiddleware: Yb,
        createScaffoldMiddleware: Xb
    } = ga,
    ey = $b,
    ty = qb,
    ry = Kb,
    {
        intToHex: Lh,
        hexToInt: go
    } = ui;
var ny = iy;

function iy({
    blockTracker: e,
    provider: t
}) {
    let r = 0,
        n = {};
    const i = new Qb,
        s = sy({
            mutex: i
        }),
        a = Xb({
            eth_newFilter: s(_o(l)),
            eth_newBlockFilter: s(_o(h)),
            eth_newPendingTransactionFilter: s(_o(p)),
            eth_uninstallFilter: s(Ii(R)),
            eth_getFilterChanges: s(Ii(f)),
            eth_getFilterLogs: s(Ii(_))
        }),
        c = async ({
            oldBlock: k,
            newBlock: T
        }) => {
            if (n.length === 0) return;
            const $ = await i.acquire();
            try {
                await Promise.all(Qr(n).map(async P => {
                    try {
                        await P.update({
                            oldBlock: k,
                            newBlock: T
                        })
                    } catch (D) {
                        console.error(D)
                    }
                }))
            } catch (P) {
                console.error(P)
            }
            $()
        };
    return a.newLogFilter = l, a.newBlockFilter = h, a.newPendingTransactionFilter = p, a.uninstallFilter = R, a.getFilterChanges = f, a.getFilterLogs = _, a.destroy = () => {
        L()
    }, a;
    async function l(k) {
        const T = new ey({
            provider: t,
            params: k
        });
        return await A(T), T
    }
    async function h() {
        const k = new ty({
            provider: t
        });
        return await A(k), k
    }
    async function p() {
        const k = new ry({
            provider: t
        });
        return await A(k), k
    }
    async function f(k) {
        const T = go(k),
            $ = n[T];
        if (!$) throw new Error(`No filter for index "${T}"`);
        return $.getChangesAndClear()
    }
    async function _(k) {
        const T = go(k),
            $ = n[T];
        if (!$) throw new Error(`No filter for index "${T}"`);
        let P = [];
        return $.type === "log" && (P = $.getAllResults()), P
    }
    async function R(k) {
        const T = go(k),
            P = !!n[T];
        return P && await O(T), P
    }
    async function A(k) {
        const T = Qr(n).length,
            $ = await e.getLatestBlock();
        await k.initialize({
            currentBlock: $
        }), r++, n[r] = k, k.id = r, k.idHex = Lh(r);
        const P = Qr(n).length;
        return M({
            prevFilterCount: T,
            newFilterCount: P
        }), r
    }
    async function O(k) {
        const T = Qr(n).length;
        delete n[k];
        const $ = Qr(n).length;
        M({
            prevFilterCount: T,
            newFilterCount: $
        })
    }
    async function L() {
        const k = Qr(n).length;
        n = {}, M({
            prevFilterCount: k,
            newFilterCount: 0
        })
    }

    function M({
        prevFilterCount: k,
        newFilterCount: T
    }) {
        if (k === 0 && T > 0) {
            e.on("sync", c);
            return
        }
        if (k > 0 && T === 0) {
            e.removeListener("sync", c);
            return
        }
    }
}

function _o(e) {
    return Ii(async (...t) => {
        const r = await e(...t);
        return Lh(r.id)
    })
}

function Ii(e) {
    return Yb(async (t, r) => {
        const n = await e.apply(null, t.params);
        r.result = n
    })
}

function sy({
    mutex: e
}) {
    return t => async (r, n, i, s) => {
        (await e.acquire())(), t(r, n, i, s)
    }
}

function Qr(e, t) {
    const r = [];
    for (let n in e) r.push(e[n]);
    return r
}
const oy = Ss.default,
    {
        createAsyncMiddleware: pl,
        createScaffoldMiddleware: ay
    } = ga,
    cy = ny,
    {
        unsafeRandomBytes: ly,
        incrementHexInt: uy
    } = ui,
    hy = Sa;
var dy = fy;

function fy({
    blockTracker: e,
    provider: t
}) {
    const r = {},
        n = cy({
            blockTracker: e,
            provider: t
        });
    let i = !1;
    const s = new oy,
        a = ay({
            eth_subscribe: pl(c),
            eth_unsubscribe: pl(l)
        });
    return a.destroy = p, {
        events: s,
        middleware: a
    };
    async function c(f, _) {
        if (i) throw new Error("SubscriptionManager - attempting to use after destroying");
        const R = f.params[0],
            A = ly(16);
        let O;
        switch (R) {
            case "newHeads":
                O = L({
                    subId: A
                });
                break;
            case "logs":
                const k = f.params[1],
                    T = await n.newLogFilter(k);
                O = M({
                    subId: A,
                    filter: T
                });
                break;
            default:
                throw new Error(`SubscriptionManager - unsupported subscription type "${R}"`)
        }
        r[A] = O, _.result = A;
        return;

        function L({
            subId: k
        }) {
            const T = {
                type: R,
                destroy: async () => {
                    e.removeListener("sync", T.update)
                },
                update: async ({
                    oldBlock: $,
                    newBlock: P
                }) => {
                    const D = P,
                        G = uy($);
                    (await hy({
                        provider: t,
                        fromBlock: G,
                        toBlock: D
                    })).map(py).filter(X => X !== null).forEach(X => {
                        h(k, X)
                    })
                }
            };
            return e.on("sync", T.update), T
        }

        function M({
            subId: k,
            filter: T
        }) {
            return T.on("update", P => h(k, P)), {
                type: R,
                destroy: async () => await n.uninstallFilter(T.idHex)
            }
        }
    }
    async function l(f, _) {
        if (i) throw new Error("SubscriptionManager - attempting to use after destroying");
        const R = f.params[0],
            A = r[R];
        if (!A) {
            _.result = !1;
            return
        }
        delete r[R], await A.destroy(), _.result = !0
    }

    function h(f, _) {
        s.emit("notification", {
            jsonrpc: "2.0",
            method: "eth_subscription",
            params: {
                subscription: f,
                result: _
            }
        })
    }

    function p() {
        s.removeAllListeners();
        for (const f in r) r[f].destroy(), delete r[f];
        i = !0
    }
}

function py(e) {
    return e == null ? null : {
        hash: e.hash,
        parentHash: e.parentHash,
        sha3Uncles: e.sha3Uncles,
        miner: e.miner,
        stateRoot: e.stateRoot,
        transactionsRoot: e.transactionsRoot,
        receiptsRoot: e.receiptsRoot,
        logsBloom: e.logsBloom,
        difficulty: e.difficulty,
        number: e.number,
        gasLimit: e.gasLimit,
        gasUsed: e.gasUsed,
        nonce: e.nonce,
        mixHash: e.mixHash,
        timestamp: e.timestamp,
        extraData: e.extraData
    }
}
Object.defineProperty(ds, "__esModule", {
    value: !0
});
ds.SubscriptionManager = void 0;
const gy = Du,
    _y = dy,
    gl = () => {};
class my {
    constructor(t) {
        const r = new gy.PollingBlockTracker({
                provider: t,
                pollingInterval: 15e3,
                setSkipCacheFlag: !0
            }),
            {
                events: n,
                middleware: i
            } = _y({
                blockTracker: r,
                provider: t
            });
        this.events = n, this.subscriptionMiddleware = i
    }
    async handleRequest(t) {
        const r = {};
        return await this.subscriptionMiddleware(t, r, gl, gl), r
    }
    destroy() {
        this.subscriptionMiddleware.destroy()
    }
}
ds.SubscriptionManager = my;
var Ph = J && J.__importDefault || function (e) {
    return e && e.__esModule ? e : {
        default: e
    }
};
Object.defineProperty(on, "__esModule", {
    value: !0
});
on.CoinbaseWalletProvider = void 0;
const vy = Ph(Bi),
    by = gd,
    se = Fn,
    re = z,
    yy = Wn,
    _l = gt,
    Ri = vn,
    lt = gn,
    mo = Ph(Up),
    In = mn,
    wy = hn,
    Ey = ds,
    ml = "DefaultChainId",
    vl = "DefaultJsonRpcUrl";
class Sy extends by.EventEmitter {
    constructor(t) {
        var r, n;
        super(), this._filterPolyfill = new wy.FilterPolyfill(this), this._subscriptionManager = new Ey.SubscriptionManager(this), this._relay = null, this._addresses = [], this.hasMadeFirstChainChangedEmission = !1, this.setProviderInfo = this.setProviderInfo.bind(this), this.updateProviderInfo = this.updateProviderInfo.bind(this), this.getChainId = this.getChainId.bind(this), this.setAppInfo = this.setAppInfo.bind(this), this.enable = this.enable.bind(this), this.close = this.close.bind(this), this.send = this.send.bind(this), this.sendAsync = this.sendAsync.bind(this), this.request = this.request.bind(this), this._setAddresses = this._setAddresses.bind(this), this.scanQRCode = this.scanQRCode.bind(this), this.genericRequest = this.genericRequest.bind(this), this._chainIdFromOpts = t.chainId, this._jsonRpcUrlFromOpts = t.jsonRpcUrl, this._overrideIsMetaMask = t.overrideIsMetaMask, this._relayProvider = t.relayProvider, this._storage = t.storage, this._relayEventManager = t.relayEventManager, this.diagnostic = t.diagnosticLogger, this.reloadOnDisconnect = !0, this.isCoinbaseWallet = (r = t.overrideIsCoinbaseWallet) !== null && r !== void 0 ? r : !0, this.isCoinbaseBrowser = (n = t.overrideIsCoinbaseBrowser) !== null && n !== void 0 ? n : !1, this.qrUrl = t.qrUrl;
        const i = this.getChainId(),
            s = (0, re.prepend0x)(i.toString(16));
        this.emit("connect", {
            chainIdStr: s
        });
        const a = this._storage.getItem(_l.LOCAL_STORAGE_ADDRESSES_KEY);
        if (a) {
            const c = a.split(" ");
            c[0] !== "" && (this._addresses = c.map(l => (0, re.ensureAddressString)(l)), this.emit("accountsChanged", c))
        }
        this._subscriptionManager.events.on("notification", c => {
            this.emit("message", {
                type: c.method,
                data: c.params
            })
        }), this._isAuthorized() && this.initializeRelay(), window.addEventListener("message", c => {
            var l;
            if (!(c.origin !== location.origin || c.source !== window) && c.data.type === "walletLinkMessage" && c.data.data.action === "dappChainSwitched") {
                const h = c.data.data.chainId,
                    p = (l = c.data.data.jsonRpcUrl) !== null && l !== void 0 ? l : this.jsonRpcUrl;
                this.updateProviderInfo(p, Number(h))
            }
        })
    }
    get selectedAddress() {
        return this._addresses[0] || void 0
    }
    get networkVersion() {
        return this.getChainId().toString(10)
    }
    get chainId() {
        return (0, re.prepend0x)(this.getChainId().toString(16))
    }
    get isWalletLink() {
        return !0
    }
    get isMetaMask() {
        return this._overrideIsMetaMask
    }
    get host() {
        return this.jsonRpcUrl
    }
    get connected() {
        return !0
    }
    isConnected() {
        return !0
    }
    get jsonRpcUrl() {
        var t;
        return (t = this._storage.getItem(vl)) !== null && t !== void 0 ? t : this._jsonRpcUrlFromOpts
    }
    set jsonRpcUrl(t) {
        this._storage.setItem(vl, t)
    }
    disableReloadOnDisconnect() {
        this.reloadOnDisconnect = !1
    }
    setProviderInfo(t, r) {
        this.isCoinbaseBrowser || (this._chainIdFromOpts = r, this._jsonRpcUrlFromOpts = t), this.updateProviderInfo(this.jsonRpcUrl, this.getChainId())
    }
    updateProviderInfo(t, r) {
        this.jsonRpcUrl = t;
        const n = this.getChainId();
        this._storage.setItem(ml, r.toString(10)), ((0, re.ensureIntNumber)(r) !== n || !this.hasMadeFirstChainChangedEmission) && (this.emit("chainChanged", this.getChainId()), this.hasMadeFirstChainChangedEmission = !0)
    }
    async watchAsset(t, r, n, i, s, a) {
        const l = await (await this.initializeRelay()).watchAsset(t, r, n, i, s, a == null ? void 0 : a.toString()).promise;
        return (0, lt.isErrorResponse)(l) ? !1 : !!l.result
    }
    async addEthereumChain(t, r, n, i, s, a) {
        var c, l;
        if ((0, re.ensureIntNumber)(t) === this.getChainId()) return !1;
        const h = await this.initializeRelay(),
            p = h.inlineAddEthereumChain(t.toString());
        !this._isAuthorized() && !p && await h.requestEthereumAccounts().promise;
        const f = await h.addEthereumChain(t.toString(), r, s, n, i, a).promise;
        return (0, lt.isErrorResponse)(f) ? !1 : (((c = f.result) === null || c === void 0 ? void 0 : c.isApproved) === !0 && this.updateProviderInfo(r[0], t), ((l = f.result) === null || l === void 0 ? void 0 : l.isApproved) === !0)
    }
    async switchEthereumChain(t) {
        const n = await (await this.initializeRelay()).switchEthereumChain(t.toString(10), this.selectedAddress || void 0).promise;
        if ((0, lt.isErrorResponse)(n)) {
            if (!n.errorCode) return;
            throw n.errorCode === se.standardErrorCodes.provider.unsupportedChain ? se.standardErrors.provider.unsupportedChain() : se.standardErrors.provider.custom({
                message: n.errorMessage,
                code: n.errorCode
            })
        }
        const i = n.result;
        i.isApproved && i.rpcUrl.length > 0 && this.updateProviderInfo(i.rpcUrl, t)
    }
    setAppInfo(t, r) {
        this.initializeRelay().then(n => n.setAppInfo(t, r))
    }
    async enable() {
        var t;
        return (t = this.diagnostic) === null || t === void 0 || t.log(In.EVENTS.ETH_ACCOUNTS_STATE, {
            method: "provider::enable",
            addresses_length: this._addresses.length,
            sessionIdHash: this._relay ? Ri.Session.hash(this._relay.session.id) : void 0
        }), this._isAuthorized() ? [...this._addresses] : await this.send("eth_requestAccounts")
    }
    async close() {
        (await this.initializeRelay()).resetAndReload()
    }
    send(t, r) {
        try {
            const n = this._send(t, r);
            if (n instanceof Promise) return n.catch(i => {
                throw (0, se.serializeError)(i, t)
            })
        } catch (n) {
            throw (0, se.serializeError)(n, t)
        }
    }
    _send(t, r) {
        if (typeof t == "string") {
            const i = t,
                s = Array.isArray(r) ? r : r !== void 0 ? [r] : [],
                a = {
                    jsonrpc: "2.0",
                    id: 0,
                    method: i,
                    params: s
                };
            return this._sendRequestAsync(a).then(c => c.result)
        }
        if (typeof r == "function") {
            const i = t,
                s = r;
            return this._sendAsync(i, s)
        }
        if (Array.isArray(t)) return t.map(s => this._sendRequest(s));
        const n = t;
        return this._sendRequest(n)
    }
    async sendAsync(t, r) {
        try {
            return this._sendAsync(t, r).catch(n => {
                throw (0, se.serializeError)(n, t)
            })
        } catch (n) {
            return Promise.reject((0, se.serializeError)(n, t))
        }
    }
    async _sendAsync(t, r) {
        if (typeof r != "function") throw new Error("callback is required");
        if (Array.isArray(t)) {
            const i = r;
            this._sendMultipleRequestsAsync(t).then(s => i(null, s)).catch(s => i(s, null));
            return
        }
        const n = r;
        return this._sendRequestAsync(t).then(i => n(null, i)).catch(i => n(i, null))
    }
    async request(t) {
        try {
            return this._request(t).catch(r => {
                throw (0, se.serializeError)(r, t.method)
            })
        } catch (r) {
            return Promise.reject((0, se.serializeError)(r, t.method))
        }
    }
    async _request(t) {
        if (!t || typeof t != "object" || Array.isArray(t)) throw se.standardErrors.rpc.invalidRequest({
            message: "Expected a single, non-array, object argument.",
            data: t
        });
        const {
            method: r,
            params: n
        } = t;
        if (typeof r != "string" || r.length === 0) throw se.standardErrors.rpc.invalidRequest({
            message: "'args.method' must be a non-empty string.",
            data: t
        });
        if (n !== void 0 && !Array.isArray(n) && (typeof n != "object" || n === null)) throw se.standardErrors.rpc.invalidRequest({
            message: "'args.params' must be an object or array if provided.",
            data: t
        });
        const i = n === void 0 ? [] : n,
            s = this._relayEventManager.makeRequestId();
        return (await this._sendRequestAsync({
            method: r,
            params: i,
            jsonrpc: "2.0",
            id: s
        })).result
    }
    async scanQRCode(t) {
        const n = await (await this.initializeRelay()).scanQRCode((0, re.ensureRegExpString)(t)).promise;
        if ((0, lt.isErrorResponse)(n)) throw (0, se.serializeError)(n.errorMessage, "scanQRCode");
        if (typeof n.result != "string") throw (0, se.serializeError)("result was not a string", "scanQRCode");
        return n.result
    }
    async genericRequest(t, r) {
        const i = await (await this.initializeRelay()).genericRequest(t, r).promise;
        if ((0, lt.isErrorResponse)(i)) throw (0, se.serializeError)(i.errorMessage, "generic");
        if (typeof i.result != "string") throw (0, se.serializeError)("result was not a string", "generic");
        return i.result
    }
    async connectAndSignIn(t) {
        var r;
        (r = this.diagnostic) === null || r === void 0 || r.log(In.EVENTS.ETH_ACCOUNTS_STATE, {
            method: "provider::connectAndSignIn",
            sessionIdHash: this._relay ? Ri.Session.hash(this._relay.session.id) : void 0
        });
        let n;
        try {
            const s = await this.initializeRelay();
            if (!(s instanceof yy.MobileRelay)) throw new Error("connectAndSignIn is only supported on mobile");
            if (n = await s.connectAndSignIn(t).promise, (0, lt.isErrorResponse)(n)) throw new Error(n.errorMessage)
        } catch (s) {
            throw typeof s.message == "string" && s.message.match(/(denied|rejected)/i) ? se.standardErrors.provider.userRejectedRequest("User denied account authorization") : s
        }
        if (!n.result) throw new Error("accounts received is empty");
        const {
            accounts: i
        } = n.result;
        return this._setAddresses(i), this.isCoinbaseBrowser || await this.switchEthereumChain(this.getChainId()), n.result
    }
    async selectProvider(t) {
        const n = await (await this.initializeRelay()).selectProvider(t).promise;
        if ((0, lt.isErrorResponse)(n)) throw (0, se.serializeError)(n.errorMessage, "selectProvider");
        if (typeof n.result != "string") throw (0, se.serializeError)("result was not a string", "selectProvider");
        return n.result
    }
    supportsSubscriptions() {
        return !1
    }
    subscribe() {
        throw new Error("Subscriptions are not supported")
    }
    unsubscribe() {
        throw new Error("Subscriptions are not supported")
    }
    disconnect() {
        return !0
    }
    _sendRequest(t) {
        const r = {
                jsonrpc: "2.0",
                id: t.id
            },
            {
                method: n
            } = t;
        if (r.result = this._handleSynchronousMethods(t), r.result === void 0) throw new Error(`Coinbase Wallet does not support calling ${n} synchronously without a callback. Please provide a callback parameter to call ${n} asynchronously.`);
        return r
    }
    _setAddresses(t, r) {
        if (!Array.isArray(t)) throw new Error("addresses is not an array");
        const n = t.map(i => (0, re.ensureAddressString)(i));
        JSON.stringify(n) !== JSON.stringify(this._addresses) && (this._addresses = n, this.emit("accountsChanged", this._addresses), this._storage.setItem(_l.LOCAL_STORAGE_ADDRESSES_KEY, n.join(" ")))
    }
    _sendRequestAsync(t) {
        return new Promise((r, n) => {
            try {
                const i = this._handleSynchronousMethods(t);
                if (i !== void 0) return r({
                    jsonrpc: "2.0",
                    id: t.id,
                    result: i
                });
                const s = this._handleAsynchronousFilterMethods(t);
                if (s !== void 0) {
                    s.then(c => r(Object.assign(Object.assign({}, c), {
                        id: t.id
                    }))).catch(c => n(c));
                    return
                }
                const a = this._handleSubscriptionMethods(t);
                if (a !== void 0) {
                    a.then(c => r({
                        jsonrpc: "2.0",
                        id: t.id,
                        result: c.result
                    })).catch(c => n(c));
                    return
                }
            } catch (i) {
                return n(i)
            }
            this._handleAsynchronousMethods(t).then(i => i && r(Object.assign(Object.assign({}, i), {
                id: t.id
            }))).catch(i => n(i))
        })
    }
    _sendMultipleRequestsAsync(t) {
        return Promise.all(t.map(r => this._sendRequestAsync(r)))
    }
    _handleSynchronousMethods(t) {
        const {
            method: r
        } = t, n = t.params || [];
        switch (r) {
            case "eth_accounts":
                return this._eth_accounts();
            case "eth_coinbase":
                return this._eth_coinbase();
            case "eth_uninstallFilter":
                return this._eth_uninstallFilter(n);
            case "net_version":
                return this._net_version();
            case "eth_chainId":
                return this._eth_chainId();
            default:
                return
        }
    }
    async _handleAsynchronousMethods(t) {
        const {
            method: r
        } = t, n = t.params || [];
        switch (r) {
            case "eth_requestAccounts":
                return this._eth_requestAccounts();
            case "eth_sign":
                return this._eth_sign(n);
            case "eth_ecRecover":
                return this._eth_ecRecover(n);
            case "personal_sign":
                return this._personal_sign(n);
            case "personal_ecRecover":
                return this._personal_ecRecover(n);
            case "eth_signTransaction":
                return this._eth_signTransaction(n);
            case "eth_sendRawTransaction":
                return this._eth_sendRawTransaction(n);
            case "eth_sendTransaction":
                return this._eth_sendTransaction(n);
            case "eth_signTypedData_v1":
                return this._eth_signTypedData_v1(n);
            case "eth_signTypedData_v2":
                return this._throwUnsupportedMethodError();
            case "eth_signTypedData_v3":
                return this._eth_signTypedData_v3(n);
            case "eth_signTypedData_v4":
            case "eth_signTypedData":
                return this._eth_signTypedData_v4(n);
            case "cbWallet_arbitrary":
                return this._cbwallet_arbitrary(n);
            case "wallet_addEthereumChain":
                return this._wallet_addEthereumChain(n);
            case "wallet_switchEthereumChain":
                return this._wallet_switchEthereumChain(n);
            case "wallet_watchAsset":
                return this._wallet_watchAsset(n)
        }
        return (await this.initializeRelay()).makeEthereumJSONRPCRequest(t, this.jsonRpcUrl).catch(s => {
            var a;
            throw (s.code === se.standardErrorCodes.rpc.methodNotFound || s.code === se.standardErrorCodes.rpc.methodNotSupported) && ((a = this.diagnostic) === null || a === void 0 || a.log(In.EVENTS.METHOD_NOT_IMPLEMENTED, {
                method: t.method,
                sessionIdHash: this._relay ? Ri.Session.hash(this._relay.session.id) : void 0
            })), s
        })
    }
    _handleAsynchronousFilterMethods(t) {
        const {
            method: r
        } = t, n = t.params || [];
        switch (r) {
            case "eth_newFilter":
                return this._eth_newFilter(n);
            case "eth_newBlockFilter":
                return this._eth_newBlockFilter();
            case "eth_newPendingTransactionFilter":
                return this._eth_newPendingTransactionFilter();
            case "eth_getFilterChanges":
                return this._eth_getFilterChanges(n);
            case "eth_getFilterLogs":
                return this._eth_getFilterLogs(n)
        }
    }
    _handleSubscriptionMethods(t) {
        switch (t.method) {
            case "eth_subscribe":
            case "eth_unsubscribe":
                return this._subscriptionManager.handleRequest(t)
        }
    }
    _isKnownAddress(t) {
        try {
            const r = (0, re.ensureAddressString)(t);
            return this._addresses.map(i => (0, re.ensureAddressString)(i)).includes(r)
        } catch {}
        return !1
    }
    _ensureKnownAddress(t) {
        var r;
        if (!this._isKnownAddress(t)) throw (r = this.diagnostic) === null || r === void 0 || r.log(In.EVENTS.UNKNOWN_ADDRESS_ENCOUNTERED), new Error("Unknown Ethereum address")
    }
    _prepareTransactionParams(t) {
        const r = t.from ? (0, re.ensureAddressString)(t.from) : this.selectedAddress;
        if (!r) throw new Error("Ethereum address is unavailable");
        this._ensureKnownAddress(r);
        const n = t.to ? (0, re.ensureAddressString)(t.to) : null,
            i = t.value != null ? (0, re.ensureBN)(t.value) : new vy.default(0),
            s = t.data ? (0, re.ensureBuffer)(t.data) : Buffer.alloc(0),
            a = t.nonce != null ? (0, re.ensureIntNumber)(t.nonce) : null,
            c = t.gasPrice != null ? (0, re.ensureBN)(t.gasPrice) : null,
            l = t.maxFeePerGas != null ? (0, re.ensureBN)(t.maxFeePerGas) : null,
            h = t.maxPriorityFeePerGas != null ? (0, re.ensureBN)(t.maxPriorityFeePerGas) : null,
            p = t.gas != null ? (0, re.ensureBN)(t.gas) : null,
            f = t.chainId ? (0, re.ensureIntNumber)(t.chainId) : this.getChainId();
        return {
            fromAddress: r,
            toAddress: n,
            weiValue: i,
            data: s,
            nonce: a,
            gasPriceInWei: c,
            maxFeePerGas: l,
            maxPriorityFeePerGas: h,
            gasLimit: p,
            chainId: f
        }
    }
    _isAuthorized() {
        return this._addresses.length > 0
    }
    _requireAuthorization() {
        if (!this._isAuthorized()) throw se.standardErrors.provider.unauthorized({})
    }
    _throwUnsupportedMethodError() {
        throw se.standardErrors.provider.unsupportedMethod({})
    }
    async _signEthereumMessage(t, r, n, i) {
        this._ensureKnownAddress(r);
        try {
            const a = await (await this.initializeRelay()).signEthereumMessage(t, r, n, i).promise;
            if ((0, lt.isErrorResponse)(a)) throw new Error(a.errorMessage);
            return {
                jsonrpc: "2.0",
                id: 0,
                result: a.result
            }
        } catch (s) {
            throw typeof s.message == "string" && s.message.match(/(denied|rejected)/i) ? se.standardErrors.provider.userRejectedRequest("User denied message signature") : s
        }
    }
    async _ethereumAddressFromSignedMessage(t, r, n) {
        const s = await (await this.initializeRelay()).ethereumAddressFromSignedMessage(t, r, n).promise;
        if ((0, lt.isErrorResponse)(s)) throw new Error(s.errorMessage);
        return {
            jsonrpc: "2.0",
            id: 0,
            result: s.result
        }
    }
    _eth_accounts() {
        return [...this._addresses]
    }
    _eth_coinbase() {
        return this.selectedAddress || null
    }
    _net_version() {
        return this.getChainId().toString(10)
    }
    _eth_chainId() {
        return (0, re.hexStringFromIntNumber)(this.getChainId())
    }
    getChainId() {
        const t = this._storage.getItem(ml);
        if (!t) return (0, re.ensureIntNumber)(this._chainIdFromOpts);
        const r = parseInt(t, 10);
        return (0, re.ensureIntNumber)(r)
    }
    async _eth_requestAccounts() {
        var t;
        if ((t = this.diagnostic) === null || t === void 0 || t.log(In.EVENTS.ETH_ACCOUNTS_STATE, {
                method: "provider::_eth_requestAccounts",
                addresses_length: this._addresses.length,
                sessionIdHash: this._relay ? Ri.Session.hash(this._relay.session.id) : void 0
            }), this._isAuthorized()) return Promise.resolve({
            jsonrpc: "2.0",
            id: 0,
            result: this._addresses
        });
        let r;
        try {
            if (r = await (await this.initializeRelay()).requestEthereumAccounts().promise, (0, lt.isErrorResponse)(r)) throw new Error(r.errorMessage)
        } catch (n) {
            throw typeof n.message == "string" && n.message.match(/(denied|rejected)/i) ? se.standardErrors.provider.userRejectedRequest("User denied account authorization") : n
        }
        if (!r.result) throw new Error("accounts received is empty");
        return this._setAddresses(r.result), this.isCoinbaseBrowser || await this.switchEthereumChain(this.getChainId()), {
            jsonrpc: "2.0",
            id: 0,
            result: this._addresses
        }
    }
    _eth_sign(t) {
        this._requireAuthorization();
        const r = (0, re.ensureAddressString)(t[0]),
            n = (0, re.ensureBuffer)(t[1]);
        return this._signEthereumMessage(n, r, !1)
    }
    _eth_ecRecover(t) {
        const r = (0, re.ensureBuffer)(t[0]),
            n = (0, re.ensureBuffer)(t[1]);
        return this._ethereumAddressFromSignedMessage(r, n, !1)
    }
    _personal_sign(t) {
        this._requireAuthorization();
        const r = (0, re.ensureBuffer)(t[0]),
            n = (0, re.ensureAddressString)(t[1]);
        return this._signEthereumMessage(r, n, !0)
    }
    _personal_ecRecover(t) {
        const r = (0, re.ensureBuffer)(t[0]),
            n = (0, re.ensureBuffer)(t[1]);
        return this._ethereumAddressFromSignedMessage(r, n, !0)
    }
    async _eth_signTransaction(t) {
        this._requireAuthorization();
        const r = this._prepareTransactionParams(t[0] || {});
        try {
            const i = await (await this.initializeRelay()).signEthereumTransaction(r).promise;
            if ((0, lt.isErrorResponse)(i)) throw new Error(i.errorMessage);
            return {
                jsonrpc: "2.0",
                id: 0,
                result: i.result
            }
        } catch (n) {
            throw typeof n.message == "string" && n.message.match(/(denied|rejected)/i) ? se.standardErrors.provider.userRejectedRequest("User denied transaction signature") : n
        }
    }
    async _eth_sendRawTransaction(t) {
        const r = (0, re.ensureBuffer)(t[0]),
            i = await (await this.initializeRelay()).submitEthereumTransaction(r, this.getChainId()).promise;
        if ((0, lt.isErrorResponse)(i)) throw new Error(i.errorMessage);
        return {
            jsonrpc: "2.0",
            id: 0,
            result: i.result
        }
    }
    async _eth_sendTransaction(t) {
        this._requireAuthorization();
        const r = this._prepareTransactionParams(t[0] || {});
        try {
            const i = await (await this.initializeRelay()).signAndSubmitEthereumTransaction(r).promise;
            if ((0, lt.isErrorResponse)(i)) throw new Error(i.errorMessage);
            return {
                jsonrpc: "2.0",
                id: 0,
                result: i.result
            }
        } catch (n) {
            throw typeof n.message == "string" && n.message.match(/(denied|rejected)/i) ? se.standardErrors.provider.userRejectedRequest("User denied transaction signature") : n
        }
    }
    async _eth_signTypedData_v1(t) {
        this._requireAuthorization();
        const r = (0, re.ensureParsedJSONObject)(t[0]),
            n = (0, re.ensureAddressString)(t[1]);
        this._ensureKnownAddress(n);
        const i = mo.default.hashForSignTypedDataLegacy({
                data: r
            }),
            s = JSON.stringify(r, null, 2);
        return this._signEthereumMessage(i, n, !1, s)
    }
    async _eth_signTypedData_v3(t) {
        this._requireAuthorization();
        const r = (0, re.ensureAddressString)(t[0]),
            n = (0, re.ensureParsedJSONObject)(t[1]);
        this._ensureKnownAddress(r);
        const i = mo.default.hashForSignTypedData_v3({
                data: n
            }),
            s = JSON.stringify(n, null, 2);
        return this._signEthereumMessage(i, r, !1, s)
    }
    async _eth_signTypedData_v4(t) {
        this._requireAuthorization();
        const r = (0, re.ensureAddressString)(t[0]),
            n = (0, re.ensureParsedJSONObject)(t[1]);
        this._ensureKnownAddress(r);
        const i = mo.default.hashForSignTypedData_v4({
                data: n
            }),
            s = JSON.stringify(n, null, 2);
        return this._signEthereumMessage(i, r, !1, s)
    }
    async _cbwallet_arbitrary(t) {
        const r = t[0],
            n = t[1];
        if (typeof n != "string") throw new Error("parameter must be a string");
        if (typeof r != "object" || r === null) throw new Error("parameter must be an object");
        return {
            jsonrpc: "2.0",
            id: 0,
            result: await this.genericRequest(r, n)
        }
    }
    async _wallet_addEthereumChain(t) {
        var r, n, i, s;
        const a = t[0];
        if (((r = a.rpcUrls) === null || r === void 0 ? void 0 : r.length) === 0) return {
            jsonrpc: "2.0",
            id: 0,
            error: {
                code: 2,
                message: "please pass in at least 1 rpcUrl"
            }
        };
        if (!a.chainName || a.chainName.trim() === "") throw se.standardErrors.rpc.invalidParams("chainName is a required field");
        if (!a.nativeCurrency) throw se.standardErrors.rpc.invalidParams("nativeCurrency is a required field");
        const c = parseInt(a.chainId, 16);
        return await this.addEthereumChain(c, (n = a.rpcUrls) !== null && n !== void 0 ? n : [], (i = a.blockExplorerUrls) !== null && i !== void 0 ? i : [], a.chainName, (s = a.iconUrls) !== null && s !== void 0 ? s : [], a.nativeCurrency) ? {
            jsonrpc: "2.0",
            id: 0,
            result: null
        } : {
            jsonrpc: "2.0",
            id: 0,
            error: {
                code: 2,
                message: "unable to add ethereum chain"
            }
        }
    }
    async _wallet_switchEthereumChain(t) {
        const r = t[0];
        return await this.switchEthereumChain(parseInt(r.chainId, 16)), {
            jsonrpc: "2.0",
            id: 0,
            result: null
        }
    }
    async _wallet_watchAsset(t) {
        const r = Array.isArray(t) ? t[0] : t;
        if (!r.type) throw se.standardErrors.rpc.invalidParams("Type is required");
        if ((r == null ? void 0 : r.type) !== "ERC20") throw se.standardErrors.rpc.invalidParams(`Asset of type '${r.type}' is not supported`);
        if (!(r != null && r.options)) throw se.standardErrors.rpc.invalidParams("Options are required");
        if (!(r != null && r.options.address)) throw se.standardErrors.rpc.invalidParams("Address is required");
        const n = this.getChainId(),
            {
                address: i,
                symbol: s,
                image: a,
                decimals: c
            } = r.options;
        return {
            jsonrpc: "2.0",
            id: 0,
            result: await this.watchAsset(r.type, i, s, c, a, n)
        }
    }
    _eth_uninstallFilter(t) {
        const r = (0, re.ensureHexString)(t[0]);
        return this._filterPolyfill.uninstallFilter(r)
    }
    async _eth_newFilter(t) {
        const r = t[0];
        return {
            jsonrpc: "2.0",
            id: 0,
            result: await this._filterPolyfill.newFilter(r)
        }
    }
    async _eth_newBlockFilter() {
        return {
            jsonrpc: "2.0",
            id: 0,
            result: await this._filterPolyfill.newBlockFilter()
        }
    }
    async _eth_newPendingTransactionFilter() {
        return {
            jsonrpc: "2.0",
            id: 0,
            result: await this._filterPolyfill.newPendingTransactionFilter()
        }
    }
    _eth_getFilterChanges(t) {
        const r = (0, re.ensureHexString)(t[0]);
        return this._filterPolyfill.getFilterChanges(r)
    }
    _eth_getFilterLogs(t) {
        const r = (0, re.ensureHexString)(t[0]);
        return this._filterPolyfill.getFilterLogs(r)
    }
    initializeRelay() {
        return this._relay ? Promise.resolve(this._relay) : this._relayProvider().then(t => (t.setAccountsCallback((r, n) => this._setAddresses(r, n)), t.setChainCallback((r, n) => {
            this.updateProviderInfo(n, parseInt(r, 10))
        }), t.setDappDefaultChainCallback(this._chainIdFromOpts), this._relay = t, t))
    }
}
on.CoinbaseWalletProvider = Sy;
var Ns = {};
Object.defineProperty(Ns, "__esModule", {
    value: !0
});
Ns.RelayEventManager = void 0;
const Ry = z;
class My {
    constructor() {
        this._nextRequestId = 0, this.callbacks = new Map
    }
    makeRequestId() {
        this._nextRequestId = (this._nextRequestId + 1) % 2147483647;
        const t = this._nextRequestId,
            r = (0, Ry.prepend0x)(t.toString(16));
        return this.callbacks.get(r) && this.callbacks.delete(r), t
    }
}
Ns.RelayEventManager = My;
Object.defineProperty(Ln, "__esModule", {
    value: !0
});
Ln.CoinbaseWalletSDK = void 0;
const Cy = Oi,
    ky = $i,
    bl = z,
    Iy = Ui,
    xy = on,
    Ay = Wn,
    Ny = ei,
    Ty = Ns,
    Ly = Zn,
    Py = Vn,
    Oh = _n;
class Ts {
    constructor(t) {
        var r, n, i;
        this._appName = "", this._appLogoUrl = null, this._relay = null, this._relayEventManager = null;
        const s = t.linkAPIUrl || ky.LINK_API_URL;
        typeof t.overrideIsMetaMask > "u" ? this._overrideIsMetaMask = !1 : this._overrideIsMetaMask = t.overrideIsMetaMask, this._overrideIsCoinbaseWallet = (r = t.overrideIsCoinbaseWallet) !== null && r !== void 0 ? r : !0, this._overrideIsCoinbaseBrowser = (n = t.overrideIsCoinbaseBrowser) !== null && n !== void 0 ? n : !1, this._diagnosticLogger = t.diagnosticLogger, this._reloadOnDisconnect = (i = t.reloadOnDisconnect) !== null && i !== void 0 ? i : !0;
        const a = new URL(s),
            c = `${a.protocol}//${a.host}`;
        if (this._storage = new Iy.ScopedLocalStorage(`-walletlink:${c}`), this._storage.setItem("version", Ts.VERSION), this.walletExtension || this.coinbaseBrowser) return;
        this._relayEventManager = new Ty.RelayEventManager;
        const l = (0, bl.isMobileWeb)(),
            h = t.uiConstructor || (f => l ? new Ny.MobileRelayUI(f) : new Ly.WalletLinkRelayUI(f)),
            p = {
                linkAPIUrl: s,
                version: Oh.LIB_VERSION,
                darkMode: !!t.darkMode,
                uiConstructor: h,
                storage: this._storage,
                relayEventManager: this._relayEventManager,
                diagnosticLogger: this._diagnosticLogger,
                reloadOnDisconnect: this._reloadOnDisconnect,
                enableMobileWalletLink: t.enableMobileWalletLink
            };
        this._relay = l ? new Ay.MobileRelay(p) : new Py.WalletLinkRelay(p), this.setAppInfo(t.appName, t.appLogoUrl), !t.headlessMode && this._relay.attachUI()
    }
    makeWeb3Provider(t = "", r = 1) {
        const n = this.walletExtension;
        if (n) return this.isCipherProvider(n) || n.setProviderInfo(t, r), this._reloadOnDisconnect === !1 && typeof n.disableReloadOnDisconnect == "function" && n.disableReloadOnDisconnect(), n;
        const i = this.coinbaseBrowser;
        if (i) return i;
        const s = this._relay;
        if (!s || !this._relayEventManager || !this._storage) throw new Error("Relay not initialized, should never happen");
        return t || s.setConnectDisabled(!0), new xy.CoinbaseWalletProvider({
            relayProvider: () => Promise.resolve(s),
            relayEventManager: this._relayEventManager,
            storage: this._storage,
            jsonRpcUrl: t,
            chainId: r,
            qrUrl: this.getQrUrl(),
            diagnosticLogger: this._diagnosticLogger,
            overrideIsMetaMask: this._overrideIsMetaMask,
            overrideIsCoinbaseWallet: this._overrideIsCoinbaseWallet,
            overrideIsCoinbaseBrowser: this._overrideIsCoinbaseBrowser
        })
    }
    setAppInfo(t, r) {
        var n;
        this._appName = t || "DApp", this._appLogoUrl = r || (0, bl.getFavicon)();
        const i = this.walletExtension;
        i ? this.isCipherProvider(i) || i.setAppInfo(this._appName, this._appLogoUrl) : (n = this._relay) === null || n === void 0 || n.setAppInfo(this._appName, this._appLogoUrl)
    }
    disconnect() {
        var t;
        const r = this === null || this === void 0 ? void 0 : this.walletExtension;
        r ? r.close() : (t = this._relay) === null || t === void 0 || t.resetAndReload()
    }
    getQrUrl() {
        var t, r;
        return (r = (t = this._relay) === null || t === void 0 ? void 0 : t.getQRCodeUrl()) !== null && r !== void 0 ? r : null
    }
    getCoinbaseWalletLogo(t, r = 240) {
        return (0, Cy.walletLogo)(t, r)
    }
    get walletExtension() {
        var t;
        return (t = window.coinbaseWalletExtension) !== null && t !== void 0 ? t : window.walletLinkExtension
    }
    get coinbaseBrowser() {
        var t, r;
        try {
            const n = (t = window.ethereum) !== null && t !== void 0 ? t : (r = window.top) === null || r === void 0 ? void 0 : r.ethereum;
            return n && "isCoinbaseBrowser" in n && n.isCoinbaseBrowser ? n : void 0
        } catch {
            return
        }
    }
    isCipherProvider(t) {
        return typeof t.isCipher == "boolean" && t.isCipher
    }
}
Ln.CoinbaseWalletSDK = Ts;
Ts.VERSION = Oh.LIB_VERSION;
(function (e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.CoinbaseWalletProvider = e.CoinbaseWalletSDK = void 0;
    const t = Ln,
        r = on;
    var n = Ln;
    Object.defineProperty(e, "CoinbaseWalletSDK", {
        enumerable: !0,
        get: function () {
            return n.CoinbaseWalletSDK
        }
    });
    var i = on;
    Object.defineProperty(e, "CoinbaseWalletProvider", {
        enumerable: !0,
        get: function () {
            return i.CoinbaseWalletProvider
        }
    }), e.default = t.CoinbaseWalletSDK, typeof window < "u" && (window.CoinbaseWalletSDK = t.CoinbaseWalletSDK, window.CoinbaseWalletProvider = r.CoinbaseWalletProvider, window.WalletLink = t.CoinbaseWalletSDK, window.WalletLinkProvider = r.CoinbaseWalletProvider)
})(Po);
const Oy = Bh(Po),
    Zy = Dh({
        __proto__: null,
        default: Oy
    }, [Po]);
export {
    Zy as i
};