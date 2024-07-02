import React from "react";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { cards, projects } from "../../data";

function Home() {
  return (
    <div className="home">
      
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
      <div className="features bg-f1fdf7">
        <div className="container">
          <div className="flex items-center gap-20">
            <div className="flex-2">
              <h1>A whole world of freelance talent at your fingertips</h1>
              <div className="title flex items-center gap-2">
                <img src="./img/check.png" alt="" />
                The best for every budget
              </div>
              <p>
                Find high-quality services at every price point. No hourly
                rates, just project-based pricing.
              </p>
              <div className="title flex items-center gap-2">
                <img src="./img/check.png" alt="" />
                Quality work done quickly
              </div>
              <p>
                Find the right freelancer to begin working on your project
                within minutes.
              </p>
              <div className="title flex items-center gap-2">
                <img src="./img/check.png" alt="" />
                Protected payments, every time
              </div>
              <p>
                Always know what you'll pay upfront. Your payment isn't
                released until you approve the work.
              </p>
              <div className="title flex items-center gap-2">
                <img src="./img/check.png" alt="" />
                24/7 support
              </div>
              <p>
                Find high-quality services at every price point. No hourly
                rates, just project-based pricing.
              </p>
            </div>
            <div className="flex-3">
              <video src="./img/video.mp4" controls />
            </div>
          </div>
        </div>
      </div>
      <div className="explore">
        <div className="container">
          <h1>Explore the marketplace</h1>
          <div className="items grid grid-cols-4 gap-10">
            {/* Your explore items */}
          </div>
        </div>
      </div>
      <div className="features dark bg-0d084d">
        <div className="container">
          <div className="flex items-center gap-20">
            <div className="flex-2">
              <h1>
                liverr <i>business</i>
              </h1>
              <h1>
                A business solution designed for <i>teams</i>
              </h1>
              <p>
                Upgrade to a curated experience packed with tools and benefits,
                dedicated to businesses
              </p>
              <div className="title flex items-center gap-2">
                <img src="./img/check.png" alt="" />
                Connect to freelancers with proven business experience
              </div>
              <div className="title flex items-center gap-2">
                <img src="./img/check.png" alt="" />
                Get matched with the perfect talent by a customer success
                manager
              </div>
              <div className="title flex items-center gap-2">
                <img src="./img/check.png" alt="" />
                Manage teamwork and boost productivity with one powerful
                workspace
              </div>
              <button>Explore Liverr Business</button>
            </div>
            <div className="flex-3">
              <img
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Slide>
    </div>
  );
}

export default Home;
