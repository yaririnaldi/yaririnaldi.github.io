import { Component } from "react";

class Married extends Component {
    render() {
        return(
            <section className="married overlay-dark white-text"
              style={{backgroundImage: "url('./res/married.jpeg')"}}>
              <h2 className="section-title text-center" data-aos="fade-down" data-aos-duration="1500">We Are Getting Married
              </h2>
              <p className="text-center" data-aos="fade-down" data-aos-duration="1500"><q cite='QS. An-Nahl: 72'>Dan Allah menjadikan bagimu pasangan (suami atau istri) dari jenis kamu sendiri, menjadikan anak dan cucu bagimu dari pasanganmu, serta memberimu rezeki dari yang baik-baik. Mengapa mereka beriman kepada yang batil dan mengingkari nikmat Allah?.</q><br></br>(QS. An-Nahl: 72)</p>

              <div className="married-content" data-aos="fade-up" data-aos-duration="1500">
                  <article className="couple">
                      <img className="circle" src="./res/pp.jpeg" alt=""></img>
                      <h3 className="section-subtitle text-center">Yari Rinaldi S.Si.</h3>
                      <p className="text-center">2<sup>nd</sup>son of<br></br>Agus Sugiarto and Rina Liana
                      </p>
                  </article>
                  <h3 className="section-subtitle-and text-center">&</h3>
                  <article className="couple">
                      <img className="circle" src="./res/kebo.jpeg" alt=""></img>
                      <h3 className="section-subtitle text-center">Rahmi Meyliza Putri, S.E.</h3>
                      <p className="text-center">2<sup>nd</sup> daughter of<br></br>Baharuddin and Oliwati 
                      </p>
                  </article>
              </div>
          </section>
        );
    }
}

export default Married;