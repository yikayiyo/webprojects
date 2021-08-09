const App = {
	data() {
		return {
			seconds: 14 * 24 * 3600,
		};
	},
	template: `
    <div class="container">
      <h1>We're launching soon</h1>
      <div class="timer-wrapper">
        <card :timerValue="day" timerKey="Days" />
        <card :timerValue="hour" timerKey="Hours" />
        <card :timerValue="minute" timerKey="Minutes" />
        <card :timerValue="second" timerKey="Seconds" />
      </div>
    </div>
		<social-footer />
  `,
	computed: {
		day() {
			return Math.floor(this.seconds / (24 * 3600));
		},
		hour() {
			return Math.floor((this.seconds % (24 * 3600)) / 3600);
		},
		minute() {
			return Math.floor(((this.seconds % (24 * 3600)) % 3600) / 60);
		},
		second() {
			return Math.floor((this.seconds % (24 * 3600)) % 3600) % 60;
		},
	},
	created() {
		setInterval(() => {
			this.seconds--;
		}, 1000);
	},
};

const app = Vue.createApp(App);
app.component("card", {
	template: `
    <div class="card-wrapper">
      <div class="card-value"><p>{{ timerValue }}</p></div>
      <div class="card-key"><p>{{ timerKey}}</p></div>
    </div>
  `,
	props: ["timerValue", "timerKey"],
});

app.component("social-footer", {
	template: `
    <div class="footer-wrapper">
		  <ul>
			  <li><a><i class="fab fa-facebook-square"></i></a></li>
				<li><a><i class="fab fa-pinterest"></i></a></li>
				<li><a><i class="fab fa-instagram"></i></a></li>
			</ul>
    </div>
  `,
});

app.mount("#app");
