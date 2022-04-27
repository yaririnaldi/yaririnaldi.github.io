import { Component } from "react";

class Agenda extends Component {
    constructor(props) {
        super(props);

        this.state = {
            session: '11.00 - 15.00',
        }
    }
    
    getParameterByName(url = window.location.href) {
        const sessionRegex = new RegExp('[?&]session(=([^&#]*)|&|#|$)');
        const sessionResult = sessionRegex.exec(url) ?? ['&session=1', '=1', '1'];
        
        let session = decodeURIComponent(sessionResult[2].replace(/\+/g, ' '));
        if(session === '2') {
            session = '15.00 - 17.00';
        } else {
            session = '11.00 - 15.00';
        }

        this.setState({
            session: session,
        });
    }

    componentDidMount() {
        this.getParameterByName();
    }

    openMap() {
        window.open('https://www.google.co.id/maps/place/Walton+Indo+Sakti/@-6.309884,106.8871254,19z/data=!3m1!4b1!4m5!3m4!1s0x2e69ed69ccef91c9:0x627802086185df7f!8m2!3d-6.309884!4d106.8876726?hl=en&authuser=0','_blank').focus();
    }

    addToCalendar() {
        var text = 'Yari & Liza Wedding';
        var date = '04062022'
        var location = 'Kediaman Mempelai Wanita'
        var googleCalendarUrl = `http://www.google.com/calendar/event?action=TEMPLATE&text=${text}&dates=${date}/${date}&location=${location}`;
        window.open(googleCalendarUrl).focus();
    }

    render() {
        return(
            <section className="agenda text-center"
            style={{backgroundImage: "url('./res/agenda.jpeg')"}}>
                <p data-aos="fade-down" data-aos-duration="1500">Saturday</p>
                <div className="date">
                    <h2 data-aos="fade-right" data-aos-duration="1500">04</h2>
                    <div className="month-year" data-aos="fade-left" data-aos-duration="1500">
                        <p>June</p>
                        <p>2022</p>
                    </div>
                </div>
                <h3 data-aos="fade-up" data-aos-duration="1500">Reception</h3>
                <p data-aos="fade-up" data-aos-duration="1500">{ this.state.session }</p>
                <button id="addToCalendarBtn" data-aos="fade-up" data-aos-duration="1500" 
                onClick={this.addToCalendar}>Add to calender</button>
                <p data-aos="fade-up" data-aos-duration="1500">Kediaman Mempelai Wanita</p>
                <div className="location" data-aos="fade-up" data-aos-duration="1500">
                    <p>Jl. Remaja, Ceger, Kec. Cipayung, Kota Jakarta Timur</p>
                    <button onClick={this.openMap}>Open Map</button>
                </div>
            </section>
        );
    }
}

export default Agenda;