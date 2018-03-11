webpackJsonp([89],{

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(364),
  /* template */
  __webpack_require__(456),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\probitousxx\\Code\\projects\\nepan-inventory\\resources\\assets\\js\\components\\Settings\\AddPriceList.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] AddPriceList.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7170b276", Component.options)
  } else {
    hotAPI.reload("data-v-7170b276", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* =========================================================
 * bootstrap-datepicker.js
 * Repo: https://github.com/eternicode/bootstrap-datepicker/
 * Demo: http://eternicode.github.io/bootstrap-datepicker/
 * Docs: http://bootstrap-datepicker.readthedocs.org/
 * Forked from http://www.eyecon.ro/bootstrap-datepicker
 * =========================================================
 * Started by Stefan Petre; improvements by Andrew Rowls + contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */

(function (factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') {
		factory(require('jquery'));
	} else {
		factory(jQuery);
	}
})(function ($, undefined) {

	function UTCDate() {
		return new Date(Date.UTC.apply(Date, arguments));
	}
	function UTCToday() {
		var today = new Date();
		return UTCDate(today.getFullYear(), today.getMonth(), today.getDate());
	}
	function isUTCEquals(date1, date2) {
		return date1.getUTCFullYear() === date2.getUTCFullYear() && date1.getUTCMonth() === date2.getUTCMonth() && date1.getUTCDate() === date2.getUTCDate();
	}
	function alias(method) {
		return function () {
			return this[method].apply(this, arguments);
		};
	}
	function isValidDate(d) {
		return d && !isNaN(d.getTime());
	}

	var DateArray = function () {
		var extras = {
			get: function get(i) {
				return this.slice(i)[0];
			},
			contains: function contains(d) {
				// Array.indexOf is not cross-browser;
				// $.inArray doesn't work with Dates
				var val = d && d.valueOf();
				for (var i = 0, l = this.length; i < l; i++) {
					if (this[i].valueOf() === val) return i;
				}return -1;
			},
			remove: function remove(i) {
				this.splice(i, 1);
			},
			replace: function replace(new_array) {
				if (!new_array) return;
				if (!$.isArray(new_array)) new_array = [new_array];
				this.clear();
				this.push.apply(this, new_array);
			},
			clear: function clear() {
				this.length = 0;
			},
			copy: function copy() {
				var a = new DateArray();
				a.replace(this);
				return a;
			}
		};

		return function () {
			var a = [];
			a.push.apply(a, arguments);
			$.extend(a, extras);
			return a;
		};
	}();

	// Picker object

	var Datepicker = function Datepicker(element, options) {
		$(element).data('datepicker', this);
		this._process_options(options);

		this.dates = new DateArray();
		this.viewDate = this.o.defaultViewDate;
		this.focusDate = null;

		this.element = $(element);
		this.isInput = this.element.is('input');
		this.inputField = this.isInput ? this.element : this.element.find('input');
		this.component = this.element.hasClass('date') ? this.element.find('.add-on, .input-group-addon, .btn') : false;
		this.hasInput = this.component && this.inputField.length;
		if (this.component && this.component.length === 0) this.component = false;
		this.isInline = !this.component && this.element.is('div');

		this.picker = $(DPGlobal.template);

		// Checking templates and inserting
		if (this._check_template(this.o.templates.leftArrow)) {
			this.picker.find('.prev').html(this.o.templates.leftArrow);
		}
		if (this._check_template(this.o.templates.rightArrow)) {
			this.picker.find('.next').html(this.o.templates.rightArrow);
		}

		this._buildEvents();
		this._attachEvents();

		if (this.isInline) {
			this.picker.addClass('datepicker-inline').appendTo(this.element);
		} else {
			this.picker.addClass('datepicker-dropdown dropdown-menu');
		}

		if (this.o.rtl) {
			this.picker.addClass('datepicker-rtl');
		}

		this.viewMode = this.o.startView;

		if (this.o.calendarWeeks) this.picker.find('thead .datepicker-title, tfoot .today, tfoot .clear').attr('colspan', function (i, val) {
			return parseInt(val) + 1;
		});

		this._allow_update = false;

		this.setStartDate(this._o.startDate);
		this.setEndDate(this._o.endDate);
		this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled);
		this.setDaysOfWeekHighlighted(this.o.daysOfWeekHighlighted);
		this.setDatesDisabled(this.o.datesDisabled);

		this.fillDow();
		this.fillMonths();

		this._allow_update = true;

		this.update();
		this.showMode();

		if (this.isInline) {
			this.show();
		}
	};

	Datepicker.prototype = {
		constructor: Datepicker,

		_resolveViewName: function _resolveViewName(view, default_value) {
			if (view === 0 || view === 'days' || view === 'month') {
				return 0;
			}
			if (view === 1 || view === 'months' || view === 'year') {
				return 1;
			}
			if (view === 2 || view === 'years' || view === 'decade') {
				return 2;
			}
			if (view === 3 || view === 'decades' || view === 'century') {
				return 3;
			}
			if (view === 4 || view === 'centuries' || view === 'millennium') {
				return 4;
			}
			return default_value === undefined ? false : default_value;
		},

		_check_template: function _check_template(tmp) {
			try {
				// If empty
				if (tmp === undefined || tmp === "") {
					return false;
				}
				// If no html, everything ok
				if ((tmp.match(/[<>]/g) || []).length <= 0) {
					return true;
				}
				// Checking if html is fine
				var jDom = $(tmp);
				return jDom.length > 0;
			} catch (ex) {
				return false;
			}
		},

		_process_options: function _process_options(opts) {
			// Store raw options for reference
			this._o = $.extend({}, this._o, opts);
			// Processed options
			var o = this.o = $.extend({}, this._o);

			// Check if "de-DE" style date is available, if not language should
			// fallback to 2 letter code eg "de"
			var lang = o.language;
			if (!dates[lang]) {
				lang = lang.split('-')[0];
				if (!dates[lang]) lang = defaults.language;
			}
			o.language = lang;

			// Retrieve view index from any aliases
			o.startView = this._resolveViewName(o.startView, 0);
			o.minViewMode = this._resolveViewName(o.minViewMode, 0);
			o.maxViewMode = this._resolveViewName(o.maxViewMode, 4);

			// Check that the start view is between min and max
			o.startView = Math.min(o.startView, o.maxViewMode);
			o.startView = Math.max(o.startView, o.minViewMode);

			// true, false, or Number > 0
			if (o.multidate !== true) {
				o.multidate = Number(o.multidate) || false;
				if (o.multidate !== false) o.multidate = Math.max(0, o.multidate);
			}
			o.multidateSeparator = String(o.multidateSeparator);

			o.weekStart %= 7;
			o.weekEnd = (o.weekStart + 6) % 7;

			var format = DPGlobal.parseFormat(o.format);
			if (o.startDate !== -Infinity) {
				if (!!o.startDate) {
					if (o.startDate instanceof Date) o.startDate = this._local_to_utc(this._zero_time(o.startDate));else o.startDate = DPGlobal.parseDate(o.startDate, format, o.language, o.assumeNearbyYear);
				} else {
					o.startDate = -Infinity;
				}
			}
			if (o.endDate !== Infinity) {
				if (!!o.endDate) {
					if (o.endDate instanceof Date) o.endDate = this._local_to_utc(this._zero_time(o.endDate));else o.endDate = DPGlobal.parseDate(o.endDate, format, o.language, o.assumeNearbyYear);
				} else {
					o.endDate = Infinity;
				}
			}

			o.daysOfWeekDisabled = o.daysOfWeekDisabled || [];
			if (!$.isArray(o.daysOfWeekDisabled)) o.daysOfWeekDisabled = o.daysOfWeekDisabled.split(/[,\s]*/);
			o.daysOfWeekDisabled = $.map(o.daysOfWeekDisabled, function (d) {
				return parseInt(d, 10);
			});

			o.daysOfWeekHighlighted = o.daysOfWeekHighlighted || [];
			if (!$.isArray(o.daysOfWeekHighlighted)) o.daysOfWeekHighlighted = o.daysOfWeekHighlighted.split(/[,\s]*/);
			o.daysOfWeekHighlighted = $.map(o.daysOfWeekHighlighted, function (d) {
				return parseInt(d, 10);
			});

			o.datesDisabled = o.datesDisabled || [];
			if (!$.isArray(o.datesDisabled)) {
				o.datesDisabled = [o.datesDisabled];
			}
			o.datesDisabled = $.map(o.datesDisabled, function (d) {
				return DPGlobal.parseDate(d, format, o.language, o.assumeNearbyYear);
			});

			var plc = String(o.orientation).toLowerCase().split(/\s+/g),
			    _plc = o.orientation.toLowerCase();
			plc = $.grep(plc, function (word) {
				return (/^auto|left|right|top|bottom$/.test(word)
				);
			});
			o.orientation = { x: 'auto', y: 'auto' };
			if (!_plc || _plc === 'auto') ; // no action
			else if (plc.length === 1) {
					switch (plc[0]) {
						case 'top':
						case 'bottom':
							o.orientation.y = plc[0];
							break;
						case 'left':
						case 'right':
							o.orientation.x = plc[0];
							break;
					}
				} else {
					_plc = $.grep(plc, function (word) {
						return (/^left|right$/.test(word)
						);
					});
					o.orientation.x = _plc[0] || 'auto';

					_plc = $.grep(plc, function (word) {
						return (/^top|bottom$/.test(word)
						);
					});
					o.orientation.y = _plc[0] || 'auto';
				}
			if (o.defaultViewDate) {
				var year = o.defaultViewDate.year || new Date().getFullYear();
				var month = o.defaultViewDate.month || 0;
				var day = o.defaultViewDate.day || 1;
				o.defaultViewDate = UTCDate(year, month, day);
			} else {
				o.defaultViewDate = UTCToday();
			}
		},
		_events: [],
		_secondaryEvents: [],
		_applyEvents: function _applyEvents(evs) {
			for (var i = 0, el, ch, ev; i < evs.length; i++) {
				el = evs[i][0];
				if (evs[i].length === 2) {
					ch = undefined;
					ev = evs[i][1];
				} else if (evs[i].length === 3) {
					ch = evs[i][1];
					ev = evs[i][2];
				}
				el.on(ev, ch);
			}
		},
		_unapplyEvents: function _unapplyEvents(evs) {
			for (var i = 0, el, ev, ch; i < evs.length; i++) {
				el = evs[i][0];
				if (evs[i].length === 2) {
					ch = undefined;
					ev = evs[i][1];
				} else if (evs[i].length === 3) {
					ch = evs[i][1];
					ev = evs[i][2];
				}
				el.off(ev, ch);
			}
		},
		_buildEvents: function _buildEvents() {
			var events = {
				keyup: $.proxy(function (e) {
					if ($.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) === -1) this.update();
				}, this),
				keydown: $.proxy(this.keydown, this),
				paste: $.proxy(this.paste, this)
			};

			if (this.o.showOnFocus === true) {
				events.focus = $.proxy(this.show, this);
			}

			if (this.isInput) {
				// single input
				this._events = [[this.element, events]];
			} else if (this.component && this.hasInput) {
				// component: input + button
				this._events = [
				// For components that are not readonly, allow keyboard nav
				[this.inputField, events], [this.component, {
					click: $.proxy(this.show, this)
				}]];
			} else {
				this._events = [[this.element, {
					click: $.proxy(this.show, this),
					keydown: $.proxy(this.keydown, this)
				}]];
			}
			this._events.push(
			// Component: listen for blur on element descendants
			[this.element, '*', {
				blur: $.proxy(function (e) {
					this._focused_from = e.target;
				}, this)
			}],
			// Input: listen for blur on element
			[this.element, {
				blur: $.proxy(function (e) {
					this._focused_from = e.target;
				}, this)
			}]);

			if (this.o.immediateUpdates) {
				// Trigger input updates immediately on changed year/month
				this._events.push([this.element, {
					'changeYear changeMonth': $.proxy(function (e) {
						this.update(e.date);
					}, this)
				}]);
			}

			this._secondaryEvents = [[this.picker, {
				click: $.proxy(this.click, this)
			}], [$(window), {
				resize: $.proxy(this.place, this)
			}], [$(document), {
				mousedown: $.proxy(function (e) {
					// Clicked outside the datepicker, hide it
					if (!(this.element.is(e.target) || this.element.find(e.target).length || this.picker.is(e.target) || this.picker.find(e.target).length || this.isInline)) {
						this.hide();
					}
				}, this)
			}]];
		},
		_attachEvents: function _attachEvents() {
			this._detachEvents();
			this._applyEvents(this._events);
		},
		_detachEvents: function _detachEvents() {
			this._unapplyEvents(this._events);
		},
		_attachSecondaryEvents: function _attachSecondaryEvents() {
			this._detachSecondaryEvents();
			this._applyEvents(this._secondaryEvents);
		},
		_detachSecondaryEvents: function _detachSecondaryEvents() {
			this._unapplyEvents(this._secondaryEvents);
		},
		_trigger: function _trigger(event, altdate) {
			var date = altdate || this.dates.get(-1),
			    local_date = this._utc_to_local(date);

			this.element.trigger({
				type: event,
				date: local_date,
				dates: $.map(this.dates, this._utc_to_local),
				format: $.proxy(function (ix, format) {
					if (arguments.length === 0) {
						ix = this.dates.length - 1;
						format = this.o.format;
					} else if (typeof ix === 'string') {
						format = ix;
						ix = this.dates.length - 1;
					}
					format = format || this.o.format;
					var date = this.dates.get(ix);
					return DPGlobal.formatDate(date, format, this.o.language);
				}, this)
			});
		},

		show: function show() {
			if (this.inputField.prop('disabled') || this.inputField.prop('readonly') && this.o.enableOnReadonly === false) return;
			if (!this.isInline) this.picker.appendTo(this.o.container);
			this.place();
			this.picker.show();
			this._attachSecondaryEvents();
			this._trigger('show');
			if ((window.navigator.msMaxTouchPoints || 'ontouchstart' in document) && this.o.disableTouchKeyboard) {
				$(this.element).blur();
			}
			return this;
		},

		hide: function hide() {
			if (this.isInline || !this.picker.is(':visible')) return this;
			this.focusDate = null;
			this.picker.hide().detach();
			this._detachSecondaryEvents();
			this.viewMode = this.o.startView;
			this.showMode();

			if (this.o.forceParse && this.inputField.val()) this.setValue();
			this._trigger('hide');
			return this;
		},

		destroy: function destroy() {
			this.hide();
			this._detachEvents();
			this._detachSecondaryEvents();
			this.picker.remove();
			delete this.element.data().datepicker;
			if (!this.isInput) {
				delete this.element.data().date;
			}
			return this;
		},

		paste: function paste(evt) {
			var dateString;
			if (evt.originalEvent.clipboardData && evt.originalEvent.clipboardData.types && $.inArray('text/plain', evt.originalEvent.clipboardData.types) !== -1) {
				dateString = evt.originalEvent.clipboardData.getData('text/plain');
			} else if (window.clipboardData) {
				dateString = window.clipboardData.getData('Text');
			} else {
				return;
			}
			this.setDate(dateString);
			this.update();
			evt.preventDefault();
		},

		_utc_to_local: function _utc_to_local(utc) {
			return utc && new Date(utc.getTime() + utc.getTimezoneOffset() * 60000);
		},
		_local_to_utc: function _local_to_utc(local) {
			return local && new Date(local.getTime() - local.getTimezoneOffset() * 60000);
		},
		_zero_time: function _zero_time(local) {
			return local && new Date(local.getFullYear(), local.getMonth(), local.getDate());
		},
		_zero_utc_time: function _zero_utc_time(utc) {
			return utc && new Date(Date.UTC(utc.getUTCFullYear(), utc.getUTCMonth(), utc.getUTCDate()));
		},

		getDates: function getDates() {
			return $.map(this.dates, this._utc_to_local);
		},

		getUTCDates: function getUTCDates() {
			return $.map(this.dates, function (d) {
				return new Date(d);
			});
		},

		getDate: function getDate() {
			return this._utc_to_local(this.getUTCDate());
		},

		getUTCDate: function getUTCDate() {
			var selected_date = this.dates.get(-1);
			if (typeof selected_date !== 'undefined') {
				return new Date(selected_date);
			} else {
				return null;
			}
		},

		clearDates: function clearDates() {
			if (this.inputField) {
				this.inputField.val('');
			}

			this.update();
			this._trigger('changeDate');

			if (this.o.autoclose) {
				this.hide();
			}
		},
		setDates: function setDates() {
			var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
			this.update.apply(this, args);
			this._trigger('changeDate');
			this.setValue();
			return this;
		},

		setUTCDates: function setUTCDates() {
			var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
			this.update.apply(this, $.map(args, this._utc_to_local));
			this._trigger('changeDate');
			this.setValue();
			return this;
		},

		setDate: alias('setDates'),
		setUTCDate: alias('setUTCDates'),
		remove: alias('destroy'),

		setValue: function setValue() {
			var formatted = this.getFormattedDate();
			this.inputField.val(formatted);
			return this;
		},

		getFormattedDate: function getFormattedDate(format) {
			if (format === undefined) format = this.o.format;

			var lang = this.o.language;
			return $.map(this.dates, function (d) {
				return DPGlobal.formatDate(d, format, lang);
			}).join(this.o.multidateSeparator);
		},

		getStartDate: function getStartDate() {
			return this.o.startDate;
		},

		setStartDate: function setStartDate(startDate) {
			this._process_options({ startDate: startDate });
			this.update();
			this.updateNavArrows();
			return this;
		},

		getEndDate: function getEndDate() {
			return this.o.endDate;
		},

		setEndDate: function setEndDate(endDate) {
			this._process_options({ endDate: endDate });
			this.update();
			this.updateNavArrows();
			return this;
		},

		setDaysOfWeekDisabled: function setDaysOfWeekDisabled(daysOfWeekDisabled) {
			this._process_options({ daysOfWeekDisabled: daysOfWeekDisabled });
			this.update();
			this.updateNavArrows();
			return this;
		},

		setDaysOfWeekHighlighted: function setDaysOfWeekHighlighted(daysOfWeekHighlighted) {
			this._process_options({ daysOfWeekHighlighted: daysOfWeekHighlighted });
			this.update();
			return this;
		},

		setDatesDisabled: function setDatesDisabled(datesDisabled) {
			this._process_options({ datesDisabled: datesDisabled });
			this.update();
			this.updateNavArrows();
		},

		place: function place() {
			if (this.isInline) return this;
			var calendarWidth = this.picker.outerWidth(),
			    calendarHeight = this.picker.outerHeight(),
			    visualPadding = 10,
			    container = $(this.o.container),
			    windowWidth = container.width(),
			    scrollTop = this.o.container === 'body' ? $(document).scrollTop() : container.scrollTop(),
			    appendOffset = container.offset();

			var parentsZindex = [];
			this.element.parents().each(function () {
				var itemZIndex = $(this).css('z-index');
				if (itemZIndex !== 'auto' && itemZIndex !== 0) parentsZindex.push(parseInt(itemZIndex));
			});
			var zIndex = Math.max.apply(Math, parentsZindex) + this.o.zIndexOffset;
			var offset = this.component ? this.component.parent().offset() : this.element.offset();
			var height = this.component ? this.component.outerHeight(true) : this.element.outerHeight(false);
			var width = this.component ? this.component.outerWidth(true) : this.element.outerWidth(false);
			var left = offset.left - appendOffset.left,
			    top = offset.top - appendOffset.top;

			if (this.o.container !== 'body') {
				top += scrollTop;
			}

			this.picker.removeClass('datepicker-orient-top datepicker-orient-bottom ' + 'datepicker-orient-right datepicker-orient-left');

			if (this.o.orientation.x !== 'auto') {
				this.picker.addClass('datepicker-orient-' + this.o.orientation.x);
				if (this.o.orientation.x === 'right') left -= calendarWidth - width;
			}
			// auto x orientation is best-placement: if it crosses a window
			// edge, fudge it sideways
			else {
					if (offset.left < 0) {
						// component is outside the window on the left side. Move it into visible range
						this.picker.addClass('datepicker-orient-left');
						left -= offset.left - visualPadding;
					} else if (left + calendarWidth > windowWidth) {
						// the calendar passes the widow right edge. Align it to component right side
						this.picker.addClass('datepicker-orient-right');
						left += width - calendarWidth;
					} else {
						// Default to left
						this.picker.addClass('datepicker-orient-left');
					}
				}

			// auto y orientation is best-situation: top or bottom, no fudging,
			// decision based on which shows more of the calendar
			var yorient = this.o.orientation.y,
			    top_overflow;
			if (yorient === 'auto') {
				top_overflow = -scrollTop + top - calendarHeight;
				yorient = top_overflow < 0 ? 'bottom' : 'top';
			}

			this.picker.addClass('datepicker-orient-' + yorient);
			if (yorient === 'top') top -= calendarHeight + parseInt(this.picker.css('padding-top'));else top += height;

			if (this.o.rtl) {
				var right = windowWidth - (left + width);
				this.picker.css({
					top: top,
					right: right,
					zIndex: zIndex
				});
			} else {
				this.picker.css({
					top: top,
					left: left,
					zIndex: zIndex
				});
			}
			return this;
		},

		_allow_update: true,
		update: function update() {
			if (!this._allow_update) return this;

			var oldDates = this.dates.copy(),
			    dates = [],
			    fromArgs = false;
			if (arguments.length) {
				$.each(arguments, $.proxy(function (i, date) {
					if (date instanceof Date) date = this._local_to_utc(date);
					dates.push(date);
				}, this));
				fromArgs = true;
			} else {
				dates = this.isInput ? this.element.val() : this.element.data('date') || this.inputField.val();
				if (dates && this.o.multidate) dates = dates.split(this.o.multidateSeparator);else dates = [dates];
				delete this.element.data().date;
			}

			dates = $.map(dates, $.proxy(function (date) {
				return DPGlobal.parseDate(date, this.o.format, this.o.language, this.o.assumeNearbyYear);
			}, this));
			dates = $.grep(dates, $.proxy(function (date) {
				return !this.dateWithinRange(date) || !date;
			}, this), true);
			this.dates.replace(dates);

			if (this.dates.length) this.viewDate = new Date(this.dates.get(-1));else if (this.viewDate < this.o.startDate) this.viewDate = new Date(this.o.startDate);else if (this.viewDate > this.o.endDate) this.viewDate = new Date(this.o.endDate);else this.viewDate = this.o.defaultViewDate;

			if (fromArgs) {
				// setting date by clicking
				this.setValue();
			} else if (dates.length) {
				// setting date by typing
				if (String(oldDates) !== String(this.dates)) this._trigger('changeDate');
			}
			if (!this.dates.length && oldDates.length) this._trigger('clearDate');

			this.fill();
			this.element.change();
			return this;
		},

		fillDow: function fillDow() {
			var dowCnt = this.o.weekStart,
			    html = '<tr>';
			if (this.o.calendarWeeks) {
				this.picker.find('.datepicker-days .datepicker-switch').attr('colspan', function (i, val) {
					return parseInt(val) + 1;
				});
				html += '<th class="cw">&#160;</th>';
			}
			while (dowCnt < this.o.weekStart + 7) {
				html += '<th class="dow';
				if ($.inArray(dowCnt, this.o.daysOfWeekDisabled) > -1) html += ' disabled';
				html += '">' + dates[this.o.language].daysMin[dowCnt++ % 7] + '</th>';
			}
			html += '</tr>';
			this.picker.find('.datepicker-days thead').append(html);
		},

		fillMonths: function fillMonths() {
			var localDate = this._utc_to_local(this.viewDate);
			var html = '',
			    i = 0;
			while (i < 12) {
				var focused = localDate && localDate.getMonth() === i ? ' focused' : '';
				html += '<span class="month' + focused + '">' + dates[this.o.language].monthsShort[i++] + '</span>';
			}
			this.picker.find('.datepicker-months td').html(html);
		},

		setRange: function setRange(range) {
			if (!range || !range.length) delete this.range;else this.range = $.map(range, function (d) {
				return d.valueOf();
			});
			this.fill();
		},

		getClassNames: function getClassNames(date) {
			var cls = [],
			    year = this.viewDate.getUTCFullYear(),
			    month = this.viewDate.getUTCMonth(),
			    today = new Date();
			if (date.getUTCFullYear() < year || date.getUTCFullYear() === year && date.getUTCMonth() < month) {
				cls.push('old');
			} else if (date.getUTCFullYear() > year || date.getUTCFullYear() === year && date.getUTCMonth() > month) {
				cls.push('new');
			}
			if (this.focusDate && date.valueOf() === this.focusDate.valueOf()) cls.push('focused');
			// Compare internal UTC date with local today, not UTC today
			if (this.o.todayHighlight && date.getUTCFullYear() === today.getFullYear() && date.getUTCMonth() === today.getMonth() && date.getUTCDate() === today.getDate()) {
				cls.push('today');
			}
			if (this.dates.contains(date) !== -1) cls.push('active');
			if (!this.dateWithinRange(date)) {
				cls.push('disabled');
			}
			if (this.dateIsDisabled(date)) {
				cls.push('disabled', 'disabled-date');
			}
			if ($.inArray(date.getUTCDay(), this.o.daysOfWeekHighlighted) !== -1) {
				cls.push('highlighted');
			}

			if (this.range) {
				if (date > this.range[0] && date < this.range[this.range.length - 1]) {
					cls.push('range');
				}
				if ($.inArray(date.valueOf(), this.range) !== -1) {
					cls.push('selected');
				}
				if (date.valueOf() === this.range[0]) {
					cls.push('range-start');
				}
				if (date.valueOf() === this.range[this.range.length - 1]) {
					cls.push('range-end');
				}
			}
			return cls;
		},

		_fill_yearsView: function _fill_yearsView(selector, cssClass, factor, step, currentYear, startYear, endYear, callback) {
			var html, view, year, steps, startStep, endStep, thisYear, i, classes, tooltip, before;

			html = '';
			view = this.picker.find(selector);
			year = parseInt(currentYear / factor, 10) * factor;
			startStep = parseInt(startYear / step, 10) * step;
			endStep = parseInt(endYear / step, 10) * step;
			steps = $.map(this.dates, function (d) {
				return parseInt(d.getUTCFullYear() / step, 10) * step;
			});

			view.find('.datepicker-switch').text(year + '-' + (year + step * 9));

			thisYear = year - step;
			for (i = -1; i < 11; i += 1) {
				classes = [cssClass];
				tooltip = null;

				if (i === -1) {
					classes.push('old');
				} else if (i === 10) {
					classes.push('new');
				}
				if ($.inArray(thisYear, steps) !== -1) {
					classes.push('active');
				}
				if (thisYear < startStep || thisYear > endStep) {
					classes.push('disabled');
				}
				if (thisYear === this.viewDate.getFullYear()) {
					classes.push('focused');
				}

				if (callback !== $.noop) {
					before = callback(new Date(thisYear, 0, 1));
					if (before === undefined) {
						before = {};
					} else if (typeof before === 'boolean') {
						before = { enabled: before };
					} else if (typeof before === 'string') {
						before = { classes: before };
					}
					if (before.enabled === false) {
						classes.push('disabled');
					}
					if (before.classes) {
						classes = classes.concat(before.classes.split(/\s+/));
					}
					if (before.tooltip) {
						tooltip = before.tooltip;
					}
				}

				html += '<span class="' + classes.join(' ') + '"' + (tooltip ? ' title="' + tooltip + '"' : '') + '>' + thisYear + '</span>';
				thisYear += step;
			}
			view.find('td').html(html);
		},

		fill: function fill() {
			var d = new Date(this.viewDate),
			    year = d.getUTCFullYear(),
			    month = d.getUTCMonth(),
			    startYear = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,
			    startMonth = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,
			    endYear = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,
			    endMonth = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,
			    todaytxt = dates[this.o.language].today || dates['en'].today || '',
			    cleartxt = dates[this.o.language].clear || dates['en'].clear || '',
			    titleFormat = dates[this.o.language].titleFormat || dates['en'].titleFormat,
			    tooltip,
			    before;
			if (isNaN(year) || isNaN(month)) return;
			this.picker.find('.datepicker-days .datepicker-switch').text(DPGlobal.formatDate(d, titleFormat, this.o.language));
			this.picker.find('tfoot .today').text(todaytxt).toggle(this.o.todayBtn !== false);
			this.picker.find('tfoot .clear').text(cleartxt).toggle(this.o.clearBtn !== false);
			this.picker.find('thead .datepicker-title').text(this.o.title).toggle(this.o.title !== '');
			this.updateNavArrows();
			this.fillMonths();
			var prevMonth = UTCDate(year, month - 1, 28),
			    day = DPGlobal.getDaysInMonth(prevMonth.getUTCFullYear(), prevMonth.getUTCMonth());
			prevMonth.setUTCDate(day);
			prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.o.weekStart + 7) % 7);
			var nextMonth = new Date(prevMonth);
			if (prevMonth.getUTCFullYear() < 100) {
				nextMonth.setUTCFullYear(prevMonth.getUTCFullYear());
			}
			nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
			nextMonth = nextMonth.valueOf();
			var html = [];
			var clsName;
			while (prevMonth.valueOf() < nextMonth) {
				if (prevMonth.getUTCDay() === this.o.weekStart) {
					html.push('<tr>');
					if (this.o.calendarWeeks) {
						// ISO 8601: First week contains first thursday.
						// ISO also states week starts on Monday, but we can be more abstract here.
						var
						// Start of current week: based on weekstart/current date
						ws = new Date(+prevMonth + (this.o.weekStart - prevMonth.getUTCDay() - 7) % 7 * 864e5),

						// Thursday of this week
						th = new Date(Number(ws) + (7 + 4 - ws.getUTCDay()) % 7 * 864e5),

						// First Thursday of year, year from thursday
						yth = new Date(Number(yth = UTCDate(th.getUTCFullYear(), 0, 1)) + (7 + 4 - yth.getUTCDay()) % 7 * 864e5),

						// Calendar week: ms between thursdays, div ms per day, div 7 days
						calWeek = (th - yth) / 864e5 / 7 + 1;
						html.push('<td class="cw">' + calWeek + '</td>');
					}
				}
				clsName = this.getClassNames(prevMonth);
				clsName.push('day');

				if (this.o.beforeShowDay !== $.noop) {
					before = this.o.beforeShowDay(this._utc_to_local(prevMonth));
					if (before === undefined) before = {};else if (typeof before === 'boolean') before = { enabled: before };else if (typeof before === 'string') before = { classes: before };
					if (before.enabled === false) clsName.push('disabled');
					if (before.classes) clsName = clsName.concat(before.classes.split(/\s+/));
					if (before.tooltip) tooltip = before.tooltip;
				}

				clsName = $.unique(clsName);
				html.push('<td class="' + clsName.join(' ') + '"' + (tooltip ? ' title="' + tooltip + '"' : '') + '>' + prevMonth.getUTCDate() + '</td>');
				tooltip = null;
				if (prevMonth.getUTCDay() === this.o.weekEnd) {
					html.push('</tr>');
				}
				prevMonth.setUTCDate(prevMonth.getUTCDate() + 1);
			}
			this.picker.find('.datepicker-days tbody').empty().append(html.join(''));

			var monthsTitle = dates[this.o.language].monthsTitle || dates['en'].monthsTitle || 'Months';
			var months = this.picker.find('.datepicker-months').find('.datepicker-switch').text(this.o.maxViewMode < 2 ? monthsTitle : year).end().find('span').removeClass('active');

			$.each(this.dates, function (i, d) {
				if (d.getUTCFullYear() === year) months.eq(d.getUTCMonth()).addClass('active');
			});

			if (year < startYear || year > endYear) {
				months.addClass('disabled');
			}
			if (year === startYear) {
				months.slice(0, startMonth).addClass('disabled');
			}
			if (year === endYear) {
				months.slice(endMonth + 1).addClass('disabled');
			}

			if (this.o.beforeShowMonth !== $.noop) {
				var that = this;
				$.each(months, function (i, month) {
					var moDate = new Date(year, i, 1);
					var before = that.o.beforeShowMonth(moDate);
					if (before === undefined) before = {};else if (typeof before === 'boolean') before = { enabled: before };else if (typeof before === 'string') before = { classes: before };
					if (before.enabled === false && !$(month).hasClass('disabled')) $(month).addClass('disabled');
					if (before.classes) $(month).addClass(before.classes);
					if (before.tooltip) $(month).prop('title', before.tooltip);
				});
			}

			// Generating decade/years picker
			this._fill_yearsView('.datepicker-years', 'year', 10, 1, year, startYear, endYear, this.o.beforeShowYear);

			// Generating century/decades picker
			this._fill_yearsView('.datepicker-decades', 'decade', 100, 10, year, startYear, endYear, this.o.beforeShowDecade);

			// Generating millennium/centuries picker
			this._fill_yearsView('.datepicker-centuries', 'century', 1000, 100, year, startYear, endYear, this.o.beforeShowCentury);
		},

		updateNavArrows: function updateNavArrows() {
			if (!this._allow_update) return;

			var d = new Date(this.viewDate),
			    year = d.getUTCFullYear(),
			    month = d.getUTCMonth();
			switch (this.viewMode) {
				case 0:
					if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear() && month <= this.o.startDate.getUTCMonth()) {
						this.picker.find('.prev').css({ visibility: 'hidden' });
					} else {
						this.picker.find('.prev').css({ visibility: 'visible' });
					}
					if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear() && month >= this.o.endDate.getUTCMonth()) {
						this.picker.find('.next').css({ visibility: 'hidden' });
					} else {
						this.picker.find('.next').css({ visibility: 'visible' });
					}
					break;
				case 1:
				case 2:
				case 3:
				case 4:
					if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear() || this.o.maxViewMode < 2) {
						this.picker.find('.prev').css({ visibility: 'hidden' });
					} else {
						this.picker.find('.prev').css({ visibility: 'visible' });
					}
					if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear() || this.o.maxViewMode < 2) {
						this.picker.find('.next').css({ visibility: 'hidden' });
					} else {
						this.picker.find('.next').css({ visibility: 'visible' });
					}
					break;
			}
		},

		click: function click(e) {
			e.preventDefault();
			e.stopPropagation();

			var target, dir, day, year, month, monthChanged, yearChanged;
			target = $(e.target);

			// Clicked on the switch
			if (target.hasClass('datepicker-switch')) {
				this.showMode(1);
			}

			// Clicked on prev or next
			var navArrow = target.closest('.prev, .next');
			if (navArrow.length > 0) {
				dir = DPGlobal.modes[this.viewMode].navStep * (navArrow.hasClass('prev') ? -1 : 1);
				if (this.viewMode === 0) {
					this.viewDate = this.moveMonth(this.viewDate, dir);
					this._trigger('changeMonth', this.viewDate);
				} else {
					this.viewDate = this.moveYear(this.viewDate, dir);
					if (this.viewMode === 1) {
						this._trigger('changeYear', this.viewDate);
					}
				}
				this.fill();
			}

			// Clicked on today button
			if (target.hasClass('today') && !target.hasClass('day')) {
				this.showMode(-2);
				this._setDate(UTCToday(), this.o.todayBtn === 'linked' ? null : 'view');
			}

			// Clicked on clear button
			if (target.hasClass('clear')) {
				this.clearDates();
			}

			if (!target.hasClass('disabled')) {
				// Clicked on a day
				if (target.hasClass('day')) {
					day = parseInt(target.text(), 10) || 1;
					year = this.viewDate.getUTCFullYear();
					month = this.viewDate.getUTCMonth();

					// From last month
					if (target.hasClass('old')) {
						if (month === 0) {
							month = 11;
							year = year - 1;
							monthChanged = true;
							yearChanged = true;
						} else {
							month = month - 1;
							monthChanged = true;
						}
					}

					// From next month
					if (target.hasClass('new')) {
						if (month === 11) {
							month = 0;
							year = year + 1;
							monthChanged = true;
							yearChanged = true;
						} else {
							month = month + 1;
							monthChanged = true;
						}
					}
					this._setDate(UTCDate(year, month, day));
					if (yearChanged) {
						this._trigger('changeYear', this.viewDate);
					}
					if (monthChanged) {
						this._trigger('changeMonth', this.viewDate);
					}
				}

				// Clicked on a month
				if (target.hasClass('month')) {
					this.viewDate.setUTCDate(1);
					day = 1;
					month = target.parent().find('span').index(target);
					year = this.viewDate.getUTCFullYear();
					this.viewDate.setUTCMonth(month);
					this._trigger('changeMonth', this.viewDate);
					if (this.o.minViewMode === 1) {
						this._setDate(UTCDate(year, month, day));
						this.showMode();
					} else {
						this.showMode(-1);
					}
					this.fill();
				}

				// Clicked on a year
				if (target.hasClass('year') || target.hasClass('decade') || target.hasClass('century')) {
					this.viewDate.setUTCDate(1);

					day = 1;
					month = 0;
					year = parseInt(target.text(), 10) || 0;
					this.viewDate.setUTCFullYear(year);

					if (target.hasClass('year')) {
						this._trigger('changeYear', this.viewDate);
						if (this.o.minViewMode === 2) {
							this._setDate(UTCDate(year, month, day));
						}
					}
					if (target.hasClass('decade')) {
						this._trigger('changeDecade', this.viewDate);
						if (this.o.minViewMode === 3) {
							this._setDate(UTCDate(year, month, day));
						}
					}
					if (target.hasClass('century')) {
						this._trigger('changeCentury', this.viewDate);
						if (this.o.minViewMode === 4) {
							this._setDate(UTCDate(year, month, day));
						}
					}

					this.showMode(-1);
					this.fill();
				}
			}

			if (this.picker.is(':visible') && this._focused_from) {
				$(this._focused_from).focus();
			}
			delete this._focused_from;
		},

		_toggle_multidate: function _toggle_multidate(date) {
			var ix = this.dates.contains(date);
			if (!date) {
				this.dates.clear();
			}

			if (ix !== -1) {
				if (this.o.multidate === true || this.o.multidate > 1 || this.o.toggleActive) {
					this.dates.remove(ix);
				}
			} else if (this.o.multidate === false) {
				this.dates.clear();
				this.dates.push(date);
			} else {
				this.dates.push(date);
			}

			if (typeof this.o.multidate === 'number') while (this.dates.length > this.o.multidate) {
				this.dates.remove(0);
			}
		},

		_setDate: function _setDate(date, which) {
			if (!which || which === 'date') this._toggle_multidate(date && new Date(date));
			if (!which || which === 'view') this.viewDate = date && new Date(date);

			this.fill();
			this.setValue();
			if (!which || which !== 'view') {
				this._trigger('changeDate');
			}
			if (this.inputField) {
				this.inputField.change();
			}
			if (this.o.autoclose && (!which || which === 'date')) {
				this.hide();
			}
		},

		moveDay: function moveDay(date, dir) {
			var newDate = new Date(date);
			newDate.setUTCDate(date.getUTCDate() + dir);

			return newDate;
		},

		moveWeek: function moveWeek(date, dir) {
			return this.moveDay(date, dir * 7);
		},

		moveMonth: function moveMonth(date, dir) {
			if (!isValidDate(date)) return this.o.defaultViewDate;
			if (!dir) return date;
			var new_date = new Date(date.valueOf()),
			    day = new_date.getUTCDate(),
			    month = new_date.getUTCMonth(),
			    mag = Math.abs(dir),
			    new_month,
			    test;
			dir = dir > 0 ? 1 : -1;
			if (mag === 1) {
				test = dir === -1
				// If going back one month, make sure month is not current month
				// (eg, Mar 31 -> Feb 31 == Feb 28, not Mar 02)
				? function () {
					return new_date.getUTCMonth() === month;
				}
				// If going forward one month, make sure month is as expected
				// (eg, Jan 31 -> Feb 31 == Feb 28, not Mar 02)
				: function () {
					return new_date.getUTCMonth() !== new_month;
				};
				new_month = month + dir;
				new_date.setUTCMonth(new_month);
				// Dec -> Jan (12) or Jan -> Dec (-1) -- limit expected date to 0-11
				if (new_month < 0 || new_month > 11) new_month = (new_month + 12) % 12;
			} else {
				// For magnitudes >1, move one month at a time...
				for (var i = 0; i < mag; i++) {
					// ...which might decrease the day (eg, Jan 31 to Feb 28, etc)...
					new_date = this.moveMonth(new_date, dir);
				} // ...then reset the day, keeping it in the new month
				new_month = new_date.getUTCMonth();
				new_date.setUTCDate(day);
				test = function test() {
					return new_month !== new_date.getUTCMonth();
				};
			}
			// Common date-resetting loop -- if date is beyond end of month, make it
			// end of month
			while (test()) {
				new_date.setUTCDate(--day);
				new_date.setUTCMonth(new_month);
			}
			return new_date;
		},

		moveYear: function moveYear(date, dir) {
			return this.moveMonth(date, dir * 12);
		},

		moveAvailableDate: function moveAvailableDate(date, dir, fn) {
			do {
				date = this[fn](date, dir);

				if (!this.dateWithinRange(date)) return false;

				fn = 'moveDay';
			} while (this.dateIsDisabled(date));

			return date;
		},

		weekOfDateIsDisabled: function weekOfDateIsDisabled(date) {
			return $.inArray(date.getUTCDay(), this.o.daysOfWeekDisabled) !== -1;
		},

		dateIsDisabled: function dateIsDisabled(date) {
			return this.weekOfDateIsDisabled(date) || $.grep(this.o.datesDisabled, function (d) {
				return isUTCEquals(date, d);
			}).length > 0;
		},

		dateWithinRange: function dateWithinRange(date) {
			return date >= this.o.startDate && date <= this.o.endDate;
		},

		keydown: function keydown(e) {
			if (!this.picker.is(':visible')) {
				if (e.keyCode === 40 || e.keyCode === 27) {
					// allow down to re-show picker
					this.show();
					e.stopPropagation();
				}
				return;
			}
			var dateChanged = false,
			    dir,
			    newViewDate,
			    focusDate = this.focusDate || this.viewDate;
			switch (e.keyCode) {
				case 27:
					// escape
					if (this.focusDate) {
						this.focusDate = null;
						this.viewDate = this.dates.get(-1) || this.viewDate;
						this.fill();
					} else this.hide();
					e.preventDefault();
					e.stopPropagation();
					break;
				case 37: // left
				case 38: // up
				case 39: // right
				case 40:
					// down
					if (!this.o.keyboardNavigation || this.o.daysOfWeekDisabled.length === 7) break;
					dir = e.keyCode === 37 || e.keyCode === 38 ? -1 : 1;
					if (this.viewMode === 0) {
						if (e.ctrlKey) {
							newViewDate = this.moveAvailableDate(focusDate, dir, 'moveYear');

							if (newViewDate) this._trigger('changeYear', this.viewDate);
						} else if (e.shiftKey) {
							newViewDate = this.moveAvailableDate(focusDate, dir, 'moveMonth');

							if (newViewDate) this._trigger('changeMonth', this.viewDate);
						} else if (e.keyCode === 37 || e.keyCode === 39) {
							newViewDate = this.moveAvailableDate(focusDate, dir, 'moveDay');
						} else if (!this.weekOfDateIsDisabled(focusDate)) {
							newViewDate = this.moveAvailableDate(focusDate, dir, 'moveWeek');
						}
					} else if (this.viewMode === 1) {
						if (e.keyCode === 38 || e.keyCode === 40) {
							dir = dir * 4;
						}
						newViewDate = this.moveAvailableDate(focusDate, dir, 'moveMonth');
					} else if (this.viewMode === 2) {
						if (e.keyCode === 38 || e.keyCode === 40) {
							dir = dir * 4;
						}
						newViewDate = this.moveAvailableDate(focusDate, dir, 'moveYear');
					}
					if (newViewDate) {
						this.focusDate = this.viewDate = newViewDate;
						this.setValue();
						this.fill();
						e.preventDefault();
					}
					break;
				case 13:
					// enter
					if (!this.o.forceParse) break;
					focusDate = this.focusDate || this.dates.get(-1) || this.viewDate;
					if (this.o.keyboardNavigation) {
						this._toggle_multidate(focusDate);
						dateChanged = true;
					}
					this.focusDate = null;
					this.viewDate = this.dates.get(-1) || this.viewDate;
					this.setValue();
					this.fill();
					if (this.picker.is(':visible')) {
						e.preventDefault();
						e.stopPropagation();
						if (this.o.autoclose) this.hide();
					}
					break;
				case 9:
					// tab
					this.focusDate = null;
					this.viewDate = this.dates.get(-1) || this.viewDate;
					this.fill();
					this.hide();
					break;
			}
			if (dateChanged) {
				if (this.dates.length) this._trigger('changeDate');else this._trigger('clearDate');
				if (this.inputField) {
					this.inputField.change();
				}
			}
		},

		showMode: function showMode(dir) {
			if (dir) {
				this.viewMode = Math.max(this.o.minViewMode, Math.min(this.o.maxViewMode, this.viewMode + dir));
			}
			this.picker.children('div').hide().filter('.datepicker-' + DPGlobal.modes[this.viewMode].clsName).show();
			this.updateNavArrows();
		}
	};

	var DateRangePicker = function DateRangePicker(element, options) {
		$(element).data('datepicker', this);
		this.element = $(element);
		this.inputs = $.map(options.inputs, function (i) {
			return i.jquery ? i[0] : i;
		});
		delete options.inputs;

		datepickerPlugin.call($(this.inputs), options).on('changeDate', $.proxy(this.dateUpdated, this));

		this.pickers = $.map(this.inputs, function (i) {
			return $(i).data('datepicker');
		});
		this.updateDates();
	};
	DateRangePicker.prototype = {
		updateDates: function updateDates() {
			this.dates = $.map(this.pickers, function (i) {
				return i.getUTCDate();
			});
			this.updateRanges();
		},
		updateRanges: function updateRanges() {
			var range = $.map(this.dates, function (d) {
				return d.valueOf();
			});
			$.each(this.pickers, function (i, p) {
				p.setRange(range);
			});
		},
		dateUpdated: function dateUpdated(e) {
			// `this.updating` is a workaround for preventing infinite recursion
			// between `changeDate` triggering and `setUTCDate` calling.  Until
			// there is a better mechanism.
			if (this.updating) return;
			this.updating = true;

			var dp = $(e.target).data('datepicker');

			if (typeof dp === "undefined") {
				return;
			}

			var new_date = dp.getUTCDate(),
			    i = $.inArray(e.target, this.inputs),
			    j = i - 1,
			    k = i + 1,
			    l = this.inputs.length;
			if (i === -1) return;

			$.each(this.pickers, function (i, p) {
				if (!p.getUTCDate()) p.setUTCDate(new_date);
			});

			if (new_date < this.dates[j]) {
				// Date being moved earlier/left
				while (j >= 0 && new_date < this.dates[j]) {
					this.pickers[j--].setUTCDate(new_date);
				}
			} else if (new_date > this.dates[k]) {
				// Date being moved later/right
				while (k < l && new_date > this.dates[k]) {
					this.pickers[k++].setUTCDate(new_date);
				}
			}
			this.updateDates();

			delete this.updating;
		},
		remove: function remove() {
			$.map(this.pickers, function (p) {
				p.remove();
			});
			delete this.element.data().datepicker;
		}
	};

	function opts_from_el(el, prefix) {
		// Derive options from element data-attrs
		var data = $(el).data(),
		    out = {},
		    inkey,
		    replace = new RegExp('^' + prefix.toLowerCase() + '([A-Z])');
		prefix = new RegExp('^' + prefix.toLowerCase());
		function re_lower(_, a) {
			return a.toLowerCase();
		}
		for (var key in data) {
			if (prefix.test(key)) {
				inkey = key.replace(replace, re_lower);
				out[inkey] = data[key];
			}
		}return out;
	}

	function opts_from_locale(lang) {
		// Derive options from locale plugins
		var out = {};
		// Check if "de-DE" style date is available, if not language should
		// fallback to 2 letter code eg "de"
		if (!dates[lang]) {
			lang = lang.split('-')[0];
			if (!dates[lang]) return;
		}
		var d = dates[lang];
		$.each(locale_opts, function (i, k) {
			if (k in d) out[k] = d[k];
		});
		return out;
	}

	var old = $.fn.datepicker;
	var datepickerPlugin = function datepickerPlugin(option) {
		var args = Array.apply(null, arguments);
		args.shift();
		var internal_return;
		this.each(function () {
			var $this = $(this),
			    data = $this.data('datepicker'),
			    options = (typeof option === "undefined" ? "undefined" : _typeof(option)) === 'object' && option;
			if (!data) {
				var elopts = opts_from_el(this, 'date'),

				// Preliminary otions
				xopts = $.extend({}, defaults, elopts, options),
				    locopts = opts_from_locale(xopts.language),

				// Options priority: js args, data-attrs, locales, defaults
				opts = $.extend({}, defaults, locopts, elopts, options);
				if ($this.hasClass('input-daterange') || opts.inputs) {
					$.extend(opts, {
						inputs: opts.inputs || $this.find('input').toArray()
					});
					data = new DateRangePicker(this, opts);
				} else {
					data = new Datepicker(this, opts);
				}
				$this.data('datepicker', data);
			}
			if (typeof option === 'string' && typeof data[option] === 'function') {
				internal_return = data[option].apply(data, args);
			}
		});

		if (internal_return === undefined || internal_return instanceof Datepicker || internal_return instanceof DateRangePicker) return this;

		if (this.length > 1) throw new Error('Using only allowed for the collection of a single element (' + option + ' function)');else return internal_return;
	};
	$.fn.datepicker = datepickerPlugin;

	var defaults = $.fn.datepicker.defaults = {
		assumeNearbyYear: false,
		autoclose: false,
		beforeShowDay: $.noop,
		beforeShowMonth: $.noop,
		beforeShowYear: $.noop,
		beforeShowDecade: $.noop,
		beforeShowCentury: $.noop,
		calendarWeeks: false,
		clearBtn: false,
		toggleActive: false,
		daysOfWeekDisabled: [],
		daysOfWeekHighlighted: [],
		datesDisabled: [],
		endDate: Infinity,
		forceParse: true,
		format: 'mm/dd/yyyy',
		keyboardNavigation: true,
		language: 'en',
		minViewMode: 0,
		maxViewMode: 4,
		multidate: false,
		multidateSeparator: ',',
		orientation: "auto",
		rtl: false,
		startDate: -Infinity,
		startView: 0,
		todayBtn: false,
		todayHighlight: false,
		weekStart: 0,
		disableTouchKeyboard: false,
		enableOnReadonly: true,
		showOnFocus: true,
		zIndexOffset: 10,
		container: 'body',
		immediateUpdates: false,
		title: '',
		templates: {
			leftArrow: '&laquo;',
			rightArrow: '&raquo;'
		}
	};
	var locale_opts = $.fn.datepicker.locale_opts = ['format', 'rtl', 'weekStart'];
	$.fn.datepicker.Constructor = Datepicker;
	var dates = $.fn.datepicker.dates = {
		en: {
			days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
			daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
			months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			today: "Today",
			clear: "Clear",
			titleFormat: "MM yyyy"
		}
	};

	var DPGlobal = {
		modes: [{
			clsName: 'days',
			navFnc: 'Month',
			navStep: 1
		}, {
			clsName: 'months',
			navFnc: 'FullYear',
			navStep: 1
		}, {
			clsName: 'years',
			navFnc: 'FullYear',
			navStep: 10
		}, {
			clsName: 'decades',
			navFnc: 'FullDecade',
			navStep: 100
		}, {
			clsName: 'centuries',
			navFnc: 'FullCentury',
			navStep: 1000
		}],
		isLeapYear: function isLeapYear(year) {
			return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
		},
		getDaysInMonth: function getDaysInMonth(year, month) {
			return [31, DPGlobal.isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
		},
		validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
		nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
		parseFormat: function parseFormat(format) {
			if (typeof format.toValue === 'function' && typeof format.toDisplay === 'function') return format;
			// IE treats \0 as a string end in inputs (truncating the value),
			// so it's a bad format delimiter, anyway
			var separators = format.replace(this.validParts, '\0').split('\0'),
			    parts = format.match(this.validParts);
			if (!separators || !separators.length || !parts || parts.length === 0) {
				throw new Error("Invalid date format.");
			}
			return { separators: separators, parts: parts };
		},
		parseDate: function parseDate(date, format, language, assumeNearby) {
			if (!date) return undefined;
			if (date instanceof Date) return date;
			if (typeof format === 'string') format = DPGlobal.parseFormat(format);
			if (format.toValue) return format.toValue(date, format, language);
			var part_re = /([\-+]\d+)([dmwy])/,
			    parts = date.match(/([\-+]\d+)([dmwy])/g),
			    fn_map = {
				d: 'moveDay',
				m: 'moveMonth',
				w: 'moveWeek',
				y: 'moveYear'
			},
			    dateAliases = {
				yesterday: '-1d',
				today: '+0d',
				tomorrow: '+1d'
			},
			    part,
			    dir,
			    i,
			    fn;
			if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(date)) {
				date = new Date();
				for (i = 0; i < parts.length; i++) {
					part = part_re.exec(parts[i]);
					dir = parseInt(part[1]);
					fn = fn_map[part[2]];
					date = Datepicker.prototype[fn](date, dir);
				}
				return UTCDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
			}

			if (typeof dateAliases[date] !== 'undefined') {
				date = dateAliases[date];
				parts = date.match(/([\-+]\d+)([dmwy])/g);

				if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(date)) {
					date = new Date();
					for (i = 0; i < parts.length; i++) {
						part = part_re.exec(parts[i]);
						dir = parseInt(part[1]);
						fn = fn_map[part[2]];
						date = Datepicker.prototype[fn](date, dir);
					}

					return UTCDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
				}
			}

			parts = date && date.match(this.nonpunctuation) || [];
			date = new Date();

			function applyNearbyYear(year, threshold) {
				if (threshold === true) threshold = 10;

				// if year is 2 digits or less, than the user most likely is trying to get a recent century
				if (year < 100) {
					year += 2000;
					// if the new year is more than threshold years in advance, use last century
					if (year > new Date().getFullYear() + threshold) {
						year -= 100;
					}
				}

				return year;
			}

			var parsed = {},
			    setters_order = ['yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'd', 'dd'],
			    setters_map = {
				yyyy: function yyyy(d, v) {
					return d.setUTCFullYear(assumeNearby ? applyNearbyYear(v, assumeNearby) : v);
				},
				yy: function yy(d, v) {
					return d.setUTCFullYear(assumeNearby ? applyNearbyYear(v, assumeNearby) : v);
				},
				m: function m(d, v) {
					if (isNaN(d)) return d;
					v -= 1;
					while (v < 0) {
						v += 12;
					}v %= 12;
					d.setUTCMonth(v);
					while (d.getUTCMonth() !== v) {
						d.setUTCDate(d.getUTCDate() - 1);
					}return d;
				},
				d: function d(_d, v) {
					return _d.setUTCDate(v);
				}
			},
			    val,
			    filtered;
			setters_map['M'] = setters_map['MM'] = setters_map['mm'] = setters_map['m'];
			setters_map['dd'] = setters_map['d'];
			date = UTCToday();
			var fparts = format.parts.slice();
			// Remove noop parts
			if (parts.length !== fparts.length) {
				fparts = $(fparts).filter(function (i, p) {
					return $.inArray(p, setters_order) !== -1;
				}).toArray();
			}
			// Process remainder
			function match_part() {
				var m = this.slice(0, parts[i].length),
				    p = parts[i].slice(0, m.length);
				return m.toLowerCase() === p.toLowerCase();
			}
			if (parts.length === fparts.length) {
				var cnt;
				for (i = 0, cnt = fparts.length; i < cnt; i++) {
					val = parseInt(parts[i], 10);
					part = fparts[i];
					if (isNaN(val)) {
						switch (part) {
							case 'MM':
								filtered = $(dates[language].months).filter(match_part);
								val = $.inArray(filtered[0], dates[language].months) + 1;
								break;
							case 'M':
								filtered = $(dates[language].monthsShort).filter(match_part);
								val = $.inArray(filtered[0], dates[language].monthsShort) + 1;
								break;
						}
					}
					parsed[part] = val;
				}
				var _date, s;
				for (i = 0; i < setters_order.length; i++) {
					s = setters_order[i];
					if (s in parsed && !isNaN(parsed[s])) {
						_date = new Date(date);
						setters_map[s](_date, parsed[s]);
						if (!isNaN(_date)) date = _date;
					}
				}
			}
			return date;
		},
		formatDate: function formatDate(date, format, language) {
			if (!date) return '';
			if (typeof format === 'string') format = DPGlobal.parseFormat(format);
			if (format.toDisplay) return format.toDisplay(date, format, language);
			var val = {
				d: date.getUTCDate(),
				D: dates[language].daysShort[date.getUTCDay()],
				DD: dates[language].days[date.getUTCDay()],
				m: date.getUTCMonth() + 1,
				M: dates[language].monthsShort[date.getUTCMonth()],
				MM: dates[language].months[date.getUTCMonth()],
				yy: date.getUTCFullYear().toString().substring(2),
				yyyy: date.getUTCFullYear()
			};
			val.dd = (val.d < 10 ? '0' : '') + val.d;
			val.mm = (val.m < 10 ? '0' : '') + val.m;
			date = [];
			var seps = $.extend([], format.separators);
			for (var i = 0, cnt = format.parts.length; i <= cnt; i++) {
				if (seps.length) date.push(seps.shift());
				date.push(val[format.parts[i]]);
			}
			return date.join('');
		},
		headTemplate: '<thead>' + '<tr>' + '<th colspan="7" class="datepicker-title"></th>' + '</tr>' + '<tr>' + '<th class="prev">&laquo;</th>' + '<th colspan="5" class="datepicker-switch"></th>' + '<th class="next">&raquo;</th>' + '</tr>' + '</thead>',
		contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
		footTemplate: '<tfoot>' + '<tr>' + '<th colspan="7" class="today"></th>' + '</tr>' + '<tr>' + '<th colspan="7" class="clear"></th>' + '</tr>' + '</tfoot>'
	};
	DPGlobal.template = '<div class="datepicker">' + '<div class="datepicker-days">' + '<table class="table-condensed">' + DPGlobal.headTemplate + '<tbody></tbody>' + DPGlobal.footTemplate + '</table>' + '</div>' + '<div class="datepicker-months">' + '<table class="table-condensed">' + DPGlobal.headTemplate + DPGlobal.contTemplate + DPGlobal.footTemplate + '</table>' + '</div>' + '<div class="datepicker-years">' + '<table class="table-condensed">' + DPGlobal.headTemplate + DPGlobal.contTemplate + DPGlobal.footTemplate + '</table>' + '</div>' + '<div class="datepicker-decades">' + '<table class="table-condensed">' + DPGlobal.headTemplate + DPGlobal.contTemplate + DPGlobal.footTemplate + '</table>' + '</div>' + '<div class="datepicker-centuries">' + '<table class="table-condensed">' + DPGlobal.headTemplate + DPGlobal.contTemplate + DPGlobal.footTemplate + '</table>' + '</div>' + '</div>';

	$.fn.datepicker.DPGlobal = DPGlobal;

	/* DATEPICKER NO CONFLICT
 * =================== */

	$.fn.datepicker.noConflict = function () {
		$.fn.datepicker = old;
		return this;
	};

	/* DATEPICKER VERSION
  * =================== */
	$.fn.datepicker.version = '1.6.1';

	/* DATEPICKER DATA-API
 * ================== */

	$(document).on('focus.datepicker.data-api click.datepicker.data-api', '[data-provide="datepicker"]', function (e) {
		var $this = $(this);
		if ($this.data('datepicker')) return;
		e.preventDefault();
		// component click requires us to explicitly show it
		datepickerPlugin.call($this, 'show');
	});
	$(function () {
		datepickerPlugin.call($('[data-provide="datepicker-inline"]'));
	});
});

/***/ }),

/***/ 175:
/***/ (function(module, exports) {

/* Chosen v1.4.0 | (c) 2011-2015 by Harvest | MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md */
(function () {
  var a,
      AbstractChosen,
      Chosen,
      SelectParser,
      b,
      c = {}.hasOwnProperty,
      d = function d(a, b) {
    function d() {
      this.constructor = a;
    }for (var e in b) {
      c.call(b, e) && (a[e] = b[e]);
    }return d.prototype = b.prototype, a.prototype = new d(), a.__super__ = b.prototype, a;
  };SelectParser = function () {
    function SelectParser() {
      this.options_index = 0, this.parsed = [];
    }return SelectParser.prototype.add_node = function (a) {
      return "OPTGROUP" === a.nodeName.toUpperCase() ? this.add_group(a) : this.add_option(a);
    }, SelectParser.prototype.add_group = function (a) {
      var b, c, d, e, f, g;for (b = this.parsed.length, this.parsed.push({ array_index: b, group: !0, label: this.escapeExpression(a.label), title: a.title ? a.title : void 0, children: 0, disabled: a.disabled, classes: a.className }), f = a.childNodes, g = [], d = 0, e = f.length; e > d; d++) {
        c = f[d], g.push(this.add_option(c, b, a.disabled));
      }return g;
    }, SelectParser.prototype.add_option = function (a, b, c) {
      return "OPTION" === a.nodeName.toUpperCase() ? ("" !== a.text ? (null != b && (this.parsed[b].children += 1), this.parsed.push({ array_index: this.parsed.length, options_index: this.options_index, value: a.value, text: a.text, html: a.innerHTML, title: a.title ? a.title : void 0, selected: a.selected, disabled: c === !0 ? c : a.disabled, group_array_index: b, group_label: null != b ? this.parsed[b].label : null, classes: a.className, style: a.style.cssText })) : this.parsed.push({ array_index: this.parsed.length, options_index: this.options_index, empty: !0 }), this.options_index += 1) : void 0;
    }, SelectParser.prototype.escapeExpression = function (a) {
      var b, c;return null == a || a === !1 ? "" : /[\&\<\>\"\'\`]/.test(a) ? (b = { "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" }, c = /&(?!\w+;)|[\<\>\"\'\`]/g, a.replace(c, function (a) {
        return b[a] || "&amp;";
      })) : a;
    }, SelectParser;
  }(), SelectParser.select_to_array = function (a) {
    var b, c, d, e, f;for (c = new SelectParser(), f = a.childNodes, d = 0, e = f.length; e > d; d++) {
      b = f[d], c.add_node(b);
    }return c.parsed;
  }, AbstractChosen = function () {
    function AbstractChosen(a, b) {
      this.form_field = a, this.options = null != b ? b : {}, AbstractChosen.browser_is_supported() && (this.is_multiple = this.form_field.multiple, this.set_default_text(), this.set_default_values(), this.setup(), this.set_up_html(), this.register_observers(), this.on_ready());
    }return AbstractChosen.prototype.set_default_values = function () {
      var a = this;return this.click_test_action = function (b) {
        return a.test_active_click(b);
      }, this.activate_action = function (b) {
        return a.activate_field(b);
      }, this.active_field = !1, this.mouse_on_container = !1, this.results_showing = !1, this.result_highlighted = null, this.allow_single_deselect = null != this.options.allow_single_deselect && null != this.form_field.options[0] && "" === this.form_field.options[0].text ? this.options.allow_single_deselect : !1, this.disable_search_threshold = this.options.disable_search_threshold || 0, this.disable_search = this.options.disable_search || !1, this.enable_split_word_search = null != this.options.enable_split_word_search ? this.options.enable_split_word_search : !0, this.group_search = null != this.options.group_search ? this.options.group_search : !0, this.search_contains = this.options.search_contains || !1, this.single_backstroke_delete = null != this.options.single_backstroke_delete ? this.options.single_backstroke_delete : !0, this.max_selected_options = this.options.max_selected_options || 1 / 0, this.inherit_select_classes = this.options.inherit_select_classes || !1, this.display_selected_options = null != this.options.display_selected_options ? this.options.display_selected_options : !0, this.display_disabled_options = null != this.options.display_disabled_options ? this.options.display_disabled_options : !0, this.include_group_label_in_selected = this.options.include_group_label_in_selected || !1;
    }, AbstractChosen.prototype.set_default_text = function () {
      return this.default_text = this.form_field.getAttribute("data-placeholder") ? this.form_field.getAttribute("data-placeholder") : this.is_multiple ? this.options.placeholder_text_multiple || this.options.placeholder_text || AbstractChosen.default_multiple_text : this.options.placeholder_text_single || this.options.placeholder_text || AbstractChosen.default_single_text, this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || AbstractChosen.default_no_result_text;
    }, AbstractChosen.prototype.choice_label = function (a) {
      return this.include_group_label_in_selected && null != a.group_label ? "<b class='group-name'>" + a.group_label + "</b>" + a.html : a.html;
    }, AbstractChosen.prototype.mouse_enter = function () {
      return this.mouse_on_container = !0;
    }, AbstractChosen.prototype.mouse_leave = function () {
      return this.mouse_on_container = !1;
    }, AbstractChosen.prototype.input_focus = function () {
      var a = this;if (this.is_multiple) {
        if (!this.active_field) return setTimeout(function () {
          return a.container_mousedown();
        }, 50);
      } else if (!this.active_field) return this.activate_field();
    }, AbstractChosen.prototype.input_blur = function () {
      var a = this;return this.mouse_on_container ? void 0 : (this.active_field = !1, setTimeout(function () {
        return a.blur_test();
      }, 100));
    }, AbstractChosen.prototype.results_option_build = function (a) {
      var b, c, d, e, f;for (b = "", f = this.results_data, d = 0, e = f.length; e > d; d++) {
        c = f[d], b += c.group ? this.result_add_group(c) : this.result_add_option(c), (null != a ? a.first : void 0) && (c.selected && this.is_multiple ? this.choice_build(c) : c.selected && !this.is_multiple && this.single_set_selected_text(c.html));
      }return b;
    }, AbstractChosen.prototype.result_add_option = function (a) {
      var b, c;return a.search_match ? this.include_option_in_results(a) ? (b = [], a.disabled || a.selected && this.is_multiple || b.push("active-result"), !a.disabled || a.selected && this.is_multiple || b.push("disabled-result"), a.selected && b.push("result-selected"), null != a.group_array_index && b.push("group-option"), "" !== a.classes && b.push(a.classes), c = document.createElement("li"), c.className = b.join(" "), c.style.cssText = a.style, c.setAttribute("data-option-array-index", a.array_index), c.innerHTML = a.search_text, a.title && (c.title = a.title), this.outerHTML(c)) : "" : "";
    }, AbstractChosen.prototype.result_add_group = function (a) {
      var b, c;return a.search_match || a.group_match ? a.active_options > 0 ? (b = [], b.push("group-result"), a.classes && b.push(a.classes), c = document.createElement("li"), c.className = b.join(" "), c.innerHTML = a.search_text, a.title && (c.title = a.title), this.outerHTML(c)) : "" : "";
    }, AbstractChosen.prototype.results_update_field = function () {
      return this.set_default_text(), this.is_multiple || this.results_reset_cleanup(), this.result_clear_highlight(), this.results_build(), this.results_showing ? this.winnow_results() : void 0;
    }, AbstractChosen.prototype.reset_single_select_options = function () {
      var a, b, c, d, e;for (d = this.results_data, e = [], b = 0, c = d.length; c > b; b++) {
        a = d[b], a.selected ? e.push(a.selected = !1) : e.push(void 0);
      }return e;
    }, AbstractChosen.prototype.results_toggle = function () {
      return this.results_showing ? this.results_hide() : this.results_show();
    }, AbstractChosen.prototype.results_search = function () {
      return this.results_showing ? this.winnow_results() : this.results_show();
    }, AbstractChosen.prototype.winnow_results = function () {
      var a, b, c, d, e, f, g, h, i, j, k, l;for (this.no_results_clear(), d = 0, f = this.get_search_text(), a = f.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), i = new RegExp(a, "i"), c = this.get_search_regex(a), l = this.results_data, j = 0, k = l.length; k > j; j++) {
        b = l[j], b.search_match = !1, e = null, this.include_option_in_results(b) && (b.group && (b.group_match = !1, b.active_options = 0), null != b.group_array_index && this.results_data[b.group_array_index] && (e = this.results_data[b.group_array_index], 0 === e.active_options && e.search_match && (d += 1), e.active_options += 1), (!b.group || this.group_search) && (b.search_text = b.group ? b.label : b.html, b.search_match = this.search_string_match(b.search_text, c), b.search_match && !b.group && (d += 1), b.search_match ? (f.length && (g = b.search_text.search(i), h = b.search_text.substr(0, g + f.length) + "</em>" + b.search_text.substr(g + f.length), b.search_text = h.substr(0, g) + "<em>" + h.substr(g)), null != e && (e.group_match = !0)) : null != b.group_array_index && this.results_data[b.group_array_index].search_match && (b.search_match = !0)));
      }return this.result_clear_highlight(), 1 > d && f.length ? (this.update_results_content(""), this.no_results(f)) : (this.update_results_content(this.results_option_build()), this.winnow_results_set_highlight());
    }, AbstractChosen.prototype.get_search_regex = function (a) {
      var b;return b = this.search_contains ? "" : "^", new RegExp(b + a, "i");
    }, AbstractChosen.prototype.search_string_match = function (a, b) {
      var c, d, e, f;if (b.test(a)) return !0;if (this.enable_split_word_search && (a.indexOf(" ") >= 0 || 0 === a.indexOf("[")) && (d = a.replace(/\[|\]/g, "").split(" "), d.length)) for (e = 0, f = d.length; f > e; e++) {
        if (c = d[e], b.test(c)) return !0;
      }
    }, AbstractChosen.prototype.choices_count = function () {
      var a, b, c, d;if (null != this.selected_option_count) return this.selected_option_count;for (this.selected_option_count = 0, d = this.form_field.options, b = 0, c = d.length; c > b; b++) {
        a = d[b], a.selected && (this.selected_option_count += 1);
      }return this.selected_option_count;
    }, AbstractChosen.prototype.choices_click = function (a) {
      return a.preventDefault(), this.results_showing || this.is_disabled ? void 0 : this.results_show();
    }, AbstractChosen.prototype.keyup_checker = function (a) {
      var b, c;switch (b = null != (c = a.which) ? c : a.keyCode, this.search_field_scale(), b) {case 8:
          if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0) return this.keydown_backstroke();if (!this.pending_backstroke) return this.result_clear_highlight(), this.results_search();break;case 13:
          if (a.preventDefault(), this.results_showing) return this.result_select(a);break;case 27:
          return this.results_showing && this.results_hide(), !0;case 9:case 38:case 40:case 16:case 91:case 17:
          break;default:
          return this.results_search();}
    }, AbstractChosen.prototype.clipboard_event_checker = function () {
      var a = this;return setTimeout(function () {
        return a.results_search();
      }, 50);
    }, AbstractChosen.prototype.container_width = function () {
      return null != this.options.width ? this.options.width : "" + this.form_field.offsetWidth + "px";
    }, AbstractChosen.prototype.include_option_in_results = function (a) {
      return this.is_multiple && !this.display_selected_options && a.selected ? !1 : !this.display_disabled_options && a.disabled ? !1 : a.empty ? !1 : !0;
    }, AbstractChosen.prototype.search_results_touchstart = function (a) {
      return this.touch_started = !0, this.search_results_mouseover(a);
    }, AbstractChosen.prototype.search_results_touchmove = function (a) {
      return this.touch_started = !1, this.search_results_mouseout(a);
    }, AbstractChosen.prototype.search_results_touchend = function (a) {
      return this.touch_started ? this.search_results_mouseup(a) : void 0;
    }, AbstractChosen.prototype.outerHTML = function (a) {
      var b;return a.outerHTML ? a.outerHTML : (b = document.createElement("div"), b.appendChild(a), b.innerHTML);
    }, AbstractChosen.browser_is_supported = function () {
      return "Microsoft Internet Explorer" === window.navigator.appName ? document.documentMode >= 8 : /iP(od|hone)/i.test(window.navigator.userAgent) ? !1 : /Android/i.test(window.navigator.userAgent) && /Mobile/i.test(window.navigator.userAgent) ? !1 : !0;
    }, AbstractChosen.default_multiple_text = "Select Some Options", AbstractChosen.default_single_text = "Select an Option", AbstractChosen.default_no_result_text = "No results match", AbstractChosen;
  }(), a = jQuery, a.fn.extend({ chosen: function chosen(b) {
      return AbstractChosen.browser_is_supported() ? this.each(function () {
        var c, d;c = a(this), d = c.data("chosen"), "destroy" === b && d instanceof Chosen ? d.destroy() : d instanceof Chosen || c.data("chosen", new Chosen(this, b));
      }) : this;
    } }), Chosen = function (c) {
    function Chosen() {
      return b = Chosen.__super__.constructor.apply(this, arguments);
    }return d(Chosen, c), Chosen.prototype.setup = function () {
      return this.form_field_jq = a(this.form_field), this.current_selectedIndex = this.form_field.selectedIndex, this.is_rtl = this.form_field_jq.hasClass("chosen-rtl");
    }, Chosen.prototype.set_up_html = function () {
      var b, c;return b = ["chosen-container"], b.push("chosen-container-" + (this.is_multiple ? "multi" : "single")), this.inherit_select_classes && this.form_field.className && b.push(this.form_field.className), this.is_rtl && b.push("chosen-rtl"), c = { "class": b.join(" "), style: "width: " + this.container_width() + ";", title: this.form_field.title }, this.form_field.id.length && (c.id = this.form_field.id.replace(/[^\w]/g, "_") + "_chosen"), this.container = a("<div />", c), this.is_multiple ? this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>') : this.container.html('<a class="chosen-single chosen-default" tabindex="-1"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>'), this.form_field_jq.hide().after(this.container), this.dropdown = this.container.find("div.chosen-drop").first(), this.search_field = this.container.find("input").first(), this.search_results = this.container.find("ul.chosen-results").first(), this.search_field_scale(), this.search_no_results = this.container.find("li.no-results").first(), this.is_multiple ? (this.search_choices = this.container.find("ul.chosen-choices").first(), this.search_container = this.container.find("li.search-field").first()) : (this.search_container = this.container.find("div.chosen-search").first(), this.selected_item = this.container.find(".chosen-single").first()), this.results_build(), this.set_tab_index(), this.set_label_behavior();
    }, Chosen.prototype.on_ready = function () {
      return this.form_field_jq.trigger("chosen:ready", { chosen: this });
    }, Chosen.prototype.register_observers = function () {
      var a = this;return this.container.bind("touchstart.chosen", function (b) {
        a.container_mousedown(b);
      }), this.container.bind("touchend.chosen", function (b) {
        a.container_mouseup(b);
      }), this.container.bind("mousedown.chosen", function (b) {
        a.container_mousedown(b);
      }), this.container.bind("mouseup.chosen", function (b) {
        a.container_mouseup(b);
      }), this.container.bind("mouseenter.chosen", function (b) {
        a.mouse_enter(b);
      }), this.container.bind("mouseleave.chosen", function (b) {
        a.mouse_leave(b);
      }), this.search_results.bind("mouseup.chosen", function (b) {
        a.search_results_mouseup(b);
      }), this.search_results.bind("mouseover.chosen", function (b) {
        a.search_results_mouseover(b);
      }), this.search_results.bind("mouseout.chosen", function (b) {
        a.search_results_mouseout(b);
      }), this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen", function (b) {
        a.search_results_mousewheel(b);
      }), this.search_results.bind("touchstart.chosen", function (b) {
        a.search_results_touchstart(b);
      }), this.search_results.bind("touchmove.chosen", function (b) {
        a.search_results_touchmove(b);
      }), this.search_results.bind("touchend.chosen", function (b) {
        a.search_results_touchend(b);
      }), this.form_field_jq.bind("chosen:updated.chosen", function (b) {
        a.results_update_field(b);
      }), this.form_field_jq.bind("chosen:activate.chosen", function (b) {
        a.activate_field(b);
      }), this.form_field_jq.bind("chosen:open.chosen", function (b) {
        a.container_mousedown(b);
      }), this.form_field_jq.bind("chosen:close.chosen", function (b) {
        a.input_blur(b);
      }), this.search_field.bind("blur.chosen", function (b) {
        a.input_blur(b);
      }), this.search_field.bind("keyup.chosen", function (b) {
        a.keyup_checker(b);
      }), this.search_field.bind("keydown.chosen", function (b) {
        a.keydown_checker(b);
      }), this.search_field.bind("focus.chosen", function (b) {
        a.input_focus(b);
      }), this.search_field.bind("cut.chosen", function (b) {
        a.clipboard_event_checker(b);
      }), this.search_field.bind("paste.chosen", function (b) {
        a.clipboard_event_checker(b);
      }), this.is_multiple ? this.search_choices.bind("click.chosen", function (b) {
        a.choices_click(b);
      }) : this.container.bind("click.chosen", function (a) {
        a.preventDefault();
      });
    }, Chosen.prototype.destroy = function () {
      return a(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.search_field[0].tabIndex && (this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex), this.container.remove(), this.form_field_jq.removeData("chosen"), this.form_field_jq.show();
    }, Chosen.prototype.search_field_disabled = function () {
      return this.is_disabled = this.form_field_jq[0].disabled, this.is_disabled ? (this.container.addClass("chosen-disabled"), this.search_field[0].disabled = !0, this.is_multiple || this.selected_item.unbind("focus.chosen", this.activate_action), this.close_field()) : (this.container.removeClass("chosen-disabled"), this.search_field[0].disabled = !1, this.is_multiple ? void 0 : this.selected_item.bind("focus.chosen", this.activate_action));
    }, Chosen.prototype.container_mousedown = function (b) {
      return this.is_disabled || (b && "mousedown" === b.type && !this.results_showing && b.preventDefault(), null != b && a(b.target).hasClass("search-choice-close")) ? void 0 : (this.active_field ? this.is_multiple || !b || a(b.target)[0] !== this.selected_item[0] && !a(b.target).parents("a.chosen-single").length || (b.preventDefault(), this.results_toggle()) : (this.is_multiple && this.search_field.val(""), a(this.container[0].ownerDocument).bind("click.chosen", this.click_test_action), this.results_show()), this.activate_field());
    }, Chosen.prototype.container_mouseup = function (a) {
      return "ABBR" !== a.target.nodeName || this.is_disabled ? void 0 : this.results_reset(a);
    }, Chosen.prototype.search_results_mousewheel = function (a) {
      var b;return a.originalEvent && (b = a.originalEvent.deltaY || -a.originalEvent.wheelDelta || a.originalEvent.detail), null != b ? (a.preventDefault(), "DOMMouseScroll" === a.type && (b = 40 * b), this.search_results.scrollTop(b + this.search_results.scrollTop())) : void 0;
    }, Chosen.prototype.blur_test = function () {
      return !this.active_field && this.container.hasClass("chosen-container-active") ? this.close_field() : void 0;
    }, Chosen.prototype.close_field = function () {
      return a(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.active_field = !1, this.results_hide(), this.container.removeClass("chosen-container-active"), this.clear_backstroke(), this.show_search_field_default(), this.search_field_scale();
    }, Chosen.prototype.activate_field = function () {
      return this.container.addClass("chosen-container-active"), this.active_field = !0, this.search_field.val(this.search_field.val()), this.search_field.focus();
    }, Chosen.prototype.test_active_click = function (b) {
      var c;return c = a(b.target).closest(".chosen-container"), c.length && this.container[0] === c[0] ? this.active_field = !0 : this.close_field();
    }, Chosen.prototype.results_build = function () {
      return this.parsing = !0, this.selected_option_count = null, this.results_data = SelectParser.select_to_array(this.form_field), this.is_multiple ? this.search_choices.find("li.search-choice").remove() : this.is_multiple || (this.single_set_selected_text(), this.disable_search || this.form_field.options.length <= this.disable_search_threshold ? (this.search_field[0].readOnly = !0, this.container.addClass("chosen-container-single-nosearch")) : (this.search_field[0].readOnly = !1, this.container.removeClass("chosen-container-single-nosearch"))), this.update_results_content(this.results_option_build({ first: !0 })), this.search_field_disabled(), this.show_search_field_default(), this.search_field_scale(), this.parsing = !1;
    }, Chosen.prototype.result_do_highlight = function (a) {
      var b, c, d, e, f;if (a.length) {
        if (this.result_clear_highlight(), this.result_highlight = a, this.result_highlight.addClass("highlighted"), d = parseInt(this.search_results.css("maxHeight"), 10), f = this.search_results.scrollTop(), e = d + f, c = this.result_highlight.position().top + this.search_results.scrollTop(), b = c + this.result_highlight.outerHeight(), b >= e) return this.search_results.scrollTop(b - d > 0 ? b - d : 0);if (f > c) return this.search_results.scrollTop(c);
      }
    }, Chosen.prototype.result_clear_highlight = function () {
      return this.result_highlight && this.result_highlight.removeClass("highlighted"), this.result_highlight = null;
    }, Chosen.prototype.results_show = function () {
      return this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", { chosen: this }), !1) : (this.container.addClass("chosen-with-drop"), this.results_showing = !0, this.search_field.focus(), this.search_field.val(this.search_field.val()), this.winnow_results(), this.form_field_jq.trigger("chosen:showing_dropdown", { chosen: this }));
    }, Chosen.prototype.update_results_content = function (a) {
      return this.search_results.html(a);
    }, Chosen.prototype.results_hide = function () {
      return this.results_showing && (this.result_clear_highlight(), this.container.removeClass("chosen-with-drop"), this.form_field_jq.trigger("chosen:hiding_dropdown", { chosen: this })), this.results_showing = !1;
    }, Chosen.prototype.set_tab_index = function () {
      var a;return this.form_field.tabIndex ? (a = this.form_field.tabIndex, this.form_field.tabIndex = -1, this.search_field[0].tabIndex = a) : void 0;
    }, Chosen.prototype.set_label_behavior = function () {
      var b = this;return this.form_field_label = this.form_field_jq.parents("label"), !this.form_field_label.length && this.form_field.id.length && (this.form_field_label = a("label[for='" + this.form_field.id + "']")), this.form_field_label.length > 0 ? this.form_field_label.bind("click.chosen", function (a) {
        return b.is_multiple ? b.container_mousedown(a) : b.activate_field();
      }) : void 0;
    }, Chosen.prototype.show_search_field_default = function () {
      return this.is_multiple && this.choices_count() < 1 && !this.active_field ? (this.search_field.val(this.default_text), this.search_field.addClass("default")) : (this.search_field.val(""), this.search_field.removeClass("default"));
    }, Chosen.prototype.search_results_mouseup = function (b) {
      var c;return c = a(b.target).hasClass("active-result") ? a(b.target) : a(b.target).parents(".active-result").first(), c.length ? (this.result_highlight = c, this.result_select(b), this.search_field.focus()) : void 0;
    }, Chosen.prototype.search_results_mouseover = function (b) {
      var c;return c = a(b.target).hasClass("active-result") ? a(b.target) : a(b.target).parents(".active-result").first(), c ? this.result_do_highlight(c) : void 0;
    }, Chosen.prototype.search_results_mouseout = function (b) {
      return a(b.target).hasClass("active-result") ? this.result_clear_highlight() : void 0;
    }, Chosen.prototype.choice_build = function (b) {
      var c,
          d,
          e = this;return c = a("<li />", { "class": "search-choice" }).html("<span>" + this.choice_label(b) + "</span>"), b.disabled ? c.addClass("search-choice-disabled") : (d = a("<a />", { "class": "search-choice-close", "data-option-array-index": b.array_index }), d.bind("click.chosen", function (a) {
        return e.choice_destroy_link_click(a);
      }), c.append(d)), this.search_container.before(c);
    }, Chosen.prototype.choice_destroy_link_click = function (b) {
      return b.preventDefault(), b.stopPropagation(), this.is_disabled ? void 0 : this.choice_destroy(a(b.target));
    }, Chosen.prototype.choice_destroy = function (a) {
      return this.result_deselect(a[0].getAttribute("data-option-array-index")) ? (this.show_search_field_default(), this.is_multiple && this.choices_count() > 0 && this.search_field.val().length < 1 && this.results_hide(), a.parents("li").first().remove(), this.search_field_scale()) : void 0;
    }, Chosen.prototype.results_reset = function () {
      return this.reset_single_select_options(), this.form_field.options[0].selected = !0, this.single_set_selected_text(), this.show_search_field_default(), this.results_reset_cleanup(), this.form_field_jq.trigger("change"), this.active_field ? this.results_hide() : void 0;
    }, Chosen.prototype.results_reset_cleanup = function () {
      return this.current_selectedIndex = this.form_field.selectedIndex, this.selected_item.find("abbr").remove();
    }, Chosen.prototype.result_select = function (a) {
      var b, c;return this.result_highlight ? (b = this.result_highlight, this.result_clear_highlight(), this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", { chosen: this }), !1) : (this.is_multiple ? b.removeClass("active-result") : this.reset_single_select_options(), c = this.results_data[b[0].getAttribute("data-option-array-index")], c.selected = !0, this.form_field.options[c.options_index].selected = !0, this.selected_option_count = null, this.is_multiple ? this.choice_build(c) : this.single_set_selected_text(this.choice_label(c)), (a.metaKey || a.ctrlKey) && this.is_multiple || this.results_hide(), this.search_field.val(""), (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) && this.form_field_jq.trigger("change", { selected: this.form_field.options[c.options_index].value }), this.current_selectedIndex = this.form_field.selectedIndex, a.preventDefault(), this.search_field_scale())) : void 0;
    }, Chosen.prototype.single_set_selected_text = function (a) {
      return null == a && (a = this.default_text), a === this.default_text ? this.selected_item.addClass("chosen-default") : (this.single_deselect_control_build(), this.selected_item.removeClass("chosen-default")), this.selected_item.find("span").html(a);
    }, Chosen.prototype.result_deselect = function (a) {
      var b;return b = this.results_data[a], this.form_field.options[b.options_index].disabled ? !1 : (b.selected = !1, this.form_field.options[b.options_index].selected = !1, this.selected_option_count = null, this.result_clear_highlight(), this.results_showing && this.winnow_results(), this.form_field_jq.trigger("change", { deselected: this.form_field.options[b.options_index].value }), this.search_field_scale(), !0);
    }, Chosen.prototype.single_deselect_control_build = function () {
      return this.allow_single_deselect ? (this.selected_item.find("abbr").length || this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'), this.selected_item.addClass("chosen-single-with-deselect")) : void 0;
    }, Chosen.prototype.get_search_text = function () {
      return this.search_field.val() === this.default_text ? "" : a("<div/>").text(a.trim(this.search_field.val())).html();
    }, Chosen.prototype.winnow_results_set_highlight = function () {
      var a, b;return b = this.is_multiple ? [] : this.search_results.find(".result-selected.active-result"), a = b.length ? b.first() : this.search_results.find(".active-result").first(), null != a ? this.result_do_highlight(a) : void 0;
    }, Chosen.prototype.no_results = function (b) {
      var c;return c = a('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>'), c.find("span").first().html(b), this.search_results.append(c), this.form_field_jq.trigger("chosen:no_results", { chosen: this });
    }, Chosen.prototype.no_results_clear = function () {
      return this.search_results.find(".no-results").remove();
    }, Chosen.prototype.keydown_arrow = function () {
      var a;return this.results_showing && this.result_highlight ? (a = this.result_highlight.nextAll("li.active-result").first()) ? this.result_do_highlight(a) : void 0 : this.results_show();
    }, Chosen.prototype.keyup_arrow = function () {
      var a;return this.results_showing || this.is_multiple ? this.result_highlight ? (a = this.result_highlight.prevAll("li.active-result"), a.length ? this.result_do_highlight(a.first()) : (this.choices_count() > 0 && this.results_hide(), this.result_clear_highlight())) : void 0 : this.results_show();
    }, Chosen.prototype.keydown_backstroke = function () {
      var a;return this.pending_backstroke ? (this.choice_destroy(this.pending_backstroke.find("a").first()), this.clear_backstroke()) : (a = this.search_container.siblings("li.search-choice").last(), a.length && !a.hasClass("search-choice-disabled") ? (this.pending_backstroke = a, this.single_backstroke_delete ? this.keydown_backstroke() : this.pending_backstroke.addClass("search-choice-focus")) : void 0);
    }, Chosen.prototype.clear_backstroke = function () {
      return this.pending_backstroke && this.pending_backstroke.removeClass("search-choice-focus"), this.pending_backstroke = null;
    }, Chosen.prototype.keydown_checker = function (a) {
      var b, c;switch (b = null != (c = a.which) ? c : a.keyCode, this.search_field_scale(), 8 !== b && this.pending_backstroke && this.clear_backstroke(), b) {case 8:
          this.backstroke_length = this.search_field.val().length;break;case 9:
          this.results_showing && !this.is_multiple && this.result_select(a), this.mouse_on_container = !1;break;case 13:
          this.results_showing && a.preventDefault();break;case 32:
          this.disable_search && a.preventDefault();break;case 38:
          a.preventDefault(), this.keyup_arrow();break;case 40:
          a.preventDefault(), this.keydown_arrow();}
    }, Chosen.prototype.search_field_scale = function () {
      var b, c, d, e, f, g, h, i, j;if (this.is_multiple) {
        for (d = 0, h = 0, f = "position:absolute; left: -1000px; top: -1000px; display:none;", g = ["font-size", "font-style", "font-weight", "font-family", "line-height", "text-transform", "letter-spacing"], i = 0, j = g.length; j > i; i++) {
          e = g[i], f += e + ":" + this.search_field.css(e) + ";";
        }return b = a("<div />", { style: f }), b.text(this.search_field.val()), a("body").append(b), h = b.width() + 25, b.remove(), c = this.container.outerWidth(), h > c - 10 && (h = c - 10), this.search_field.css({ width: h + "px" });
      }
    }, Chosen;
  }(AbstractChosen);
}).call(this);

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Auth_auth__ = __webpack_require__(24);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


__webpack_require__(175);
__webpack_require__(174);



/* harmony default export */ __webpack_exports__["default"] = ({
    mounted: function mounted() {

        this.initializePlugins();
        this.fetchItems();
    },


    data: function data() {
        return {

            newPriceList: {},
            items: [],
            formIsSubmitted: false,
            saveText: '<i class="fa fa-spinner fa-spin"></i> SAVING...',
            buttonText: 'SAVE',

            loading: false,
            error: null,
            // currencies : [
            //         {
            //             code        : 'Philippine Peso',
            //             symbol      : 'PHP' 
            //         },

            // ],
            // itemRate : 'rate_by_percentage',
            itemRate: 'rate_by_value',
            itemsIsToBeInputtedACustomRate: false,
            inputCurrency: null

        };
    },

    methods: {
        addPriceList: function addPriceList() {
            var _this = this;

            this.formIsSubmitted = true;
            this.newPriceList.corp_id = __WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].getCorporationId(this);
            this.newPriceList.currncy_id = 1;
            this.newPriceList.price_list_percentage = 0;
            this.$http.post(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/pricelists/create', this.newPriceList).then(function (response) {
                console.log(response.data);

                return _this.addPriceListItems(response.data);
            }, function (response) {
                this.error = response.statusText;
                this.errors = response.data;
                console.log(response.data);
                this.formIsSubmitted = false;
            });
        },
        addPriceListItems: function addPriceListItems(data) {
            var _this2 = this;

            this.$http.post(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/pricelist-items/create', { rows: this.items, price_list_id: data.price_list_id }).then(function (response) {

                console.log(response.data);
                _this2.loading = false;
                alert("Pricelist been created !");
                _this2.$router.push({ path: '/settings/price-lists/' });
            }, function (response) {

                this.error = response.statusText;
                this.loading = false;
            });
        },
        fetchItems: function fetchItems() {
            var _this3 = this;

            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/items?type=sales').then(function (response) {
                console.log(response.statusText);
                _this3.$set(_this3, 'items', response.data);
                _this3.setPriceListRates();
            });
        },
        setPriceListRates: function setPriceListRates(items) {
            var vm = this;
            this.items.map(function (value, key) {
                vm.items[key].price_list_item_custom_rate = value.retail_price;
            });
        },
        determineItemRate: function determineItemRate() {

            // if ( this.itemRate == 'rate_by_value' ){

            //     this.itemsIsToBeInputtedACustomRate = true
            // }else{
            //     itemsIsToBeInputtedACustomRate  = false
            // }

            // return itemsIsToBeInputtedACustomRate  = false
        },
        startLoadingPlease: function startLoadingPlease() {

            this.loading = true;
        },
        stopLoadingPlease: function stopLoadingPlease() {

            this.loading = false;
        },


        initializePlugins: function initializePlugins() {

            // listen for DOM update
            this.$nextTick(function () {

                this.getPlugins();
            });

            this.getPlugins();
        },

        getPlugins: function getPlugins() {

            $('.chosen-select').chosen({
                width: '50%'
            });

            $('.select-account').chosen({
                width: '100%'
            });

            $('.select-tax').chosen({
                width: '100%'
            });

            $('.select-item').chosen({

                width: '100%'
            });
        }
    }

});

/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('h3', {
    staticClass: "title"
  }, [_vm._v("New Price List")]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.loading),
      expression: "loading"
    }],
    staticStyle: {
      "margin-top": "14rem"
    },
    attrs: {
      "align": "center"
    }
  }, [_c('i', {
    staticClass: "fa fa-spinner fa-spin fa-3x fa-fw"
  }), _vm._v(" "), _c('p', {
    staticStyle: {
      "font-size": "13px",
      "font-family": "Proxima Nova Regular",
      "margin-top": "5px"
    }
  }, [_vm._v(" Preparing data... ")])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.error),
      expression: "error"
    }]
  }, [_vm._v("\n        " + _vm._s(_vm.error) + "\n    ")]), _vm._v(" "), _c('form', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.loading),
      expression: "!loading"
    }],
    staticClass: "form-horizontal",
    attrs: {
      "role": "form"
    },
    on: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        _vm.addPriceList()
      }
    }
  }, [_c('div', {
    staticClass: "form-content"
  }, [_c('div', {
    staticClass: "striped"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-md-2 control-label required-field"
  }, [_vm._v("Price List Name")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-5"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newPriceList.price_list_name),
      expression: "newPriceList.price_list_name"
    }],
    staticClass: "form-control m-b",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.newPriceList.price_list_name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newPriceList.price_list_name = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-md-2 control-label"
  }, [_vm._v("Item Rate")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-5"
  }, [_c('div', {
    staticClass: "radio"
  }, [_c('label', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.itemRate),
      expression: "itemRate"
    }],
    attrs: {
      "name": "optradio",
      "type": "radio",
      "value": "rate_by_value"
    },
    domProps: {
      "checked": _vm._q(_vm.itemRate, "rate_by_value")
    },
    on: {
      "__c": function($event) {
        _vm.itemRate = "rate_by_value"
      }
    }
  }), _vm._v("\n                                Enter the rate individually for each item\n                            ")])])])]), _vm._v(" "), (_vm.itemRate == 'rate_by_value') ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-8"
  }, [_c('table', {
    staticClass: "table table-hover"
  }, [_vm._m(0), _vm._v(" "), _c('tbody', _vm._l((_vm.items), function(item) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(item.item_sku) + " ")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm._f("currency")(item.retail_price, 'PHP', 2)))]), _vm._v(" "), _c('td', [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (item.price_list_item_custom_rate),
        expression: "item.price_list_item_custom_rate"
      }],
      staticClass: "form-control text-right",
      staticStyle: {
        "width": "200px !important"
      },
      attrs: {
        "type": "number",
        "required": "required"
      },
      domProps: {
        "value": (item.price_list_item_custom_rate)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          item.price_list_item_custom_rate = $event.target.value
        },
        "blur": function($event) {
          _vm.$forceUpdate()
        }
      }
    })])])
  }))])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "form-group "
  }, [_c('label', {
    staticClass: "col-md-2 control-label"
  }, [_vm._v("Description")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-5"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newPriceList.price_list_desc),
      expression: "newPriceList.price_list_desc"
    }],
    staticClass: "form-control",
    attrs: {
      "rows": "2"
    },
    domProps: {
      "value": (_vm.newPriceList.price_list_desc)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newPriceList.price_list_desc = $event.target.value
      }
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "container-action-bottom"
  }, [_c('button', {
    staticClass: "btn btn-primary btn-outline",
    attrs: {
      "disabled": _vm.formIsSubmitted,
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.addPriceList()
      }
    }
  }, [(_vm.formIsSubmitted) ? _c('span', {
    domProps: {
      "innerHTML": _vm._s(_vm.saveText)
    }
  }) : _vm._e(), _vm._v(" "), (!_vm.formIsSubmitted) ? _c('span', [_vm._v(" SAVE ")]) : _vm._e()]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-default"
  }, [_vm._v(" Cancel")])])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('th', [_vm._v("SKU")]), _vm._v(" "), _c('th', [_vm._v("ORIGINAL RATE")]), _vm._v(" "), _c('th', [_vm._v("CUSTOM RATE")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7170b276", module.exports)
  }
}

/***/ })

});