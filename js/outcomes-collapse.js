$(document).ready(function() {

	var header_elements = $(".collapse-outcomes-header")
	var outcomes = [];

	if (header_elements.length !== 0) {

		// Get all of the outcomes and tables into an array, removing this text from the page (to be put into an accordion in the next steps)
		$.each(header_elements, function(index, header_element) {

			outcome = {};
			outcome["header_id"] = header_element.id;
			outcome["header_text"] = header_element.innerHTML;

			var outcome_content = '';
			var next_elements = [];

			// Find all elements between each outcome header to the next header (or until the footer for the last one)
			if (index !== header_elements.length - 1) {
				next_elements = $("#" + header_element.id).nextUntil("#" + header_elements[index + 1].id);
			} else {
				next_elements = $("#" + header_element.id).nextUntil("footer");
			}

			$.each(next_elements, function(index, content_element) {
				outcome_content += content_element.outerHTML + '\n';
			});

			outcome["content"] = outcome_content;
			outcomes.push(outcome);

			next_elements.remove();
			header_element.remove();
			
		});
	}

	// Create the accordion control that shows the outcomes that the session covers
	if (outcomes.length !== 0) {

		var session_outcomes_div = $("#session-outcomes");
		var accordion_div = $("<div id='accordion'>")
		session_outcomes_div.after(accordion_div);

		var outcome_section_template = '';

		// For each set of outcomes, there will be a panel in the accordion
		$.each(outcomes, function(index, outcome) {

			var added_outcome = $("<div id='card-" + outcome["header_id"] +  "' class='card'></div>");

			// Determine where the outcome panel of the accordion should be placed
			if (index === 0) {
				accordion_div.append(added_outcome);
			} else {
				var last_card_element = $(".card").last();
				last_card_element.after(added_outcome);
			}

			// Load the template that has the card and panel and replace it with appropriate content
			$("#card-" + outcome["header_id"])
				.first()
				.load("../../js/outcomes_template.html", function() {

					outcome_section_template = added_outcome[0].innerHTML;

					var outcome_section_content = outcome_section_template.replace(/HEADING_ID/g, "heading-" + outcome["header_id"]);
					outcome_section_content = outcome_section_content.replace(/COLLAPSE_ID/g, "collapse-" + outcome["header_id"]);
					outcome_section_content = outcome_section_content.replace(/HEADING_GOES_HERE/g, outcome["header_text"]);
					outcome_section_content = outcome_section_content.replace(/CONTENT_GOES_HERE/g, outcome["content"]);
					added_outcome.html(outcome_section_content);
			});
		});
	}
});