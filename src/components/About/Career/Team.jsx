import React, { useState } from "react";
import { Modal } from "antd";
import img1 from "../../../assets/About/director.webp";
import "./Team.scss";
function Team() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="Team">
      <Modal
        title=""
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        // cancelButtonProps={{ style: { display: "none" } }}
        onCancel={() => setVisible(false)}
        width={600}
      >
        <div className="this_director">
          <div className="this_director_img">
            <img src={img1} alt="director" />
            <h5>Bosh direktor</h5>
            <h1>Andrey Safronyuk</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptates, at architecto temporibus reprehenderit veniam
              repudiandae laudantium sint doloribus voluptatibus odit. Adipisci
              non perferendis neque, asperiores nemo velit recusandae soluta
              qui! Officiis harum iure alias qui repudiandae vel quisquam, sequi
              perferendis nobis, eius adipisci a. Delectus consequatur et
              praesentium dignissimos accusantium. Laudantium quis ad quo enim
              repellat non, pariatur reprehenderit tenetur possimus culpa omnis
              deserunt dolorem quos voluptate deleniti corporis expedita
              sapiente perspiciatis fuga! Cum placeat omnis dolorem debitis
              illum delectus repudiandae pariatur laudantium rem vel deserunt
              architecto vitae recusandae, aperiam nulla sed id obcaecati totam
              consequatur? Aliquid aliquam dolorum asperiores alias quae minima
              deserunt, dolorem, ratione nemo inventore ducimus velit culpa enim
              nisi tempora praesentium cupiditate nulla. Esse, ullam minima
              blanditiis maxime quisquam vel quia, laboriosam minus sit dolorem
              molestiae fugiat soluta ducimus iste sint. Illo omnis assumenda
              accusantium nulla. Cupiditate quas, ab pariatur sint fugiat rem
              nihil laboriosam facere suscipit ad enim. Velit nemo asperiores
              illum quod pariatur quam, soluta cum, ratione quibusdam, sapiente
              recusandae voluptatibus at vel beatae molestias in delectus nobis!
              Ad quod omnis atque hic culpa a ab architecto eos ratione
              recusandae optio commodi quam quaerat harum est illo amet non
              beatae, aliquid voluptatem illum temporibus?
            </p>
          </div>
        </div>
      </Modal>
      <div className="main_top">
        <div className="wrapper">
          <div className="content container">
            <h1>Muvaffaqiyat professional jamoaga bog'liq</h1>
          </div>
        </div>
      </div>
      <div className="main_content">
        <div className="members">
          <div className="container">
            <div className="mycol">
              <img src={img1} alt="directors" />
              <div className="about">
                <h3>Andrey Safronyuk</h3>
                <p>Bosh direktor</p>
                <button onClick={() => setVisible(true)}>Bosing</button>
              </div>
            </div>
            <div className="mycol">
              <img src={img1} alt="directors" />
              <div className="about">
                <h3>Andrey Safronyuk</h3>
                <p>Bosh direktor</p>
                <button>Bosing</button>
              </div>
            </div>
            <div className="mycol">
              <img src={img1} alt="directors" />
              <div className="about">
                <h3>Andrey Safronyuk</h3>
                <p>Bosh direktor</p>
                <button>Bosing</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
