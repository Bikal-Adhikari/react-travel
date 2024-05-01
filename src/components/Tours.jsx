import Title from "./Title";

const Tours = ({ datas }) => {
  return (
    <section className="section" id="tours">
      <Title title=" featured " subTitle="tours" />

      <div className="section-center featured-center">
        {datas &&
          datas?.map((tour) => {
            const {
              _id,
              name,
              info,
              image,
              price,
              duration,
              highlights,
              includes,
            } = tour;
            return (
              <article className="tour-card" key={_id}>
                <div className="tour-img-container">
                  <img src={image} className="tour-img" alt="" />
                  <p className="tour-date">{name}</p>
                </div>
                <div className="tour-info">
                  <div className="tour-title">
                    <h4>{info}</h4>
                  </div>
                  <p>{price}</p>
                  <div className="tour-footer">
                    <p>
                      <span>
                        <i className="fas fa-map"></i>
                      </span>
                      {highlights}
                    </p>
                    <p>{duration} days</p>
                    <p>from ${includes}</p>
                  </div>
                </div>
              </article>
            );
          })}
      </div>
    </section>
  );
};

export default Tours;
