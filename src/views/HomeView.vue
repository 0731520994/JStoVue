<template>
  <div>
    <div class="img">
      <img src="https://i.postimg.cc/GtjNJWhQ/Pink-jacket-background-2.png" alt="Background" loading="lazy">
      <h1 class="front">Your🔌 to the latest trending 👶 kiddies jackets...</h1>
    </div>
  </div>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Connect with us</button>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">New message</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form action="https://formspree.io/f/xoqzglwz" method="POST">
              <label>
                Your names:
                <input type="name" name="name">
              </label>
              <label>
                Your email:
                <input type="email" name="email">
              </label>
              <label>
                Your message:
                <textarea name="message"></textarea>
              </label>
              <button type="submit">Send</button>
            </form>

            <head>About Us</head>
            <h6>Jay Store is an online store selling fashionable, high-quality, and affordable kiddies jackets.</h6>
            <span>We understand that shopping for babies is not an easy task, but at Jay store we provide a helping hand to the parents with jackets made with love. 🤗😍</span>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div class="container">
      <div class="row" id="featured">
        <div class="col col-12 justify-content-center align-items-center">
          <h1 id="feature">Featured...</h1>
          <p id="feature1">Check out our <span>winter</span> featured products this season</p>
        </div>
      </div>
    </div>
      <div class="col">
        <div class="card" style="width: 18rem;">
          <img src="https://i.postimg.cc/cJPFQT69/barbie-girls-barbie-fleece-removebg-preview-2-4.png" class="card-img-top" alt="jacket">
          <div class="card-body">
            <h5 class="card-title">💓Babie jacket</h5>
            <p class="card-text">250</p>
            <select class="jacket">
              <option>select size</option>
              <option value="size">2-3yrs</option>
              <option value="size">3-4yrs</option>
              <option value="size">4-5yrs</option>
              <option value="size">5-6yrs</option>
              <option value="size">7-8yrs</option>
              <option value="size">S</option>
              <option value="size">M</option>
              <option value="size">L</option>
            </select>
            <button>See more</button>
          </div>
        </div>
      </div>
      
</template>

<script>
export default {
}
</script>

<style scoped>


.img {
  position: relative; 
  width: 100%;
  padding-top: 3%;
  justify-self: center;
  background-size:5%;
  background-position: center;
  background-repeat: no-repeat;
}

.img img {
  width: 100%;
  height: -20

 
 
 
}

.h1 {
  justify-content: center;
  font-size:xxx-large;
  text-align: center;
  text-decoration: underline hotpink;
  text-shadow: 3px 6px 12px rgba(0, 0, 0, 0.5);
}


.front,
.text-overlay {
  position:absolute;
  top: 23rem;
  left: 30rem;
  color: rgb(42, 41, 41);
  font-weight: bold;
  text-shadow: 16px 2px 6px hotpink;
  font-family:Gloria Hallelujah;
  

}


.button.btn-primary {
  position: absolute;
  top: 20%;
  left: 23%;

}


</style>
