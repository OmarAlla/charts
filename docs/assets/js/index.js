// Data
// ================================================================================
let bar_composite_data = {
	"labels": ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
	"datasets": [{
			"color": "orange",
			"values": [50804, 10000, 20000, 61500, 82936.88, 24010, 40000, 60000, 25840, 50804.82, 116820],
			"formatted": ["₹ 0.00", "₹ 0.00", "₹ 0.00", "₹ 61,500.00", "₹ 82,936.88", "₹ 24,010.00", "₹ 0.00", "₹ 0.00", "₹ 25,840.00", "₹ 5,08,048.82", "₹ 1,16,820.00", "₹ 0.00"],
		}
	]
}

let line_composite_data = {
	"labels": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
	"datasets": [{
			"color": "green",
			"values": [25, 40, 30, 35, 48, 52, 17]
		}
	]
};

let more_line_data = {
	0: {values: [25, -90, -30, 35, 48, 52, -17]},
	1: {values: [25, -40, -30, 35, 48, 52, 30]},
	2: {values: [5, 48, -52, 17, -25, 40, 30]},
	3: {
		values: [25, 40, 30, 35, 48, 52, 17]
	},
	4: {
		values: [35, 48, 40, 30, 52, 17, 72]
	},
	5: {
		values: [5, 48, 52, 17, 72, 40, 30]
	},
	6: {
		values: [72, 40, 30, 35, 48, 52, 17]
	},
	7: {
		values: [35, 48, 40, 30, 52, 17, 25]
	},
	8: {
		values: [5, 48, 52, 17, 25, 40, 30]
	},
	9: {
		values: [25, 40, 30, 35, 48, 52, 17]
	},
	10: {
		values: [35, 48, 40, 30, 52, 17, 25]
	},
	11: {
		values: [5, 48, 52, 17, 25, 40, 30]
	}
}

let type_data = {
	"labels": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
	"datasets": [{
			"color": "light-blue",
			"values": [25, 40, 30, 35, 8, 52, 17]
		},
		{
			"color": "violet",
			"values": [25, 50, -10, 15, 18, 32, 27]

		},
		{
			"color": "blue",
			"values": [15, 20, -3, -15, 58, 12, -17]
		}
	]
};

let update_data_all_labels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
	"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed",
	 "Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed"];
let update_data_all_values = [25, 40, 30, 35, 48, 52, 17, 15, 20, -3, -15, 58,
	12, -17, 35, 48, 40, 30, 52, 17, 25, 5, 48, 52, 17];

// We're gonna be shuffling this
let update_data_all_indices = update_data_all_labels.map((d,i) => i);

let get_update_data = (source_array, length=10) => {
	let indices = update_data_all_indices.slice(0, length);
	return indices.map((index) => source_array[index]);
}

let update_data = {
	"labels": get_update_data(update_data_all_labels),
	"datasets": [{
			"color": "red",
			"values": get_update_data(update_data_all_values)
		}
	],
	"specific_values": [
		{
			title: "Altitude",
			// title: "Altiteragrwst ude",
			line_type: "dashed",
			value: 38
		},
	]
};

let events_data = {
	"labels": ["Sun", "Mon", "Tue", "Wed", "Thu"],
	"datasets": [{
			"color": "light-green",
			"values": [25, 40, 30, 35, 48]
		}
	]
};

let aggr_data = {
	"labels": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
	"datasets": [{
			"color": "purple",
			"values": [25, 40, 30, 35, 8, 52, 17]
		},
		{
			"color": "orange",
			"values": [25, 50, -10, 15, 18, 32, 27]

		}
	]
};

let heatmap_data = {
	1479753000.0: 1,
	1498588200.0: 1,
	1499193000.0: 1,
	1499625000.0: 2,
	1500921000.0: 1,
	1501612200.0: 1,
	1502994600.0: 1,
	1503858600.0: 1,
	1504809000.0: 3,
	1505241000.0: 1,
	1506277800.0: 2
};


// Charts
// ================================================================================
let bar_composite_chart = new frappe.chart.FrappeChart ({
	parent: "#chart-composite-1",
	data: bar_composite_data,
	type: 'bar',
	height: 180,
	is_navigable: 1
	// region_fill: 1
})

let line_composite_chart = new frappe.chart.FrappeChart ({
	parent: "#chart-composite-2",
	data: line_composite_data,
	type: 'line',
	height: 180
})

bar_composite_chart.parent.addEventListener('data-select', (e) => {
	line_composite_chart.update_values([more_line_data[e.index]]);
});

let type_chart = new frappe.chart.FrappeChart({
	parent: "#chart-types",
	data: type_data,
	type: 'bar',
	height: 250,
	// region_fill: 1,
	// y_axis_mode: 'tick'
});

let update_chart = new frappe.chart.FrappeChart({
	parent: "#chart-update",
	data: update_data,
	type: 'line',
	height: 250,
	region_fill: 1
});

let events_chart = new frappe.chart.FrappeChart({
	parent: "#chart-events",
	data: events_data,
	type: 'bar',
	height: 250,
	is_navigable: 1,
});

let aggr_chart = new frappe.chart.FrappeChart({
	parent: "#chart-aggr",
	data: aggr_data,
	type: 'line',
	height: 250
});

let heatmap = new frappe.chart.FrappeChart({
	parent: "#chart-heatmap",
	data: heatmap_data,
	type: 'heatmap',
	height: 100,
	// discrete_domains: 1
});

// Events
// ================================================================================

Array.prototype.slice.call(
	document.querySelectorAll('.chart-type-buttons button')
).map(el => {
	el.addEventListener('click', (e) => {
		btn = e.target;
		let type = btn.getAttribute('data-type');

		type_chart = type_chart.get_different_chart(type);

		Array.prototype.slice.call(
			btn.parentNode.querySelectorAll('button')).map(el => {
				el.classList.remove('active');
			});
		btn.classList.add('active');
	});
});

let chart_update_buttons = document.querySelector('.chart-update-buttons');

chart_update_buttons.querySelector('[data-update="random"]').addEventListener("click", (e) => {
	$$.shuffle(update_data_all_indices);
	update_chart.update_values(
		[{values: get_update_data(update_data_all_values)}],
		get_update_data(update_data_all_labels)
	);
});

chart_update_buttons.querySelector('[data-update="add"]').addEventListener("click", (e) => {
	// NOTE: this ought to be problem, labels stay the same after update
	let index = update_chart.x.length; // last index to add
	if(index >= update_data_all_indices.length) return;
	update_chart.add_data_point(
		[update_data_all_values[index]], update_data_all_labels[index]
	);
});

chart_update_buttons.querySelector('[data-update="remove"]').addEventListener("click", (e) => {
	update_chart.remove_data_point();
});

