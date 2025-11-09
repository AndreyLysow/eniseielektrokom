import React, { useEffect, useState, useRef } from "react";
import AnimatedBackground from "../components/AnimatedBackground";
import Breadcrumbs from "../components/Breadcrumbs";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import styles from "../styles/about.module.css";

const About = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current?.swiper) swiperRef.current.swiper.slideTo(4, 0);
  }, []);

  const existingSlideNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  const slides = existingSlideNumbers.map(num => `/pictures_about_us/about-slide${num}.jpg`);

  return (
    <div className={styles.servicesPage}>
      <div className={styles.fixedSchema}></div>
      <div className={styles.wrapper}>
        <AnimatedBackground />
        <main className={styles.content}>
          <Breadcrumbs />
          <h1 className={styles.title}>О компании</h1>

          <div className={styles.overlayBlock}>
            <section className={styles.missionSection}>
              <div className={styles.missionTitle}>НАША МИССИЯ</div>
              <div className={styles.missionText}>
                Обеспечивать жителей города Енисейска и Енисейского района стабильным, надёжным и доступным электроснабжением,
                внедряя современные технологии и повышая энергоэффективность систем электроснабжения. Мы стремимся к тому,
                чтобы электроэнергия в домах сочеталось с разумным использованием ресурсов и высоким качеством обслуживания.
              </div>
            </section>

            <section className={styles.servicesSection}>
              <div className={styles.aboutUs}>
                <div className={styles.leftSection}>
                  <div className={styles.groupContainer}>
                    <div className={styles.photoContainer}>
                      <Image
                        src="/aboutUs.jpg"
                        alt="About Us High Resolution"
                        className={`${styles.aboutUsPhoto} ${imageLoaded ? styles.fadeIn : ""}`}
                        width={455}
                        height={545}
                        priority
                        onLoadingComplete={() => setImageLoaded(true)}
                      />
                    </div>
                    <div className={styles.photoMask}></div>
                  </div>
                </div>

                <div className={styles.rightSection}>
                  <div className={styles.rightSubsections}>
				  <div className={`${styles.subsectionText} ${styles.large}`}>
						Енисейэлектроком — единая электроснабжающая организация города Енисейска и Енисейского района. Мы обеспечиваем бесперебойную подачу электроэнергии, стабильно работая в рамках заключённых с органами местного самоуправления концессионных соглашений.
						</div>

						<div className={`${styles.subsectionText} ${styles.large}`}>
						Наш коллектив реализует плановую модернизацию и реконструкцию объектов электроснабжения: заменено оборудование, обновлены сети и технологическое оснащение. Благодаря этому количество аварийных ситуаций значительно снизилось.
						</div>

						<div className={`${styles.subsectionText} ${styles.large}`}>
						Мы стремимся к экологически безопасному электроснабжению, выступаем за применение современных энергоэффективных решений. Основная цель компании — надёжность, устойчивость и повышение качества жизни потребителей города Енисейска и Енисейского района.
						</div>

						<div className={`${styles.subsectionText} ${styles.large}`}>
						Мы не просто поставляем электроэнергию — мы формируем устойчивое будущее для города и района, где каждый дом надёжно обеспечен электричеством.
						</div>
                    <div className={styles.signature}>
                      Директор <br />
                      <strong>Левчук Игорь Сергеевич</strong>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.teamSection}>
              <div className={styles.teamTitle}>ПРОИЗВОДСТВО И ЛЮДИ</div>
              <div className={styles.teamText}>
			  Кадры, за которыми — настоящая работа: от подстанций до электросетей, от ремонта до модернизации. Это производственные будни нашего коллектива, обеспечивающего электроэнергию в каждый дом — слаженно, надёжно и профессионально.
              </div>
              <div className={styles.sliderContainer}>
                <Swiper
                  ref={swiperRef}
                  spaceBetween={30}
                  slidesPerView={1}
                  breakpoints={{ 1000: { slidesPerView: 2 }, 1500: { slidesPerView: 3 } }}
                  centeredSlides
                  loop
                  loopAdditionalSlides={3}
                  autoplay={{ delay: 5000 }}
                  effect="coverflow"
                  coverflowEffect={{ rotate: 0, stretch: 100, depth: 300, modifier: 1, slideShadows: false }}
                  navigation={{ nextEl: ".custom-swiper-button-next", prevEl: ".custom-swiper-button-prev" }}
                  modules={[Navigation, EffectCoverflow, Autoplay]}
                >
                  {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                      <div className={styles.slideContent}>
                        <Image
                          src={slide}
                          alt={`Слайд ${index + 1}`}
                          layout="responsive"
                          width={700}
                          height={600}
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className={styles.controlsContainer}>
                  <div className={styles.customSwiperControls}>
                    <div className="custom-swiper-button-prev">
                      <Image src="/icons/arrow-left.svg" alt="Previous" width={30} height={30} />
                    </div>
                    <div className="custom-swiper-button-next">
                      <Image src="/icons/arrow-right.svg" alt="Next" width={30} height={30} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default About;