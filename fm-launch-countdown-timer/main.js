/*
seconds倒数
秒变化时，给秒的card添加动画
分变化时，给分的card添加动画

动画定义为
.flip



*/
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
			const day = Math.floor(this.seconds / (24 * 3600));
			return day < 10 ? "0" + day : day;
		},
		hour() {
			const hour = Math.floor((this.seconds % (24 * 3600)) / 3600);
			return hour < 10 ? "0" + hour : hour;
		},
		minute() {
			const minute = Math.floor(((this.seconds % (24 * 3600)) % 3600) / 60);
			return minute < 10 ? "0" + minute : minute;
		},
		second() {
			this.isFlip = true;
			const second = Math.floor((this.seconds % (24 * 3600)) % 3600) % 60;
			return second < 10 ? "0" + second : second;
		},
	},
	watch: {
		seconds() {
			if (this.seconds === 0) {
				clearInterval(this.timer);
			}
		},
	},
	created() {
		this.timer = setInterval(() => {
			this.seconds--;
		}, 1000);
	},
};

const app = Vue.createApp(App);
app.component("card", {
	data() {
		return {
			isFlip: false,
		};
	},
	template: `
    <div class="card-wrapper">
      <div class="card-value" :class="{'flip': isFlip}"><p>{{ timerValue }}</p></div>
      <div class="card-key"><p>{{ timerKey}}</p></div>
    </div>
  `,
	props: ["timerValue", "timerKey"],
	watch: {
		timerValue() {
			console.log("timerValue changed");
			this.isFlip = true;
			setTimeout(() => {
				this.isFlip = !this.isFlip;
			}, 200);
		},
	},
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
