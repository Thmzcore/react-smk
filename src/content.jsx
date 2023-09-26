import React from 'react';
import './assets/css/App.css';
import './assets/Data/questions.js';
import './assets/main.js';

function Main() {
    return (
        <main className="main">
            <section className="home" id="home">
                <div className="home-container container grid">
                    <img className="home-img" src="src/assets/image/undraw_online_learning_re_qw08.svg" alt="Echeveria agavoides" />

                    <div className="text-content">
                        <h1 className="title">Smk Pawyatan <br />Daha 3 Kediri </h1>
                        <p className="description">
                            Temukan Bakatmu dan Berkembang Bersama Komunitas Sekolah, Pendidikan Berkualitas yang Menginspirasi
                            di Setiap Langkah, Menjadikan Masa Depan yang Gemilang melalui Pendidikan Berkualitas
                        </p>
                        <a className="button btn-flex" href="https://ppdb.smkpd3kediri.sch.id/">
                            Daftar <i className="ri-arrow-right-down-line btn-icon"></i>
                        </a>
                    </div>
                    <div className="home-social">
                        <span className="social-fl">Follow Us</span>
                        <div className="social-links">
                            <a href="https://www.facebook.com/smkpawyatandaha3kediri/?locale=id_ID" className="social-link"
                                target="_blank"><i className="ri-facebook-fill"></i></a>
                            <a href="https://www.instagram.com/explore/locations/1806310626284697/smk-pawyatan-daha-3-kediri/?hl=id"
                                className="social-link" target="_blank"><i className="ri-instagram-line"></i></a>
                            <a href="https://twitter.com/" className="social-link" target="_blank"><i className="ri-twitter-line"></i></a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about section container" id="about">
                <div className="about-container grid">
                    <img src="src/assets/image/undraw_design_inspiration_re_tftx.svg" alt="tentang plantshop" className="about-img" />

                    <div className="about-data">
                        <h2 className="section-title about-title">Visi</h2>

                        <p className="about-desc">
                            Kami memiliki tekad untuk melahirkan generasi siswa yang tidak hanya siap menghadapi tantangan di dalam
                            negeri, tetapi juga menjadi pemimpin global.
                        </p>

                        <h2 className="section-title about-title">Misi</h2>

                        <div className="about-detail">
                            <p className="detail-desc">
                                <i className="ri-checkbox-fill detail-icon"></i>
                                memberikan pendidikan berkualitas tinggi kepada setiap siswa
                            </p>
                            <p className="detail-desc">
                                <i className="ri-checkbox-fill detail-icon"></i>
                                membantu siswa mengembangkan nilai-nilai seperti integritas, disiplin, rasa tanggung jawab, kepedulian,
                                dan kepemimpinan.
                            </p>
                            <p className="detail-desc">
                                <i className="ri-checkbox-fill detail-icon"></i>
                                kami mempersiapkan siswa kami untuk menghadapi tantangan masa depan
                            </p>
                            <p className="detail-desc">
                                <i className="ri-checkbox-fill detail-icon"></i>
                                membangun kehidupan beragama yang kokoh melalui pendidikan
                            </p>
                        </div>

                        <a className="btn-link btn-flex" href="#">
                            Daftar Sekarang <i className="ri-arrow-right-down-line btn-icon"></i>
                        </a>
                    </div>
                </div>
            </section>

            <section className="steps section container">
                <div className="steps-bg">
                    <h2 className="section-title-center steps-title">Smk Daha 3 Kediri <br /> Jurusan</h2>
                    <div className="steps-container grid">
                        <div className="steps-card">
                            <div className="card-numb">
                                <img src="assets/img/undraw_progressive_app_m-9-ms.svg" alt="" />
                            </div>
                            <h3 className="card-title">Teknik Komputer dan informasi</h3>
                            <p className="card-desc">
                                Jurusan Teknik Komputer dan Informatika: Menggali Potensi di Era Teknologi
                            </p>
                        </div>
                        <div className="steps-card">
                            <div className="card-numb">
                                <img src="src/assets/image/undraw_camera_re_cnp4.svg" alt="" />
                            </div>
                            <h3 className="card-title">Desain Kmonikasi Visual</h3>
                            <p className="card-desc">
                                Desain Komunikasi Visual: Mengubah Konsep menjadi Karya Visual yang Mengesankan
                            </p>
                        </div>
                        <div className="steps-card">
                            <div className="card-numb">
                                <img src="src/assets/image/undraw_automobile_repair_ywci.svg" alt="" />
                            </div>
                            <h3 className="card-title">Teknik Kendaraan Ringan</h3>
                            <p className="card-desc">
                                Jurusan Teknik Kendaraan Ringan: Mengasah Keterampilanmu di Industri Mobilitas
                            </p>
                        </div>
                        <div className="steps-card">
                            <div className="card-numb">
                                <img src="src/assets/image/undraw_maintenance_re_59vn.svg" alt="" />
                            </div>
                            <h3 className="card-title">Teknik Permesinan</h3>
                            <p className="card-desc">
                                Penuhi Kreativitasmu dengan Jurusan Teknik Permesinan
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="product section container" id="">
                <div className="product-container grid"></div>
            </section>

            <section className="questions section" id="faqs">
                <h2 className="section-title-center questions-title">Keuntungan Sekolah <br /> Smk Daha 3 Kediri</h2>
                <div className="questions-container container grid">
                    <div className="questions-group">
                    </div>
                </div>
            </section>
            <section className="contact section container" id="contact">
                <div className="contact-container grid">
                    <div className="contact-box">
                        <h2 className="section-title">
                            Jika ada pertanyaan <br /> hubungi kami
                        </h2>

                        <div className="contact-data">
                            <div className="contact-info">
                                <h3 className="contact-subtitle">hub jika ada pertanyaan</h3>
                                <span className="contact-desc">
                                    <i className="ri-phone-line contact-icon"></i>
                                    (0354) 684971
                                </span>
                            </div>
                            <div className="contact-info">
                                <h3 className="contact-subtitle">Atau bisa email kami</h3>
                                <span className="contact-desc">
                                    <i className="ri-mail-line contact-icon"></i>
                                    smkdaha3kdr@yahoo.com
                                </span>
                            </div>
                        </div>
                    </div>
                    <form action="" className="contact-form">
                        <div className="contact-inputs">
                            <div className="contact-content">
                                <input type="email" placeholder=" " className="contact-input" required />
                                <label htmlFor="" className="contact-label">Email</label>
                            </div>

                            <div className="contact-content">
                                <input type="text" placeholder=" " className="contact-input" />
                                <label htmlFor="" className="contact-label">Subject</label>
                            </div>

                            <div className="contact-content contact-area">
                                <textarea name="message" placeholder=" " className="contact-input"></textarea>
                                <label htmlFor="" className="contact-label">Message</label>
                            </div>
                        </div>

                        <button className="button btn-flex">
                            Send Message
                            <i className="ri-arrow-right-up-line btn-icon"></i>
                        </button>
                    </form>
                </div>
            </section>
        </main>
    );
}

export default Main;
