import experienceData from "../experienceData";

function ExperienceCards() {
  return (
    <div>
      
      {experienceData.map((data) => (
       <div class="card mb-3 cards" style={{maxWwidth: "540px;"}}>
       <div class="row no-gutters">
         <div class="col-md-4 card-info">
           <p class="card-text"><small class="text-muted date">{data.date}</small></p>
           <h5 class="card-title designation">{data.designation}</h5>
           <p className="location">{data.location}</p>
           {/* <img src="..." class="card-img" alt="..."/> */}
         </div>
         <div class="col-md-8">
           <div class="card-body">
             {/* <h5 class="card-title">Card title</h5> */}
             <p class="card-text description">{data.description}</p>
           </div>
         </div>
       </div>
     </div>
      ))}

    </div>
  );
}

export default ExperienceCards;
