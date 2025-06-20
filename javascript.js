        // 滚动动画效果
        document.addEventListener('DOMContentLoaded', function() {
            // 滚动到顶部按钮
            const scrollTopBtn = document.getElementById('scrollTop');
            
            window.addEventListener('scroll', function() {
                if (window.pageYOffset > 300) {
                    scrollTopBtn.classList.add('show');
                } else {
                    scrollTopBtn.classList.remove('show');
                }
            });
            
            scrollTopBtn.addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
            
            // 时间轴元素动画
            const timelineItems = document.querySelectorAll('.timeline-item');
            
            const timelineObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        timelineObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.3 });
            
            timelineItems.forEach(item => {
                timelineObserver.observe(item);
            });
            
            // 荣誉卡片动画
            const awardBoxes = document.querySelectorAll('.award-box');
            
            const awardsObserver = new IntersectionObserver((entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.style.opacity = "1";
                            entry.target.style.transform = "scale(1)";
                        }, 200 * index);
                        awardsObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.2 });
            
            awardBoxes.forEach(box => {
                awardsObserver.observe(box);
            });
            
            // 平滑滚动导航
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                });
            });
        });
		// 在现有代码的基础上添加

		// 页面加载进度条
		let progress = 0;
		const progressBar = document.createElement('div');
		progressBar.id = 'loading-bar';
		document.body.prepend(progressBar);

		const progressInterval = setInterval(() => {
			progress += Math.floor(Math.random() * 10);
			if (progress >= 100) {
				clearInterval(progressInterval);
				setTimeout(() => {
					progressBar.style.opacity = 0;
					setTimeout(() => progressBar.remove(), 500);
				}, 500);
			}
			progressBar.style.width = `${progress}%`;
		}, 100);

		// 添加粒子背景效果
		document.addEventListener('DOMContentLoaded', function() {
			// 添加粒子容器
			const particlesContainer = document.createElement('div');
			particlesContainer.id = 'particles-js';
			document.body.prepend(particlesContainer);
			
			// 初始化粒子效果（需要particles.js库）
			if(typeof particlesJS !== 'undefined') {
				particlesJS('particles-js', {
					particles: {
						number: { value: 30, density: { enable: true, value_area: 800 } },
						color: { value: '#2E8B57' },
						shape: { type: 'circle' },
						opacity: { value: 0.5, random: true },
						size: { value: 4, random: true },
						line_linked: {
							enable: true,
							distance: 150,
							color: '#3CB371',
							opacity: 0.4,
							width: 1
						},
						move: {
							enable: true,
							speed: 2,
							direction: 'none',
							random: true,
							straight: false,
							out_mode: 'out'
						}
					},
					interactivity: {
						detect_on: 'canvas',
						events: {
							onhover: { enable: true, mode: 'grab' },
							onclick: { enable: true, mode: 'push' },
							resize: true
						}
					}
				});
			}
		});

		// 为标题添加打字机效果
		document.addEventListener('DOMContentLoaded', function() {
			const titleContainer = document.querySelector('.title-container');
			const originalHTML = titleContainer.innerHTML;
			titleContainer.innerHTML = '<div class="typewriter"><h1></h1></div><div class="tagline"><p></p></div>';
			
			const titleEl = titleContainer.querySelector('.typewriter h1');
			const taglineEl = titleContainer.querySelector('.tagline p');
			
			// 打字机动画
			let index = 0;
			const titleText = '叶浩明';
			const taglineText = '广安加德学校的电脑管理员 | 优秀班委干部 | 活跃的12岁少年';
			
			function typeText() {
				if (index < titleText.length) {
					titleEl.textContent += titleText.charAt(index);
					index++;
					setTimeout(typeText, 200);
				} else {
					taglineEl.textContent = ''; // 清空标签行
					index = 0;
					setTimeout(typeTagline, 500);
				}
			}
			
			function typeTagline() {
				if (index < taglineText.length) {
					taglineEl.textContent += taglineText.charAt(index);
					index++;
					setTimeout(typeTagline, 50);
				}
			}
			
			setTimeout(typeText, 1000);
		});