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
              <div className={styles.missionTitle}>О КОМПАНИИ</div>
              <div className={styles.missionText}>
                ООО «Енисейская электроснабжающая компания» является гарантирующим поставщиком электрической энергии на территории Енисейского района, технологически не связанной с Единой энергетической системой России и технологически изолированными территориальными электроэнергетическими системами (приказ Министерства промышленности и торговли Красноярского края №53-н от 29.12.2023).
              </div>
            </section>

            <section className={styles.servicesSection}>
              <div className={styles.aboutUs}>
                <div className={styles.leftSection}>
                  <div className={styles.groupContainer}>
                    <div className={styles.photoContainer}>
                      <Image
                        src="/logo.jpg"
                        alt="Логотип Енисейэлектроком"
                        className={`${styles.aboutUsPhoto} ${imageLoaded ? styles.fadeIn : ""}`}
                        width={455}
                        height={545}
                        priority
                        onLoadingComplete={() => setImageLoaded(true)}
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <div className={styles.photoMask}></div>
                  </div>
                </div>

                <div className={styles.rightSection}>
                  <div className={styles.rightSubsections}>
				  <div className={`${styles.subsectionText} ${styles.large}`}>
						Мы обеспечиваем электроэнергией населённые пункты Енисейского района Красноярского края. ООО «Енисейская электроснабжающая компания» является гарантирующим поставщиком электрической энергии на территории Енисейского района, технологически не связанной с Единой энергетической системой России и технологически изолированными территориальными электроэнергетическими системами (приказ Министерства промышленности и торговли Красноярского края №53-н от 29.12.2023).
						</div>

						<div className={`${styles.subsectionText} ${styles.large}`}>
						Зона деятельности ООО «Енисейэлектроком», как гарантирующего поставщика электрической энергии, определена в следующих населенных пунктах: с. Ярцево, п. Новоназимово, п. Кривляк, п. Сергеево, с. Усть – Пит, д. Назимово, п. Шишмарево, д. Колмогорово, п. Майское, д. Айдара, с. Маковское, п. Новый Городок, с. Сым, д. Нижнешадрино, д. Фомка.
						</div>

						<div className={`${styles.subsectionText} ${styles.large}`}>
						Руководуясь действующим законодательством (Постановление Правительства РФ от 23.12.2021 №2425 «Об утверждении единого перечня продукции, подлежащей обязательной сертификации, и единого перечня продукции, подлежащей декларированию соответствия, внесении изменений в постановление Правительства Российской Федерации от 31 декабря 2020 г. №2467 и признании утратившими силу некоторых актов Правительства Российской Федерации»), следует отметить, что электрическая энергия в электрических сетях общего назначения переменного трехфазного и однофазного тока частотой 50 Гц подлежит обязательной сертификации.
						</div>

						<div className={`${styles.subsectionText} ${styles.large}`}>
						ООО «Енисейэлектроком» подготовлена и направлена в аккредитованный орган по сертификации электрической энергии необходимая организационно-методическая и техническая документация, а также заявка на проведение сертификации электрической энергии. В свою очередь, аккредитованным органом проведены необходимые исследования (испытания) и измерения параметров электрической энергии, в настоящий момент проходит заключительная процедура – рассмотрение вопроса по подтверждению соответствия параметров качества электрической энергии в точках передачи электрической энергии пользователям электрических сетей низкого и среднего напряжения систем электроснабжения общего назначения и, следовательно, получение сертификата качества.
						</div>

						<div className={`${styles.subsectionText} ${styles.large}`}>
						При этом получение сертификата — не показатель безаварийной и бесперебойной работы, а подтверждение степени соответствия параметров электрической энергии их установленным значениям.
						</div>

						<div className={`${styles.subsectionText} ${styles.large}`}>
						С целью увеличения устойчивости и бесперебойной работы электрической системы ООО «Енисейэлектроком» выполняются мероприятия по капитальному ремонту электро- и дизель-генераторных установок, линий электропередач, а также проводятся мероприятия по приобретению и установке новых дизель – генераторных установок.
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