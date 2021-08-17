function ExperienceCv(props) {
  return (
    <div className="experience-cv-container">
      <div className="job-info">
        <h2>Company Name:</h2>
        <h2>Position Title:</h2>
      </div>
      <h2 className="experience-cv-date">
        <p>dateFrom - dateTo</p>
      </h2>
      <div className="main-task-cv-container">
        <h2 className="main-task-cv">Main Tasks</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi sint
          ratione perferendis nam deleniti placeat explicabo minima cupiditate
          error a officiis aperiam iusto sapiente accusantium quisquam, ad,
          magni maiores omnis quibusdam dolorum laborum cum. Fuga tempora, sed
          nulla reiciendis quasi aliquam vero amet, ipsum quae odio distinctio.
          Dolores pariatur quia accusantium totam natus? Dolore nisi a iusto
          asperiores vitae dignissimos assumenda corrupti eligendi, in, velit
          est totam voluptates obcaecati aspernatur minima earum alias fugit
          incidunt nemo animi nostrum, eveniet quos repudiandae? Labore mollitia
          voluptates explicabo! Inventore, autem quibusdam doloremque obcaecati
          vel atque veritatis neque beatae unde qui voluptatibus a placeat.
        </p>
      </div>
      <div className="test"></div>
    </div>
  );
}

export default ExperienceCv;
{
  /* <div className="experience-cv-container">
<div className="job-info">
  <h2>Company Name:{props.experienceData.companyName}</h2>
  <h2>Position Title:{props.experienceData.positionTitle}</h2>
</div>
<h2 className="experience-cv-date">
  {props.experienceData.fromDate}-{props.experienceData.toDate}
</h2>
<div className="main-task-cv-container">
  <h2 className="main-task-cv">Main Tasks</h2>
  <p>{props.experienceData.mainTask}</p>
</div>
<div className="test"></div>
</div> */
}
