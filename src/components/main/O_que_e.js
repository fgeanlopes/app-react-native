import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

import appAndroid from "../image/app_chama_no_zap.png";

const LInkPlaystore =
  "https://play.google.com/store/apps/details?id=com.unidesenvlvimento.chamanozap&hl=pt_BR";

export default class Por_que extends React.Component {
  render() {
    return (
      <div className="box_2" id="oquee">
        <div className="flex">
          <div className="item box_description" data-aos="fade-up">
            <h2 className="global_title">O que é </h2>
            <p className="global_description">
              Chama no Zap! É um aplicativo que tem a missão de facilitar o
              inicio de novas conversa no WhatsApp. Com este aplicativo, você
              não precisa salvar o números da pessoa ou empresa para começar a
              conversa.
            </p>
            <Router>
              <Link to={{ pathname: LInkPlaystore }} target="_blank">
                <div className="btn_download">
                  <svg
                    width="235"
                    height="256"
                    viewBox="0 0 235 256"
                    xmlns="http://www.w3.org/2000/svg"
                    alt="Download do aplicativo, Chama no Zap!"
                  >
                    <path
                      d="M1.00044 229.237V229.232L1.00046 26.7775L1.00043 26.7719C0.956812 19.0189 4.41555 11.6766 10.3838 6.77608L134.038 127.898L10.3832 249.232C4.41515 244.331 0.955887 236.99 1.00044 229.237Z"
                      stroke="black"
                      stroke-width="2"
                    />
                    <path
                      d="M234.166 127.899C234.167 137.427 229.051 146.22 220.769 150.929C220.768 150.929 220.767 150.929 220.766 150.93L181.844 172.507L136.182 127.897L181.841 83.2894L220.766 105.079C220.767 105.079 220.767 105.079 220.767 105.079C228.998 109.738 234.11 118.442 234.166 127.899Z"
                      stroke="black"
                    />
                    <path
                      d="M26.4477 254.898L26.4406 254.898L26.4334 254.898C21.9599 254.983 17.5572 253.775 13.7517 251.42L13.7288 251.406L13.7052 251.393C13.1385 251.083 12.5817 250.756 12.0359 250.411L135.468 129.297L180.103 172.904L38.7755 251.818C34.9736 253.821 30.7448 254.877 26.4477 254.898Z"
                      stroke="black"
                      stroke-width="2"
                    />
                    <path
                      d="M180.102 82.8929L135.467 126.499L12.038 5.59681C12.5837 5.25199 13.1399 4.92448 13.7061 4.61491L13.7256 4.60424L13.7447 4.59271C21.4002 -0.0463562 30.96 -0.203052 38.7635 4.18226L38.7669 4.18413L180.102 82.8929Z"
                      stroke="black"
                      stroke-width="2"
                    />
                  </svg>
                  <p>Instalar APlicativo</p>
                </div>
              </Link>
            </Router>
          </div>
          <div className="item appChamaNoZap" data-aos="fade-up">
            <img src={appAndroid} alt="Foto do aplicativo, Chama no Zap!"></img>
          </div>
        </div>
      </div>
    );
  }
}
