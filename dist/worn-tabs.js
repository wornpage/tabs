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
var v = 1024, y = 2048, b = 4096, x = 8192, S = 16384, ee = 32768, C = 1 << 25, te = 65536, ne = 1 << 19, re = 1 << 20, ie = 1 << 25, ae = 65536, oe = 1 << 21, se = 1 << 22, ce = 1 << 23, le = Symbol("$state"), ue = Symbol("legacy props"), de = Symbol(""), fe = Symbol("attributes"), pe = Symbol("class"), me = Symbol("style"), he = Symbol("text"), ge = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), _e = !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml");
//#endregion
//#region node_modules/svelte/src/internal/client/errors.js
function ve() {
	throw Error("https://svelte.dev/e/async_derived_orphan");
}
function ye(e, t, n) {
	throw Error("https://svelte.dev/e/each_key_duplicate");
}
function be(e) {
	throw Error("https://svelte.dev/e/effect_in_teardown");
}
function xe() {
	throw Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Se(e) {
	throw Error("https://svelte.dev/e/effect_orphan");
}
function Ce() {
	throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function we() {
	throw Error("https://svelte.dev/e/hydration_failed");
}
function Te(e) {
	throw Error("https://svelte.dev/e/props_invalid_value");
}
function Ee() {
	throw Error("https://svelte.dev/e/state_descriptors_fixed");
}
function De() {
	throw Error("https://svelte.dev/e/state_prototype_fixed");
}
function Oe() {
	throw Error("https://svelte.dev/e/state_unsafe_mutation");
}
function ke() {
	throw Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Ae() {
	console.warn("https://svelte.dev/e/derived_inert");
}
function je(e) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Me() {
	console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/hydration.js
var w = !1;
function T(e) {
	w = e;
}
var E;
function D(t) {
	if (t === null) throw je(), e;
	return E = t;
}
function Ne() {
	return D(/* @__PURE__ */ R(E));
}
function Pe(t) {
	if (w) {
		if (/* @__PURE__ */ R(E) !== null) throw je(), e;
		E = t;
	}
}
function Fe(e = 1) {
	if (w) {
		for (var t = e, n = E; t--;) n = /* @__PURE__ */ R(n);
		E = n;
	}
}
function Ie(e = !0) {
	for (var t = 0, n = E;;) {
		if (n.nodeType === 8) {
			var r = n.data;
			if (r === "]") {
				if (t === 0) return n;
				--t;
			} else (r === "[" || r === "[!" || r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
		}
		var i = /* @__PURE__ */ R(n);
		e && n.remove(), n = i;
	}
}
function Le(t) {
	if (!t || t.nodeType !== 8) throw je(), e;
	return t.data;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/equality.js
function Re(e) {
	return e === this.v;
}
function ze(e, t) {
	return e == e ? e !== t || typeof e == "object" && !!e || typeof e == "function" : t == t;
}
function Be(e) {
	return !ze(e, this.v);
}
//#endregion
//#region node_modules/svelte/src/internal/client/context.js
var O = null;
function Ve(e) {
	O = e;
}
function He(e, t = !1, n) {
	O = {
		p: O,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		r: K,
		l: null
	};
}
function Ue(e) {
	var t = O, n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) ln(r);
	}
	return e !== void 0 && (t.x = e), t.i = !0, O = t.p, e ?? {};
}
function We() {
	return !0;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/task.js
var Ge = [];
function Ke() {
	var e = Ge;
	Ge = [], g(e);
}
function k(e) {
	if (Ge.length === 0 && !Ct) {
		var t = Ge;
		queueMicrotask(() => {
			t === Ge && Ke();
		});
	}
	Ge.push(e);
}
function qe() {
	for (; Ge.length > 0;) Ke();
}
function Je(e) {
	var t = K;
	if (t === null) return U.f |= ce, e;
	if (!(t.f & 32768) && !(t.f & 4)) throw e;
	A(e, t);
}
function A(e, t) {
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
var Ye = ~(y | b | v);
function j(e, t) {
	e.f = e.f & Ye | t;
}
function Xe(e) {
	e.f & 512 || e.deps === null ? j(e, v) : j(e, b);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/utils.js
function Ze(e) {
	if (e !== null) for (let t of e) !(t.f & 2) || !(t.f & 65536) || (t.f ^= ae, Ze(t.deps));
}
function Qe(e, t, n) {
	e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), Ze(e.deps), j(e, v);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/store.js
var $e = !1;
function et(e) {
	var t = $e;
	try {
		return $e = !1, [e(), $e];
	} finally {
		$e = t;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
function tt(e) {
	var t = U, n = K;
	G(null), q(null);
	try {
		return e();
	} finally {
		G(t), q(n);
	}
}
//#endregion
//#region node_modules/svelte/src/reactivity/create-subscriber.js
function nt(e) {
	let t = 0, n = F(0), r;
	return () => {
		on() && (Q(n), mn(() => (t === 0 && (r = Gn(() => e(() => Ht(n)))), t += 1, () => {
			k(() => {
				--t, t === 0 && (r?.(), r = void 0, Ht(n));
			});
		})));
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/boundary.js
var rt = te | ne;
function it(e, t, n, r) {
	new at(e, t, n, r);
}
var at = class {
	parent;
	is_pending = !1;
	transform_error;
	#e;
	#t = w ? E : null;
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
	#h = nt(() => (this.#m = F(this.#l), () => {
		this.#m = null;
	}));
	constructor(e, t, n, r) {
		this.#e = e, this.#n = t, this.#r = (e) => {
			var t = K;
			t.b = this, t.f |= 128, n(e);
		}, this.parent = K.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#i = gn(() => {
			if (w) {
				let e = this.#t;
				Ne();
				let t = e.data === "[!";
				if (e.data.startsWith("[?")) {
					let t = JSON.parse(e.data.slice(2));
					this.#_(t);
				} else t ? this.#y() : this.#g();
			} else this.#b();
		}, rt), w && (this.#e = E);
	}
	#g() {
		try {
			this.#a = B(() => this.#r(this.#e));
		} catch (e) {
			this.error(e);
		}
	}
	#_(e) {
		let t = this.#n.failed, { reset: n, invoke_onerror: r } = this.#v(e);
		k(r), t && (this.#s = B(() => {
			t(this.#e, () => e, () => n);
		}));
	}
	#v(e) {
		var t = !1, n = !1;
		let r = () => {
			if (t) {
				Me();
				return;
			}
			t = !0, n && ke(), this.#s !== null && Sn(this.#s, () => {
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
					A(e, this.#i && this.#i.parent);
				}
			}
		};
	}
	#y() {
		let e = this.#n.pending;
		e && (this.is_pending = !0, this.#o = B(() => e(this.#e)), k(() => {
			var e = this.#c = document.createDocumentFragment(), t = Xt();
			e.append(t), this.#a = this.#S(() => B(() => this.#r(t))), this.#u === 0 && (this.#e.before(e), this.#c = null, Sn(this.#o, () => {
				this.#o = null;
			}), this.#x(M));
		}));
	}
	#b() {
		try {
			if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#l = 0, this.#a = B(() => {
				this.#r(this.#e);
			}), this.#u > 0) {
				var e = this.#c = document.createDocumentFragment();
				En(this.#a, e);
				let t = this.#n.pending;
				this.#o = B(() => t(this.#e));
			} else this.#x(M);
		} catch (e) {
			this.error(e);
		}
	}
	#x(e) {
		this.is_pending = !1, e.transfer_effects(this.#f, this.#p);
	}
	defer_effect(e) {
		Qe(e, this.#f, this.#p);
	}
	is_rendered() {
		return !this.is_pending && (!this.parent || this.parent.is_rendered());
	}
	has_pending_snippet() {
		return !!this.#n.pending;
	}
	#S(e) {
		var t = K, n = U, r = O;
		q(this.#i), G(this.#i), Ve(this.#i.ctx);
		try {
			return kt.ensure(), e();
		} catch (e) {
			return Je(e), null;
		} finally {
			q(t), G(n), Ve(r);
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
		this.#C(e, t), this.#l += e, !(!this.#m || this.#d) && (this.#d = !0, k(() => {
			this.#d = !1, this.#m && Bt(this.#m, this.#l);
		}));
	}
	get_effect_pending() {
		return this.#h(), Q(this.#m);
	}
	error(e) {
		if (!this.#n.onerror && !this.#n.failed) throw e;
		M?.is_fork ? (this.#a && M.skip_effect(this.#a), this.#o && M.skip_effect(this.#o), this.#s && M.skip_effect(this.#s), M.oncommit(() => {
			this.#w(e);
		})) : this.#w(e);
	}
	#w(e) {
		this.#a &&= (V(this.#a), null), this.#o &&= (V(this.#o), null), this.#s &&= (V(this.#s), null), w && (D(this.#t), Fe(), D(Ie()));
		let t = this.#n.failed, n = (e) => {
			let { reset: n, invoke_onerror: r } = this.#v(e);
			r(), t && (this.#s = this.#S(() => {
				try {
					return B(() => {
						var r = K;
						r.b = this, r.f |= 128, t(this.#e, () => e, () => n);
					});
				} catch (e) {
					return A(e, this.#i.parent), null;
				}
			}));
		};
		k(() => {
			var t;
			try {
				t = this.transform_error(e);
			} catch (e) {
				A(e, this.#i && this.#i.parent);
				return;
			}
			typeof t == "object" && t && typeof t.then == "function" ? t.then(n, (e) => A(e, this.#i && this.#i.parent)) : n(t);
		});
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/async.js
function ot(e, t, n, r) {
	let i = We() ? ut : mt;
	var a = e.filter((e) => !e.settled), o = t.map(i);
	if (n.length === 0 && a.length === 0) {
		r(o);
		return;
	}
	var s = K, c = st(), l = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
	function u(e) {
		if (!(s.f & 16384)) {
			c();
			try {
				r([...o, ...e]);
			} catch (e) {
				A(e, s);
			}
			ct();
		}
	}
	var d = lt();
	if (n.length === 0) {
		l.then(() => u([])).finally(d);
		return;
	}
	function f() {
		Promise.all(n.map((e) => /* @__PURE__ */ ft(e))).then(u).catch((e) => A(e, s)).finally(d);
	}
	l ? l.then(() => {
		c(), f(), ct();
	}) : f();
}
function st() {
	var e = K, t = U, n = O, r = M;
	return function(i = !0) {
		q(e), G(t), Ve(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function ct(e = !0) {
	q(null), G(null), Ve(null), e && M?.deactivate();
}
function lt() {
	var e = K, t = e.b, n = M, r = !!t?.is_rendered();
	return t?.update_pending_count(1, n), n.increment(r, e), () => {
		t?.update_pending_count(-1, n), n.decrement(r, e);
	};
}
/*#__NO_SIDE_EFFECTS__*/
function ut(e) {
	var n = 2 | y;
	return K !== null && (K.f |= ne), {
		ctx: O,
		deps: null,
		effects: null,
		equals: Re,
		f: n,
		fn: e,
		reactions: null,
		rv: 0,
		v: t,
		wv: 0,
		parent: K,
		ac: null
	};
}
var dt = Symbol("obsolete");
/*#__NO_SIDE_EFFECTS__*/
function ft(e, n, r) {
	let i = K;
	i === null && ve();
	var a = void 0, o = F(t), s = !U, c = /* @__PURE__ */ new Set();
	return pn(() => {
		var t = K, n = _();
		a = n.promise;
		try {
			Promise.resolve(e()).then(n.resolve, (e) => {
				e !== ge && n.reject(e);
			}).finally(ct);
		} catch (e) {
			n.reject(e), ct();
		}
		var r = M;
		if (s) {
			if (t.f & 32768) var l = lt();
			if (i.b?.is_rendered()) r.async_deriveds.get(t)?.reject(dt);
			else for (let e of c.values()) e.reject(dt);
			c.add(n), r.async_deriveds.set(t, n);
		}
		let u = (e, t = void 0) => {
			l?.(), c.delete(n), t !== dt && (r.activate(), t ? (o.f |= ce, Bt(o, t)) : (o.f & 8388608 && (o.f ^= ce), Bt(o, e)), r.deactivate());
		};
		n.promise.then(u, (e) => u(null, e || "unknown"));
	}), sn(() => {
		for (let e of c) e.reject(dt);
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
function pt(e) {
	let t = /* @__PURE__ */ ut(e);
	return An(t), t;
}
/*#__NO_SIDE_EFFECTS__*/
function mt(e) {
	let t = /* @__PURE__ */ ut(e);
	return t.equals = Be, t;
}
function ht(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) V(t[n]);
	}
}
function gt(e) {
	var n, r = K, i = e.parent;
	if (!H && i !== null && e.v !== t && i.f & 24576) return Ae(), e.v;
	q(i);
	try {
		e.f &= ~ae, ht(e), n = zn(e);
	} finally {
		q(r);
	}
	return n;
}
function _t(e) {
	var t = gt(e);
	if (!e.equals(t) && (e.wv = In(), (!M?.is_fork || e.deps === null) && (M === null ? e.v = t : (M.capture(e, t, !0), xt?.capture(e, t, !0)), e.deps === null))) {
		j(e, v);
		return;
	}
	H || (N === null ? Xe(e) : (on() || M?.is_fork) && N.set(e, t));
}
function vt(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac !== null && tt(() => {
		t.ac.abort(ge), t.ac = null;
	}), t.fn !== null && (t.teardown = h), Vn(t, 0), vn(t));
}
function yt(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && t.fn !== null && Hn(t);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/batch.js
var bt = null, M = null, xt = null, N = null, St = null, Ct = !1, wt = !1, Tt = null, Et = null, Dt = 0, Ot = 1, kt = class e {
	id = Ot++;
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
		bt === null ? bt = this : (bt.#n = this, this.#t = bt), bt = this;
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
			for (var r of n.d) j(r, y), t(r);
			for (r of n.m) j(r, b), t(r);
		}
		this.#p.add(e);
	}
	#g() {
		this.#e = !0, Dt++ > 1e3 && (this.#x(), jt());
		for (let e of this.#u) this.#d.delete(e), j(e, y), this.schedule(e);
		for (let e of this.#d) j(e, b), this.schedule(e);
		let t = this.#c;
		this.#c = [], this.apply();
		var n = Tt = [], r = [], i = Et = [];
		for (let e of t) try {
			this.#_(e, n, r);
		} catch (t) {
			throw Ft(e), this.#h() || this.discard(), t;
		}
		if (M = null, i.length > 0) {
			var a = e.ensure();
			for (let e of i) a.schedule(e);
		}
		if (Tt = null, Et = null, this.#h()) {
			this.#b(r), this.#b(n);
			for (let [e, t] of this.#f) Pt(e, t);
			i.length > 0 && M.#g();
			return;
		}
		let o = this.#v();
		if (o) {
			this.#b(r), this.#b(n), o.#y(this);
			return;
		}
		this.#u.clear(), this.#d.clear();
		for (let e of this.#r) e(this);
		this.#r.clear(), xt = this, Mt(r), Mt(n), xt = null, this.#s?.resolve();
		var s = M;
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
					r & 4194320 && !this.async_deriveds.has(i) && (this.#d.delete(i), j(i, y), this.schedule(i));
				}
			}
		};
		for (let e of this.current.keys()) t(e);
		this.oncommit(() => e.discard()), e.#x(), M = this, this.#g();
	}
	#b(e) {
		for (var t = 0; t < e.length; t += 1) Qe(e[t], this.#u, this.#d);
	}
	capture(e, n, r = !1) {
		e.v !== t && !this.previous.has(e) && this.previous.set(e, e.v), e.f & 8388608 || (this.current.set(e, [n, r]), N?.set(e, n)), this.is_fork || (e.v = n);
	}
	activate() {
		M = this;
	}
	deactivate() {
		M = null, N = null;
	}
	flush() {
		try {
			wt = !0, M = this, this.#g();
		} finally {
			Dt = 0, St = null, Tt = null, Et = null, wt = !1, M = null, N = null, Lt.clear();
		}
	}
	discard() {
		for (let e of this.#i) e(this);
		this.#i.clear();
		for (let e of this.async_deriveds.values()) e.reject(dt);
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
		this.#m || (this.#m = !0, k(() => {
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
		if (M === null) {
			let t = M = new e();
			!wt && !Ct && k(() => {
				t.#e || t.flush();
			});
		}
		return M;
	}
	apply() {
		N = null;
	}
	schedule(e) {
		if (St = e, e.b?.is_pending && e.f & 16777228 && !(e.f & 32768)) {
			e.b.defer_effect(e);
			return;
		}
		for (var t = e; t.parent !== null;) {
			t = t.parent;
			var n = t.f;
			if (Tt !== null && t === K && (U === null || !(U.f & 2))) return;
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
			e === null || (e.#n = t), t === null ? bt = e : t.#t = e, this.linked = !1;
		}
	}
};
function At(e) {
	var t = Ct;
	Ct = !0;
	try {
		var n;
		for (e && (M !== null && !M.is_fork && M.flush(), n = e());;) {
			if (qe(), M === null) return n;
			M.flush();
		}
	} finally {
		Ct = t;
	}
}
function jt() {
	try {
		Ce();
	} catch (e) {
		A(e, St);
	}
}
var P = null;
function Mt(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (!(r.f & 24576) && Ln(r) && (P = /* @__PURE__ */ new Set(), Hn(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && xn(r), P?.size > 0)) {
				Lt.clear();
				for (let e of P) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) P.has(n) && (P.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || Hn(n);
					}
				}
				P.clear();
			}
		}
		P = null;
	}
}
function Nt(e) {
	M.schedule(e);
}
function Pt(e, t) {
	if (!(e.f & 32 && e.f & 1024)) {
		e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), j(e, v);
		for (var n = e.first; n !== null;) Pt(n, t), n = n.next;
	}
}
function Ft(e) {
	j(e, v);
	for (var t = e.first; t !== null;) Ft(t), t = t.next;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/sources.js
var It = /* @__PURE__ */ new Set(), Lt = /* @__PURE__ */ new Map(), Rt = !1;
function F(e, t) {
	return {
		f: 0,
		v: e,
		reactions: null,
		equals: Re,
		rv: 0,
		wv: 0
	};
}
/*#__NO_SIDE_EFFECTS__*/
function I(e, t) {
	let n = F(e, t);
	return An(n), n;
}
/*#__NO_SIDE_EFFECTS__*/
function zt(e, t = !1, n = !0) {
	let r = F(e);
	return t || (r.equals = Be), r;
}
function L(e, t, n = !1) {
	return U !== null && (!W || U.f & 131072) && We() && U.f & 4325394 && (J === null || !J.has(e)) && Oe(), Bt(e, n ? Wt(t) : t, Et);
}
function Bt(e, t, n = null) {
	if (!e.equals(t)) {
		Lt.set(e, H ? t : e.v);
		var r = kt.ensure();
		if (r.capture(e, t), e.f & 2) {
			let t = e;
			e.f & 2048 && gt(t), N === null && Xe(t);
		}
		e.wv = In(), Ut(e, y, n), We() && K !== null && K.f & 1024 && !(K.f & 96) && (Z === null ? jn([e]) : Z.push(e)), !r.is_fork && It.size > 0 && !Rt && Vt();
	}
	return t;
}
function Vt() {
	Rt = !1;
	for (let e of It) {
		e.f & 1024 && j(e, b);
		let t;
		try {
			t = Ln(e);
		} catch {
			t = !0;
		}
		t && Hn(e);
	}
	It.clear();
}
function Ht(e) {
	L(e, e.v + 1);
}
function Ut(e, t, n) {
	var r = e.reactions;
	if (r !== null) for (var i = We(), a = r.length, o = 0; o < a; o++) {
		var s = r[o], c = s.f;
		if (!(!i && s === K)) {
			var l = (c & y) === 0;
			if (l && j(s, t), c & 131072) It.add(s);
			else if (c & 2) {
				var u = s;
				N?.delete(u), c & 65536 || (c & 512 && (K === null || !(K.f & 2097152)) && (s.f |= ae), Ut(u, b, n));
			} else if (l) {
				var d = s;
				c & 16 && P !== null && P.add(d), n === null ? Nt(d) : n.push(d);
			}
		}
	}
}
function Wt(e) {
	if (typeof e != "object" || !e || le in e) return e;
	let n = p(e);
	if (n !== d && n !== f) return e;
	var i = /* @__PURE__ */ new Map(), a = r(e), o = /* @__PURE__ */ I(0), s = null, c = Pn, u = (e) => {
		if (Pn === c) return e();
		var t = U, n = Pn;
		G(null), Fn(c);
		var r = e();
		return G(t), Fn(n), r;
	};
	return a && i.set("length", /* @__PURE__ */ I(e.length, s)), new Proxy(e, {
		defineProperty(e, t, n) {
			(!("value" in n) || n.configurable === !1 || n.enumerable === !1 || n.writable === !1) && Ee();
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
			if (r === le) return e;
			var o = i.get(r), c = r in n;
			if (o === void 0 && (!c || l(n, r)?.writable) && (o = u(() => /* @__PURE__ */ I(Wt(c ? n[r] : t), s)), i.set(r, o)), o !== void 0) {
				var d = Q(o);
				return d === t ? void 0 : d;
			}
			return Reflect.get(n, r, a);
		},
		getOwnPropertyDescriptor(e, n) {
			var r = Reflect.getOwnPropertyDescriptor(e, n);
			if (r && "value" in r) {
				var a = i.get(n);
				a && (r.value = Q(a));
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
			if (n === le) return !0;
			var r = i.get(n), a = r !== void 0 && r.v !== t || Reflect.has(e, n);
			return (r !== void 0 || K !== null && (!a || l(e, n)?.writable)) && (r === void 0 && (r = u(() => /* @__PURE__ */ I(a ? Wt(e[n]) : t, s)), i.set(n, r)), Q(r) === t) ? !1 : a;
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
			Q(o);
			var n = Reflect.ownKeys(e).filter((e) => {
				var n = i.get(e);
				return n === void 0 || n.v !== t;
			});
			for (var [r, a] of i) a.v !== t && !(r in e) && n.push(r);
			return n;
		},
		setPrototypeOf() {
			De();
		}
	});
}
var Gt, Kt, qt, Jt;
function Yt() {
	if (Gt === void 0) {
		Gt = window, Kt = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, t = Node.prototype, n = Text.prototype;
		qt = l(t, "firstChild").get, Jt = l(t, "nextSibling").get, m(e) && (e[pe] = void 0, e[fe] = null, e[me] = void 0, e.__e = void 0), m(n) && (n[he] = void 0);
	}
}
function Xt(e = "") {
	return document.createTextNode(e);
}
/*@__NO_SIDE_EFFECTS__*/
function Zt(e) {
	return qt.call(e);
}
/*@__NO_SIDE_EFFECTS__*/
function R(e) {
	return Jt.call(e);
}
function Qt(e, t) {
	if (!w) return /* @__PURE__ */ Zt(e);
	var n = /* @__PURE__ */ Zt(E);
	if (n === null) n = E.appendChild(Xt());
	else if (t && n.nodeType !== 3) {
		var r = Xt();
		return n?.before(r), D(r), r;
	}
	return t && nn(n), D(n), n;
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
	K === null && (U === null && Se(e), xe()), H && be(e);
}
function an(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function z(e, t) {
	var n = K;
	n !== null && n.f & 8192 && (e |= x);
	var r = {
		ctx: O,
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
	M?.register_created_effect(r);
	var i = r;
	if (e & 4) Tt === null ? kt.ensure().schedule(r) : Tt.push(r);
	else if (t !== null) {
		try {
			Hn(r);
		} catch (e) {
			throw V(r), e;
		}
		i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= te));
	}
	if (i !== null && (i.parent = n, n !== null && an(i, n), U !== null && U.f & 2 && !(e & 64))) {
		var a = U;
		(a.effects ??= []).push(i);
	}
	return r;
}
function on() {
	return U !== null && !W;
}
function sn(e) {
	let t = z(8, null);
	return j(t, v), t.teardown = e, t;
}
function cn(e) {
	rn("$effect");
	var t = K.f;
	if (!U && t & 32 && O !== null && !O.i) {
		var n = O;
		(n.e ??= []).push(e);
	} else return ln(e);
}
function ln(e) {
	return z(4 | re, e);
}
function un(e) {
	kt.ensure();
	let t = z(64 | ne, e);
	return () => {
		V(t);
	};
}
function dn(e) {
	kt.ensure();
	let t = z(64 | ne, e);
	return (e = {}) => new Promise((n) => {
		e.outro ? Sn(t, () => {
			V(t), n(void 0);
		}) : (V(t), n(void 0));
	});
}
function fn(e) {
	return z(4, e);
}
function pn(e) {
	return z(se | ne, e);
}
function mn(e, t = 0) {
	return z(8 | t, e);
}
function hn(e, t = [], n = [], r = []) {
	ot(r, t, n, (t) => {
		z(8, () => {
			e(...t.map(Q));
		});
	});
}
function gn(e, t = 0) {
	return z(16 | t, e);
}
function B(e) {
	return z(32 | ne, e);
}
function _n(e) {
	var t = e.teardown;
	if (t !== null) {
		let e = H, n = U;
		kn(!0), G(null);
		try {
			t.call(null);
		} finally {
			kn(e), G(n);
		}
	}
}
function vn(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null;) {
		let e = n.ac;
		e !== null && tt(() => {
			e.abort(ge);
		});
		var r = n.next;
		n.f & 64 ? n.parent = null : V(n, t), n = r;
	}
}
function yn(e) {
	for (var t = e.first; t !== null;) {
		var n = t.next;
		t.f & 32 || V(t), t = n;
	}
}
function V(e, t = !0) {
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
		var n = e === t ? null : /* @__PURE__ */ R(e);
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
		n && V(e), t && t();
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
		e.f ^= x, e.f & 1024 || (j(e, y), kt.ensure().schedule(e));
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
		var i = n === r ? null : /* @__PURE__ */ R(n);
		t.append(n), n = i;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/legacy.js
var Dn = null, On = !1, H = !1;
function kn(e) {
	H = e;
}
var U = null, W = !1;
function G(e) {
	U = e;
}
var K = null;
function q(e) {
	K = e;
}
var J = null;
function An(e) {
	U !== null && (J ??= /* @__PURE__ */ new Set()).add(e);
}
var Y = null, X = 0, Z = null;
function jn(e) {
	Z = e;
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
	if (t & 2 && (e.f &= ~ae), t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if (Ln(a) && _t(a), a.wv > e.wv) return !0;
		}
		t & 512 && N === null && j(e, v);
	}
	return !1;
}
function Rn(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(J !== null && J.has(e))) for (var i = 0; i < r.length; i++) {
		var a = r[i];
		a.f & 2 ? Rn(a, t, !1) : t === a && (n ? j(a, y) : a.f & 1024 && j(a, b), Nt(a));
	}
}
function zn(e) {
	var t = Y, n = X, r = Z, i = U, a = J, o = O, s = W, c = Pn, l = e.f;
	Y = null, X = 0, Z = null, U = l & 96 ? null : e, J = null, Ve(e.ctx), W = !1, Pn = ++Nn, e.ac !== null && (tt(() => {
		e.ac.abort(ge);
	}), e.ac = null);
	try {
		e.f |= oe;
		var u = e.fn, d = u();
		e.f |= ee;
		var f = e.deps, p = M?.is_fork;
		if (Y !== null) {
			var m;
			if (p || Vn(e, X), f !== null && X > 0) for (f.length = X + Y.length, m = 0; m < Y.length; m++) f[X + m] = Y[m];
			else e.deps = f = Y;
			if (on() && e.f & 512) for (m = X; m < f.length; m++) (f[m].reactions ??= []).push(e);
		} else !p && f !== null && X < f.length && (Vn(e, X), f.length = X);
		if (We() && Z !== null && !W && f !== null && !(e.f & 6146)) for (m = 0; m < Z.length; m++) Rn(Z[m], e);
		if (i !== null && i !== e) {
			if (Nn++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = Nn;
			if (t !== null) for (let e of t) e.rv = Nn;
			Z !== null && (r === null ? r = Z : r.push(...Z));
		}
		return e.f & 8388608 && (e.f ^= ce), d;
	} catch (e) {
		return Je(e);
	} finally {
		e.f ^= oe, Y = t, X = n, Z = r, U = i, J = a, Ve(o), W = s, Pn = c;
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
	if (r === null && n.f & 2 && (Y === null || !a.call(Y, n))) {
		var c = n;
		c.f & 512 && (c.f ^= 512, c.f &= ~ae), c.v !== t && Xe(c), c.ac !== null && tt(() => {
			c.ac.abort(ge), c.ac = null, j(c, y);
		}), vt(c), Vn(c, 0);
	}
}
function Vn(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) Bn(e, n[r]);
}
function Hn(e) {
	var t = e.f;
	if (!(t & 16384)) {
		j(e, v);
		var n = K, r = On;
		K = e, On = !(t & 96);
		try {
			t & 16777232 ? yn(e) : vn(e), _n(e);
			var i = zn(e);
			e.teardown = typeof i == "function" ? i : null, e.wv = Mn;
		} finally {
			On = r, K = n;
		}
	}
}
function Q(e) {
	var t = !!(e.f & 2);
	if (Dn?.add(e), U !== null && !W && !(K !== null && K.f & 16384) && (J === null || !J.has(e))) {
		var n = U.deps;
		if (U.f & 2097152) e.rv < Nn && (e.rv = Nn, Y === null && n !== null && n[X] === e ? X++ : Y === null ? Y = [e] : Y.push(e));
		else {
			U.deps ??= [], a.call(U.deps, e) || U.deps.push(e);
			var r = e.reactions;
			r === null ? e.reactions = [U] : a.call(r, U) || r.push(U);
		}
	}
	if (H && Lt.has(e)) return Lt.get(e);
	if (t) {
		var i = e;
		if (H) {
			var o = i.v;
			return (!(i.f & 1024) && i.reactions !== null || Wn(i)) && (o = gt(i)), Lt.set(i, o), o;
		}
		var s = !(i.f & 512) && !W && U !== null && (On || !!(U.f & 512)), c = (i.f & ee) === 0;
		Ln(i) && (s && (i.f |= 512), _t(i)), s && !c && (yt(i), Un(i));
	}
	if (N?.has(e)) return N.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function Un(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (yt(t), Un(t));
}
function Wn(e) {
	if (e.v === t) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (Lt.has(t) || t.f & 2 && Wn(t)) return !0;
	return !1;
}
function Gn(e) {
	var t = W;
	try {
		return W = !0, e();
	} finally {
		W = t;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/events.js
var Kn = Symbol("events"), qn = /* @__PURE__ */ new Set(), Jn = /* @__PURE__ */ new Set();
function Yn(e, t, n) {
	(t[Kn] ??= {})[e] = n;
}
function Xn(e) {
	for (var t = 0; t < e.length; t++) qn.add(e[t]);
	for (var n of Jn) n(e);
}
var Zn = null;
function Qn(e) {
	var t = this, n = t.ownerDocument, r = e.type, i = e.composedPath?.() || [], a = i[0] || e.target;
	Zn = e;
	var o = 0, s = Zn === e && e[Kn];
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
		var d = U, f = K;
		G(null), q(null);
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
			e[Kn] = t, delete e.currentTarget, G(d), q(f);
		}
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/reconciler.js
var $n = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function er(e) {
	return $n?.createHTML(e) ?? e;
}
function tr(e) {
	var t = tn("template");
	return t.innerHTML = er(e.replaceAll("<!>", "<!---->")), t.content;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/template.js
function nr(e, t) {
	var n = K;
	n.nodes === null && (n.nodes = {
		start: e,
		end: t,
		a: null,
		t: null
	});
}
/*#__NO_SIDE_EFFECTS__*/
function rr(e, t) {
	var n = !!(t & 1), r = !!(t & 2), i, a = !e.startsWith("<!>");
	return () => {
		if (w) return nr(E, null), E;
		i === void 0 && (i = tr(a ? e : "<!>" + e), n || (i = /* @__PURE__ */ Zt(i)));
		var t = r || Kt ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ Zt(t), s = t.lastChild;
			nr(o, s);
		} else nr(t, t);
		return t;
	};
}
function ir(e, t) {
	if (w) {
		var n = K;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = E), Ne();
		return;
	}
	e !== null && e.before(t);
}
[.../* @__PURE__ */ "allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split(".")];
var ar = ["touchstart", "touchmove"];
function or(e) {
	return ar.includes(e);
}
function sr(e, t) {
	var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
	n !== (e[he] ??= e.nodeValue) && (e[he] = n, e.nodeValue = `${n}`);
}
function cr(e, t) {
	return dr(e, t);
}
function lr(t, n) {
	Yt(), n.intro = n.intro ?? !1;
	let r = n.target, i = w, a = E;
	try {
		for (var o = /* @__PURE__ */ Zt(r); o && (o.nodeType !== 8 || o.data !== "[");) o = /* @__PURE__ */ R(o);
		if (!o) throw e;
		T(!0), D(o);
		let i = dr(t, {
			...n,
			anchor: o
		});
		return T(!1), i;
	} catch (i) {
		if (i instanceof Error && i.message.split("\n").some((e) => e.startsWith("https://svelte.dev/e/"))) throw i;
		return i !== e && console.warn("Failed to hydrate: ", i), n.recover === !1 && we(), Yt(), $t(r), T(!1), cr(t, n);
	} finally {
		T(i), D(a);
	}
}
var ur = /* @__PURE__ */ new Map();
function dr(t, { target: n, anchor: r, props: i = {}, events: a, context: s, intro: c = !0, transformError: l }) {
	Yt();
	var u = void 0, d = dn(() => {
		var c = r ?? n.appendChild(Xt());
		it(c, { pending: () => {} }, (n) => {
			He({});
			var r = O;
			if (s && (r.c = s), a && (i.$$events = a), w && nr(n, null), u = t(n, i) || {}, w && (K.nodes.end = E, E === null || E.nodeType !== 8 || E.data !== "]")) throw je(), e;
			Ue();
		}, l);
		var d = /* @__PURE__ */ new Set(), f = (e) => {
			for (var t = 0; t < e.length; t++) {
				var r = e[t];
				if (!d.has(r)) {
					d.add(r);
					var i = or(r);
					for (let e of [n, document]) {
						var a = ur.get(e);
						a === void 0 && (a = /* @__PURE__ */ new Map(), ur.set(e, a));
						var o = a.get(r);
						o === void 0 ? (e.addEventListener(r, Qn, { passive: i }), a.set(r, 1)) : a.set(r, o + 1);
					}
				}
			}
		};
		return f(o(qn)), Jn.add(f), () => {
			for (var e of d) for (let r of [n, document]) {
				var t = ur.get(r), i = t.get(e);
				--i == 0 ? (r.removeEventListener(e, Qn), t.delete(e), t.size === 0 && ur.delete(r)) : t.set(e, i);
			}
			Jn.delete(f), c !== r && c.parentNode?.removeChild(c);
		};
	});
	return fr.set(u, d), u;
}
var fr = /* @__PURE__ */ new WeakMap();
function pr(e, t) {
	let n = fr.get(e);
	return n ? (fr.delete(e), n(t)) : Promise.resolve();
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/each.js
function mr(e, t, n) {
	for (var r = [], i = t.length, a, s = t.length, c = 0; c < i; c++) {
		let n = t[c];
		Sn(n, () => {
			if (a) {
				if (a.pending.delete(n), a.done.add(n), a.pending.size === 0) {
					var t = e.outrogroups;
					hr(e, o(a.done)), t.delete(a), t.size === 0 && (e.outrogroups = null);
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
		hr(e, t, !l);
	} else a = {
		pending: new Set(t),
		done: /* @__PURE__ */ new Set()
	}, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(a);
}
function hr(e, t, n = !0) {
	var r;
	if (e.pending.size > 0) {
		r = /* @__PURE__ */ new Set();
		for (let t of e.pending.values()) for (let n of t) r.add(e.items.get(n).e);
	}
	for (var i = 0; i < t.length; i++) {
		var a = t[i];
		r?.has(a) ? (a.f |= ie, En(a, document.createDocumentFragment())) : V(t[i], n);
	}
}
var gr;
function _r(e, t, n, i, a, s = null) {
	var c = e, l = /* @__PURE__ */ new Map();
	if (t & 4) {
		var u = e;
		c = w ? D(/* @__PURE__ */ Zt(u)) : u.appendChild(Xt());
	}
	w && Ne();
	var d = null, f = /* @__PURE__ */ mt(() => {
		var e = n();
		return r(e) ? e : e == null ? [] : o(e);
	}), p, m = /* @__PURE__ */ new Map(), h = !0;
	function g(e) {
		v.effect.f & 16384 || (v.pending.delete(e), v.fallback = d, yr(v, p, c, t, i), d !== null && (p.length === 0 ? d.f & 33554432 ? (d.f ^= ie, xr(d, null, c)) : wn(d) : Sn(d, () => {
			d = null;
		})));
	}
	function _(e) {
		v.pending.delete(e);
	}
	var v = {
		effect: gn(() => {
			p = Q(f);
			var e = p.length;
			let r = !1;
			w && Le(c) === "[!" != (e === 0) && (c = Ie(), D(c), T(!1), r = !0);
			for (var o = /* @__PURE__ */ new Set(), u = M, v = en(), y = 0; y < e; y += 1) {
				w && E.nodeType === 8 && E.data === "]" && (c = E, r = !0, T(!1));
				var b = p[y], x = i(b, y), S = h ? null : l.get(x);
				S ? (S.v && Bt(S.v, b), S.i && Bt(S.i, y), v && u.unskip_effect(S.e)) : (S = br(l, h ? c : gr ??= Xt(), b, x, y, a, t, n), h || (S.e.f |= ie), l.set(x, S)), o.add(x);
			}
			if (e === 0 && s && !d && (h ? d = B(() => s(c)) : (d = B(() => s(gr ??= Xt())), d.f |= ie)), e > o.size && ye("", "", ""), w && e > 0 && D(Ie()), !h) {
				if (m.set(u, o), v) {
					for (let [e, t] of l) o.has(e) || u.skip_effect(t.e);
					u.oncommit(g), u.ondiscard(_);
				} else g(u);
			}
			r && T(!0), Q(f);
		}),
		flags: t,
		items: l,
		pending: m,
		outrogroups: null,
		fallback: d
	};
	h = !1, w && (c = E);
}
function vr(e) {
	for (; e !== null && !(e.f & 32);) e = e.next;
	return e;
}
function yr(e, t, n, r, i) {
	var a = !!(r & 8), s = t.length, c = e.items, l = vr(e.effect.first), u, d = null, f, p = [], m = [], h, g, _, v;
	if (a) for (v = 0; v < s; v += 1) h = t[v], g = i(h, v), _ = c.get(g).e, _.f & 33554432 || (_.nodes?.a?.measure(), (f ??= /* @__PURE__ */ new Set()).add(_));
	for (v = 0; v < s; v += 1) {
		if (h = t[v], g = i(h, v), _ = c.get(g).e, e.outrogroups !== null) for (let t of e.outrogroups) t.pending.delete(_), t.done.delete(_);
		if (_.f & 8192 && (wn(_), a && (_.nodes?.a?.unfix(), (f ??= /* @__PURE__ */ new Set()).delete(_))), _.f & 33554432) {
			if (_.f ^= ie, _ === l) xr(_, null, n);
			else {
				var y = d ? d.next : l;
				_ === e.effect.last && (e.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), $(e, d, _), $(e, _, y), xr(_, y, n), d = _, p = [], m = [], l = vr(d.next);
				continue;
			}
		}
		if (_ !== l) {
			if (u !== void 0 && u.has(_)) {
				if (p.length < m.length) {
					var b = m[0], x;
					d = b.prev;
					var S = p[0], ee = p[p.length - 1];
					for (x = 0; x < p.length; x += 1) xr(p[x], b, n);
					for (x = 0; x < m.length; x += 1) u.delete(m[x]);
					$(e, S.prev, ee.next), $(e, d, S), $(e, ee, b), l = b, d = ee, --v, p = [], m = [];
				} else u.delete(_), xr(_, l, n), $(e, _.prev, _.next), $(e, _, d === null ? e.effect.first : d.next), $(e, d, _), d = _;
				continue;
			}
			for (p = [], m = []; l !== null && l !== _;) (u ??= /* @__PURE__ */ new Set()).add(l), m.push(l), l = vr(l.next);
			if (l === null) continue;
		}
		_.f & 33554432 || p.push(_), d = _, l = vr(_.next);
	}
	if (e.outrogroups !== null) {
		for (let t of e.outrogroups) t.pending.size === 0 && (hr(e, o(t.done)), e.outrogroups?.delete(t));
		e.outrogroups.size === 0 && (e.outrogroups = null);
	}
	if (l !== null || u !== void 0) {
		var C = [];
		if (u !== void 0) for (_ of u) _.f & 8192 || C.push(_);
		for (; l !== null;) !(l.f & 8192) && l !== e.fallback && C.push(l), l = vr(l.next);
		var te = C.length;
		if (te > 0) {
			var ne = r & 4 && s === 0 ? n : null;
			if (a) {
				for (v = 0; v < te; v += 1) C[v].nodes?.a?.measure();
				for (v = 0; v < te; v += 1) C[v].nodes?.a?.fix();
			}
			mr(e, C, ne);
		}
	}
	a && k(() => {
		if (f !== void 0) for (_ of f) _.nodes?.a?.apply();
	});
}
function br(e, t, n, r, i, a, o, s) {
	var c = o & 1 ? o & 16 ? F(n) : /* @__PURE__ */ zt(n, !1, !1) : null, l = o & 2 ? F(i) : null;
	return {
		v: c,
		i: l,
		e: B(() => (a(t, c ?? n, l ?? i, s), () => {
			e.delete(r);
		}))
	};
}
function xr(e, t, n) {
	if (e.nodes) for (var r = e.nodes.start, i = e.nodes.end, a = t && !(t.f & 33554432) ? t.nodes.start : n; r !== null;) {
		var o = /* @__PURE__ */ R(r);
		if (a.before(r), r === i) return;
		r = o;
	}
}
function $(e, t, n) {
	t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/css.js
function Sr(e, t) {
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
var Cr = Symbol("is custom element"), wr = Symbol("is html"), Tr = _e ? "link" : "LINK";
function Er(e, t, n, r) {
	var i = Dr(e);
	w && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === Tr) || i[t] !== (i[t] = n) && (t === "loading" && (e[de] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && kr(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Dr(e) {
	return e[fe] ??= {
		[Cr]: e.nodeName.includes("-"),
		[wr]: e.namespaceURI === n
	};
}
var Or = /* @__PURE__ */ new Map();
function kr(e) {
	var t = e.getAttribute("is") || e.nodeName, n = Or.get(t);
	if (n) return n;
	Or.set(t, n = []);
	for (var r, i = e, a = Element.prototype; a !== i;) {
		for (var o in r = u(i), r) r[o].set && o !== "innerHTML" && o !== "textContent" && o !== "innerText" && n.push(o);
		i = p(i);
	}
	return n;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/props.js
function Ar(e, t, n, r) {
	var i = !0, a = !!(n & 8), o = !!(n & 16), s = r, c = !0, u = void 0, d = () => o && i ? (u ??= /* @__PURE__ */ ut(r), Q(u)) : (c && (c = !1, s = o ? Gn(r) : r), s);
	let f;
	if (a) {
		var p = le in e || ue in e;
		f = l(e, t)?.set ?? (p && t in e ? (n) => e[t] = n : void 0);
	}
	var m, h = !1;
	a ? [m, h] = et(() => e[t]) : m = e[t], m === void 0 && r !== void 0 && (m = d(), f && (i && Te(t), f(m)));
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
	var v = !1, y = (n & 1 ? ut : mt)(() => (v = !1, g()));
	a && Q(y);
	var b = K;
	return (function(e, t) {
		if (arguments.length > 0) {
			let n = t ? Q(y) : i && a ? Wt(e) : e;
			return L(y, n), v = !0, s !== void 0 && (s = n), e;
		}
		return H && v || b.f & 16384 ? y.v : Q(y);
	});
}
//#endregion
//#region node_modules/svelte/src/legacy/legacy-client.js
function jr(e) {
	return new Mr(e);
}
var Mr = class {
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
				return Q(t.get(r) ?? n(r, Reflect.get(e, r)));
			},
			has(e, r) {
				return r === ue || (Q(t.get(r) ?? n(r, Reflect.get(e, r))), Reflect.has(e, r));
			},
			set(e, r, i) {
				return L(t.get(r) ?? n(r, i), i), Reflect.set(e, r, i);
			}
		});
		this.#t = (e.hydrate ? lr : cr)(e.component, {
			target: e.target,
			anchor: e.anchor,
			props: r,
			context: e.context,
			intro: e.intro ?? !1,
			recover: e.recover,
			transformError: e.transformError
		}), (!e?.props?.$$host || e.sync === !1) && At(), this.#e = r.$$events;
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
			pr(this.#t);
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
}, Nr;
typeof HTMLElement == "function" && (Nr = class extends HTMLElement {
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
					e !== "default" && (n.name = e), ir(t, n);
				};
			}
			let t = {}, n = Fr(this);
			for (let r of this.$$s) r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
			for (let e of this.attributes) {
				let t = this.$$g_p(e.name);
				t in this.$$d || (this.$$d[t] = Pr(t, e.value, this.$$p_d, "toProp"));
			}
			for (let e in this.$$p_d) !(e in this.$$d) && this[e] !== void 0 && (this.$$d[e] = this[e], delete this[e]);
			this.$$c = jr({
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
						let t = Pr(e, this.$$d[e], this.$$p_d, "toAttribute");
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
		this.$$r || (e = this.$$g_p(e), this.$$d[e] = Pr(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
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
function Pr(e, t, n, r) {
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
function Fr(e) {
	let t = {};
	return e.childNodes.forEach((e) => {
		t[e.slot || "default"] = !0;
	}), t;
}
function Ir(e, t, n, r, i, a) {
	let o = class extends Nr {
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
				n = Pr(e, n, t), this.$$d[e] = n;
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
function Lr(e) {
	return e.trim().replace(/[^a-zA-Z0-9_-]+/gu, "-").replace(/^-+|-+$/gu, "") || "tab";
}
function Rr(e, t) {
	let n = Lr(t);
	return {
		tabId: `${e}-tab-${n}`,
		panelId: `${e}-panel-${n}`
	};
}
//#endregion
//#region src/Tabs.svelte
var zr = /* @__PURE__ */ rr("<button type=\"button\" class=\"worn-tab svelte-rc9auj\" role=\"tab\"> </button>"), Br = /* @__PURE__ */ rr("<div class=\"worn-tabs svelte-rc9auj\" role=\"tablist\" aria-orientation=\"horizontal\"></div>"), Vr = {
	hash: "svelte-rc9auj",
	code: ".worn-tabs.svelte-rc9auj {display:flex;max-inline-size:100%;min-inline-size:0;gap:0;border-block-end:2px solid var(--cockpit-border);margin-block-end:16px;overflow-x:auto;overscroll-behavior-inline:contain;scroll-padding-inline:8px;-webkit-overflow-scrolling:touch;scrollbar-width:none;}.worn-tabs.svelte-rc9auj::-webkit-scrollbar {display:none;}.worn-tab.svelte-rc9auj {flex:0 0 auto;min-block-size:44px;padding:8px 16px;border:0;border-block-end:2px solid transparent;margin-block-end:-2px;font-family:var(--font-typewriter);font-size:13px;font-weight:560;white-space:nowrap;background:transparent;color:var(--cockpit-text-muted);cursor:pointer;touch-action:manipulation;transition:color 0.12s ease, border-color 0.12s ease;}.worn-tab.svelte-rc9auj:hover {color:var(--cockpit-text);}.worn-tab[aria-selected='true'].svelte-rc9auj {color:var(--cockpit-link);border-block-end-color:var(--cockpit-accent);}.worn-tab.svelte-rc9auj:focus-visible {outline:2px dashed var(--cockpit-accent);outline-offset:-2px;}\n\n	@media (prefers-reduced-motion: reduce) {.worn-tab.svelte-rc9auj {transition:none;}\n	}"
};
function Hr(e, t) {
	He(t, !0), Sr(e, Vr);
	let n = Ar(t, "active", 15, ""), r = Ar(t, "label", 3, "Sections");
	cn(() => {
		t.tabs.length && !t.tabs.some((e) => e.id === n()) && n(t.tabs[0].id);
	});
	function i(e) {
		if (!t.id) return {
			tabId: e.tabId,
			panelId: e.panelId
		};
		let n = Rr(t.id, e.id);
		return {
			tabId: e.tabId || n.tabId,
			panelId: e.panelId || n.panelId
		};
	}
	function a(e) {
		n(e), t.onchange?.(e);
	}
	function o(e, n) {
		let r = -1;
		if (e.key === "ArrowRight" ? r = (n + 1) % t.tabs.length : e.key === "ArrowLeft" ? r = (n - 1 + t.tabs.length) % t.tabs.length : e.key === "Home" ? r = 0 : e.key === "End" && (r = t.tabs.length - 1), r < 0) return;
		e.preventDefault(), a(t.tabs[r].id);
		let i = e.currentTarget.parentElement?.children.item(r);
		i instanceof HTMLElement && i.focus();
	}
	var s = Br();
	_r(s, 23, () => t.tabs, (e) => e.id, (e, t, r) => {
		let s = /* @__PURE__ */ pt(() => i(Q(t)));
		var c = zr(), l = Qt(c, !0);
		Pe(c), hn(() => {
			Er(c, "id", Q(s).tabId), Er(c, "aria-controls", Q(s).panelId), Er(c, "aria-selected", Q(t).id === n()), Er(c, "tabindex", Q(t).id === n() ? 0 : -1), sr(l, Q(t).label);
		}), Yn("click", c, () => a(Q(t).id)), Yn("keydown", c, (e) => o(e, Q(r))), ir(e, c);
	}), Pe(s), hn(() => Er(s, "aria-label", r())), ir(e, s), Ue();
}
Xn(["click", "keydown"]);
//#endregion
//#region src/TabsElement.svelte
function Ur(e, t) {
	He(t, !0);
	let n = Ar(t, "active", 15, ""), r = Ar(t, "tabs", 23, () => []), i = Ar(t, "controlId", 7), a = Ar(t, "label", 7, "Sections"), o = t.$$host;
	function s(e) {
		n(e), o.dispatchEvent(new CustomEvent("change", {
			detail: { id: e },
			bubbles: !0
		}));
	}
	return Hr(e, {
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
	}), Ue({
		get active() {
			return n();
		},
		set active(e = "") {
			n(e), At();
		},
		get tabs() {
			return r();
		},
		set tabs(e = []) {
			r(e), At();
		},
		get controlId() {
			return i();
		},
		set controlId(e) {
			i(e), At();
		},
		get label() {
			return a();
		},
		set label(e = "Sections") {
			a(e), At();
		}
	});
}
customElements.define("worn-tabs", Ir(Ur, {
	active: {},
	tabs: {},
	controlId: { attribute: "control-id" },
	label: {}
}, [], []));
//#endregion
export { Ur as default };
