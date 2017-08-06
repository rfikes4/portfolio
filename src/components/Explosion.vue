<template>
	<section class="projects-sub" ref="all">
		<section class="sub-wrap" ref="all1">
			<div class="sub-title">
				<h1>Explosion</h1>
				<h2 class="s-h2">Interactive Poster</h2>
				<div class="subT" ref="subT"></div>
			</div>
			<div class="sub-desc">
				<p>Explosion is an audio-reactive video projection poster mapping. It has been exhibited at the Emmanuel Gallery at the University of Colorado Denver and the Denver Tech Creative Meetup.</p>
				<aside>
					<p>March 2016<br>Emmanuel Gallery & Denver Creative Tech<br>Denver, CO</p>
				</aside>
			</div>
			<div class="vimeo">
				<iframe src="https://player.vimeo.com/video/162302124" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
			</div>
		</section>

		<div class="sub-fixed s3-1"></div>

		<section class="sub-wrap">
			<div class="sub-title">
				<h2>The Idea</h2>
				<div class="subT" ref="subT1"></div>
			</div>
			<p class="s-margin">After creating visuals for Decadence, I wanted to learn more about the field. This led to me getting introduced to projection mapping so I purchased a projector and started mapping posters I've designed in the past with Resolume. The preset visuals weren't enough, so I created a few more in After Effects and FantaMorph. I really enjoyed playing with the visuals and wanted other people to play around with the illusion of projection mapping. So I purchased APC 40 MKII, learned how to map MIDI signals, submitted my project to the CU Denver Spring 2016 Juried Student Show, and got accepted.</p>
			<div class="vimeo">
				<iframe src="https://player.vimeo.com/video/228331289?autoplay=1&loop=1&autopause=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
			</div>
			<div class="s-wrap-img vimeo s3-2"></div>
		</section>

		<div class="sub-fixed s3-3"></div>

		<section class="sub-wrap">
			<div class="sub-title">
				<h2>Round 2</h2>
				<div class="subT" ref="subT2"></div>
			</div>
			<p class="s-margin">Right after the exhibition I discovered the Denver Creative Tech Meetup and was allowed to show off this creative technology to a more tech-savy audience. The audience at the Meetup interected and asked more questions compared to the audience at the Emmanuel Gallery.</p>
			
			<div class="s-wrap-img vimeo s3-4"></div>
			<div class="s-wrap-img vimeo s3-5"></div>
		</section>
		
		<section class="sub-dark">
			<section class="sub-wrap">
				<div class="sub-title">
					<h2>Results</h2>
					<div class="subT" ref="subT3"></div>
				</div>
				<p>This project became very tedious fast, having to put up and take down all 49 sheets of the poster multiple times. The mirror on the projector was destroyed because the projected image was burn onto it after leaving the projector on for 8 hours each day over 2 weeks. But overall I'd say it was worth it because I made a lot of contacts and was featured in the <a href="http://cu-sentry.com/2016/04/13/robert-fikes-iv/" target="_blank">school's paper</a>.</p>
			</section>
		</section>

		<div class="sub-fixed s3-6"></div>

		<section class="next-s">
			<div class="next-title">
				<h2>Next project</h2>
				<div class="nl" ref="nL"></div>
			</div>
			<div class="sub-fixed-n s3-n">
				<div class="n-cover" ref="nCover" @mousemove="over" @mouseleave="leave"></div>
				<div class="sub-title-c">
					<div class="sub-title-n" ref="tn" @mouseenter="isEnter" @click="s1Out">
						<h1 ref="h1n">Decadence</h1>
						<h2 ref="h2n">Visual Package</h2>
					</div>
				</div>
			</div>
		</section>

	</section>
</template>

<script>
	export default {
		data() {
			return {
				all1: null,
				all: null,
				subT: null,
				subT1: null,
				subT1x: 0,
				subT2: null,
				subT2x: 0,
				subT3: null,
				subT3x: 0,
				scroll: 0,
				nL: null,
				nLx: 0,
				nCover: null,
				nView: null,
				nHeight: null,
				tn: null,
				tnx: 0,
				h1n: null,
				h1ntxt: null,
				h2n: null,
				h2ntxt: null,
				mouseX: 0,
				mouseY: 0,
				cx: window.innerWidth / 2,
				cy: window.innerHeight / 2,
				dx: null,
				dy: null,
				tiltx: null,
				tilty: null,
				degree: null,
				radius: null
			}
		},
		mounted() {
			// Page leave time
			this.$emit('leave', 1000);
			// Route setup
			this.$emit('index', 9);
			// Scroll reset
			document.body.scrollTop = 0;

			this.all1 = this.$refs.all1;
			this.all = this.$refs.all;
			this.subT = this.$refs.subT;
			this.subT1 = this.$refs.subT1;
			this.subT2 = this.$refs.subT2;
			this.subT3 = this.$refs.subT3;
			this.subT4 = this.$refs.subT4;

			this.nL = this.$refs.nL;
			this.nCover = this.$refs.nCover;
			this.tn = this.$refs.tn;
			this.h1n = this.$refs.h1n;
			this.h2n = this.$refs.h2n;

			if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
				document.getElementsByClassName('projects-sub')[0].classList.add("isMobile2");
			} else {
				// h1 txt
				var h1 = this.h1n.textContent;
				h1 = h1.split('');
				this.h1n.innerHTML = "<span>" + h1.join("</span><span>") + "</span>";
				this.h1ntxt = this.h1n.children;

				// h2 txt
				var h2 = this.h2n.textContent;
				h2 = h2.split('');
				this.h2n.innerHTML = "<span>" + h2.join("</span><span>") + "</span>";
				this.h2ntxt = this.h2n.children;
			}

			// Scroll pos on route change
			window.addEventListener("scroll", this.scrolled);

			this.s1In();
		},
		beforeDestroy: function() {
			TweenLite.to(window, 0, {scrollTo: this.scroll});
	        this.s1Out();
	    },
		methods: {
			s1In() {
				var s1In = new TimelineMax();
				s1In.to(this.all1, 0, { opacity: 0, y: -40}, "0")
				s1In.to(this.all1, 1, { opacity: 1, y: 0, ease: Power4.easeOut}, "0")

				s1In.to(this.subT, .5, { scaleX: 1, ease: Power4.easeOut}, ".5")
			},
			s1Out() {
				var s1Out = new TimelineMax({onComplete: this.next});
				s1Out.to(this.all, 1, { opacity: 0, y: 40, ease: Power4.easeIn})
			},
			scrolled() {
				// Set scroll
				this.scroll = document.body.scrollTop;

				// Next scroll anim
				if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
					//return;
				} else {
					if ( this.checkEnd(this.subT1) == true ) {
						if ( this.subT1x == 0 ){
							TweenMax.to(this.subT1, .5, { scaleX: 1, ease: Power4.easeIn });
						}
						this.subT1x = 1;
					}
					if ( this.checkEnd(this.subT2) == true ) {
						if ( this.subT2x == 0 ){
							TweenMax.to(this.subT2, .5, { scaleX: 1, ease: Power4.easeIn });
						}
						this.subT2x = 1;
					}
					if ( this.checkEnd(this.subT3) == true ) {
						if ( this.subT3x == 0 ){
							TweenMax.to(this.subT3, .5, { scaleX: 1, ease: Power4.easeIn });
						}
						this.subT3x = 1;
					}
					if ( this.checkEnd(this.nL) == true ) {
						if ( this.nLx == 0 ){
							TweenMax.to(this.nL, .5, { scaleY: 1, ease: Power4.easeIn });
						}
						this.nLx = 1;
					}
					if ( this.checkEnd(this.tn) == true ) {
						if ( this.tnx == 0 ){
							TweenMax.to(this.h1n, 1, { left: 0, opacity: 1, ease: Power4.easeOut });
							TweenMax.to(this.h2n, 1, { left: 0, opacity: 1, ease: Power4.easeOut });
						}
						this.tnx = 1;
					}
					if ( this.checkEnd(this.nCover) == true ) {
						// Bg
						this.nView = Math.max(document.documentElement.clientHeight, window.innerHeight);
						this.nHeight = document.body.clientHeight;
						var top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
						var y = (this.nHeight - top - this.nView) / this.nView;
						TweenMax.to(this.nCover, 0, { opacity: y });
					}
				}

			},
			checkEnd(elm) {
				var rect = elm.getBoundingClientRect();
				var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
				return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
			},
			isEnter() {
				// Split txt
				if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
					//return;
				} else {
					var delay1 = 0.02 // seconds
					var delay2 = 0.04 // seconds
					// h1
					for (var i = 0; i < this.h1ntxt.length; i++) {
						var d1 = delay1 * (i + 1);
						var d2 = delay2 * (i + 1);
						TweenMax.to(this.h1ntxt[i], .2, { css:{opacity: .3}, delay: d1, ease: Power2.easeOut });
						TweenMax.to(this.h1ntxt[i], .2, { css:{opacity: 1}, delay: d2, ease: Power2.easeOut });
					}
					// h2
					for (var i = 0; i < this.h2ntxt.length; i++) {
						var d1 = delay1 * (i + 1);
						var d2 = delay2 * (i + 1);
						TweenMax.to(this.h2ntxt[i], .2, { css:{opacity: .3}, delay: d1, ease: Power2.easeOut });
						TweenMax.to(this.h2ntxt[i], .2, { css:{opacity: 1}, delay: d2, ease: Power2.easeOut });
					}
				}
			},
			next() {
				var next = this.$route.path;
				if (this.$route.path == '/projects/explosion') {
					this.$router.push('/projects/decadence')
				}
			},
			over(e) {
				if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
					//return;
				} else {
					this.mouseX = e.clientX;
					this.mouseY = e.clientY;

					this.dx = this.mouseX - this.cx;
					this.dy = this.mouseY - this.cy;
					
					this.tiltx = -(this.dy / this.cy);
					this.tilty =  (this.dx / this.cx);

					this.radius = Math.sqrt(Math.pow(this.tiltx,2) + Math.pow(this.tilty,2));
					this.degree = (this.radius * 20);

					TweenLite.to(this.tn, .5, {transform:'rotate3d(' + this.tiltx + ', ' + this.tilty + ', 0, ' + this.degree + 'deg)', ease:Power2.easeOut});
				}
			},
			leave() {
				if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
					//return;
				} else {
					TweenLite.to(this.tn, 1.5, {transform:'rotate3d(' + 0 + ', ' + 0 + ', 0, ' + 0 + 'deg)', ease:Elastic.easeOut});
				}
			}
		}
	}
</script>