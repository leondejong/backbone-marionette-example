<div class="case">
	<h3 class="heading">
		<span class="client"><%- client %></span><span class="dash"> - </span><span class="product"><%- project %></span>
	</h3>
	<div class="grid">
		<% for(var data in information) { %>
			<div class="row">
				<div class="cell title">
					<%- data %>
				</div>
				<div class="cell description">
					<%- information[data] %>
				</div>
			</div>
		<% } %>
	</div>
	<div class="visuals">
		<% for(var visual in visuals) {
			var detail = this.model.detailDirectory + visuals[visual];
			var preview = this.model.previewDirectory + visuals[visual];
		%>
			<a href="<%- detail %>" rel="gallery" title="<%- client + ' - ' + project %>" class="detail">
				<img src="<%- detail %>" width="450" alt="<%- client + ' - ' + project %>" class="preview" data-href="<%- detail %>" />
			</a>
       <% } %>
	</div>
	<p class="footnote">
		&#169;<% (new Date()).getFullYear() %> <%- client %>
	</p>
</div>