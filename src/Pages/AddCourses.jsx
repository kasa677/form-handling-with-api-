import React from 'react'

function AddCourses() {
  return (
    <>
    <h1 className='text-center text-primary'>AddCoursesSomeImage</h1>
    <hr/>
   <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://media.istockphoto.com/photos/father-and-daughter-drive-golf-cart-on-scenic-idyllic-golf-course-a-picture-id1353067857?s=612x612" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://media.istockphoto.com/photos/young-caucasian-blonde-female-manager-teaching-colleagues-about-swot-picture-id1309080507" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </>
  )
}

export default AddCourses;