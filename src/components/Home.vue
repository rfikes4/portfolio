<template>
	<section class="home" @mousemove="over" @mouseleave="leave">
		<div class="home-container" ref="hcon">
			<div class="logo-container" ref="logo">
				<svg class="logo1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 407.1 318.9">
					<defs>
						<mask id="logo1-r-mask">
							<path ref="r" d="M0,18.5H162.5s46,0,46,52c0,56-46,56-46,56h-77L213,302" transform="translate(0.1 4)" fill="none" stroke="white" stroke-miterlimit="10" stroke-width="44"/>
						</mask>
						<mask id="logo1-f1-mask">
							<line ref="f1" x1="208.1" y1="22" x2="407.1" y2="22" fill="none" stroke="white" stroke-miterlimit="10" stroke-width="44"/>
						</mask>
						<mask id="logo1-f2-mask">
							<line ref="f2" x1="208.1" y1="130" x2="325.1" y2="130" fill="none" stroke="white" stroke-miterlimit="10" stroke-width="44"/>
						</mask>
					</defs>
					<g id="logo-base">
					  	<path id="logo1-f1" d="M208,.5a90.2,90.2,0,0,1,28.5,36H380l27-36Z" transform="translate(0.1 4)" fill="white"/>
					 	<path id="logo1-f2" d="M208,144.5h90l27-36H236.5A90.2,90.2,0,0,1,208,144.5Z" transform="translate(0.1 4)" fill="white"/>
						<path id="logo1-r" d="M118,144.5h36a72,72,0,1,0,0-144H-.1v36H154a36,36,0,0,1,0,72H51.6l25.9,36L181,288.5h45L128.8,158.9Z" transform="translate(0.1 4)" fill="white"/>
				 	</g>
				</svg>

				<svg class="logo2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 407.1 318.9">
					<defs>
						<mask id="logo2-r-mask">
							<path ref="rx" d="M0,18.5H162.5s46,0,46,52c0,56-46,56-46,56h-77L213,302" transform="translate(0.1 4)" fill="none" stroke="white" stroke-miterlimit="10" stroke-width="44"/>
						</mask>
						<mask id="logo2-f1-mask">
							<line ref="f1x" x1="208.1" y1="22" x2="407.1" y2="22" fill="none" stroke="white" stroke-miterlimit="10" stroke-width="44"/>
						</mask>
						<mask id="logo2-f2-mask">
							<line ref="f2x" x1="208.1" y1="130" x2="325.1" y2="130" fill="none" stroke="white" stroke-miterlimit="10" stroke-width="44"/>
						</mask>
					</defs>
					<g id="logo-base">
				 		<path id="logo2-f1" d="M208,.5a90.2,90.2,0,0,1,28.5,36H380l27-36Z" transform="translate(0.1 4)" fill="white"/>
				 		<path id="logo2-f2" d="M208,144.5h90l27-36H236.5A90.2,90.2,0,0,1,208,144.5Z" transform="translate(0.1 4)" fill="white"/>
						<path id="logo2-r" d="M118,144.5h36a72,72,0,1,0,0-144H-.1v36H154a36,36,0,0,1,0,72H51.6l25.9,36L181,288.5h45L128.8,158.9Z" transform="translate(0.1 4)" fill="white"/>
					</g>
				</svg>
			</div>
			<div class="home-content">
				<div class="line-tl" ref="lineTL"></div>
				<div class="line-tr" ref="lineTR"></div>
				<div class="line-l" ref="lineL"></div>
				<div class="line-r" ref="lineR"></div>
				<div class="line-bl" ref="lineBL"></div>
				<div class="line-br" ref="lineBR"></div>

				<div class="home-info-container">
					<p class="home-info" ref="info">Hi. I’m Robert Fikes IV and I am a creative developer living in Denver, Colorado. I graduated from the University of Colorado Denver receiving a degree in Digital Design and have been creating digital experiences for over ten years. Recently, I have been exhibiting interactive installations that push the boundaries of art and technology. Feel free to check out my latest projects!</p>

					<div class="social">
						<div class="social-container">
							<a target="_blank" href="https://www.instagram.com/robert_fikes_iv/" ref="s1" class="btn-social">
								<i class="fa fa-instagram s-container" aria-hidden="true">
									<i class="fa fa-instagram s-icon" aria-hidden="true"></i>
								</i>
							</a>
							<a target="_blank" href="https://www.facebook.com/robertfikesiv/" ref="s2" class="btn-social">
								<i class="fa fa-facebook s-container" aria-hidden="true">
									<i class="fa fa-facebook s-icon" aria-hidden="true"></i>
								</i>
							</a>
							<a target="_blank" href="https://www.linkedin.com/in/rfikes4/" ref="s3" class="btn-social">
								<i class="fa fa-linkedin s-container" aria-hidden="true">
									<i class="fa fa-linkedin s-icon" aria-hidden="true"></i>
								</i>
							</a>
							<a target="_blank" href="/static/Resume - Robert Fikes IV.pdf" ref="s4" class="btn-social">
								<i class="fa fa-file-text s-container" aria-hidden="true">
									<i class="fa fa-file-text s-icon" aria-hidden="true"></i>
								</i>
							</a>
							<a target="_blank" href="mailto:contact@robertfikesiv.com" ref="s5" class="btn-social">
								<i class="fa fa-envelope s-container" aria-hidden="true">
									<i class="fa fa-envelope s-icon" aria-hidden="true"></i>
								</i>
							</a>
						</div>
					</div>

				</div>
			</div>

			<div class="btn-projects-container" ref="pbtn" >
				<router-link class="btn-projects" to="/projects" @mouseenter.native="btnOver" @mouseleave.native="btnLeave">
					<span class="pt" ref="pt"></span>
					<span class="pl" ref="pl"></span>
					<span class="pr" ref="pr"></span>
					<span class="pb" ref="pb"></span>
					<span class="btn-txt" ref="ptext">View projects</span>
				</router-link>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				scroll: 0,
				logo: null,
				r: null,
				f1: null,
				f2: null,
				rx: null,
				f1x: null,
				f2x: null,
				lineTL: null,
				lineTR: null,
				lineL: null,
				lineR: null,
				lineBL: null,
				lineBR: null,
				info: null,
				itxt: null,
				homeContainer: null,
				s1: null,
				s2: null,
				s3: null,
				s4: null,
				s5: null,
				pbtn: null,
				ptext: null,
				ptxt: null,
				pt: null,
				pl: null,
				pr: null,
				pb: null,
				hcon: null,
				mouseX: 0,
				mouseY: 0,
				cx: window.innerWidth / 2,
				cy: window.innerHeight / 2,
				dx: null,
				dy: null,
				tiltx: null,
				tilty: null,
				degree: null,
				radius: null,
				chrome: null,
				safari: null,
			}
		},
		mounted() {
			// Safari check
			this.chrome = navigator.userAgent.indexOf('Chrome') > -1;
			this.safari = navigator.userAgent.indexOf("Safari") > -1;
			if ((this.chrome)&&(this.safari)) { this.safari = false; }

			// Scroll reset
			document.body.scrollTop = 0;

			// Page leave time
			this.$emit('leave', 1000);
			
			// Logo
			this.logo = this.$refs.logo;

			// Logo 1
			this.r = this.$refs.r;
			this.f1 = this.$refs.f1;
			this.f2 = this.$refs.f2;

			// Logo 2
			this.rx = this.$refs.rx;
			this.f1x = this.$refs.f1x;
			this.f2x = this.$refs.f2x;

			// Lines
			this.lineTL = this.$refs.lineTL;
			this.lineTR = this.$refs.lineTR;
			this.lineL = this.$refs.lineL;
			this.lineR = this.$refs.lineR;
			this.lineBL = this.$refs.lineBL;
			this.lineBR = this.$refs.lineBR;

			// Home
			this.info = this.$refs.info;

			// Social
			this.s1 = this.$refs.s1;
			this.s2 = this.$refs.s2;
			this.s3 = this.$refs.s3;
			this.s4 = this.$refs.s4;
			this.s5 = this.$refs.s5;

			// Projects
			this.pbtn = this.$refs.pbtn;
			this.ptext = this.$refs.ptext;
			this.pt = this.$refs.pt;
			this.pl = this.$refs.pl;
			this.pr = this.$refs.pr;
			this.pb = this.$refs.pb;

			// Hover
			this.hcon = this.$refs.hcon;

			// Split txt
			if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
				//return;
			} else {
				// Home txt
				var txtH = this.info.textContent;
				txtH = txtH.split('');
				this.info.innerHTML = "<span>" + txtH.join("</span><span>") + "</span>";
				this.itxt = this.info.children;

				// Projects btn txt
				var txtP = this.ptext.textContent;
				txtP = txtP.split('');
				this.ptext.innerHTML = "<span>" + txtP.join("</span><span>") + "</span>";
				this.ptxt = this.ptext.children;
			}
			

			// Screen resize
			window.addEventListener('resize', () => {
				this.cx =window.innerWidth / 2,
				this.cy = window.innerHeight / 2
				if (this.$route.path == '/') {
					this.screenUpdate();
				}
			});

			// Scroll pos on route change
			window.addEventListener("scroll", this.scrolled);

			// Begin animation
			this.homeIn();
		},
		beforeDestroy: function() {
			TweenLite.to(window, 0, {scrollTo: this.scroll});
	        this.homeOut();
	    },
		methods: {
			homeIn() {
				var homeIn = new TimelineMax();
				if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
					// Logo
					homeIn.to(this.r, 0, { strokeDashoffset: 0 }, "0")
					homeIn.to(this.f1, 0, { strokeDashoffset: 0 }, "0")
					homeIn.to(this.f2, 0, { strokeDashoffset: 0 }, "0")
					homeIn.to(this.rx, 0, { strokeDashoffset: 0 }, "0")
					homeIn.to(this.f1x, 0, { strokeDashoffset: 0 }, "0")
					homeIn.to(this.f2x, 0, { strokeDashoffset: 0 }, "0")
					homeIn.to(this.logo, 0, { opacity: 0 }, "0")
					homeIn.to(this.logo, .5, { opacity: 1, ease: Power2.easeInOut }, "0")
					// Lines
					homeIn.to(this.lineTL, .3, { scaleX: 1 }, "0.1")
					homeIn.to(this.lineTR, .3, { scaleX: 1 }, "0.1")
					homeIn.to(this.lineL, .2, { scaleY: 1 }, ".4")
					homeIn.to(this.lineR, .2, { scaleY: 1 }, ".4")
					homeIn.to(this.lineBL, .3, { scaleX: 1 }, ".6")
					homeIn.to(this.lineBR, .3, { scaleX: 1 }, ".6")
					// Home
					homeIn.to(this.info, 0, { opacity: 0, ease: Power4.easeInOut }, "0")
					homeIn.to(this.info, 1, { opacity: 1, ease: Power4.easeInOut }, "0")
					// Social
					homeIn.to(this.s1, .5, { opacity: 1 }, "0")
					homeIn.to(this.s2, .5, { opacity: 1 }, ".1")
					homeIn.to(this.s3, .5, { opacity: 1 }, ".2")
					homeIn.to(this.s4, .5, { opacity: 1 }, ".3")
					homeIn.to(this.s5, .5, { opacity: 1 }, ".4")
					// Projects
					homeIn.to(this.pl, .4, { scaleY: 1 }, ".6")
					homeIn.to(this.pr, .4, { scaleY: 1 }, ".6")
					homeIn.to(this.pt, .4, { scaleX: 1 }, ".6")
					homeIn.to(this.pb, .4, { scaleX: 1 }, ".6")
					homeIn.to(this.ptext, .4, { opacity: 1, ease: Power4.easeInOut }, ".6")
					homeIn.add(this.updateIn)
				} else {
					// Logo
					homeIn.to(this.r, 1, { strokeDashoffset: 0, ease: Power2.easeInOut }, "0")
					homeIn.to(this.f1, .4, { strokeDashoffset: 0, ease: Power2.easeInOut }, ".3")
					homeIn.to(this.f2, .3, { strokeDashoffset: 0, ease: Power2.easeInOut }, ".4")
					homeIn.to(this.rx, 1, { strokeDashoffset: 0, ease: Power4.easeInOut }, ".3")
					homeIn.to(this.f1x, .4, { strokeDashoffset: 0, ease: Power4.easeInOut }, ".6")
					homeIn.to(this.f2x, .3, { strokeDashoffset: 0, ease: Power4.easeInOut }, ".7")
					// Lines
					homeIn.to(this.lineTL, .3, { scaleX: 1 }, "0.1")
					homeIn.to(this.lineTR, .3, { scaleX: 1 }, "0.1")
					homeIn.to(this.lineL, .2, { scaleY: 1 }, ".4")
					homeIn.to(this.lineR, .2, { scaleY: 1 }, ".4")
					homeIn.to(this.lineBL, .3, { scaleX: 1 }, ".6")
					homeIn.to(this.lineBR, .3, { scaleX: 1 }, ".6")
					// Home
					homeIn.add(this.infotxtIn, "0")
					// Social
					homeIn.to(this.s1, .5, { opacity: 1 }, "0")
					homeIn.to(this.s2, .5, { opacity: 1 }, ".1")
					homeIn.to(this.s3, .5, { opacity: 1 }, ".2")
					homeIn.to(this.s4, .5, { opacity: 1 }, ".3")
					homeIn.to(this.s5, .5, { opacity: 1 }, ".4")
					// Projects
					homeIn.to(this.pl, .4, { scaleY: 1 }, ".6")
					homeIn.to(this.pr, .4, { scaleY: 1 }, ".6")
					homeIn.to(this.pt, .4, { scaleX: 1 }, ".6")
					homeIn.to(this.pb, .4, { scaleX: 1 }, ".6")
					homeIn.to(this.ptext, .4, { opacity: 1, ease: Power4.easeInOut }, ".6")
					homeIn.add(this.updateIn)
				}
				
			},
			updateIn() {
				this.lineTL.style["transform-origin"] = "left";
				this.lineTR.style["transform-origin"] = "right";
				this.lineL.style["transform-origin"] = "bottom";
				this.lineR.style["transform-origin"] = "bottom";
				this.lineBL.style["transform-origin"] = "right";
				this.lineBR.style["transform-origin"] = "left";
			},
			infotxtIn() {
				var delay = 0.001 // seconds
				for (var i = 0; i < this.itxt.length; i++) {
					var d = delay * (i + 1);
					TweenMax.to(this.itxt[i], 1, { opacity: 1, delay: d, ease: Power2.easeOut });
				}
			},
			infotxtOut() {
				var delay = 0.001 // seconds
				for (var i = 0; i < this.itxt.length; i++) {
					var d = delay * (i + 1);
					TweenMax.to(this.itxt[i], 1, { opacity: 0, delay: d, ease: Power2.easeOut });
				}
			},
			homeOut() {
				var homeOut = new TimelineMax();
				if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || this.safari == true) {
					// Logo
					homeOut.to(this.logo, .5, { opacity: 0, ease: Power2.easeInOut }, ".5")
					// Lines
					homeOut.to(this.lineTL, .3, { scaleX: 0 }, "0.1")
					homeOut.to(this.lineTR, .3, { scaleX: 0 }, "0.1")
					homeOut.to(this.lineL, .2, { scaleY: 0 }, ".4")
					homeOut.to(this.lineR, .2, { scaleY: 0 }, ".4")
					homeOut.to(this.lineBL, .3, { scaleX: 0 }, ".6")
					homeOut.to(this.lineBR, .3, { scaleX: 0 }, ".6")
					// Home
					homeOut.to(this.info, 1, { opacity: 0, ease: Power4.easeInOut }, "0")
					// Social
					homeOut.to(this.s1, .5, { opacity: 0 }, "0")
					homeOut.to(this.s2, .5, { opacity: 0 }, ".1")
					homeOut.to(this.s3, .5, { opacity: 0 }, ".2")
					homeOut.to(this.s4, .5, { opacity: 0 }, ".3")
					homeOut.to(this.s5, .5, { opacity: 0 }, ".4")
					// Projects
					homeOut.to(this.pbtn, 1, { opacity: 0, ease: Power4.easeInOut }, "0")
					homeOut.to(this.pl, .3, { scaleY: 0 }, ".4")
					homeOut.to(this.pr, .3, { scaleY: 0 }, ".4")
					homeOut.to(this.pt, .6, { scaleX: 0 }, ".4")
					homeOut.to(this.pb, .6, { scaleX: 0 }, ".4")
				} else {
					// Logo
					homeOut.to(this.r, 1, { strokeDashoffset: -615, ease: Power2.easeInOut }, ".3")
					homeOut.to(this.f1, .4, { strokeDashoffset: -199, ease: Power2.easeInOut }, ".6")
					homeOut.to(this.f2, .3, { strokeDashoffset: -117, ease: Power2.easeInOut }, ".7")
					homeOut.to(this.rx, 1, { strokeDashoffset: -615, ease: Power4.easeInOut }, "0")
					homeOut.to(this.f1x, .4, { strokeDashoffset: -199, ease: Power4.easeInOut }, ".3")
					homeOut.to(this.f2x, .3, { strokeDashoffset: -117, ease: Power4.easeInOut }, ".4")
					// Lines
					homeOut.to(this.lineTL, .3, { scaleX: 0 }, "0.1")
					homeOut.to(this.lineTR, .3, { scaleX: 0 }, "0.1")
					homeOut.to(this.lineL, .2, { scaleY: 0 }, ".4")
					homeOut.to(this.lineR, .2, { scaleY: 0 }, ".4")
					homeOut.to(this.lineBL, .3, { scaleX: 0 }, ".6")
					homeOut.to(this.lineBR, .3, { scaleX: 0 }, ".6")
					// Home
					homeOut.add(this.infotxtOut, "0")
					// Social
					homeOut.to(this.s1, .5, { opacity: 0 }, "0")
					homeOut.to(this.s2, .5, { opacity: 0 }, ".1")
					homeOut.to(this.s3, .5, { opacity: 0 }, ".2")
					homeOut.to(this.s4, .5, { opacity: 0 }, ".3")
					homeOut.to(this.s5, .5, { opacity: 0 }, ".4")
					// Projects
					homeOut.to(this.pbtn, 1, { opacity: 0, ease: Power4.easeInOut }, "0")
					homeOut.to(this.pl, .3, { scaleY: 0 }, ".4")
					homeOut.to(this.pr, .3, { scaleY: 0 }, ".4")
					homeOut.to(this.pt, .6, { scaleX: 0 }, ".4")
					homeOut.to(this.pb, .6, { scaleX: 0 }, ".4")
				}
				
			},
			btnOver() {
				var delay = 0.03 // seconds
				for (var i = 0; i < this.ptxt.length; i++) {
					var d = delay * (i + 1);
					TweenMax.to(this.ptxt[i], .2, { css:{color:"#000"}, delay: d, ease: Power2.easeOut });
				}
			},
			btnLeave() {
				var delay = 0.03 // seconds
				for (var i = 0; i < this.ptxt.length; i++) {
					var d = delay * (i + 1);
					TweenMax.to(this.ptxt[i], .2, { css:{color:"#fff"}, delay: d, ease: Power2.easeOut });
				}
			},
			screenUpdate() {
				var wH = window.innerHeight;
				var cH = document.getElementsByClassName('home-container')[0].offsetHeight;
				var r = document.getElementsByClassName('home')[0];
				cH = cH + 87;
				if ( cH > (wH * .8) ){
					if (!r.classList.contains("screen-update")){
						r.classList.add("screen-update");
					}
				} else {
					if (r.classList.contains("screen-update")){
						r.classList.remove("screen-update");
					}
				}
			},
			over(e) {
				if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
					//return;
				} else {
					this.mouseX = e.pageX;
					this.mouseY = e.pageY;

					this.dx = this.mouseX - this.cx;
					this.dy = this.mouseY - this.cy;
					
					this.tiltx = -(this.dy / this.cy);
					this.tilty =  (this.dx / this.cx);

					this.radius = Math.sqrt(Math.pow(this.tiltx,2) + Math.pow(this.tilty,2));
					this.degree = (this.radius * 20);

					TweenLite.to(this.hcon, .5, {transform:'rotate3d(' + this.tiltx + ', ' + this.tilty + ', 0, ' + this.degree + 'deg)', ease:Power2.easeOut});
				}
			},
			leave() {
				if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
					//return;
				} else {
					TweenLite.to(this.hcon, 1.5, {transform:'rotate3d(' + 0 + ', ' + 0 + ', 0, ' + 0 + 'deg)', ease:Elastic.easeOut});
				}
			},
			scrolled() {
				// Set scroll
				this.scroll = document.body.scrollTop;
			}
			// link() {
			// 	this.$router.push('/projects');
			// }
		}
	}
</script>