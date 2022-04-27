import { Component } from "react";

class Meet extends Component {
    render() {
        return(
            <section className="meet overlay-dark white-text" style={{backgroundImage: "url('./res/meet.jpeg')"}}>
              <h2 className="text-center section-title" data-aos="fade-down" data-aos-duration="1500">Catatan Pendek untuk Cinta yang Panjang
              </h2>
              <p className="text-center" data-aos="fade-down" data-aos-duration="1500" style={{color:"white"}}>" Hari Ini Kita Cerita tentang Senja, Hujan dan Satu Janji "
              </p>

              <article data-aos="fade-left" data-aos-duration="1500">
                  <img src="./res/treasurer.jpeg"
                      alt=""></img>
                  <div className="article-content white-text">
                      <h3 className="section-subtitle">"Menemukanmu"</h3>
                      <p>Ping!. Setelah 12 tahun lamanya tak pernah mendengar kabarnya lagi lalu dia datang dengan Sebuah panggilan awal dimulainya cerita baru hidup kita.</p>
                  </div>
              </article>

              <article data-aos="fade-right" data-aos-duration="1500">
                  <img src="./res/backstreet.jpeg"
                      alt=""></img>
                  <div className="article-content white-text">
                      <h3 className="section-subtitle">"Senja"</h3>
                      <p>Jarak telah membuat kita semakin jarang bertemu. Meski tetap saja setiap senja datang satu-satunya hal yang bisa memperlambat waktu adalah rindu.</p>
                  </div>
              </article>

              <article data-aos="fade-left" data-aos-duration="1500">
                  <img src="./res/gf.jpeg"
                      alt=""></img>
                  <div className="article-content white-text">
                      <h3 className="section-subtitle">"Hujan"</h3>
                      <p>Sesekali aku mendatangi tempat-tempat yang sering kita kunjungi, hanya untuk mempercepat waktu, hanya untuk memastikan kita akan segera bertemu. Dan, tak kala hujan juga datang membawa pulang kehangatanmu di kepalaku. Sementara tubuhku harus tabah menikmati dinginnya waktu </p>
                  </div>
              </article>

              <article data-aos="fade-right" data-aos-duration="1500">
                  <img src="./res/propose.jpeg"
                      alt=""></img>
                  <div className="article-content white-text">
                      <h3 className="section-subtitle">"Janji"</h3>
                      <p>Kelak, pada senja-senja yang tak lagi sepi, pada janji yang telah kita sepakati, kamu adalah seseorang yang kupeluk erat sepenuh hati. Tidak akan ada lagi jarak yang menakut-nakuti. Bila hari itu tiba, aku berharap waktu tetap saja melambat bersama kita. Agar aku bisa menikmati senja, juga hujan-hujan yang pernah membuatku merindu buta.  </p>
                  </div>
              </article>
          </section>
        );
    }
}

export default Meet;