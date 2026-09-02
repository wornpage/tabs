//#region node_modules/svelte/src/internal/disclose-version.js
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
//#endregion
//#region node_modules/svelte/src/constants.js
var e = {}, t = Symbol("uninitialized"), n = "http://www.w3.org/1999/xhtml", r = Array.isArray, i = Array.prototype.indexOf, a = Array.prototype.includes, o = Array.from, s = Object.keys, c = Object.defineProperty, l = Object.getOwnPropertyDescriptor, u = Object.getOwnPropertyDescriptors, d = Object.prototype, f = Array.prototype, p = Object.getPrototypeOf, m = Object.isExtensible, h = () => {};
function g(e) {
	for (var t = 0; t < e.length; t++) e[t]();
}
function _() {
	var e, t;
	return {
		promise: new Promise((n, r) => {
			e = n, t = r;
		}),
		resolve: e,
		reject: t
	};
}
var v = 1024, y = 2048, b = 4096, x = 8192, S = 16384, ee = 32768, C = 1 << 25, te = 65536, w = 1 << 19, ne = 1 << 20, re = 1 << 25, ie = 65536, ae = 1 << 21, oe = 1 << 22, se = 1 << 23, ce = Symbol("$state"), le = Symbol("legacy props"), ue = Symbol(""), de = Symbol("attributes"), fe = Symbol("class"), pe = Symbol("style"), me = Symbol("text"), he = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), ge = !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml");
//#endregion
//#region node_modules/svelte/src/internal/client/errors.js
function _e() {
	throw Error("https://svelte.dev/e/async_derived_orphan");
}
function ve(e, t, n) {
	throw Error("https://svelte.dev/e/each_key_duplicate");
}
function ye(e) {
	throw Error("https://svelte.dev/e/effect_in_teardown");
}
function be() {
	throw Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function xe(e) {
	throw Error("https://svelte.dev/e/effect_orphan");
}
function Se() {
	throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ce() {
	throw Error("https://svelte.dev/e/hydration_failed");
}
function we(e) {
	throw Error("https://svelte.dev/e/props_invalid_value");
}
function Te() {
	throw Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ee() {
	throw Error("https://svelte.dev/e/state_prototype_fixed");
}
function De() {
	throw Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Oe() {
	throw Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function ke() {
	console.warn("https://svelte.dev/e/derived_inert");
}
function Ae(e) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
function je() {
	console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/hydration.js
var T = !1;
function E(e) {
	T = e;
}
var D;
function O(t) {
	if (t === null) throw Ae(), e;
	return D = t;
}
function Me() {
	return O(/* @__PURE__ */ z(D));
}
function Ne(t) {
	if (T) {
		if (/* @__PURE__ */ z(D) !== null) throw Ae(), e;
		D = t;
	}
}
function Pe(e = 1) {
	if (T) {
		for (var t = e, n = D; t--;) n = /* @__PURE__ */ z(n);
		D = n;
	}
}
function Fe(e = !0) {
	for (var t = 0, n = D;;) {
		if (n.nodeType === 8) {
			var r = n.data;
			if (r === "]") {
				if (t === 0) return n;
				--t;
			} else (r === "[" || r === "[!" || r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
		}
		var i = /* @__PURE__ */ z(n);
		e && n.remove(), n = i;
	}
}
function Ie(t) {
	if (!t || t.nodeType !== 8) throw Ae(), e;
	return t.data;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/equality.js
function Le(e) {
	return e === this.v;
}
function Re(e, t) {
	return e == e ? e !== t || typeof e == "object" && !!e || typeof e == "function" : t == t;
}
function ze(e) {
	return !Re(e, this.v);
}
//#endregion
//#region node_modules/svelte/src/internal/client/context.js
var k = null;
function Be(e) {
	k = e;
}
function Ve(e, t = !1, n) {
	k = {
		p: k,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		r: q,
		l: null
	};
}
function He(e) {
	var t = k, n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) ln(r);
	}
	return e !== void 0 && (t.x = e), t.i = !0, k = t.p, e ?? {};
}
function Ue() {
	return !0;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/task.js
var We = [];
function Ge() {
	var e = We;
	We = [], g(e);
}
function A(e) {
	if (We.length === 0 && !St) {
		var t = We;
		queueMicrotask(() => {
			t === We && Ge();
		});
	}
	We.push(e);
}
function Ke() {
	for (; We.length > 0;) Ge();
}
function qe(e) {
	var t = q;
	if (t === null) return W.f |= se, e;
	if (!(t.f & 32768) && !(t.f & 4)) throw e;
	j(e, t);
}
function j(e, t) {
	if (!(t !== null && t.f & 16384)) {
		for (; t !== null;) {
			if (t.f & 128) {
				if (!(t.f & 32768)) throw e;
				try {
					t.b.error(e);
					return;
				} catch (t) {
					e = t;
				}
			}
			t = t.parent;
		}
		throw e;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/status.js
var Je = ~(y | b | v);
function M(e, t) {
	e.f = e.f & Je | t;
}
function Ye(e) {
	e.f & 512 || e.deps === null ? M(e, v) : M(e, b);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/utils.js
function Xe(e) {
	if (e !== null) for (let t of e) !(t.f & 2) || !(t.f & 65536) || (t.f ^= ie, Xe(t.deps));
}
function Ze(e, t, n) {
	e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), Xe(e.deps), M(e, v);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/store.js
var Qe = !1;
function $e(e) {
	var t = Qe;
	try {
		return Qe = !1, [e(), Qe];
	} finally {
		Qe = t;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
function et(e) {
	var t = W, n = q;
	K(null), J(null);
	try {
		return e();
	} finally {
		K(t), J(n);
	}
}
//#endregion
//#region node_modules/svelte/src/reactivity/create-subscriber.js
function tt(e) {
	let t = 0, n = Rt(0), r;
	return () => {
		on() && ($(n), mn(() => (t === 0 && (r = Gn(() => e(() => Ht(n)))), t += 1, () => {
			A(() => {
				--t, t === 0 && (r?.(), r = void 0, Ht(n));
			});
		})));
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/boundary.js
var nt = te | w;
function rt(e, t, n, r) {
	new it(e, t, n, r);
}
var it = class {
	parent;
	is_pending = !1;
	transform_error;
	#e;
	#t = T ? D : null;
	#n;
	#r;
	#i;
	#a = null;
	#o = null;
	#s = null;
	#c = null;
	#l = 0;
	#u = 0;
	#d = !1;
	#f = /* @__PURE__ */ new Set();
	#p = /* @__PURE__ */ new Set();
	#m = null;
	#h = tt(() => (this.#m = Rt(this.#l), () => {
		this.#m = null;
	}));
	constructor(e, t, n, r) {
		this.#e = e, this.#n = t, this.#r = (e) => {
			var t = q;
			t.b = this, t.f |= 128, n(e);
		}, this.parent = q.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#i = gn(() => {
			if (T) {
				let e = this.#t;
				Me();
				let t = e.data === "[!";
				if (e.data.startsWith("[?")) {
					let t = JSON.parse(e.data.slice(2));
					this.#_(t);
				} else t ? this.#y() : this.#g();
			} else this.#b();
		}, nt), T && (this.#e = D);
	}
	#g() {
		try {
			this.#a = V(() => this.#r(this.#e));
		} catch (e) {
			this.error(e);
		}
	}
	#_(e) {
		let t = this.#n.failed, { reset: n, invoke_onerror: r } = this.#v(e);
		A(r), t && (this.#s = V(() => {
			t(this.#e, () => e, () => n);
		}));
	}
	#v(e) {
		var t = !1, n = !1;
		let r = () => {
			if (t) {
				je();
				return;
			}
			t = !0, n && Oe(), this.#s !== null && Sn(this.#s, () => {
				this.#s = null;
			}), this.#S(() => {
				this.#b();
			});
		};
		return {
			reset: r,
			invoke_onerror: () => {
				try {
					n = !0, this.#n.onerror?.(e, r), n = !1;
				} catch (e) {
					j(e, this.#i && this.#i.parent);
				}
			}
		};
	}
	#y() {
		let e = this.#n.pending;
		e && (this.is_pending = !0, this.#o = V(() => e(this.#e)), A(() => {
			var e = this.#c = document.createDocumentFragment(), t = R();
			e.append(t), this.#a = this.#S(() => V(() => this.#r(t))), this.#u === 0 && (this.#e.before(e), this.#c = null, Sn(this.#o, () => {
				this.#o = null;
			}), this.#x(N));
		}));
	}
	#b() {
		try {
			if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#l = 0, this.#a = V(() => {
				this.#r(this.#e);
			}), this.#u > 0) {
				var e = this.#c = document.createDocumentFragment();
				En(this.#a, e);
				let t = this.#n.pending;
				this.#o = V(() => t(this.#e));
			} else this.#x(N);
		} catch (e) {
			this.error(e);
		}
	}
	#x(e) {
		this.is_pending = !1, e.transfer_effects(this.#f, this.#p);
	}
	defer_effect(e) {
		Ze(e, this.#f, this.#p);
	}
	is_rendered() {
		return !this.is_pending && (!this.parent || this.parent.is_rendered());
	}
	has_pending_snippet() {
		return !!this.#n.pending;
	}
	#S(e) {
		var t = q, n = W, r = k;
		J(this.#i), K(this.#i), Be(this.#i.ctx);
		try {
			return Ot.ensure(), e();
		} catch (e) {
			return qe(e), null;
		} finally {
			J(t), K(n), Be(r);
		}
	}
	#C(e, t) {
		if (!this.has_pending_snippet()) {
			this.parent && this.parent.#C(e, t);
			return;
		}
		this.#u += e, this.#u === 0 && (this.#x(t), this.#o && Sn(this.#o, () => {
			this.#o = null;
		}), this.#c &&= (this.#e.before(this.#c), null));
	}
	update_pending_count(e, t) {
		this.#C(e, t), this.#l += e, !(!this.#m || this.#d) && (this.#d = !0, A(() => {
			this.#d = !1, this.#m && Bt(this.#m, this.#l);
		}));
	}
	get_effect_pending() {
		return this.#h(), $(this.#m);
	}
	error(e) {
		if (!this.#n.onerror && !this.#n.failed) throw e;
		N?.is_fork ? (this.#a && N.skip_effect(this.#a), this.#o && N.skip_effect(this.#o), this.#s && N.skip_effect(this.#s), N.oncommit(() => {
			this.#w(e);
		})) : this.#w(e);
	}
	#w(e) {
		this.#a &&= (H(this.#a), null), this.#o &&= (H(this.#o), null), this.#s &&= (H(this.#s), null), T && (O(this.#t), Pe(), O(Fe()));
		let t = this.#n.failed, n = (e) => {
			let { reset: n, invoke_onerror: r } = this.#v(e);
			r(), t && (this.#s = this.#S(() => {
				try {
					return V(() => {
						var r = q;
						r.b = this, r.f |= 128, t(this.#e, () => e, () => n);
					});
				} catch (e) {
					return j(e, this.#i.parent), null;
				}
			}));
		};
		A(() => {
			var t;
			try {
				t = this.transform_error(e);
			} catch (e) {
				j(e, this.#i && this.#i.parent);
				return;
			}
			typeof t == "object" && t && typeof t.then == "function" ? t.then(n, (e) => j(e, this.#i && this.#i.parent)) : n(t);
		});
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/async.js
function at(e, t, n, r) {
	let i = Ue() ? lt : pt;
	var a = e.filter((e) => !e.settled), o = t.map(i);
	if (n.length === 0 && a.length === 0) {
		r(o);
		return;
	}
	var s = q, c = ot(), l = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
	function u(e) {
		if (!(s.f & 16384)) {
			c();
			try {
				r([...o, ...e]);
			} catch (e) {
				j(e, s);
			}
			st();
		}
	}
	var d = ct();
	if (n.length === 0) {
		l.then(() => u([])).finally(d);
		return;
	}
	function f() {
		Promise.all(n.map((e) => /* @__PURE__ */ dt(e))).then(u).catch((e) => j(e, s)).finally(d);
	}
	l ? l.then(() => {
		c(), f(), st();
	}) : f();
}
function ot() {
	var e = q, t = W, n = k, r = N;
	return function(i = !0) {
		J(e), K(t), Be(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function st(e = !0) {
	J(null), K(null), Be(null), e && N?.deactivate();
}
function ct() {
	var e = q, t = e.b, n = N, r = !!t?.is_rendered();
	return t?.update_pending_count(1, n), n.increment(r, e), () => {
		t?.update_pending_count(-1, n), n.decrement(r, e);
	};
}
/*#__NO_SIDE_EFFECTS__*/
function lt(e) {
	var n = 2 | y;
	return q !== null && (q.f |= w), {
		ctx: k,
		deps: null,
		effects: null,
		equals: Le,
		f: n,
		fn: e,
		reactions: null,
		rv: 0,
		v: t,
		wv: 0,
		parent: q,
		ac: null
	};
}
var ut = Symbol("obsolete");
/*#__NO_SIDE_EFFECTS__*/
function dt(e, n, r) {
	let i = q;
	i === null && _e();
	var a = void 0, o = Rt(t), s = !W, c = /* @__PURE__ */ new Set();
	return pn(() => {
		var t = q, n = _();
		a = n.promise;
		try {
			Promise.resolve(e()).then(n.resolve, (e) => {
				e !== he && n.reject(e);
			}).finally(st);
		} catch (e) {
			n.reject(e), st();
		}
		var r = N;
		if (s) {
			if (t.f & 32768) var l = ct();
			if (i.b?.is_rendered()) r.async_deriveds.get(t)?.reject(ut);
			else for (let e of c.values()) e.reject(ut);
			c.add(n), r.async_deriveds.set(t, n);
		}
		let u = (e, t = void 0) => {
			l?.(), c.delete(n), t !== ut && (r.activate(), t ? (o.f |= se, Bt(o, t)) : (o.f & 8388608 && (o.f ^= se), Bt(o, e)), r.deactivate());
		};
		n.promise.then(u, (e) => u(null, e || "unknown"));
	}), sn(() => {
		for (let e of c) e.reject(ut);
	}), new Promise((e) => {
		function t(n) {
			function r() {
				n === a ? e(o) : t(a);
			}
			n.then(r, r);
		}
		t(a);
	});
}
/*#__NO_SIDE_EFFECTS__*/
function ft(e) {
	let t = /* @__PURE__ */ lt(e);
	return An(t), t;
}
/*#__NO_SIDE_EFFECTS__*/
function pt(e) {
	let t = /* @__PURE__ */ lt(e);
	return t.equals = ze, t;
}
function mt(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) H(t[n]);
	}
}
function ht(e) {
	var n, r = q, i = e.parent;
	if (!U && i !== null && e.v !== t && i.f & 24576) return ke(), e.v;
	J(i);
	try {
		e.f &= ~ie, mt(e), n = zn(e);
	} finally {
		J(r);
	}
	return n;
}
function gt(e) {
	var t = ht(e);
	if (!e.equals(t) && (e.wv = In(), (!N?.is_fork || e.deps === null) && (N === null ? e.v = t : (N.capture(e, t, !0), bt?.capture(e, t, !0)), e.deps === null))) {
		M(e, v);
		return;
	}
	U || (P === null ? Ye(e) : (on() || N?.is_fork) && P.set(e, t));
}
function _t(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac !== null && et(() => {
		t.ac.abort(he), t.ac = null;
	}), t.fn !== null && (t.teardown = h), Vn(t, 0), vn(t));
}
function vt(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && t.fn !== null && Hn(t);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/batch.js
var yt = null, N = null, bt = null, P = null, xt = null, St = !1, Ct = !1, wt = null, Tt = null, Et = 0, Dt = 1, Ot = class e {
	id = Dt++;
	#e = !1;
	linked = !0;
	#t = null;
	#n = null;
	async_deriveds = /* @__PURE__ */ new Map();
	current = /* @__PURE__ */ new Map();
	previous = /* @__PURE__ */ new Map();
	#r = /* @__PURE__ */ new Set();
	#i = /* @__PURE__ */ new Set();
	#a = 0;
	#o = /* @__PURE__ */ new Map();
	#s = null;
	#c = [];
	#l = [];
	#u = /* @__PURE__ */ new Set();
	#d = /* @__PURE__ */ new Set();
	#f = /* @__PURE__ */ new Map();
	#p = /* @__PURE__ */ new Set();
	is_fork = !1;
	#m = !1;
	constructor() {
		yt === null ? yt = this : (yt.#n = this, this.#t = yt), yt = this;
	}
	#h() {
		if (this.is_fork) return !0;
		for (let n of this.#o.keys()) {
			for (var e = n, t = !1; e.parent !== null;) {
				if (this.#f.has(e)) {
					t = !0;
					break;
				}
				e = e.parent;
			}
			if (!t) return !0;
		}
		return !1;
	}
	skip_effect(e) {
		this.#f.has(e) || this.#f.set(e, {
			d: [],
			m: []
		}), this.#p.delete(e);
	}
	unskip_effect(e, t = (e) => this.schedule(e)) {
		var n = this.#f.get(e);
		if (n) {
			this.#f.delete(e);
			for (var r of n.d) M(r, y), t(r);
			for (r of n.m) M(r, b), t(r);
		}
		this.#p.add(e);
	}
	#g() {
		this.#e = !0, Et++ > 1e3 && (this.#x(), At());
		for (let e of this.#u) this.#d.delete(e), M(e, y), this.schedule(e);
		for (let e of this.#d) M(e, b), this.schedule(e);
		let t = this.#c;
		this.#c = [], this.apply();
		var n = wt = [], r = [], i = Tt = [];
		for (let e of t) try {
			this.#_(e, n, r);
		} catch (t) {
			throw Pt(e), this.#h() || this.discard(), t;
		}
		if (N = null, i.length > 0) {
			var a = e.ensure();
			for (let e of i) a.schedule(e);
		}
		if (wt = null, Tt = null, this.#h()) {
			this.#b(r), this.#b(n);
			for (let [e, t] of this.#f) Nt(e, t);
			i.length > 0 && N.#g();
			return;
		}
		let o = this.#v();
		if (o) {
			this.#b(r), this.#b(n), o.#y(this);
			return;
		}
		this.#u.clear(), this.#d.clear();
		for (let e of this.#r) e(this);
		this.#r.clear(), bt = this, jt(r), jt(n), bt = null, this.#s?.resolve();
		var s = N;
		if (this.#a === 0 && (this.#c.length === 0 || s !== null) && this.#x(), this.#c.length > 0) {
			if (s !== null) {
				let e = s;
				e.#c.push(...this.#c.filter((t) => !e.#c.includes(t)));
			} else s = this;
		}
		s !== null && s.#g();
	}
	#_(e, t, n) {
		e.f ^= v;
		for (var r = e.first; r !== null;) {
			var i = r.f, a = !!(i & 96);
			if (!(a && i & 1024 || i & 8192 || this.#f.has(r)) && r.fn !== null) {
				a ? r.f ^= v : i & 4 ? t.push(r) : Ln(r) && (i & 16 && this.#d.add(r), Hn(r));
				var o = r.first;
				if (o !== null) {
					r = o;
					continue;
				}
			}
			for (; r !== null;) {
				var s = r.next;
				if (s !== null) {
					r = s;
					break;
				}
				r = r.parent;
			}
		}
	}
	#v() {
		for (var e = this.#t; e !== null;) {
			if (!e.is_fork) {
				for (let [t, [, n]] of this.current) if (e.current.has(t) && !n) return e;
			}
			e = e.#t;
		}
		return null;
	}
	#y(e) {
		for (let [t, n] of e.current) !this.previous.has(t) && e.previous.has(t) && this.previous.set(t, e.previous.get(t)), this.current.set(t, n);
		for (let [t, n] of e.async_deriveds) {
			let e = this.async_deriveds.get(t);
			e && n.promise.then(e.resolve).catch(e.reject);
		}
		e.async_deriveds.clear(), this.transfer_effects(e.#u, e.#d);
		let t = (e) => {
			var n = e.reactions;
			if (n !== null && !(e.f & 2 && !(e.f & 6144))) for (let e of n) {
				var r = e.f;
				if (r & 2) t(e);
				else {
					var i = e;
					r & 4194320 && !this.async_deriveds.has(i) && (this.#d.delete(i), M(i, y), this.schedule(i));
				}
			}
		};
		for (let e of this.current.keys()) t(e);
		this.oncommit(() => e.discard()), e.#x(), N = this, this.#g();
	}
	#b(e) {
		for (var t = 0; t < e.length; t += 1) Ze(e[t], this.#u, this.#d);
	}
	capture(e, n, r = !1) {
		e.v !== t && !this.previous.has(e) && this.previous.set(e, e.v), e.f & 8388608 || (this.current.set(e, [n, r]), P?.set(e, n)), this.is_fork || (e.v = n);
	}
	activate() {
		N = this;
	}
	deactivate() {
		N = null, P = null;
	}
	flush() {
		try {
			Ct = !0, N = this, this.#g();
		} finally {
			Et = 0, xt = null, wt = null, Tt = null, Ct = !1, N = null, P = null, It.clear();
		}
	}
	discard() {
		for (let e of this.#i) e(this);
		this.#i.clear();
		for (let e of this.async_deriveds.values()) e.reject(ut);
		this.#x(), this.#s?.resolve();
	}
	register_created_effect(e) {
		this.#l.push(e);
	}
	increment(e, t) {
		if (this.#a += 1, e) {
			let e = this.#o.get(t) ?? 0;
			this.#o.set(t, e + 1);
		}
	}
	decrement(e, t) {
		if (--this.#a, e) {
			let e = this.#o.get(t) ?? 0;
			e === 1 ? this.#o.delete(t) : this.#o.set(t, e - 1);
		}
		this.#m || (this.#m = !0, A(() => {
			this.#m = !1, this.linked && this.flush();
		}));
	}
	transfer_effects(e, t) {
		for (let t of e) this.#u.add(t);
		for (let e of t) this.#d.add(e);
		e.clear(), t.clear();
	}
	oncommit(e) {
		this.#r.add(e);
	}
	ondiscard(e) {
		this.#i.add(e);
	}
	settled() {
		return (this.#s ??= _()).promise;
	}
	static ensure() {
		if (N === null) {
			let t = N = new e();
			!Ct && !St && A(() => {
				t.#e || t.flush();
			});
		}
		return N;
	}
	apply() {
		P = null;
	}
	schedule(e) {
		if (xt = e, e.b?.is_pending && e.f & 16777228 && !(e.f & 32768)) {
			e.b.defer_effect(e);
			return;
		}
		for (var t = e; t.parent !== null;) {
			t = t.parent;
			var n = t.f;
			if (wt !== null && t === q && (W === null || !(W.f & 2))) return;
			if (n & 96) {
				if (!(n & 1024)) return;
				t.f ^= v;
			}
		}
		this.#c.push(t);
	}
	#x() {
		if (this.linked) {
			var e = this.#t, t = this.#n;
			e === null || (e.#n = t), t === null ? yt = e : t.#t = e, this.linked = !1;
		}
	}
};
function kt(e) {
	var t = St;
	St = !0;
	try {
		var n;
		for (e && (N !== null && !N.is_fork && N.flush(), n = e());;) {
			if (Ke(), N === null) return n;
			N.flush();
		}
	} finally {
		St = t;
	}
}
function At() {
	try {
		Se();
	} catch (e) {
		j(e, xt);
	}
}
var F = null;
function jt(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (!(r.f & 24576) && Ln(r) && (F = /* @__PURE__ */ new Set(), Hn(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && xn(r), F?.size > 0)) {
				It.clear();
				for (let e of F) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) F.has(n) && (F.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || Hn(n);
					}
				}
				F.clear();
			}
		}
		F = null;
	}
}
function Mt(e) {
	N.schedule(e);
}
function Nt(e, t) {
	if (!(e.f & 32 && e.f & 1024)) {
		e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), M(e, v);
		for (var n = e.first; n !== null;) Nt(n, t), n = n.next;
	}
}
function Pt(e) {
	M(e, v);
	for (var t = e.first; t !== null;) Pt(t), t = t.next;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/sources.js
var Ft = /* @__PURE__ */ new Set(), It = /* @__PURE__ */ new Map(), Lt = !1;
function Rt(e, t) {
	return {
		f: 0,
		v: e,
		reactions: null,
		equals: Le,
		rv: 0,
		wv: 0
	};
}
/*#__NO_SIDE_EFFECTS__*/
function I(e, t) {
	let n = Rt(e, t);
	return An(n), n;
}
/*#__NO_SIDE_EFFECTS__*/
function zt(e, t = !1, n = !0) {
	let r = Rt(e);
	return t || (r.equals = ze), r;
}
function L(e, t, n = !1) {
	return W !== null && (!G || W.f & 131072) && Ue() && W.f & 4325394 && (Y === null || !Y.has(e)) && De(), Bt(e, n ? Wt(t) : t, Tt);
}
function Bt(e, t, n = null) {
	if (!e.equals(t)) {
		It.set(e, U ? t : e.v);
		var r = Ot.ensure();
		if (r.capture(e, t), e.f & 2) {
			let t = e;
			e.f & 2048 && ht(t), P === null && Ye(t);
		}
		e.wv = In(), Ut(e, y, n), Ue() && q !== null && q.f & 1024 && !(q.f & 96) && (Q === null ? jn([e]) : Q.push(e)), !r.is_fork && Ft.size > 0 && !Lt && Vt();
	}
	return t;
}
function Vt() {
	Lt = !1;
	for (let e of Ft) {
		e.f & 1024 && M(e, b);
		let t;
		try {
			t = Ln(e);
		} catch {
			t = !0;
		}
		t && Hn(e);
	}
	Ft.clear();
}
function Ht(e) {
	L(e, e.v + 1);
}
function Ut(e, t, n) {
	var r = e.reactions;
	if (r !== null) for (var i = Ue(), a = r.length, o = 0; o < a; o++) {
		var s = r[o], c = s.f;
		if (!(!i && s === q)) {
			var l = (c & y) === 0;
			if (l && M(s, t), c & 131072) Ft.add(s);
			else if (c & 2) {
				var u = s;
				P?.delete(u), c & 65536 || (c & 512 && (q === null || !(q.f & 2097152)) && (s.f |= ie), Ut(u, b, n));
			} else if (l) {
				var d = s;
				c & 16 && F !== null && F.add(d), n === null ? Mt(d) : n.push(d);
			}
		}
	}
}
function Wt(e) {
	if (typeof e != "object" || !e || ce in e) return e;
	let n = p(e);
	if (n !== d && n !== f) return e;
	var i = /* @__PURE__ */ new Map(), a = r(e), o = /* @__PURE__ */ I(0), s = null, c = Pn, u = (e) => {
		if (Pn === c) return e();
		var t = W, n = Pn;
		K(null), Fn(c);
		var r = e();
		return K(t), Fn(n), r;
	};
	return a && i.set("length", /* @__PURE__ */ I(e.length, s)), new Proxy(e, {
		defineProperty(e, t, n) {
			(!("value" in n) || n.configurable === !1 || n.enumerable === !1 || n.writable === !1) && Te();
			var r = i.get(t);
			return r === void 0 ? u(() => {
				var e = /* @__PURE__ */ I(n.value, s);
				return i.set(t, e), e;
			}) : L(r, n.value, !0), !0;
		},
		deleteProperty(e, n) {
			var r = i.get(n);
			if (r === void 0) {
				if (n in e) {
					let e = u(() => /* @__PURE__ */ I(t, s));
					i.set(n, e), Ht(o);
				}
			} else L(r, t), Ht(o);
			return !0;
		},
		get(n, r, a) {
			if (r === ce) return e;
			var o = i.get(r), c = r in n;
			if (o === void 0 && (!c || l(n, r)?.writable) && (o = u(() => /* @__PURE__ */ I(Wt(c ? n[r] : t), s)), i.set(r, o)), o !== void 0) {
				var d = $(o);
				return d === t ? void 0 : d;
			}
			return Reflect.get(n, r, a);
		},
		getOwnPropertyDescriptor(e, n) {
			var r = Reflect.getOwnPropertyDescriptor(e, n);
			if (r && "value" in r) {
				var a = i.get(n);
				a && (r.value = $(a));
			} else if (r === void 0) {
				var o = i.get(n), s = o?.v;
				if (o !== void 0 && s !== t) return {
					enumerable: !0,
					configurable: !0,
					value: s,
					writable: !0
				};
			}
			return r;
		},
		has(e, n) {
			if (n === ce) return !0;
			var r = i.get(n), a = r !== void 0 && r.v !== t || Reflect.has(e, n);
			return (r !== void 0 || q !== null && (!a || l(e, n)?.writable)) && (r === void 0 && (r = u(() => /* @__PURE__ */ I(a ? Wt(e[n]) : t, s)), i.set(n, r)), $(r) === t) ? !1 : a;
		},
		set(e, n, r, c) {
			var d = i.get(n), f = n in e;
			if (a && n === "length") for (var p = r; p < d.v; p += 1) {
				var m = i.get(p + "");
				m === void 0 ? p in e && (m = u(() => /* @__PURE__ */ I(t, s)), i.set(p + "", m)) : L(m, t);
			}
			if (d === void 0) (!f || l(e, n)?.writable) && (d = u(() => /* @__PURE__ */ I(void 0, s)), L(d, Wt(r)), i.set(n, d));
			else {
				f = d.v !== t;
				var h = u(() => Wt(r));
				L(d, h);
			}
			var g = Reflect.getOwnPropertyDescriptor(e, n);
			if (g?.set && g.set.call(c, r), !f) {
				if (a && typeof n == "string") {
					var _ = i.get("length"), v = Number(n);
					Number.isInteger(v) && v >= _.v && L(_, v + 1);
				}
				Ht(o);
			}
			return !0;
		},
		ownKeys(e) {
			$(o);
			var n = Reflect.ownKeys(e).filter((e) => {
				var n = i.get(e);
				return n === void 0 || n.v !== t;
			});
			for (var [r, a] of i) a.v !== t && !(r in e) && n.push(r);
			return n;
		},
		setPrototypeOf() {
			Ee();
		}
	});
}
var Gt, Kt, qt, Jt;
function Yt() {
	if (Gt === void 0) {
		Gt = window, Kt = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, t = Node.prototype, n = Text.prototype;
		qt = l(t, "firstChild").get, Jt = l(t, "nextSibling").get, m(e) && (e[fe] = void 0, e[de] = null, e[pe] = void 0, e.__e = void 0), m(n) && (n[me] = void 0);
	}
}
function R(e = "") {
	return document.createTextNode(e);
}
/*@__NO_SIDE_EFFECTS__*/
function Xt(e) {
	return qt.call(e);
}
/*@__NO_SIDE_EFFECTS__*/
function z(e) {
	return Jt.call(e);
}
function Zt(e, t) {
	if (!T) return /* @__PURE__ */ Xt(e);
	var n = /* @__PURE__ */ Xt(D);
	if (n === null) n = D.appendChild(R());
	else if (t && n.nodeType !== 3) {
		var r = R();
		return n?.before(r), O(r), r;
	}
	return t && nn(n), O(n), n;
}
function Qt(e, t = 1, n = !1) {
	let r = T ? D : e;
	for (var i; t--;) i = r, r = /* @__PURE__ */ z(r);
	if (!T) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = R();
			return r === null ? i?.after(a) : r.before(a), O(a), a;
		}
		nn(r);
	}
	return O(r), r;
}
function $t(e) {
	e.textContent = "";
}
function en() {
	return !1;
}
function tn(e, t, n) {
	return t == null || t === "http://www.w3.org/1999/xhtml" ? n ? document.createElement(e, { is: n }) : document.createElement(e) : n ? document.createElementNS(t, e, { is: n }) : document.createElementNS(t, e);
}
function nn(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; t !== null && t.nodeType === 3;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/effects.js
function rn(e) {
	q === null && (W === null && xe(e), be()), U && ye(e);
}
function an(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function B(e, t) {
	var n = q;
	n !== null && n.f & 8192 && (e |= x);
	var r = {
		ctx: k,
		deps: null,
		nodes: null,
		f: e | y | 512,
		first: null,
		fn: t,
		last: null,
		next: null,
		parent: n,
		b: n && n.b,
		prev: null,
		teardown: null,
		wv: 0,
		ac: null
	};
	N?.register_created_effect(r);
	var i = r;
	if (e & 4) wt === null ? Ot.ensure().schedule(r) : wt.push(r);
	else if (t !== null) {
		try {
			Hn(r);
		} catch (e) {
			throw H(r), e;
		}
		i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= te));
	}
	if (i !== null && (i.parent = n, n !== null && an(i, n), W !== null && W.f & 2 && !(e & 64))) {
		var a = W;
		(a.effects ??= []).push(i);
	}
	return r;
}
function on() {
	return W !== null && !G;
}
function sn(e) {
	let t = B(8, null);
	return M(t, v), t.teardown = e, t;
}
function cn(e) {
	rn("$effect");
	var t = q.f;
	if (!W && t & 32 && k !== null && !k.i) {
		var n = k;
		(n.e ??= []).push(e);
	} else return ln(e);
}
function ln(e) {
	return B(4 | ne, e);
}
function un(e) {
	Ot.ensure();
	let t = B(64 | w, e);
	return () => {
		H(t);
	};
}
function dn(e) {
	Ot.ensure();
	let t = B(64 | w, e);
	return (e = {}) => new Promise((n) => {
		e.outro ? Sn(t, () => {
			H(t), n(void 0);
		}) : (H(t), n(void 0));
	});
}
function fn(e) {
	return B(4, e);
}
function pn(e) {
	return B(oe | w, e);
}
function mn(e, t = 0) {
	return B(8 | t, e);
}
function hn(e, t = [], n = [], r = []) {
	at(r, t, n, (t) => {
		B(8, () => {
			e(...t.map($));
		});
	});
}
function gn(e, t = 0) {
	return B(16 | t, e);
}
function V(e) {
	return B(32 | w, e);
}
function _n(e) {
	var t = e.teardown;
	if (t !== null) {
		let e = U, n = W;
		kn(!0), K(null);
		try {
			t.call(null);
		} finally {
			kn(e), K(n);
		}
	}
}
function vn(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null;) {
		let e = n.ac;
		e !== null && et(() => {
			e.abort(he);
		});
		var r = n.next;
		n.f & 64 ? n.parent = null : H(n, t), n = r;
	}
}
function yn(e) {
	for (var t = e.first; t !== null;) {
		var n = t.next;
		t.f & 32 || H(t), t = n;
	}
}
function H(e, t = !0) {
	var n = !1;
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (bn(e.nodes.start, e.nodes.end), n = !0), e.f |= C, vn(e, t && !n), Vn(e, 0);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	_n(e), e.f ^= C, e.f |= S;
	var i = e.parent;
	i !== null && i.first !== null && xn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function bn(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : /* @__PURE__ */ z(e);
		e.remove(), e = n;
	}
}
function xn(e) {
	var t = e.parent, n = e.prev, r = e.next;
	n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Sn(e, t, n = !0) {
	var r = [];
	Cn(e, r, !0);
	var i = () => {
		n && H(e), t && t();
	}, a = r.length;
	if (a > 0) {
		var o = () => --a || i();
		for (var s of r) s.out(o);
	} else i();
}
function Cn(e, t, n) {
	if (!(e.f & 8192)) {
		e.f ^= x;
		var r = e.nodes && e.nodes.t;
		if (r !== null) for (let e of r) (e.is_global || n) && t.push(e);
		for (var i = e.first; i !== null;) {
			var a = i.next;
			if (!(i.f & 64)) {
				var o = !!(i.f & 65536) || !!(i.f & 32) && !!(e.f & 16);
				Cn(i, t, o ? n : !1);
			}
			i = a;
		}
	}
}
function wn(e) {
	Tn(e, !0);
}
function Tn(e, t) {
	if (e.f & 8192) {
		e.f ^= x, e.f & 1024 || (M(e, y), Ot.ensure().schedule(e));
		for (var n = e.first; n !== null;) {
			var r = n.next, i = !!(n.f & 65536) || !!(n.f & 32);
			Tn(n, i ? t : !1), n = r;
		}
		var a = e.nodes && e.nodes.t;
		if (a !== null) for (let e of a) (e.is_global || t) && e.in();
	}
}
function En(e, t) {
	if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
		var i = n === r ? null : /* @__PURE__ */ z(n);
		t.append(n), n = i;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/legacy.js
var Dn = null, On = !1, U = !1;
function kn(e) {
	U = e;
}
var W = null, G = !1;
function K(e) {
	W = e;
}
var q = null;
function J(e) {
	q = e;
}
var Y = null;
function An(e) {
	W !== null && (Y ??= /* @__PURE__ */ new Set()).add(e);
}
var X = null, Z = 0, Q = null;
function jn(e) {
	Q = e;
}
var Mn = 1, Nn = 0, Pn = Nn;
function Fn(e) {
	Pn = e;
}
function In() {
	return ++Mn;
}
function Ln(e) {
	var t = e.f;
	if (t & 2048) return !0;
	if (t & 2 && (e.f &= ~ie), t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if (Ln(a) && gt(a), a.wv > e.wv) return !0;
		}
		t & 512 && P === null && M(e, v);
	}
	return !1;
}
function Rn(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(Y !== null && Y.has(e))) for (var i = 0; i < r.length; i++) {
		var a = r[i];
		a.f & 2 ? Rn(a, t, !1) : t === a && (n ? M(a, y) : a.f & 1024 && M(a, b), Mt(a));
	}
}
function zn(e) {
	var t = X, n = Z, r = Q, i = W, a = Y, o = k, s = G, c = Pn, l = e.f;
	X = null, Z = 0, Q = null, W = l & 96 ? null : e, Y = null, Be(e.ctx), G = !1, Pn = ++Nn, e.ac !== null && (et(() => {
		e.ac.abort(he);
	}), e.ac = null);
	try {
		e.f |= ae;
		var u = e.fn, d = u();
		e.f |= ee;
		var f = e.deps, p = N?.is_fork;
		if (X !== null) {
			var m;
			if (p || Vn(e, Z), f !== null && Z > 0) for (f.length = Z + X.length, m = 0; m < X.length; m++) f[Z + m] = X[m];
			else e.deps = f = X;
			if (on() && e.f & 512) for (m = Z; m < f.length; m++) (f[m].reactions ??= []).push(e);
		} else !p && f !== null && Z < f.length && (Vn(e, Z), f.length = Z);
		if (Ue() && Q !== null && !G && f !== null && !(e.f & 6146)) for (m = 0; m < Q.length; m++) Rn(Q[m], e);
		if (i !== null && i !== e) {
			if (Nn++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = Nn;
			if (t !== null) for (let e of t) e.rv = Nn;
			Q !== null && (r === null ? r = Q : r.push(...Q));
		}
		return e.f & 8388608 && (e.f ^= se), d;
	} catch (e) {
		return qe(e);
	} finally {
		e.f ^= ae, X = t, Z = n, Q = r, W = i, Y = a, Be(o), G = s, Pn = c;
	}
}
function Bn(e, n) {
	let r = n.reactions;
	if (r !== null) {
		var o = i.call(r, e);
		if (o !== -1) {
			var s = r.length - 1;
			s === 0 ? r = n.reactions = null : (r[o] = r[s], r.pop());
		}
	}
	if (r === null && n.f & 2 && (X === null || !a.call(X, n))) {
		var c = n;
		c.f & 512 && (c.f ^= 512, c.f &= ~ie), c.v !== t && Ye(c), c.ac !== null && et(() => {
			c.ac.abort(he), c.ac = null, M(c, y);
		}), _t(c), Vn(c, 0);
	}
}
function Vn(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) Bn(e, n[r]);
}
function Hn(e) {
	var t = e.f;
	if (!(t & 16384)) {
		M(e, v);
		var n = q, r = On;
		q = e, On = !(t & 96);
		try {
			t & 16777232 ? yn(e) : vn(e), _n(e);
			var i = zn(e);
			e.teardown = typeof i == "function" ? i : null, e.wv = Mn;
		} finally {
			On = r, q = n;
		}
	}
}
function $(e) {
	var t = !!(e.f & 2);
	if (Dn?.add(e), W !== null && !G && !(q !== null && q.f & 16384) && (Y === null || !Y.has(e))) {
		var n = W.deps;
		if (W.f & 2097152) e.rv < Nn && (e.rv = Nn, X === null && n !== null && n[Z] === e ? Z++ : X === null ? X = [e] : X.push(e));
		else {
			W.deps ??= [], a.call(W.deps, e) || W.deps.push(e);
			var r = e.reactions;
			r === null ? e.reactions = [W] : a.call(r, W) || r.push(W);
		}
	}
	if (U && It.has(e)) return It.get(e);
	if (t) {
		var i = e;
		if (U) {
			var o = i.v;
			return (!(i.f & 1024) && i.reactions !== null || Wn(i)) && (o = ht(i)), It.set(i, o), o;
		}
		var s = !(i.f & 512) && !G && W !== null && (On || !!(W.f & 512)), c = (i.f & ee) === 0;
		Ln(i) && (s && (i.f |= 512), gt(i)), s && !c && (vt(i), Un(i));
	}
	if (P?.has(e)) return P.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function Un(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (vt(t), Un(t));
}
function Wn(e) {
	if (e.v === t) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (It.has(t) || t.f & 2 && Wn(t)) return !0;
	return !1;
}
function Gn(e) {
	var t = G;
	try {
		return G = !0, e();
	} finally {
		G = t;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/events.js
var Kn = Symbol("events"), qn = /* @__PURE__ */ new Set(), Jn = /* @__PURE__ */ new Set();
function Yn(e, t, n, r = {}) {
	function i(e) {
		if (r.capture || er.call(t, e), !e.cancelBubble) return et(() => n?.call(this, e));
	}
	return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? A(() => {
		t.addEventListener(e, i, r);
	}) : t.addEventListener(e, i, r), i;
}
function Xn(e, t, n, r, i) {
	var a = {
		capture: r,
		passive: i
	}, o = Yn(e, t, n, a);
	(t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && sn(() => {
		t.removeEventListener(e, o, a);
	});
}
function Zn(e, t, n) {
	(t[Kn] ??= {})[e] = n;
}
function Qn(e) {
	for (var t = 0; t < e.length; t++) qn.add(e[t]);
	for (var n of Jn) n(e);
}
var $n = null;
function er(e) {
	var t = this, n = t.ownerDocument, r = e.type, i = e.composedPath?.() || [], a = i[0] || e.target;
	$n = e;
	var o = 0, s = $n === e && e[Kn];
	if (s) {
		var l = i.indexOf(s);
		if (l !== -1 && (t === document || t === window)) {
			e[Kn] = t;
			return;
		}
		var u = i.indexOf(t);
		if (u === -1) return;
		l <= u && (o = l);
	}
	if (a = i[o] || e.target, a !== t) {
		c(e, "currentTarget", {
			configurable: !0,
			get() {
				return a || n;
			}
		});
		var d = W, f = q;
		K(null), J(null);
		try {
			for (var p, m = []; a !== null && a !== t;) {
				try {
					var h = a[Kn]?.[r];
					h != null && (!a.disabled || e.target === a) && h.call(a, e);
				} catch (e) {
					p ? m.push(e) : p = e;
				}
				if (e.cancelBubble) break;
				o++, a = o < i.length ? i[o] : null;
			}
			if (p) {
				for (let e of m) queueMicrotask(() => {
					throw e;
				});
				throw p;
			}
		} finally {
			e[Kn] = t, delete e.currentTarget, K(d), J(f);
		}
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/reconciler.js
var tr = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function nr(e) {
	return tr?.createHTML(e) ?? e;
}
function rr(e) {
	var t = tn("template");
	return t.innerHTML = nr(e.replaceAll("<!>", "<!---->")), t.content;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/template.js
function ir(e, t) {
	var n = q;
	n.nodes === null && (n.nodes = {
		start: e,
		end: t,
		a: null,
		t: null
	});
}
/*#__NO_SIDE_EFFECTS__*/
function ar(e, t) {
	var n = !!(t & 1), r = !!(t & 2), i, a = !e.startsWith("<!>");
	return () => {
		if (T) return ir(D, null), D;
		i === void 0 && (i = rr(a ? e : "<!>" + e), n || (i = /* @__PURE__ */ Xt(i)));
		var t = r || Kt ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ Xt(t), s = t.lastChild;
			ir(o, s);
		} else ir(t, t);
		return t;
	};
}
function or(e, t) {
	if (T) {
		var n = q;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = D), Me();
		return;
	}
	e !== null && e.before(t);
}
[.../* @__PURE__ */ "allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split(".")];
var sr = ["touchstart", "touchmove"];
function cr(e) {
	return sr.includes(e);
}
function lr(e, t) {
	var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
	n !== (e[me] ??= e.nodeValue) && (e[me] = n, e.nodeValue = `${n}`);
}
function ur(e, t) {
	return pr(e, t);
}
function dr(t, n) {
	Yt(), n.intro = n.intro ?? !1;
	let r = n.target, i = T, a = D;
	try {
		for (var o = /* @__PURE__ */ Xt(r); o && (o.nodeType !== 8 || o.data !== "[");) o = /* @__PURE__ */ z(o);
		if (!o) throw e;
		E(!0), O(o);
		let i = pr(t, {
			...n,
			anchor: o
		});
		return E(!1), i;
	} catch (i) {
		if (i instanceof Error && i.message.split("\n").some((e) => e.startsWith("https://svelte.dev/e/"))) throw i;
		return i !== e && console.warn("Failed to hydrate: ", i), n.recover === !1 && Ce(), Yt(), $t(r), E(!1), ur(t, n);
	} finally {
		E(i), O(a);
	}
}
var fr = /* @__PURE__ */ new Map();
function pr(t, { target: n, anchor: r, props: i = {}, events: a, context: s, intro: c = !0, transformError: l }) {
	Yt();
	var u = void 0, d = dn(() => {
		var c = r ?? n.appendChild(R());
		rt(c, { pending: () => {} }, (n) => {
			Ve({});
			var r = k;
			if (s && (r.c = s), a && (i.$$events = a), T && ir(n, null), u = t(n, i) || {}, T && (q.nodes.end = D, D === null || D.nodeType !== 8 || D.data !== "]")) throw Ae(), e;
			He();
		}, l);
		var d = /* @__PURE__ */ new Set(), f = (e) => {
			for (var t = 0; t < e.length; t++) {
				var r = e[t];
				if (!d.has(r)) {
					d.add(r);
					var i = cr(r);
					for (let e of [n, document]) {
						var a = fr.get(e);
						a === void 0 && (a = /* @__PURE__ */ new Map(), fr.set(e, a));
						var o = a.get(r);
						o === void 0 ? (e.addEventListener(r, er, { passive: i }), a.set(r, 1)) : a.set(r, o + 1);
					}
				}
			}
		};
		return f(o(qn)), Jn.add(f), () => {
			for (var e of d) for (let r of [n, document]) {
				var t = fr.get(r), i = t.get(e);
				--i == 0 ? (r.removeEventListener(e, er), t.delete(e), t.size === 0 && fr.delete(r)) : t.set(e, i);
			}
			Jn.delete(f), c !== r && c.parentNode?.removeChild(c);
		};
	});
	return mr.set(u, d), u;
}
var mr = /* @__PURE__ */ new WeakMap();
function hr(e, t) {
	let n = mr.get(e);
	return n ? (mr.delete(e), n(t)) : Promise.resolve();
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/branches.js
var gr = class {
	anchor;
	#e = /* @__PURE__ */ new Map();
	#t = /* @__PURE__ */ new Map();
	#n = /* @__PURE__ */ new Map();
	#r = /* @__PURE__ */ new Set();
	#i = !0;
	constructor(e, t = !0) {
		this.anchor = e, this.#i = t;
	}
	#a = (e) => {
		if (this.#e.has(e)) {
			var t = this.#e.get(e), n = this.#t.get(t);
			if (n) wn(n), this.#r.delete(t);
			else {
				var r = this.#n.get(t);
				r && (wn(r.effect), this.#t.set(t, r.effect), this.#n.delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), n = r.effect);
			}
			for (let [t, n] of this.#e) {
				if (this.#e.delete(t), t === e) break;
				let r = this.#n.get(n);
				r && (H(r.effect), this.#n.delete(n));
			}
			for (let [e, r] of this.#t) {
				if (e === t || this.#r.has(e)) continue;
				let i = () => {
					if (Array.from(this.#e.values()).includes(e)) {
						var t = document.createDocumentFragment();
						En(r, t), t.append(R()), this.#n.set(e, {
							effect: r,
							fragment: t
						});
					} else H(r);
					this.#r.delete(e), this.#t.delete(e);
				};
				this.#i || !n ? (this.#r.add(e), Sn(r, i, !1)) : i();
			}
		}
	};
	#o = (e) => {
		this.#e.delete(e);
		let t = Array.from(this.#e.values());
		for (let [e, n] of this.#n) t.includes(e) || (H(n.effect), this.#n.delete(e));
	};
	ensure(e, t) {
		var n = N, r = en();
		if (t && !this.#t.has(e) && !this.#n.has(e)) {
			if (r) {
				var i = document.createDocumentFragment(), a = R();
				i.append(a), this.#n.set(e, {
					effect: V(() => t(a)),
					fragment: i
				});
			} else this.#t.set(e, V(() => t(this.anchor)));
		}
		if (this.#e.set(n, e), r) {
			for (let [t, r] of this.#t) t === e ? n.unskip_effect(r) : n.skip_effect(r);
			for (let [t, r] of this.#n) t === e ? n.unskip_effect(r.effect) : n.skip_effect(r.effect);
			n.oncommit(this.#a), n.ondiscard(this.#o);
		} else T && (this.anchor = D), this.#a(n);
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/if.js
function _r(e, t, n = !1) {
	var r;
	T && (r = D, Me());
	var i = new gr(e), a = n ? te : 0;
	function o(e, t) {
		if (T) {
			var n = Ie(r);
			if (e !== parseInt(n.substring(1))) {
				var a = Fe();
				O(a), i.anchor = a, E(!1), i.ensure(e, t), E(!0);
				return;
			}
		}
		i.ensure(e, t);
	}
	gn(() => {
		var e = !1;
		t((t, n = 0) => {
			e = !0, o(n, t);
		}), e || o(-1, null);
	}, a);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/each.js
function vr(e, t, n) {
	for (var r = [], i = t.length, a, s = t.length, c = 0; c < i; c++) {
		let n = t[c];
		Sn(n, () => {
			if (a) {
				if (a.pending.delete(n), a.done.add(n), a.pending.size === 0) {
					var t = e.outrogroups;
					yr(e, o(a.done)), t.delete(a), t.size === 0 && (e.outrogroups = null);
				}
			} else --s;
		}, !1);
	}
	if (s === 0) {
		var l = r.length === 0 && n !== null && e.pending.size === 0;
		if (l) {
			var u = n, d = u.parentNode;
			$t(d), d.append(u), e.items.clear();
		}
		yr(e, t, !l);
	} else a = {
		pending: new Set(t),
		done: /* @__PURE__ */ new Set()
	}, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(a);
}
function yr(e, t, n = !0) {
	var r;
	if (e.pending.size > 0) {
		r = /* @__PURE__ */ new Set();
		for (let t of e.pending.values()) for (let n of t) r.add(e.items.get(n).e);
	}
	for (var i = 0; i < t.length; i++) {
		var a = t[i];
		r?.has(a) ? (a.f |= re, En(a, document.createDocumentFragment())) : H(t[i], n);
	}
}
var br;
function xr(e, t, n, i, a, s = null) {
	var c = e, l = /* @__PURE__ */ new Map();
	if (t & 4) {
		var u = e;
		c = T ? O(/* @__PURE__ */ Xt(u)) : u.appendChild(R());
	}
	T && Me();
	var d = null, f = /* @__PURE__ */ pt(() => {
		var e = n();
		return r(e) ? e : e == null ? [] : o(e);
	}), p, m = /* @__PURE__ */ new Map(), h = !0;
	function g(e) {
		v.effect.f & 16384 || (v.pending.delete(e), v.fallback = d, Cr(v, p, c, t, i), d !== null && (p.length === 0 ? d.f & 33554432 ? (d.f ^= re, Tr(d, null, c)) : wn(d) : Sn(d, () => {
			d = null;
		})));
	}
	function _(e) {
		v.pending.delete(e);
	}
	var v = {
		effect: gn(() => {
			p = $(f);
			var e = p.length;
			let r = !1;
			T && Ie(c) === "[!" != (e === 0) && (c = Fe(), O(c), E(!1), r = !0);
			for (var o = /* @__PURE__ */ new Set(), u = N, v = en(), y = 0; y < e; y += 1) {
				T && D.nodeType === 8 && D.data === "]" && (c = D, r = !0, E(!1));
				var b = p[y], x = i(b, y), S = h ? null : l.get(x);
				S ? (S.v && Bt(S.v, b), S.i && Bt(S.i, y), v && u.unskip_effect(S.e)) : (S = wr(l, h ? c : br ??= R(), b, x, y, a, t, n), h || (S.e.f |= re), l.set(x, S)), o.add(x);
			}
			if (e === 0 && s && !d && (h ? d = V(() => s(c)) : (d = V(() => s(br ??= R())), d.f |= re)), e > o.size && ve("", "", ""), T && e > 0 && O(Fe()), !h) {
				if (m.set(u, o), v) {
					for (let [e, t] of l) o.has(e) || u.skip_effect(t.e);
					u.oncommit(g), u.ondiscard(_);
				} else g(u);
			}
			r && E(!0), $(f);
		}),
		flags: t,
		items: l,
		pending: m,
		outrogroups: null,
		fallback: d
	};
	h = !1, T && (c = D);
}
function Sr(e) {
	for (; e !== null && !(e.f & 32);) e = e.next;
	return e;
}
function Cr(e, t, n, r, i) {
	var a = !!(r & 8), s = t.length, c = e.items, l = Sr(e.effect.first), u, d = null, f, p = [], m = [], h, g, _, v;
	if (a) for (v = 0; v < s; v += 1) h = t[v], g = i(h, v), _ = c.get(g).e, _.f & 33554432 || (_.nodes?.a?.measure(), (f ??= /* @__PURE__ */ new Set()).add(_));
	for (v = 0; v < s; v += 1) {
		if (h = t[v], g = i(h, v), _ = c.get(g).e, e.outrogroups !== null) for (let t of e.outrogroups) t.pending.delete(_), t.done.delete(_);
		if (_.f & 8192 && (wn(_), a && (_.nodes?.a?.unfix(), (f ??= /* @__PURE__ */ new Set()).delete(_))), _.f & 33554432) {
			if (_.f ^= re, _ === l) Tr(_, null, n);
			else {
				var y = d ? d.next : l;
				_ === e.effect.last && (e.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), Er(e, d, _), Er(e, _, y), Tr(_, y, n), d = _, p = [], m = [], l = Sr(d.next);
				continue;
			}
		}
		if (_ !== l) {
			if (u !== void 0 && u.has(_)) {
				if (p.length < m.length) {
					var b = m[0], x;
					d = b.prev;
					var S = p[0], ee = p[p.length - 1];
					for (x = 0; x < p.length; x += 1) Tr(p[x], b, n);
					for (x = 0; x < m.length; x += 1) u.delete(m[x]);
					Er(e, S.prev, ee.next), Er(e, d, S), Er(e, ee, b), l = b, d = ee, --v, p = [], m = [];
				} else u.delete(_), Tr(_, l, n), Er(e, _.prev, _.next), Er(e, _, d === null ? e.effect.first : d.next), Er(e, d, _), d = _;
				continue;
			}
			for (p = [], m = []; l !== null && l !== _;) (u ??= /* @__PURE__ */ new Set()).add(l), m.push(l), l = Sr(l.next);
			if (l === null) continue;
		}
		_.f & 33554432 || p.push(_), d = _, l = Sr(_.next);
	}
	if (e.outrogroups !== null) {
		for (let t of e.outrogroups) t.pending.size === 0 && (yr(e, o(t.done)), e.outrogroups?.delete(t));
		e.outrogroups.size === 0 && (e.outrogroups = null);
	}
	if (l !== null || u !== void 0) {
		var C = [];
		if (u !== void 0) for (_ of u) _.f & 8192 || C.push(_);
		for (; l !== null;) !(l.f & 8192) && l !== e.fallback && C.push(l), l = Sr(l.next);
		var te = C.length;
		if (te > 0) {
			var w = r & 4 && s === 0 ? n : null;
			if (a) {
				for (v = 0; v < te; v += 1) C[v].nodes?.a?.measure();
				for (v = 0; v < te; v += 1) C[v].nodes?.a?.fix();
			}
			vr(e, C, w);
		}
	}
	a && A(() => {
		if (f !== void 0) for (_ of f) _.nodes?.a?.apply();
	});
}
function wr(e, t, n, r, i, a, o, s) {
	var c = o & 1 ? o & 16 ? Rt(n) : /* @__PURE__ */ zt(n, !1, !1) : null, l = o & 2 ? Rt(i) : null;
	return {
		v: c,
		i: l,
		e: V(() => (a(t, c ?? n, l ?? i, s), () => {
			e.delete(r);
		}))
	};
}
function Tr(e, t, n) {
	if (e.nodes) for (var r = e.nodes.start, i = e.nodes.end, a = t && !(t.f & 33554432) ? t.nodes.start : n; r !== null;) {
		var o = /* @__PURE__ */ z(r);
		if (a.before(r), r === i) return;
		r = o;
	}
}
function Er(e, t, n) {
	t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/css.js
function Dr(e, t) {
	fn(() => {
		var n = e.getRootNode(), r = n.host ? n : n.head ?? n.ownerDocument.head;
		if (!r.querySelector("#" + t.hash)) {
			let e = tn("style");
			e.id = t.hash, e.textContent = t.code, r.appendChild(e);
		}
	});
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/attributes.js
var Or = Symbol("is custom element"), kr = Symbol("is html"), Ar = ge ? "link" : "LINK";
function jr(e, t, n, r) {
	var i = Mr(e);
	T && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === Ar) || i[t] !== (i[t] = n) && (t === "loading" && (e[ue] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Pr(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Mr(e) {
	return e[de] ??= {
		[Or]: e.nodeName.includes("-"),
		[kr]: e.namespaceURI === n
	};
}
var Nr = /* @__PURE__ */ new Map();
function Pr(e) {
	var t = e.getAttribute("is") || e.nodeName, n = Nr.get(t);
	if (n) return n;
	Nr.set(t, n = []);
	for (var r, i = e, a = Element.prototype; a !== i;) {
		for (var o in r = u(i), r) r[o].set && o !== "innerHTML" && o !== "textContent" && o !== "innerText" && n.push(o);
		i = p(i);
	}
	return n;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/this.js
function Fr(e, t) {
	return e === t || e?.[ce] === t;
}
function Ir(e = {}, t, n, r) {
	var i = k.r, a = q;
	return fn(() => {
		var o, s;
		return mn(() => {
			o = s, s = r?.() || [], Gn(() => {
				Fr(n(...s), e) || (t(e, ...s), o && Fr(n(...o), e) && t(null, ...o));
			});
		}), () => {
			let r = a;
			for (; r !== i && r.parent !== null && r.parent.f & 33554432;) r = r.parent;
			let o = () => {
				s && Fr(n(...s), e) && t(null, ...s);
			}, c = r.teardown;
			r.teardown = () => {
				o(), c?.();
			};
		};
	}), e;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/props.js
function Lr(e, t, n, r) {
	var i = !0, a = !!(n & 8), o = !!(n & 16), s = r, c = !0, u = void 0, d = () => o && i ? (u ??= /* @__PURE__ */ lt(r), $(u)) : (c && (c = !1, s = o ? Gn(r) : r), s);
	let f;
	if (a) {
		var p = ce in e || le in e;
		f = l(e, t)?.set ?? (p && t in e ? (n) => e[t] = n : void 0);
	}
	var m, h = !1;
	a ? [m, h] = $e(() => e[t]) : m = e[t], m === void 0 && r !== void 0 && (m = d(), f && (i && we(t), f(m)));
	var g = i ? () => {
		var n = e[t];
		return n === void 0 ? d() : (c = !0, n);
	} : () => {
		var n = e[t];
		return n !== void 0 && (s = void 0), n === void 0 ? s : n;
	};
	if (i && !(n & 4)) return g;
	if (f) {
		var _ = e.$$legacy;
		return (function(e, t) {
			return arguments.length > 0 ? ((!i || !t || _ || h) && f(t ? g() : e), e) : g();
		});
	}
	var v = !1, y = (n & 1 ? lt : pt)(() => (v = !1, g()));
	a && $(y);
	var b = q;
	return (function(e, t) {
		if (arguments.length > 0) {
			let n = t ? $(y) : i && a ? Wt(e) : e;
			return L(y, n), v = !0, s !== void 0 && (s = n), e;
		}
		return U && v || b.f & 16384 ? y.v : $(y);
	});
}
//#endregion
//#region node_modules/svelte/src/legacy/legacy-client.js
function Rr(e) {
	return new zr(e);
}
var zr = class {
	#e;
	#t;
	constructor(e) {
		var t = /* @__PURE__ */ new Map(), n = (e, n) => {
			var r = /* @__PURE__ */ zt(n, !1, !1);
			return t.set(e, r), r;
		};
		let r = new Proxy({
			...e.props || {},
			$$events: {}
		}, {
			get(e, r) {
				return $(t.get(r) ?? n(r, Reflect.get(e, r)));
			},
			has(e, r) {
				return r === le || ($(t.get(r) ?? n(r, Reflect.get(e, r))), Reflect.has(e, r));
			},
			set(e, r, i) {
				return L(t.get(r) ?? n(r, i), i), Reflect.set(e, r, i);
			}
		});
		this.#t = (e.hydrate ? dr : ur)(e.component, {
			target: e.target,
			anchor: e.anchor,
			props: r,
			context: e.context,
			intro: e.intro ?? !1,
			recover: e.recover,
			transformError: e.transformError
		}), (!e?.props?.$$host || e.sync === !1) && kt(), this.#e = r.$$events;
		for (let e of Object.keys(this.#t)) e !== "$set" && e !== "$destroy" && e !== "$on" && c(this, e, {
			get() {
				return this.#t[e];
			},
			set(t) {
				this.#t[e] = t;
			},
			enumerable: !0
		});
		this.#t.$set = (e) => {
			Object.assign(r, e);
		}, this.#t.$destroy = () => {
			hr(this.#t);
		};
	}
	$set(e) {
		this.#t.$set(e);
	}
	$on(e, t) {
		this.#e[e] = this.#e[e] || [];
		let n = (...e) => t.call(this, ...e);
		return this.#e[e].push(n), () => {
			this.#e[e] = this.#e[e].filter((e) => e !== n);
		};
	}
	$destroy() {
		this.#t.$destroy();
	}
}, Br;
typeof HTMLElement == "function" && (Br = class extends HTMLElement {
	$$ctor;
	$$s;
	$$c;
	$$cn = !1;
	$$d = {};
	$$r = !1;
	$$p_d = {};
	$$l = {};
	$$l_u = /* @__PURE__ */ new Map();
	$$me;
	$$shadowRoot = null;
	constructor(e, t, n) {
		super(), this.$$ctor = e, this.$$s = t, n && (this.$$shadowRoot = this.attachShadow(n));
	}
	addEventListener(e, t, n) {
		if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
			let n = this.$$c.$on(e, t);
			this.$$l_u.set(t, n);
		}
		super.addEventListener(e, t, n);
	}
	removeEventListener(e, t, n) {
		if (super.removeEventListener(e, t, n), this.$$c) {
			let e = this.$$l_u.get(t);
			e && (e(), this.$$l_u.delete(t));
		}
	}
	async connectedCallback() {
		if (this.$$cn = !0, !this.$$c) {
			if (await Promise.resolve(), !this.$$cn || this.$$c) return;
			function e(e) {
				return (t) => {
					let n = tn("slot");
					e !== "default" && (n.name = e), or(t, n);
				};
			}
			let t = {}, n = Hr(this);
			for (let r of this.$$s) r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
			for (let e of this.attributes) {
				let t = this.$$g_p(e.name);
				t in this.$$d || (this.$$d[t] = Vr(t, e.value, this.$$p_d, "toProp"));
			}
			for (let e in this.$$p_d) !(e in this.$$d) && this[e] !== void 0 && (this.$$d[e] = this[e], delete this[e]);
			this.$$c = Rr({
				component: this.$$ctor,
				target: this.$$shadowRoot || this,
				props: {
					...this.$$d,
					$$slots: t,
					$$host: this
				}
			}), this.$$me = un(() => {
				mn(() => {
					this.$$r = !0;
					for (let e of s(this.$$c)) {
						if (!this.$$p_d[e]?.reflect) continue;
						this.$$d[e] = this.$$c[e];
						let t = Vr(e, this.$$d[e], this.$$p_d, "toAttribute");
						t == null ? this.removeAttribute(this.$$p_d[e].attribute || e) : this.setAttribute(this.$$p_d[e].attribute || e, t);
					}
					this.$$r = !1;
				});
			});
			for (let e in this.$$l) for (let t of this.$$l[e]) {
				let n = this.$$c.$on(e, t);
				this.$$l_u.set(t, n);
			}
			this.$$l = {};
		}
	}
	attributeChangedCallback(e, t, n) {
		this.$$r || (e = this.$$g_p(e), this.$$d[e] = Vr(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
	}
	disconnectedCallback() {
		this.$$cn = !1, Promise.resolve().then(() => {
			!this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
		});
	}
	$$g_p(e) {
		return s(this.$$p_d).find((t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e) || e;
	}
});
function Vr(e, t, n, r) {
	let i = n[e]?.type;
	if (t = i === "Boolean" && typeof t != "boolean" ? t != null : t, !r || !n[e]) return t;
	if (r === "toAttribute") switch (i) {
		case "Object":
		case "Array": return t == null ? null : JSON.stringify(t);
		case "Boolean": return t ? "" : null;
		case "Number": return t ?? null;
		default: return t;
	}
	else switch (i) {
		case "Object":
		case "Array": return t && JSON.parse(t);
		case "Boolean": return t;
		case "Number": return t == null ? t : +t;
		default: return t;
	}
}
function Hr(e) {
	let t = {};
	return e.childNodes.forEach((e) => {
		t[e.slot || "default"] = !0;
	}), t;
}
function Ur(e, t, n, r, i, a) {
	let o = class extends Br {
		constructor() {
			super(e, n, i), this.$$p_d = t;
		}
		static get observedAttributes() {
			return s(t).map((e) => (t[e].attribute || e).toLowerCase());
		}
	};
	return s(t).forEach((e) => {
		c(o.prototype, e, {
			get() {
				return this.$$c && e in this.$$c ? this.$$c[e] : this.$$d[e];
			},
			set(n) {
				n = Vr(e, n, t), this.$$d[e] = n;
				var r = this.$$c;
				r && (l(r, e)?.get ? r[e] = n : r.$set({ [e]: n }));
			}
		});
	}), r.forEach((e) => {
		c(o.prototype, e, { get() {
			return this.$$c?.[e];
		} });
	}), a && (o = a(o)), e.element = o, o;
}
//#endregion
//#region src/ids.ts
function Wr(e) {
	let t = [], n = !1, r = 0;
	for (let i of e) {
		let e = i.codePointAt(0) ?? -1;
		if (e >= 65 && e <= 90 || e >= 97 && e <= 122 || e >= 48 && e <= 57 || i === "_" || i === "-") {
			if (n = !1, i === "-" && t.length === 0) continue;
			t.push(i), i !== "-" && (r = t.length);
		} else t.length > 0 && !n && t.push("-"), n = !0;
	}
	return t.length = r, t.join("") || "tab";
}
function Gr(e, t) {
	let n = Wr(t);
	return {
		tabId: `${e}-tab-${n}`,
		panelId: `${e}-panel-${n}`
	};
}
//#endregion
//#region src/scroll.ts
function Kr({ scrollLeft: e, clientWidth: t, scrollWidth: n, itemLeft: r, itemRight: i, padding: a = 8 }) {
	let o = e;
	return r < a ? o += r - a : i > t - a && (o += i - (t - a)), Math.max(0, Math.min(Math.max(0, n - t), o));
}
function qr({ scrollLeft: e, clientWidth: t, scrollWidth: n, direction: r }) {
	let i = Math.max(0, n - t), a = Math.max(1, Math.floor(t * .8));
	return Math.max(0, Math.min(i, e + r * a));
}
//#endregion
//#region src/Tabs.svelte
var Jr = /* @__PURE__ */ ar("<button type=\"button\" class=\"worn-tabs-control svelte-rc9auj\" aria-label=\"Scroll to previous tabs\"><span aria-hidden=\"true\">&lsaquo;</span></button>"), Yr = /* @__PURE__ */ ar("<button type=\"button\" class=\"worn-tab svelte-rc9auj\" role=\"tab\"><span class=\"worn-tab-label svelte-rc9auj\"> </span></button>"), Xr = /* @__PURE__ */ ar("<button type=\"button\" class=\"worn-tabs-control svelte-rc9auj\" aria-label=\"Scroll to next tabs\"><span aria-hidden=\"true\">&rsaquo;</span></button>"), Zr = /* @__PURE__ */ ar("<div class=\"worn-tabs-shell svelte-rc9auj\"><!> <div class=\"worn-tabs svelte-rc9auj\" role=\"tablist\" aria-orientation=\"horizontal\"></div> <!></div>"), Qr = {
	hash: "svelte-rc9auj",
	code: ".worn-tabs-shell.svelte-rc9auj {display:flex;max-inline-size:100%;min-inline-size:0;margin-block-end:16px;}.worn-tabs.svelte-rc9auj {display:flex;flex:1 1 auto;max-inline-size:100%;min-inline-size:0;gap:0;border-block-end:2px solid var(--worn-border);overflow-x:auto;overscroll-behavior-inline:contain;scroll-padding-inline:8px;-webkit-overflow-scrolling:touch;scrollbar-width:none;}.worn-tabs.svelte-rc9auj::-webkit-scrollbar {display:none;}.worn-tabs-control.svelte-rc9auj {flex:0 0 44px;inline-size:44px;min-block-size:44px;padding:0;border:0;border-block-end:2px solid var(--worn-border);font-family:var(--font-typewriter);font-size:28px;line-height:1;background:var(--worn-surface, transparent);color:var(--worn-link);cursor:pointer;touch-action:manipulation;transition:color 0.12s ease, background-color 0.12s ease;}.worn-tabs-control.svelte-rc9auj:disabled {color:var(--worn-text-muted);cursor:default;opacity:0.55;}.worn-tabs-control.svelte-rc9auj:focus-visible {position:relative;}.worn-tabs-control.svelte-rc9auj:focus-visible,\n	.worn-tab.svelte-rc9auj:focus-visible {outline:2px dashed var(--worn-tabs-focus, currentColor);outline-offset:-2px;}.worn-tab.svelte-rc9auj {box-sizing:border-box;display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;max-inline-size:24ch;min-inline-size:0;min-block-size:44px;padding:8px 16px;border:0;border-block-end:2px solid transparent;margin-block-end:-2px;font-family:var(--font-typewriter);font-size:13px;font-weight:560;white-space:nowrap;background:transparent;color:var(--worn-text-muted);cursor:pointer;touch-action:manipulation;transition:color 0.12s ease, border-color 0.12s ease;}.worn-tab-label.svelte-rc9auj {min-inline-size:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.worn-tab[aria-selected='true'].svelte-rc9auj {color:var(--worn-link);border-block-end-color:var(--worn-accent);}\n\n	@media (hover: hover) and (pointer: fine) {.worn-tabs-control.svelte-rc9auj:hover:not(:disabled) {color:var(--worn-text);}.worn-tab.svelte-rc9auj:hover {color:var(--worn-text);}\n	}\n\n	@media (prefers-reduced-motion: reduce) {.worn-tab.svelte-rc9auj,\n		.worn-tabs-control.svelte-rc9auj {transition:none;}\n	}"
};
function $r(e, t) {
	Ve(t, !0), Dr(e, Qr);
	let n = Lr(t, "active", 15, ""), r = Lr(t, "label", 3, "Sections"), i, a, o = /* @__PURE__ */ I(!1), s = /* @__PURE__ */ I(!1), c = /* @__PURE__ */ I(!1), l, u;
	cn(() => {
		t.tabs.length && !t.tabs.some((e) => e.id === n()) && n(t.tabs[0].id);
	}), cn(() => {
		let e = n(), r = t.tabs.map((e) => `${e.id}\u0000${e.label}`).join(""), i = requestAnimationFrame(() => {
			d(), e && r && _();
		});
		return () => cancelAnimationFrame(i);
	}), cn(() => {
		if (!i || !a) return;
		let e = new ResizeObserver(f);
		return e.observe(i), f(), () => {
			e.disconnect(), l !== void 0 && cancelAnimationFrame(l);
		};
	}), cn(() => () => {
		u !== void 0 && cancelAnimationFrame(u);
	});
	function d() {
		if (!i || !a) return;
		let e = a.scrollWidth > i.clientWidth + 1, t = e !== $(o);
		L(o, e);
		let n = Math.max(0, a.scrollWidth - a.clientWidth);
		L(s, $(o) && a.scrollLeft > 1, !0), L(c, $(o) && a.scrollLeft < n - 1, !0), t && p();
	}
	function f() {
		l !== void 0 && cancelAnimationFrame(l), l = requestAnimationFrame(() => {
			l = void 0, d();
		});
	}
	function p() {
		u !== void 0 && cancelAnimationFrame(u), u = requestAnimationFrame(() => {
			u = void 0, _();
		});
	}
	function m(e, t) {
		if (!(e.currentTarget instanceof HTMLButtonElement) || !e.currentTarget.disabled) return;
		let n = i?.querySelector(`.worn-tabs-control[aria-label="${t}"]`);
		queueMicrotask(() => {
			if (!n?.isConnected || n.disabled) throw Error("Tabs overflow focus target is unavailable");
			n.focus();
		});
	}
	function h(e) {
		if (!a) return;
		let t = qr({
			scrollLeft: a.scrollLeft,
			clientWidth: a.clientWidth,
			scrollWidth: a.scrollWidth,
			direction: e
		});
		Math.abs(t - a.scrollLeft) <= .5 || a.scrollTo({
			left: t,
			behavior: g() ? "auto" : "smooth"
		});
	}
	function g() {
		return typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	}
	function _() {
		if (!a) return;
		let e = a.querySelector("[role=\"tab\"][aria-selected=\"true\"]");
		if (!e) return;
		let t = a.getBoundingClientRect(), n = e.getBoundingClientRect(), r = Kr({
			scrollLeft: a.scrollLeft,
			clientWidth: a.clientWidth,
			scrollWidth: a.scrollWidth,
			itemLeft: n.left - t.left,
			itemRight: n.right - t.left
		});
		Math.abs(r - a.scrollLeft) > .5 && a.scrollTo({
			left: r,
			behavior: "auto"
		});
	}
	function v(e) {
		if (!t.id) return {
			tabId: e.tabId,
			panelId: e.panelId
		};
		let n = Gr(t.id, e.id);
		return {
			tabId: e.tabId || n.tabId,
			panelId: e.panelId || n.panelId
		};
	}
	function y(e) {
		n(e), t.onchange?.(e);
	}
	function b(e, n) {
		let r = -1;
		if (e.key === "ArrowRight" ? r = (n + 1) % t.tabs.length : e.key === "ArrowLeft" ? r = (n - 1 + t.tabs.length) % t.tabs.length : e.key === "Home" ? r = 0 : e.key === "End" && (r = t.tabs.length - 1), r < 0) return;
		e.preventDefault(), y(t.tabs[r].id);
		let i = e.currentTarget.parentElement?.children.item(r);
		i instanceof HTMLElement && i.focus();
	}
	var x = Zr(), S = Zt(x), ee = (e) => {
		var t = Jr();
		hn(() => t.disabled = !$(s)), Zn("click", t, () => h(-1)), Zn("focusout", t, (e) => m(e, "Scroll to next tabs")), or(e, t);
	};
	_r(S, (e) => {
		$(o) && e(ee);
	});
	var C = Qt(S, 2);
	xr(C, 23, () => t.tabs, (e) => e.id, (e, t, r) => {
		let i = /* @__PURE__ */ ft(() => v($(t)));
		var a = Yr(), o = Zt(a), s = Zt(o, !0);
		Ne(o), Ne(a), hn(() => {
			jr(a, "id", $(i).tabId), jr(a, "aria-controls", $(i).panelId), jr(a, "aria-selected", $(t).id === n()), jr(a, "tabindex", $(t).id === n() ? 0 : -1), lr(s, $(t).label);
		}), Zn("click", a, () => y($(t).id)), Zn("keydown", a, (e) => b(e, $(r))), or(e, a);
	}), Ne(C), Ir(C, (e) => a = e, () => a);
	var te = Qt(C, 2), w = (e) => {
		var t = Xr();
		hn(() => t.disabled = !$(c)), Zn("click", t, () => h(1)), Zn("focusout", t, (e) => m(e, "Scroll to previous tabs")), or(e, t);
	};
	_r(te, (e) => {
		$(o) && e(w);
	}), Ne(x), Ir(x, (e) => i = e, () => i), hn(() => jr(C, "aria-label", r())), Xn("scroll", C, d), or(e, x), He();
}
Qn([
	"click",
	"focusout",
	"keydown"
]);
//#endregion
//#region src/TabsElement.svelte
function ei(e, t) {
	Ve(t, !0);
	let n = Lr(t, "active", 15, ""), r = Lr(t, "tabs", 23, () => []), i = Lr(t, "controlId", 7), a = Lr(t, "label", 7, "Sections"), o = t.$$host;
	function s(e) {
		n(e), o.dispatchEvent(new CustomEvent("change", {
			detail: { id: e },
			bubbles: !0
		}));
	}
	return $r(e, {
		get tabs() {
			return r();
		},
		get id() {
			return i();
		},
		get label() {
			return a();
		},
		onchange: s,
		get active() {
			return n();
		},
		set active(e) {
			n(e);
		}
	}), He({
		get active() {
			return n();
		},
		set active(e = "") {
			n(e), kt();
		},
		get tabs() {
			return r();
		},
		set tabs(e = []) {
			r(e), kt();
		},
		get controlId() {
			return i();
		},
		set controlId(e) {
			i(e), kt();
		},
		get label() {
			return a();
		},
		set label(e = "Sections") {
			a(e), kt();
		}
	});
}
customElements.define("worn-tabs", Ur(ei, {
	active: {},
	tabs: {},
	controlId: { attribute: "control-id" },
	label: {}
}, [], []));
//#endregion
export { ei as default };
